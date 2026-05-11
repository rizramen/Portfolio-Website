import { useEffect, useState } from 'react';
import { CONTENT, DEFAULT_LANGUAGE, LANGUAGES, SITE } from './siteContent';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage && CONTENT[savedLanguage]) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language.slice(0, 2).toLowerCase();
  return CONTENT[browserLanguage] ? browserLanguage : DEFAULT_LANGUAGE;
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const content = CONTENT[language];

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.meta.skipToContent}
      </a>
      <Header content={content} language={language} onLanguageChange={setLanguage} />
      <main id="main-content">
        <Hero content={content} />
        <About content={content} />
        <Projects content={content} />
        <Skills content={content} />
        <Experience content={content} />
        <Contact content={content} />
      </main>
    </>
  );
}

function Header({ content, language, onLanguageChange }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={content.meta.homeAriaLabel}>
        FR
      </a>
      <div className="header-actions">
        <nav aria-label={content.meta.primaryNavAriaLabel}>
          <a href="#work">{content.navigation.projects}</a>
          <a href="#skills">{content.navigation.skills}</a>
          <a href="#experience">{content.navigation.experience}</a>
          <a href="#contact">{content.navigation.contact}</a>
        </nav>
        <div className="language-switcher" role="group" aria-label={content.meta.languageSwitcherLabel}>
          {LANGUAGES.map((option) => (
            <button
              key={option.code}
              type="button"
              className={option.code === language ? 'language-button is-active' : 'language-button'}
              onClick={() => onLanguageChange(option.code)}
              aria-pressed={option.code === language}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero({ content }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{content.hero.role}</p>
        <h1 id="hero-title">{SITE.name}</h1>
        <p className="hero-text">{content.hero.intro}</p>
        <div className="hero-actions" aria-label={content.meta.portfolioActionsAriaLabel}>
          <a className="button primary" href="#work">
            {content.hero.primaryCta}
          </a>
          <a className="button secondary" href={`mailto:${SITE.email}`}>
            {content.hero.secondaryCta}
          </a>
        </div>
      </div>

      <div className="workspace-visual" aria-label={content.meta.workspacePreviewAriaLabel}>
        <div className="window-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="editor-grid">
          <aside aria-hidden="true">
            <p>portfolio</p>
            <span>src/App.jsx</span>
            <span>src/styles.css</span>
            <span>src/siteContent.js</span>
          </aside>
          <div className="code-panel">
            <pre>{content.hero.codeSnippet}</pre>
            <div className="terminal" aria-label={content.meta.buildStatusAriaLabel}>
              <span>$ npm run build</span>
              <strong>{content.hero.terminalStatus}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ content }) {
  return (
    <section className="section about" aria-labelledby="about-title">
      <div>
        <p className="section-label">{content.about.label}</p>
        <h2 id="about-title">{content.about.title}</h2>
      </div>
      <p>{content.about.body}</p>
    </section>
  );
}

function Projects({ content }) {
  return (
    <section className="section work" id="work" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="section-label">{content.projects.label}</p>
        <h2 id="projects-title">{content.projects.title}</h2>
      </div>
      <div className="project-grid">
        {content.projects.items.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.type}</span>
              <strong>{project.metric}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tags" aria-label={`${project.title} ${content.projects.stackAriaLabel}`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.link ? (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${content.projects.viewProject} ${project.title}`}
              >
                {content.projects.viewProject}
              </a>
            ) : (
              <span className="project-link placeholder">{content.projects.projectLinkComingSoon}</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills({ content }) {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="section-label">{content.skills.label}</p>
        <h2 id="skills-title">{content.skills.title}</h2>
      </div>
      <ul className="skill-grid" aria-label={content.meta.technicalSkillsAriaLabel}>
        {content.skills.items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function Experience({ content }) {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="section-label">{content.experience.label}</p>
        <h2 id="experience-title">{content.experience.title}</h2>
      </div>
      <div className="timeline">
        {content.experience.items.map((item) => (
          <article key={`${item.year}-${item.title}`}>
            <time dateTime={/^\d{4}$/.test(item.year) ? item.year : undefined}>{item.year}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ content }) {
  const activeSocialLinks = SITE.socialLinks.filter((link) => Boolean(link.href));

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="section-label">{content.contact.label}</p>
        <h2 id="contact-title">{content.contact.title}</h2>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        {activeSocialLinks.length > 0 ? (
          activeSocialLinks.map((link) => (
            <a
              key={link.label}
              className="button secondary"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${content.contact.socialAriaLabelPrefix} ${link.label}`}
            >
              {link.label}
            </a>
          ))
        ) : (
          <p className="contact-note">{content.contact.missingLinksNote}</p>
        )}
      </div>
    </section>
  );
}

export default App;
