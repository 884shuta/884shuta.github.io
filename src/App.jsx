import { useEffect, useState } from "react";
import {
  navItems,
  profile,
  projects,
  experiences,
  researchThemes,
  skills,
  hobbies,
  publicLinks,
  links
} from "./data";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = (() => {
    try {
      return window.localStorage.getItem("portfolio-theme");
    } catch {
      return null;
    }
  })();

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The selected theme still applies even when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.2, 0.4]
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <Header
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
          )
        }
      />

      <main>
        <Hero />

        <About />

        <Projects />

        <Experiences />

        <Research />

        <Skills />

        <Hobbies />

        <PublicLinks />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Header({ activeSection, theme, onToggleTheme }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="header-logo" href="#top" aria-label="Go to top">
        <img src="/favicon.svg" alt="" width="42" height="42" />
      </a>

      <nav
        id="global-nav"
        className={`global-nav ${isNavOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "is-active" : ""}
            onClick={() => setIsNavOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-button"
        type="button"
        onClick={onToggleTheme}
        aria-label={
          theme === "light" ? "ダークテーマに切り替え" : "ライトテーマに切り替え"
        }
        aria-pressed={theme === "dark"}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <button
        className="menu-button"
        type="button"
        onClick={() => setIsNavOpen((current) => !current)}
        aria-controls="global-nav"
        aria-expanded={isNavOpen}
        aria-label={isNavOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="eyebrow">Portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-description">{profile.description}</p>

        <div className="hero-links" aria-label="Featured links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
}

function MediaVisual({
  src,
  alt,
  className = "",
  kind = "default",
  variant = "default",
  width,
  height,
  loading = "lazy",
  fetchPriority
}) {
  const [hasError, setHasError] = useState(false);
  const showImage = src && !hasError;
  const classNames = [
    "media-visual",
    `media-visual--${kind}`,
    `visual-${variant}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          onError={() => setHasError(true)}
        />
      ) : (
        <FallbackVisual label={alt} />
      )}
    </div>
  );
}

function FallbackVisual({ label }) {
  return (
    <div className="visual-fallback" role="img" aria-label={label}>
      <span className="visual-plane visual-plane-a" />
      <span className="visual-plane visual-plane-b" />
      <span className="visual-line visual-line-a" />
      <span className="visual-line visual-line-b" />
      <span className="visual-line visual-line-c" />
      <span className="visual-dot visual-dot-a" />
      <span className="visual-dot visual-dot-b" />
    </div>
  );
}

function TagList({ items, className = "", ariaLabel }) {
  return (
    <ul className={`tag-list ${className}`.trim()} aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Section({ id, label, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className="section">
      <div className="section-heading">
        <button
          className="section-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls={`${id}-content`}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="eyebrow">{label}</span>
          <span className="section-title">{title}</span>
          <span className="section-toggle-icon" aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </div>
      {isOpen && (
        <div id={`${id}-content`} className="section-body">
          {children}
        </div>
      )}
    </section>
  );
}

function About() {
  return (
    <Section id="about" label="About" title="自己紹介">
      <div className="text-block">
        <p>
          横浜国立大学の情報系学部で、アプリ開発、XR、HCI、AI活用に関心を持って学んでいます。
          特に、技術を使って人の行動や記憶、日常の体験を支援することに興味があります。
        </p>
        <p>
          Swift / SwiftUIによるiOS・macOSアプリ開発を中心に、Flutter、Python、
          Web開発、機械学習にも取り組んできました。研究や個人開発では、単に機能を作るだけでなく、
          どのように使われるか、どのように負担を減らせるかを意識しています。
        </p>
      </div>

      <dl className="profile-list">
        {profile.details.map(([term, description]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" label="Projects" title="開発・研究・企画">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.name}>
            <div className="project-meta">
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              {project.presentation ? (
                <PresentationEmbed presentation={project.presentation} placement="media" />
              ) : (
                <MediaVisual
                  src={project.image}
                  alt={`${project.name} visual`}
                  className="project-media"
                  kind="project"
                  variant={project.visual}
                  width="800"
                  height="600"
                />
              )}
            </div>

            <div className="project-detail">
              <p className="project-summary">{project.summary}</p>

              <DetailList title="担当" items={project.role} />
              <DetailList title="工夫した点" items={project.points} />

              <TagList
                items={project.tech}
                className="tech-line"
                ariaLabel={`${project.name} technologies`}
              />

              {project.externalLinks && (
                <ProjectLinks
                  title={project.externalLinksTitle || "公開情報"}
                  links={project.externalLinks}
                />
              )}

            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProjectLinks({ title, links }) {
  return (
    <div className="project-links">
      <h4>{title}</h4>
      <div className="project-link-list">
        {links.map((link) => (
          <a
            key={link.label}
            className="project-link"
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function DetailList({ title, items }) {
  return (
    <div className="detail-list">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PresentationEmbed({ presentation, placement = "detail" }) {
  return (
    <div className={`presentation-embed presentation-embed--${placement}`}>
      <h4>{presentation.title}</h4>
      <div className="presentation-frame">
        <iframe
          src={presentation.src}
          title={presentation.title}
          loading="lazy"
          allowFullScreen
        />
      </div>
      <a
        className="presentation-open"
        href={presentation.src}
        target="_blank"
        rel="noreferrer"
      >
        資料を開く
      </a>
    </div>
  );
}

function Experiences() {
  return (
    <Section id="experiences" label="Experiences" title="ガクチカ・活動実績">
      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-item" key={experience.title}>
            <div className="timeline-year">{experience.year}</div>
            <div className="timeline-content">
              <h3>{experience.title}</h3>
              <p>{experience.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Research() {
  return (
    <Section id="research" label="Research" title="研究テーマ">
      <div className="research-list">
        {researchThemes.map((theme) => (
          <article className="research-item" key={theme.title}>
            <h3>{theme.title}</h3>

            <div className="research-grid">
              <ResearchPoint label="背景" text={theme.background} />
              <ResearchPoint label="目的" text={theme.purpose} />
              <ResearchPoint label="アプローチ" text={theme.approach} />
              <ResearchPoint label="今後" text={theme.future} />
            </div>

            <TagList items={theme.keywords} className="keyword-line" />
          </article>
        ))}
      </div>
    </Section>
  );
}

function ResearchPoint({ label, text }) {
  return (
    <div>
      <h4>{label}</h4>
      <p>{text}</p>
    </div>
  );
}

function Skills() {
  return (
    <Section id="skills" label="Skills" title="スキル">
      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill-row" key={skill.category}>
            <h3>{skill.category}</h3>
            <TagList items={skill.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Hobbies() {
  return (
    <Section id="hobbies" label="Hobbies" title="趣味">
      <div className="hobby-list">
        {hobbies.map((hobby) => (
          <article className="hobby-item" key={hobby.title}>
            <h3>{hobby.title}</h3>
            <p>{hobby.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function PublicLinks() {
  return (
    <Section id="publications" label="Public Links" title="公開情報・掲載リンク">
      <div className="link-card-list">
        {publicLinks.map((link) => (
          <article className="link-card" key={link.url}>
            <div>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
            <a href={link.url} target="_blank" rel="noreferrer">
              開く
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" label="Contact" title="連絡先・リンク">
      <p className="contact-text">
        研究、開発、ポートフォリオに関する情報は、以下のリンクから確認できます。
      </p>

      <div className="contact-links">
        {links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Hayashi Shuta</p>
    </footer>
  );
}

export default App;
