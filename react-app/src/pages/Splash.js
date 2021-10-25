import Header from "../partials/Splash/Header";
import HeroHome from "../partials/Splash/HeroHome";
import FeaturesHome from "../partials/Splash/Features";
import FeaturesBlocks from "../partials/Splash/FeaturesBlocks";
import Footer from "../partials/Splash/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";
import { useEffect } from "react";

function Splash() {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/links");
    }
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
      </main>
      <Footer />
    </div>
  );
}

export default Splash;
