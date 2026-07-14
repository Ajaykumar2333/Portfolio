import "./Process.css";

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Problem-first",
      desc: "Before touching a single pixel, I dig into the real problem — user pain points, business goals, and constraints.",
    },
    {
      num: "02",
      title: "Fast Prototyping",
      desc: "Ideas move fast from sketch to clickable prototype, so concepts can be seen and felt early — not just described.",
    },
    {
      num: "03",
      title: "Real-user Feedback",
      desc: "Designs get tested with real users, not just gut instinct — every assumption earns its place through feedback.",
    },
    {
      num: "04",
      title: "Continuous Iteration",
      desc: "Design doesn't stop at handoff. I refine based on data and feedback, again and again, until it's right.",
    },
  ];

  return (
    <section className="process" id="process">
      <svg
        className="process-wave"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C240,90 480,0 720,28 C960,56 1200,96 1440,40 L1440,0 L0,0 Z"
          fill="#f2f2f0"
        />
      </svg>

      <div className="process-container">
        <p className="process-tag">My Approach</p>
        <h2 className="process-title">
          How I <span className="accent">Design</span>
        </h2>

        <div className="process-track">
          <span className="process-track-line" />
          {steps.map((step) => (
            <div className="process-node" key={step.num}>
              <div className="process-circle">{step.num}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;