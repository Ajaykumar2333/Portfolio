import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./VoydDetail.css";

/* ─────────────────────────────────────────────
   PHOTO WELL — styled like a newspaper "photo
   forthcoming" convention, not a broken image box.
   Falls back cleanly if the file isn't there yet.
───────────────────────────────────────────── */
const Photo = ({ src, alt, caption, onOpen, ratio = "16/10" }) => {
  const [broken, setBroken] = useState(false);
  return (
    <figure className="voyd-photo">
      <div className="voyd-photo-well" style={{ aspectRatio: ratio }}>
        {!broken ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onClick={() => onOpen?.(src, alt)}
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="voyd-photo-tk">
            <span className="voyd-photo-tk-mark">PHOTO</span>
            <p>{alt}</p>
          </div>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div className="voyd-lightbox" onClick={onClose}>
      <button className="voyd-lightbox-close" onClick={onClose}>✕</button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const VoydDetail = () => {
  const [lightbox, setLightbox] = useState(null);
  const open = (src, alt) => setLightbox({ src, alt });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="voyd-page">
      {lightbox && <Lightbox {...lightbox} onClose={() => setLightbox(null)} />}

      {/* ============ MASTHEAD ============ */}
      <header className="voyd-masthead">
        <div className="section-wrap">
          <Link to="/" className="voyd-back">← Back to Work</Link>

          <p className="voyd-kicker">Case Study — Interior Execution Platform</p>
          <h1 className="voyd-headline">
            I designed the part of VOYD<br />where people decide to trust it.
          </h1>
          <p className="voyd-deck">
            VOYD connects homeowners to designers and material vendors for home
            renovation — and takes responsibility for the execution, not just the
            introduction. I designed the customer journey that has to earn that
            trust before a single wall gets painted.
          </p>

          <div className="voyd-byline">
            <span><strong>Role</strong> UX / Product Designer</span>
            <span><strong>Platform</strong> Web, responsive</span>
            <span><strong>Sector</strong> PropTech</span>
            <span><strong>Tools</strong> Figma</span>
          </div>
        </div>

        <div className="section-wrap">
          <Photo
            src="/voydimages/banner-img.png"
            alt="VOYD homepage"
            caption="The homepage — first thing a nervous first-time renovator sees."
            onOpen={open}
            ratio="21/9"
          />
        </div>
      </header>

      {/* ============ 01 — WHAT IT ACTUALLY IS ============ */}
      <section className="voyd-section" id="overview">
        <div className="section-wrap voyd-article">
          <p className="voyd-page-num">Page 01</p>
          <h2 className="voyd-h2">This isn't a design studio.<br />It's an execution company.</h2>
          <p className="voyd-drop">
            Most interior platforms are selling you a feeling — mood boards, pretty
            renders, "imagine your dream home." VOYD is selling something less
            glamorous and honestly harder to design for: the promise that the work
            actually gets done, on budget, without you having to babysit a
            contractor for four months.
          </p>
          <p className="voyd-p">
            That changes what the product has to do. It's not enough to look nice.
            Every screen has to answer a question the customer is silently asking:
            "okay, but can I actually trust this?" A tiered quality system runs
            underneath the whole thing — vendors and materials are graded the same
            way, so a customer picking "Gold" knows exactly what that means on both
            sides.
          </p>

          <div className="voyd-stat-strip">
            <div><span>2</span>sides of the marketplace, one product</div>
            <div><span>5</span>quality tiers, from Bronze to Diamond</div>
            <div><span>4</span>separate things a customer can "have" — quote, project, order, cart</div>
          </div>
        </div>
      </section>

      {/* ============ 02 — TWO PEOPLE, ONE PRODUCT ============ */}
      <section className="voyd-section voyd-alt" id="about">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 02</p>
          <h2 className="voyd-h2">Two very different people<br />had to trust the same screen.</h2>
          <p className="voyd-p voyd-p-narrow">
            A homeowner opening this app and a vendor opening this app want almost
            opposite things. I had to design for both without either one feeling
            like an afterthought bolted onto the other's product.
          </p>

          <div className="voyd-persona-row">
            <div className="voyd-persona">
              <p className="voyd-persona-flag">The homeowner</p>
              <p className="voyd-persona-line">Wants their house done. Doesn't want to become a part-time project manager to make that happen.</p>
              <ul>
                <li>Knows the budget upfront — no surprise bills later</li>
                <li>Gets matched, doesn't have to shop around blind</li>
                <li>Can actually see what's happening once work starts</li>
                <li>Has someone to complain to if the vendor drops the ball</li>
              </ul>
            </div>
            <div className="voyd-persona">
              <p className="voyd-persona-flag">The vendor</p>
              <p className="voyd-persona-line">Wants steady work. Doesn't want to spend half their week chasing leads that go nowhere.</p>
              <ul>
                <li>Gets leads that actually match their price range and skill</li>
                <li>Gets paid on a schedule, not "whenever the client feels like it"</li>
                <li>Gets material sourcing help instead of doing it alone</li>
                <li>Gets a profile that does the selling for them</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 — THE PROBLEM ============ */}
      <section className="voyd-section" id="challenge">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 03</p>
          <h2 className="voyd-h2">Nearly everyone in this industry<br />has already been burned once.</h2>

          <div className="voyd-problem-cols">
            <div>
              <p className="voyd-problem-flag">Homeowner side</p>
              <p>Ask anyone who's renovated a house in India and you'll get a war story. That's the baseline VOYD is designing against.</p>
              <ul>
                <li>The quote never matches the final bill</li>
                <li>Vendors disappear mid-project or slow down for no reason</li>
                <li>Once work starts, there's zero visibility into what's actually happening</li>
                <li>Too many vendors, too many prices, no way to compare fairly</li>
              </ul>
            </div>
            <div>
              <p className="voyd-problem-flag voyd-problem-flag-accent">Vendor side</p>
              <p>Nobody talks about this side, but it's just as broken.</p>
              <ul>
                <li>Leads come in waves — feast or famine, no consistency</li>
                <li>Getting paid on time is basically a negotiation every single time</li>
                <li>No easy way to prove "I actually do good work" to a stranger</li>
                <li>No real marketing presence unless they build it themselves</li>
              </ul>
            </div>
          </div>

          <blockquote className="voyd-pullquote">
            The job wasn't to build a marketplace. It was to build a reason for
            both sides to stop being scared of each other.
          </blockquote>
        </div>
      </section>

      {/* ============ 04 — GOALS ============ */}
      <section className="voyd-section voyd-alt" id="goals">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 04</p>
          <h2 className="voyd-h2">What I actually had to get right.</h2>

          <div className="voyd-list-plain">
            {[
              "Let someone set a budget and a quality level without needing to already know how interior design works.",
              "Make the pricing tiers, vendor history, and inspection steps visible — not buried in a FAQ nobody reads.",
              "Give vendors an actual reason to want VOYD leads over word-of-mouth.",
              "Fit the furniture shop into the renovation journey naturally, instead of it feeling like a totally separate app.",
              "Keep a running renovation \"project\" and a one-off furniture \"order\" from getting tangled into the same thing.",
            ].map((g, i) => (
              <div className="voyd-list-row" key={i}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 05 — WHAT WAS MINE ============ */}
      <section className="voyd-section" id="role">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 05</p>
          <h2 className="voyd-h2">What was actually mine to design.</h2>
          <p className="voyd-p voyd-p-narrow">
            Being upfront about scope, because I think it matters more than
            pretending I built the whole thing solo:
          </p>

          <div className="voyd-tag-row">
            {[
              "Quote-to-project flow",
              "Account dashboard structure",
              "Vendor onboarding page",
              "Design system & components",
              "The tier/classification system",
              "Working with dev to actually ship it",
            ].map((c, i) => (
              <div className="voyd-tagpill" key={i}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 06 — WHY THE STRUCTURE IS SPLIT ============ */}
      <section className="voyd-section voyd-alt" id="ia">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 06</p>
          <h2 className="voyd-h2">Why I kept the shop and<br />the renovation completely separate.</h2>
          <p className="voyd-p voyd-p-narrow">
            My first instinct was one dashboard, one "My Stuff" page. That was
            wrong. A renovation project runs for months and involves a vendor,
            a budget, real dates. A furniture order is done in a week. Mixing
            them made the whole account section confusing to look at, so I split
            it into four things that each mean one specific thing:
          </p>

          <pre className="voyd-tree">{`VOYD
├── Home
├── Services                 the journey: budgeting → matching → inspection
├── Vendor page              why a designer should sign up
├── Shop                     furniture & materials, by room or category
├── Quality Checker          field team's on-site inspection tool
├── Get a Quote              property → budget → tier
└── My Account
    ├── My Quotes            still deciding, nothing locked in
    ├── My Projects          a real renovation, vendor assigned, dates set
    ├── My Orders            furniture bought through the shop
    └── My Cart              waiting to be bought`}</pre>

          <div className="voyd-entity-row">
            <div><strong>Quote</strong><p>Just thinking about it. Nothing's committed yet.</p></div>
            <div><strong>Project</strong><p>It's real now — a vendor is assigned and work is happening.</p></div>
            <div><strong>Order</strong><p>You bought a chair. That's it, that's the whole thing.</p></div>
            <div><strong>Cart</strong><p>Sitting there, waiting for you to check out.</p></div>
          </div>
        </div>
      </section>

      {/* ============ 07 — HOW I GOT HERE ============ */}
      <section className="voyd-section" id="process">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 07</p>
          <h2 className="voyd-h2">How I actually got here.</h2>

          <div className="voyd-steps">
            {[
              ["Figuring out how it makes money", "Before touching Figma, I needed to understand what VOYD actually is under the marketing language — where the money moves, who pays who, what \"quality tier\" really controls."],
              ["Picking the one flow that mattered most", "Quote → configure the project → get matched to a vendor. Everything else on the site supports this. If this flow didn't work, nothing else would matter."],
              ["Untangling the account structure", "This is where Quotes / Projects / Orders / Cart got separated instead of dumped into one page."],
              ["Rough wireframes, on purpose ugly", "Grey boxes first. I wanted to know if the flow made sense before anyone judged the colors."],
              ["Then, and only then, the visual layer", "Forest green, brass gold, a serif for category headers. It needed to feel like craftsmanship, not another SaaS dashboard."],
              ["Going back and fixing what broke", "Found a mismatch between a 3-tier and a 5-tier system while reviewing it later. Wrote it down instead of quietly patching it."],
            ].map(([title, desc], i) => (
              <div className="voyd-step" key={i}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 08 — WIREFRAMES ============ */}
      <section className="voyd-section voyd-alt" id="wireframes">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 08</p>
          <h2 className="voyd-h2">Before it looked good, it had to make sense.</h2>
          <p className="voyd-p voyd-p-narrow">
            No color, no imagery — just boxes and arrows, so the flow could get
            argued with before anyone got attached to how it looked.
          </p>

          <div className="voyd-wf-grid">
            {[
              ["Get a Quote", "Property details → project tier → budget"],
              ["Project builder", "Filters, live budget tracker, vendor matches"],
              ["Account structure", "Quotes / Projects / Orders, split apart"],
              ["Vendor matching", "Filtered list by tier"],
            ].map(([label, sub], i) => (
              <div className="voyd-wf" key={i}>
                <span>WF-{String(i + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
                <p>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 09 — VISUAL DESIGN ============ */}
      <section className="voyd-section" id="design-system">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 09</p>
          <h2 className="voyd-h2">Green and gold, on purpose.</h2>
          <p className="voyd-p voyd-p-narrow">
            I didn't want this to look like another SaaS product with a stock
            blue-and-white theme. Interior work is physical — wood, fabric,
            tile. The palette needed to feel like that: a deep forest green
            instead of corporate blue, brass gold instead of a neon accent, and
            a serif for category headers so it reads a little like a materials
            catalogue instead of a dashboard.
          </p>

          <div className="voyd-dsys-cols">
            <div>
              <p className="voyd-dsys-flag">Color</p>
              <div className="voyd-swatches">
                {[
                  ["Deep Forest", "#0E2B22"],
                  ["Forest Green", "#1F6E4D"],
                  ["Brass Gold", "#B6905C"],
                  ["Cream", "#F6F3EC"],
                  ["Muted Gray-Green", "#5A6B63"],
                ].map(([name, hex], i) => (
                  <div className="voyd-swatch" key={i}>
                    <div style={{ background: hex }} />
                    <span>{name}</span>
                    <small>{hex}</small>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="voyd-dsys-flag">Type</p>
              <div className="voyd-type-line"><small>Headers</small><strong className="voyd-serif-demo">Interior Execution</strong></div>
              <div className="voyd-type-line"><small>Body</small><span>Plain, readable text for anything long-form.</span></div>
              <div className="voyd-type-line"><small>Data</small><span className="voyd-mono">₹90,000 · GOLD · VOYD010-39</span></div>
            </div>
          </div>

          <p className="voyd-dsys-flag" style={{ marginTop: 40 }}>The tier system</p>
          <div className="voyd-tier-row">
            {[
              ["Diamond", "#BFE3FF"], ["Platinum", "#C7CDD1"], ["Gold", "#D9B44A"],
              ["Silver", "#C9CDD2"], ["Bronze", "#C1793F"],
            ].map(([name, color], i) => (
              <div className="voyd-tierpill" key={i}><span style={{ background: color }} />{name}</div>
            ))}
          </div>

          <p className="voyd-dsys-flag" style={{ marginTop: 40 }}>Components</p>
          <div className="voyd-comp-row">
            <button className="voyd-btn-primary">Get a quote</button>
            <button className="voyd-btn-secondary">View pricing options</button>
            <div className="voyd-tagpill">In stock</div>
          </div>
        </div>
      </section>

      {/* ============ 10 — THE SCREENS ============ */}
      <section className="voyd-section voyd-alt" id="screens">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 10</p>
          <h2 className="voyd-h2">The screens that actually matter.</h2>
          <p className="voyd-p voyd-p-narrow">
            Not every screen I touched — just the ones that carry the story.
          </p>
        </div>

        <div className="section-wrap voyd-screen-stack">
          <Photo
            src="/voydimages/Homepagenew.png"
            alt="Homepage"
            caption="01 — Homepage. Has to calm someone down before it sells them anything."
            onOpen={open}
          />
          <Photo
            src="/voydimages/Customer-Services.png"
            alt="Customer Services page"
            caption="02 — Services page. Walks through budgeting, matching, and inspection before asking for a commitment."
            onOpen={open}
          />
          <Photo
            src="/voydimages/pop-up.png"
            alt="Get a Quote popup"
            caption="03 — Get a Quote. The first real commitment a customer makes."
            onOpen={open}
          />
          <Photo
            src="/voydimages/project-progress.png"
            alt="Project configurator and progress"
            caption="04 — The project builder. Budget updates live as you pick materials and vendor tier. This is the screen I'm most proud of."
            onOpen={open}
          />
          <div className="voyd-photo-pair">
            <Photo src="/voydimages/Shop-By-Room.png" alt="Shop by Room" caption="05a — Shop by Room" onOpen={open} ratio="4/3" />
            <Photo src="/voydimages/Shop-By-Category.png" alt="Shop by Category" caption="05b — Shop by Category" onOpen={open} ratio="4/3" />
          </div>
          <Photo
            src="/voydimages/Customer-login-page.png"
            alt="Account dashboard"
            caption="06 — Account area. Quotes, Projects, and Orders live separately on purpose."
            onOpen={open}
          />
        </div>
      </section>

      {/* ============ 11 — THE SHOP ============ */}
      <section className="voyd-section" id="ecommerce">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 11</p>
          <h2 className="voyd-h2">The furniture shop, and its problems.</h2>

          <div className="voyd-list-plain" style={{ marginBottom: 20 }}>
            <div className="voyd-list-row"><span>—</span><p><strong>Two ways to browse.</strong> By room or by category — same catalogue, two mental models depending on how the customer thinks.</p></div>
            <div className="voyd-list-row"><span>—</span><p><strong>Same template everywhere.</strong> Banner, gold category label, subcategory grid. Consistent on purpose.</p></div>
            <div className="voyd-list-row"><span>—</span><p><strong>A real product page.</strong> Variants, pricing, specs, reviews, related items — the usual, done properly.</p></div>
          </div>

          <div className="voyd-photo-pair">
            <Photo src="/voydimages/Individual-product-page.png" alt="Product detail page" caption="Product page" onOpen={open} ratio="4/3" />
            <Photo src="/voydimages/MY CART.png" alt="Cart page" caption="Cart" onOpen={open} ratio="4/3" />
          </div>

          <div className="voyd-honest-box">
            <p className="voyd-honest-flag">Being honest about where this stands</p>
            <p>
              The shop still has Lorem Ipsum sitting in places it shouldn't, a
              couple of category pages showing the wrong product photos, and a
              cart subtotal that doesn't actually add up right now. I'm not
              hiding that. It's on the list to fix before this goes further —
              flagging it here felt more honest than pretending it's finished.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 12 — RESPONSIVE ============ */}
      <section className="voyd-section voyd-alt" id="responsive">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 12</p>
          <h2 className="voyd-h2">It had to work on a phone.<br />That's where people actually are.</h2>
          <p className="voyd-p voyd-p-narrow">
            Most homeowners aren't opening this on a laptop mid-renovation —
            they're checking it between calls, standing in a half-finished
            room. It had to hold up there.
          </p>

          <div className="voyd-device-row">
            <div className="voyd-device voyd-device-mobile"><span>Mobile</span></div>
            <div className="voyd-device voyd-device-tablet"><span>Tablet</span></div>
            <div className="voyd-device voyd-device-desktop"><span>Desktop</span></div>
          </div>
        </div>
      </section>

      {/* ============ 13 — FINAL SOLUTION ============ */}
      <section className="voyd-section" id="final">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 13</p>
          <h2 className="voyd-h2">What actually shipped.</h2>

          <div className="voyd-final-grid">
            <div><span>A</span><p>A homepage that talks someone down before it tries to sell them anything.</p></div>
            <div><span>B</span><p>A quote flow that turns "I want to renovate" into an actual budget with a real vendor attached.</p></div>
            <div><span>C</span><p>A pitch to vendors that's about trust and steady work, not just "sign up for leads."</p></div>
            <div><span>D</span><p>An account section that doesn't confuse a five-month renovation with a chair you bought last Tuesday.</p></div>
          </div>
        </div>
      </section>

      {/* ============ 14 — WHERE IT STANDS ============ */}
      <section className="voyd-section voyd-alt" id="outcome">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 14</p>
          <h2 className="voyd-h2">Where this actually stands right now.</h2>

          <div className="voyd-stat-strip">
            <div><span>6+</span>core flows designed and built</div>
            <div><span>5</span>tiers, now consistent across every surface</div>
            <div><span>3</span>real problems written down instead of hidden</div>
          </div>
        </div>
      </section>

      {/* ============ 15 — WHAT I'D DO DIFFERENTLY ============ */}
      <section className="voyd-section" id="learnings">
        <div className="section-wrap">
          <p className="voyd-page-num">Page 15</p>
          <h2 className="voyd-h2">What I'd do differently.</h2>

          <div className="voyd-learn-stack">
            <div className="voyd-learn">
              <p>I let the same "quality tier" idea live in three different places before checking they all agreed with each other.</p>
              <small>Marketing copy said five tiers. The quote form only offered three. Nobody noticed until I went looking for it. Now it's the first thing I'd lock down on a project like this.</small>
            </div>
            <div className="voyd-learn">
              <p>Splitting Quotes from Projects was right. I just didn't design the moment one turns into the other.</p>
              <small>There's no clear screen where a "maybe" becomes a "yes, let's do this." That's the next thing I'd design, not another feature.</small>
            </div>
            <div className="voyd-learn">
              <p>Placeholder content isn't a small thing. It undoes the trust you spent the whole product trying to build.</p>
              <small>Lorem Ipsum in the shop looks careless right next to a homepage that's working hard to look careful. That contrast is the whole lesson.</small>
            </div>
          </div>

          <div className="voyd-live-link">
            <a href="https://www.voydinterior.com" target="_blank" rel="noreferrer" className="voyd-btn-primary">View Live Site ↗</a>
            <Link to="/" className="voyd-btn-secondary">← All Projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoydDetail;