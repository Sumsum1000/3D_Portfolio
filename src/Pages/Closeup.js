import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseupActions } from "../Components/_Store/Store";
import style from "./closeupImg.module.scss";

export const Closeup = ({ src, onClickL }) => {
  const dispatch = useDispatch();
  const { currentCloseup, setCloseup } = useSelector((state) => state.closeup);
  const { currentItem } = useSelector((state) => state.currentItem);
  const [itemType, setItemType] = useState();

  // CREACTE ZIG ZAG REDUX

  const onClickR = () => {
    console.log("currentCloseup: ", currentCloseup);
    const topic = currentItem;
    console.log("topic $ ", topic);
    dispatch(
      CloseupActions.setCloseupRClick(
        "/static/media/Arch_2_1.f5f887e97b458878284e.jpg"
      )
    );
  };

  useEffect(() => {
    console.log("SRC ", currentCloseup);
    setItemType(currentCloseup.split(".").pop());
  }, []);

  if (itemType === "jpg" || itemType === "jpeg" || itemType === "png") {
    return (
      <div className={style["closeup-container"]}>
        {/* <button onClick={onClickR}>left</button> */}
        <img className={style["closeup"]} src={currentCloseup} />
        <button onClick={onClickR}>right</button>
      </div>
    );
  } else if (itemType === "mp4") {
    return (
      <div className={style["closeup-container"]}>
        <video className={style["img-block"]} controls autoPlay muted>
          <source src={currentCloseup} />
        </video>
      </div>
    );
  }

  //   return (
  //     <div className={style["closeup-container"]}>
  //       <button onClick={onClickR}>left</button>
  //       <img className={style["closeup"]} src={currentCloseup} />
  //       <button onClick={onClickL}>right</button>
  //     </div>
  //   );
};
