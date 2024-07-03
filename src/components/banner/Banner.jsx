import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url("/banner.gif")` }}
      className="w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <div className="">
        <div className="flex items-center h-screen p-24">
          <div className="w-full flex justify-center items-center h-full bg-[#0000005f] backdrop-blur-sm rounded-2xl p-6">
            <div>
              <img src="/pfp.png" alt="" />
            </div>
            <div className="space-y-4">
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
                {/* / */}
              </h1>
              <p className="w-3/4 text-xl mt-5 mb-8">
                I am an enthusiastic developer who can convert thoughts into
                reality with code. By tirelessly seeking new ideas, I merge
                creativity with practicality when creating amazing websites that
                are eye candy for the users.
              </p>
              <div className="flex gap-6">
                <button className="btn text-xl border hover:bg-[#1f052bcd] border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded font-bold">
                  Learn More_
                </button>
                <button className="btn text-xl border hover:bg-[#1f052bcd] border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded font-bold">
                  <Link
                    href={
                      "https://drive.google.com/uc?export=download&id=1_tAZ9PaOpg5jXzP2IuTmDJfN-WLL3XUT"
                    }
                    download
                  >
                    Download Resume_
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
