import style from "./IntroBlock.module.scss";

const LINKEDIN_URL = "[LINKEDIN_URL]";

export const IntroBlock = () => {
  return (
    <div className={style["intro"]}>
      <h1 className={style["name"]}>Asaf Levi</h1>
      <p className={style["role"]}>
        3D Artist & Creative Technologist – real-time 3D, interactive web,
        games
      </p>
      <div className={style["links"]}>
        <a href="mailto:asaf14levi@gmail.com">asaf14levi@gmail.com</a>
        <span className={style["divider"]}>·</span>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
};
