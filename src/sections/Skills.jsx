import "./Skills.css";

const research = [
  "User Research",
  "Market & Competitor Analysis",
  "User Personas",
  "Empathy Maps",
  "User Journeys",
  "Usability Testing",
];
const ux = [
  "Design Thinking",
  "User Flows",
  "Information Architecture",
  "Sitemaps",
  "Wireframing",
  "Prototyping",
  "Interaction Design",
];
const ui = [
  "High-Fidelity UI",
  "Visual Design",
  "Responsive Design",
  "Design Systems",
  "Design Tokens",
  "Component Libraries",
  "Accessibility (WCAG)",
  "Branding",
];
const tools = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "Adobe XD (basic)",
  "After Effects",
  "Premiere Pro",
  "DaVinci Resolve",
];
const ai = ["Claude", "Lovable"];
const other = [
  "Developer Hand-off",
  "Working with Developers",
  "Motion Graphics",
  "Video Editing",
  "HTML",
  "CSS",
  "JavaScript",
  "React (basics)",
];

const groups = [
  ["UX Research", research],
  ["UX Design", ux],
  ["UI Design", ui],
  ["Tools", tools],
  ["AI Tools", ai],
  ["Hand-off & Other", other],
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-wrap">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-heading skills-heading">Design <span className="accent">&amp;</span> Tools</h2>

        <div className="skills-cols">
          {groups.map(([label, list]) => (
            <div key={label}>
              <p className="skills-col-label">{label}</p>
              <div className="skills-chips">
                {list.map((s) => <span key={s} className="skills-chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;