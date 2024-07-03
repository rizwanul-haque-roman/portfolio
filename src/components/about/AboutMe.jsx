import React from "react";
import Skills from "../skills/Skills";

const AboutMe = () => {
  return (
    <div className="relative px-24 py-12">
      <div className="w-full absolute pt-6 inset-0 opacity-5 ">
        <h1 className="text-center text-8xl font-bold">ABOUT ME</h1>
      </div>
      <div className="w-full">
        <h1 className="text-center text-6xl font-bold">
          ABOUT <span className="text-[#70139b]">ME</span>
        </h1>
      </div>
      <div className="flex justify-between my-6">
        <div className="w-2/3">
          <h3 className="text-4xl font-bold my-6 text-[#70139b]">
            Career Objective
          </h3>
          <p className="text-xl leading-8">
            I am a fast learner and adaptive individual, who is constantly
            seeking opportunities and knowledge. I have honed my front-end
            development skills and created various stunning and user-friendly
            web applications to refine and showcase my expertise. I am
            passionate about both front-end and fullstack development, actively
            exploring backend technologies along with frontend.
          </p>
          <h3 className="text-4xl font-bold my-6 text-[#70139b]">
            Personal Info
          </h3>
          <div className="flex gap-40">
            <div className="text-xl space-y-2 text-[#959595]">
              <p>
                First Name:{" "}
                <span className="font-bold text-white">Rizwanul Haque</span>
              </p>
              <p>
                Age: <span className="font-bold text-white">25</span>
              </p>
              <p>
                Email:{" "}
                <span className="font-bold text-white">
                  dev.rizwanul@gmail.com
                </span>
              </p>
            </div>
            <div className="text-xl space-y-2 text-[#959595]">
              <p>
                Last Name: <span className="font-bold text-white">Roman</span>
              </p>
              <p>
                From:{" "}
                <span className="font-bold text-white">Dhaka,Bangladesh</span>
              </p>

              <p>
                Phone:{" "}
                <span className="font-bold text-white">+880 197 555 2562</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-2/3" src="/coreTech.gif" alt="" />
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default AboutMe;
