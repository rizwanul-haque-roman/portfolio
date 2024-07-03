import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url("/banner.gif")` }}
      className="w-full h-screen overflow-hidden"
    >
      <div className="">
        <div className="flex items-center h-screen p-24">
          <div
            style={{ backgroundImage: `url("/pfp.png")` }}
            className="w-1/3 h-full bg-no-repeat bg-center bg-cover flex justify-center items-end rounded-l-2xl bg-[#0000008d] backdrop-blur-sm overflow-hidden"
          ></div>
          <div className="w-2/3 flex flex-col justify-center h-full bg-[#0000008d] backdrop-blur-sm rounded-r-2xl p-6 space-y-6">
            <h2 className="text-5xl font-bold mb-0">Hello,</h2>
            <h1 className="text-6xl font-bold mt-0 mb-0">
              I&apos;m{" "}
              <span className="text-[#6f139b]">Rizwanul Haque Roman_</span>
            </h1>
            <h1 className="text-5xl font-bold mt-0 mb-0">
              And I&apos;m a{" "}
              <span className="text-[#6f139b]">
                <Typewriter
                  words={[
                    "MERN Developer",
                    "Web Developer",
                    "React Developer",
                    "Frontend Developer",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-xl font-light mt-5 mb-8">
              I am an enthusiastic developer who can convert thoughts into
              reality with code. By tirelessly seeking new ideas, I merge
              creativity with practicality when creating amazing websites that
              are eye candy for the users.
            </p>
            <button className="text-2xl border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-8 py-4 font-bold">
              Learn More_
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
