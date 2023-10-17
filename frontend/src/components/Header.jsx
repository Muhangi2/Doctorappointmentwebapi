import React from "react";
import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi"; // Import the BiMenu icon
import download2 from "../assets/images/download2.jpeg";

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
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  return (
    <header className="header flex items-center mt-2" ref={headerRef}>
      <div className="container">
        <div className="flex  items-center justify-between">
          <div className="">
            Homehospital
            <img src="" alt="" />
          </div>
          {/* =======menu=========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
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
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer ">
                  <img
                    src={download2}
                    className="w-full rounded-full object-cover"
                    alt=""
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-primaryColor  py-2 px-6 text-white font-[600] rounded-[50px] h-[44px] flex items-center ">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-h h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
