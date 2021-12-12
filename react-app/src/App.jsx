import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/style.scss";

import { useDispatch } from "react-redux";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Routes from "./Routes";

import { restoreUser } from "./store/session";

import Header from "./components/Header";
import Footer from "./partials/Splash/Footer";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => {
      setLoaded(true);
    });
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  if (!loaded) {
    return (
      <div className="flex items-center justify-center space-x-2 animate-pulse h-screen">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="flex-grow">
          <Routes />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
