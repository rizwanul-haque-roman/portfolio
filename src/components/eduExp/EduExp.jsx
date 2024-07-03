import Link from "next/link";
import React from "react";

const EduExp = () => {
  return (
    <div>
      <div className="relative px-24 py-12">
        <div className="w-full absolute pt-6 inset-0 opacity-5 ">
          <h1 className="text-center text-8xl font-bold">
            EDUCATION & EXPERIENCE
          </h1>
        </div>
        <h1 className="text-center text-6xl font-bold">
          EDUCATION & <span className="text-[#70139b]">EXPERIENCE</span>
        </h1>
        <div className="mt-12 flex w-full gap-16">
          <div className="w-full">
            <h3 className="text-4xl font-bold my-6 text-[#70139b]">
              Education
            </h3>

            <div className="relative border-l pl-12">
              <p className="bg-[#6f139b] py-1 px-3 rounded-full inline">
                2021 - Present
              </p>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold mt-6 ">
                  B.Sc (Hons.) in Computer Science & Engineering
                </h3>
                <h4 className="text-2xl">Daffodil Institute of IT</h4>
                <p>
                  Learning algorithms, data structures, software design, and
                  computer hardware. Grasping both theoretical and practical
                  aspects of computing, and learning to develop innovative
                  solutions for complex technological problems.
                </p>
                <div className="absolute -top-4 -left-6 w-[50px] bg-[#6f139b] p-2 rounded-full">
                  <img src="/graduation.png" alt="" />
                </div>
              </div>
            </div>
            <div className="relative border-l pl-12 mt-12">
              <p className="bg-[#6f139b] py-1 px-3 rounded-full inline">
                2018 - 2019
              </p>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold mt-6 ">
                  Higher Secondary Certificate (HSC)
                </h3>
                <h4 className="text-2xl">
                  Savar Cantonment Public School & College
                </h4>
                <p>
                  I studied advanced topics in physics, chemistry, biology, and
                  mathematics. I delved into both theoretical concepts and
                  practical applications, preparing myself for higher education
                  in fields such as engineering, medicine, and technology.
                </p>
                <div className="absolute -top-4 -left-6 w-[50px] bg-[#6f139b] p-2 rounded-full">
                  <img src="/graduation.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-4xl font-bold my-6 text-[#70139b]">
              Experience
            </h3>

            <div className="relative border-l pl-12 mt-12">
              <p className="bg-[#6f139b] py-1 px-3 rounded-full inline">
                January, 2024 - June, 2024
              </p>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold mt-6 ">
                  Complete Web Development
                </h3>
                <h4 className="text-2xl underline">
                  <Link
                    href={"https://web.programming-hero.com/home"}
                    target="_black"
                  >
                    Programming Hero
                  </Link>
                </h4>
                <p>
                  I studied advanced topics in physics, chemistry, biology, and
                  mathematics. I delved into both theoretical concepts and
                  practical applications, preparing myself for higher education
                  in fields such as engineering, medicine, and technology.
                </p>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  onClick={() =>
                    document.getElementById("certificate").showModal()
                  }
                  className="text-xl border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold"
                >
                  View Certificate_
                </button>

                <dialog
                  id="certificate"
                  className="modal bg-[#02000360] backdrop-blur-sm"
                >
                  <div className="modal-box w-11/12 max-w-5xl bg-[#1b0824] border border-[#6f139b]">
                    <img src="/certificate.png" alt="" className="rounded-lg" />
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                <div className="absolute -top-4 -left-6 w-[50px] bg-[#6f139b] p-2 rounded-full">
                  <img src="/certificate-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduExp;
