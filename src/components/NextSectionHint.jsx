import { useEffect, useRef, useState } from "react";
import "./NextSectionHint.css";

// Sections of the home page, top to bottom.
const ORDER = ["hero", "about", "work", "timeline", "skills", "award", "motion", "contact"];

// Words shown in the pill for the section that comes NEXT. Change them here.
const LABELS = {
  about: "About me",
  work: "My work",
  timeline: "Experience",
  skills: "Skills",
  award: "Awards",
  motion: "Motion & Video",
  contact: "Contact me",
};

const IDLE_MS = 900; // pill pops up when the visitor pauses scrolling this long
const FIRST_MS = 2500; // first pop-up after the page opens

const NextSectionHint = () => {
  const [index, setIndex] = useState(0); // section currently on screen
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const currentIndex = () => {
      let found = 0;
      ORDER.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) found = i;
      });
      return found;
    };

    const showLater = (ms) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setVisible(true), ms);
    };

    let ticking = false;
    const onScroll = () => {
      setVisible(false); // hide while the visitor is scrolling
      showLater(IDLE_MS); // pop up again when they pause
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIndex(currentIndex());
        ticking = false;
      });
    };

    setIndex(currentIndex());
    showLater(FIRST_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer.current);
    };
  }, []);

  const nextId = ORDER[index + 1];
  if (!nextId) return null; // last section: nothing below

  const goNext = () => {
    const el = document.getElementById(nextId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="nsh-wrap">
      {visible && (
        // key = plays the pop-in again each time the next section changes
        <button key={nextId} type="button" className="nsh-pill" onClick={goNext}>
          <span className="nsh-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14" />
              <path d="M6 13l6 6 6-6" />
            </svg>
          </span>
          <span className="nsh-text">
            <span className="nsh-eyebrow">Next up</span>
            <span className="nsh-label">{LABELS[nextId]}</span>
          </span>
        </button>
      )}
    </div>
  );
};

export default NextSectionHint;
