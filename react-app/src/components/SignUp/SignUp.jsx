import { useState } from "react";
import { useHistory } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (user !== null) {
    history.push("/");
  }

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
    `);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // put context here to persist user
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  );
}

export default SignInScreen;
