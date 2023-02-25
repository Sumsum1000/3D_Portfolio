import { Block } from "./Block";
import style from "./Tile.module.scss";
import { Link } from "react-router-dom";
import { BlockVideo } from "./BlockVideo";
import { useSelector, useDispatch } from "react-redux";
//import { TileDetailsActions } from "./_Store/Store";
import { TileDetailsActions } from "./_Store/Store";

export const Tile = ({ onClick, list, onClickMe }) => {
  const dispatch = useDispatch();
  //const { list } = useSelector((state) => state.topicListPage);

  const clickHandler = () => {};

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
        {
          /* If source is video place it into video component */
        }
        {
          /* Check type by extension like in the closup component */
        }
        if (item.type === "video") {
          return (
            <Link onClick={clickHandler} to={`./${item.id}`} key={item.id}>
              <BlockVideo src={item.src} />
            </Link>
          );
        }
      })}
    </div>
  );
};
