const Hero = () => (
  <header className="hero" id="inicio">
    <nav className="main-nav">
      <a href="#inicio">Introducción</a>
      <a href="#experiencia">Resumen</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <div className="hero__grid">
      <div>
        <h3>Ingeniero de Datos</h3>
        <h1>Sergio Ballesteros Suarez</h1>
        <p>
          Durante más de nueve años he diseñado arquitecturas de datos y solucionado retos analíticos para
          empresas globales. Lidero proyectos innovadores, establezco auditorías de mejores prácticas y combino
          mi bagaje emprendedor con pensamiento estratégico para generar soluciones medibles.
        </p>
      </div>
      <div className="hero__image" aria-hidden="true">
        <div className="hero__avatar">SB</div>
      </div>
    </div>
  </header>
);

export default Hero;
