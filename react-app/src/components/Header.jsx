import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";
import { useSelector, useDispatch } from "react-redux";
import Arrow from "../images/Arrow.jsx";
import StyledButton from "./Button";
import Logo from "./Logo";
import { logout } from "../store/session";
import { useCreateLinkbookContext } from "../context/CreateLinkbookContext";
import { useCreateLinkContext } from "../context/CreateLinkContext";

function Header() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { showNewLinkbook, setShowNewLinkbook } = useCreateLinkbookContext();
  const { showNewLink, setShowNewLink } = useCreateLinkContext();

  const [top, setTop] = useState(true);
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Logo />
          </div>

          {/* Site navigation */}
          {sessionUser ? (
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center ml-32">
                <StyledLink li href="/homepage">
                  Linkbooks
                </StyledLink>

                <StyledLink li href="/explore">
                  Explore
                </StyledLink>

                <StyledLink li href="/profile">
                  Profile
                </StyledLink>
              </ul>
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  {!showNewLinkbook && (
                    <StyledButton
                      onClick={() => setShowNewLinkbook(!showNewLinkbook)}
                      blue
                    >
                      {showNewLinkbook ? "Cancel" : "New Linkbook"}
                    </StyledButton>
                  )}
                </li>
                <li>
                  <StyledButton onClick={() => dispatch(logout())}>
                    Logout
                  </StyledButton>
                </li>
              </ul>
            </nav>
          ) : (
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <StyledLink li href="/sign-in">
                  Sign in
                </StyledLink>
                <Link
                  to="/signup"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  Sign up
                  <Arrow />
                </Link>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
