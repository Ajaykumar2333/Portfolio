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
            IT Learning, Upskilling & Careers — Website · LMS · Motion Design
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
              <span className="tx-meta-value">Website + LMS</span>
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
          src="/assets/hero-banner.png"
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
            Trainex Academy is an IT training institute based in Hyderabad offering expert-led SAP training, IT courses, live projects, and corporate training for freshers and working professionals — both online and in-person. The platform connects learners with 300+ industry trainers and provides end-to-end career support from enrollment to job placement assistance.
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
                <p>Designed every page of the website and complete LMS platform — homepage, courses, corporate, reviews, webinar, projects, and all LMS screens including dashboard, profile, and recordings.</p>
              </div>
            </div>
            <div className="tx-role-card">
              <div className="tx-role-icon">💻</div>
              <div className="tx-role-content">
                <h4>Frontend — HTML, CSS & JavaScript</h4>
                <p>A senior developer set up the architecture. I wrote the component-level HTML, CSS, and JavaScript — translating my own Figma designs into working, responsive UI code with API integration.</p>
              </div>
            </div>
            <div className="tx-role-card">
              <div className="tx-role-icon">🎬</div>
              <div className="tx-role-content">
                <h4>Motion & Creative — After Effects · Premiere Pro · Photoshop</h4>
                <p>Logo animation, intro video, trainer profile animation, promotional videos, and social media poster designs — complete visual brand execution beyond screens.</p>
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
            Trainex Academy had no digital presence. Prospective students had no way to discover the platform, understand what it offered, or enroll online. Existing students had no centralized place to access their learning materials, track progress, or attend live sessions.
          </p>
          <div className="tx-problem-grid">
            <div className="tx-problem-card">
              <div className="tx-problem-num">01</div>
              <h4>No Website</h4>
              <p>Zero digital presence — no way for students to discover Trainex, explore courses, or understand the value of enrolling.</p>
            </div>
            <div className="tx-problem-card">
              <div className="tx-problem-num">02</div>
              <h4>No Learning Platform</h4>
              <p>Students had no centralized system to access recordings, materials, assignments, or track their own progress.</p>
            </div>
            <div className="tx-problem-card">
              <div className="tx-problem-num">03</div>
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
              { num: "02", icon: "🗂️", title: "Structure",  desc: "Full sitemap — 7 website pages + 9 LMS sections defined before Figma" },
              { num: "03", icon: "✏️", title: "Wireframe",  desc: "Low-fi layouts for all key pages — hierarchy first, looks second" },
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

      {/* ── 04 USER PERSONAS — RADIAL HUB LAYOUT ── */}
      <section className="tx-section tx-section-dark">
        <div className="tx-inner">
          <div className="tx-section-label tx-label-orange">04 — Understanding the Users</div>

          <div className="tx-personas-hub">
            {/* Center heading */}
            <div className="tx-personas-hub-center">
              <h2 className="tx-heading tx-heading-white" style={{ margin: 0 }}>
                3 users.<br /><span className="tx-accent">3 different needs.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "12px", lineHeight: "1.6" }}>
                Before designing a single screen,<br />I mapped who would use Trainex<br />and what they actually needed.
              </p>
            </div>

            {/* Persona 01 — Learner */}
            <div className="tx-persona-hub-card tx-persona-hub-card--1">
              <div className="tx-persona-hub-top">
                <div className="tx-persona-hub-avatar" style={{ background:"rgba(241,98,50,0.15)", borderColor:"rgba(241,98,50,0.3)", color:"#F16232" }}>RK</div>
                <div>
                  <span className="tx-persona-hub-tag" style={{ color:"#F16232", borderColor:"rgba(241,98,50,0.3)" }}>Learner</span>
                  <h3>Ravi Kumar</h3>
                  <p className="tx-persona-hub-meta">Fresh IT Graduate · 22 · Hyderabad</p>
                </div>
              </div>
              <blockquote className="tx-persona-hub-quote">"I don't know which SAP module to pick — I can't afford to waste ₹40,000 on the wrong one."</blockquote>
              <div className="tx-persona-hub-rows">
                <div className="tx-persona-hub-row"><span className="tx-persona-hub-label">Goal</span><p>Land a SAP consulting job within 6 months</p></div>
                <div className="tx-persona-hub-row"><span className="tx-persona-hub-label">Pain</span><p>Too many modules, no guidance on which fits his background</p></div>
                <div className="tx-persona-hub-row"><span className="tx-persona-hub-label">Design Impact</span><p>Free counselling CTA · Success story videos · LMS progress tracking</p></div>
              </div>
            </div>

            {/* Persona 02 — Upskiller */}
            <div className="tx-persona-hub-card tx-persona-hub-card--2">
              <div className="tx-persona-hub-top">
                <div className="tx-persona-hub-avatar" style={{ background:"rgba(16,185,129,0.15)", borderColor:"rgba(16,185,129,0.3)", color:"#10b981" }}>PM</div>
                <div>
                  <span className="tx-persona-hub-tag" style={{ color:"#10b981", borderColor:"rgba(16,185,129,0.3)" }}>Upskiller</span>
                  <h3>Priya Menon</h3>
                  <p className="tx-persona-hub-meta">Working Professional · 28 · Bangalore</p>
                </div>
              </div>
              <blockquote className="tx-persona-hub-quote">"I can only study after 9pm — I need recordings I can watch at my own pace."</blockquote>
              <div className="tx-persona-hub-rows">
                <div className="tx-persona-hub-row"><span className="tx-persona-hub-label" style={{color:"#10b981"}}>Goal</span><p>Upskill in SAP FICO without quitting her job</p></div>
                <div className="tx-persona-hub-row"><span className="tx-persona-hub-label" style={{color:"#10b981"}}>Pain</span><p>Fixed-timing live classes don't fit her schedule</p></div>
                <div className="tx-persona-hub-row"><span className="tx-persona-hub-label" style={{color:"#10b981"}}>Design Impact</span><p>Recordings library with search · Downloadable materials · Flexible schedule view</p></div>
              </div>
            </div>

            {/* Persona 03 — Corporate */}
            <div className="tx-persona-hub-card tx-persona-hub-card--3">
              <div className="tx-persona-hub-top">
                <div className="tx-persona-hub-avatar" style={{ background:"rgba(139,92,246,0.15)", borderColor:"rgba(139,92,246,0.3)", color:"#a78bfa" }}>MR</div>
                <div>
                  <span className="tx-persona-hub-tag" style={{ color:"#a78bfa", borderColor:"rgba(139,92,246,0.3)" }}>Corporate</span>
                  <h3>Mahesh Reddy</h3>
                  <p className="tx-persona-hub-meta">L&D Manager · 38 · Mumbai</p>
                </div>
              </div>
              <blockquote className="tx-persona-hub-quote">"I need to train 20 employees on SAP this quarter and show management ROI."</blockquote>
              <div className="tx-persona-hub-rows">
                <div className="tx-persona-hub-row"><span className="tx-persona-hub-label" style={{color:"#a78bfa"}}>Goal</span><p>Train 20 employees within Q3 budget, show results</p></div>
                <div className="tx-persona-hub-row"><span className="tx-persona-hub-label" style={{color:"#a78bfa"}}>Pain</span><p>Generic training doesn't match their SAP version</p></div>
                <div className="tx-persona-hub-row"><span className="tx-persona-hub-label" style={{color:"#a78bfa"}}>Design Impact</span><p>Dedicated corporate page · Customisation messaging · Fast-response contact form</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 WIREFRAMES ── */}
      <section className="tx-section tx-section-white">
        <div className="tx-inner">
          <div className="tx-section-label">05 — Wireframes</div>
          <h2 className="tx-heading">Layout before <span className="tx-accent">looks</span></h2>
          <p className="tx-body">
            Before applying any colors or visual design, I wireframed the key pages in Figma. The goal was to get the content hierarchy, layout, and user flow right first — then layer on the visual design.
          </p>
          <div className="tx-wf-grid">
            {[
              { src: "/assets/wf-homepage.png", label: "Homepage — Layout & Hierarchy" },
              { src: "/assets/wf-courses.png",  label: "Courses Page — Filters & Cards" },
              { src: "/assets/wf-lms.png",      label: "LMS Dashboard — Information Layout" },
              { src: "/assets/wf-mobile.png",   label: "Mobile — Responsive Layout" },
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
            💡 Wireframing helped me catch layout problems early — like the LMS dashboard having too much information competing for attention. I resolved the hierarchy in wireframes before investing time in visual design.
          </div>
        </div>
      </section>

      {/* ── 06 USER FLOWS — VISUAL FLOW DIAGRAM ── */}
      <section className="tx-section tx-section-gray">
        <div className="tx-inner">
          <div className="tx-section-label">06 — User Flows</div>
          <h2 className="tx-heading">How users <span className="tx-accent">move through</span> the platform</h2>

          {/* Learner Journey */}
          <h3 className="tx-subheading">Learner Journey</h3>
          <div className="tx-userflow">
            {[
              { icon: "🔍", step: "Discovery",  desc: "Google / Social Ad",       color: "#1B4F8A" },
              { icon: "📖", step: "Explore",    desc: "Homepage → Courses",        color: "#1B4F8A" },
              { icon: "💬", step: "Counsel",    desc: "Free SME Guidance",         color: "#F16232" },
              { icon: "✅", step: "Enroll",     desc: "Pay → Get LMS Access",      color: "#F16232" },
              { icon: "📱", step: "Learn",      desc: "Dashboard → Live Sessions", color: "#10b981" },
              { icon: "🏆", step: "Graduate",   desc: "Placement Support",         color: "#10b981" },
            ].map((s, i, arr) => (
              <div key={i} className="tx-userflow-row">
                <div className="tx-userflow-node" style={{ borderColor: s.color }}>
                  <div className="tx-userflow-node-icon">{s.icon}</div>
                  <div className="tx-userflow-node-label">
                    <strong style={{ color: s.color }}>{s.step}</strong>
                    <span>{s.desc}</span>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="tx-userflow-connector">
                    <div className="tx-userflow-line" />
                    <div className="tx-userflow-arrowhead">›</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Corporate Journey */}
          <h3 className="tx-subheading" style={{ marginTop: "48px" }}>Corporate Client Journey</h3>
          <div className="tx-userflow">
            {[
              { icon: "🏢", step: "Discover", desc: "Search Corporate SAP Training", color: "#1B4F8A" },
              { icon: "📄", step: "Review",   desc: "Corporate Page → Curriculum",   color: "#1B4F8A" },
              { icon: "📞", step: "Contact",  desc: "Fill Form → Talk to Team",       color: "#F16232" },
              { icon: "🎓", step: "Train",    desc: "Custom Batch · 20 Employees",    color: "#10b981" },
            ].map((s, i, arr) => (
              <div key={i} className="tx-userflow-row">
                <div className="tx-userflow-node" style={{ borderColor: s.color }}>
                  <div className="tx-userflow-node-icon">{s.icon}</div>
                  <div className="tx-userflow-node-label">
                    <strong style={{ color: s.color }}>{s.step}</strong>
                    <span>{s.desc}</span>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="tx-userflow-connector">
                    <div className="tx-userflow-line" />
                    <div className="tx-userflow-arrowhead">›</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 IA ── */}
      <section className="tx-section tx-section-white">
        <div className="tx-inner">
          <div className="tx-section-label">07 — Information Architecture</div>
          <h2 className="tx-heading">Structure of <span className="tx-accent">the platform</span></h2>
          <p className="tx-body">Two products, one brand — a public marketing website focused on conversion, and a private LMS focused on learning.</p>
          <div className="tx-ia-grid">
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
            <div className="tx-ia-card">
              <h3>📱 LMS Sections</h3>
              <div className="tx-ia-items">
                {[
                  ["Dashboard", "Learning overview + progress"],
                  ["Live Sessions", "Join or replay sessions"],
                  ["Recordings", "Searchable session library"],
                  ["Material", "PDFs, slides, docs"],
                  ["Projects", "Hands-on project briefs"],
                  ["Assignments", "Pending + graded work"],
                  ["Quiz", "Module assessments"],
                  ["Incident/Support", "Ticket system"],
                  ["My Profile", "Personal + progress data"],
                ].map(([section, desc], i) => (
                  <div key={i} className="tx-ia-item">
                    <span className="tx-ia-page">{section}</span>
                    <span className="tx-ia-goal">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08 WEBSITE DESIGN ── */}
      <section className="tx-section tx-section-gray">
        <div className="tx-inner">
          <div className="tx-section-label">08 — Website Design</div>
          <h2 className="tx-heading">Every page. <span className="tx-accent">Every pixel.</span></h2>
          <p className="tx-body">Every single page designed in Figma. Focus — build credibility, communicate value clearly, drive enrollments.</p>

          <div
            className="tx-screen-showcase-hero tx-clickable-img"
            onClick={() => openImage("/assets/Homepage.png", "Homepage — Full View")}
          >
            <img src="/assets/Homepage.png" alt="Homepage Full View" />
            <div className="tx-screen-showcase-label">
              <h4>Homepage — Full View</h4>
              <span>Awareness + Conversion</span>
            </div>
          </div>

          <h3 className="tx-subheading" style={{ marginTop: "48px" }}>Website Pages</h3>
          <div className="tx-bento-grid">
            {[
              { num: "01", name: "Courses",       purpose: "Awareness + Conversion", src: "/assets/course.png" },
              { num: "02", name: "Our Programs",   purpose: "Discovery + Enrollment",  src: "/assets/ourprograms.png" },
              { num: "03", name: "Projects",       purpose: "Value Add",               src: "/assets/Projects.png" },
              { num: "04", name: "Project Detail", purpose: "Deep Dive",               src: "/assets/Projectdetail.png" },
              { num: "05", name: "Reviews",        purpose: "Trust Building",          src: "/assets/reviews.png" },
              { num: "06", name: "Live Sessions",  purpose: "Engagement",              src: "/assets/livesession.png" },
            ].map((page, i) => (
              <div
                key={i}
                className="tx-bento-item tx-clickable-img"
                onClick={() => openImage(page.src, page.name)}
              >
                <img src={page.src} alt={page.name} />
                <div className="tx-bento-overlay">
                  <span className="tx-bento-overlay-num">{page.num}</span>
                  <h4>{page.name}</h4>
                  <p>{page.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 LMS DESIGN ── */}
      <section className="tx-section tx-section-dark">
        <div className="tx-inner">
          <div className="tx-section-label tx-label-orange">09 — LMS Platform Design</div>
          <h2 className="tx-heading tx-heading-white">Where students <span className="tx-accent">actually learn.</span></h2>
          <p className="tx-body tx-body-muted">The product students use every day. Needed to be clear, motivating, and easy to navigate.</p>

          <div
            className="tx-screen-showcase-hero tx-clickable-img"
            onClick={() => openImage("/assets/lms-dashboard.png", "LMS Dashboard — Full View")}
          >
            <img src="/assets/lms-dashboard.png" alt="LMS Dashboard" />
            <div className="tx-screen-showcase-label">
              <h4>LMS Dashboard — Full View</h4>
              <span>Student Home</span>
            </div>
          </div>

          <h3 className="tx-subheading tx-subheading-white" style={{ marginTop: "48px" }}>LMS Screens</h3>
          <div className="tx-lms-bento">
            {[
              { src: "/assets/lms-continue.png",   label: "Continue Learning Banner" },
              { src: "/assets/lms-stats.png",       label: "Stat Cards" },
              { src: "/assets/lms-assignments.png", label: "Assignments — Urgency Colors" },
              { src: "/assets/lms-progress.png",    label: "Progress Overview" },
              { src: "/assets/lms-recordings.png",  label: "Recordings Screen" },
              { src: "/assets/lms-profile.png",     label: "My Profile Screen" },
            ].map((item, i) => (
              <div
                key={i}
                className="tx-lms-bento-item tx-clickable-img"
                onClick={() => openImage(item.src, item.label)}
              >
                <img src={item.src} alt={item.label} />
                <div className="tx-lms-bento-label">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10 UI STYLE ── */}
      <section className="tx-section tx-section-white">
        <div className="tx-inner">
          <div className="tx-section-label">10 — UI Style & Design System</div>
          <h2 className="tx-heading">Colors, typography <span className="tx-accent">& components</span></h2>

          <h3 className="tx-subheading">Color Palette</h3>
          <div className="tx-colors">
            {[
              { name: "Primary Blue",    hex: "#1B4F8A", use: "Headers, CTAs, accents",    border: false },
              { name: "Orange Accent",   hex: "#F16232", use: "Highlights, buttons, tags", border: false },
              { name: "Dark",            hex: "#111111", use: "Dark sections, sidebar",     border: false },
              { name: "White",           hex: "#FFFFFF", use: "Cards, backgrounds",         border: true  },
              { name: "Red — Urgent",    hex: "#EF4444", use: "Due tomorrow, errors",       border: false },
              { name: "Green — Success", hex: "#10B981", use: "Present, completed, live",  border: false },
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

      {/* ── 11 FRONTEND ── */}
      <section className="tx-section tx-section-gray">
        <div className="tx-inner">
          <div className="tx-section-label">11 — Frontend Development</div>
          <h2 className="tx-heading">Designed it. <span className="tx-accent">Coded it.</span></h2>
          <p className="tx-body">A senior developer set up the architecture and environment. I wrote the component-level HTML, CSS, and JavaScript — translating every Figma screen into working UI. Designing and building the same product gave me a real advantage: I know exactly which design decisions are practical to build.</p>
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
              <p>Desktop (1440px+) · Tablet (768–1439px) · Mobile (below 768px) — all breakpoints handled.</p>
            </div>
            <div className="tx-dev-card">
              <h4>🔌 API Integration</h4>
              <p>Dynamic course listings, student data, and live session schedules fetched from backend and displayed in the UI.</p>
            </div>
          </div>
          <div className="tx-highlight-box" style={{ marginTop: "32px" }}>
            💡 Being both the designer and the developer on the same product meant zero handoff problems. What you see in the live site matches the Figma design exactly — because the same person made both decisions.
          </div>
        </div>
      </section>

      {/* ── 12 CREATIVE WORK ── */}
      <section className="tx-section tx-section-dark">
        <div className="tx-inner">
          <div className="tx-section-label tx-label-orange">12 — Motion & Creative Work</div>
          <h2 className="tx-heading tx-heading-white">Beyond screens — <span className="tx-accent">brand brought to life</span></h2>
          <p className="tx-body tx-body-muted">
            After shipping the digital product, I extended the Trainex brand into motion and visual design — creating a complete set of creative assets for brand identity and marketing.
          </p>

          <h3 className="tx-subheading tx-subheading-white">Motion Assets</h3>
          <div className="tx-creative-video-grid">
            {/* Logo Animation — coming soon */}
            <VideoCard
              disabled
              title="Logo Animation"
              tool="After Effects"
              desc="Brand identity animation — the Trainex logo brought to life. Used across all video content as an opener."
            />
            {/* Platform Intro Video */}
            <VideoCard
              src="/assets/Trainexprefix.mov"
              title="Platform Intro Video"
              tool="After Effects · Premiere Pro"
              desc="Brand introduction video for Trainex Academy — used for platform onboarding and marketing."
              onClick={() => openVideo("/assets/Trainexprefix.mov", "Platform Intro Video")}
            />
            {/* Trainer Profile Animation — coming soon */}
            <VideoCard
              disabled
              title="Trainer Profile Animation"
              tool="After Effects · Premiere Pro"
              desc="Animated profile video for trainers — used to showcase expertise and build credibility with prospective students."
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
                onClick={() => openImage(`/assets/${name}.png`, `Poster ${i + 1}`)}
              >
                <img
                  src={`/assets/${name}.png`}
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

      {/* ── 13 OUTCOME ── */}
      <section className="tx-section tx-section-white">
        <div className="tx-inner">
          <div className="tx-section-label">13 — Outcome</div>
          <h2 className="tx-heading">From <span className="tx-accent">zero to live product.</span></h2>
          <div className="tx-outcome-list">
            {[
              "Complete marketing website — designed in Figma, built in HTML/CSS/JS, fully responsive",
              "LMS platform — dashboard, recordings, profile screens — designed and coded",
              "Dynamic content integration — course listings and student data from backend APIs",
              "Logo animation, intro video, trainer profile animation — full motion identity",
              "3 promotional videos — brand awareness and marketing",
              "6+ poster designs — social media and marketing collateral",
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