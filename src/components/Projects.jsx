export default function Projects({ projects, t }) {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.projectTitle}</span>
        <h2>{t.projectDesc} </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <span className="panel-label">Proyecto</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-stack">{project.stack}</p>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
