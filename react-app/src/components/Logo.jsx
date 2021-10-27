import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/links" className="block" aria-label="speedylink">
      <h1 className="text-xl font-medium">Speedylink</h1>
    </Link>
  );
}

export default Logo;
