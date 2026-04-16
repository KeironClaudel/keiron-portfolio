export default function Projects({ projects, t }) {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.projectTitle}</span>
        <h2>{t.projectDesc}</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <span className="panel-label">{t.projectLabel}</span>
            <h3>{project.title}</h3>

            {Array.isArray(project.description) ? (
              project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{project.description}</p>
            )}

            {project.stack && <p className="project-stack">{project.stack}</p>}

            <div className="project-links">
              {project.backendUrl && (
                <a href={project.backendUrl} target="_blank" rel="noreferrer">
                  {t.projectBackend}
                </a>
              )}

              {project.frontendUrl && (
                <a href={project.frontendUrl} target="_blank" rel="noreferrer">
                  {t.projectFrontend}
                </a>
              )}
            </div>

            {project.demoCredentials &&
              project.liveUrl &&
              project.liveUrl !== "#" && (
                <div className="project-demo-box">
                  <div className="project-demo-credentials">
                    <span className="demo-label">{t.demoUser}</span>
                    <span className="demo-value">
                      {project.demoCredentials.user}
                    </span>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-demo-button"
                  >
                    {t.projectDemo}
                  </a>
                </div>
              )}
          </article>
        ))}
      </div>
    </section>
  );
}
