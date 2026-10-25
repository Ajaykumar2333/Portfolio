import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./PropertyInspectionDetail.css";

// Images live in /public/PI images/ — just add or reorder files here.
const images = [1, 2, 3, 4, 5].map((n) => ({
  src: `/PI%20images/${n}.png`,
  alt: `Property Inspection Tool — case study ${n}`,
}));

const PropertyInspectionDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pi-page">
      <Link to="/work" className="pi-back">
        <span aria-hidden="true">←</span> Back
      </Link>

      <div className="pi-stack">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="pi-img"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
    </main>
  );
};

export default PropertyInspectionDetail;
