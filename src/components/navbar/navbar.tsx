import { Link, NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar flex flex-row justify-between items-center bg-black w-screen h-24 px-24">
      <div className="container_pages">
        {/* logo & home link */}
        <Link
          to="/"
          className="
           text-white
            cursor-pointer
            text-2xl
            -tracking-wider 
            leading-7 
            font-noto 
            font-bold
            mr-20"
        >
          Stellar
        </Link>

        {/* pages links */}
        <NavLink
          to="/planatrip"
          className={({ isActive }) => {
            return (
              "text-white cursor-pointer text-xs leading-7 font-robo font-bold hover:text-red-700 transition-colors duration-200 delay-75 mr-10" +
              (!isActive ? "" : " text-red-700")
            );
          }}
        >
          Plan a trip
        </NavLink>
        <NavLink
          to="/discover"
          className={({ isActive }) => {
            return (
              "text-white cursor-pointer text-xs leading-7 font-robo font-bold hover:text-red-700 transition-colors duration-200 delay-75 mr-10" +
              (!isActive ? "" : " text-red-700")
            );
          }}
        >
          Discover
        </NavLink>
        <NavLink
          to="/checkflights"
          className={({ isActive }) => {
            return (
              "text-white cursor-pointer text-xs leading-7 font-robo font-bold hover:text-red-700 transition-colors duration-200 delay-75 mr-10" +
              (!isActive ? "" : " text-red-700")
            );
          }}
        >
          Check flights
        </NavLink>
      </div>

      {/* login and register links */}
      <div className="container_access">
        <ul className="flex flex-row">
          <li
            className="
          text-white
            cursor-pointer
            text-xs
            leading-7 
            font-robo 
            font-bold
            hover:text-red-700 
            transition-colors
            duration-200
            delay-75
            mr-9"
          >
            Login
          </li>
          <li
            className="text-white
            cursor-pointer
            text-xs
            leading-7 
            font-robo 
            font-bold
            hover:text-red-700 
            transition-colors
            duration-200
            delay-75"
          >
            Register
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
