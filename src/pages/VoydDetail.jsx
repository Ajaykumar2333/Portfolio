import ImageCaseStudy from "../components/ImageCaseStudy";

// Images live in /public/voydimages2/ — "Page 1 VOYD.png" … "Page 21 VOYD.png".
// They show in number order. When you add more pages, just raise this number.
const TOTAL_PAGES = 21;

const images = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => ({
  src: `/voydimages2/Page%20${n}%20VOYD.png`,
  alt: `VOYD Interiors — case study page ${n}`,
}));

const VoydDetail = () => <ImageCaseStudy images={images} />;

export default VoydDetail;