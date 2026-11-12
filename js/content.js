/* Contenido bilingüe. Edita aquí los textos; conserva las mismas claves en ES y EN. */
window.siteContent = {
  es: {
    title: "Sergio Ballesteros — IA aplicada y datos",
    description:
      "Soluciones de IA aplicada, agentes, RAG y arquitectura de datos. Conoce la experiencia y los proyectos de Sergio Ballesteros.",
    nav: ["Servicios", "Proyectos", "Trayectoria", "Contacto"],
    menu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skip: "Ir al contenido",
    hero: ["IA aplicada.", "Impacto real."],
    intro:
      "Transformo datos y desafíos de negocio en soluciones de inteligencia artificial que llegan a producción.",
    heroDetail:
      "Soy Sergio Ballesteros, ingeniero de IA. Combino experiencia en datos, machine learning y arquitectura cloud para construir soluciones útiles para tu negocio.",
    talk: "Hablemos de tu proyecto",
    explore: "Explorar proyectos",
    cv: "Descargar CV",
    metrics: [
      ["10 años", "creando soluciones con datos"],
      ["4 años", "en machine learning e IA generativa"],
      ["30%", "menos tiempo de resolución de incidentes*"],
    ],
    metricNote:
      "*Resultado del primer despliegue de la plataforma de IA desarrollada en Capgemini.",
    servicesTitle: "De la idea a una solución que funciona.",
    servicesIntro:
      "Tecnología con un propósito claro: resolver un problema real y acompañar la solución hasta producción.",
    services: [
      [
        "Agentes de IA y RAG",
        "Conecta el conocimiento de tu organización con asistentes que consultan información, utilizan herramientas y apoyan tareas de tu equipo.",
        "RAG · MCP · LangGraph",
      ],
      [
        "Machine learning aplicado",
        "Convierte datos históricos en modelos que ayudan a predecir demanda, clasificar incidentes y apoyar decisiones operativas.",
        "PyTorch · scikit-learn · Hugging Face",
      ],
      [
        "Ingeniería de datos",
        "Organiza, integra y prepara tus datos para que tus procesos analíticos y soluciones de IA tengan una base confiable.",
        "Python · SQL · Modelado de datos",
      ],
      [
        "Arquitectura y producción",
        "Lleva la solución a un entorno operativo con APIs, contenedores, observabilidad e infraestructura reproducible.",
        "Azure · AWS · Docker · Terraform",
      ],
    ],
    projectsTitle: "Experiencia convertida en soluciones.",
    projectsIntro:
      "Una selección de proyectos profesionales y académicos. Del problema de negocio a la implementación técnica.",
    professional: "Proyecto profesional",
    academic: "Proyecto académico",
    details: "Conocer el caso",
    challenge: "El reto",
    solution: "La solución",
    result: "El resultado",
    projects: [
      {
        company: "Blanc Labs",
        date: "2026",
        title: "IA para planear mejor cada sprint.",
        summary:
          "Un agente que combina historias previas, evaluación de calidad y machine learning para apoyar la estimación de puntos de historia.",
        metric: "4 h",
        metricLabel: "menos esfuerzo de planeación por sprint",
        tags: ["MCP", "RAG", "Machine learning", "Azure"],
        kind: "professional",
        graphic: "planning",
        challenge:
          "Ayudar a los equipos de desarrollo a estimar historias con mayor consistencia y reducir el esfuerzo de planeación.",
        solution:
          "Servidor MCP con herramientas para evaluar la calidad de historias, recuperar casos similares mediante RAG y recomendar puntos con un modelo supervisado. Arquitectura de microservicios en Azure y Docker.",
        result:
          "Reducción de cuatro horas de planeación por sprint y mayor consistencia en las estimaciones entre equipos.",
      },
      {
        company: "Capgemini",
        date: "2024 — 2026",
        title: "El conocimiento correcto, cuando más se necesita.",
        summary:
          "Una plataforma de IA para ayudar a equipos de soporte a resolver incidentes a partir de su conocimiento histórico.",
        metric: "30%",
        metricLabel: "menos tiempo medio de resolución",
        tags: ["Azure AI Search", "GPT-4o", "Teams", "Terraform"],
        kind: "professional",
        graphic: "retrieval",
        challenge:
          "Facilitar la búsqueda de soluciones en bases de conocimiento de entre 5.000 y 60.000 incidentes.",
        solution:
          "Sistema RAG agéntico con evaluación mediante LLM, clasificación de tickets con KNN y DBSCAN, integración en Teams, SSO con Entra ID y monitorización con OpenTelemetry.",
        result:
          "Reducción del 30% en el tiempo medio de resolución sobre unas 600 incidencias mensuales en el primer despliegue con un cliente.",
      },
      {
        company: "Tesis de maestría",
        date: "Investigación",
        title: "Anticipar brotes de dengue en Colombia.",
        summary:
          "Modelos de series de tiempo para pronosticar casos en distintas ciudades y apoyar la alerta temprana.",
        metric: "3–4",
        metricLabel: "semanas de anticipación del pronóstico",
        tags: ["LSTM", "Series de tiempo", "Salud pública"],
        kind: "academic",
        graphic: "forecast",
        challenge:
          "Explorar el pronóstico temprano de casos de dengue en ciudades de Colombia.",
        solution:
          "Investigación de maestría con modelos LSTM de series de tiempo para pronosticar casos de dengue en varias ciudades.",
        result:
          "Pronósticos con un horizonte de tres a cuatro semanas. Proyecto de tesis en curso; no se presenta como un sistema desplegado en salud pública.",
      },
      {
        company: "Proyecto académico",
        date: "IA y conocimiento",
        title: "Respuestas fundamentadas en conocimiento estructurado.",
        summary:
          "Un sistema O-RAG para una aplicación de biblioteca que conecta modelos de lenguaje con ontologías y consultas estructuradas.",
        metric: "O-RAG",
        metricLabel: "ontologías + recuperación de información",
        tags: ["OWL", "SPARQL", "SHACL"],
        kind: "academic",
        graphic: "ontology",
        challenge:
          "Fundamentar las respuestas de un modelo de lenguaje en el conocimiento estructurado de una biblioteca.",
        solution:
          "Integración de ontologías OWL, consultas SPARQL y validación SHACL en un sistema RAG basado en ontologías.",
        result:
          "Un proyecto académico que explora cómo conectar conocimiento formal y generación de lenguaje.",
      },
    ],
    experienceTitle: "Una trayectoria construida sobre datos.",
    experienceIntro:
      "De optimizar operaciones y bases de datos a diseñar y llevar sistemas de IA a producción.",
    experience: [
      [
        "May. 2026 — Actualidad",
        "Blanc Labs",
        "Sr. Data Scientist",
        "Arquitectura de sistemas agénticos, herramientas MCP y modelos para apoyar la planeación de equipos de desarrollo.",
      ],
      [
        "2024 — May. 2026",
        "Capgemini",
        "Data Scientist",
        "Desarrollo de una plataforma de IA para resolución de incidentes, desde el motor de búsqueda hasta su operación en producción.",
      ],
      [
        "2022 — 2024",
        "Capgemini",
        "System Engineer",
        "Modelo de machine learning para recomendar soluciones a incidentes. Este proyecto dio paso a mi incorporación a la práctica de IA.",
      ],
      [
        "2019 — 2022",
        "Teleperformance",
        "Business Analyst / Sr. Database Developer",
        "Optimización de SQL, auditoría de salud de bases de datos y estándares de consulta para operaciones en las Américas.",
      ],
      [
        "2017 — 2018",
        "Coca-Cola FEMSA",
        "Business Analyst Intern / Business Specialist",
        "Pronóstico de ventas y optimización de ubicación de refrigeradores. Solución adoptada en el plan de negocio de 2017, con una reducción del 1,5% en costos operativos.",
      ],
    ],
    aboutTitle: "Ingeniería con perspectiva de negocio.",
    about:
      "Soy Sergio Andrés Ballesteros Suárez. Mi formación como ingeniero industrial y mi trayectoria en datos me permiten conectar los desafíos operativos de una organización con soluciones técnicas concretas. Trabajo a lo largo del ciclo completo: desde entender la necesidad hasta construir, desplegar y observar la solución.",
    skillsTitle: "Herramientas que uso",
    educationTitle: "Formación",
    education: [
      [
        "Maestría en Inteligencia Artificial",
        "Universidad de los Andes, Colombia",
        "Graduación prevista: diciembre de 2026",
      ],
      ["Ingeniería Industrial", "Universidad de la Sabana, Colombia", "2016"],
    ],
    skills: [
      ["IA y agentes", "LangGraph, LangChain, Ollama, RAG, MCP"],
      ["Machine learning", "PyTorch, scikit-learn, Hugging Face, LoRA"],
      ["Datos y conocimiento", "Python, SQL, OWL, SPARQL, SHACL"],
      ["Cloud y producción", "AWS, Azure, Terraform, Docker"],
    ],
    contactTitle: "Tu próximo proyecto empieza con una conversación.",
    contactText:
      "Cuéntame qué necesitas resolver, cómo trabaja tu equipo y dónde quieres llegar. Conversemos sobre cómo la IA y los datos pueden ayudarte.",
    emailLabel: "Escríbeme",
    copy: "Copiar correo",
    copied: "Correo copiado",
    copyFailed: "Puedes escribirme a sergio.ballesteros@pm.me",
    backTop: "Volver arriba",
    footer: "IA aplicada · Datos · Ingeniería",
    portrait: "Retrato de Sergio Ballesteros",
    flow: ["Datos", "Inteligencia", "Impacto"],
  },
  en: {
    title: "Sergio Ballesteros — Applied AI & data",
    description:
      "Applied AI, agents, RAG and data architecture. Explore Sergio Ballesteros’s experience and selected projects.",
    nav: ["Services", "Projects", "Experience", "Contact"],
    menu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    hero: ["Applied AI.", "Real impact."],
    intro:
      "I turn data and business challenges into artificial intelligence solutions that reach production.",
    heroDetail:
      "I’m Sergio Ballesteros, an AI engineer. I combine experience in data, machine learning and cloud architecture to build practical solutions for your business.",
    talk: "Let’s discuss your project",
    explore: "Explore projects",
    cv: "Download CV",
    metrics: [
      ["10 years", "building data-driven solutions"],
      ["4 years", "in machine learning and generative AI"],
      ["30%", "less incident resolution time*"],
    ],
    metricNote:
      "*Result from the first deployment of the AI platform developed at Capgemini.",
    servicesTitle: "From an idea to a working solution.",
    servicesIntro:
      "Technology with a clear purpose: solve a real problem and take the solution through to production.",
    services: [
      [
        "AI agents & RAG",
        "Connect your organization’s knowledge to assistants that retrieve information, use tools and support your team’s work.",
        "RAG · MCP · LangGraph",
      ],
      [
        "Applied machine learning",
        "Turn historical data into models that help forecast demand, classify incidents and support operational decisions.",
        "PyTorch · scikit-learn · Hugging Face",
      ],
      [
        "Data engineering",
        "Organize, integrate and prepare your data to give analytics processes and AI solutions a reliable foundation.",
        "Python · SQL · Data modeling",
      ],
      [
        "Architecture & production",
        "Bring your solution into an operational environment with APIs, containers, observability and reproducible infrastructure.",
        "Azure · AWS · Docker · Terraform",
      ],
    ],
    projectsTitle: "Experience turned into solutions.",
    projectsIntro:
      "Selected professional and academic projects. From the business problem to the technical implementation.",
    professional: "Professional project",
    academic: "Academic project",
    details: "Explore the case",
    challenge: "The challenge",
    solution: "The solution",
    result: "The result",
    projects: [
      {
        company: "Blanc Labs",
        date: "2026",
        title: "AI for better sprint planning.",
        summary:
          "An agent combining historical stories, quality assessment and machine learning to support story-point estimation.",
        metric: "4 h",
        metricLabel: "less planning effort per sprint",
        tags: ["MCP", "RAG", "Machine learning", "Azure"],
        kind: "professional",
        graphic: "planning",
        challenge:
          "Help development teams estimate stories more consistently and reduce planning effort.",
        solution:
          "An MCP server with tools to assess story quality, retrieve similar stories through RAG and recommend points with a supervised model. Azure and Docker microservices architecture.",
        result:
          "Four hours less planning effort per sprint and more consistent estimates across squads.",
      },
      {
        company: "Capgemini",
        date: "2024 — 2026",
        title: "The right knowledge, when it matters most.",
        summary:
          "An AI platform helping support teams resolve incidents using their historical knowledge.",
        metric: "30%",
        metricLabel: "less mean time to resolution",
        tags: ["Azure AI Search", "GPT-4o", "Teams", "Terraform"],
        kind: "professional",
        graphic: "retrieval",
        challenge:
          "Make solutions easier to find in knowledge bases containing 5,000 to 60,000 incidents.",
        solution:
          "Agentic RAG with LLM-based evaluation, KNN and DBSCAN ticket classification, Teams integration, Entra ID SSO and OpenTelemetry monitoring.",
        result:
          "A 30% reduction in mean time to resolution across approximately 600 monthly tickets in the first client deployment.",
      },
      {
        company: "Master’s thesis",
        date: "Research",
        title: "Anticipating dengue outbreaks in Colombia.",
        summary:
          "Time-series models to forecast cases across multiple cities and support early warning.",
        metric: "3–4",
        metricLabel: "weeks ahead in the forecast horizon",
        tags: ["LSTM", "Time series", "Public health"],
        kind: "academic",
        graphic: "forecast",
        challenge:
          "Explore early forecasting of dengue cases in Colombian cities.",
        solution:
          "Master’s research using LSTM time-series models to forecast dengue cases across multiple cities.",
        result:
          "Forecasts with a three-to-four-week horizon. Thesis in progress; not presented as a deployed public health system.",
      },
      {
        company: "Academic project",
        date: "AI & knowledge",
        title: "Answers grounded in structured knowledge.",
        summary:
          "An O-RAG library application connecting language models with ontologies and structured queries.",
        metric: "O-RAG",
        metricLabel: "ontologies + information retrieval",
        tags: ["OWL", "SPARQL", "SHACL"],
        kind: "academic",
        graphic: "ontology",
        challenge:
          "Ground a language model’s answers in a library’s structured knowledge.",
        solution:
          "OWL ontologies, SPARQL queries and SHACL validation integrated into an ontology-based RAG system.",
        result:
          "An academic project exploring the connection between formal knowledge and language generation.",
      },
    ],
    experienceTitle: "A career built on data.",
    experienceIntro:
      "From optimizing operations and databases to designing and deploying AI systems.",
    experience: [
      [
        "May 2026 — Present",
        "Blanc Labs",
        "Sr. Data Scientist",
        "Agentic systems architecture, MCP tools and models supporting development team planning.",
      ],
      [
        "2024 — May 2026",
        "Capgemini",
        "Data Scientist",
        "Built an AI incident-resolution platform from its search engine to production operations.",
      ],
      [
        "2022 — 2024",
        "Capgemini",
        "System Engineer",
        "A machine learning model to recommend incident solutions. The project led to my move into the AI practice.",
      ],
      [
        "2019 — 2022",
        "Teleperformance",
        "Business Analyst / Sr. Database Developer",
        "SQL optimization, database health audits and querying standards for operations across the Americas.",
      ],
      [
        "2017 — 2018",
        "Coca-Cola FEMSA",
        "Business Analyst Intern / Business Specialist",
        "Sales forecasting and refrigerator placement optimization. Adopted in the 2017 business plan, reducing operational costs by 1.5%.",
      ],
    ],
    aboutTitle: "Engineering with a business perspective.",
    about:
      "I’m Sergio Andrés Ballesteros Suárez. My industrial engineering background and career in data help me connect operational challenges with concrete technical solutions. I work across the full delivery cycle: understanding the need, building, deploying and observing the solution.",
    skillsTitle: "Tools I work with",
    educationTitle: "Education",
    education: [
      [
        "MSc in Artificial Intelligence",
        "Universidad de los Andes, Colombia",
        "Expected graduation: December 2026",
      ],
      [
        "BSc in Industrial Engineering",
        "Universidad de la Sabana, Colombia",
        "2016",
      ],
    ],
    skills: [
      ["AI & agents", "LangGraph, LangChain, Ollama, RAG, MCP"],
      ["Machine learning", "PyTorch, scikit-learn, Hugging Face, LoRA"],
      ["Data & knowledge", "Python, SQL, OWL, SPARQL, SHACL"],
      ["Cloud & production", "AWS, Azure, Terraform, Docker"],
    ],
    contactTitle: "Your next project starts with a conversation.",
    contactText:
      "Tell me what you need to solve, how your team works and where you want to go. Let’s explore how AI and data can help.",
    emailLabel: "Get in touch",
    copy: "Copy email",
    copied: "Email copied",
    copyFailed: "You can email me at sergio.ballesteros@pm.me",
    backTop: "Back to top",
    footer: "Applied AI · Data · Engineering",
    portrait: "Portrait of Sergio Ballesteros",
    flow: ["Data", "Intelligence", "Impact"],
  },
};
