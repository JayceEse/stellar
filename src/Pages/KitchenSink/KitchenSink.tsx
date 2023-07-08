import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const KitchenSink = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  console.log(toggleMenu);

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

  const Menu = [
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
    {
      to: "/login",
      label: "Login",
    },
    {
      to: "/register",
      label: "Register",
    },
  ];

  const linkClasses: string =
    "invisible md:visible text-white lg:text-green cursor-pointer text-xs leading-7 font-robo font-bold hover:text-red-700 transition-colors duration-200 delay-75 mr-5 lg:mr-10";
  const logoClasses: string =
    "text-white cursor-pointer text-2xl -tracking-wider leading-7 font-noto font-bold mr-10 lg:mr-20 ";
  const loginClasses: string =
    "invisible md:visible text-white cursor-pointer text-xs leading-7 font-robo font-bold hover:text-red-700 transition-colors duration-200 delay-75";
  const menuClasses: string =
    "flex flex-col text-xs items-center my-4 text-white leading-7 font-robo font-bold ";

  return (
    <div className="navbar flex flex-row justify-between items-center bg-black w-screen h-24 px-24">
      {/* logo & home link */}
      <div>
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
      <div className="flex">
        <div className="absolute right-24">
          {LinksTwo.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={index === 0 ? `${loginClasses} mr-5` : loginClasses}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile & Tablet Menu */}
        <div className="flex flex-col">
          <button>
            <FontAwesomeIcon
              icon={faBarsStaggered}
              className="relative visible md:invisible text-white cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          </button>
          {toggleMenu && (
            <div
              className="absolute top-24 left-0 w-screen bg-black"
              ref={menuRef}
            >
              {Menu.map((menu, index) => (
                <NavLink key={index} to={menu.to} className={menuClasses}>
                  {menu.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KitchenSink;
