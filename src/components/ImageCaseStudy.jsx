import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../pages/PropertyInspectionDetail.css";

// How many images load at the same time. Top images are always requested first.
const PARALLEL = 3;

/**
 * Loads images in number order (a few at a time). Once an image is ready we
 * know its real size, so its slot has the right height (no layout jumps).
 * Until then the slot shows the moving grey "wiper" shimmer.
 */
const usePreloadedImages = (list) => {
  const [ready, setReady] = useState({}); // src -> { w, h }

  useEffect(() => {
    let cancelled = false;
    let next = 0;

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

    const worker = async () => {
      while (!cancelled && next < list.length) {
        const { src } = list[next++];
        const size = await load(src);
        if (cancelled) return;
        setReady((prev) => ({ ...prev, [src]: size }));
      }
    };

    for (let i = 0; i < PARALLEL; i++) worker();

    return () => {
      cancelled = true;
    };
  }, [list]);

  return ready;
};

/**
 * Image-only case study page, shared by PI and VOYD.
 * Images stack in number order; each slot shows a shimmer until it is ready.
 */
const ImageCaseStudy = ({ images }) => {
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
                  decoding="sync"
                  loading="eager"
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

export default ImageCaseStudy;
