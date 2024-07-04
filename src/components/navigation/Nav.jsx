"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [navdropdown, setNavDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleNavDropdown = () => {
    setNavDropdown(!navdropdown);
  };
  const links = (
    <>
      <li>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          About Me
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="eduExp"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Experience
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Portfolio
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="reachOut"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Get in Touch
        </ScrollLink>
      </li>
    </>
  );
  return (
    <div className="lg:py-4 lg:px-24 navbar bg-[#00000020] backdrop-blur-sm">
      <div className="navbar-start">
        <div onClick={handleNavDropdown} className="dropdown">
          <div
            onClick={handleDropdown}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {navdropdown && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow border border-[#6f139b] backdrop-blur-sm bg-[#1f052bcd] rounded-box w-52"
            >
              {links}
            </ul>
          )}
        </div>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          <h3 class="text-3xl lg:text-5xl font-black">
            &lt;Ro<span class="text-[#6f139b]">man</span>/&gt;
          </h3>
        </ScrollLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Nav;
