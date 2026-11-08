import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PropertyInspectionDetail.css";

// Images live in /public/PI images/ named 1.png, 2.png, 3.png …
// They show in number order. When you add more images, just raise this number.
const IMAGE_COUNT = 26;

const images = Array.from({ length: IMAGE_COUNT }, (_, i) => i + 1).map((n) => ({
  src: `/PI%20images/${n}.png`,
  alt: `Property Inspection Tool — case study ${n}`,
}));

// If something hangs (bad network), let the user in after this long.
const MAX_WAIT_MS = 45000;

/**
 * Loads + decodes every image in the background. Once an image is ready we
 * know its real size, so its slot has the correct height (no layout jumps).
 * Returns the sizes found so far and how many images are finished.
 */
const usePreloadedImages = (list) => {
  const [ready, setReady] = useState({}); // src -> { w, h }
  const [doneCount, setDoneCount] = useState(0);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
        const done = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        if (img.decode) img.decode().then(done, done);
        else {
          img.onload = done;
          img.onerror = done;
        }
      });

    list.forEach(({ src }) => {
      load(src).then((size) => {
        if (cancelled) return;
        setReady((prev) => ({ ...prev, [src]: size }));
        setDoneCount((c) => c + 1);
      });
    });

    const timer = setTimeout(() => !cancelled && setTimedOut(true), MAX_WAIT_MS);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [list]);

  return { ready, doneCount, timedOut };
};

const PropertyInspectionDetail = () => {
  const { ready, doneCount, timedOut } = usePreloadedImages(images);
  const total = images.length;
  const isLoading = doneCount < total && !timedOut;
  const percent = Math.round((doneCount / total) * 100);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Stop the user from scrolling until everything is loaded
  useEffect(() => {
    if (!isLoading) return;
    const html = document.documentElement;
    const prevBody = document.body.style.overflow;
    const prevHtml = html.style.overflow;
    document.body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      html.style.overflow = prevHtml;
    };
  }, [isLoading]);

  // Back to top once loading finishes, so the case study starts from image 1
  useEffect(() => {
    if (!isLoading) window.scrollTo(0, 0);
  }, [isLoading]);

  return (
    <main className="pi-page">
      {isLoading && (
        <div
          className="pi-loader"
          role="status"
          aria-live="polite"
          aria-label={`Loading case study ${percent}%`}
        >
          <div className="pi-loader-inner">
            <div className="pi-spinner" aria-hidden="true" />
            <p className="pi-loader-title">Loading case study</p>
            <div className="pi-progress" aria-hidden="true">
              <div className="pi-progress-bar" style={{ width: `${percent}%` }} />
            </div>
            <p className="pi-loader-count">
              {doneCount} / {total} · {percent}%
            </p>
          </div>
        </div>
      )}

      <Link to="/work" className="pi-back">
        <span aria-hidden="true">←</span> Back
      </Link>

      <div className="pi-stack">
        {images.map((img, i) => {
          const size = ready[img.src];
          const loaded = !!size && size.w > 0;
          // image file missing / broken -> skip it instead of a forever-loading box
          if (size && size.w === 0) return null;
          return (
            <div
              key={img.src}
              className={`pi-slot ${loaded ? "pi-slot--loaded" : "pi-slot--loading"}`}
              style={loaded ? { aspectRatio: `${size.w} / ${size.h}` } : undefined}
            >
              {loaded && (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="pi-img"
                  width={size.w}
                  height={size.h}
                  decoding="async"
                  fetchpriority={i === 0 ? "high" : "auto"}
                />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default PropertyInspectionDetail;