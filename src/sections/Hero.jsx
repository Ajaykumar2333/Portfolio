import "./Hero.css";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  top: (i * 37 + 8) % 100,
  left: (i * 53 + 5) % 100,
  size: 2 + (i % 3),
  delay: (i % 6) * 0.7,
  dur: 6 + (i % 5),
}));

const tools = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
  { name: "Photoshop", icon: "https://cdn.simpleicons.org/adobephotoshop" },
  { name: "Illustrator", icon: "https://cdn.simpleicons.org/adobeillustrator" },
  { name: "After Effects", icon: "https://cdn.simpleicons.org/adobeaftereffects" },
  { name: "Premiere Pro", icon: "https://cdn.simpleicons.org/adobepremierepro" },
  { name: "DaVinci Resolve", icon: "https://cdn.simpleicons.org/davinciresolve" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
];

const Hero = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="hero-dot"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-glow" />

      <div className="hero-headline-wrap">
        <h1 className="hero-title">
          <span className="hero-line hero-line-1">CREATIVE</span>
          <span className="hero-line hero-line-2">DEVELOPER</span>
        </h1>
        <img src="/assets/avatar.png" alt="Ajaykumar Vodla" className="hero-avatar" />
      </div>

      <div className="hero-bottom-row">
        <div className="hero-tagline">
          <p>I bridge the design-to-code gap</p>
          <p className="hero-tagline-muted">
            UI/UX design, frontend development &amp; visual storytelling — end to end
          </p>
          <p className="hero-name">Ajaykumar Vodla</p>
        </div>

        <div className="hero-cta-col">
          <button className="hero-btn hero-btn-primary" onClick={() => handleScroll("work")}>
            View Work ↗
          </button>
          <a className="hero-btn hero-btn-secondary" href="/assets/Ajay-Resume.pdf" download>
            Resume
          </a>
        </div>
      </div>

      <div className="hero-tools">
        <div className="hero-tools-track">
          {[...tools, ...tools].map((tool, i) => (
            <div className="hero-tool-chip" key={`${tool.name}-${i}`}>
              <img src={tool.icon} alt="" onError={(e) => (e.target.style.display = "none")} />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;