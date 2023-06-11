import style from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArchData } from "../Data/ArchData";
import { ExhibitionData } from "../Data/ExhibitionData";
import { TopicListActions } from "./_Store/Store";
import { PersonalData } from "../Data/PersonalData";

export const NavBar = () => {
  const links = ["architecture", "exhibitions", "personal"];

  const dispatch = useDispatch();

  const listMap = {
    architecture: ArchData,
    exhibitions: ExhibitionData,
    personal: PersonalData,
  };

  return (
    <nav className={style["navbar"]}>
      <NavLink key={Math.random()} to="/" className={style["nav-title"]}>
        {" "}
        My 3D Portfolio
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
