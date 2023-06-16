import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar flex flex-row justify-between items-center bg-black w-screen h-24 px-24">
      <div className="container_pages">
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
        <Link
          to="/planatrip"
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
            mr-10"
        >
          Plan a trip
        </Link>
        <Link
          to="/discover"
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
            mr-10"
        >
          Discover
        </Link>
        <Link
          to="/checkflights"
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
            mr-10"
        >
          Check flights
        </Link>
      </div>
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
