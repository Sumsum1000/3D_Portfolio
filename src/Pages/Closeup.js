import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./closeupImg.module.scss";

export const Closeup = ({ src, onClickL, onClickR }) => {
  const dispatch = useDispatch();
  const { currentCloseup } = useSelector((state) => state.closeup);
  const [itemType, setItemType] = useState();

  //   if (itemType === "jpg" || itemType === "jpeg" || itemType === "png") {
  //     return (
  //       <div className={style["closeup-container"]}>
  //         <button onClick={onClickR}>left</button>
  //         <img className={style["closeup"]} src={currentCloseup} />
  //         <button onClick={onClickL}>right</button>
  //       </div>
  //     );
  //   } else if (itemType === "mp4") {
  //     return (
  //       <div className={style["closeup-container"]}>
  //         <video className={style["img-block"]} controls autoPlay muted>
  //           <source src={currentCloseup} />
  //         </video>
  //       </div>
  //     );
  //   }

  useEffect(() => {
    console.log("SRC ", currentCloseup);
    setItemType(currentCloseup.split(".").pop());
  }, []);

  if (itemType === "jpg" || itemType === "jpeg" || itemType === "png") {
    return (
      <div className={style["closeup-container"]}>
        <button onClick={onClickR}>left</button>
        <img className={style["closeup"]} src={currentCloseup} />
        <button onClick={onClickL}>right</button>
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
