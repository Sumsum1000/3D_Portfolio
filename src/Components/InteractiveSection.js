import style from "./InteractiveSection.module.scss";
import LegoIntroVideo from "../Images/Interactive/LegoIntro.webm";

const LEGO_URL = "https://lego-theta.vercel.app/";
const LEGO_VIDEO_URL = "https://www.youtube.com/watch?v=Q_bYgZdz6l4";

export const InteractiveSection = () => {
  return (
    <section className={style["hero"]}>
      <div className={style["hero-info"]}>
        <span className={style["eyebrow"]}>
          <span className={style["dot"]}></span>
          Latest &middot; Interactive
        </span>
        <h1 className={style["title"]}>LEGO Assembly System</h1>
        <p className={style["description"]}>
          Real-time, in-browser 3D build experience. [One or two lines: what
          it does and what you built]
        </p>
        <div className={style["tags"]}>
          <span className={style["tag"]}>Real-time 3D</span>
          <span className={style["tag"]}>[Three.js / Unity WebGL]</span>
          <span className={style["tag"]}>Best on desktop</span>
        </div>
        <div className={style["actions"]}>
          <a
            className={style["demo-button"]}
            href={LEGO_URL}
            target="_blank"
            rel="noreferrer"
          >
            Try the live demo
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </a>
          <a
            className={style["video-button"]}
            href={LEGO_VIDEO_URL}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 5l12 7-12 7z"></path>
            </svg>
            Video
          </a>
        </div>
      </div>
      <div className={style["preview-panel"]}>
        <video
          className={style["preview-video"]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={LegoIntroVideo} type="video/webm" />
        </video>
      </div>
    </section>
  );
};
