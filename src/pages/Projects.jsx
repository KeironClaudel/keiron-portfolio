/**
 * Renders the projects section of the portfolio.
 * Each project is displayed as a rectangular card with
 * description, technologies, repository links and demo access.
 */
export default function Projects({ projects, t }) {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.projectTitle}</span>
        <h2>{t.projectDesc}</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const hasDemo =
            project.demoCredentials || project.liveUrl || project.showDemoPlaceholder;
          const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";

          return (
            <article key={project.title} className="card project-card">
              <div className="project-card-content">
                <span className="panel-label">{t.projectLabel}</span>
                <h3>{project.title}</h3>

                {Array.isArray(project.description) ? (
                  project.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{project.description}</p>
                )}

                {project.technologies && (
                  <div className="project-tech-groups">
                    {project.technologies.backend?.length > 0 && (
                      <div className="project-tech-group">
                        <h4 className="tech-group-title">
                          {t.projectBackendStack}
                        </h4>

                        <div className="project-tech-stack">
                          {project.technologies.backend.map((tech, index) => (
                            <div key={`backend-${index}`} className="tech-chip">
                              <span className="tech-icon">{tech.icon}</span>
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.technologies.frontend?.length > 0 && (
                      <div className="project-tech-group">
                        <h4 className="tech-group-title">
                          {t.projectFrontendStack}
                        </h4>

                        <div className="project-tech-stack">
                          {project.technologies.frontend.map((tech, index) => (
                            <div
                              key={`frontend-${index}`}
                              className="tech-chip"
                            >
                              <span className="tech-icon">{tech.icon}</span>
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.technologies.deployment?.length > 0 && (
                      <div className="project-tech-group">
                        <h4 className="tech-group-title">
                          {t.projectDeploymentStack}
                        </h4>

                        <div className="project-tech-stack">
                          {project.technologies.deployment.map(
                            (tech, index) => (
                              <div
                                key={`deploy-${index}`}
                                className="tech-chip"
                              >
                                <span className="tech-icon">{tech.icon}</span>
                                <span>{tech.name}</span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="project-card-actions">
                <div className="project-links">
                  {project.backendUrl && (
                    <a
                      href={project.backendUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.projectBackend} - ${project.title}`}
                    >
                      {t.projectBackend}
                    </a>
                  )}

                  {project.frontendUrl && (
                    <a
                      href={project.frontendUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.projectFrontend} - ${project.title}`}
                    >
                      {t.projectFrontend}
                    </a>
                  )}
                </div>

                {hasDemo && (
                  <div className="project-demo-box">
                    <div className="project-demo-credentials">
                      <span className="demo-label">{t.demoUser}</span>
                      <span className="demo-value">
                        {project.demoCredentials?.user ??
                          "[Pending demo user]"}
                      </span>
                    </div>

                    {hasLiveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-demo-button"
                        aria-label={`${t.projectDemo} - ${project.title}`}
                      >
                        {t.projectDemo}
                      </a>
                    ) : (
                      <span
                        className="project-demo-button project-demo-button-disabled"
                        aria-label={`${t.projectDemoPending} - ${project.title}`}
                      >
                        {t.projectDemoPending}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
