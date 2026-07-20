(() => {
  "use strict";

  const root = document.documentElement;
  const header = document.querySelector("[data-header]");
  const menu = document.querySelector("[data-menu]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const progress = document.querySelector("[data-scroll-progress]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const t = (key) => window.MolyI18n?.get?.(key) || key;

  const resetReloadPosition = () => {
    if (!window.__MOLY_PAGE_RELOAD__) return;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      root.style.removeProperty("scroll-behavior");
    });
  };

  resetReloadPosition();
  window.addEventListener("load", resetReloadPosition, { once: true });
  window.addEventListener("pageshow", resetReloadPosition);

  document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());

  const closeMenu = () => {
    if (!menu || !menuToggle) return;
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector("[data-menu-label]").textContent = t("a11y.openMenu");
    document.body.classList.remove("menu-open");
  };

  menuToggle?.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.querySelector("[data-menu-label]").textContent = willOpen
      ? t("a11y.closeMenu")
      : t("a11y.openMenu");
    menu?.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  menu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 820) closeMenu();
    },
    { passive: true },
  );

  const updateScrollProgress = () => {
    if (!progress) return;
    const scrollable = root.scrollHeight - window.innerHeight;
    const value = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    progress.style.transform = `scaleX(${value})`;
  };

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  const navLinks = [...document.querySelectorAll(".main-nav a[href^='#']")];
  const observedSections = [
    document.querySelector("#inicio"),
    ...navLinks.map((link) => document.querySelector(link.getAttribute("href"))),
  ].filter(Boolean);

  if ("IntersectionObserver" in window && observedSections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.hash === `#${visible.target.id}`);
        });
      },
      { rootMargin: "-28% 0px -60% 0px", threshold: [0, 0.2, 0.6] },
    );
    observedSections.forEach((section) => sectionObserver.observe(section));
  }

  const counterSuffix = (counter) =>
    counter.dataset.suffixKey ? t(counter.dataset.suffixKey) : counter.dataset.suffix || "";

  const formatCounter = (value, decimals, suffix) =>
    `${new Intl.NumberFormat(window.MolyI18n?.getIntlLocale?.() || "pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value)}${suffix}`;

  const counters = [...document.querySelectorAll("[data-counter]")];
  const setCountersToFinalValue = () => {
    counters.forEach((counter) => {
      const target = Number(counter.dataset.counter);
      const decimals = Number(counter.dataset.decimals || 0);
      counter.textContent = formatCounter(target, decimals, counterSuffix(counter));
    });
  };

  setCountersToFinalValue();

  window.addEventListener("moly:localechange", () => {
    setCountersToFinalValue();
    if (menuToggle?.getAttribute("aria-expanded") !== "true") {
      menuToggle.querySelector("[data-menu-label]").textContent = t("a11y.openMenu");
    }
  });

  const mobileProjectCta = document.querySelector(".mobile-project-cta");
  const heroSection = document.querySelector(".hero");
  if (mobileProjectCta && heroSection && "IntersectionObserver" in window) {
    const mobileCtaObserver = new IntersectionObserver(
      ([entry]) => mobileProjectCta.classList.toggle("is-visible", !entry.isIntersecting),
      { threshold: 0.08 },
    );
    mobileCtaObserver.observe(heroSection);
  }

  const projectForm = document.querySelector("[data-project-form]");
  const formStatus = projectForm?.querySelector("[data-form-status]");
  const formFields = projectForm
    ? [...projectForm.querySelectorAll("input[required], input[type='email'], select[required], textarea[required]")]
    : [];

  document.querySelectorAll("[data-model-choice]").forEach((link) => {
    link.addEventListener("click", () => {
      const modelSelect = projectForm?.querySelector("[name='modelo']");
      if (!modelSelect) return;
      modelSelect.value = link.dataset.modelChoice;
      modelSelect.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

  const updateFieldState = (field) => {
    const valid = field.validity.valid;
    field.closest(".field, .consent")?.classList.toggle("is-invalid", !valid);
    return valid;
  };

  formFields.forEach((field) => {
    field.addEventListener("input", () => {
      updateFieldState(field);
      if (formStatus) formStatus.textContent = "";
    });
    field.addEventListener("change", () => updateFieldState(field));
  });

  projectForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (projectForm.website?.value) return;

    const validFields = formFields.map(updateFieldState).every(Boolean);
    const consent = projectForm.querySelector('[name="consentimento"]');
    if (!validFields) {
      const email = projectForm.querySelector('[type="email"]');
      const invalidNonConsent = formFields.filter(
        (field) => field !== consent && !field.validity.valid,
      );
      formStatus.textContent = invalidNonConsent.length
        ? email?.validity.typeMismatch
          ? t("form.emailError")
          : t("form.requiredError")
        : t("form.consentError");
      formStatus.classList.add("is-error");
      formFields.find((field) => !field.validity.valid)?.focus();
      return;
    }

    formStatus.classList.remove("is-error");
    formStatus.textContent = t("form.readyMessage");
  });

  window.addEventListener("moly:localechange", () => {
    if (formStatus) {
      formStatus.textContent = "";
      formStatus.classList.remove("is-error");
    }
  });

  const drawingDialog = document.querySelector("[data-drawing-dialog]");
  document.querySelector("[data-drawing-open]")?.addEventListener("click", () => {
    drawingDialog?.showModal();
  });
  document.querySelector("[data-drawing-close]")?.addEventListener("click", () => {
    drawingDialog?.close();
  });
  drawingDialog?.addEventListener("click", (event) => {
    if (event.target === drawingDialog) drawingDialog.close();
  });

  if (reduceMotion || !window.gsap || !window.ScrollTrigger) {
    setCountersToFinalValue();
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTimeline
    .from(".hero .eyebrow", { y: 22, autoAlpha: 0, duration: 0.6 })
    .from(".hero__edition", { y: 18, autoAlpha: 0, duration: 0.5 }, "-=0.35")
    .from(".hero h1", { y: 52, autoAlpha: 0, duration: 0.9 }, "-=0.25")
    .from(".hero__lead", { y: 28, autoAlpha: 0, duration: 0.65 }, "-=0.5")
    .from(".hero__actions", { y: 22, autoAlpha: 0, duration: 0.55 }, "-=0.4")
    .from(".hero__proofs li", { y: 12, autoAlpha: 0, stagger: 0.08, duration: 0.4 }, "-=0.3")
    .from(
      ".hero-product > img",
      { x: 60, scale: 0.94, autoAlpha: 0, duration: 1.05 },
      0.15,
    )
    .from(
      ".hero-product__measure, .hero-product figcaption",
      { autoAlpha: 0, duration: 0.55, stagger: 0.1 },
      0.72,
    )
    .from(".metric-rail > div", { y: 34, autoAlpha: 0, stagger: 0.08, duration: 0.55 }, 0.8);

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      y: 46,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
        once: true,
      },
    });
  });

  const benefitCards = gsap.utils.toArray(".benefit-grid article");
  if (benefitCards.length) {
    gsap.from(benefitCards, {
      y: 44,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.11,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "[data-benefit-grid]",
        start: "top 80%",
        once: true,
      },
    });
  }

  const doorStage = document.querySelector("[data-door-stage]");
  if (doorStage) {
    gsap.fromTo(
      ".door--left",
      { xPercent: 0 },
      {
        xPercent: -94,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: doorStage,
          start: "top 72%",
          end: "top 30%",
          scrub: 0.8,
        },
      },
    );
    gsap.fromTo(
      ".door--right",
      { xPercent: 0 },
      {
        xPercent: 94,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: doorStage,
          start: "top 72%",
          end: "top 30%",
          scrub: 0.8,
        },
      },
    );
  }

  counters.forEach((counter) => {
    const target = Number(counter.dataset.counter);
    const decimals = Number(counter.dataset.decimals || 0);
    const state = { value: 0 };

    gsap.to(state, {
      value: target,
      duration: 1.25,
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 94%",
        once: true,
      },
      onUpdate: () => {
        counter.textContent = formatCounter(state.value, decimals, counterSuffix(counter));
      },
      onComplete: () => {
        counter.textContent = formatCounter(target, decimals, counterSuffix(counter));
      },
    });
  });

  const responsiveMotion = gsap.matchMedia();
  responsiveMotion.add("(min-width: 821px)", () => {
    gsap.utils.toArray("[data-parallax]").forEach((element) => {
      gsap.fromTo(
        element,
        { yPercent: -2 },
        {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
    });
  });

  ScrollTrigger.addEventListener("refresh", updateScrollProgress);
  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
})();
