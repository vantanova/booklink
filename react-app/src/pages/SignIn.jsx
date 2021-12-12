import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/session";

import StyledLabel from "../components/Label";
import StyledInput from "../components/StyledInput";
import { InputSpacing, ButtonSpacing } from "../components/Spacing";
import StyledButton from "../components/Button";
import StyledWrapper from "../components/StyledWrapper";

function SignIn() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async (e) => {
    e.preventDefault();
    if (!email) return;
    if (!password) return;

    dispatch(login(email, password)).then(() => {
      setEmail("");
      setPassword("");
    });
  };

  if (sessionUser) {
    return <Redirect to="/homepage" />;
  }

  return (
    <StyledWrapper>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="h1">Welcome back. We exist to make links easier.</h1>
      </div>

      {/* Form */}
      <div className="max-w-sm mx-auto">
        <form>
          <InputSpacing>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
              email
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputSpacing>
          <InputSpacing className="flex flex-wrap -mx-3 mb-4">
            <div className="flex justify-between">
              <StyledLabel htmlFor="password">Password</StyledLabel>
              <Link
                to="reset-password"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Having trouble signing in?
              </Link>
            </div>
            <StyledInput
              password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputSpacing>
          <ButtonSpacing className="flex flex-wrap -mx-3 mt-6">
            <StyledButton wide onClick={(e) => onSignIn(e)}>
              Sign in
            </StyledButton>
          </ButtonSpacing>
        </form>
        <div className="text-gray-600 text-center mt-6">
          Don’t you have an account?{" "}
          <Link
            to="/sign-up"
            className="text-blue-600 hover:underline transition duration-150 ease-in-out"
          >
            Sign up
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default SignIn;
