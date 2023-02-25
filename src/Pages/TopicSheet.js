import style from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import useEffect from "react";
import { Tile } from "../Components/Tile";
import { CloseupActions } from "../Components/_Store/Store";

export const TopicSheet = () => {
  const dispatch = useDispatch();
  const { listDetails } = useSelector((state) => state.details);

  const updateCloseupHandler = (item) => {
    dispatch(CloseupActions.setCloseup(item));
    console.log("Update Update Update!");
  };

  if (listDetails) {
    return (
      <Tile
        list={listDetails}
        onClickMe={(item) => updateCloseupHandler(item)}
        //onClickMe={(item) => console.log("item ", item)}
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
