import "./About.css";

const About = () => {
  const skills = [
    { name: "UI/UX Design", icon: "🎯" },
    { name: "UX Research", icon: "🔍" },
    { name: "Wireframing", icon: "📐" },
    { name: "Prototyping", icon: "🧩" },
    { name: "Responsive Design", icon: "📱" },
    { name: "HTML • CSS • JavaScript", icon: "💻" },
    { name: "Motion Design", icon: "🎬" },
    { name: "Developer Collaboration", icon: "🤝" },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left">
          <div className="about-img-wrapper">
            <div className="about-img-placeholder"><img src="./assets/Ajaypic.png" alt="" /></div>
            <div className="about-badge">
              <span className="badge-num">2+</span>
              <span className="badge-label">Years<br />UI/UX</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="about-tag">About Me</p>
          <h2 className="about-title">
            Designing <span className="accent">Interfaces.</span>
            <br />
            Building Better <span className="accent">Experiences.</span>
          </h2>
          <p className="about-desc">
            I'm a UI/UX Designer with 2+ years of experience creating intuitive, user-centered digital experiences, plus hands-on time as a frontend developer building the very interfaces I design. I specialize in UX research, wireframing, prototyping, and high-fidelity UI design that balances user needs with business goals.
          </p>
          <p className="about-desc">
            With working knowledge of HTML, CSS, JavaScript, and React, I don't just hand off designs — I collaborate directly with developers, and often build the front end myself, to make sure what ships matches what was designed.
          </p>
          <div className="about-tools">
            {skills.map((s) => (
              <span key={s.name} className="tool-badge">
                {s.icon} {s.name}
              </span>
            ))}
          </div>
        </div>

      </div>

     
    </section>
  );
};

export default About;