import style from "./TopicItem.module.scss";
import { Block } from "./Block";

export const TopicItem = ({ title, src, subject, onClick }) => {
  return (
    <div className={style["subject-container"]} onClick={onClick}>
      <Block src={src} subject={subject} />
      <h3 className={style["title"]}>{title}</h3>
    </div>
  );
};
