import { useState } from "react";
import StyledLabel from "../components/Label";
import StyledInput from "../components/StyledInput";
import { InputSpacing, ButtonSpacing } from "../components/Spacing";
import StyledButton from "../components/Button";
import StyledWrapper from "../components/StyledWrapper";

function ResetPassword() {
  const [email, setEmail] = useState("");

  return (
    <StyledWrapper className="bg-gradient-to-b from-gray-100 to-white">
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="h1 mb-4">Let’s get you back up on your feet</h1>
        <p className="text-xl text-gray-600">
          Enter the email address you used when you signed up for your account,
          and we’ll email you a link to reset your password.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-sm mx-auto">
        <form>
          <InputSpacing>
            <StyledLabel htmlFor="email">
              Email<span className="text-red-600">*</span>
            </StyledLabel>
            <StyledInput
              email
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputSpacing>
          <ButtonSpacing className="flex flex-wrap -mx-3 mt-6">
            <StyledButton wide onClick={(e) => console.log(email)}>
              Send reset link
            </StyledButton>
          </ButtonSpacing>
        </form>
      </div>
    </StyledWrapper>
  );
}

export default ResetPassword;
