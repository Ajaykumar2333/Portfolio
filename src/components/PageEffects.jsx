import { useEffect, useRef } from "react";
import "./PageEffects.css";

// Blocks inside these sections fade up when they scroll into view.
// (The hero is skipped because it is already on screen when the page opens.)
const REVEAL_SELECTOR = "section[id]:not(#hero) .section-wrap > *";

/**
 * Small page-wide micro-interactions for the home page:
 *  1. a thin gold progress line at the top that grows as you scroll
 *  2. every section block fades up softly as it comes into view
 */
const PageEffects = () => {
  const barRef = useRef(null);

  // 1. scroll progress line
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 2. fade-up on scroll
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const items = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    items.forEach((el) => el.classList.add("fx-hidden"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.remove("fx-hidden");
          el.classList.add("fx-in"); // plays the animation; no transform stays afterwards
          io.unobserve(el);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      items.forEach((el) => el.classList.remove("fx-hidden", "fx-in"));
    };
  }, []);

  return <div className="fx-progress" ref={barRef} aria-hidden="true" />;
};

export default PageEffects;
