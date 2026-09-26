import style from "./Block.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { TileDetailsActions } from "./_Store/Store";

export const Block = ({
  src,
  onClick,
  //passId,
  id,
  name,
  subject,
  currentDetailList,
  idHandler,
  caption,
}) => {
  // const dispatch = useDispatch();

  // // const onClick = (id) => {
  // //   passId(id);
  // // }

  return (
    <div
      className={style["border-div"]}
      id={id}
      subject={subject}
      onClick={onClick}
      //passId={() onClick => (id)}
    >
      <img
        className={style["img-block"]}
        src={src}
        name={name}
        alt={name || ""}
        //onClick={onClick}
      />
      {caption && (
        <div className={style["caption"]}>
          <p className={style["caption-text"]}>{caption}</p>
        </div>
      )}
    </div>
  );
};
