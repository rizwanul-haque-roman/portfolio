import React from "react";
import Image from "next/image";

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
            className="w-1/3 h-[60vh] bg-no-repeat bg-center border-purple-500 flex justify-center items-end rounded-2xl bg-[#00000047] backdrop-blur-sm overflow-hidden"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
