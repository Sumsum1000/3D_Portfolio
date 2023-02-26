import { Block } from "./Block";
import style from "./Tile.module.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BlockVideo } from "./BlockVideo";
import { useSelector, useDispatch } from "react-redux";
//import { TileDetailsActions } from "./_Store/Store";
import { TileDetailsActions } from "./_Store/Store";
import { CloseupActions } from "./_Store/Store";
import { Closeup } from "../Pages/Closeup";

export const Tile = ({ onClick, list, onClickMe }) => {
  const dispatch = useDispatch();
  //const { list } = useSelector((state) => state.topicListPage);

  const clickHandler = () => {};

  if (list.length > 1) {
    return (
      <div className={style["tile-container"]}>
        {/* If source is img place it into img component */}

        {list.map((item) => {
          if (item.type === "img") {
            return (
              <Link to={`./${item.id}`} key={item.id}>
                <Block
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  src={item.src}
                  //onClick={() => dispatch(TileDetailsActions.setDetails(item))}
                  onClick={() => onClickMe(item)}
                />
              </Link>
            );
          }

          if (item.type === "video") {
            return (
              <Link onClick={clickHandler} to={`./${item.id}`} key={item.id}>
                <BlockVideo src={item.src} onClick={() => onClickMe(item)} />
              </Link>
            );
          }
        })}
      </div>
    );
  } else {
    console.log("1 Item ", list[0]);
    dispatch(CloseupActions.setCloseup(list[0]));
    return <Closeup />;
  }
};
