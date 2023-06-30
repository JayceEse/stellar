import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const Links = [
    {
      to: "/planatrip",
      label: "Plan a trip",
    },
    {
      to: "/discover",
      label: "Discover",
    },
    {
      to: "/checkflights",
      label: "Check flights",
    },
  ];

  const LinksTwo = [
    {
      to: "/login",
      label: "Login",
    },
    {
      to: "/register",
      label: "Register",
    },
  ];

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
        {Links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              `text-white cursor-pointer text-xs leading-7 font-robo font-bold hover:text-red-700 transition-colors duration-200 delay-75 mr-10 ${
                isActive ? "text-red-700" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="container_access">
        {/* login and register links */}
        {LinksTwo.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className="text-white
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
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
