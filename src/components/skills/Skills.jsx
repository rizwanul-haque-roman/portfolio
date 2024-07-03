import React from "react";
import Marquee from "react-fast-marquee";
import Html5Original from "react-devicons/html5/original";
import Css3Original from "react-devicons/css3/original";
import TailwindcssOriginalWordmark from "react-devicons/tailwindcss/original-wordmark";
import BootstrapOriginal from "react-devicons/bootstrap/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import ReactOriginal from "react-devicons/react/original";
import NextjsOriginalWordmark from "react-devicons/nextjs/original-wordmark";
import NodejsOriginalWordmark from "react-devicons/nodejs/original-wordmark";
import ExpressOriginal from "react-devicons/express/original";
import MongodbOriginalWordmark from "react-devicons/mongodb/original-wordmark";
import FirebasePlain from "react-devicons/firebase/plain";
import COriginal from "react-devicons/c/original";
import CplusplusOriginal from "react-devicons/cplusplus/original";
import PythonOriginal from "react-devicons/python/original";
import GitOriginal from "react-devicons/git/original";
import VscodeOriginal from "react-devicons/vscode/original";
import GithubOriginal from "react-devicons/github/original";

const Skills = () => {
  return (
    <div>
      <div className="relative px-24 pt-12">
        <div className="w-full absolute pt-6 inset-0 opacity-5 ">
          <h1 className="text-center text-8xl font-bold">SKILLS & EXPERTISE</h1>
        </div>
        <h1 className="text-center text-6xl font-bold">
          SKILLS & <span className="text-[#70139b]">EXPERTISE</span>
        </h1>
        {/* <div className=""> */}
        {/* <div className="absolute -left-24 text-8xl mt-12 z-10 w-[100vw]">
            <Marquee>
              <div className="mx-6">
                <Html5Original />
              </div>

              <div className="mx-6">
                <Css3Original />
              </div>

              <div className="mx-6 text-[200px]">
                <TailwindcssOriginalWordmark />
              </div>

              <div className="mx-6">
                <BootstrapOriginal />
              </div>

              <div className="mx-6">
                <JavascriptOriginal />
              </div>

              <div className="mx-6">
                <ReactOriginal />
              </div>

              <div className="mx-6">
                <NextjsOriginalWordmark color="#FFFFFF" />
              </div>

              <div className="mx-6">
                <NodejsOriginalWordmark />
              </div>

              <div className="mx-6 bg-white p-2 rounded-lg">
                <ExpressOriginal color="#FFFFFF" />
              </div>

              <div className="mx-6">
                <MongodbOriginalWordmark />
              </div>

              <div className="mx-6">
                <FirebasePlain />
              </div>

              <div className="mx-6">
                <COriginal />
              </div>

              <div className="mx-6">
                <CplusplusOriginal />
              </div>

              <div className="mx-6">
                <PythonOriginal />
              </div>

              <div className="mx-6">
                <GitOriginal />
              </div>

              <div className="mx-6">
                <VscodeOriginal />
              </div>

              <div className="mx-6 bg-white rounded-lg p-2">
                <GithubOriginal />
              </div>
            </Marquee>
          </div> */}

        <div className="text-8xl flex flex-col gap-12 justify-center items-center mt-12">
          <div className="flex gap-6">
            <Html5Original />
            <Css3Original />
            <TailwindcssOriginalWordmark />
            <BootstrapOriginal />
            <JavascriptOriginal />
            <ReactOriginal />
            <NextjsOriginalWordmark color="#FFFFFF" />
          </div>

          <div className="flex gap-6">
            <NodejsOriginalWordmark />
            <div className="bg-white p-2 rounded-lg">
              <ExpressOriginal color="#FFFFFF" />
            </div>
            <MongodbOriginalWordmark />
            <FirebasePlain />
          </div>

          <div className="flex gap-6">
            <COriginal />
            <CplusplusOriginal />
            <PythonOriginal />
          </div>
          <div className="flex gap-6">
            <GitOriginal />
            <VscodeOriginal />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Skills;
