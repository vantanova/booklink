import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import StyledButton from "../../components/Button";
import Logo from "../../components/Logo";
import StyledLink from "../../components/StyledLink";

function Header({ newLinkbook, setNewLinkbook, visible, setVisible }) {
  const dispatch = useDispatch();

  function linkbookAnimation() {
    setNewLinkbook(!newLinkbook);
    setTimeout(function () {
      setVisible(false);
    }, 500);
  }

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
            <Logo />
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center ml-32">
              <li>
                <StyledLink href="/links">Linkbooks</StyledLink>
              </li>
              <li>
                <StyledLink href="/explore">Explore</StyledLink>
              </li>
              <li>
                <StyledLink href="/profile">Profile</StyledLink>
              </li>
            </ul>
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <StyledButton onClick={() => linkbookAnimation()} blue>
                  {newLinkbook ? "Cancel" : "New Linkbook"}
                </StyledButton>
              </li>
              <li>
                <StyledButton onClick={() => dispatch(logout())}>
                  Logout
                </StyledButton>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
