import style from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArchData } from "../Data/ArchData";
import { ExhibitionData } from "../Data/ExhibitionData";
import { TopicListActions } from "./_Store/Store";
import { PersonalData } from "../Data/PersonalData";

const LINKEDIN_URL = "[LINKEDIN_URL]";

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
      <Link to="/" className={style["brand"]}>
        <span className={style["name"]}>Asaf Levi</span>
        <span className={style["role"]}>3D Artist & Creative Technologist</span>
      </Link>
      <div className={style["nav-links"]}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? style["active"] : style["no-active"]
          }
        >
          Home
        </NavLink>
        {links.map((link) => {
          return (
            <NavLink
              key={link}
              to={`/${link}`}
              onClick={() =>
                dispatch(TopicListActions.setList(listMap[`${link}`]))
              }
              className={({ isActive }) =>
                isActive ? style["active"] : style["no-active"]
              }
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </NavLink>
          );
        })}
        <span className={style["divider"]}></span>
        <a className={style["accent-link"]} href="mailto:asaf14levi@gmail.com">
          Email
        </a>
        <a
          className={style["accent-link"]}
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};
