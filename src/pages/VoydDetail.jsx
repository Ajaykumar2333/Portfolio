import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// Reuses the image-only case study styles from the Property Inspection page.
import "./PropertyInspectionDetail.css";

// Images live in /public/voydimages2/ — "Page 1 VOYD.png" … "Page 21 VOYD.png".
// Just add or reorder files here.
const TOTAL_PAGES = 21;
const images = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => ({
  src: `/voydimages2/Page%20${n}%20VOYD.png`,
  alt: `VOYD Interiors — case study page ${n}`,
}));

/**
 * Loads + decodes every image in the background, one after another
 * (first image first). Once an image is ready we know its real size, so
 * its slot is already the correct height before the user scrolls to it —
 * no layout jumps, no decode hitch while scrolling.
 */
const usePreloadedImages = (list) => {
  const [ready, setReady] = useState({}); // src -> { w, h }

  useEffect(() => {
    let cancelled = false;

    const load = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
        const done = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        // decode() finishes the heavy work off-screen, so painting is instant later
        if (img.decode) img.decode().then(done, done);
        else {
          img.onload = done;
          img.onerror = done;
        }
      });

    (async () => {
      for (const { src } of list) {
        const size = await load(src);
        if (cancelled) return;
        setReady((prev) => ({ ...prev, [src]: size }));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [list]);

  return ready;
};

const VoydDetail = () => {
  const ready = usePreloadedImages(images);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pi-page">
      <Link to="/work" className="pi-back">
        <span aria-hidden="true">←</span> Back
      </Link>

      <div className="pi-stack">
        {images.map((img, i) => {
          const size = ready[img.src];
          const loaded = !!size && size.w > 0;
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

export default VoydDetail;