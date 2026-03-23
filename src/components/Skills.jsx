export default function Skills({ skills, t }) {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.skillsTitle}</span>
        <h2>{t.skillsDesc}</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill} className="card skill-card">
            <h3>{skill}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
