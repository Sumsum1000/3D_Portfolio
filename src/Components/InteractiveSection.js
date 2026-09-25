import style from "./InteractiveSection.module.scss";

const LEGO_URL = "[LEGO_URL]";
const LEGO_VIDEO_URL = "[LEGO_VIDEO_URL]";

export const InteractiveSection = () => {
  return (
    <div className={style["interactive-section"]}>
      <h2 className={style["section-title"]}>Interactive / Real-time</h2>
      <div className={style["project-card"]}>
        <div className={style["thumbnail"]}>Thumbnail placeholder</div>
        <div className={style["project-info"]}>
          <h3 className={style["project-title"]}>LEGO Assembly System</h3>
          <div className={style["actions"]}>
            <a
              className={style["demo-button"]}
              href={LEGO_URL}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
            <span className={style["note"]}>Best on desktop</span>
            <a
              className={style["video-link"]}
              href={LEGO_VIDEO_URL}
              target="_blank"
              rel="noreferrer"
            >
              Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
