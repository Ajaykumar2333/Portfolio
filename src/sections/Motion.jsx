import { useState, useRef } from "react";
import "./Motion.css";

const MotionModal = ({ video, onClose }) => (
  <div className="motion-modal-overlay" onClick={onClose}>
    <button className="motion-modal-close" onClick={onClose}>✕</button>
    <div className="motion-modal-inner" onClick={(e) => e.stopPropagation()}>
      {video.type === "youtube" ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      ) : (
        <video src={video.src} controls autoPlay playsInline />
      )}
    </div>
  </div>
);

const MotionCard = ({ video, onOpen }) => {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    if (video.type === "local" && videoRef.current) videoRef.current.play().catch(() => {});
  };
  const handleLeave = () => {
    setHovered(false);
    if (video.type === "local" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="motion-card" onClick={() => onOpen(video)} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className="motion-thumb">
        {video.type === "youtube" ? (
          <img src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} alt={video.title} className="motion-thumb-img" />
        ) : (
          <video ref={videoRef} src={video.src} className="motion-thumb-video" muted loop playsInline preload="metadata" />
        )}
        <div className={`motion-play-overlay ${hovered ? "motion-play-overlay--hidden" : ""}`}>
          <span className="play-icon">▶</span>
        </div>
      </div>
      <p className="motion-title">{video.title}</p>
      <p className="motion-tool">{video.tool}</p>
    </div>
  );
};

const PosterLightbox = ({ src, onClose }) => (
  <div className="motion-modal-overlay" onClick={onClose}>
    <button className="motion-modal-close" onClick={onClose}>✕</button>
    <img src={src} alt="Poster" className="motion-poster-full" onClick={(e) => e.stopPropagation()} />
  </div>
);

const motionWorks = [
  { id: 1, title: "Trainex — Intro Video", tool: "After Effects", type: "local", src: "/assets/Trainexprefix.mov" },
  { id: 2, title: "Voyd — Logo Animation", tool: "After Effects", type: "local", src: "/voydimages/voyd logo.mp4" },
  { id: 3, title: "Trainex — Promotional Video 1", tool: "Premiere Pro", type: "local", src: "/assets/promotion1.mov" },
  { id: 4, title: "Trainex — Promotional Video 2", tool: "Premiere Pro", type: "local", src: "/assets/promotion2.mov" },
  { id: 5, title: "Trainex — Promotional Video 3", tool: "Premiere Pro", type: "local", src: "/assets/promotion3.mov" },
  { id: 6, title: "Voyd — Services Video", tool: "Premiere Pro", type: "youtube", youtubeId: "ZL5FCKvg6AE" },
];

const posters = ["Poster1", "Poster2", "Poster3", "Poster4", "Poster5", "Poster6", "Poster7", "Poster8"];

const Motion = () => {
  const [openVideo, setOpenVideo] = useState(null);
  const [openPoster, setOpenPoster] = useState(null);

  return (
    <section className="motion-section" id="motion">
      <div className="section-wrap">
        <div className="motion-header">
          <div className="motion-text-block">
            <p className="section-eyebrow">Beyond Design</p>
            <h2 className="section-heading motion-heading">
              Motion, video &amp; <span className="accent">marketing</span> too
            </h2>
            <p className="motion-intro">
              Design is where I start, not where I stop. I edit the videos, animate the logos, and
              design the posters that go with them — so the brand shows up complete everywhere it
              needs to, not just on screen.
            </p>
          </div>

          <div className="motion-avatar-block">
            <img
              src="/assets/avatar-point.png"
              alt="Ajay pointing at his creative work"
              className="motion-avatar-big"
            />
          </div>
        </div>

        <div className="motion-container">
          <h3 className="motion-subheading">Motion &amp; Video</h3>
          <div className="motion-grid">
            {motionWorks.map((video) => (
              <MotionCard key={video.id} video={video} onOpen={setOpenVideo} />
            ))}
          </div>

          <h3 className="motion-subheading motion-subheading--posters">Posters &amp; Social Media Design</h3>
          <p className="motion-poster-intro">
            Marketing visuals designed in Photoshop for course launches, announcements, and brand awareness.
          </p>
          <div className="motion-poster-grid">
            {posters.map((name, i) => (
              <div
                key={name}
                className="motion-poster-card"
                onClick={() => setOpenPoster(`/assets/${name}.jpg`)}
              >
                <img src={`/assets/${name}.jpg`} alt={`Poster ${i + 1}`} className="motion-poster-img" />
                <div className="motion-poster-overlay"><span>View</span></div>
              </div>
            ))}
          </div>

          <div className="motion-tools-row">
            <span className="motion-tool-badge">After Effects</span>
            <span className="motion-tool-badge">Premiere Pro</span>
            <span className="motion-tool-badge">Photoshop</span>
          </div>
        </div>
      </div>

      {openVideo && <MotionModal video={openVideo} onClose={() => setOpenVideo(null)} />}
      {openPoster && <PosterLightbox src={openPoster} onClose={() => setOpenPoster(null)} />}
    </section>
  );
};

export default Motion;