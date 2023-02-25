import style from "./Home.module.scss";
import { subjectsList } from "../Data/HomeData";
import { Link } from "react-router-dom";
import { TopicItem } from "../Components/TopicItem";
import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TopicListActions } from "../Components/_Store/Store";
import { SubjectTileContext } from "../Components/Context/SubjectTileContext";
import { ArchData } from "../Data/ArchData";
import { ExhibitionData } from "../Data/ExhibitionData";

export const Home = () => {
  //const [subject, setSubject] = useState("");
  const dispatch = useDispatch();

  const listMap = {
    architecture: ArchData,
    exhibitions: ExhibitionData,
  };

  //   const listDataHandler = () => {
  //     dispatch(TopicListActions.setList(ExhibitionData));
  //   };

  return (
    <div className={style["home-container"]}>
      {subjectsList.map((item) => {
        return (
          <div className={style["subject-container"]} key={item.id}>
            {/* `/${item.subject}` */}
            <Link to={`/${item.subject}`}>
              <TopicItem
                title={item.title}
                src={item.src}
                onClick={() =>
                  dispatch(TopicListActions.setList(listMap[`${item.subject}`]))
                }
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
