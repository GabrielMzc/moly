(() => {
  "use strict";

  const STORAGE_KEY = "silencer-site-content-v1";

  const applyLinks = (links = {}) => {
    Object.entries(links).forEach(([key, href]) => {
      if (typeof href !== "string" || !href.trim()) return;
      document.querySelectorAll(`[data-admin-link="${key}"]`).forEach((link) => {
        link.setAttribute("href", href);
      });
      document.querySelectorAll(`[data-admin-video="${key}"]`).forEach((button) => {
        button.dataset.videoUrl = href;
      });
    });
  };

  const loadManagedContent = () => {
    try {
      const content = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!content) return;
      window.MolyI18n?.setOverrides?.(content.locales);
      applyLinks(content.links);
    } catch {
      // The bundled translations remain the fallback if local data is invalid.
    }
  };

  loadManagedContent();
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) window.location.reload();
  });
})();
