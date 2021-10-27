import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../partials/Splash/Header";
import SignUpForm from "../partials/Auth/SignUpForm";

function SignUp() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return <Redirect to="/links" />;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <SignUpForm />
      </main>
    </div>
  );
}

export default SignUp;
