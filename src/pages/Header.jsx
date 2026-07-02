export default function Header({ theme, onToggleTheme, toggleLang, lang, t }) {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a className="brand" href="#home">
          <span className="brand-mark">K</span>
          <span className="brand-text">Keiron</span>
        </a>

        <nav className="nav-links">
          <a href="#about">{t.navLinkAboutMe}</a>
          <a href="#experience">{t.navLinkExperience}</a>
          <a href="#skills">{t.navLinkSkills}</a>
          <a href="#projects">{t.navLinkProjects}</a>
          <a href="#contact">{t.navLinkContact}</a>
        </nav>

        <div className="header-actions">
          <button className="lang-btn" onClick={toggleLang}>
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button className="theme-toggle" onClick={onToggleTheme}>
            <span className="theme-toggle__content" key={theme}>
              {theme === "dark" ? t.btnLightThemeTitle : t.btnDarkThemeTitle}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
