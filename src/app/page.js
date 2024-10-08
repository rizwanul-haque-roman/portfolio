"use client";
export const dynamic = "force-dynamic";
import { useState, useEffect } from "react";
import AboutMe from "@/components/about/AboutMe";
import Banner from "@/components/banner/Banner";
import Nav from "@/components/navigation/Nav";
import EduExp from "@/components/eduExp/EduExp";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Skills from "@/components/skills/Skills";

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
      <div id="home" className="w-full">
        <Banner />
      </div>
      <div id="about" className="w-full">
        <AboutMe />
      </div>
      <div id="skills" className="w-full">
        <Skills />
      </div>
      <div id="eduExp" className="w-full">
        <EduExp />
      </div>
      <div id="portfolio" className="w-full">
        <Portfolio />
      </div>
      <div id="reachOut" className="w-full">
        <Contact />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
