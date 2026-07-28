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
  const promoSection = document.querySelector("#video-promocional");
  if (mobileProjectCta && heroSection && "IntersectionObserver" in window) {
    let heroVisible = true;
    let promoVisible = false;
    const updateMobileCta = () =>
      mobileProjectCta.classList.toggle("is-visible", !heroVisible && !promoVisible);

    const mobileCtaObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        updateMobileCta();
      },
      { threshold: 0.08 },
    );
    mobileCtaObserver.observe(heroSection);

    if (promoSection) {
      const promoCtaObserver = new IntersectionObserver(
        ([entry]) => {
          promoVisible = entry.isIntersecting;
          updateMobileCta();
        },
        { threshold: 0.05 },
      );
      promoCtaObserver.observe(promoSection);
    }
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

  document.querySelectorAll("[data-partner-choice]").forEach((link) => {
    link.addEventListener("click", () => {
      const profileSelect = projectForm?.querySelector("[name='perfil']");
      if (!profileSelect) return;
      profileSelect.value = link.dataset.partnerChoice;
      profileSelect.dispatchEvent(new Event("change", { bubbles: true }));
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
    formStatus.textContent =
      document.documentElement.dataset.page === "careers"
        ? t("careers.readyMessage")
        : t("form.readyMessage");
  });

  window.addEventListener("moly:localechange", () => {
    if (formStatus) {
      formStatus.textContent = "";
      formStatus.classList.remove("is-error");
    }
  });

  const alignHashTarget = () => {
    if (window.__MOLY_PAGE_RELOAD__ || !window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ block: "start" });
  };

  const productTilt = document.querySelector("[data-product-tilt]");
  const productFrame = productTilt?.closest(".hero-product");
  if (productTilt && productFrame && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    productFrame.addEventListener("pointermove", (event) => {
      const bounds = productFrame.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      productTilt.style.setProperty("--tilt-x", `${2 - y * 5}deg`);
      productTilt.style.setProperty("--tilt-y", `${-7 + x * 8}deg`);
    });
    productFrame.addEventListener("pointerleave", () => {
      productTilt.style.removeProperty("--tilt-x");
      productTilt.style.removeProperty("--tilt-y");
    });
  }

  const drawingDialog = document.querySelector("[data-drawing-dialog]");
  const drawingOpen = document.querySelector("[data-drawing-open]");
  const drawingClose = document.querySelector("[data-drawing-close]");

  drawingOpen?.addEventListener("click", () => {
    if (typeof drawingDialog?.showModal === "function") {
      drawingDialog.showModal();
      drawingClose?.focus();
    }
  });
  drawingClose?.addEventListener("click", () => drawingDialog?.close());
  drawingDialog?.addEventListener("click", (event) => {
    if (event.target === drawingDialog) drawingDialog.close();
  });

  const videoDialog = document.querySelector("[data-video-dialog]");
  const videoFrame = videoDialog?.querySelector("[data-video-iframe]");
  const videoNative = videoDialog?.querySelector("[data-video-native]");
  const videoStage = videoDialog?.querySelector("[data-video-stage]");
  const videoTitle = videoDialog?.querySelector("[data-video-dialog-title]");
  const videoFallback = videoDialog?.querySelector("[data-video-fallback]");
  const videoClose = videoDialog?.querySelector("[data-video-close]");
  let activeVideoTitleKey = "";

  const getDirectVideoUrl = (rawUrl) => {
    if (!rawUrl) return "";
    try {
      const url = new URL(rawUrl, window.location.href);
      return /\.(mp4|webm)$/i.test(url.pathname) ? url.href : "";
    } catch {
      return "";
    }
  };

  const getVimeoEmbedUrl = (rawUrl) => {
    if (!rawUrl) return "";
    try {
      const url = new URL(rawUrl, window.location.href);
      if (url.hostname.endsWith("vimeo.com") && url.pathname.startsWith("/reviews/")) {
        return "";
      }
      const match =
        url.pathname.match(/\/videos?\/(\d+)(?:\/|$)/i) ||
        url.pathname.match(/\/(\d+)(?:\/|$)/);
      if (!match) return "";
      const params = new URLSearchParams({
        autoplay: "1",
        title: "0",
        byline: "0",
        portrait: "0",
        color: "f5bd18",
      });
      const privateHash = url.searchParams.get("h");
      if (privateHash) params.set("h", privateHash);
      return `https://player.vimeo.com/video/${match[1]}?${params}`;
    } catch {
      return "";
    }
  };

  const closeVideo = () => {
    if (videoFrame) videoFrame.src = "about:blank";
    if (videoNative) {
      videoNative.pause();
      videoNative.removeAttribute("src");
      videoNative.load();
    }
    videoDialog?.close();
  };

  document.querySelectorAll("[data-video-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const rawUrl = trigger.dataset.videoUrl;
      const directUrl = getDirectVideoUrl(rawUrl);
      const embedUrl = getVimeoEmbedUrl(rawUrl);
      if ((!directUrl && !embedUrl) || typeof videoDialog?.showModal !== "function") {
        if (rawUrl) window.open(rawUrl, "_blank", "noopener,noreferrer");
        return;
      }

      activeVideoTitleKey = trigger.dataset.videoTitleKey || "";
      if (videoTitle) videoTitle.textContent = t(activeVideoTitleKey);
      if (videoFallback) videoFallback.href = rawUrl;
      videoStage?.classList.toggle("is-portrait", trigger.dataset.videoOrientation === "portrait");

      if (directUrl) {
        if (videoFrame) {
          videoFrame.hidden = true;
          videoFrame.src = "about:blank";
        }
        if (videoNative) {
          videoNative.hidden = false;
          videoNative.src = directUrl;
          videoNative.load();
        }
      } else {
        if (videoNative) {
          videoNative.hidden = true;
          videoNative.removeAttribute("src");
        }
        if (videoFrame) {
          videoFrame.hidden = false;
          videoFrame.src = embedUrl;
        }
      }

      videoDialog.showModal();
      if (directUrl) videoNative?.play().catch(() => {});
      videoClose?.focus();
    });
  });

  videoClose?.addEventListener("click", closeVideo);
  videoDialog?.addEventListener("click", (event) => {
    if (event.target === videoDialog) closeVideo();
  });
  videoDialog?.addEventListener("close", () => {
    if (videoFrame) videoFrame.src = "about:blank";
    if (videoNative) {
      videoNative.pause();
      videoNative.removeAttribute("src");
      videoNative.load();
    }
  });
  window.addEventListener("moly:localechange", () => {
    if (videoTitle && activeVideoTitleKey) videoTitle.textContent = t(activeVideoTitleKey);
  });

  if (reduceMotion || !window.gsap || !window.ScrollTrigger) {
    setCountersToFinalValue();
    window.addEventListener("load", alignHashTarget, { once: true });
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
      ".hero-product__stage > img",
      { x: 60, scale: 0.94, autoAlpha: 0, duration: 1.05 },
      0.15,
    )
    .from(
      ".hero-product figcaption",
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
  window.addEventListener(
    "load",
    () => {
      alignHashTarget();
      ScrollTrigger.refresh();
      ScrollTrigger.update();
    },
    { once: true },
  );
})();
