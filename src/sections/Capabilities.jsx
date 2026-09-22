import { useEffect, useRef, useState } from "react";
import "./Capabilities.css";

const cards = [
  {
    title: "UX / UI Design",
    desc: "From problem framing to high-fidelity screens — wireframes, flows, and interfaces built around how people actually use the product.",
    items: ["User Research", "Wireframes & Prototypes", "High-Fidelity UI", "Usability Testing"],
    image: "/assets/offer-uiux.png",
  },
  {
    title: "Frontend Development",
    desc: "I build what I design. React interfaces wired to real APIs, not static handoffs someone else has to interpret.",
    items: ["React & TypeScript", "REST API Integration", "Responsive, Production Code", "Performance Optimization"],
    image: "/assets/offer-dev.png",
  },
  {
    title: "Design Systems",
    desc: "Reusable components and tokens so the product stays consistent as it grows, instead of getting rebuilt every sprint.",
    items: ["Component Libraries", "Design Tokens", "Design-to-Code Handoff", "Documentation"],
    image: "/assets/offer-design-system.png",
  },
  {
    title: "Motion & Video",
    desc: "Reels, shorts, and marketing videos edited to hook fast — plus posters and social creatives that carry the same design language.",
    items: ["Motion Graphics", "Marketing Videos", "Poster Design", "Reels & Shorts Editing"],
    image: "/assets/offer-motion.png",
  },
];

const Capabilities = () => {
  const [active, setActive] = useState(0);
  const stackRef = useRef(null);

  // Scroll-progress driven active index instead of IntersectionObserver.
  // The .capability-sticky cards are position:sticky, so once pinned their
  // bounding rect stops updating and IO stops firing reliably (breaks when
  // scrolling back up). Measuring progress through the whole non-sticky
  // stack container works the same in both scroll directions.
  useEffect(() => {
    const handleScroll = () => {
      const stack = stackRef.current;
      if (!stack) return;

      const rect = stack.getBoundingClientRect();
      const scrollableRange = rect.height - window.innerHeight;

      if (scrollableRange <= 0) {
        setActive(0);
        return;
      }

      const scrolledIntoStack = -rect.top;
      const progress = Math.min(Math.max(scrolledIntoStack / scrollableRange, 0), 1);
      const idx = Math.min(cards.length - 1, Math.floor(progress * cards.length));
      setActive(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities-inner">
        {/* left column: heading + description + avatar, stacked together */}
        <div className="capabilities-left">
          <div className="capabilities-intro">
            <p className="section-eyebrow">What I Do</p>
            <h2 className="section-heading">
              What I <span className="accent">Offer</span>
            </h2>
            <p className="capabilities-subtext">
              End-to-end product design and front-end development.
            </p>
          </div>

          <div className="capabilities-avatar-wrap">
            {cards.map((card, i) => (
              <img
                key={card.title}
                src={card.image}
                alt={card.title}
                className={`capabilities-avatar${active === i ? " is-active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* right column: stacked cards */}
        <div className="capabilities-stack" ref={stackRef}>
          {cards.map((card, i) => (
            <div
              className="capability-sticky"
              key={card.title}
              style={{ "--i": i, top: `${200 + i * 20}px` }}
            >
              <div className={`capability-card${i % 2 === 0 ? " capability-card-accent" : ""}`}>
                <div className="capability-card-top">
                  <span className="capability-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21M6 6l2.2 2.2M15.8 15.8L18 18M6 18l2.2-2.2M15.8 8.2L18 6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <h3 className="capability-title">{card.title}</h3>
                </div>
                <ul className="capability-list">
                  {card.items.map((it) => (
                    <li key={it}>
                      <span className="capability-check">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <a className="capability-enquire" href="#contact">
                  Enquire ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;