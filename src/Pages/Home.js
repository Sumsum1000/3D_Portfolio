import style from "./Home.module.scss";
import { subjectsList } from "../Data/HomeData";
import { Link } from "react-router-dom";
import { TopicItem } from "../Components/TopicItem";
import { useDispatch, useSelector } from "react-redux";
import { TopicListActions } from "../Components/_Store/Store";
import { ArchData } from "../Data/ArchData";
import { ExhibitionData } from "../Data/ExhibitionData";
import { PersonalData } from "../Data/PersonalData";
import { IntroBlock } from "../Components/IntroBlock";
import { InteractiveSection } from "../Components/InteractiveSection";

export const Home = () => {
  const dispatch = useDispatch();

  const listMap = {
    architecture: ArchData,
    exhibitions: ExhibitionData,
    personal: PersonalData,
  };

  return (
    <>
      <IntroBlock />
      <InteractiveSection />
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
                    dispatch(
                      TopicListActions.setList(listMap[`${item.subject}`])
                    )
                  }
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
