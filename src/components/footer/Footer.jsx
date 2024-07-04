import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center border-t border-[#170724] bg-[#0a0310] rounded p-10 text-white">
      <nav>
        <div className="flex gap-6">
          <Link href={"https://www.facebook.com/rizwanulroman"} target="_blank">
            <FaFacebook className="text-4xl" />
          </Link>
          <Link
            href={"https://github.com/rizwanul-haque-roman"}
            target="_blank"
          >
            <FaGithub className="text-4xl" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/rizwanul-haque-roman/"}
            target="_blank"
          >
            <FaLinkedin className="text-4xl" />
          </Link>
          <Link href={"https://wa.me/01975552562"} target="_blank">
            <FaWhatsapp className="text-4xl" />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright &copy; {new Date().getFullYear()} - All right reserved by
          Rizwanul Haque Roman
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
