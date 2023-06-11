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
        //onClick={onClick}
      />
    </div>
  );
};
