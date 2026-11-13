/* Contenido bilingüe y comportamiento de la página. Edita los textos en `copy`. */
const copy = {
  es: {
    skip: "Ir al contenido",
    navJourney: "Trayectoria",
    navPortfolio: "Portafolio",
    navAbout: "Perfil",
    navContact: "Contacto",
    heroRole: "Ingeniería de datos e IA",
    heroTitle:
      "Automatización de datos, análisis e inferencias de IA <em>para tu negocio.</em>",
    heroLead:
      "Ingeniería de vanguardia que combina datos con inferencia, modelos agénticos, procesamiento de lenguaje natural, web semántica, Gen AI, RAG y O-RAG.",
    heroCta: "Comencemos tu proyecto",
    heroExplore: "Conoce mi trayectoria",
    modelLabel: "Modelo en movimiento",
    heroFoot: "De datos dispersos a decisiones inteligentes.",
    years: "años en datos",
    aiYears: "años en IA y ML",
    journeyTitle: "De la ingeniería de datos a sistemas de IA en producción.",
    journeyLead:
      "Cada etapa une un problema real con una solución concreta y un resultado medible.",
    research: "Investigación",
    dengueTitle: "Anticipar brotes de dengue en Colombia.",
    dengueText:
      "Mi tesis de maestría usa modelos LSTM para pronosticar casos con 3 a 4 semanas de anticipación en varias ciudades.",
    universityLabel: "Universidad de los Andes",
    masters: "Maestría en Inteligencia Artificial",
    expected: "Graduación prevista: diciembre de 2026",
    portfolioTitle: "Soluciones que convierten complejidad en capacidad.",
    portfolioLead:
      "Áreas en las que puedo diseñar y desarrollar productos para tu organización.",
    aboutTitle:
      "Soy Sergio. Construyo puentes entre los datos y las decisiones.",
    aboutText:
      "Soy Sergio Andrés Ballesteros Suárez. Mi experiencia combina análisis de negocio, ingeniería de datos y desarrollo de IA aplicada. Trabajo desde la definición del problema hasta la arquitectura, el despliegue y la observabilidad.",
    profileCaption: "Ingeniería con perspectiva de negocio",
    bachelor: "Ingeniero Industrial",
    toolsTitle: "Herramientas con las que trabajo",
    contactTitle: "Construyamos lo que sigue.",
    contactText:
      "Cuéntame qué desafío quieres resolver. Hablemos de la solución adecuada para tu equipo.",
    nameLabel: "Tu nombre",
    emailLabel: "Tu correo",
    messageLabel: "Cuéntame sobre tu proyecto",
    send: "Enviar mensaje ↗",
    sending: "Enviando…",
    sent: "Mensaje enviado. Gracias por escribir.",
    sendError: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
    serviceMissing:
      "El formulario todavía no tiene configurado el servicio de correo.",
    downloadCv: "Descargar CV ↓",
    backTop: "Volver arriba ↑",
    themeLight: "Modo claro",
    themeDark: "Modo oscuro",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    jobs: [
      {
        date: "2026 — presente",
        company: "Blanc Labs",
        role: "Sr. Data Scientist",
        impact:
          "Un agente MCP reúne historias similares, evalúa su calidad y recomienda puntos de historia.",
        metric: "4 h",
        metricLabel: "menos planeación por sprint",
      },
      {
        date: "2022 — 2026",
        company: "Capgemini",
        role: "Data Scientist · System Engineer",
        impact:
          "Plataforma agéntica RAG para resolver incidentes y modelo ML para recomendar soluciones.",
        metric: "30%",
        metricLabel: "menos tiempo medio de resolución en el primer despliegue",
      },
      {
        date: "2019 — 2022",
        company: "Teleperformance",
        role: "Business Analyst · Sr. Database Developer",
        impact:
          "Auditoría de salud de bases de datos, optimización SQL y estándares para operaciones en las Américas.",
        metric: "SQL",
        metricLabel: "datos confiables a escala",
      },
      {
        date: "2017 — 2018",
        company: "Coca-Cola FEMSA",
        role: "Business Analyst",
        impact:
          "Pronóstico de ventas y optimización de la ubicación nacional de refrigeradores.",
        metric: "1,5%",
        metricLabel: "menos costos operativos",
      },
    ],
    solutions: [
      [
        "Agentes de IA",
        "Agentes que usan herramientas y conocimiento empresarial para apoyar procesos y decisiones.",
        "MCP · LangGraph · RAG",
      ],
      [
        "Lenguaje natural: texto y voz",
        "Soluciones que procesan, clasifican y extraen información de texto y voz.",
        "NLP · Gen AI · Modelos de lenguaje",
      ],
      [
        "Web semántica y ontologías",
        "Conocimiento estructurado para respuestas fundamentadas, consultas y validación.",
        "OWL · SPARQL · SHACL · O-RAG",
      ],
      [
        "Datos y machine learning",
        "Visualización, automatización, análisis y modelos supervisados y no supervisados.",
        "Python · SQL · scikit-learn · PyTorch",
      ],
      [
        "Software cloud native",
        "APIs y servicios desplegables, observables y reproducibles en la nube.",
        "Azure · AWS · Docker · Terraform",
      ],
    ],
  },
  en: {
    skip: "Skip to content",
    navJourney: "Experience",
    navPortfolio: "Solutions",
    navAbout: "About",
    navContact: "Contact",
    heroRole: "Data and AI engineering",
    heroTitle:
      "Data automation, analytics and AI inference <em>for your business.</em>",
    heroLead:
      "Forward-looking engineering that combines data with inference, agentic models, natural language processing, the semantic web, Gen AI, RAG and O-RAG.",
    heroCta: "Let’s start your project",
    heroExplore: "Explore my journey",
    modelLabel: "Model in motion",
    heroFoot: "From scattered data to intelligent decisions.",
    years: "years in data",
    aiYears: "years in AI and ML",
    journeyTitle: "From data engineering to AI systems in production.",
    journeyLead:
      "Every step joins a real problem with a concrete solution and measurable impact.",
    research: "Research",
    dengueTitle: "Anticipating dengue outbreaks in Colombia.",
    dengueText:
      "My master’s thesis uses LSTM models to forecast cases three to four weeks ahead across multiple cities.",
    universityLabel: "Universidad de los Andes",
    masters: "MSc in Artificial Intelligence",
    expected: "Expected graduation: December 2026",
    portfolioTitle: "Solutions that turn complexity into capability.",
    portfolioLead:
      "Areas where I can design and develop products for your organization.",
    aboutTitle: "I’m Sergio. I connect data with decisions.",
    aboutText:
      "I’m Sergio Andrés Ballesteros Suárez. My experience combines business analysis, data engineering and applied AI development. I work from problem definition through architecture, deployment and observability.",
    profileCaption: "Engineering with a business perspective",
    bachelor: "Industrial Engineer",
    toolsTitle: "Tools I work with",
    contactTitle: "Let’s build what comes next.",
    contactText:
      "Tell me about the challenge you want to solve. Let’s discuss the right solution for your team.",
    nameLabel: "Your name",
    emailLabel: "Your email",
    messageLabel: "Tell me about your project",
    send: "Send message ↗",
    sending: "Sending…",
    sent: "Message sent. Thanks for reaching out.",
    sendError: "Could not send your message. Please try again later.",
    serviceMissing: "The email service has not been configured yet.",
    downloadCv: "Download CV ↓",
    backTop: "Back to top ↑",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    jobs: [
      {
        date: "2026 — present",
        company: "Blanc Labs",
        role: "Sr. Data Scientist",
        impact:
          "An MCP agent retrieves similar stories, evaluates quality and recommends story points.",
        metric: "4 h",
        metricLabel: "less planning work per sprint",
      },
      {
        date: "2022 — 2026",
        company: "Capgemini",
        role: "Data Scientist · System Engineer",
        impact:
          "Agentic RAG platform for incident resolution and an ML model recommending solutions.",
        metric: "30%",
        metricLabel: "less mean time to resolution in the first deployment",
      },
      {
        date: "2019 — 2022",
        company: "Teleperformance",
        role: "Business Analyst · Sr. Database Developer",
        impact:
          "Database health audits, SQL optimization and standards for operations across the Americas.",
        metric: "SQL",
        metricLabel: "reliable data at scale",
      },
      {
        date: "2017 — 2018",
        company: "Coca-Cola FEMSA",
        role: "Business Analyst",
        impact:
          "Sales forecasting and nationwide refrigerator placement optimization.",
        metric: "1.5%",
        metricLabel: "lower operational costs",
      },
    ],
    solutions: [
      [
        "AI agents",
        "Agents that use tools and organizational knowledge to support processes and decisions.",
        "MCP · LangGraph · RAG",
      ],
      [
        "Natural language: text and voice",
        "Solutions that process, classify and extract information from text and speech.",
        "NLP · Gen AI · Language models",
      ],
      [
        "Semantic web and ontologies",
        "Structured knowledge for grounded answers, queries and validation.",
        "OWL · SPARQL · SHACL · O-RAG",
      ],
      [
        "Data and machine learning",
        "Visualization, automation, analytics and supervised and unsupervised models.",
        "Python · SQL · scikit-learn · PyTorch",
      ],
      [
        "Cloud native software",
        "Deployable, observable and reproducible APIs and services in the cloud.",
        "Azure · AWS · Docker · Terraform",
      ],
    ],
  },
};

const root = document.documentElement;
const langButtons = document.querySelectorAll("[data-lang]");
let lang =
  new URLSearchParams(location.search).get("lang") ||
  localStorage.getItem("language") ||
  "es";
if (!copy[lang]) lang = "es";
let theme =
  localStorage.getItem("theme") ||
  (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

function render() {
  const t = copy[lang];
  root.lang = lang;
  document.title =
    lang === "es"
      ? "Sergio Ballesteros | Ingeniería de datos e IA"
      : "Sergio Ballesteros | Data and AI engineering";
  document.querySelector('meta[name="description"]').content = t.heroLead;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t[el.dataset.i18n];
  });
  langButtons.forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang)),
  );
  document.querySelector("#journey-grid").innerHTML = t.jobs
    .map(
      (j, i) =>
        `<article class="journey-card"><div class="journey-index">0${i + 1} / ${j.date}</div><div class="journey-data"><h3>${j.company}</h3><span>${j.role}</span><p>${j.impact}</p></div><div class="journey-metric"><strong>${j.metric}</strong><span>${j.metricLabel}</span></div></article>`,
    )
    .join("");
  document.querySelector("#solution-list").innerHTML = t.solutions
    .map(
      (s, i) =>
        `<article class="solution"><span class="solution-number">0${i + 1}</span><div><h3>${s[0]}</h3><p>${s[1]}</p></div><span class="solution-tech">${s[2]}</span><span class="solution-arrow" aria-hidden="true">↗</span></article>`,
    )
    .join("");
  const tools = [
    ["Python", "python"],
    ["PyTorch", "pytorch"],
    ["Docker", "docker"],
    ["Terraform", "terraform"],
    ["Azure", "azure"],
    ["AWS", "aws"],
    ["Hugging Face", "huggingface"],
    ["LangChain", "langchain"],
  ];
  document.querySelector("#tool-logos").innerHTML = tools
    .map(
      ([name, slug]) =>
        `<span class="tool"><img src="images/logos/${slug}.svg" alt="" loading="lazy" onerror="this.style.display='none'"><span>${name}</span></span>`,
    )
    .join("");
  document.querySelector("#theme-label").textContent =
    theme === "dark" ? t.themeLight : t.themeDark;
  document.querySelector("#menu-toggle").ariaLabel = t.menuOpen;
}
function applyTheme() {
  root.dataset.theme = theme;
  document
    .querySelector("#theme-toggle")
    .setAttribute("aria-pressed", String(theme === "dark"));
  document.querySelector('meta[name="theme-color"]').content =
    theme === "dark" ? "#0b171b" : "#f4f2e9";
  document.querySelector("#theme-label").textContent =
    theme === "dark" ? copy[lang].themeLight : copy[lang].themeDark;
}
langButtons.forEach((b) =>
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    localStorage.setItem("language", lang);
    const url = new URL(location);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    render();
    applyTheme();
  }),
);
document.querySelector("#theme-toggle").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  applyTheme();
});
const menu = document.querySelector("#menu-toggle");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.ariaLabel = copy[lang][open ? "menuClose" : "menuOpen"];
  document.querySelector("#nav").classList.toggle("open", open);
});
document.querySelector("#nav").addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    menu.setAttribute("aria-expanded", "false");
    document.querySelector("#nav").classList.remove("open");
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();

// El formulario llama a un endpoint propio. La dirección de destino y la clave quedan en el servidor.
document
  .querySelector("#contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.currentTarget,
      status = document.querySelector("#form-status"),
      button = form.querySelector('button[type="submit"]'),
      t = copy[lang];
    if (form.elements.namedItem("website").value) return;
    button.disabled = true;
    status.textContent = t.sending;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(
          data.code === "NOT_CONFIGURED" ? "not_configured" : "send_error",
        );
      }
      form.reset();
      status.textContent = t.sent;
    } catch (error) {
      status.textContent =
        error.message === "not_configured" ? t.serviceMissing : t.sendError;
    } finally {
      button.disabled = false;
    }
  });

// Distribución gaussiana que cambia de sigma; el punto sigue el gradiente y regresa.
const canvas = document.querySelector("#model-canvas"),
  ctx = canvas.getContext("2d");
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
let frame = 0;
function draw(time = 0) {
  const rect = canvas.getBoundingClientRect(),
    dpr = Math.min(devicePixelRatio || 1, 2);
  if (
    canvas.width !== Math.round(rect.width * dpr) ||
    canvas.height !== Math.round(rect.height * dpr)
  ) {
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const w = rect.width,
    h = rect.height;
  ctx.clearRect(0, 0, w, h);
  const dark = theme === "dark",
    line = dark ? "#75e2bb" : "#126b64",
    grid = dark ? "#304549" : "#c9d6ce";
  ctx.strokeStyle = grid;
  ctx.lineWidth = 1;
  for (let i = 1; i < 5; i++) {
    const y = (h * i) / 5;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  const sigma = reduced.matches ? 0.85 : 0.82 + 0.35 * Math.sin(time / 1500),
    base = h * 0.78,
    amp = h * 0.61;
  document.querySelector("#sigma-value").textContent = sigma.toFixed(2);
  const gaussian = (x) =>
    Math.exp(-0.5 * Math.pow((x - w * 0.5) / (w * 0.17 * sigma), 2));
  ctx.strokeStyle = line;
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 0; x <= w; x += 3) {
    const y = base - amp * gaussian(x);
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.fillStyle = dark ? "#c8fb80" : "#2b6840";
  const x =
      w *
      (reduced.matches ? 0.54 : 0.5 + 0.27 * Math.abs(Math.sin(time / 1900))),
    y = base - amp * gaussian(x);
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.setLineDash([4, 6]);
  ctx.strokeStyle = grid;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, base);
  ctx.stroke();
  ctx.setLineDash([]);
  if (!reduced.matches) frame = requestAnimationFrame(draw);
}
reduced.addEventListener("change", () => {
  cancelAnimationFrame(frame);
  draw();
});
render();
applyTheme();
draw();
