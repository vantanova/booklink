import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import SignInForm from "../partials/Auth/SignInForm";
import Header from "../partials/Links/Header";

function SignIn() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return <Redirect to="/links" />;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <SignInForm />
      </main>
    </div>
  );
}

export default SignIn;
