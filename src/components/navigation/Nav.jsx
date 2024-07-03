import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full py-4 px-24 bg-[#00000020] backdrop-blur-sm">
      <div>
        <h3 class="text-5xl font-black">
          &lt;/Ro<span class="text-[#6f139b]">man</span>&gt;
        </h3>
      </div>
      <div className="flex justify-center gap-6">
        <Link href={"#home"} className="text-lg">
          Home
        </Link>
        <Link href={"#about"} className="text-lg">
          About Me
        </Link>
        <Link href={"#work"} className="text-lg">
          Work
        </Link>
        <Link href={"#contact"} className="text-lg">
          Contact
        </Link>
        <Link href={"#reachOut"} className="text-lg">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Nav;
