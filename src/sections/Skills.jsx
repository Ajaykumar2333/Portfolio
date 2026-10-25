import "./Skills.css";

const design = [
  "Design Thinking",
  "User Personas",
  "User Journeys",
  "Information Architecture",
  "Wireframing",
  "High-Fidelity UI Design",
  "Interaction Design",
  "Design Systems",
  "Accessibility (WCAG)",
  "Usability Testing",
  "Prototyping (Figma)",
  "Visual Design",
  "Branding",
];

const tools = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
  "DaVinci Resolve",
  "Design Tokens",
  "Component Libraries",
  "Developer Handoff",
  "Motion Graphics",
  "Poster Design",
  "Video Editing",
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-wrap">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-heading skills-heading">Design <span className="accent">&amp;</span> Tools</h2>

        <div className="skills-cols">
          <div>
            <p className="skills-col-label">Design</p>
            <div className="skills-chips">
              {design.map((s) => <span key={s} className="skills-chip">{s}</span>)}
            </div>
          </div>
          <div>
            <p className="skills-col-label">Tools</p>
            <div className="skills-chips">
              {tools.map((s) => <span key={s} className="skills-chip">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;