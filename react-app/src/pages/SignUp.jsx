import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../store/session";

import StyledLabel from "../components/Label";
import StyledInput from "../components/StyledInput";
import { InputSpacing, ButtonSpacing } from "../components/Spacing";
import StyledButton from "../components/Button";
import StyledWrapper from "../components/StyledWrapper";

function SignUp() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (!name) return;
    if (!email) return;
    if (!password) return;

    dispatch(createUser(name, email, password)).then(() => {
      setName("");
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
        <h1 className="h1">
          Welcome. We exist to make entrepreneurism easier.
        </h1>
      </div>

      {/* Form */}
      <div className="max-w-sm mx-auto">
        <form>
          <InputSpacing>
            <StyledLabel htmlFor="name">
              Name <span className="text-red-600">*</span>
            </StyledLabel>
            <StyledInput
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputSpacing>
          <StyledLabel>
            <StyledLabel htmlFor="email">
              Email <span className="text-red-600">*</span>
            </StyledLabel>
            <StyledInput
              email
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </StyledLabel>
          <InputSpacing>
            <StyledLabel htmlFor="password">
              Password <span className="text-red-600">*</span>
            </StyledLabel>
            <StyledInput
              password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputSpacing>
          <ButtonSpacing>
            <StyledButton onClick={(e) => onSignUp(e)} wide>
              Sign up
            </StyledButton>
          </ButtonSpacing>
        </form>

        <div className="text-gray-600 text-center mt-6">
          Already using Speedylink?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:underline transition duration-150 ease-in-out"
          >
            Sign in
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default SignUp;
