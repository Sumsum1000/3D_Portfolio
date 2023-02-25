import style from "./Navbar.module.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SubjectTileContext } from "./Context/SubjectTileContext";
import { useContext, useState, useEffect } from "react";
import { ArchData } from "../Data/ArchData";
import { ExhibitionData } from "../Data/ExhibitionData";
import { TopicListActions } from "./_Store/Store";

export const NavBar = () => {
  const links = ["architecture", "exhibitions", "personal"];
  // const { subjectTile, setSubjectTile } = useContext(SubjectTileContext);

  // const [topic, setTopic] = useState([]);

  const dispatch = useDispatch();

  const listMap = {
    architecture: ArchData,
    exhibitions: ExhibitionData,
  };

  // useEffect(() => {
  //   if (subjectTile === "architecture") {
  //     setTopic(ArchData);
  //   }
  //   if (subjectTile === "exhibitions") {
  //     setTopic(ExhibitionData);
  //   }
  // }, []);

  return (
    <nav className={style["navbar"]}>
      <NavLink key={Math.random()} to="/" className={style["nav-title"]}>
        {" "}
        My Portfolio
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? style["active"] : style["no-active"]
        }
      >
        Home
      </NavLink>
      {links.map((link) => {
        return (
          <NavLink
            key={Math.random()}
            to={`/${link}`}
            //onClick={() => setSubjectTile(`${link}`)}
            onClick={() =>
              dispatch(TopicListActions.setList(listMap[`${link}`]))
            }
            className={({ isActive }) =>
              isActive ? style["active"] : style["no-active"]
            }
          >
            {link}
          </NavLink>
        );
      })}
    </nav>
  );
};
