import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar flex flex-row justify-between m-5 p-2">
      <div className="container_pages">
        <Link to="/" className="mx-5">
          Stellar
        </Link>
        <Link to="/planatrip" className="mx-5">
          Plan a trip
        </Link>
        <Link to="/discover" className="mx-5">
          Discover
        </Link>
        <Link to="/checkflights" className="mx-5">
          Check flights
        </Link>
      </div>
      <div className="container_access">
        <ul className="flex flex-row">
          <li className="mx-2 cursor-pointer">Login</li>
          <li className="mx-2 cursor-pointer">Register</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
