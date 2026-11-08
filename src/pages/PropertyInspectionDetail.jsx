import ImageCaseStudy from "../components/ImageCaseStudy";

// Images live in /public/PI images/ named 1.png, 2.png, 3.png …
// They show in number order. When you add more images, just raise this number.
const IMAGE_COUNT = 26;

const images = Array.from({ length: IMAGE_COUNT }, (_, i) => i + 1).map((n) => ({
  src: `/PI%20images/${n}.png`,
  alt: `Property Inspection Tool — case study ${n}`,
}));

const PropertyInspectionDetail = () => <ImageCaseStudy images={images} />;

export default PropertyInspectionDetail;