import { Link } from "react-router-dom";

function Logo({ children, href, li }) {
  if (li) {
    return (
      <li>
        <Link
          to={href}
          className="font-medium text-gray-600 hover:text-gray-900 px-6 py-3 flex items-center transition duration-150 ease-in-out"
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <Link
      to={href}
      className="font-medium text-gray-600 hover:text-gray-900 px-6 py-3 flex items-center transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  );
}

export default Logo;
