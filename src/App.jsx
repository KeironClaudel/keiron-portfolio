import { useMemo } from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Websites from "./pages/Websites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { useState, useEffect } from "react";
import { translations } from "./i18n";
import BackToTop from "./pages/BackToTop";
import ecotechPreview from "./assets/ecotechcr-preview.webp";
import { SiDotnet, SiGit } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import {
  SiCloudflare,
  SiDocker,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { TbApi } from "react-icons/tb";
import { HiOutlineCube } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { Analytics } from '@vercel/analytics/react';

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
        title: t.projectCloudDocsTitle,
        description: t.projectCloudDocs,
        backendUrl: "https://github.com/KeironClaudel/CloudDocs",
        frontendUrl: "https://github.com/KeironClaudel/clouddocs-frontend",
        liveUrl: "https://clouddocs-frontend.vercel.app/login",
        demoCredentials: {
          user: "demo@clouddocs.com / Demo1234!",
        },
        technologies: {
          backend: [
            { name: ".NET", icon: <HiOutlineCube /> },
            { name: "PostgreSQL", icon: <FaDatabase /> },
            { name: "Azure", icon: <HiOutlineCube /> },
          ],
          frontend: [{ name: "React", icon: <FaReact /> }],
          deployment: [
            { name: "Docker", icon: <SiDocker /> },
            { name: "Vercel", icon: <SiVercel /> },
          ],
        },
      },
      {
        title: t.projectInstantProformsTitle,
        description: t.projectInstantProforms,
        backendUrl: "https://github.com/KeironClaudel/InstantProformsAPI",
        frontendUrl: "https://github.com/KeironClaudel/instantproforms-web",
        liveUrl: "#",
        showDemoPlaceholder: true,
        demoCredentials: {
          user: t.projectDemoUserPending,
        },
        technologies: {
          backend: [
            { name: ".NET", icon: <HiOutlineCube /> },
            { name: "PostgreSQL", icon: <FaDatabase /> },
          ],
          frontend: [{ name: "React", icon: <FaReact /> }],
          deployment: [
            { name: "Docker", icon: <SiDocker /> },
            { name: "Vercel", icon: <SiVercel /> },
          ],
        },
      },
    ],
    [lang],
  );

  const websites = useMemo(
    () => [
      {
        title: "EcotechCR",
        description: t.websiteEcotechCr,
        previewImage: ecotechPreview,
        liveUrl: "https://www.ecotech-cr.com",
        websiteHrefLabel: "www.ecotech-cr.com",
        liveLabel: t.projectWebsite,
        technologies: {
          frontend: [
            { name: "React", icon: <FaReact /> },
            { name: "Vite", icon: <HiOutlineCube /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
          ],
          deployment: [
            { name: "Vercel", icon: <SiVercel /> },
            { name: "Cloudflare", icon: <SiCloudflare /> },
          ],
        },
      },
    ],
    [lang],
  );

  const skills = useMemo(
    () => [
      {
        category: "Backend",
        items: [
          { name: ".NET / ASP.NET Core", icon: <HiOutlineCube /> },
          { name: "C#", icon: <TbBrandCSharp /> },
          { name: "Entity Framework Core", icon: <FaDatabase /> },
          { name: "SQL Server / SQL", icon: <DiMsqlServer /> },
          { name: "REST APIs", icon: <TbApi /> },
        ],
      },
      {
        category: "Frontend",
        items: [{ name: "React (Basic)", icon: <FaReact /> }],
      },
      {
        category: "Tools",
        items: [
          { name: "Git / GitHub", icon: <SiGit /> },
          { name: "Data Analysis", icon: <LuBrainCircuit /> },
        ],
      },
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
        <Websites websites={websites} t={t} />
        <Contact t={t} />
      </main>

      <Footer />
      <BackToTop />
      <Analytics />
    </div>
  );
}
