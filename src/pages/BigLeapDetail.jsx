import { Link } from "react-router-dom";
import "./BigLeapDetail.css";

const BigLeapDetail = () => {
  const img = (name) => `/bl-images/${name}`;

  return (
    <div className="bl-page">

      {/* ── HERO ── */}
      <section className="bl-hero">
        <div className="bl-hero-inner">
          <Link to="/" className="bl-back">← Back to Work</Link>
          <div className="bl-tags-row">
            <span className="bl-tag bl-tag-accent">UI/UX Design</span>
            <span className="bl-tag">Frontend Dev</span>
            <span className="bl-tag">EdTech</span>
            <span className="bl-tag">Admin Panel</span>
            <span className="bl-tag">LMS</span>
            <span className="bl-tag">Freelance</span>
          </div>
          <h1 className="bl-hero-title">
            Big Leap<br /><span className="bl-accent">Technologies</span>
          </h1>
          <p className="bl-hero-tagline">From Learning to Real Engineering</p>
          <p className="bl-hero-sub">
            A complete freelance project — I designed and frontend-developed the full marketing
            website, LMS, and a production-grade CMS admin panel for a Hyderabad-based Data
            Engineering institute. Zero to shipped product in 2 months.
          </p>
          <div className="bl-meta-grid">
            <div className="bl-meta-item">
              <span className="bl-meta-label">My Role</span>
              <span className="bl-meta-value">UI/UX Designer + Frontend Dev</span>
            </div>
            <div className="bl-meta-item">
              <span className="bl-meta-label">Type</span>
              <span className="bl-meta-value">Freelance Project</span>
            </div>
            <div className="bl-meta-item">
              <span className="bl-meta-label">Team</span>
              <span className="bl-meta-value">Ajay (Design + Frontend) · Teja (Backend)</span>
            </div>
            <div className="bl-meta-item">
              <span className="bl-meta-label">Duration</span>
              <span className="bl-meta-value">2 Months</span>
            </div>
            <div className="bl-meta-item">
              <span className="bl-meta-label">Tools</span>
              <span className="bl-meta-value">Figma · HTML · CSS · JS · React</span>
            </div>
            <div className="bl-meta-item">
              <span className="bl-meta-label">Live</span>
              <a href="https://bigleaptech.in" target="_blank" rel="noreferrer" className="bl-meta-link">bigleaptech.in ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO BANNER ── */}
      <div className="bl-img-banner">
        <img src={img("BL-FinalHomepage.jpg")} alt="Big Leap Homepage" className="bl-banner-img" />
      </div>

      {/* ══════════════════════════════════════
          01 — THE PROBLEM
      ══════════════════════════════════════ */}
      <section className="bl-section bl-white">
        <div className="bl-inner">
          <div className="bl-section-label">01 — The Problem</div>
          <h2 className="bl-heading">They had a great product. <span className="bl-accent">No one could find it.</span></h2>
          <p className="bl-body">
            Big Leap Technologies was already running batches and training students in Data Engineering — but everything was managed manually. No website, no LMS, no admin system. Students were getting session links over WhatsApp. Enquiries were coming through calls. Course content had no structure students could follow.
          </p>
          <p className="bl-body">
            The institute was competing against well-known EdTech platforms but had zero digital presence. They were losing potential students before a conversation even started — just because they couldn't be found online or look credible enough.
          </p>

          <div className="bl-problem-cards">
            <div className="bl-problem-card">
              <span className="bl-problem-icon">❌</span>
              <h4>No Website</h4>
              <p>Zero online presence. Students couldn't discover them, explore courses, or understand what made Big Leap different from other institutes.</p>
            </div>
            <div className="bl-problem-card">
              <span className="bl-problem-icon">❌</span>
              <h4>No Student LMS</h4>
              <p>Session recordings, links, and materials were shared manually over WhatsApp. No structured learning experience for enrolled students.</p>
            </div>
            <div className="bl-problem-card">
              <span className="bl-problem-icon">❌</span>
              <h4>No Admin Control</h4>
              <p>Every content change — adding a course, updating an FAQ, posting a testimonial — needed a developer. The client had no independence.</p>
            </div>
            <div className="bl-problem-card">
              <span className="bl-problem-icon">❌</span>
              <h4>Losing Enrollments</h4>
              <p>Enquiries came in through calls with no tracking system. No way to follow up, measure interest, or know which courses were getting attention.</p>
            </div>
          </div>

          <div className="bl-highlight-box">
            💡 The ask wasn't just "make us a website." It was — build us an entire digital ecosystem that converts visitors into students, manages their learning, and gives us full control without needing a developer every time.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          02 — UNDERSTANDING THE USERS
      ══════════════════════════════════════ */}
      <section className="bl-section bl-dark">
        <div className="bl-inner">
          <div className="bl-section-label bl-label-light">02 — Understanding the Users</div>
          <h2 className="bl-heading bl-heading-white">Three very different users. <span className="bl-accent">One connected system.</span></h2>
          <p className="bl-body bl-body-muted">
            I designed for three distinct user types simultaneously — each with completely different goals, contexts, and frustrations. Getting this right was the foundation of every design decision.
          </p>

          <div className="bl-user-cards">
            <div className="bl-user-card">
              <div className="bl-user-num">01</div>
              <div className="bl-user-emoji">🎯</div>
              <h4>The Prospective Student</h4>
              <p className="bl-user-context">Fresher or non-IT background. Unsure if they can do this. Comparing multiple institutes.</p>
              <div className="bl-user-divider"></div>
              <p className="bl-user-goal"><strong>Goal:</strong> Understand what Big Leap offers, trust that it's legit, and enroll.</p>
              <p className="bl-user-pain"><strong>Pain:</strong> Can't tell if this is better than YouTube tutorials. Needs proof it's worth the money.</p>
              <div className="bl-user-tags">
                <span>Website visitor</span>
                <span>Course detail page</span>
                <span>Placements page</span>
              </div>
            </div>

            <div className="bl-user-card">
              <div className="bl-user-num">02</div>
              <div className="bl-user-emoji">📖</div>
              <h4>The Enrolled Student</h4>
              <p className="bl-user-context">Already paid. Attending live sessions. Needs recordings, materials, assignments.</p>
              <div className="bl-user-divider"></div>
              <p className="bl-user-goal"><strong>Goal:</strong> Access everything related to their batch — recordings, links, documents — in one place.</p>
              <p className="bl-user-pain"><strong>Pain:</strong> Currently getting links over WhatsApp. No structure, easy to miss things, no progress tracking.</p>
              <div className="bl-user-tags">
                <span>LMS dashboard</span>
                <span>Course recordings</span>
                <span>Assignments</span>
              </div>
            </div>

            <div className="bl-user-card">
              <div className="bl-user-num">03</div>
              <div className="bl-user-emoji">⚙️</div>
              <h4>The Admin (Client)</h4>
              <p className="bl-user-context">Non-technical team. Managing courses, batches, students, enquiries daily.</p>
              <div className="bl-user-divider"></div>
              <p className="bl-user-goal"><strong>Goal:</strong> Update website content, track enrollments, manage batches — all without calling a developer.</p>
              <p className="bl-user-pain"><strong>Pain:</strong> Currently dependent on developer for every small change. Wastes time, costs money.</p>
              <div className="bl-user-tags">
                <span>Admin panel</span>
                <span>Curriculum manager</span>
                <span>Enquiries CRM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          03 — MY APPROACH
      ══════════════════════════════════════ */}
      <section className="bl-section bl-gray">
        <div className="bl-inner">
          <div className="bl-section-label">03 — My Approach</div>
          <h2 className="bl-heading">How I <span className="bl-accent">tackled this</span></h2>
          <p className="bl-body">
            This was my first large freelance project — no handholding, no design brief document, no wireframes handed to me. I sat with the client, understood what they wanted, and made design decisions independently. Here's how I approached it:
          </p>

          <div className="bl-approach-steps">
            <div className="bl-approach-step">
              <div className="bl-approach-line"></div>
              <div className="bl-approach-dot"></div>
              <div className="bl-approach-content">
                <h4>Discovery — Client Conversations</h4>
                <p>Spent time understanding Big Leap's positioning, their students' backgrounds (mostly freshers and non-IT), their placement focus, and what made them different. The key insight: they simulate real engineering workflows, not just teach tools. That had to be the hero of every page.</p>
              </div>
            </div>
            <div className="bl-approach-step">
              <div className="bl-approach-line"></div>
              <div className="bl-approach-dot"></div>
              <div className="bl-approach-content">
                <h4>Visual Direction — Dark Premium Feel</h4>
                <p>We discussed the look together. Most EdTech platforms are light, template-looking, and generic. We consciously decided on dark navy + orange to position Big Leap as premium and technical — something that looks closer to a product company than a coaching centre. That decision alone made it stand out.</p>
              </div>
            </div>
            <div className="bl-approach-step">
              <div className="bl-approach-line"></div>
              <div className="bl-approach-dot"></div>
              <div className="bl-approach-content">
                <h4>Straight to High Fidelity in Figma</h4>
                <p>No wireframes — went straight to high fidelity. I had a clear enough picture from the client conversations to jump in. This kept the process fast and let the client react to real designs instead of abstract boxes. Small changes were requested after the first review, which we iterated quickly.</p>
              </div>
            </div>
            <div className="bl-approach-step">
              <div className="bl-approach-line"></div>
              <div className="bl-approach-dot"></div>
              <div className="bl-approach-content">
                <h4>Designing the System, Not Just Screens</h4>
                <p>The biggest design challenge wasn't any single screen — it was making all three products (website, admin, LMS) feel connected and logical. I had to figure out the content flow: how a course created in admin shows on the website, and how batch curriculum connects to the student LMS.</p>
              </div>
            </div>
            <div className="bl-approach-step">
              <div className="bl-approach-dot"></div>
              <div className="bl-approach-content">
                <h4>Frontend Build — HTML/CSS/JS in React</h4>
                <p>Teja (backend dev) set up the React architecture and handled all the APIs and database work. He gave me the React setup since I was strong in HTML/CSS/JS but new to React. I took every Figma design and built out all the components, layouts, and interactions. Every screen you see here — I wrote that frontend.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          04 — WEBSITE DESIGN
      ══════════════════════════════════════ */}
      <section className="bl-section bl-white">
        <div className="bl-inner-wide">
          <div className="bl-inner">
            <div className="bl-section-label">04 — Website Design</div>
            <h2 className="bl-heading">The public face — <span className="bl-accent">built to convert</span></h2>
            <p className="bl-body">
              The website had one job: turn a stranger into an enrolled student. Every page was designed with that conversion goal in mind — establish credibility fast, communicate the differentiator clearly, and make it easy to take the next step.
            </p>
            <p className="bl-body">
              The dark navy + orange system was a deliberate choice we landed on together — it gives Big Leap a premium, engineering-focused feel that no other local institute has. It doesn't look like a training centre; it looks like a product.
            </p>
          </div>

          {/* Homepage full bleed */}
          <div className="bl-screen-full">
            <div className="bl-screen-header">
              <span className="bl-screen-num">01</span>
              <span className="bl-screen-label">Homepage</span>
              <span className="bl-screen-note">Hero · Courses · Tech Stack · Why Most Freshers Struggle · Learning Journey · Trainers · Testimonials · FAQ · CTA</span>
            </div>
            <div className="bl-screen-frame">
              <img src={img("BL-FinalHomepage.jpg")} alt="Homepage" className="bl-screen-img" />
            </div>
            <div className="bl-screen-caption">
              The homepage communicates Big Leap's core differentiator in the hero — "From Learning to Real Engineering." The "Why Most Freshers Struggle" section directly addresses the visitor's anxiety and shows how Big Leap solves it. Every section builds trust before asking for action.
            </div>
          </div>

          {/* Our Programs + Placements */}
          <div className="bl-screen-grid-2">
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-num">02</span>
                  <span className="bl-screen-label">Our Programs Page</span>
                </div>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("BL-Ourprogram.jpg")} alt="Our Programs" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">All courses listed clearly with duration, highlights and a direct enroll CTA.</div>
            </div>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-num">03</span>
                  <span className="bl-screen-label">Placements Page</span>
                </div>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("BL-Placements.jpg")} alt="Placements" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Student journey stories, hiring companies, placement process — the trust builder.</div>
            </div>
          </div>

          {/* Industry Simulation full bleed */}
          <div className="bl-screen-full">
            <div className="bl-screen-header">
              <span className="bl-screen-num">04</span>
              <span className="bl-screen-label">Industry Simulation Page</span>
              <span className="bl-screen-note">Big Leap's biggest differentiator — needed its own dedicated page</span>
            </div>
            <div className="bl-screen-frame">
              <img src={img("BL-Industry-simulations.jpg")} alt="Industry Simulation" className="bl-screen-img" />
            </div>
            <div className="bl-screen-caption">
              This page was critical — "Industry Simulation" is what makes Big Leap different from every other institute. I gave it a full dedicated page with 8 core engineering experiences, a Traditional Learning vs Industry Simulation comparison section, and audience targeting (freshers, final-year students, non-IT candidates, off-campus seekers).
            </div>
          </div>

          {/* Course Detail + About */}
          <div className="bl-screen-grid-2">
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-num">05</span>
                  <span className="bl-screen-label">Course Detail Page</span>
                </div>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("BL-Coursedetail.jpg")} alt="Course Detail" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Full course breakdown — overview, curriculum accordion, pricing card, certificate section, reviews.</div>
            </div>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-num">06</span>
                  <span className="bl-screen-label">About Us Page</span>
                </div>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("BL-Aboutus.jpg")} alt="About Us" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">"We Build Engineers, Not Just Graduates" — mission, vision, expert mentors section.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          05 — LMS LOGIN
      ══════════════════════════════════════ */}
      <section className="bl-section bl-dark">
        <div className="bl-inner-wide">
          <div className="bl-inner">
            <div className="bl-section-label bl-label-light">05 — LMS Login</div>
            <h2 className="bl-heading bl-heading-white">First impression <span className="bl-accent">for every student.</span></h2>
            <p className="bl-body bl-body-muted">
              The LMS login is the gateway students hit every single day. It had to feel premium, trustworthy, and motivating — not like a boring form. I used a split-screen layout: the left panel has motivational copy with floating tech stack icons on dark navy; the right panel is clean white with a simple login form and Google sign-in. Two feelings, one screen.
            </p>
          </div>
          <div className="bl-lms-login-frame">
            <img src={img("BL-LMS-login.jpg")} alt="LMS Login" className="bl-lms-login-img" />
          </div>
          <div className="bl-inner">
            <div className="bl-lms-callout">
              <span className="bl-lms-callout-icon">💡</span>
              <p>The floating tech icons (Python, TypeScript, React, etc.) on the dark left panel were a deliberate design choice — they subconsciously remind students what they're here to learn, making the login feel purposeful rather than transactional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          06 — LMS SCREENS (PLACEHOLDER)
      ══════════════════════════════════════ */}
      <section className="bl-section bl-gray">
        <div className="bl-inner-wide">
          <div className="bl-inner">
            <div className="bl-section-label">06 — Student LMS</div>
            <h2 className="bl-heading">Where learning <span className="bl-accent">actually happens.</span></h2>
            <p className="bl-body">
              Once a student logs in, they land in their personal learning dashboard — everything for their batch in one place. Recordings, live session links, assignments, documents, and their profile. All connected directly to what the admin manages in the Curriculum Manager.
            </p>
          </div>

          <div className="bl-lms-placeholder-grid">
            {[
              { icon: "📊", label: "LMS Dashboard", desc: "Batch progress, upcoming sessions, recent recordings" },
              { icon: "🎬", label: "Course & Recordings", desc: "Chapter-wise video recordings, duration, session dates" },
              { icon: "📝", label: "Assignments", desc: "Submit assignments, track status, view feedback" },
              { icon: "📄", label: "Documents & Resources", desc: "PDFs, materials uploaded per lesson by admin" },
              { icon: "👤", label: "Student Profile", desc: "Personal info, enrolled course, batch details" },
            ].map((item, i) => (
              <div className="bl-lms-placeholder" key={i}>
                <div className="bl-lms-ph-icon">{item.icon}</div>
                <div className="bl-lms-ph-label">{item.label}</div>
                <div className="bl-lms-ph-desc">{item.desc}</div>
                <div className="bl-lms-ph-badge">Screens coming soon</div>
              </div>
            ))}
          </div>

          <div className="bl-inner" style={{marginTop: "40px"}}>
            <div className="bl-context-box">
              🔗 <strong>How LMS connects to Admin:</strong> When a batch admin adds a video URL, live session link, or document inside the Curriculum Manager — it reflects instantly in the student's LMS for that lesson. Students only see content for their specific batch, not other batches running on the same course.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          07 — ADMIN PANEL
      ══════════════════════════════════════ */}
      <section className="bl-section bl-white">
        <div className="bl-inner-wide">
          <div className="bl-inner">
            <div className="bl-section-label">07 — Admin Panel</div>
            <h2 className="bl-heading">The hardest part — <span className="bl-accent">and the most powerful.</span></h2>
            <p className="bl-body">
              The admin panel was the most challenging and complex part of this entire project. 15+ screens, multiple modals, data tables, drag-and-drop ordering, a nested curriculum builder — all designed to be used by a non-technical client team without any developer help.
            </p>
            <p className="bl-body">
              The goal was simple: the client should be able to do everything themselves — add courses, manage students, track payments, post testimonials, schedule workshops — without ever calling Teja or me.
            </p>

            <div className="bl-admin-highlight">
              <div className="bl-admin-hl-item">
                <span className="bl-admin-hl-num">15+</span>
                <span className="bl-admin-hl-label">Admin screens designed</span>
              </div>
              <div className="bl-admin-hl-item">
                <span className="bl-admin-hl-num">11</span>
                <span className="bl-admin-hl-label">Sidebar modules</span>
              </div>
              <div className="bl-admin-hl-item">
                <span className="bl-admin-hl-num">8+</span>
                <span className="bl-admin-hl-label">Add/Edit modals</span>
              </div>
              <div className="bl-admin-hl-item">
                <span className="bl-admin-hl-num">0</span>
                <span className="bl-admin-hl-label">Developer needed for content</span>
              </div>
            </div>
          </div>

          {/* Dashboard full bleed */}
          <div className="bl-screen-full">
            <div className="bl-screen-header">
              <span className="bl-screen-num">D</span>
              <span className="bl-screen-label">Admin Dashboard — The Command Centre</span>
              <span className="bl-screen-note">8 stat cards · 6-Month Growth Chart · Popular Courses · Recent Enrollments · Recent Students</span>
            </div>
            <div className="bl-screen-frame bl-screen-frame-light">
              <img src={img("BL-admindashboard.jpg")} alt="Admin Dashboard" className="bl-screen-img" />
            </div>
            <div className="bl-screen-caption">
              The dashboard gives the client a real-time snapshot — total courses, students, revenue, enrollments, active batches. The 6-Month Growth Overview chart tracks enrollments, new students, and revenue together. Recent enrollments and students are visible at a glance without navigating anywhere.
            </div>
          </div>

          {/* Courses + Batches */}
          <div className="bl-screen-grid-2" style={{marginTop: "40px"}}>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-label">Courses List</span>
                </div>
                <span className="bl-screen-note">Title · Technology tag · Price · Content hours · Modules / Projects</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("Courses.jpg")} alt="Courses" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Clean table — everything the admin needs to know about each course at a glance.</div>
            </div>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-label">Batches</span>
                </div>
                <span className="bl-screen-note">Course · Trainer · Students · Start Date · Timings · Manage action</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("Batches.jpg")} alt="Batches" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Each batch is tied to a course, trainer, student list, and timing. "Manage" opens the Curriculum Manager.</div>
            </div>
          </div>

          {/* Add Course modal — the complex one */}
          <div className="bl-screen-full" style={{marginTop: "32px"}}>
            <div className="bl-screen-header">
              <span className="bl-screen-label">Add Course — The Most Complex Modal</span>
              <span className="bl-screen-note">Thumbnail · Technology · Curriculum PDF · Title · Descriptions · Price · Modules · Learning Outcomes · Key Highlights · Inline Curriculum Builder (Chapters + Lessons)</span>
            </div>
            <div className="bl-screen-frame bl-screen-frame-light">
              <img src={img("addcoursepopup.jpg")} alt="Add Course" className="bl-screen-img" />
            </div>
            <div className="bl-screen-caption">
              This was the hardest modal to design. A single form that handles everything about a course — from thumbnail upload to building a full chapter-and-lesson curriculum structure, all inline. I used accordion-style chapters with expandable lessons so the form stays manageable despite the depth of content.
            </div>
          </div>

          {/* 3-col modals */}
          <div className="bl-screen-grid-3" style={{marginTop: "32px"}}>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <span className="bl-screen-label">Add Batch</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("Add-batch-form.jpg")} alt="Add Batch" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Select course, trainer, students, set date and timing. All in one clean modal.</div>
            </div>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <span className="bl-screen-label">Add Trainer</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("Add-Trainer.jpg")} alt="Add Trainer" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Name, email, mobile with country code, optional profile image.</div>
            </div>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <span className="bl-screen-label">Add Workshop</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("Add-workshop.jpg")} alt="Add Workshop" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Heading, date, time, platform, and dynamic "What You'll Learn" points.</div>
            </div>
          </div>

          {/* Enquiries + Enrollments */}
          <div className="bl-screen-grid-2" style={{marginTop: "32px"}}>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-label">Enquiries</span>
                </div>
                <span className="bl-screen-note">All contact form leads from the website — name, mobile, email, course, message, date</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("Enquiries.jpg")} alt="Enquiries" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Every website enquiry is captured here automatically. Client can track leads without any third-party CRM tool.</div>
            </div>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-label">Enrollments & Payments</span>
                </div>
                <span className="bl-screen-note">Total fee · Paid · Due · Status: Paid / Pending / Failed</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("Enrollments.jpg")} alt="Enrollments" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Full payment tracking per student per course. Green "Paid" badge, pending amounts visible at a glance.</div>
            </div>
          </div>

          {/* Students + Testimonials + FAQs */}
          <div className="bl-screen-grid-3" style={{marginTop: "32px"}}>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <span className="bl-screen-label">Students List</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("students.jpg")} alt="Students" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">Name, email, mobile, location, course, batch, job status — all in one table.</div>
            </div>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <span className="bl-screen-label">Testimonials</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("Testimonials.jpg")} alt="Testimonials" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">10 active reviews managed here — display order, active/inactive toggle, all CMS-driven.</div>
            </div>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <span className="bl-screen-label">FAQs</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("FAQ.jpg")} alt="FAQs" className="bl-screen-img" />
              </div>
              <div className="bl-screen-caption">10 FAQs with order number and status. Client adds, edits, reorders without any code.</div>
            </div>
          </div>

          {/* Workshops + Tech Stack */}
          <div className="bl-screen-grid-2" style={{marginTop: "32px"}}>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-label">Workshops</span>
                </div>
                <span className="bl-screen-note">Heading · Date & Time · Platform (Google Meet etc.) · What You'll Learn points</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("workshops.jpg")} alt="Workshops" className="bl-screen-img" />
              </div>
            </div>
            <div className="bl-screen-card">
              <div className="bl-screen-header-sm">
                <div className="bl-screen-label-row">
                  <span className="bl-screen-label">Tech Stack Headings</span>
                </div>
                <span className="bl-screen-note">13 categories · Drag & drop to reorder · Reflects live on website</span>
              </div>
              <div className="bl-screen-frame bl-screen-frame-light">
                <img src={img("Techstacklist.jpg")} alt="Tech Stack" className="bl-screen-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          08 — CURRICULUM FLOW
      ══════════════════════════════════════ */}
      <section className="bl-section bl-dark">
        <div className="bl-inner-wide">
          <div className="bl-inner">
            <div className="bl-section-label bl-label-light">08 — The Content Flow</div>
            <h2 className="bl-heading bl-heading-white">One system. <span className="bl-accent">Two integrations.</span></h2>
            <p className="bl-body bl-body-muted">
              The most interesting design challenge in this project was figuring out how content flows between all three products. A course created in admin shows on the public website. A batch created from that course unlocks a Curriculum Manager where real session links and recordings are added — and those go directly into the student's LMS. Here's the full flow:
            </p>
          </div>

          <div className="bl-flow-diagram">
            <div className="bl-flow-step">
              <div className="bl-flow-icon">📚</div>
              <h4>Add Course</h4>
              <p>Admin adds course with chapters & lessons (template structure)</p>
            </div>
            <div className="bl-flow-connector">
              <div className="bl-flow-arrow">→</div>
              <span className="bl-flow-label">reflects on</span>
            </div>
            <div className="bl-flow-step bl-flow-step-orange">
              <div className="bl-flow-icon">🌐</div>
              <h4>Website</h4>
              <p>Course detail page shows curriculum structure publicly</p>
            </div>
            <div className="bl-flow-divider">+</div>
            <div className="bl-flow-step">
              <div className="bl-flow-icon">📅</div>
              <h4>Create Batch</h4>
              <p>Admin assigns course + trainer + students + timings</p>
            </div>
            <div className="bl-flow-connector">
              <div className="bl-flow-arrow">→</div>
              <span className="bl-flow-label">unlocks</span>
            </div>
            <div className="bl-flow-step bl-flow-step-orange">
              <div className="bl-flow-icon">🎬</div>
              <h4>Curriculum Manager</h4>
              <p>Admin adds real video URLs, live links, docs per lesson</p>
            </div>
            <div className="bl-flow-connector">
              <div className="bl-flow-arrow">→</div>
              <span className="bl-flow-label">feeds into</span>
            </div>
            <div className="bl-flow-step bl-flow-step-green">
              <div className="bl-flow-icon">🎓</div>
              <h4>Student LMS</h4>
              <p>Students see recordings, links and materials for their batch</p>
            </div>
          </div>

          {/* Curriculum manager screen */}
          <div className="bl-screen-full" style={{marginTop: "48px"}}>
            <div className="bl-screen-header bl-screen-header-dark">
              <span className="bl-screen-label">Curriculum Manager — Batch View</span>
              <span className="bl-screen-note">Chapter accordion · Per lesson: Video URL · Duration · Live Session Link · Session Date · Documents upload</span>
            </div>
            <div className="bl-screen-frame bl-screen-frame-light">
              <img src={img("curriculum-manage.jpg")} alt="Curriculum Manager" className="bl-screen-img" />
            </div>
            <div className="bl-screen-caption bl-caption-light">
              Each batch has its own curriculum manager. The admin opens a chapter, fills in the video URL, live session recording link, date, and uploads documents — all at the lesson level. Students in that batch see exactly this content in their LMS.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          09 — DESIGN SYSTEM
      ══════════════════════════════════════ */}
      <section className="bl-section bl-gray">
        <div className="bl-inner">
          <div className="bl-section-label">09 — Design System</div>
          <h2 className="bl-heading">Colors, decisions & <span className="bl-accent">thinking behind them</span></h2>

          <h3 className="bl-subheading">Color System</h3>
          <p className="bl-body">Two visual systems — one for the public website, one for the admin — sharing the same brand identity.</p>

          <div className="bl-colors">
            {[
              { name: "Deep Navy", hex: "#0B1437", use: "Website dark backgrounds, hero sections", border: false },
              { name: "Orange Accent", hex: "#F16232", use: "CTAs, highlights, active states", border: false },
              { name: "Brand Blue", hex: "#1B4F8A", use: "Logo, navigation, links", border: false },
              { name: "White", hex: "#FFFFFF", use: "Admin backgrounds, light sections", border: true },
              { name: "Admin Blue", hex: "#2563EB", use: "Admin primary action buttons", border: false },
              { name: "Success Green", hex: "#10B981", use: "Paid status, active badges", border: false },
            ].map((c) => (
              <div className="bl-color-item" key={c.hex}>
                <div className="bl-color-swatch" style={{ background: c.hex, border: c.border ? "1px solid #ddd" : "none" }} />
                <span className="bl-color-name">{c.name}</span>
                <span className="bl-color-hex">{c.hex}</span>
                <span className="bl-color-use">{c.use}</span>
              </div>
            ))}
          </div>

          <h3 className="bl-subheading" style={{marginTop: "64px"}}>Key Design Decisions</h3>

          <div className="bl-decisions-grid">
            <div className="bl-decision-card">
              <span className="bl-decision-num">01</span>
              <h4>Dark Website, Light Admin — Same Brand</h4>
              <p>The website is dark navy + orange — premium and technical. The admin is clean white — efficient for daily non-technical use. Two completely different visual contexts, but the same orange accent and logo ties them together. The audience dictated the visual system.</p>
            </div>
            <div className="bl-decision-card">
              <span className="bl-decision-num">02</span>
              <h4>No Wireframes — Straight to High Fidelity</h4>
              <p>I went directly to high-fidelity designs in Figma. With a clear understanding from client conversations, wireframing would have slowed things down. The client could react to real designs, which made feedback faster and more specific. One round of small changes, then approved.</p>
            </div>
            <div className="bl-decision-card">
              <span className="bl-decision-num">03</span>
              <h4>Modal-First Admin UX</h4>
              <p>All create/edit actions in the admin happen in modals — no page navigations. This keeps the admin panel feeling fast and app-like, not like a series of form pages. The "Add Course" modal is the most complex UI in the project — inline curriculum builder with nested chapters and lessons, all inside a single scrollable modal.</p>
            </div>
            <div className="bl-decision-card">
              <span className="bl-decision-num">04</span>
              <h4>Industry Simulation Gets Its Own Page</h4>
              <p>Most institutes bury their differentiator in a homepage section. Big Leap's biggest USP — Industry Simulation — got a dedicated page with full depth: 8 engineering experiences, Traditional Learning vs Industry Simulation comparison, and audience-specific targeting. It's the page that converts the skeptical visitor.</p>
            </div>
            <div className="bl-decision-card">
              <span className="bl-decision-num">05</span>
              <h4>Split Login for LMS — Not Just Functional</h4>
              <p>The LMS login could have been a simple centered form. Instead, the left panel uses dark navy with floating tech icons (Python, TypeScript, React) and motivational copy. It reminds students of their goal every time they log in — "Grow with projects." A small design choice that has a real emotional effect on daily users.</p>
            </div>
            <div className="bl-decision-card">
              <span className="bl-decision-num">06</span>
              <h4>Tech Stack Drag-and-Drop Reorder</h4>
              <p>The Tech Stack section on the website needed to be reorderable by the client without code. I designed a drag-and-drop interface in the admin (TechStack Headings screen) where the client drags rows to reorder and saves — it reflects live on the website. Small feature, massive independence for the client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10 — FRONTEND BUILD
      ══════════════════════════════════════ */}
      <section className="bl-section bl-white">
        <div className="bl-inner">
          <div className="bl-section-label">10 — Frontend Build</div>
          <h2 className="bl-heading">How I built <span className="bl-accent">every screen</span></h2>
          <p className="bl-body">
            My strengths going in were HTML, CSS, and JavaScript. Teja handled the entire backend — APIs, database, server — and set up the React project structure for me since React was new territory for me at the time. From there, every component, layout, and interaction you see was written by me.
          </p>

          <div className="bl-build-grid">
            <div className="bl-build-item">
              <span className="bl-build-icon">🏗️</span>
              <div>
                <h4>Component Architecture</h4>
                <p>Teja set up the React boilerplate. I built every page and component — navbar, hero, course cards, modals, tables, forms, accordions — translating Figma designs pixel-by-pixel into React components.</p>
              </div>
            </div>
            <div className="bl-build-item">
              <span className="bl-build-icon">🎨</span>
              <div>
                <h4>CSS — No UI Framework</h4>
                <p>All styling written from scratch in CSS. No Tailwind, no Bootstrap. Custom variables, flexbox and grid layouts, hover states, transitions — everything handwritten to match the Figma exactly.</p>
              </div>
            </div>
            <div className="bl-build-item">
              <span className="bl-build-icon">📱</span>
              <div>
                <h4>Responsive Design</h4>
                <p>Website fully responsive across desktop, tablet, and mobile. Admin panel optimized for desktop since it's primarily used on larger screens by the client team.</p>
              </div>
            </div>
            <div className="bl-build-item">
              <span className="bl-build-icon">⚡</span>
              <div>
                <h4>Interactive UI Patterns</h4>
                <p>Accordion curriculum sections, modal open/close, dynamic form fields (add learning point, add chapter, add lesson), drag-and-drop table rows for tech stack reordering — all JS-driven interactions I built and wired to backend APIs Teja provided.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          11 — OUTCOME
      ══════════════════════════════════════ */}
      <section className="bl-section bl-dark">
        <div className="bl-inner">
          <div className="bl-section-label bl-label-light">11 — Outcome</div>
          <h2 className="bl-heading bl-heading-white">Zero to live product. <span className="bl-accent">In 2 months.</span></h2>
          <p className="bl-body bl-body-muted">
            Big Leap went from absolutely no digital presence to a complete, production-grade web ecosystem — live, actively used, and fully client-managed. Here's everything that shipped:
          </p>

          <div className="bl-outcome-cols">
            <div className="bl-outcome-col">
              <h4 className="bl-outcome-col-title">Website</h4>
              {[
                "6 pages — Homepage, Programs, Placements, Course Detail, Industry Simulation, About Us",
                "Dark navy + orange brand system — premium feel, no templates",
                "Conversion-focused layout — every page drives toward enrollment",
                "Fully responsive across all screen sizes",
                "Contact enquiry form — leads go directly to admin panel",
              ].map((item, i) => (
                <div className="bl-outcome-item" key={i}>
                  <span className="bl-outcome-tick">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="bl-outcome-col">
              <h4 className="bl-outcome-col-title">Admin Panel</h4>
              {[
                "15+ screens — full CMS, zero developer dependency for client",
                "Course catalog with inline curriculum builder",
                "Batch management — course + trainer + students + timings",
                "Enrollment + payment tracking (Paid / Pending / Failed)",
                "Enquiries CRM, FAQs, Testimonials, Workshop management",
                "Tech stack drag-and-drop reorder reflecting live on website",
              ].map((item, i) => (
                <div className="bl-outcome-item" key={i}>
                  <span className="bl-outcome-tick">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="bl-outcome-col">
              <h4 className="bl-outcome-col-title">LMS</h4>
              {[
                "Student login — split-screen premium design",
                "Batch-specific content — each student sees only their batch",
                "Lesson-level: video recordings, live session links, documents",
                "Curriculum Manager in admin feeds directly into student LMS",
                "Google OAuth sign-in integration",
              ].map((item, i) => (
                <div className="bl-outcome-item" key={i}>
                  <span className="bl-outcome-tick">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bl-live-link">
            <a href="https://bigleaptech.in" target="_blank" rel="noreferrer" className="bl-btn-primary">
              View Live Site ↗
            </a>
            <Link to="/" className="bl-btn-outline bl-btn-outline-dark">← All Projects</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BigLeapDetail;