export default function Skills({ skills, t }) {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.skillsTitle}</span>
        <h2>{t.skillsDesc}</h2>
      </div>

      <div className="skills-groups">
        {skills.map((group) => (
          <div key={group.category} className="skills-group">
            <h3 className="skills-group-title">{group.category}</h3>

            <div className="skills-grid">
              {group.items.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
