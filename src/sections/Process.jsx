import "./Process.css";

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Understand the Problem",
      desc: "Start with the business goal behind the request, not just the feature that was asked for.",
    },
    {
      num: "02",
      title: "Research Users & Requirements",
      desc: "Talk to who's actually using it, and find out exactly where the current experience breaks down.",
    },
    {
      num: "03",
      title: "Define User Flows",
      desc: "Map how someone moves through the product end to end, before a single screen exists.",
    },
    {
      num: "04",
      title: "Create Wireframes",
      desc: "Test structure and logic at low fidelity, before spending time on visual polish.",
    },
    {
      num: "05",
      title: "Design Polished Interfaces",
      desc: "High-fidelity UI built to hold up under real use, not just look good in a first review.",
    },
    {
      num: "06",
      title: "Build Scalable Design Systems",
      desc: "Components and patterns built to grow with the product, not get rebuilt every sprint.",
    },
    {
      num: "07",
      title: "Prototype Interactions",
      desc: "Make key flows clickable so decisions get tested before a line of code is written.",
    },
    {
      num: "08",
      title: "Iterate on Feedback",
      desc: "Design doesn't stop at handoff — it gets sharper with every round of real feedback.",
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
        <p className="process-tag">Design Process</p>
        <h2 className="process-title">
          From Problem to <span className="accent">Shipped Product</span>
        </h2>

        <div className="process-track">
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
