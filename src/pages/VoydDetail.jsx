import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./VoydDetail.css";

/* ─────────────────────────────────────────────
   IMAGE LIGHTBOX (same pattern as Trainex)
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
const Screen = ({ src, alt, label, sub, onOpen, full = true }) => (
  <figure className={full ? "vd-screen-full" : "vd-screen-card"}>
    {full && <p className="vd-screen-label-full">{label}{sub && <span> — {sub}</span>}</p>}
    <img
      src={src}
      alt={alt}
      className={full ? "vd-screen-img vd-clickable" : "vd-screen-img-sm vd-clickable"}
      onClick={() => onOpen(src, alt)}
      onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
    />
    <div className={`vd-img-placeholder ${full ? "vd-img-banner" : "vd-img-sm"}`} style={{ display: "none" }}>
      📸 Add screenshot<br /><span>{src}</span>
    </div>
    {!full && <figcaption className="vd-screen-caption">{label}</figcaption>}
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
            <span className="vd-tag">Team Project</span>
            <span className="vd-tag">Figma</span>
          </div>
          <h1 className="vd-hero-title">
            Voyd <span className="vd-accent">Interiors</span>
          </h1>
          <p className="vd-hero-tagline">Your Interior Execution Partner — From Dream to Delivery</p>
          <p className="vd-hero-sub">
            Voyd is not just a furniture store — it's an end-to-end platform that takes a homeowner from
            "I want to redo my home" to a fully executed, quality-checked interior project, while also
            giving interior designers and vendors a marketplace to find leads, manage projects, and get
            paid on time. I worked as part of a 2-person UI/UX team, designing the customer, vendor, and
            shopping experiences across the entire platform.
          </p>
          <div className="vd-meta-grid">
            <div className="vd-meta-item">
              <span className="vd-meta-label">My Role</span>
              <span className="vd-meta-value">UI/UX Designer</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Team</span>
              <span className="vd-meta-value">2 UI/UX Designers + 1 Researcher</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Type</span>
              <span className="vd-meta-value">Company Project</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Platform</span>
              <span className="vd-meta-value">Web App — Customer · Vendor · E-commerce</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Tools</span>
              <span className="vd-meta-value">Figma · FigJam</span>
            </div>
            <div className="vd-meta-item">
              <span className="vd-meta-label">Live</span>
              <a href="https://www.voydinterior.com" target="_blank" rel="noreferrer" className="vd-meta-link">voydinterior.com ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <Screen src="/voyd/hero.png" alt="Voyd Interiors Homepage" label="" full sub={null} onOpen={openImage} />

      {/* ── 01 OVERVIEW ── */}
      <section className="vd-section vd-white">
        <div className="vd-inner">
          <div className="vd-section-label">01 — Overview</div>
          <h2 className="vd-heading">What is <span className="vd-accent">Voyd Interiors?</span></h2>
          <p className="vd-body">
            Voyd positions itself as an <strong>"Interior Execution Partner"</strong> — a platform that
            connects three groups: <strong>homeowners</strong> who want their interiors designed and
            executed without the usual chaos, <strong>interior designers / vendors</strong> who want
            reliable leads and on-time payments, and Voyd's own <strong>execution &amp; quality team</strong>
            who keep everything on track.
          </p>
          <p className="vd-body">
            Instead of being "just another furniture website," Voyd combines a full shopping experience
            (browse, cart, checkout) with project-management tools (get a quote, track budget room-by-room,
            request quality checks) and a vendor-growth program (leads, payments, marketing).
          </p>

          <div className="vd-stats">
            <div className="vd-stat">
              <span className="vd-stat-num">15<span className="vd-stat-plus">+</span></span>
              <span className="vd-stat-label">Screens Designed</span>
            </div>
            <div className="vd-stat">
              <span className="vd-stat-num">3</span>
              <span className="vd-stat-label">User Roles</span>
            </div>
            <div className="vd-stat">
              <span className="vd-stat-num">2</span>
              <span className="vd-stat-label">UI/UX Designers</span>
            </div>
            <div className="vd-stat">
              <span className="vd-stat-num">1</span>
              <span className="vd-stat-label">Unified Design System</span>
            </div>
          </div>

          {/* PAGES TABLE */}
          <h3 className="vd-subheading">Core Areas I Worked On</h3>
          <div className="vd-table">
            <div className="vd-table-head">
              <span>Area</span>
              <span>Description</span>
            </div>
            {[
              ["Homepage & Customer Journey", "Hero, trust-building sections (\"Why Choose Voyd\"), step-by-step journey from inspiration to handover"],
              ["Get a Quote Flow", "Request a Quote popup — Self/Others, property details, project type, budget input"],
              ["My Quotations / Drafts", "Quotation tracking table — status (Draft, Finalized, Delivered), 30-day auto-expiry logic"],
              ["Project Dashboard", "Budget tracker (Total / Utilized / Balance), room-wise Interior Elements Add-Ons, vendor list by tier"],
              ["Quality Checker", "Product / Product Type / Sub Type based quality reporting tool with image upload"],
              ["Shop, PDP, Cart & Checkout", "Shop by Room / Category, product detail page, cart, multi-payment checkout"],
              ["Designer / Vendor Growth Page", "B2B landing page — leads, guaranteed payments, material sourcing, studio access"],
            ].map(([page, desc], i) => (
              <div key={i} className={`vd-table-row ${i % 2 !== 0 ? "vd-row-alt" : ""}`}>
                <span className="vd-table-key">{page}</span>
                <span className="vd-table-val">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 THE TEAM ── */}
      <section className="vd-section vd-gray">
        <div className="vd-inner">
          <div className="vd-section-label">02 — The Team</div>
          <h2 className="vd-heading">Who <span className="vd-accent">built this</span></h2>
          <p className="vd-body">
            Voyd was designed by a small, focused team — two UI/UX designers working closely with a
            manager who led research and requirement-gathering with stakeholders.
          </p>

          <div className="vd-role-cards">
            <div className="vd-role-card">
              <div className="vd-role-icon">🎨</div>
              <div className="vd-role-content">
                <h4>Me — UI/UX Designer</h4>
                <p>
                  Designed the customer-facing journey end to end — homepage, "Get a Quote" flow, My
                  Quotations, the Project Dashboard (budget tracker + room-wise Interior Elements
                  Add-Ons), and the e-commerce experience (Shop, Product Detail, Cart, Checkout).
                  Owned the core design system — colors, typography (Cinzel + Inter), components,
                  spacing and states used across the platform.
                </p>
              </div>
            </div>
            <div className="vd-role-card">
              <div className="vd-role-icon">🧩</div>
              <div className="vd-role-content">
                <h4>Surya — UI/UX Designer</h4>
                <p>
                  Designed the vendor/designer-facing side of the platform — the Designer Growth page
                  (lead generation, guaranteed payments, material sourcing, studio access) and the
                  Quality Checker tool, working within the shared design system to keep both sides of
                  the platform visually consistent.
                </p>
              </div>
            </div>
            <div className="vd-role-card">
              <div className="vd-role-icon">🔍</div>
              <div className="vd-role-content">
                <h4>Manager — Research &amp; Requirements</h4>
                <p>
                  Led user research, stakeholder interviews, and competitor analysis of existing
                  interior-design platforms. Translated business requirements (budget tracking,
                  vendor tiers, quality assurance) into a structured brief that shaped the
                  information architecture for both of us to design against.
                </p>
              </div>
            </div>
          </div>

          <div className="vd-highlight-box">
            🤝 Working as a 2-designer team meant splitting the platform by user type (customer vs.
            vendor) while sharing one component library — so every screen, regardless of who designed
            it, feels like part of the same product.
          </div>
        </div>
      </section>

      {/* ── 03 THE PROBLEM ── */}
      <section className="vd-section vd-dark">
        <div className="vd-inner">
          <div className="vd-section-label vd-label-accent">03 — The Problem</div>
          <h2 className="vd-heading vd-heading-white">What needed to <span className="vd-accent">be solved</span></h2>
          <p className="vd-body vd-body-muted">
            Interior renovation is stressful, expensive, and full of unknowns. Homeowners don't trust
            vendors, can't track budgets, and have no idea what's happening on-site. Designers, on the
            other hand, struggle to find consistent clients and get paid reliably.
          </p>

          <div className="vd-problem-grid">
            {[
              { icon: "💸", title: "No budget visibility", desc: "Customers had no way to see how their total budget was being split across rooms and elements — leading to overspending fears and lack of trust." },
              { icon: "🧱", title: "Project tracking ends at the quote", desc: "Once a quote was accepted, customers lost visibility into what was actually happening — no room-by-room breakdown, no progress tracking." },
              { icon: "🛠️", title: "No quality assurance loop", desc: "There was no structured way for customers (or Voyd's team) to flag or verify product/material quality once work was underway." },
              { icon: "📉", title: "Inconsistent vendor leads & payments", desc: "Interior designers/vendors had no reliable channel for leads, and payments were often delayed — making it hard for good vendors to stay on the platform." },
              { icon: "🔀", title: "Two disconnected experiences", desc: "Shopping for furniture/decor and managing a renovation project felt like two separate products glued together, instead of one connected journey." },
              { icon: "🏷️", title: "Vendor trust & classification", desc: "Customers had no way to know which vendors were verified/premium — there was no visible tiering (e.g. Platinum) to set expectations." },
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

      {/* ── 04 RESEARCH & PROCESS ── */}
      <section className="vd-section vd-white">
        <div className="vd-inner">
          <div className="vd-section-label">04 — Research &amp; Design Process</div>
          <h2 className="vd-heading">How we <span className="vd-accent">approached it</span></h2>
          <p className="vd-body">
            Our manager kicked off the project with research and stakeholder interviews, which gave the
            two of us a clear brief to design against. From there, we split ownership by user type and
            worked through five phases.
          </p>

          <div className="vd-process-flow">
            {[
              { num: "01", icon: "🔍", title: "Research", desc: "Stakeholder interviews, competitor audit of interior-design platforms — led by our manager" },
              { num: "02", icon: "🗂️", title: "Define IA", desc: "Sitemap split by user type — Customer, Vendor/Designer, Shop — before any screens" },
              { num: "03", icon: "✏️", title: "Wireframe", desc: "Low-fi layouts for quotation flow, project dashboard, and shop pages — hierarchy first" },
              { num: "04", icon: "🎨", title: "Visual Design", desc: "Green + gold system, Cinzel headings + Inter body, applied across all screens" },
              { num: "05", icon: "🧪", title: "Review & Iterate", desc: "Internal reviews between the 2 designers + manager to keep both sides consistent" },
            ].map((step) => (
              <div key={step.num} className="vd-flow-node">
                <div className="vd-flow-node-icon">{step.icon}</div>
                <span className="vd-flow-node-num">{step.num}</span>
                <h4 className="vd-flow-node-title">{step.title}</h4>
                <p className="vd-flow-node-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 USER PERSONAS ── */}
      <section className="vd-section vd-gray">
        <div className="vd-inner">
          <div className="vd-section-label">05 — User Personas</div>
          <h2 className="vd-heading">Two users. <span className="vd-accent">Two very different needs.</span></h2>
          <p className="vd-body">
            Before designing screens, we mapped two core personas — a homeowner planning a renovation,
            and an independent interior designer looking for steady work.
          </p>

          <div className="vd-persona-grid">
            <div className="vd-persona-card">
              <div className="vd-persona-top">
                <div className="vd-persona-avatar" style={{ background: "rgba(31,110,77,0.12)", borderColor: "rgba(31,110,77,0.3)", color: "#1F6E4D" }}>AR</div>
                <div>
                  <span className="vd-persona-tag" style={{ color: "#1F6E4D", borderColor: "rgba(31,110,77,0.3)" }}>Homeowner</span>
                  <h3>Ananya Rao</h3>
                  <p className="vd-persona-meta">First-time Homeowner · 32 · Hyderabad</p>
                </div>
              </div>
              <blockquote className="vd-persona-quote">
                "I have a ₹20 lakh budget for my new flat — I just want to know exactly where it's going,
                room by room, without calling my designer every other day."
              </blockquote>
              <div className="vd-persona-rows">
                <div className="vd-persona-row"><span className="vd-persona-label">Goal</span><p>Get her 2BHK designed and executed within budget, with full visibility</p></div>
                <div className="vd-persona-row"><span className="vd-persona-label">Pain</span><p>No idea how the quote breaks down per room, or how much budget is left</p></div>
                <div className="vd-persona-row"><span className="vd-persona-label">Design Impact</span><p>Project Dashboard with Total/Utilized/Balance + room-wise Add-Ons panel</p></div>
              </div>
            </div>

            <div className="vd-persona-card">
              <div className="vd-persona-top">
                <div className="vd-persona-avatar" style={{ background: "rgba(182,144,92,0.15)", borderColor: "rgba(182,144,92,0.35)", color: "#B6905C" }}>VS</div>
                <div>
                  <span className="vd-persona-tag" style={{ color: "#B6905C", borderColor: "rgba(182,144,92,0.35)" }}>Interior Designer</span>
                  <h3>Vikram Shah</h3>
                  <p className="vd-persona-meta">Independent Designer · 35 · Bangalore</p>
                </div>
              </div>
              <blockquote className="vd-persona-quote">
                "I have the skills, but I spend half my time chasing leads and the other half chasing
                payments. I need a platform that handles both."
              </blockquote>
              <div className="vd-persona-rows">
                <div className="vd-persona-row"><span className="vd-persona-label">Goal</span><p>Get consistent, qualified leads and get paid on milestones without delay</p></div>
                <div className="vd-persona-row"><span className="vd-persona-label">Pain</span><p>Inconsistent leads, payment delays, no visibility/marketing for his portfolio</p></div>
                <div className="vd-persona-row"><span className="vd-persona-label">Design Impact</span><p>Designer Growth page — leads, escrow-protected payments, profile &amp; portfolio marketing</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 INFORMATION ARCHITECTURE ── */}
      <section className="vd-section vd-white">
        <div className="vd-inner">
          <div className="vd-section-label">06 — Information Architecture</div>
          <h2 className="vd-heading">One platform, <span className="vd-accent">three experiences</span></h2>
          <p className="vd-body">
            We split the sitemap by user type early on — a customer-facing experience focused on trust
            and project tracking, a vendor-facing experience focused on growth, and a shared shopping
            experience used by everyone.
          </p>
          <div className="vd-ia-grid">
            <div className="vd-ia-card">
              <h3>🏠 Customer Experience</h3>
              <div className="vd-ia-items">
                {[
                  ["Home", "Trust building + journey overview"],
                  ["Get a Quote (popup)", "Property + project details capture"],
                  ["My Quotations / Drafts", "Track status — Draft / Finalized / Delivered"],
                  ["Project Dashboard", "Budget tracker + room-wise Add-Ons"],
                  ["Quality Checker", "Flag product/material quality issues"],
                  ["Shop / Cart / Checkout", "Browse & purchase decor and furniture"],
                ].map(([page, goal], i) => (
                  <div key={i} className="vd-ia-item">
                    <span className="vd-ia-page">{page}</span>
                    <span className="vd-ia-goal">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="vd-ia-card">
              <h3>🧰 Vendor / Designer Experience</h3>
              <div className="vd-ia-items">
                {[
                  ["Designer Growth (landing)", "B2B pitch — why join Voyd"],
                  ["Qualified Leads", "AI-matched leads by expertise & budget"],
                  ["Payments & Escrow", "Milestone-based, secure payouts"],
                  ["Material Sourcing", "Verified suppliers, bulk pricing"],
                  ["Profile & Marketing", "Designer directory listing, portfolio"],
                  ["Project / Vendor List", "Tiered classification (e.g. Platinum)"],
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

      {/* ── 07 KEY USER FLOWS ── */}
      <section className="vd-section vd-gray">
        <div className="vd-inner">
          <div className="vd-section-label">07 — Key User Flows</div>
          <h2 className="vd-heading">From <span className="vd-accent">quote to handover</span></h2>
          <p className="vd-body">
            The most important flow on Voyd isn't a purchase — it's the journey from "I'd like a quote"
            to "my project is being executed and quality-checked." This flow ties almost every screen I
            designed together.
          </p>

          <div className="vd-flow">
            {[
              { num: "01", title: "Request a Quote", desc: "Customer clicks 'Request a Quote' → popup opens → chooses Self/Others → fills Property tab (property type, locality, budget, sq.ft, address) → Project tab" },
              { num: "02", title: "Quote sits in Drafts", desc: "Until submitted, the quote lives in 'Drafts'. Once submitted, it appears in 'Quotations' with a status badge" },
              { num: "03", title: "Finalize the Project", desc: "Customer reviews the quotation row → clicks to 'Finalize' (freeze) when ready to proceed — this converts it into an active project" },
              { num: "04", title: "Project Dashboard opens", desc: "Customer lands on the Project Dashboard — sees Total Budget / Utilized / Balance, and a filterable grid of interior elements per room" },
              { num: "05", title: "Customize room-by-room", desc: "Using the 'Interior Elements Add-Ons' panel, customer adds/removes elements (TV Unit, False Ceiling, Wall Sconces, etc.) per room — Living/Dining, Master Bedroom, Pooja Room" },
              { num: "06", title: "Vendor assigned by tier", desc: "A vendor is assigned from the relevant tier (e.g. Platinum) — visible in the 'List of Vendors' table on the dashboard" },
              { num: "07", title: "Quality Checked", desc: "During/after execution, the Quality Checker lets the customer (or field team) log Product / Product Type / Sub Type with an image and send a quality report" },
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
            💡 The Project Dashboard was the most complex screen on the platform — it had to show budget
            data, a filterable product grid, a room-wise customization panel, AND a vendor list, without
            overwhelming a non-technical homeowner. We solved this with a left filter rail, a sticky
            budget header, and a slide-in Add-Ons panel that opens on demand instead of always being visible.
          </div>
        </div>
      </section>

      {/* ── 08 SCREENS ── */}
      <section className="vd-section vd-dark">
        <div className="vd-inner">
          <div className="vd-section-label vd-label-accent">08 — Screens</div>
          <h2 className="vd-heading vd-heading-white">Every page. <span className="vd-accent">Every flow.</span></h2>
          <p className="vd-body vd-body-muted">
            Below are the key screens designed across the customer, vendor, and shopping experiences.
          </p>
        </div>

        <Screen src="/voyd/homepage.png" alt="Voyd Homepage" label="Homepage" sub="Trust building + journey overview" onOpen={openImage} />
        <Screen src="/voyd/get-a-quote.png" alt="Get a Quote popup" label="Get a Quote — Popup" sub="Self/Others, Property & Project tabs" onOpen={openImage} />
        <Screen src="/voyd/my-quotations.png" alt="My Quotations page" label="My Quotations" sub="Quotations vs Drafts, status tracking" onOpen={openImage} />
        <Screen src="/voyd/project-dashboard.png" alt="Project Dashboard" label="Project Dashboard" sub="Budget tracker + filterable product grid" onOpen={openImage} />
        <Screen src="/voyd/add-ons-panel.png" alt="Interior Elements Add-Ons panel" label="Interior Elements Add-Ons" sub="Room-wise customization — Living/Dining, Master Bedroom, Pooja Room" onOpen={openImage} />
        <Screen src="/voyd/quality-checker.png" alt="Quality Checker" label="Quality Checker" sub="Product / Product Type / Sub Type + image, send report" onOpen={openImage} />
        <Screen src="/voyd/designer-growth.png" alt="Designer Growth page" label="Designer Growth Page" sub="Leads, payments, material sourcing, studio access" onOpen={openImage} />

        <div className="vd-inner" style={{ paddingTop: "40px" }}>
          <p className="vd-screen-label-full" style={{ padding: "0 0 16px", color: "rgba(255,255,255,0.4)" }}>Shopping Experience</p>
          <div className="vd-screen-grid-2">
            <Screen src="/voyd/shop.png" alt="Shop page" label="Shop — by Room / Category" full={false} onOpen={openImage} />
            <Screen src="/voyd/product-detail.png" alt="Product Detail Page" label="Product Detail Page" full={false} onOpen={openImage} />
            <Screen src="/voyd/cart.png" alt="Cart page" label="My Cart" full={false} onOpen={openImage} />
            <Screen src="/voyd/checkout.png" alt="Checkout page" label="Checkout" full={false} onOpen={openImage} />
          </div>
        </div>
      </section>

      {/* ── 09 UI STYLE ── */}
      <section className="vd-section vd-white">
        <div className="vd-inner">
          <div className="vd-section-label">09 — UI Style &amp; Design System</div>
          <h2 className="vd-heading">Colors, typography <span className="vd-accent">&amp; components</span></h2>
          <p className="vd-body">
            Voyd's visual identity needed to feel premium and trustworthy — like a high-end interior
            studio, not a generic furniture site. We built the system around a deep green primary color
            (used for CTAs, headers, and trust badges), a warm gold/tan accent for highlights and vendor
            tiers, and a serif display font paired with a clean sans-serif body font.
          </p>

          {/* COLORS */}
          <h3 className="vd-subheading">Color Palette</h3>
          <div className="vd-colors">
            {[
              { color: "#1F6E4D", name: "Primary Green", hex: "#1F6E4D", use: "Headers, CTAs, primary buttons, links" },
              { color: "#0E2B22", name: "Deep Forest", hex: "#0E2B22", use: "Dark sections, footer, hero banners" },
              { color: "#B6905C", name: "Gold / Tan Accent", hex: "#B6905C", use: "Vendor tiers, highlights, secondary accents" },
              { color: "#F6F3EC", name: "Warm Off-White", hex: "#F6F3EC", use: "Section backgrounds, cards" },
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
          <h3 className="vd-subheading" style={{ marginTop: "48px" }}>Typography — Cinzel + Inter</h3>
          <p className="vd-body" style={{ marginBottom: "8px" }}>
            <strong>Cinzel</strong> (serif) is used for hero titles and major section headings — it gives
            the "premium interior studio" feel seen on banners like "Your Quotation" and "Project Details."
            <strong> Inter</strong> (sans-serif) is used for everything else — body copy, labels, buttons,
            forms, and UI components — to keep the actual product usable and clean.
          </p>
          <div className="vd-type-scale">
            {[
              { name: "H1 — Hero (Cinzel)", size: "48–72px / 700", sample: "Your Quotation", font: "Cinzel", weight: "700", sampleSize: "26px" },
              { name: "H2 — Section (Cinzel)", size: "32–44px / 600", sample: "Project Details", font: "Cinzel", weight: "600", sampleSize: "22px" },
              { name: "H3 — Card Title (Inter)", size: "18–22px / 700", sample: "Interior Elements Add-Ons", font: "Inter", weight: "700", sampleSize: "16px" },
              { name: "Body (Inter)", size: "14–16px / 400", sample: "Track your project budget room by room.", font: "Inter", weight: "400", sampleSize: "14px", color: "#5A6B63" },
              { name: "Label / Status (Inter)", size: "11–12px / 700 / CAPS", sample: "FINALIZED", font: "Inter", weight: "700", sampleSize: "11px", color: "#1F6E4D" },
              { name: "Price / Budget (Inter)", size: "18–20px / 700", sample: "₹20,00,000", font: "Inter", weight: "700", sampleSize: "18px", color: "#B6905C" },
            ].map((t, i) => (
              <div key={i} className="vd-type-row">
                <span className="vd-type-name">{t.name}</span>
                <span className="vd-type-size">{t.size}</span>
                <span
                  className="vd-type-demo"
                  style={{
                    fontFamily: t.font === "Cinzel" ? "'Cinzel', serif" : "'Inter', sans-serif",
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

          {/* STYLE GUIDE SCREENSHOT */}
          <h3 className="vd-subheading" style={{ marginTop: "48px" }}>Style Guide</h3>
          <Screen src="/voyd/styleguide.png" alt="Voyd Style Guide" label="Style Guide — Colors, Type, Components" sub={null} onOpen={openImage} />
        </div>
      </section>

      {/* ── 10 OUTCOME ── */}
      <section className="vd-section vd-dark">
        <div className="vd-inner">
          <div className="vd-section-label vd-label-accent">10 — Outcome</div>
          <h2 className="vd-heading vd-heading-white">A platform that <span className="vd-accent">connects everyone.</span></h2>

          <div className="vd-outcome-list">
            {[
              "Complete customer journey — homepage, Get a Quote flow, My Quotations, Project Dashboard with budget tracking",
              "Room-wise 'Interior Elements Add-Ons' system — Living/Dining, Master Bedroom, Pooja Room and more",
              "Quality Checker tool — Product / Product Type / Sub Type reporting with image upload",
              "Designer Growth page — leads, escrow-protected payments, material sourcing, profile marketing",
              "Full e-commerce flow — Shop by Room/Category, Product Detail, Cart, multi-payment Checkout",
              "One shared design system — Cinzel + Inter typography, green & gold palette — across all 3 user experiences",
              "Live at voydinterior.com",
            ].map((item, i) => (
              <div key={i} className="vd-outcome-item">
                <span className="vd-outcome-tick">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="vd-stats" style={{ marginTop: "48px" }}>
            <div className="vd-stat vd-stat-dark">
              <span className="vd-stat-num">15<span className="vd-stat-plus">+</span></span>
              <span className="vd-stat-label">Screens</span>
            </div>
            <div className="vd-stat vd-stat-dark">
              <span className="vd-stat-num">3</span>
              <span className="vd-stat-label">User Roles</span>
            </div>
            <div className="vd-stat vd-stat-dark">
              <span className="vd-stat-num">2</span>
              <span className="vd-stat-label">Designers</span>
            </div>
            <div className="vd-stat vd-stat-dark">
              <span className="vd-stat-num">1</span>
              <span className="vd-stat-label">Design System</span>
            </div>
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