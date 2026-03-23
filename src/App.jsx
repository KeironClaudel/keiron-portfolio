import { useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { translations } from "./i18n";

function getInitialLanguage() {
  const savedLang = localStorage.getItem("lang");
  if (savedLang === "es" || savedLang === "en") {
    return savedLang;
  }

  const browserLanguages = navigator.languages || [navigator.language || ""];

  const hasSpanish = browserLanguages.some((lang) =>
    lang.toLowerCase().startsWith("es"),
  );

  return hasSpanish ? "es" : "en";
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "dark";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[lang];

  const projects = useMemo(
    () => [
      {
        title: "CloudDocs API",
        description: t.projectCloudDocs,
        githubUrl: "https://github.com/KeironClaudel/CloudDocs",
        liveUrl: "#",
      },
      {
        title: "SmartReports API",
        description: t.projectSmartReports,
        githubUrl: "https://github.com/KeironClaudel/SmartReports",
        liveUrl: "#",
      },
    ],
    [lang],
  );

  const skills = useMemo(
    () => [
      ".NET / ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "SQL Server / SQL",
      "REST APIs",
      "Clean Architecture",
      "Git / GitHub",
      "Data Analysis",
    ],
    [],
  );

  return (
    <div className={`app-shell`}>
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <Header
        theme={theme}
        onToggleTheme={onToggleTheme}
        toggleLang={toggleLang}
        lang={lang}
        t={t}
      />

      <main className="container page-content">
        <Hero t={t} />
        <About t={t} />
        <Skills skills={skills} t={t} />
        <Projects projects={projects} t={t} />
        <Contact t={t} />
      </main>

      <Footer />
    </div>
  );
}
