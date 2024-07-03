"use client";
import { useState, useEffect } from "react";
import AboutMe from "@/components/about/AboutMe";
import Banner from "@/components/banner/Banner";
import Nav from "@/components/navigation/Nav";
import EduExp from "@/components/eduExp/EduExp";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <main className="bg-gradient-to-b from-[#020003] to-[#0b0113] bg-[#0b0113] text-white relative flex min-h-screen flex-col items-center justify-start">
      <div
        className={`fixed w-full flex justify-center top-0 z-50 transition-transform duration-300 ${
          showNav ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <Nav />
      </div>
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <AboutMe />
      </div>
      <div className="w-full">
        <EduExp />
      </div>
      <div className="w-full">
        <Portfolio />
      </div>
    </main>
  );
}
