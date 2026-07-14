import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./VoydDetail.css";

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
    <div className="vd-lightbox-overlay" onClick={onClose}>
      <button className="vd-lightbox-close" onClick={onClose}>✕</button>
      <img src={src} alt={alt} className="vd-lightbox-img" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

/* ─────────────────────────────────────────────
   SCREEN IMAGE WITH PLACEHOLDER FALLBACK
───────────────────────────────────────────── */
const Screen = ({ src, alt, label, sub, story, onOpen, index, full = true, crop = false }) => (
  <figure className={full ? "vd-screen-full" : "vd-screen-card"}>
    {full && label && (
      <div className="vd-screen-header">
        {index && <span className="vd-screen-index">{index}</span>}
        <div className="vd-screen-header-text">
          <p className="vd-screen-label-full">{label}</p>
          {sub && <span className="vd-screen-sub-chip">{sub}</span>}
        </div>
      </div>
    )}
    <img
      src={src}
      alt={alt}
      className={crop ? "vd-hero-crop vd-clickable" : full ? "vd-screen-img vd-clickable" : "vd-screen-img-sm vd-clickable"}
      onClick={() => onOpen(src, alt)}
      onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
    />
    <div className={`vd-img-placeholder ${full ? "vd-img-banner" : "vd-img-sm"}`} style={{ display: "none" }}>
      📸 Add screenshot<br /><span>{src}</span>
    </div>
    {full && story && <p className="vd-screen-story">{story}</p>}
    {!full && <figcaption className="vd-screen-caption">{label}</figcaption>}
  </figure>
);

/* ─────────────────────────────────────────────
   VIDEO WITH PLACEHOLDER FALLBACK — AUTOPLAYS
   ON SCROLL INTO VIEW, FULL WIDTH, MUTED LOOP
───────────────────────────────────────────── */
const VideoBlock = ({ src, poster, label, sub }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay blocked by browser — controls remain available as fallback
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="vd-screen-full">
      <div className="vd-screen-header">
        <div className="vd-screen-header-text">
          <p className="vd-screen-label-full">{label}</p>
          {sub && <span className="vd-screen-sub-chip">{sub}</span>}
        </div>
      </div>
      <div className="vd-logo-video-wrap">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          controls
          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
        />
        <div className="vd-img-placeholder vd-img-banner" style={{ display: "none" }}>
          🎬 Add video<br /><span>{src}</span>
        </div>
      </div>
    </figure>
  );
};

/* ─────────────────────────────────────────────
   YOUTUBE VIDEO — THUMBNAIL, CLICK TO PLAY
───────────────────────────────────────────── */
const YouTubeBlock = ({ videoId, label, sub }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="vd-screen-full">
      <div className="vd-screen-header">
        <div className="vd-screen-header-text">
          <p className="vd-screen-label-full">{label}</p>
          {sub && <span className="vd-screen-sub-chip">{sub}</span>}
        </div>
      </div>
      <div className="vd-yt-wrap">
        {playing ? (
          <iframe
            className="vd-yt-frame"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="vd-yt-thumb" onClick={() => setPlaying(true)} aria-label={`Play ${label}`}>
            <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt={label} />
            <span className="vd-yt-play">▶</span>
          </button>
        )}
      </div>
    </figure>
  );
};

/* ─────────────────────────────────────────────
   GOOGLE DRIVE VIDEO — FULL WIDTH, AUTOPLAY,
   WITH HEADER (aligned like every other screen)
───────────────────────────────────────────── */
const DriveVideoBlock = ({ fileId, label, sub }) => (
  <figure className="vd-screen-full">
    <div className="vd-screen-header">
      <div className="vd-screen-header-text">
        <p className="vd-screen-label-full">{label}</p>
        {sub && <span className="vd-screen-sub-chip">{sub}</span>}
      </div>
    </div>
    <div className="vd-drive-video-wrap">
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview?autoplay=1&mute=1`}
        allow="autoplay; fullscreen"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  </figure>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const VoydDetail = () => {
  const [lightbox, setLightbox] = useState(null);
  const openImage = (src, alt) => setLightbox({ src, alt });
  const closeImage = () => setLightbox(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="vd-page">

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={closeImage} />
      )}

      {/* ── HERO ── */}
      <section className="vd-hero">
        <div className="vd-hero-inner">
          <Link to="/" className="vd-back">← Back to Work</Link>
          <div className="vd-tags-row">
            <span className="vd-tag vd-tag-accent">UI/UX Design</span>
            <span className="vd-tag">Web App</span>
            <span className="vd-tag">E-commerce</span>
            <span className="vd-tag">Mobile Web</span>
          </div>
          <h1 className="vd-hero-title">
            Voyd <span className="vd-accent">Interiors</span>
          </h1>
          <p className="vd-hero-tagline">Your Interior Execution Partner — From Dream to Delivery</p>
          <p className="vd-hero-sub">
            Voyd is a two-sided platform that connects homeowners who want their interiors designed and
            executed without the usual chaos, with interior designers and vendors who want reliable leads
            and on-time payments. I designed the customer-facing journey, the full shopping experience,
            and the trust &amp; quality tools (Quality Checker, Verify Designer, Project Progress
            dashboard) that hold the platform together.
          </p>
          <div className="vd-meta-grid">
            <div className="vd-meta-item">
              <span className="vd-meta-label">My Role</span>
              <span className="vd-meta-value">UI/UX Designer</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Team</span>
              <span className="vd-meta-value">2 UI Designers, PMO, Manager (Research)</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Type</span>
              <span className="vd-meta-value">Company Project</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Platform</span>
              <span className="vd-meta-value">Web App + Mobile Web (Quality Checker)</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Tools</span>
              <span className="vd-meta-value">Figma</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Live</span>
              <a href="https://www.voydinterior.com" target="_blank" rel="noreferrer" className="vd-meta-link">voydinterior.com ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE (cropped teaser — full homepage shown later in Screens) ── */}
      <Screen src="/voydimages/banner-img.png" alt="Voyd Interiors Homepage" label="" full crop sub={null} onOpen={openImage} />

      {/* ── 01 OVERVIEW ── */}
      <section className="vd-section vd-white">
        <div className="vd-inner">
          <div className="vd-section-label">01 — Overview</div>
          <h2 className="vd-heading">What is <span className="vd-accent">Voyd Interiors?</span></h2>
          <p className="vd-body">
            Voyd positions itself as an <strong>"Interior Execution Partner"</strong> — a platform that
            connects <strong>homeowners</strong> who want their interiors designed and executed without
            the usual chaos with <strong>interior designers / vendors</strong> who want reliable leads and
            on-time payments. Customers want their interior completed; vendors want quality profile
            visibility — Voyd connects both.
          </p>
          <p className="vd-body">
            Beyond matching, Voyd builds trust into every step: customers can verify a designer's track
            record before signing anything, track their project's quality room-by-room, and shop
            furniture/décor directly on the platform.
          </p>

          <div className="vd-stats">
            <div className="vd-stat">
              <span className="vd-stat-num">19<span className="vd-stat-plus">+</span></span>
              <span className="vd-stat-label">Screens Designed</span>
            </div>
            <div className="vd-stat">
              <span className="vd-stat-num">2</span>
              <span className="vd-stat-label">Platforms — Web &amp; Mobile Web</span>
            </div>
            <div className="vd-stat">
              <span className="vd-stat-num">2</span>
              <span className="vd-stat-label">UI Designers</span>
            </div>
            <div className="vd-stat">
              <span className="vd-stat-num">1</span>
              <span className="vd-stat-label">Unified Design System</span>
            </div>
          </div>

          {/* PAGES TABLE */}
          <h3 className="vd-subheading">Core Areas I Designed</h3>
          <div className="vd-table">
            <div className="vd-table-head">
              <span>Area</span>
              <span>Description</span>
            </div>
            {[
              ["Homepage & Customer Services", "Hero, trust-building sections, journey overview from inspiration to handover"],
              ["Get a Quote Flow", "Lead capture popup — name, mobile, email, city, project details"],
              ["Shop, Category Pages & PDP", "Shop by Room / Category, category landing pages (Pooja Units, Sanitary, Wardrobes), product detail page, cart"],
              ["Contact Us, Login/Signup, 404", "Supporting pages across the platform"],
              ["Verify Your Interior Designer", "OTP-gated flow for customers to check if a designer is a defaulter or trusted, before signing anything"],
              ["Quality Checker", "Mobile-web field inspection tool — admin creates an inspector profile, the team logs in, checks each room on-site, and a PDF quality report is generated for the customer"],
              ["Project Progress Dashboard", "Logged-in customer workspace showing project completion by category — pie chart + gauges"],
            ].map(([page, desc], i) => (
              <div key={i} className={`vd-table-row ${i % 2 !== 0 ? "vd-row-alt" : ""}`}>
                <span className="vd-table-key">{page}</span>
                <span className="vd-table-val">{desc}</span>
              </div>
            ))}
          </div>

          <div className="vd-highlight-box" style={{ marginTop: "24px" }}>
            🚫 Not designed by me: the Vendor/Designer page, product checkout flow, About Us page, Admin
            panels, the Budget Quote Vendor Profile screens, and the Project Manager panel — all of these
            were designed by my teammate Surya.
          </div>
        </div>
      </section>

      {/* ── 02 THE TEAM ── */}
      <section className="vd-section vd-gray">
        <div className="vd-inner">
          <div className="vd-section-label">02 — The Team</div>
          <h2 className="vd-heading">Who <span className="vd-accent">built this</span></h2>
          <p className="vd-body">
            Voyd was designed by a small, focused team working closely with a PMO and a manager who led
            research and stakeholder requirement-gathering.
          </p>

          <div className="vd-role-cards">
            <div className="vd-role-card">
              <div className="vd-role-icon">🎨</div>
              <div className="vd-role-content">
                <h4>Me — UI/UX Designer</h4>
                <p>
                  Designed the customer-facing journey — homepage, Customer Services page, Get a Quote
                  popup, Contact, Login/Signup, 404, and the full shopping experience (Shop by Room/Category,
                  category pages, Product Detail, Cart). Also designed the platform's trust &amp; quality
                  tools: Verify Your Interior Designer (defaulter/trust check) and the mobile-web Quality
                  Checker used by the field inspection team, plus the customer's Project Progress dashboard.
                </p>
              </div>
            </div>
            <div className="vd-role-card">
              <div className="vd-role-icon">🧩</div>
              <div className="vd-role-content">
                <h4>Surya — UI Designer</h4>
                <p>
                  Designed the vendor/designer-facing side of the platform — the product checkout flow,
                  the About Us page, Admin panels, the Budget Quote Vendor Profile screens, and the
                  Project Manager panel.
                </p>
              </div>
            </div>
            <div className="vd-role-card">
              <div className="vd-role-icon">📋</div>
              <div className="vd-role-content">
                <h4>Sripriya — PMO</h4>
                <p>
                  Coordinated the project across design, development, and stakeholders — keeping timelines
                  and deliverables on track.
                </p>
              </div>
            </div>
            <div className="vd-role-card">
              <div className="vd-role-icon">🔍</div>
              <div className="vd-role-content">
                <h4>Manager — Research &amp; Requirements</h4>
                <p>
                  Led research and translated business requirements into briefs that shaped the
                  information architecture for the team to design against.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 THE PROBLEM ── */}
      <section className="vd-section vd-dark">
        <div className="vd-inner">
          <div className="vd-section-label vd-label-accent">03 — The Problem</div>
          <h2 className="vd-heading vd-heading-white">What needed to <span className="vd-accent">be solved</span></h2>
          <p className="vd-body vd-body-muted">
            Interior renovation is stressful and full of unknowns. Homeowners don't know if they can trust
            a vendor, can't track quality once work is underway, and have no visibility into project
            progress. Vendors, on the other hand, struggle to find consistent, quality leads.
          </p>

          <div className="vd-problem-grid">
            {[
              { icon: "🕵️", title: "No way to verify a designer", desc: "Customers had no way to check a designer's track record — whether they had past defaults — before committing to a contract." },
              { icon: "🧱", title: "No quality assurance loop", desc: "There was no structured way to check product/material quality on-site once work was underway, or share that with the customer." },
              { icon: "📊", title: "No project visibility", desc: "Once a project started, customers had no clear view of progress across categories like false ceiling, electrical, sanitary, and wardrobes." },
              { icon: "🔀", title: "Two disconnected experiences", desc: "Shopping for furniture/décor and managing a renovation project felt like separate products instead of one connected journey." },
              { icon: "📉", title: "Inconsistent vendor leads", desc: "Interior designers/vendors had no reliable channel for qualified leads or a way to market their profile to customers." },
            ].map((p, i) => (
              <div key={i} className="vd-problem-card">
                <div className="vd-problem-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 INFORMATION ARCHITECTURE ── */}
      <section className="vd-section vd-white">
        <div className="vd-inner">
          <div className="vd-section-label">04 — Information Architecture</div>
          <h2 className="vd-heading">One platform, <span className="vd-accent">two sides</span></h2>
          <p className="vd-body">
            Voyd connects two audiences — customers who want their interior completed, and vendors who
            want quality profile visibility. I focused on the customer-facing experience and the trust
            tools that sit between both sides.
          </p>
          <div className="vd-ia-grid">
            <div className="vd-ia-card">
              <h3>🏠 Customer Experience — designed by me</h3>
              <div className="vd-ia-items">
                {[
                  ["Home & Customer Services", "Trust building + journey overview"],
                  ["Get a Quote (popup)", "Lead capture — name, mobile, email, city, project details"],
                  ["Verify Your Interior Designer", "OTP-gated defaulter/trust check before signing"],
                  ["Quality Checker (mobile web)", "Field inspection tool, room-by-room, PDF report"],
                  ["Project Progress Dashboard", "Completion breakdown by category"],
                  ["Shop / Category / PDP / Cart", "Browse & purchase decor and furniture"],
                ].map(([page, goal], i) => (
                  <div key={i} className="vd-ia-item">
                    <span className="vd-ia-page">{page}</span>
                    <span className="vd-ia-goal">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="vd-ia-card">
              <h3>🧰 Vendor Experience — designed by Surya</h3>
              <div className="vd-ia-items">
                {[
                  ["Designer/Vendor Growth page", "B2B pitch — leads, payments, material sourcing"],
                  ["Checkout Flow", "Product checkout — not part of my scope"],
                  ["About Us", "Company page — not part of my scope"],
                  ["Admin Panels", "Internal ops tools — not part of my scope"],
                  ["Budget Quote Vendor Profile", "Vendor-side budget/quote screens — not part of my scope"],
                  ["Project Manager Panel", "Internal PM workspace — not part of my scope"],
                ].map(([page, goal], i) => (
                  <div key={i} className="vd-ia-item">
                    <span className="vd-ia-page">{page}</span>
                    <span className="vd-ia-goal">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 KEY USER FLOW ── */}
      <section className="vd-section vd-gray">
        <div className="vd-inner">
          <div className="vd-section-label">05 — Key User Flow</div>
          <h2 className="vd-heading">From <span className="vd-accent">quote to vendor</span></h2>
          <p className="vd-body">
            The core flow on Voyd takes a customer from "Get a Quote" to choosing a vendor they trust —
            with budget and design decisions made room by room along the way.
          </p>

          <div className="vd-flow">
            {[
              { num: "01", title: "Get a Quote", desc: "Customer submits project basics — square footage, tier (e.g. Premium/Diamond)" },
              { num: "02", title: "Room-by-room design selection", desc: "Customer goes room by room, choosing interior elements one at a time" },
              { num: "03", title: "Live budget calculation", desc: "Budget updates automatically as elements are chosen, so there are no surprises" },
              { num: "04", title: "Select a vendor", desc: "At the end of the flow, the customer selects a vendor from those available" },
              { num: "05", title: "Evaluate vendor profile", desc: "Customer checks the vendor's individual marketing/profile page and discusses the project with a Project Manager" },
              { num: "06", title: "Verify the designer", desc: "Before signing anything, the customer runs an OTP-verified check to confirm the designer is not a defaulter" },
              { num: "07", title: "Track progress & quality", desc: "During execution, the Project Progress dashboard and the field team's Quality Checker keep the customer informed" },
            ].map((step, i) => (
              <div key={i} className="vd-flow-item">
                <div className="vd-flow-num">{step.num}</div>
                <div className="vd-flow-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                {i < 6 && <div className="vd-flow-arrow">↓</div>}
              </div>
            ))}
          </div>

          <div className="vd-highlight-box" style={{ marginTop: "32px" }}>
            💡 The Quality Checker is mobile-web by design — inspections happen on-site. An admin creates
            a profile for the inspection team, they log in on their phone, check each room, and a PDF
            report is generated and sent to the customer.
          </div>
        </div>
      </section>

      {/* ── 06 SCREENS ── */}
      <section className="vd-section vd-dark">
        <div className="vd-inner">
          <div className="vd-section-label vd-label-accent">06 — Screens</div>
          <h2 className="vd-heading vd-heading-white">Every page. <span className="vd-accent">Every flow.</span></h2>
          <p className="vd-body vd-body-muted">
            Screens below are the ones I designed — customer journey, trust &amp; quality tools, and the
            shopping experience.
          </p>
        </div>

        {/* Continuous full-width scroll — one screen after another, no grid */}
        <Screen
          index="01"
          src="/voydimages/Homepagenew.png"
          alt="Voyd Interiors Homepage"
          label="Homepage"
          sub="Hero, trust sections, journey overview"
          onOpen={openImage}
        />
        <Screen
          index="02"
          src="/voydimages/Customer-Services.png"
          alt="Customer Services page"
          label="Customer Services"
          sub="Budgeting, verified designers, visualization, quality control"
          onOpen={openImage}
        />
        <Screen
          index="03"
          src="/voydimages/pop-up.png"
          alt="Get a Quote popup"
          label="Get a Quote — Popup"
          sub="Name, mobile, email, city, project details"
          onOpen={openImage}
        />
        <figure className="vd-screen-full">
          <div className="vd-screen-header">
            <span className="vd-screen-index">04</span>
            <div className="vd-screen-header-text">
              <p className="vd-screen-label-full">Verify Your Interior Designer</p>
              <span className="vd-screen-sub-chip">4-step OTP verification flow</span>
            </div>
          </div>
          <p className="vd-screen-story">
            We ask for the customer's mobile number here because it doubles as a lead — once they're
            verified, our team can follow up directly and help them take the next step with a trusted
            designer.
          </p>
          <div className="vd-verify-grid">
            <Screen src="/voydimages/Verify-designer1.png" alt="Verify Designer step 1" label="Step 1 — Your details" full={false} onOpen={openImage} />
            <Screen src="/voydimages/Verify-designer2.png" alt="Verify Designer OTP step" label="Step 2 — OTP verification" full={false} onOpen={openImage} />
            <Screen src="/voydimages/Verify-designer3.png" alt="Verify Designer info step" label="Step 3 — Designer info" full={false} onOpen={openImage} />
            <Screen src="/voydimages/Verify-designer4.png" alt="Verify Designer result" label="Result — trusted or defaulter" full={false} onOpen={openImage} />
          </div>
        </figure>

        <Screen
          index="05"
          src="/voydimages/project-progress.png"
          alt="Project Progress dashboard"
          label="Project Progress Dashboard"
          sub="Completion breakdown by category"
          onOpen={openImage}
        />

        <div className="vd-inner">
          <p className="vd-screen-group-label">Shopping Experience</p>
        </div>
        <Screen
          index="06"
          src="/voydimages/Shop-By-Room.png"
          alt="Shop by Room"
          label="Shop by Room"
          sub="Living Room, Bedroom, Office, Kids Room, Kitchen, Balcony"
          onOpen={openImage}
        />
        <Screen
          index="07"
          src="/voydimages/Shop-By-Category.png"
          alt="Shop by Category"
          label="Shop by Category"
          sub="Sofa & Beds, Home Decor, Lights, Sanitary, Wardrobes and more"
          onOpen={openImage}
        />
        <Screen
          index="08"
          src="/voydimages/All-Products-filters-search.png"
          alt="Shop listing page"
          label="Shop — Filters & Search"
          sub="Room type, discount, colour, price filters"
          onOpen={openImage}
        />
        <Screen
          index="09"
          src="/voydimages/Pooja-Units-category.png"
          alt="Pooja Units category"
          label="Category — Pooja Units"
          sub="Glass, Wall-Mounted, Metal, Corner, Marble, Foldable and more"
          onOpen={openImage}
        />
        <Screen
          index="10"
          src="/voydimages/Sanitary-category.png"
          alt="Sanitary category"
          label="Category — Sanitary"
          sub="Wash Basins, Water Closets, Faucets & Taps, Kitchen Sinks"
          onOpen={openImage}
        />
        <Screen
          index="11"
          src="/voydimages/Wardrobe-category.png"
          alt="Wardrobe category"
          label="Category — Wardrobe"
          sub="Sliding, Hinged, Walk-in, Modular options"
          onOpen={openImage}
        />
        <Screen
          index="12"
          src="/voydimages/Individual-product-page.png"
          alt="Product Detail Page"
          label="Product Detail Page"
          sub="Variants, pricing, reviews, related items"
          onOpen={openImage}
        />
        <Screen
          index="13"
          src="/voydimages/MY CART.png"
          alt="Cart page"
          label="My Cart"
          sub="Quantity controls, order summary, checkout"
          onOpen={openImage}
        />

        <div className="vd-inner">
          <p className="vd-screen-group-label">Supporting Pages</p>
        </div>
        <Screen
          index="14"
          src="/voydimages/Contact-us-page.png"
          alt="Contact Us page"
          label="Contact Us"
          sub="Form, embedded map, office details"
          onOpen={openImage}
        />
        <figure className="vd-screen-full">
          <div className="vd-screen-header">
            <span className="vd-screen-index">15</span>
            <div className="vd-screen-header-text">
              <p className="vd-screen-label-full">Login / Signup</p>
              <span className="vd-screen-sub-chip">Customer / Vendor toggle, Google sign-in</span>
            </div>
          </div>
          <div className="vd-pair-grid">
            <Screen src="/voydimages/Customer-login-page.png" alt="Customer registration page" label="Customer Registration" full={false} onOpen={openImage} />
            <Screen src="/voydimages/Vendor-registration-page.png" alt="Vendor registration page" label="Vendor Registration" full={false} onOpen={openImage} />
          </div>
        </figure>
        <Screen
          index="16"
          src="/voydimages/404-page-not-found.png"
          alt="404 page"
          label="404 — Page Not Found"
          sub="Error state"
          onOpen={openImage}
        />
      </section>

      {/* ── 07 QUALITY CHECKER — MOBILE APP ── */}
      <section className="vd-section vd-dark">
      

        <Screen
          src="/voydimages/VOYD-Quality-Checker.png"
          alt="Quality Checker — all mobile screens"
          label="Quality Checker — All Screens"
          sub="Full mobile flow, admin to field inspection to PDF report"
          onOpen={openImage}
        />

        <DriveVideoBlock
          fileId="1ETJDMshD8EggeR3EG01I80SZxn8EPUHg"
          label="Screen Recording"
          sub="Live walkthrough of the mobile flow"
        />

        <Screen
          src="/voydimages/Deisgn-system.png"
          alt="Quality Checker mobile app design system"
          label="Design System — Mobile App"
          sub="Colors, type, components for the Quality Checker only"
          onOpen={openImage}
        />
      </section>

      {/* ── 08 UI STYLE ── */}
      <section className="vd-section vd-white">
        <div className="vd-inner">
          <div className="vd-section-label">08 — UI Style &amp; Design System</div>
          <h2 className="vd-heading">Colors, typography <span className="vd-accent">&amp; components</span></h2>
          <p className="vd-body">
            Voyd's visual identity needed to feel premium and trustworthy — like a high-end interior
            studio, not a generic furniture site. The system is built around a deep forest green primary
            color (headers, CTAs, trust badges), a warm gold/terracotta accent, and a cream background,
            paired with an editorial serif for headlines and a clean sans-serif for body/UI text.
          </p>

          {/* COLORS */}
          <h3 className="vd-subheading">Color Palette</h3>
          <div className="vd-colors">
            {[
              { color: "#1F6E4D", name: "Forest Green", hex: "#1F6E4D", use: "Headers, CTAs, primary buttons, links" },
              { color: "#0E2B22", name: "Deep Forest", hex: "#0E2B22", use: "Dark sections, footer, hero banners" },
              { color: "#B6905C", name: "Gold / Terracotta Accent", hex: "#B6905C", use: "Highlights, badges, secondary accents" },
              { color: "#F6F3EC", name: "Cream", hex: "#F6F3EC", use: "Section backgrounds, category banners" },
              { color: "#FFFFFF", name: "White", hex: "#FFFFFF", use: "Cards, content areas, text on dark", border: true },
              { color: "#5A6B63", name: "Muted Gray-Green", hex: "#5A6B63", use: "Body text, secondary information" },
            ].map((c, i) => (
              <div key={i} className="vd-color-item">
                <div className="vd-color-swatch" style={{ background: c.color, border: c.border ? "1px solid #ddd" : "none" }}></div>
                <span className="vd-color-name">{c.name}</span>
                <span className="vd-color-hex">{c.hex}</span>
                <span className="vd-color-use">{c.use}</span>
              </div>
            ))}
          </div>

          {/* TYPOGRAPHY */}
          <h3 className="vd-subheading" style={{ marginTop: "48px" }}>Typography — Serif + Sans-serif</h3>
          <p className="vd-body" style={{ marginBottom: "8px" }}>
            A serif display font is used for hero titles and trust-heavy moments (like "Verify Your
            Interior Designer" and the 404 page) to give a premium, editorial feel. A clean sans-serif
            handles everything else — body copy, labels, buttons, forms, and UI components — to keep the
            product usable.
          </p>
          <div className="vd-type-scale">
            {[
              { name: "H1 — Hero (Serif)", size: "40–56px / 600", sample: "Verify Your Interior Designer", font: "serif", weight: "600", sampleSize: "22px" },
              { name: "H2 — Section (Serif)", size: "28–36px / 600", sample: "Complete Interior Design", font: "serif", weight: "600", sampleSize: "20px" },
              { name: "H3 — Card Title (Sans)", size: "16–20px / 700", sample: "Budgeting Planning", font: "sans-serif", weight: "700", sampleSize: "16px" },
              { name: "Body (Sans)", size: "14–16px / 400", sample: "Confirm your number and we'll check the designer's record in seconds.", font: "sans-serif", weight: "400", sampleSize: "14px", color: "#5A6B63" },
              { name: "Label / Status (Sans)", size: "11–12px / 700 / CAPS", sample: "TRUSTED", font: "sans-serif", weight: "700", sampleSize: "11px", color: "#1F6E4D" },
            ].map((t, i) => (
              <div key={i} className="vd-type-row">
                <span className="vd-type-name">{t.name}</span>
                <span className="vd-type-size">{t.size}</span>
                <span
                  className="vd-type-demo"
                  style={{
                    fontFamily: t.font,
                    fontSize: t.sampleSize,
                    fontWeight: t.weight,
                    color: t.color || "#111",
                    letterSpacing: t.name.includes("Label") ? "2px" : "normal",
                    textTransform: t.name.includes("Label") ? "uppercase" : "none",
                  }}
                >
                  {t.sample}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 MOTION WORK ── */}
      <section className="vd-section vd-dark">
        <div className="vd-inner">
          <div className="vd-section-label vd-label-accent">09 — Motion Design</div>
          <h2 className="vd-heading vd-heading-white">Bringing the brand <span className="vd-accent">to life</span></h2>
          <p className="vd-body vd-body-muted">
            Alongside UI design, I created Voyd's logo animation and two marketing videos — an automation
            explainer and a services overview — using Adobe Premiere Pro and After Effects.
          </p>
        </div>

        <VideoBlock
          src="/voydimages/voyd logo.mp4"
          label="Voyd Logo"
          sub="Brand intro animation — Adobe After Effects"
        />
        <YouTubeBlock
          videoId="ZL5FCKvg6AE"
          label="Services Video"
          sub="Marketing overview of the Voyd platform"
        />
        <YouTubeBlock
          videoId="f-xCr9lwgYQ"
          label="Services Video — After Effects Animation"
          sub="Full motion graphics & animation reel — Adobe After Effects"
        />
      </section>

      {/* ── 10 OUTCOME ── */}
      <section className="vd-section vd-dark">
        <div className="vd-inner">
          <div className="vd-section-label vd-label-accent">10 — Outcome</div>
          <h2 className="vd-heading vd-heading-white">A platform that <span className="vd-accent">connects everyone.</span></h2>

          <div className="vd-outcome-list">
            {[
              "Complete customer journey — homepage, Customer Services, Get a Quote, shopping experience",
              "Verify Your Interior Designer — an OTP-gated defaulter/trust check that protects customers before they sign",
              "Mobile-web Quality Checker — field inspection tool used by the on-site team, generating PDF reports for customers",
              "Project Progress dashboard — category-wise completion tracking with visual gauges",
              "Full e-commerce browsing flow — Shop by Room/Category, category pages, Product Detail, Cart",
              "One shared design system — serif + sans-serif typography, green & gold palette",
              "Logo animation and 2 marketing videos produced for the brand",
              "Live at voydinterior.com",
            ].map((item, i) => (
              <div key={i} className="vd-outcome-item">
                <span className="vd-outcome-tick">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="vd-live-link">
            <a href="https://www.voydinterior.com" target="_blank" rel="noreferrer" className="vd-btn-primary">View Live Site ↗</a>
            <Link to="/" className="vd-btn-outline">← All Projects</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VoydDetail;