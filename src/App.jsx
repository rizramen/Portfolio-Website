import { PROJECTS, SITE, SKILLS, TIMELINE } from './siteContent';

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${SITE.name} home`}>
        FR
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{SITE.role}</p>
        <h1 id="hero-title">{SITE.name}</h1>
        <p className="hero-text">{SITE.intro}</p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="button primary" href="#work">
            View work
          </a>
          <a className="button secondary" href={`mailto:${SITE.email}`}>
            Email me
          </a>
        </div>
      </div>

      <div className="workspace-visual" aria-label="Portfolio coding workspace preview">
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
            <pre>{`const developer = {
  name: 'Fariz',
  focus: ['React', 'Java', 'UI', 'JS'],
  ships: 'clean, usable software'
};`}</pre>
            <div className="terminal" aria-label="Build status">
              <span>$ npm run build</span>
              <strong>portfolio ready</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" aria-labelledby="about-title">
      <div>
        <p className="section-label">About</p>
        <h2 id="about-title">Code that feels direct, useful, and well-shaped.</h2>
      </div>
      <p>{SITE.about}</p>
    </section>
  );
}

function Projects() {
  return (
    <section className="section work" id="work" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="section-label">Selected Work</p>
        <h2 id="projects-title">Personal Projects</h2>
      </div>
      <div className="project-grid">
        {PROJECTS.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.type}</span>
              <strong>{project.metric}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tags" aria-label={`${project.title} technology stack`}>
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
                aria-label={`View ${project.title} project`}
              >
                View project
              </a>
            ) : (
              <span className="project-link placeholder">Project link coming soon</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="section-label">Stack</p>
        <h2 id="skills-title">Tools and strengths I bring into projects.</h2>
      </div>
      <ul className="skill-grid" aria-label="Technical skills">
        {SKILLS.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2 id="experience-title">Learning by building and refining real projects.</h2>
      </div>
      <div className="timeline">
        {TIMELINE.map((item) => (
          <article key={item.year}>
            <time dateTime={item.year === 'Now' ? undefined : item.year}>{item.year}</time>
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

function Contact() {
  const activeSocialLinks = SITE.socialLinks.filter((link) => Boolean(link.href));

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="section-label">Contact</p>
        <h2 id="contact-title">
          Think I&apos;m cut out for an internship at your company? Shoot me a message.
        </h2>
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
              aria-label={`Visit ${SITE.name} on ${link.label}`}
            >
              {link.label}
            </a>
          ))
        ) : (
          <p className="contact-note">
            Add your GitHub and LinkedIn profile URLs in `src/siteContent.js` before publishing.
          </p>
        )}
      </div>
    </section>
  );
}

export default App;
