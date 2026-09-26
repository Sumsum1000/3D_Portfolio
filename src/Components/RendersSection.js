import style from "./RendersSection.module.scss";
import { subjectsList } from "../Data/HomeData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TopicListActions } from "./_Store/Store";
import { ArchData } from "../Data/ArchData";
import { ExhibitionData } from "../Data/ExhibitionData";
import { PersonalData } from "../Data/PersonalData";

export const RendersSection = () => {
  const dispatch = useDispatch();

  const listMap = {
    architecture: ArchData,
    exhibitions: ExhibitionData,
    personal: PersonalData,
  };

  return (
    <section className={style["renders-section"]}>
      <div className={style["section-header"]}>
        <h2 className={style["section-title"]}>3D Art</h2>
        <p className={style["section-subtitle"]}>
          Modeling, materials, lighting &amp; animation
        </p>
      </div>
      <div className={style["grid"]}>
        {subjectsList.map((item) => (
          <Link
            to={`/${item.subject}`}
            className={style["card"]}
            key={item.id}
            onClick={() =>
              dispatch(TopicListActions.setList(listMap[`${item.subject}`]))
            }
          >
            <img className={style["image"]} src={item.src} alt={item.name} />
            <span className={style["caption"]}>
              <span className={style["category"]}>{item.title}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
