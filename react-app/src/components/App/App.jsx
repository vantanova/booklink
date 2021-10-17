import { BrowserRouter, Switch, Route } from "react-router-dom";
// import getUsers from "../../firebase";
import SignIn from "../SignUp/SignUp";
import { getAuth } from "firebase/auth";
import app from "../../firebase";
import LogInScreen from "../Login/Login";
import LogoutButton from "../LogoutButton/LogoutButton";

function App() {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    console.log(user.displayName);
    console.log(user.email);

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    console.log(user.uid);
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" exact={true}>
          <About />
        </Route>
        <Route path="/users" exact={true}>
          <Users />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/sign-in" exact={true}>
          <SignIn />
        </Route>
        <Route path="/login" exact={true}>
          <LogInScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  const auth = getAuth(app);
  const user = auth.currentUser;
  return (
    <div>
      <h2>Home</h2>
      {user && <LogoutButton></LogoutButton>}
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
