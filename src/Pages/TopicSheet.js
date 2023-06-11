import style from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Tile } from "../Components/Tile";
import { CloseupActions, CurrenItemActions } from "../Components/_Store/Store";

export const TopicSheet = () => {
  const dispatch = useDispatch();
  const { listDetails } = useSelector((state) => state.details);

  const getItemIndex = (imageItem) => {};

  const updateCloseupHandler = (item) => {
    console.log("LIST DETAILS: ", listDetails);
    //console.log("Item!! ", item);
    dispatch(CloseupActions.setCloseup(item));
  };

  if (listDetails) {
    return (
      <Tile
        list={listDetails}
        onClickMe={(item) => updateCloseupHandler(item)}
      />
    );
  } else {
    return (
      <>
        <h2>Loading</h2>
        <h2>Loading</h2>
        <h2>Loading</h2>
        <h2>Loading</h2>
      </>
    );
  }
};
