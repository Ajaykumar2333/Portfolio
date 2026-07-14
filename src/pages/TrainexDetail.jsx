import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./TrainexDetail.css";

/* ─────────────────────────────────────────────
   VIDEO MODAL
───────────────────────────────────────────── */
const VideoModal = ({ src, title, onClose }) => {
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
    <div className="tx-modal-overlay" onClick={onClose}>
      <div className="tx-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="tx-modal-header">
          <span className="tx-modal-title">{title}</span>
          <button className="tx-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="tx-modal-video-wrap">
          <video src={src} controls autoPlay className="tx-modal-video">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   IMAGE LIGHTBOX
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
    <div className="tx-lightbox-overlay" onClick={onClose}>
      <button className="tx-lightbox-close" onClick={onClose}>✕</button>
      <img
        src={src}
        alt={alt}
        className="tx-lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────
   VIDEO CARD WITH PREVIEW THUMBNAIL
───────────────────────────────────────────── */
const VideoCard = ({ src, title, tool, desc, disabled, onClick }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !disabled) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`tx-video-card ${disabled ? "tx-video-no-click" : "tx-clickable-video"}`}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tx-vid-thumb-wrap">
        {disabled ? (
          <div className="tx-vid-thumb-placeholder">
            <span className="tx-vid-icon-lg">🎬</span>
            <span className="tx-coming-soon-badge">Coming Soon</span>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              src={src}
              className="tx-vid-thumb-video"
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className={`tx-vid-play-overlay ${isHovered ? "tx-vid-play-overlay--hidden" : ""}`}>
              <div className="tx-play-circle">▶</div>
            </div>
          </>
        )}
      </div>
      <div className="tx-video-info">
        <span className="tx-video-tool">{tool}</span>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SCREEN CARD — index badge + highlighted heading
   + one-line description of what the screen is
   about, then the full screenshot. Click opens
   the full-size lightbox.
───────────────────────────────────────────── */
const ScreenCard = ({ index, label, desc, src, alt, onOpen }) => (
  <div className="tx-screen-card">
    <div className="tx-screen-card-head">
      <span className="tx-screen-card-index">{index}</span>
      <div className="tx-screen-card-text">
        <h3 className="tx-screen-card-title">{label}</h3>
        <p className="tx-screen-card-desc">{desc}</p>
      </div>
    </div>
    <div className="tx-screen-card-frame">
      <img
        src={src}
        alt={alt}
        className="tx-screen-img tx-clickable-img"
        onClick={() => onOpen(src, alt)}
      />
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const TrainexDetail = () => {
  const [videoModal, setVideoModal] = useState(null);
  const [lightbox, setLightbox]     = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const openVideo = (src, title) => setVideoModal({ src, title });
  const closeVideo = () => setVideoModal(null);
  const openImage = (src, alt) => setLightbox({ src, alt });
  const closeImage = () => setLightbox(null);

  const websitePages = [
    { label: "Courses", src: "/assets/course.jpg",
      desc: "Full course catalogue with filters — helps learners quickly find the right SAP module or IT course for their background." },
    { label: "Our Programs", src: "/assets/ourprograms.jpg",
      desc: "Individual and corporate program tracks laid out side by side, so each visitor lands on the path built for them." },
    { label: "Projects", src: "/assets/Projects.jpg",
      desc: "Live project listings that give learners a look at the hands-on, portfolio-building work they'll actually do." },
    { label: "Project Detail", src: "/assets/Projectdetail.jpg",
      desc: "A deep dive into a single project — scope, tools used, and the outcome a learner walks away with." },
    { label: "Reviews", src: "/assets/reviews.jpg",
      desc: "Student testimonials and success stories that build trust before a visitor ever talks to the team." },
    { label: "Live Sessions", src: "/assets/livesession.jpg",
      desc: "Webinar schedule and registration — keeps prospective learners engaged with upcoming live content." },
  ];

  return (
    <div className="tx-page">

      {videoModal && (
        <VideoModal src={videoModal.src} title={videoModal.title} onClose={closeVideo} />
      )}
      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={closeImage} />
      )}

      {/* ── HERO ── */}
      <section className="tx-hero">
        <div className="tx-hero-inner">
          <Link to="/" className="tx-back">← Back to Work</Link>
          <div className="tx-tags-row">
            <span className="tx-tag tx-tag-orange">UI Design</span>
            <span className="tx-tag">Frontend Dev</span>
            <span className="tx-tag">Motion Design</span>
          </div>
          <h1 className="tx-hero-title">
            Trainex <span className="tx-accent">Academy</span>
          </h1>
          <p className="tx-hero-sub">
            IT Learning, Upskilling & Careers — Marketing Website · Motion Design
          </p>
          <div className="tx-meta-grid">
            <div className="tx-meta-item">
              <span className="tx-meta-label">My Role</span>
              <span className="tx-meta-value">UI Designer + Frontend</span>
            </div>
            <div className="tx-meta-item">
              <span className="tx-meta-label">Type</span>
              <span className="tx-meta-value">Company Project</span>
            </div>
            <div className="tx-meta-item">
              <span className="tx-meta-label">Platform</span>
              <span className="tx-meta-value">Website</span>
            </div>
            <div className="tx-meta-item">
              <span className="tx-meta-label">Tools</span>
              <span className="tx-meta-value">Figma · HTML/CSS/JS · After Effects</span>
            </div>
            <div className="tx-meta-item">
              <span className="tx-meta-label">Live</span>
              <a href="https://www.trainexacademy.com" target="_blank" rel="noreferrer" className="tx-meta-link">trainexacademy.com ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO BANNER IMAGE ── */}
      <div className="tx-img-banner">
        <img
          src="/assets/Homepage.png"
          alt="Trainex Homepage"
          className="tx-banner-img tx-clickable-img"
          onClick={() => openImage("/assets/Homepage.png", "Trainex Homepage")}
        />
      </div>

      {/* ── 01 OVERVIEW ── */}
      <section className="tx-section tx-section-white">
        <div className="tx-inner">
          <div className="tx-section-label">01 — Overview</div>
          <h2 className="tx-heading">What is <span className="tx-accent">Trainex Academy?</span></h2>
          <p className="tx-body">
            Trainex Academy is an IT training institute based in Hyderabad offering expert-led SAP training, IT courses, live projects, and corporate training for freshers and working professionals — both online and in-person. The website connects prospective learners with 300+ industry trainers and communicates the full course catalogue, corporate offering, and enrollment path.
          </p>
          <div className="tx-highlight-box">
            🚀 Live at <a href="https://www.trainexacademy.com" target="_blank" rel="noreferrer">trainexacademy.com</a> — a real shipped product actively used by students and corporate clients across India.
          </div>
          <h3 className="tx-subheading">What I Did</h3>
          <div className="tx-role-cards">
            <div className="tx-role-card">
              <div className="tx-role-icon">🎨</div>
              <div className="tx-role-content">
                <h4>UI Design — Figma</h4>
                <p>Designed every page of the marketing website — homepage, courses, corporate, reviews, webinar, and projects — from wireframe through final visual design.</p>
              </div>
            </div>
            <div className="tx-role-card">
              <div className="tx-role-icon">💻</div>
              <div className="tx-role-content">
                <h4>Frontend — HTML, CSS & JavaScript</h4>
                <p>My team lead set up the React project architecture. Within that setup, I wrote the component-level HTML, CSS, and JavaScript — translating my own Figma designs into working UI and making sure every page was fully responsive across desktop, tablet, and mobile.</p>
              </div>
            </div>
            <div className="tx-role-card">
              <div className="tx-role-icon">🎬</div>
              <div className="tx-role-content">
                <h4>Motion & Creative — After Effects · Premiere Pro · Photoshop</h4>
                <p>Logo animation, platform intro video, trainer profile animation, promotional videos, and social media poster designs — complete visual brand execution beyond the screens.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 PROBLEM ── */}
      <section className="tx-section tx-section-gray">
        <div className="tx-inner">
          <div className="tx-section-label">02 — The Problem</div>
          <h2 className="tx-heading">What needed to <span className="tx-accent">be solved</span></h2>
          <p className="tx-body">
            Trainex Academy had no digital presence. Prospective students had no way to discover the institute, understand what it offered, or start the enrollment conversation online — and there was no visual brand content to build trust before someone talked to the team.
          </p>
          <div className="tx-problem-grid">
            <div className="tx-problem-card">
              <div className="tx-problem-num">01</div>
              <h4>No Website</h4>
              <p>Zero digital presence — no way for students to discover Trainex, explore courses, or understand the value of enrolling.</p>
            </div>
            <div className="tx-problem-card">
              <div className="tx-problem-num">02</div>
              <h4>No Brand Identity in Motion</h4>
              <p>No visual brand content — no videos, no animations, no social media assets to build awareness and trust online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 DESIGN PROCESS — HORIZONTAL FLOW ── */}
      <section className="tx-section tx-section-white tx-process-section">
        <div className="tx-inner">
          <div className="tx-section-label">03 — Design Process</div>
          <h2 className="tx-heading">How I <span className="tx-accent">approached it</span></h2>
          <p className="tx-body">Full product build — not a redesign. Six phases, zero guesswork.</p>

          <div className="tx-process-flow">
            {[
              { num: "01", icon: "🔍", title: "Understand", desc: "Business model, 3 user types, competitor audit of NIIT & Simplilearn" },
              { num: "02", icon: "🗂️", title: "Structure",  desc: "Full sitemap — 7 website pages mapped and structured before Figma" },
              { num: "03", icon: "✏️", title: "Wireframe",  desc: "Low-fi layouts for key pages — hierarchy first, looks second" },
              { num: "04", icon: "🎨", title: "Visual Design", desc: "Navy + orange system, every screen with real content & component states" },
              { num: "05", icon: "💻", title: "Build & Ship", desc: "HTML/CSS/JS — translated Figma 1:1, API integrated, tested, live" },
              { num: "06", icon: "🎬", title: "Motion",     desc: "Logo anim, intro video, trainer reel, 3 promos, 6 posters" },
            ].map((step, i, arr) => (
              <div key={i} className="tx-flow-node-wrap">
                <div className="tx-flow-node">
                  <div className="tx-flow-node-icon">{step.icon}</div>
                  <span className="tx-flow-node-num">{step.num}</span>
                  <h4 className="tx-flow-node-title">{step.title}</h4>
                  <p className="tx-flow-node-desc">{step.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="tx-flow-arrow">
                    <div className="tx-flow-arrow-line" />
                    <div className="tx-flow-arrow-head">›</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 WIREFRAMES ── */}
      <section className="tx-section tx-section-white">
        <div className="tx-inner">
          <div className="tx-section-label">04 — Wireframes</div>
          <h2 className="tx-heading">Layout before <span className="tx-accent">looks</span></h2>
          <p className="tx-body">
            Before applying any colors or visual design, I wireframed the key pages in Figma. The goal was to get the content hierarchy, layout, and user flow right first — then layer on the visual design.
          </p>
          <div className="tx-wf-grid">
            {[
              { src: "/assets/wf-homepage.jpg", label: "Homepage — Layout & Hierarchy" },
              { src: "/assets/wf-courses.jpg",  label: "Courses Page — Filters & Cards" },
            ].map((wf, i) => (
              <div key={i} className="tx-wf-item">
                <img
                  src={wf.src}
                  alt={wf.label}
                  className="tx-screen-img tx-clickable-img"
                  onClick={() => openImage(wf.src, wf.label)}
                />
                <p className="tx-wf-label">{wf.label}</p>
              </div>
            ))}
          </div>
          <div className="tx-note-box">
            💡 Wireframing helped me catch layout problems early — like the homepage hero competing with the course cards for attention. I resolved the hierarchy in wireframes before investing time in visual design.
          </div>
        </div>
      </section>

      {/* ── 06 IA ── */}
      <section className="tx-section tx-section-gray">
        <div className="tx-inner">
          <div className="tx-section-label">05 — Information Architecture</div>
          <h2 className="tx-heading">Structure of <span className="tx-accent">the website</span></h2>
          <p className="tx-body">Every page mapped and given a clear conversion goal before any visual design began.</p>
          <div className="tx-ia-grid tx-ia-grid-single">
            <div className="tx-ia-card">
              <h3>🌐 Website Pages</h3>
              <div className="tx-ia-items">
                {[
                  ["Homepage /", "Awareness + conversion"],
                  ["Courses /courses", "Discovery + enrollment"],
                  ["Corporate /corporate", "B2B conversion"],
                  ["Reviews /reviews", "Trust building"],
                  ["Live Sessions /webinar", "Engagement"],
                  ["Projects /mainproject", "Value add"],
                  ["Privacy /privacypolicies", "Legal compliance"],
                ].map(([page, goal], i) => (
                  <div key={i} className="tx-ia-item">
                    <span className="tx-ia-page">{page}</span>
                    <span className="tx-ia-goal">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 WEBSITE DESIGN — SCREENS ── */}
      <section className="tx-section tx-section-white">
        <div className="tx-inner">
          <div className="tx-section-label">06 — Website Design</div>
          <h2 className="tx-heading">Every page. <span className="tx-accent">Every pixel.</span></h2>
          <p className="tx-body">Every single page designed in Figma and shipped live. Focus — build credibility, communicate value clearly, drive enrollments.</p>
        </div>

        <div className="tx-screens-list">
          <ScreenCard
            index="01"
            label="Homepage"
            desc="First impression and value proposition — hero banner, course highlights, trainer credibility, and a clear path to enrollment."
            src="/assets/Homepage.png"
            alt="Homepage — Full View"
            onOpen={openImage}
          />
          {websitePages.map((p, i) => (
            <ScreenCard
              key={i}
              index={String(i + 2).padStart(2, "0")}
              label={p.label}
              desc={p.desc}
              src={p.src}
              alt={p.label}
              onOpen={openImage}
            />
          ))}
        </div>
      </section>

      {/* ── 07 UI STYLE ── */}
      <section className="tx-section tx-section-gray">
        <div className="tx-inner">
          <div className="tx-section-label">07 — UI Style & Design System</div>
          <h2 className="tx-heading">Colors, typography <span className="tx-accent">& components</span></h2>

          <h3 className="tx-subheading">Color Palette</h3>
          <div className="tx-colors">
            {[
              { name: "Primary Blue",    hex: "#1B4F8A", use: "Headers, CTAs, accents",    border: false },
              { name: "Orange Accent",   hex: "#F16232", use: "Highlights, buttons, tags", border: false },
              { name: "Dark",            hex: "#111111", use: "Dark sections, footer",     border: false },
              { name: "White",           hex: "#FFFFFF", use: "Cards, backgrounds",         border: true  },
              { name: "Red — Alert",     hex: "#EF4444", use: "Errors, urgent notices",     border: false },
              { name: "Green — Success", hex: "#10B981", use: "Confirmations, live badges", border: false },
            ].map((c) => (
              <div className="tx-color-item" key={c.hex}>
                <div className="tx-color-swatch" style={{ background: c.hex, border: c.border ? "1px solid #ddd" : "none" }}></div>
                <span className="tx-color-name">{c.name}</span>
                <span className="tx-color-hex">{c.hex}</span>
                <span className="tx-color-use">{c.use}</span>
              </div>
            ))}
          </div>

          <h3 className="tx-subheading" style={{ marginTop: "48px" }}>Typography — Inter</h3>
          <div className="tx-type-scale">
            {[
              { name: "H1 — Hero",    size: "56–72px / 800", demo: "Trainex Academy",              style: { fontSize: "28px", fontWeight: "800" } },
              { name: "H2 — Section", size: "36–44px / 700", demo: "What We Offer",                style: { fontSize: "20px", fontWeight: "700" } },
              { name: "H3 — Card",    size: "20–24px / 600", demo: "SAP Training",                 style: { fontSize: "16px", fontWeight: "600" } },
              { name: "Body",         size: "15–16px / 400", demo: "Expert-led IT training courses.", style: { fontSize: "14px", fontWeight: "400", color: "#666" } },
              { name: "Label",        size: "11–12px / 700 / CAPS", demo: "UI DESIGN",             style: { fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", color: "#F16232" } },
            ].map((t, i) => (
              <div key={i} className="tx-type-row">
                <span className="tx-type-name">{t.name}</span>
                <span className="tx-type-size">{t.size}</span>
                <span className="tx-type-demo" style={t.style}>{t.demo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 FRONTEND ── */}
      <section className="tx-section tx-section-gray">
        <div className="tx-inner">
          <div className="tx-section-label">08 — Frontend Development</div>
          <h2 className="tx-heading">Designed it. <span className="tx-accent">Coded it.</span></h2>
          <p className="tx-body">My team lead set up the React project architecture and environment. Within that setup, I wrote the component-level HTML, CSS, and JavaScript — translating every Figma screen I designed into working UI, and making sure every single page was fully responsive. Designing and building the same product gave me a real advantage: I know exactly which design decisions are practical to build.</p>
          <div className="tx-dev-grid">
            <div className="tx-dev-card">
              <h4>📄 HTML & CSS</h4>
              <p>Structured and styled every page — semantic HTML, clean CSS, consistent spacing and component states across all pages.</p>
            </div>
            <div className="tx-dev-card">
              <h4>⚡ JavaScript</h4>
              <p>Interactive elements — navigation, tabs, dynamic content rendering, API data display.</p>
            </div>
            <div className="tx-dev-card">
              <h4>📱 Fully Responsive</h4>
              <p>Desktop (1440px+) · Tablet (768–1439px) · Mobile (below 768px) — every page tested and made responsive across all breakpoints.</p>
            </div>
            <div className="tx-dev-card">
              <h4>🔌 API Integration</h4>
              <p>Dynamic course listings and live session schedules fetched from the backend and displayed in the UI.</p>
            </div>
          </div>
          <div className="tx-highlight-box" style={{ marginTop: "32px" }}>
            💡 Being both the designer and a frontend contributor on the same product meant zero handoff problems. What you see in the live site matches the Figma design closely — because I understood both sides of the same decisions.
          </div>
        </div>
      </section>

      {/* ── 10 CREATIVE WORK ── */}
      <section className="tx-section tx-section-dark">
        <div className="tx-inner">
          <div className="tx-section-label tx-label-orange">09 — Motion & Creative Work</div>
          <h2 className="tx-heading tx-heading-white">Beyond screens — <span className="tx-accent">brand brought to life</span></h2>
          <p className="tx-body tx-body-muted">
            After shipping the digital product, I extended the Trainex brand into motion and visual design — creating a complete set of creative assets for brand identity and marketing in After Effects, Premiere Pro, and Photoshop.
          </p>

          <h3 className="tx-subheading tx-subheading-white">Motion Assets</h3>
          <div className="tx-creative-video-grid">
            {/* Logo Animation */}
            <VideoCard
              src="/assets/logo-animation.mp4"
              title="Logo Animation"
              tool="After Effects"
              desc="Brand identity animation — the Trainex logo brought to life. Used across all video content as an opener."
              onClick={() => openVideo("/assets/logo-animation.mp4", "Logo Animation")}
            />
            {/* Platform Intro Video */}
            <VideoCard
              src="/assets/Trainexprefix.mov"
              title="Platform Intro Video"
              tool="After Effects · Premiere Pro"
              desc="Brand introduction video for Trainex Academy — used for platform onboarding and marketing."
              onClick={() => openVideo("/assets/Trainexprefix.mov", "Platform Intro Video")}
            />
            {/* Trainer Profile Animation */}
            <VideoCard
              src="/assets/trainer-profile-animation.mp4"
              title="Trainer Profile Animation"
              tool="After Effects · Premiere Pro"
              desc="Animated profile video for trainers — used to showcase expertise and build credibility with prospective students."
              onClick={() => openVideo("/assets/trainer-profile-animation.mp4", "Trainer Profile Animation")}
            />
          </div>

          {/* ── PROMOTIONAL VIDEOS ── */}
          <h3 className="tx-subheading tx-subheading-white" style={{ marginTop: "48px" }}>Promotional Videos</h3>
          <div className="tx-promo-grid">
            {[
              { file: "/assets/promotion1.mov", label: "Promotional Video 1" },
              { file: "/assets/promotion2.mov", label: "Promotional Video 2" },
              { file: "/assets/promotion3.mov", label: "Promotional Video 3" },
            ].map((promo, i) => (
              <VideoCard
                key={i}
                src={promo.file}
                title={promo.label}
                tool="Premiere Pro"
                desc="Short-form video for marketing and awareness."
                onClick={() => openVideo(promo.file, promo.label)}
              />
            ))}
          </div>

          {/* ── POSTERS ── */}
          <h3 className="tx-subheading tx-subheading-white" style={{ marginTop: "48px" }}>Poster & Social Media Designs</h3>
          <p className="tx-body tx-body-muted" style={{ marginBottom: "28px" }}>
            Social media posters and marketing visuals designed in Photoshop — for course launches, announcements, and brand awareness.
          </p>
          <div className="tx-poster-grid">
            {["Poster1","Poster2","Poster3","Poster4","Poster5","Poster6","Poster7","Poster8"].map((name, i) => (
              <div
                key={name}
                className="tx-poster-card tx-clickable-img"
                onClick={() => openImage(`/assets/${name}.jpg`, `Poster ${i + 1}`)}
              >
                <img
                  src={`/assets/${name}.jpg`}
                  alt={`Poster ${i + 1}`}
                  className="tx-screen-img"
                  style={{ aspectRatio: "1/1", objectFit: "cover" }}
                />
                <div className="tx-poster-hover-overlay">
                  <span>View Full</span>
                </div>
              </div>
            ))}
          </div>

          <div className="tx-tools-row" style={{ marginTop: "40px" }}>
            <span className="tx-tool-badge">After Effects</span>
            <span className="tx-tool-badge">Premiere Pro</span>
            <span className="tx-tool-badge">Photoshop</span>
          </div>
        </div>
      </section>

      {/* ── 11 OUTCOME ── */}
      <section className="tx-section tx-section-white">
        <div className="tx-inner">
          <div className="tx-section-label">10 — Outcome</div>
          <h2 className="tx-heading">From <span className="tx-accent">zero to live product.</span></h2>
          <div className="tx-outcome-list">
            {[
              "Complete marketing website — designed in Figma, built in HTML/CSS/JS, fully responsive across every page",
              "Dynamic content integration — course listings and live session schedules pulled from backend APIs",
              "Logo animation, platform intro video, and trainer profile animation — full motion brand identity",
              "3 promotional videos — brand awareness and marketing",
              "8 poster designs — social media and marketing collateral",
              "Live product actively used by students and corporate clients across India",
            ].map((item, i) => (
              <div key={i} className="tx-outcome-item">
                <span className="tx-outcome-tick">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="tx-live-link">
            <a href="https://www.trainexacademy.com" target="_blank" rel="noreferrer" className="tx-btn-primary">
              View Live Site ↗
            </a>
            <Link to="/" className="tx-btn-outline">← All Projects</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TrainexDetail;