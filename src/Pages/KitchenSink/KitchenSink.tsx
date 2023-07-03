import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const KitchenSink = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Links = [
    {
      to: "/",
      label: "Stellar",
    },
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

  const linkClasses =
    "invisible md:visible text-white lg:text-green cursor-pointer text-xs leading-7 font-robo font-bold hover:text-red-700 transition-colors duration-200 delay-75 mr-5 lg:mr-10";
  const logoClasses =
    "text-white cursor-pointer text-2xl -tracking-wider leading-7 font-noto font-bold mr-10 lg:mr-20 ";
  const loginClasses =
    "invisible md:visible text-white cursor-pointer text-xs leading-7 font-robo font-bold hover:text-red-700 transition-colors duration-200 delay-75 mr-5 lg:mr-9";

  return (
    <div className="navbar flex flex-row justify-between items-center bg-black w-screen h-24 px-24">
      {/* logo & home link */}
      <div className="container_pages">
        {/* pages links */}
        {Links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              `${index === 0 ? logoClasses : linkClasses} ${
                isActive ? "text-red-700" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* login and register links */}
      <div className="container_access">
        {LinksTwo.map((link, index) => (
          <NavLink key={index} to={link.to} className={loginClasses}>
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu */}
      <div>
        <FontAwesomeIcon icon={faEnvelope} className="text-red-500" />
      </div>
    </div>
  );
};

export default KitchenSink;
