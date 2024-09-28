import React from "react";
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

const Skills = () => {
  return (
    <div>
      <div className="relative p-6 lg:px-24 lg:pt-12">
        <div className="w-full absolute pt-2 lg:pt-6 inset-0 opacity-5 ">
          <h1 className="text-center text-6xl lg:text-8xl font-bold">
            SKILLS & EXPERTISE
          </h1>
        </div>
        <h1 className="text-center text-5xl lg:text-6xl font-bold">
          SKILLS & <span className="text-[#70139b]">EXPERTISE</span>
        </h1>
        <div className="text-4xl lg:text-8xl flex flex-col gap-12 justify-center items-center mt-12">
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
            <div className="bg-white p-1 lg:p-2 rounded-lg">
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
      </div>
    </div>
  );
};

export default Skills;
