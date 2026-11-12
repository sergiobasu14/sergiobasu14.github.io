/* Interacciones del sitio. Sin dependencias ni servidor de aplicación. */
(() => {
  const content = window.siteContent;
  const sectionIds = ["servicios", "proyectos", "trayectoria", "contacto"];
  const nav = document.querySelector("#navigation");
  const menuButton = document.querySelector(".menu-toggle");
  let language = "es";
  // La URL permite compartir un idioma; el almacenamiento recuerda la preferencia.
  try {
    const requested = new URLSearchParams(location.search).get("lang");
    language = ["es", "en"].includes(requested)
      ? requested
      : localStorage.getItem("language") === "en"
        ? "en"
        : "es";
  } catch {
    /* La preferencia guardada es opcional. */
  }

  function diagram(type) {
    const drawings = {
      planning:
        '<path d="M35 90H90M130 90H185M185 90V40H220M185 90H220M185 90V140H220"/><rect x="10" y="65" width="32" height="50" rx="3"/><path d="M18 78H34M18 86H34M18 94H30"/><rect class="diagram-fill" x="88" y="65" width="47" height="50" rx="12"/><path d="m111 77 4 10 10 3-10 4-4 10-4-10-10-4 10-3Z"/><rect x="220" y="23" width="32" height="32" rx="5"/><rect x="220" y="74" width="32" height="32" rx="5"/><rect x="220" y="125" width="32" height="32" rx="5"/><path d="M229 33H243M229 40H240M229 94V86M236 94V81M243 94V78M229 136H243M229 143H243"/>',
      retrieval:
        '<rect x="35" y="20" width="36" height="46" rx="3"/><rect x="115" y="20" width="36" height="46" rx="3"/><rect x="195" y="20" width="36" height="46" rx="3"/><path d="M44 33H62M44 41H62M44 49H58M124 33H142M124 41H142M124 49H138M204 33H222M204 41H222M204 49H218M53 75V88Q53 98 133 98M213 75V88Q213 98 133 98M133 75V113"/><rect class="diagram-fill" x="94" y="112" width="78" height="31" rx="15"/><path d="M133 143V157M111 159H157V183H126L116 190V183H111Z"/><circle cx="122" cy="170" r="1"/><circle cx="134" cy="170" r="1"/><circle cx="146" cy="170" r="1"/>',
      forecast:
        '<path d="M30 20V164H250"/><path class="diagram-area" d="M155 96 178 74 205 72 240 43V126L205 119 178 126 155 116Z"/><path d="m35 145 32-12 27 5 31-35 30 13"/><path stroke-dasharray="5 6" d="m155 116 23-18 27-3 35-15"/><circle cx="67" cy="133" r="3"/><circle cx="94" cy="138" r="3"/><circle cx="125" cy="103" r="3"/><circle cx="155" cy="116" r="3"/>',
      ontology:
        '<path d="M135 45V66M135 66 70 100M135 66V100M135 66 200 100M70 126V142L119 165M200 126V142L151 165"/><circle class="diagram-fill" cx="135" cy="30" r="18"/><circle class="diagram-fill" cx="70" cy="112" r="14"/><circle class="diagram-fill" cx="135" cy="112" r="14"/><circle class="diagram-fill" cx="200" cy="112" r="14"/><rect x="120" y="153" width="30" height="37" rx="3"/><path d="M126 163H144M126 170H144M126 177H138"/>',
    };
    return `<svg class="project-diagram" viewBox="0 0 270 210" fill="none" aria-hidden="true">${drawings[type]}</svg>`;
  }

  function setMenu(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector(".sr-only").textContent =
      content[language][open ? "closeMenu" : "menu"];
    nav.classList.toggle("is-open", open);
  }

  function render() {
    const t = content[language];
    // Conservar los casos abiertos al cambiar de idioma.
    const expanded = [...document.querySelectorAll(".case-details")].map(
      (item) => item.open,
    );
    document.documentElement.lang = language;
    document.title = t.title;
    document.querySelector('meta[name="description"]').content = t.description;
    document.querySelectorAll("[data-text]").forEach((el) => {
      el.textContent = t[el.dataset.text];
    });
    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.textContent = t.nav[el.dataset.nav];
    });
    document.querySelector("#hero-title").innerHTML =
      `${t.hero[0]}<br><span>${t.hero[1]}</span>`;
    nav.innerHTML = sectionIds
      .map((id, i) => `<a href="#${id}">${t.nav[i]}</a>`)
      .join("");
    document.querySelector(".brand").ariaLabel =
      `Sergio Ballesteros — ${language === "es" ? "Inicio" : "Home"}`;
    nav.ariaLabel = language === "es" ? "Principal" : "Main";
    document
      .querySelectorAll("[data-lang]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.lang === language),
        ),
      );
    document.querySelector("#metrics").innerHTML = t.metrics
      .map(
        ([value, label]) =>
          `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`,
      )
      .join("");
    document.querySelector(".flow-caption").innerHTML = t.flow
      .map((word) => `<span>${word}</span>`)
      .join("<span>→</span>");
    document.querySelector("#service-list").innerHTML = t.services
      .map(
        ([name, description, tools], i) =>
          `<article class="service"><span class="service-number">0${i + 1}</span><div><h3>${name}</h3><p>${description}</p><span class="service-tools">${tools}</span></div></article>`,
      )
      .join("");
    document.querySelector("#project-list").innerHTML = t.projects
      .map(
        (p, i) =>
          `<article class="project project-${p.kind}"><div class="project-meta"><span>${p.company}</span><span>${p.date}</span></div><div class="project-main"><div><span class="project-kind">${t[p.kind]}</span><h3>${p.title}</h3><p>${p.summary}</p></div>${diagram(p.graphic)}</div><div class="project-result"><strong>${p.metric}</strong><span>${p.metricLabel}</span></div><ul class="tags" aria-label="${language === "es" ? "Tecnologías" : "Technologies"}">${p.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul><details class="case-details"${expanded[i] ? " open" : ""}><summary>${t.details}<span aria-hidden="true">+</span></summary><div class="case-body">${["challenge", "solution", "result"].map((key) => `<h4>${t[key]}</h4><p>${p[key]}</p>`).join("")}</div></details></article>`,
      )
      .join("");
    document.querySelector("#experience-list").innerHTML = t.experience
      .map(
        ([date, company, role, description]) =>
          `<li><span class="timeline-date">${date}</span><h3>${company}</h3><span class="timeline-role">${role}</span><p>${description}</p></li>`,
      )
      .join("");
    document.querySelector("#skills").innerHTML = t.skills
      .map(([name, tools]) => `<div><h4>${name}</h4><p>${tools}</p></div>`)
      .join("");
    document.querySelector("#education").innerHTML = t.education
      .map(
        ([degree, institution, date]) =>
          `<div><h4>${degree}</h4><p>${institution}</p><span>${date}</span></div>`,
      )
      .join("");
    document.querySelector(".portrait img").alt = t.portrait;
    document.querySelector("#copy-status").textContent = "";
    setMenu(false);
  }

  document.querySelectorAll("[data-lang]").forEach((button) =>
    button.addEventListener("click", () => {
      language = button.dataset.lang;
      try {
        localStorage.setItem("language", language);
      } catch {
        /* Preferencia opcional. */
      }
      const url = new URL(location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", url);
      render();
    }),
  );
  menuButton.addEventListener("click", () =>
    setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
  );
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
      if (document.activeElement.closest("#navigation")) menuButton.focus();
    }
  });
  document.querySelector("#copy-email").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("sergio.ballesteros@pm.me");
      document.querySelector("#copy-status").textContent =
        content[language].copied;
    } catch {
      document.querySelector("#copy-status").textContent =
        content[language].copyFailed;
    }
  });
  // Curvas calculadas una sola vez; sin animación continua ni librerías.
  document.querySelector("#flow-lines").innerHTML = Array.from(
    { length: 27 },
    (_, i) => {
      const y = 155 + i * 5;
      return `<path d="M-25 ${y + 38} C100 ${y - 110}, 160 ${370 - i * 5}, 285 ${270 - i * 3} S460 ${-70 + i * 12}, 650 ${135 + i * 4}" stroke="${i % 5 === 0 ? "#326e63" : "#74a69a"}" stroke-width="${i % 5 === 0 ? 1 : 0.65}" opacity="${0.3 + i * 0.02}"/>`;
    },
  ).join("");
  document.querySelector("#year").textContent = new Date().getFullYear();
  render();
})();
