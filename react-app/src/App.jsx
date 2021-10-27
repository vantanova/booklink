import { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./css/style.scss";

import { useDispatch } from "react-redux";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Splash from "./pages/Splash";
import Links from "./pages/Links";
import ResetPassword from "./pages/ResetPassword";
import LinkbookPage from "./pages/LinkbookPage";
import ProtectedRoute from "./auth/ProtectedRoute";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { restoreUser } from "./store/session";

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
    return null;
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <ProtectedRoute exact path="/links">
          <Links />
        </ProtectedRoute>
        <Route exact path="/linkbook/:id">
          <LinkbookPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
