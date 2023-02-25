import style from "./BlockVideo.module.scss";

export const BlockVideo = ({ src, onClick, id, name }) => {
  return (
    <div className={style["border-div"]} id={id}>
      <video
        onClick={onClick}
        className={style["img-block"]}
        name={name}
        autoPlay
        muted
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
