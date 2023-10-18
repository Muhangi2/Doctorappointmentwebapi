import React from "react";
import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/doctors",
      display: "Find a doctor",
    },
    {
      path: "/Services",
      display: "Services",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];
  return (
    <header className="header flex items-center">
      <div className="bg-orange-300 container">
        <div className="flex  items-center justify-between">
          <div className="bg-purple-300">
            hey
            <img src="" alt="" />
          </div>
          {/* =======menu=========== */}
          <div className="navigation">
            <ul className="bg-green-500 menu flex items-center gap-[2.7rem]">
              {navLinks.map((Link, index) => (
                <li key={index}>
                  <NavLink
                    to={Link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }>
                    {Link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* =======right menu=========== */}
          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full ">
                  <img src="" className="w-full rounded-full" />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] ">
                {" "}
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
