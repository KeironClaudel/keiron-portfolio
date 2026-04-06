export default function Skills({ skills, t }) {
  return (
    <section id="skills" className="section">
      <p className="section-label">{t.skills}</p>
      <h2>{t.skillsTitle}</h2>

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
