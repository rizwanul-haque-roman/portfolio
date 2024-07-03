import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full py-4 px-24 bg-[#00000020] backdrop-blur-sm">
      <div>
        <h3 class="text-5xl font-black">
          &lt;Ro<span class="text-[#6f139b]">man</span>/&gt;
        </h3>
      </div>
      <div className="flex justify-center gap-6">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="eduExp"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          to="reachOut"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Get in Touch
        </ScrollLink>
      </div>
    </div>
  );
};

export default Nav;
