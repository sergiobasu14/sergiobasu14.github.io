const ExperienceList = ({ experiences }) => (
  <section id="experiencia" className="experience">
    <h2>Recorrido profesional</h2>
    <div className="experience__list">
      {experiences.map((item) => (
        <article key={item.role} className="experience__card">
          <p className="experience__period">{item.period}</p>
          <h3>{item.role}</h3>
          <p className="experience__org">{item.org}</p>
          <p className="experience__detail">{item.detail}</p>
        </article>
      ))}
    </div>
  </section>
);

export default ExperienceList;
