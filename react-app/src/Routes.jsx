import { Switch, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Homepage from "./pages/Homepage";
import ResetPassword from "./pages/ResetPassword";
import LinkbookPage from "./pages/LinkbookPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function Routes() {
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
        <ProtectedRoute exact path="/Homepage">
          <Homepage />
        </ProtectedRoute>
        <Route exact path="/linkbook/:id">
          <LinkbookPage />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
