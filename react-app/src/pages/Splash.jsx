import Header from "../partials/Splash/Header";
import HeroHome from "../partials/Splash/HeroHome";
import FeaturesHome from "../partials/Splash/Features";
import FeaturesBlocks from "../partials/Splash/FeaturesBlocks";
import Footer from "../partials/Splash/Footer";

function Splash() {
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
