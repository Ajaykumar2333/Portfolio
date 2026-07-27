import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./CaseStudyNav.css";

/**
 * Case study navigation.
 * Desktop: a real docked sidebar (fixed width, own background, page
 * content is pushed over via padding so nothing sits underneath it) —
 * full section names always readable, current section highlighted.
 * Mobile/tablet: sidebar is hidden; a small back button + a slim
 * progress bar with the current section name take its place.
 *
 * Props:
 *  - sections: [{ id: "overview", label: "Overview" }, ...]
 *  - backTo: path for the "back to work" link (default "/")
 *  - projectTitle: shown as the sidebar's eyebrow heading
 */
const CaseStudyNav = ({ sections, backTo = "/", projectTitle = "" }) => {
  const [active, setActive] = useState(sections[0]?.id);
  const observerRef = useRef(null);

  useEffect(() => {
    const opts = { rootMargin: "-45% 0px -50% 0px", threshold: 0 };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    };
    observerRef.current = new IntersectionObserver(handleIntersect, opts);
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current && observerRef.current.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === active));
  const total = sections.length;
  const progressPct = total > 1 ? (activeIndex / (total - 1)) * 100 : 0;
  const activeLabel = sections[activeIndex]?.label || "";
  const activeLabelText = activeLabel.replace(/^\d+\s*—\s*/, "");

  return (
    <div className="csn-root">

      {/* ── Desktop: docked sidebar ── */}
      <nav className="csn-sidebar" aria-label="Case study sections">
        <Link to={backTo} className="csn-sidebar-back">
          <span className="csn-back-arrow">←</span> Back to Work
        </Link>

        {projectTitle && <p className="csn-sidebar-eyebrow">{projectTitle}</p>}

        <ol className="csn-sidebar-list">
          {sections.map((s, i) => {
            const state =
              i < activeIndex ? "done" : i === activeIndex ? "active" : "upcoming";
            return (
              <li key={s.id} className={`csn-sidebar-item csn-sidebar-item--${state}`}>
                <button
                  className="csn-sidebar-btn"
                  onClick={() => scrollToSection(s.id)}
                  aria-current={state === "active" ? "true" : undefined}
                >
                  <span className="csn-sidebar-indicator" />
                  <span className="csn-sidebar-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="csn-sidebar-label">{s.label.replace(/^\d+\s*—\s*/, "")}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── Mobile/tablet: back button + slim progress bar ── */}
      <Link to={backTo} className="csn-back-mobile">
        <span className="csn-back-arrow">←</span>
      </Link>

      <div className="csn-mobile-bar" role="progressbar" aria-valuenow={activeIndex + 1} aria-valuemin={1} aria-valuemax={total}>
        <div className="csn-mobile-track">
          <div className="csn-mobile-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="csn-mobile-label">
          <span className="csn-mobile-count">{String(activeIndex + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}</span>
          <span className="csn-mobile-text">{activeLabelText}</span>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyNav;
