export default function Experience({ experiences, t }) {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.experienceTitle}</span>
        <h2>{t.experienceDesc}</h2>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.role}`} className="card experience-card">
            <div className="experience-card-header">
              <div>
                <span className="panel-label">{experience.company}</span>
                <h3>{experience.role}</h3>
              </div>

              <div className="experience-meta">
                <span>{experience.period}</span>
                <span>{experience.location}</span>
              </div>
            </div>

            <ul className="experience-points">
              {experience.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
