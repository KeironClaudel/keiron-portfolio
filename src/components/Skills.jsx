export default function Skills({ skills, t }) {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.skillsTitle}</span>
        <h2>{t.skillsDesc}</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
