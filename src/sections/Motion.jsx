import { useState, useRef } from "react";
import "./Motion.css";

/* ─────────────────────────────────────────────
   VIDEO MODAL — plays full video with sound
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   VIDEO CARD — hover to preview, click to play
───────────────────────────────────────────── */
const MotionCard = ({ video, onOpen }) => {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    if (video.type === "local" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);
    if (video.type === "local" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="motion-card"
      onClick={() => onOpen(video)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="motion-thumb">
        {video.type === "youtube" ? (
          <img
            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt={video.title}
            className="motion-thumb-img"
          />
        ) : (
          <video
            ref={videoRef}
            src={video.src}
            className="motion-thumb-video"
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
        <div className={`motion-play-overlay ${hovered ? "motion-play-overlay--hidden" : ""}`}>
          <span className="play-icon">▶</span>
        </div>
      </div>
      <div className="motion-info">
        <h3 className="motion-title">{video.title}</h3>
        <p className="motion-tool">{video.tool}</p>
      </div>
    </div>
  );
};

const motionWorks = [
  {
    id: 1,
    title: "Trainex — Platform Intro Video",
    tool: "After Effects · Premiere Pro",
    type: "local",
    src: "/assets/Trainexprefix.mov",
  },
  {
    id: 2,
    title: "Voyd Interiors — Services Video",
    tool: "Premiere Pro · After Effects",
    type: "youtube",
    youtubeId: "ZL5FCKvg6AE",
  },
];

const Motion = () => {
  const [openVideo, setOpenVideo] = useState(null);

  return (
    <section className="motion-section" id="motion">
      <div className="motion-container">
        <div className="motion-header">
          <p className="section-tag">Motion Design</p>
          <h2 className="section-title">
            Bringing Designs to <span className="accent">Life</span>
          </h2>
          <p className="section-sub">
            Beyond UI — intro videos, brand animation, and marketing content built in After Effects & Premiere Pro.
          </p>
        </div>

        <div className="motion-grid">
          {motionWorks.map((video) => (
            <MotionCard key={video.id} video={video} onOpen={setOpenVideo} />
          ))}
        </div>
      </div>

      {openVideo && <MotionModal video={openVideo} onClose={() => setOpenVideo(null)} />}
    </section>
  );
};

export default Motion;