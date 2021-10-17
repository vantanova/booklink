import { useHistory } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase";

function LogoutButton() {
  const history = useHistory();
  const auth = getAuth(app);

  const handleLogout = (event) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
      });

    event.preventDefault();
  };

  return <button className="btn btn-blue" onClick={handleLogout}></button>;
}

export default LogoutButton;
