(() => {
  "use strict";

  const LOCALES = ["pt-BR", "en", "es"];
  const STORAGE_KEY = "silencer-site-content-v1";
  const SESSION_KEY = "silencer-admin-session";
  const TEST_PASSWORD = "moly@2026";
  const DEFAULT_LINKS = {
    promoVideo: "https://vimeo.com/reviews/47180b44-225c-4088-9c4a-6af5d135610f/videos/1194527647",
    testimonialVideo: "https://vimeo.com/reviews/6d48b6da-e792-4de2-b745-8a9987dc94cf/videos/1195828658",
    careers: "/trabalhe-conosco.html",
  };

  const sections = [
    {
      title: "Destaque inicial",
      note: "Primeira mensagem e proposta central do produto.",
      fields: [
        { key: "hero.title", label: "Título principal", rich: true, wide: true },
        { key: "hero.lead", label: "Texto de apresentação", long: true, wide: true },
      ],
    },
    {
      title: "Diferenciais",
      note: "Argumentos de engenharia e benefícios do manejo.",
      fields: [
        { key: "differentials.title", label: "Título da seção", rich: true, wide: true },
        { key: "differentials.lead", label: "Introdução", long: true, wide: true },
        { key: "differentials.noiseText", label: "Operação com menos ruído", long: true },
        { key: "differentials.flowText", label: "Fluxo contínuo", long: true },
        { key: "differentials.hydraulicText", label: "Contenção progressiva", long: true },
        { key: "differentials.accessText", label: "Acesso funcional", long: true },
      ],
    },
    {
      title: "Modelos",
      note: "Introdução e resumo comercial do Pró e Compacto.",
      fields: [
        { key: "models.title", label: "Título da seção", rich: true, wide: true },
        { key: "models.lead", label: "Introdução", long: true, wide: true },
        { key: "models.proSummary", label: "Resumo do Pró", long: true },
        { key: "models.compactSummary", label: "Resumo do Compacto", long: true },
      ],
    },
    {
      title: "Comparativo técnico",
      note: "Contexto editorial da tabela entre os modelos.",
      fields: [
        { key: "comparison.title", label: "Título do comparativo", wide: true },
        { key: "comparison.lead", label: "Introdução do comparativo", long: true, wide: true },
        { key: "comparison.note", label: "Observação técnica", long: true, wide: true },
      ],
    },
    {
      title: "Apartador",
      note: "Apresentação comercial do módulo de direcionamento.",
      fields: [
        { key: "sorter.title", label: "Título da seção", rich: true, wide: true },
        { key: "sorter.lead", label: "Introdução", long: true, wide: true },
        { key: "sorter.routeText", label: "Resumo das vias", long: true },
        { key: "sorter.expandText", label: "Resumo da expansão", long: true },
        { key: "sorter.integratedText", label: "Resumo da integração", long: true },
      ],
    },
    {
      title: "Ficha técnica",
      note: "Contexto da planta e orientação de instalação.",
      fields: [
        { key: "technical.title", label: "Título da seção", rich: true, wide: true },
        { key: "technical.lead", label: "Texto introdutório", long: true, wide: true },
      ],
    },
    {
      title: "Filme promocional",
      note: "Mensagem que apresenta o conteúdo em destaque.",
      fields: [
        { key: "stories.promoHeading", label: "Título promocional", rich: true, wide: true },
        { key: "stories.promoLead", label: "Apresentação do filme", long: true, wide: true },
        { key: "stories.promoTitle", label: "Chamada sobre o vídeo", long: true, wide: true },
      ],
    },
    {
      title: "Depoimentos",
      note: "Introdução, depoimento principal e espaço futuro.",
      fields: [
        { key: "stories.title", label: "Título da seção", rich: true, wide: true },
        { key: "stories.lead", label: "Introdução", long: true, wide: true },
        { key: "stories.testimonialTitle", label: "Título do depoimento" },
        { key: "stories.testimonialText", label: "Resumo do depoimento", long: true },
        { key: "stories.futureTitle", label: "Título de próximos relatos" },
        { key: "stories.futureText", label: "Texto de próximos relatos", long: true },
      ],
    },
    {
      title: "Solicitação de projeto",
      note: "Mensagem que antecede o formulário comercial.",
      fields: [
        { key: "contact.title", label: "Título de contato", rich: true, wide: true },
        { key: "contact.lead", label: "Texto de contato", long: true, wide: true },
      ],
    },
    {
      title: "Trabalhe conosco",
      note: "Conteúdo principal da página de representantes e distribuidores.",
      fields: [
        { key: "careers.title", label: "Título de abertura", rich: true, wide: true },
        { key: "careers.lead", label: "Texto de abertura", long: true, wide: true },
        { key: "careers.profileTitle", label: "Título dos perfis", rich: true },
        { key: "careers.profileLead", label: "Introdução dos perfis", long: true },
        { key: "careers.processTitle", label: "Título do processo", rich: true },
        { key: "careers.processLead", label: "Introdução do processo", long: true },
        { key: "careers.formTitle", label: "Título do formulário", rich: true },
        { key: "careers.formLead", label: "Introdução do formulário", long: true },
      ],
    },
  ];

  const allFields = sections.flatMap((section) => section.fields);
  const loginView = document.querySelector("[data-login-view]");
  const workspace = document.querySelector("[data-workspace]");
  const loginForm = document.querySelector("[data-login-form]");
  const loginStatus = document.querySelector("[data-login-status]");
  const workspaceStatus = document.querySelector("[data-workspace-status]");
  const fieldsRoot = document.querySelector("[data-fields]");
  const saveState = document.querySelector("[data-save-state]");
  const footerState = document.querySelector("[data-footer-state]");
  const updatedAt = document.querySelector("[data-updated-at]");
  const storageNotice = document.querySelector("[data-storage-notice]");

  let locale = "pt-BR";
  let baseline = {};
  let draft = {};
  let links = { ...DEFAULT_LINKS };
  let dirty = false;

  const titleToEditor = (value = "") =>
    value
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<em>(.*?)<\/em>/gi, "*$1*")
      .replace(/<[^>]+>/g, "")
      .trim();

  const editorToTitle = (value = "") => {
    const escaped = value
      .trim()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return escaped
      .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  };

  const setStatus = (element, message = "", success = false) => {
    element.textContent = message;
    element.classList.toggle("is-success", success);
  };

  const markDirty = () => {
    dirty = true;
    saveState.textContent = "Alterações pendentes";
    saveState.classList.add("is-dirty");
    footerState.textContent = "Há alterações ainda não publicadas";
  };

  const markSaved = () => {
    dirty = false;
    saveState.textContent = "Tudo publicado";
    saveState.classList.remove("is-dirty");
    footerState.textContent = "Nenhuma alteração pendente";
  };

  const buildBaseline = () => {
    baseline = Object.fromEntries(
      LOCALES.map((language) => [
        language,
        Object.fromEntries(
          allFields.map(({ key, rich }) => {
            const value = window.MolyI18n.getForLocale(language, key);
            return [key, rich ? titleToEditor(value) : value];
          }),
        ),
      ]),
    );
  };

  const mergeContent = (content = {}) => {
    draft = structuredClone(baseline);
    LOCALES.forEach((language) => {
      Object.entries(content.locales?.[language] || {}).forEach(([key, value]) => {
        const field = allFields.find((item) => item.key === key);
        if (field) draft[language][key] = field.rich ? titleToEditor(value) : value;
      });
    });
    links = { ...DEFAULT_LINKS, ...(content.links || {}) };
  };

  const syncVisibleFields = () => {
    fieldsRoot.querySelectorAll("[data-content-field]").forEach((input) => {
      draft[locale][input.dataset.contentField] = input.value.trim();
    });
    document.querySelectorAll("[data-link-field]").forEach((input) => {
      links[input.dataset.linkField] = input.value.trim();
    });
  };

  const renderFields = () => {
    fieldsRoot.innerHTML = "";
    sections.forEach((section, index) => {
      const wrapper = document.createElement("section");
      wrapper.className = "editor-section";

      const heading = document.createElement("div");
      heading.className = "editor-section__heading";
      heading.innerHTML = `
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${section.title}</h3>
        <p>${section.note}</p>
      `;

      const grid = document.createElement("div");
      grid.className = "editor-section__fields";
      section.fields.forEach((field) => {
        const label = document.createElement("label");
        label.className = `editor-field${field.wide ? " editor-field--wide" : ""}`;

        const name = document.createElement("span");
        name.textContent = field.label;
        const hint = document.createElement("small");
        hint.textContent = field.rich
          ? "Use *asteriscos* para o destaque e Enter para quebra de linha."
          : "Texto simples, sem código HTML.";
        const input = document.createElement(field.long || field.rich ? "textarea" : "input");
        input.dataset.contentField = field.key;
        input.value = draft[locale][field.key] || "";
        input.required = true;
        input.maxLength = 1200;
        input.rows = field.rich ? 3 : 4;
        input.addEventListener("input", () => {
          draft[locale][field.key] = input.value;
          markDirty();
        });
        label.append(name, hint, input);
        grid.append(label);
      });

      wrapper.append(heading, grid);
      fieldsRoot.append(wrapper);
    });

    document.querySelectorAll("[data-link-field]").forEach((input) => {
      input.value = links[input.dataset.linkField] || "";
    });
  };

  const setLocale = (nextLocale) => {
    syncVisibleFields();
    locale = nextLocale;
    document.querySelectorAll("[data-admin-locale]").forEach((tab) => {
      tab.setAttribute("aria-selected", String(tab.dataset.adminLocale === locale));
    });
    renderFields();
  };

  const serialize = () => {
    syncVisibleFields();
    return {
      locales: Object.fromEntries(
        LOCALES.map((language) => [
          language,
          Object.fromEntries(
            allFields.map((field) => [
              field.key,
              field.rich ? editorToTitle(draft[language][field.key]) : draft[language][field.key].trim(),
            ]),
          ),
        ]),
      ),
      links,
    };
  };

  const showWorkspace = (content = {}) => {
    document.body.classList.add("is-authenticated");
    mergeContent(content);
    renderFields();
    storageNotice.hidden = false;
    loginView.hidden = true;
    workspace.hidden = false;
    const timestamp = content.updatedAt;
    updatedAt.textContent = timestamp
      ? `Última publicação: ${new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp))}`
      : "Conteúdo padrão do projeto";
    markSaved();
  };

  const loadAdmin = () => {
    if (sessionStorage.getItem(SESSION_KEY) !== "active") {
      document.body.classList.remove("is-authenticated");
      loginView.hidden = false;
      workspace.hidden = true;
      return;
    }
    let content = {};
    try {
      content = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    showWorkspace(content);
  };

  const save = () => {
    if (!document.querySelector("[data-editor-form]").reportValidity()) return;
    setStatus(workspaceStatus, "Salvando neste navegador...");
    const content = { ...serialize(), updatedAt: new Date().toISOString(), storage: "local" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    mergeContent(content);
    renderFields();
    updatedAt.textContent = `Último salvamento local: ${new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(content.updatedAt))}`;
    markSaved();
    setStatus(workspaceStatus, "Alterações salvas neste navegador. Abra ou recarregue o site para visualizar.", true);
  };

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setStatus(loginStatus, "Validando acesso...");
    const button = loginForm.querySelector('button[type="submit"]');
    button.disabled = true;
    window.setTimeout(() => {
      if (loginForm.elements.password.value === TEST_PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, "active");
        loginForm.reset();
        setStatus(loginStatus);
        loadAdmin();
      } else {
        setStatus(loginStatus, "Senha incorreta.");
      }
      button.disabled = false;
    }, 220);
  });

  document.querySelector("[data-toggle-password]").addEventListener("click", (event) => {
    const input = loginForm.elements.password;
    const visible = input.type === "text";
    input.type = visible ? "password" : "text";
    event.currentTarget.textContent = visible ? "Mostrar" : "Ocultar";
    event.currentTarget.setAttribute("aria-label", visible ? "Mostrar senha" : "Ocultar senha");
  });

  document.querySelectorAll("[data-admin-locale]").forEach((tab) => {
    tab.addEventListener("click", () => setLocale(tab.dataset.adminLocale));
  });

  document.querySelectorAll("[data-save]").forEach((button) => {
    button.addEventListener("click", save);
  });

  document.querySelector("[data-editor-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    save();
  });

  document.querySelector("[data-reset]").addEventListener("click", () => {
    if (!window.confirm("Restaurar os textos e links desta versão antes de publicar?")) return;
    draft = structuredClone(baseline);
    links = { ...DEFAULT_LINKS };
    renderFields();
    markDirty();
    setStatus(workspaceStatus, "Textos restaurados no editor. Publique para aplicar ao site.");
  });

  document.querySelector("[data-logout]").addEventListener("click", () => {
    if (dirty && !window.confirm("Há alterações não publicadas. Deseja sair mesmo assim?")) return;
    sessionStorage.removeItem(SESSION_KEY);
    document.body.classList.remove("is-authenticated");
    workspace.hidden = true;
    loginView.hidden = false;
  });

  document.querySelectorAll("[data-link-field]").forEach((input) => {
    input.addEventListener("input", () => {
      links[input.dataset.linkField] = input.value;
      markDirty();
    });
  });

  window.addEventListener("beforeunload", (event) => {
    if (!dirty) return;
    event.preventDefault();
  });

  buildBaseline();
  loadAdmin();
})();
