import { Link } from "react-router-dom";
import "./CaseCover.css";

/**
 * Opening screen for a website case study (same idea as the JaldiHire cover):
 * big title → only the TOP (hero) part of the homepage, fading out at the bottom
 * → one line → a strip with the project details.
 *
 * Props
 *  - title     : text/JSX, e.g. <>Trainex <span>Academy</span></>  (span = accent colour)
 *  - sub       : one line under the screenshot
 *  - image     : full homepage screenshot (only its top part is shown)
 *  - url       : text in the little browser bar
 *  - tags      : ["UI Design", "Frontend Dev"]
 *  - meta      : [{ label, value, href? }]
 *  - intro     : optional paragraph shown under the strip
 *  - accent    : accent colour (default orange)
 */
const CaseCover = ({
  backTo = "/",
  title,
  sub,
  image,
  imageAlt = "Homepage",
  url,
  tags = [],
  meta = [],
  intro,
  accent = "#F16232",
}) => (
  <>
    <header className="cc-cover" style={{ "--cc-accent": accent }}>
      <Link to={backTo} className="cc-back">
        ← Back to Work
      </Link>

      {tags.length > 0 && (
        <div className="cc-tags">
          {tags.map((t, i) => (
            <span key={t} className={`cc-tag ${i === 0 ? "cc-tag--accent" : ""}`}>
              {t}
            </span>
          ))}
        </div>
      )}

      <h1 className="cc-title">{title}</h1>

      <div className="cc-window">
        <div className="cc-window-bar">
          <span className="cc-dot" />
          <span className="cc-dot" />
          <span className="cc-dot" />
          {url && <span className="cc-url">{url}</span>}
        </div>
        <div className="cc-window-shot">
          <img src={image} alt={imageAlt} />
        </div>
      </div>

      {sub && <p className="cc-sub">{sub}</p>}
    </header>

    <section className="cc-strip">
      {meta.map((m) => (
        <div key={m.label} className="cc-strip-item">
          <small>{m.label}</small>
          {m.href ? (
            <a href={m.href} target="_blank" rel="noreferrer" className="cc-strip-link">
              {m.value}
            </a>
          ) : (
            <span>{m.value}</span>
          )}
        </div>
      ))}
    </section>

    {intro && (
      <section className="cc-intro">
        <p>{intro}</p>
      </section>
    )}
  </>
);

export default CaseCover;
