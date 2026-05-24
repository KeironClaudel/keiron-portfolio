import {
  Github,
  Linkedin,
  LinkedinIcon,
  Mail,
  MailIcon,
  ChevronDown,
  FileText,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Hero({ t }) {
  return (
    <section className="hero section">
      <div className="hero-horizontal">
        <div className="hero-avatar-wrap">
          <div className="hero-avatar">
            <img src="/profile.png" alt="Keiron" />
          </div>
        </div>

        <div className="hero-main">
          <p className="hero-role-label">{t.heroTitle}</p>

          <h1 className="hero-title hero-title-horizontal">
            Keiron Quesada Claudel
          </h1>

          <p className="hero-description">{t.heroDesc}</p>

          <div className="hero-mini-cards">
            <article className="mini-card">
              <p className="mini-card-label">{t.focus}</p>
              <h3>Backend first</h3>
              <p>{t.focusDesc}</p>
            </article>

            <article className="mini-card">
              <p className="mini-card-label">{t.status}</p>
              <h3>{t.statusTitle}</h3>
              <p>{t.statusDesc}</p>
            </article>
          </div>

          <div className="hero-contact-links">
            <a
              href="https://github.com/KeironClaudel/"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/keironquesadaclaudel/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={16} /> LinkdIn
            </a>
            <a href="mailto:keironqc@gmail.com">
              <MailIcon size={16} /> Gmail
            </a>

            <details className="cv-dropdown">
              <summary className="cv-toggle">
                <span className="cv-toggle-content">
                  <FileText size={16} />
                  {t.downloadCv}
                  <ChevronDown size={16} className="cv-chevron" />
                </span>
              </summary>

              <div className="cv-menu">
                <a
                  href="/KeironQuesadaClaudel_ESP.pdf"
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.cvSpanish}
                </a>
                <a
                  href="/KeironQuesadaClaudel_EN.pdf"
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.cvEnglish}
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
