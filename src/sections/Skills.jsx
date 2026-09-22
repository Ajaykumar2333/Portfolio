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

const tech = [
  "React",
  "React Native (Expo)",
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "PHP / MySQL",
  "Vite",
  "Responsive Design",
  "Component Architecture",
  "REST APIs",
  "Git & GitHub",
  "Design-to-Code Handoff",
  "Performance Optimization",
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-wrap">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-heading skills-heading">Design <span className="accent">&amp;</span> Tech</h2>

        <div className="skills-cols">
          <div>
            <p className="skills-col-label">Design</p>
            <div className="skills-chips">
              {design.map((s) => <span key={s} className="skills-chip">{s}</span>)}
            </div>
          </div>
          <div>
            <p className="skills-col-label">Tech</p>
            <div className="skills-chips">
              {tech.map((s) => <span key={s} className="skills-chip skills-chip--mono">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;