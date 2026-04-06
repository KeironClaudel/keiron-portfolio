import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact({ t }) {
  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <p className="section-tag">{t.contact}</p>
        <h2>{t.talk}</h2>
      </div>

      <div className="contact-list">
        <a className="contact-item" href="mailto:keironqc@gmail.com">
          <span className="contact-icon">
            <Mail size={20} />
          </span>
          <div>
            <p className="contact-item-label">{t.email}</p>
            <span>keironqc@gmail.com</span>
          </div>
        </a>

        <a
          className="contact-item"
          href="https://github.com/KeironClaudel/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">
            <Github size={20} />
          </span>
          <div>
            <p className="contact-item-label">{t.github}</p>
            <span>github.com/KeironClaudel/</span>
          </div>
        </a>

        <a
          className="contact-item"
          href="https://linkedin.com/in/keironquesadaclaudel/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">
            <Linkedin size={20} />
          </span>
          <div>
            <p className="contact-item-label">{t.linkedin}</p>
            <span>linkedin.com/in/keironquesadaclaudel/</span>
          </div>
        </a>
      </div>
    </section>
  );
}
