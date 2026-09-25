import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tile } from "../Components/Tile";
import { TileDetailsActions, TopicListActions } from "../Components/_Store/Store";
import { ArchData } from "../Data/ArchData";
import { ExhibitionData } from "../Data/ExhibitionData";
import { PersonalData } from "../Data/PersonalData";

const listMap = {
  architecture: ArchData,
  exhibitions: ExhibitionData,
  personal: PersonalData,
};

export const Topic = () => {
  const { subject } = useParams();
  const { list } = useSelector((state) => state.topicListPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TopicListActions.setList(listMap[subject]));
  }, [subject, dispatch]);

  if (list.length > 0) {
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
