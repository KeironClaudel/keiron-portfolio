export default function Websites({ websites, t }) {
  return (
    <section id="websites" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.websiteTitle}</span>
        <h2>{t.websiteDesc}</h2>
      </div>

      <div className="websites-grid">
        {websites.map((website) => (
          <article key={website.title} className="card website-card">
            <div className="website-card-content">
              <span className="panel-label">{t.websiteLabel}</span>
              <h3>{website.title}</h3>

              {Array.isArray(website.description) ? (
                website.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{website.description}</p>
              )}

              {website.technologies && (
                <div className="website-tech-groups">
                  {website.technologies.frontend?.length > 0 && (
                    <div className="project-tech-group">
                      <h4 className="tech-group-title">
                        {t.projectFrontendStack}
                      </h4>

                      <div className="project-tech-stack">
                        {website.technologies.frontend.map((tech, index) => (
                          <div key={`website-frontend-${index}`} className="tech-chip">
                            <span className="tech-icon">{tech.icon}</span>
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {website.technologies.deployment?.length > 0 && (
                    <div className="project-tech-group">
                      <h4 className="tech-group-title">
                        {t.projectDeploymentStack}
                      </h4>

                      <div className="project-tech-stack">
                        {website.technologies.deployment.map((tech, index) => (
                          <div key={`website-deploy-${index}`} className="tech-chip">
                            <span className="tech-icon">{tech.icon}</span>
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="website-card-actions">
              <a
                href={website.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-demo-button"
                aria-label={`${website.liveLabel} - ${website.title}`}
              >
                {website.liveLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
