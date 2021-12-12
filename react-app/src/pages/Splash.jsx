import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import HeroHome from "../partials/Splash/HeroHome";
import FeaturesHome from "../partials/Splash/Features";
import FeaturesBlocks from "../partials/Splash/FeaturesBlocks";

function Splash() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return <Redirect to="/homepage" />;
  }

  return (
    <>
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
    </>
  );
}

export default Splash;
