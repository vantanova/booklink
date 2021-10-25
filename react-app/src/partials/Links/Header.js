import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function Header({ newLinkbook, setNewLinkbook, visible, setVisible }) {
  const { logout, user, isLoading } = useAuth0();

  function linkbookAnimation() {
    setNewLinkbook(!newLinkbook);
    setTimeout(function () {
      setVisible(false);
    }, 500);
  }

  useEffect(async () => {
    if (!isLoading) {
      const rawResponse = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });
      const content = await rawResponse.json();
      console.log(content);
    }
  }, []);

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
            <Link to="/links" className="block" aria-label="speedylink">
              <h1 className="text-xl font-medium">Speedylink</h1>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center ml-32">
              <li>
                <a
                  href="/links"
                  className="font-medium text-gray-600 hover:text-gray-900 px-6 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Linkbooks
                </a>
              </li>
              <li>
                <button className="font-medium text-gray-600 hover:text-gray-900 px-6 py-3 flex items-center transition duration-150 ease-in-out">
                  Explore
                </button>
              </li>
              <li>
                <button className="font-medium text-gray-600 hover:text-gray-900 px-6 py-3 flex items-center transition duration-150 ease-in-out">
                  Profile
                </button>
              </li>
              {/* <li>
                <button className="font-medium text-gray-600 hover:text-gray-900 px-6 py-3 flex items-center transition duration-150 ease-in-out">
                  Shop
                </button>
              </li> */}
            </ul>
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <button
                  onClick={() => linkbookAnimation()}
                  className="btn-sm text-gray-200 bg-blue-600 hover:bg-blue-700 ml-3"
                >
                  {newLinkbook ? "Cancel" : "New Linkbook"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
