import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Tile } from "../Components/Tile";
import { ArchData } from "../Data/ArchData";
import { TileDetailsActions } from "../Components/_Store/Store";

export const Topic = () => {
  const { list } = useSelector((state) => state.topicListPage);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("list ", list);
  }, []);

  if (list) {
    return (
      <Tile
        list={list}
        onClickMe={(item) => dispatch(TileDetailsActions.setDetails(item))}
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
