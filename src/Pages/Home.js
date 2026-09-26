import style from "./Home.module.scss";
import { InteractiveSection } from "../Components/InteractiveSection";
import { RendersSection } from "../Components/RendersSection";

export const Home = () => {
  return (
    <div className={style["home-page"]}>
      <InteractiveSection />
      <RendersSection />
    </div>
  );
};
