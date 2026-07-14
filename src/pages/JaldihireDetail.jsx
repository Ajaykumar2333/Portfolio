import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./JaldihireDetail.css";

const landingPages = [
  { key: "employer", label: "Employer", path: "employer", img: "Employer.jpg", color: "#F16232", tagline: "For companies hiring at scale" },
  { key: "applicant", label: "Applicant", path: "applicant", img: "Applicant.jpg", video: "ApplicantPageScroll.mp4", color: "#22C55E", tagline: "For candidates seeking a role" },
  { key: "interviewer", label: "Interviewer", path: "interviewer", img: "interviewer.jpg", color: "#F6B643", tagline: "For freelance panel members" },
];

const decisions = [
  {
    num: "01",
    title: "Design system before screens",
    desc: "I built the complete design system — color tokens, button library, form states, alert variants, data tables, icon system — before designing any product screens. With multiple panels and developers working in parallel, consistency needed a foundation first.",
  },
  {
    num: "02",
    title: "Website redesign to establish credibility",
    desc: "I was asked to take ownership of the website and rebuild it, so I approached it as a full ground-up redesign — clear sections for each user type (Employer, Applicant, Interviewer), each with its own value proposition and CTA flow, built to match the product's positioning as a serious B2B SaaS tool.",
  },
  {
    num: "03",
    title: "Dark navy + orange = brand distinction",
    desc: "The Jaldihire brand uses a dark navy and orange palette that stands out in a recruitment space dominated by blues and greens. I carried this consistently across the website and dashboard without making it feel heavy.",
  },
  {
    num: "04",
    title: "Job listing page built for quick scanning",
    desc: "The All Jobs page was designed with density in mind — recruiters and employers need to scan many listings fast. Cards were structured to show the most critical info (title, company, location, salary) at a glance without opening.",
  },
];

/* ─────────────────────────────────────────────
   SHOT — shows a full design/screenshot scaled
   to fit in one view (no scrolling required),
   click to open full-size in the lightbox
───────────────────────────────────────────── */
const Shot = ({ src, alt, onOpen }) => (
  <div className="jh-shot" onClick={() => onOpen(src, alt)} role="button" tabIndex={0}>
    <img src={src} alt={alt} className="jh-screen-img" />
    <span className="jh-shot-hint">⤢ Click to view full size</span>
  </div>
);

/* ─────────────────────────────────────────────
   IMAGE LIGHTBOX — full detail view on demand
───────────────────────────────────────────── */
const ImageLightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="jh-lightbox-overlay" onClick={onClose}>
      <button className="jh-lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <img src={src} alt={alt} className="jh-lightbox-img" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

/* ─────────────────────────────────────────────
   SCROLL-TRIGGERED VIDEO — video only starts
   playing once its container scrolls into view,
   and pauses again once it scrolls out. Avoids
   autoplaying off-screen content and gives a
   "walk up to the laptop and it turns on" feel.
───────────────────────────────────────────── */
const ScrollPlayVideo = ({ src, className, onLoadedMetadata }) => {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    const wrapEl = wrapRef.current;
    if (!videoEl || !wrapEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(wrapEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="jh-motion-laptop-screen">
      <video
        ref={videoRef}
        src={src}
        className={className}
        loop
        muted
        playsInline
        onLoadedMetadata={onLoadedMetadata}
      />
    </div>
  );
};

const JaldihireDetail = () => {
  const img = (name) => `/assets/${name}`;
  const [lightbox, setLightbox] = useState(null);
  const openLightbox = (src, alt) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="jh-page">

      {/* ── HERO ── */}
      <section className="jh-hero">
        <div className="jh-hero-inner">
          <Link to="/" className="jh-back">← Back to Work</Link>
          <div className="jh-tags-row">
            <span className="jh-tag jh-tag-accent">UI/UX Design</span>
            <span className="jh-tag">Design System</span>
            <span className="jh-tag">B2B SaaS</span>
            <span className="jh-tag">Marketing Website</span>
          </div>
          <h1 className="jh-hero-title">
            Jaldi<span className="jh-accent">Hire</span>
          </h1>
          <p className="jh-hero-tagline">360° Hiring Solution</p>
          <p className="jh-hero-sub">
            An AI-powered recruitment SaaS platform. I joined mid-development and elevated the entire visual quality — redesigning the marketing website from scratch, building the design system, and designing key product screens.
          </p>
          <div className="jh-meta-grid">
            <div className="jh-meta-item">
              <span className="jh-meta-label">My Role</span>
              <span className="jh-meta-value">UI/UX Designer</span>
            </div>
            <div className="jh-meta-item">
              <span className="jh-meta-label">Type</span>
              <span className="jh-meta-value">Company Project</span>
            </div>
            <div className="jh-meta-item">
              <span className="jh-meta-label">Duration</span>
              <span className="jh-meta-value">Ongoing — joined mid-build</span>
            </div>
            <div className="jh-meta-item">
              <span className="jh-meta-label">Platform</span>
              <span className="jh-meta-value">Website + Web Application</span>
            </div>
            <div className="jh-meta-item">
              <span className="jh-meta-label">Tools</span>
              <span className="jh-meta-value">Figma</span>
            </div>
            <div className="jh-meta-item">
              <span className="jh-meta-label">Live</span>
              <a href="https://jaldihire.com" target="_blank" rel="noreferrer" className="jh-meta-link">jaldihire.com ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO BANNER IMAGE ── */}
      <div className="jh-img-banner">
        <img src={img("Halfhomepage.png")} alt="Jaldihire Homepage" className="jh-banner-img" />
      </div>

      {/* ── 01 OVERVIEW ── */}
      <section className="jh-section jh-white jh-section-after-banner">
        <div className="jh-inner">
          <div className="jh-section-label">01 — Overview</div>
          <h2 className="jh-heading">What is <span className="jh-accent">Jaldihire?</span></h2>
          <p className="jh-body">Jaldihire is a 360-degree AI-powered SaaS recruitment platform designed for the Office of the CHRO. It centralizes talent acquisition — from job creation and sourcing, to background verification, interviews, and offers — all in one system serving employers, recruiters, applicants, and freelance interviewers.</p>

          <div className="jh-context-box">
            <strong>Context:</strong> Jaldihire was already under development when I joined. The core application flows, backend, and product logic were already built by the team. My involvement was specifically on the <strong>UI/UX side</strong> — I came in and elevated the visual quality of the product. I was not involved in the full web application flows or feature logic; my role was to bring visual consistency, usability, and a proper design system to a product that needed UI direction.
          </div>

          <div className="jh-highlight-box">
            🚀 Live at <a href="https://jaldihire.com" target="_blank" rel="noreferrer">jaldihire.com</a> — A real shipped product serving real employers and job seekers across India.
          </div>
        </div>
      </section>

      {/* ── 02 MY SCOPE ── */}
      <section className="jh-section jh-gray">
        <div className="jh-inner">
          <div className="jh-section-label">02 — My Scope</div>
          <h2 className="jh-heading">What I <span className="jh-accent">actually did</span></h2>
          <p className="jh-body">Rather than designing from zero, my job was to take an existing product in mid-build and make it visually strong, consistent, and credible. I focused on the areas where design had the most impact.</p>

          <div className="jh-scope-grid">
            <div className="jh-scope-card">
              <h4>✅ What I worked on</h4>
              <ul>
                <li>Redesigned the complete marketing website from scratch</li>
                <li>Built the Design System — colors, typography, buttons, forms, dropdowns, alerts, tables, icons</li>
                <li>Designed the Employer Dashboard UI</li>
                <li>Designed Post a Job form</li>
                <li>Designed All Jobs listing page</li>
                <li>Designed Job Description page</li>
                <li>Designed Applicant landing page</li>
                <li>Designed Interviewer landing page</li>
              </ul>
            </div>
            <div className="jh-scope-card jh-scope-out">
              <h4>× What was already built</h4>
              <ul>
                <li>Core web application flows and feature logic</li>
                <li>Backend architecture and APIs</li>
                <li>Initial product structure (Recruiter, Advisor, Interviewer panels)</li>
                <li>Business logic and data models</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 WEBSITE BRAND & TYPOGRAPHY ── */}
      <section className="jh-section jh-white">
        <div className="jh-inner">
          <div className="jh-section-label">03 — Website Brand & Typography</div>
          <h2 className="jh-heading">The website's <span className="jh-accent">look & feel</span></h2>
          <p className="jh-body">The marketing website runs on its own, distinct visual language from the web application — a warm yellow-to-orange gradient for every button and CTA, a deep navy as the primary color, and Poppins set across the entire site.</p>

          <div className="jh-brand-grid">
            <div className="jh-brand-card">
              <div className="jh-brand-swatch jh-brand-swatch-gradient"></div>
              <div className="jh-brand-card-name">Accent Gradient</div>
              <span className="jh-brand-card-hex">#F5E84C → #F6B643</span>
              <p className="jh-brand-card-use">Used on every button and CTA across the website — Contact Sales, Hire Me, form submits.</p>
            </div>
            <div className="jh-brand-card">
              <div className="jh-brand-swatch jh-brand-swatch-primary"></div>
              <div className="jh-brand-card-name">Primary</div>
              <span className="jh-brand-card-hex">#072C50</span>
              <p className="jh-brand-card-use">Navigation bar, hero background, and body text — the anchor color of the site.</p>
            </div>
          </div>

          <div className="jh-font-showcase">
            <div className="jh-font-hero">
              <span className="jh-font-hero-aa">Aa</span>
              <span className="jh-font-hero-name">Poppins</span>
              <span className="jh-font-hero-sub">Used across the entire website — headings, body, labels, buttons</span>
            </div>
            <div className="jh-font-scale">
              {[
                { name: "H1 — Hero", size: "48–56px / 700", sample: "360° Hiring Solution", sampleSize: "26px", weight: "700" },
                { name: "H2 — Section", size: "32–36px / 600", sample: "What is Jaldihire?", sampleSize: "20px", weight: "600" },
                { name: "H3 — Card Title", size: "18–20px / 600", sample: "Achieve your hiring targets", sampleSize: "15px", weight: "600" },
                { name: "Body", size: "14–16px / 400", sample: "Employers create job listings and manage candidates.", sampleSize: "14px", weight: "400", color: "#666" },
                { name: "Button / Label", size: "14–15px / 600", sample: "Contact Sales", sampleSize: "13px", weight: "600", color: "#072C50" },
              ].map((t, i) => (
                <div key={i} className="jh-font-row">
                  <span className="jh-font-row-name">{t.name}</span>
                  <span className="jh-font-row-size">{t.size}</span>
                  <span className="jh-font-row-demo" style={{ fontSize: t.sampleSize, fontWeight: t.weight, color: t.color || "#111" }}>{t.sample}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 WEBSITE REDESIGN ── */}
      <section className="jh-section jh-white">
        <div className="jh-inner-wide">
          <div className="jh-inner">
            <div className="jh-section-label">04 — Website Redesign</div>
            <h2 className="jh-heading">Marketing website — <span className="jh-accent">full redesign</span></h2>
            <p className="jh-body">I was asked to take ownership of the website and rebuild it — so I redesigned it from scratch: the homepage, dedicated landing pages for each user type (Employer, Applicant, Interviewer), the services pages, and the About / Mission-Vision pages.</p>
          </div>

          {/* Homepage — browser window */}
          <div className="jh-browser-block jh-browser-contained">
            <span className="jh-screen-label">Homepage</span>
            <div className="jh-browser-window">
              <div className="jh-browser-bar">
                <span className="jh-browser-dot jh-dot-red" />
                <span className="jh-browser-dot jh-dot-yellow" />
                <span className="jh-browser-dot jh-dot-green" />
                <span className="jh-browser-url">jaldihire.com</span>
              </div>
              <div className="jh-browser-scroll">
                <div className="jh-scroll-hint-track">
                  <span className="jh-scroll-hint">↓ Scroll to see full page</span>
                </div>
                <Shot src={img("JHHomepage.png")} alt="Jaldihire Homepage" onOpen={openLightbox} />
              </div>
            </div>
          </div>

          {/* Landing pages — all three shown, stacked, no click required.
              Applicant is heavy on scroll-triggered animation, so instead of a
              static screenshot it shows a laptop mockup with the screen
              recording — the video only starts playing once the laptop
              scrolls into view. */}
          <div className="jh-lp-heading-wrap">
            <span className="jh-lp-eyebrow">One product — three audiences</span>
            <h3 className="jh-lp-title">Landing Pages <span className="jh-accent">by user type</span></h3>
          </div>

          {landingPages.map((p) => (
            <div key={p.key} className="jh-browser-block jh-browser-contained">
              <div className="jh-browser-role-tag" style={{ "--lp-color": p.color }}>
                <span className="jh-browser-role-dot" style={{ background: p.color }}></span>
                {p.label} Page
                <span className="jh-browser-role-tagline">— {p.tagline}</span>
              </div>

              {p.key === "applicant" ? (
                <div className="jh-motion-showcase">
                  <span className="jh-motion-watermark">APPLICANT</span>
                  <div className="jh-motion-stack">
                    <div className="jh-motion-laptop">
                      <div className="jh-motion-laptop-cam"></div>
                      <ScrollPlayVideo
                        src={img("applicant-page-screen-recording.mp4")}
                        className="jh-motion-video"
                        onLoadedMetadata={(e) => { e.target.playbackRate = 1.6; }}
                      />
                    </div>
                    <div className="jh-motion-laptop-base-top"></div>
                    <div className="jh-motion-laptop-base-bottom"></div>
                  </div>
                  <span className="jh-motion-caption">Screen Recording</span>
                  <p className="jh-motion-note">This page is built with scroll-triggered micro-interactions and prototype animations — captured here as a screen recording since a static screenshot can't show the motion.</p>
                </div>
              ) : (
                <div className="jh-browser-window">
                  <div className="jh-browser-bar">
                    <span className="jh-browser-dot jh-dot-red" />
                    <span className="jh-browser-dot jh-dot-yellow" />
                    <span className="jh-browser-dot jh-dot-green" />
                    <span className="jh-browser-url">jaldihire.com/{p.path}</span>
                  </div>
                  <div className="jh-browser-scroll">
                    <div className="jh-scroll-hint-track">
                      <span className="jh-scroll-hint">↓ Scroll to see full page</span>
                    </div>
                    <Shot src={img(p.img)} alt={`${p.label} Landing Page`} onOpen={openLightbox} />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Applicant Sign In — prototype in motion, full width, autoplay loop */}
          <div className="jh-inner" style={{ marginTop: "64px" }}>
            <h3 className="jh-subheading">Applicant Sign In — prototype in motion</h3>
            <p className="jh-body">Beyond static screens, I built out the sign-in flow as an interactive Figma prototype. Here it is captured in motion — the full transition into the Applicant Sign In screen.</p>
          </div>

          <div className="jh-video-full">
            <video
              src={img("applicant-login-page-animation.mp4")}
              className="jh-video-full-el"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Services + About — side by side browser windows */}
          <div className="jh-browser-grid-2">
            <div className="jh-browser-block">
              <span className="jh-screen-label">Services Page</span>
              <div className="jh-browser-window">
                <div className="jh-browser-bar">
                  <span className="jh-browser-dot jh-dot-red" />
                  <span className="jh-browser-dot jh-dot-yellow" />
                  <span className="jh-browser-dot jh-dot-green" />
                  <span className="jh-browser-url">jaldihire.com/services</span>
                </div>
                <div className="jh-browser-scroll">
                  <div className="jh-scroll-hint-track">
                    <span className="jh-scroll-hint">↓ Scroll to see full page</span>
                  </div>
                  <Shot src={img("Services with content.jpg")} alt="Services Page" onOpen={openLightbox} />
                </div>
              </div>
            </div>
            <div className="jh-browser-block">
              <span className="jh-screen-label">About Us Page</span>
              <div className="jh-browser-window">
                <div className="jh-browser-bar">
                  <span className="jh-browser-dot jh-dot-red" />
                  <span className="jh-browser-dot jh-dot-yellow" />
                  <span className="jh-browser-dot jh-dot-green" />
                  <span className="jh-browser-url">jaldihire.com/about</span>
                </div>
                <div className="jh-browser-scroll">
                  <div className="jh-scroll-hint-track">
                    <span className="jh-scroll-hint">↓ Scroll to see full page</span>
                  </div>
                  <Shot src={img("aboutus.jpg")} alt="About Us Page" onOpen={openLightbox} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 DESIGN SYSTEM ── */}
      <section className="jh-section jh-gray">
        <div className="jh-inner-wide">
          <div className="jh-inner">
            <div className="jh-section-label">05 — Design System</div>
            <h2 className="jh-heading">Built the system <span className="jh-accent">from scratch</span></h2>
            <p className="jh-body">Before touching any product screens, I built a comprehensive design system in Figma for the web application — colors, buttons, forms, alerts, tables, dropdowns, and icons — giving the development team a single source of truth for every UI element.</p>
          </div>

          {/* COLOR PALETTE — web application tokens */}
          <div className="jh-inner">
            <h3 className="jh-subheading">Color Palette</h3>
            <div className="jh-colors">
              {[
                { color: "#000000", name: "Text / Icons", hex: "#000000", use: "Primary text and icon color" },
                { color: "#072C50", name: "Primary", hex: "#072C50", use: "Primary surface color across the app" },
                { color: "#013262", name: "Table Header", hex: "#013262", use: "Data table headers" },
                { color: "#0E69C1", name: "Buttons — Default", hex: "#0E69C1", use: "Default button state" },
                { color: "#0C4A87", name: "Buttons — Hover", hex: "#0C4A87", use: "Button hover state" },
              ].map((c, i) => (
                <div key={i} className="jh-color-item">
                  <div className="jh-color-swatch" style={{ background: c.color, border: c.border ? "1px solid #ddd" : "none" }}></div>
                  <span className="jh-color-name">{c.name}</span>
                  <span className="jh-color-hex">{c.hex}</span>
                  <span className="jh-color-use">{c.use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── STYLE GUIDE — full bleed ── */}
          <div className="jh-inner">
            <h3 className="jh-subheading" style={{ marginTop: "56px" }}>Design System Components</h3>
          </div>

          {/* ── DS COMPONENTS — each one full-width, stacked ── */}
          <div className="jh-ds-stack">

            <div className="jh-ds-row">
              <div className="jh-ds-info">
                <span className="jh-ds-num">01</span>
                <h4 className="jh-ds-title">Button Library — All States</h4>
                <p className="jh-ds-desc">Complete button system covering default, hover, disabled, icon-only, outline, and destructive variants. Every interactive state documented.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <Shot src={img("Buttons.jpg")} alt="Button Components" onOpen={openLightbox} />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row jh-ds-row-reverse">
              <div className="jh-ds-info">
                <span className="jh-ds-num">02</span>
                <h4 className="jh-ds-title">Form Inputs</h4>
                <p className="jh-ds-desc">Input fields covering all states — placeholder, focused, filled, success, error, disabled, and mandatory. Built to handle every real-world form scenario.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <Shot src={img("Forminputs.jpg")} alt="Form Input Components" onOpen={openLightbox} />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row">
              <div className="jh-ds-info">
                <span className="jh-ds-num">03</span>
                <h4 className="jh-ds-title">Alert System</h4>
                <p className="jh-ds-desc">Four alert types — success, warning, error, and info — in both inline and toast variants. Consistent iconography and color coding across the product.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <Shot src={img("Alerts.jpg")} alt="Alert Components" onOpen={openLightbox} />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row jh-ds-row-reverse">
              <div className="jh-ds-info">
                <span className="jh-ds-num">04</span>
                <h4 className="jh-ds-title">Data Tables</h4>
                <p className="jh-ds-desc">ATS-style data tables with alternating row colors, hover states, sortable headers, pagination, and action columns. Built for recruiters who live in dense data views.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <Shot src={img("Table.jpg")} alt="Table Components" onOpen={openLightbox} />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row">
              <div className="jh-ds-info">
                <span className="jh-ds-num">05</span>
                <h4 className="jh-ds-title">Dropdowns</h4>
                <p className="jh-ds-desc">Select dropdowns with single and multi-select options, default/selected/focused states, and accessible keyboard navigation patterns.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <Shot src={img("Dropdowns.jpg")} alt="Dropdown Components" onOpen={openLightbox} />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row jh-ds-row-reverse">
              <div className="jh-ds-info">
                <span className="jh-ds-num">06</span>
                <h4 className="jh-ds-title">Icon Library</h4>
                <p className="jh-ds-desc">Custom icon set covering all product actions — create, copy, paste, back, edit, view, and more — in consistent stroke weight and sizing across every panel.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <Shot src={img("Icons.jpg")} alt="Icon Library" onOpen={openLightbox} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 05 PRODUCT SCREENS ── */}
      <section className="jh-section jh-dark">
        <div className="jh-inner-wide">
          <div className="jh-inner">
            <div className="jh-section-label jh-label-dark">06 — Product Screens</div>
            <h2 className="jh-heading jh-heading-white">Dashboard & app screens — <span className="jh-accent">key deliverables</span></h2>
            <p className="jh-body jh-body-muted">I designed the Employer Dashboard, along with core screens: Post a Job form, All Jobs listing, and Job Description page. These screens were built on top of the design system I created.</p>
          </div>

          {/* Employer Dashboard — full bleed */}
          <div className="jh-inner">
            <h3 className="jh-subheading jh-subheading-white" style={{ marginTop: "40px" }}>Employer Dashboard</h3>
          </div>
          <div className="jh-screen-full jh-screen-full-dark">
            <div className="jh-screen-header jh-header-dark">
              <span className="jh-screen-label jh-label-white">Dashboard — Full View</span>
              <span className="jh-screen-badge jh-badge-dark">Figma → Dev Handoff</span>
            </div>
            <div className="jh-screen-frame jh-frame-dark">
              <Shot src={img("EmployerDashboard.jpg")} alt="Employer Dashboard" onOpen={openLightbox} />
            </div>
          </div>

          {/* Prototype */}
          <div className="jh-inner">
            <h3 className="jh-subheading jh-subheading-white" style={{ marginTop: "56px" }}>Prototype Animation</h3>
          </div>
          <div className="jh-screen-full jh-screen-full-dark">
            <div className="jh-screen-header jh-header-dark">
              <span className="jh-screen-label jh-label-white">Figma Prototype — Interaction Flow</span>
              <span className="jh-screen-badge jh-badge-dark">Prototype</span>
            </div>
            <div className="jh-screen-frame jh-frame-dark">
              <video
                src={img("animation1.mp4")}
                className="jh-screen-img jh-video"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <p className="jh-anim-note">Prototype animation built in Figma — demonstrating key interaction flows.</p>
          </div>

          {/* Job Screens — premium spotlight stack */}
          <div className="jh-inner">
            <h3 className="jh-subheading jh-subheading-white" style={{ marginTop: "56px" }}>Job Screens</h3>
          </div>

          {/* All Jobs — full width spotlight */}
          <div className="jh-job-spotlight">
            <div className="jh-job-spotlight-meta">
              <div className="jh-job-tag">Screen 01</div>
              <h4 className="jh-job-spotlight-title">All Jobs — Listing Page</h4>
              <p className="jh-job-spotlight-desc">Designed for density and speed. Recruiters can scan 1,300+ listings at a glance — title, company, location, salary, and application count all visible without opening a record. Filter bar pinned at top for instant refinement.</p>
              <div className="jh-job-pills">
                <span>Dense data layout</span>
                <span>Filter bar</span>
                <span>Quick scan cards</span>
              </div>
            </div>
            <div className="jh-job-spotlight-screen">
              <div className="jh-screen-frame jh-frame-dark">
                <Shot src={img("joblistingspage.jpg")} alt="Job Listings Page" onOpen={openLightbox} />
              </div>
            </div>
          </div>

          <div className="jh-job-divider" />

          {/* Job Description — full width spotlight, reversed */}
          <div className="jh-job-spotlight jh-job-spotlight-rev">
            <div className="jh-job-spotlight-meta">
              <div className="jh-job-tag">Screen 02</div>
              <h4 className="jh-job-spotlight-title">Job Description Page</h4>
              <p className="jh-job-spotlight-desc">Full job detail view with structured sections — description, responsibilities, skills, and package info. Sidebar surfaces the assigned Job Agent and recruiter contacts. Tab system separates Applicants, Panel Members, and descriptions cleanly.</p>
              <div className="jh-job-pills">
                <span>Tabbed layout</span>
                <span>Job agent sidebar</span>
                <span>Apply CTA</span>
              </div>
            </div>
            <div className="jh-job-spotlight-screen">
              <div className="jh-screen-frame jh-frame-dark">
                <Shot src={img("jobdescription.jpg")} alt="Job Description Page" onOpen={openLightbox} />
              </div>
            </div>
          </div>

          <div className="jh-job-divider" />

          {/* Post a Job — full width */}
          <div className="jh-job-spotlight">
            <div className="jh-job-spotlight-meta">
              <div className="jh-job-tag">Screen 03</div>
              <h4 className="jh-job-spotlight-title">Post a Job — Application Form</h4>
              <p className="jh-job-spotlight-desc">Multi-step job creation form. Employers fill in role details, package, experience requirements, and assign interviewers — all in a clean structured flow built entirely on the design system components I created.</p>
              <div className="jh-job-pills">
                <span>Multi-step form</span>
                <span>Design system inputs</span>
                <span>Employer flow</span>
              </div>
            </div>
            <div className="jh-job-spotlight-screen">
              <div className="jh-screen-frame jh-frame-dark">
                <Shot src={img("jobappplication.jpg")} alt="Job Application Form" onOpen={openLightbox} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 KEY DECISIONS ── */}
      <section className="jh-section jh-white">
        <div className="jh-inner">
          <div className="jh-section-label">07 — Key Design Decisions</div>
          <h2 className="jh-heading">Why I designed <span className="jh-accent">it this way</span></h2>

          <div className="jh-decisions" style={{ marginTop: "32px" }}>
            {decisions.map((d, i) => (
              <div key={i} className="jh-decision-card">
                <span className="jh-decision-num">{d.num}</span>
                <div className="jh-decision-content">
                  <h4>{d.title}</h4>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 OUTCOME ── */}
      <section className="jh-section jh-gray">
        <div className="jh-inner">
          <div className="jh-section-label">08 — Outcome</div>
          <h2 className="jh-heading">Delivered and <span className="jh-accent">shipped.</span></h2>

          <div className="jh-outcome-list">
            {[
              "Complete marketing website redesign — all user landing pages + services + about pages",
              "1 unified design system — colors, typography, buttons, forms, dropdowns, alerts, tables, icons",
              "Employer Dashboard UI — designed and handed off",
              "Post a Job form, All Jobs listing, and Job Description page",
              "Applicant & Interviewer landing pages designed",
              "All deliverables successfully handed to development and shipped live",
            ].map((item, i) => (
              <div key={i} className="jh-outcome-item">
                <span className="jh-outcome-tick">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="jh-live-link">
            <a href="https://jaldihire.com" target="_blank" rel="noreferrer" className="jh-btn-primary">View Live Site ↗</a>
            <Link to="/" className="jh-btn-outline">← All Projects</Link>
          </div>
        </div>
      </section>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
      )}

    </div>
  );
};

export default JaldihireDetail;