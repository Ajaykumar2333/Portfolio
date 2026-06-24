import "./Skills.css";

const designTools = [
  { name: "Figma",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "After Effects", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" },
  { name: "Premiere Pro",  icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" },
  { name: "Illustrator",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
];

const uiKnowledge = [
  { name: "Auto Layout",       emoji: "⚙️" },
  { name: "Variables",         emoji: "🔧" },
  { name: "Prototyping",       emoji: "🎯" },
  { name: "Typography",        emoji: "🔤" },
  { name: "Color Theory",      emoji: "🎨" },
  { name: "Design Systems",    emoji: "🗂️" },
  { name: "Components",        emoji: "🧩" },
  { name: "Spacing & Grid",    emoji: "📐" },
  { name: "Micro Interactions",emoji: "✨" },
];

const uxProcess = [
  { name: "User Research",     emoji: "🔍" },
  { name: "Wireframing",       emoji: "✏️" },
  { name: "User Flows",        emoji: "🗺️" },
  { name: "Usability Testing", emoji: "🧪" },
  { name: "Information Arch.", emoji: "🏗️" },
  { name: "Motion Design",     emoji: "🎬" },
];

const devTools = [
  { name: "HTML5",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Code",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-header">
          <p className="skills-tag">What I Do</p>
          <h2 className="skills-title">
            Skills &amp; <span className="accent">Toolbox</span>
          </h2>
        </div>

        {/* TOP ROW — 3 cols */}
        <div className="skills-grid-top">

          {/* Design Tools */}
          <div className="skills-card">
            <div className="skills-card-head">
              <span className="skills-card-icon">🎨</span>
              <h3>Design Tools</h3>
            </div>
            <div className="tool-chips">
              {designTools.map((t) => (
                <div key={t.name} className="tool-chip">
                  <img src={t.icon} alt={t.name} className="tool-chip-img" onError={e => e.target.style.display='none'} />
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UI Design Knowledge */}
          <div className="skills-card skills-card--featured">
            <div className="skills-card-head">
              <span className="skills-card-icon">✦</span>
              <h3>UI Design Knowledge</h3>
            </div>
            <div className="ui-chips-wrap">
              {uiKnowledge.map((u) => (
                <div key={u.name} className="ui-chip">
                  <span className="ui-chip-emoji">{u.emoji}</span>
                  <span>{u.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UX Process */}
          <div className="skills-card">
            <div className="skills-card-head">
              <span className="skills-card-icon">🧠</span>
              <h3>UX Process</h3>
            </div>
            <div className="tool-chips">
              {uxProcess.map((p) => (
                <div key={p.name} className="tool-chip">
                  <span className="process-emoji">{p.emoji}</span>
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM ROW — full width dev card */}
        <div className="skills-card skills-card--dev">
          <div className="skills-card-head">
            <span className="skills-card-icon">💻</span>
            <h3>Frontend — Handoff-ready</h3>
            <p className="dev-inline-note">I can build what I design — no frameworks needed.</p>
          </div>
          <div className="dev-tools-row">
            {devTools.map((t) => (
              <div key={t.name} className="dev-tool-chip">
                <img src={t.icon} alt={t.name} className="tool-chip-img" onError={e => e.target.style.display='none'} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
