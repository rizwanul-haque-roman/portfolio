import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-center gap-6 w-full p-6 bg-[#00000020] backdrop-blur-sm">
      <Link href={"#home"} className="text-xl font-semibold">
        Home
      </Link>
      <Link href={"#about"} className="text-xl font-semibold">
        About Me
      </Link>
      <Link href={"#work"} className="text-xl font-semibold">
        Work
      </Link>
      <Link href={"#contact"} className="text-xl font-semibold">
        Contact
      </Link>
      <Link href={"#reachOut"} className="text-xl font-semibold">
        Get in Touch
      </Link>
    </div>
  );
};

export default Nav;
