import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="relative min-h-screen h-min-[40vh] px-24 pt-12">
        <div className="w-full absolute pt-6 inset-0 opacity-5 ">
          <h1 className="text-center text-8xl font-bold">PORTFOLIO</h1>
        </div>
        <h1 className="text-center text-6xl font-bold">
          PORT<span className="text-[#70139b]">FOLIO</span>
        </h1>
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="card card-compact bg-[#1b0724] shadow-xl">
            <figure>
              <img src="/fitquest.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-[#ba2ffa] font-bold">Project Name:</span>{" "}
                FitQuest
              </h2>
              <p>
                <span className="text-[#ba2ffa] font-bold">Project Type:</span>{" "}
                Fullstack
              </p>
              <div>
                <p className="text-[#ba2ffa] font-bold">Project Description</p>
                <p>
                  FitQuest is a platform for fitness enthusiasts, offering
                  features for trainers, admins, and members.
                </p>
              </div>
              <div>
                <p className="text-[#ba2ffa] font-bold">Features</p>
                <ul className="pl-4 space-y-3">
                  <li className=" list-disc">
                    Trainers manage schedules, classes, and forums. Admins
                    handle operations, finances, and trainer applications.
                    Members book sessions, explore classes, and join community
                    discussions
                  </li>
                  <li className=" list-disc">
                    Dashboard available for members, trainers, and admin to
                    perform the tasks mentioned above.
                  </li>
                </ul>
              </div>
              <div className="leading-8 text-[#ba2ffa] font-bold">
                Technologies Used: <p className="badge mx-2">HTML</p>
                <p className="badge mx-2">CSS</p>
                <p className="badge mx-2">Tailwind CSS</p>
                <p className="badge mx-2">JavaScript</p>
                <p className="badge mx-2">React</p>
                <p className="badge mx-2">Express.js</p>
                <p className="badge mx-2">Node.js</p>
                <p className="badge mx-2">Mongodb</p>
                <p className="badge mx-2">Firebase</p>
              </div>
              <div className="card-actions justify-start">
                <button className="border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold">
                  <Link href={"https://fitquest-bd.web.app"} target="_blank">
                    Visit Site
                  </Link>
                </button>
                <button className="border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold">
                  <Link
                    href={
                      "https://github.com/rizwanul-haque-roman/FitQuest-Client"
                    }
                    target="_blank"
                  >
                    View Code (client)
                  </Link>
                </button>
                <button className="border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold">
                  <Link
                    href={
                      "https://github.com/rizwanul-haque-roman/FitQuest-Server"
                    }
                    target="_blank"
                  >
                    View code (server)
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-[#1b0724] shadow-xl">
            <figure>
              <img src="/studyBuddy.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-[#ba2ffa] font-bold">Project Name:</span>{" "}
                FitQuest
              </h2>
              <p>
                <span className="text-[#ba2ffa] font-bold">Project Type:</span>{" "}
                Fullstack
              </p>
              <div>
                <p className="text-[#ba2ffa] font-bold">Project DescripTion</p>
                <p>
                  This is a platform where every user is a friend of another and
                  helps each other with their studies.
                </p>
              </div>
              <div>
                <p className="text-[#ba2ffa] font-bold">Features</p>
                <ul className="pl-4 space-y-3">
                  <li className=" list-disc">
                    Users can create, view, update, and delete (only who
                    created) assignments.
                  </li>
                  <li className=" list-disc">
                    When someone posts an assignment, other users can view and
                    provide marks and feedback on the assignment. The user can
                    see the feedback on my submission page.
                  </li>
                  <li className=" list-disc">
                    Users can also chat with AI assistant called Study Owl to
                    solve their problems. Used Gemini API.
                  </li>
                </ul>
              </div>
              <div className="leading-8 text-[#ba2ffa] font-bold">
                Technologies Used: <p className="badge mx-2">HTML</p>
                <p className="badge mx-2">CSS</p>
                <p className="badge mx-2">Tailwind CSS</p>
                <p className="badge mx-2">JavaScript</p>
                <p className="badge mx-2">React</p>
                <p className="badge mx-2">Express.js</p>
                <p className="badge mx-2">Node.js</p>
                <p className="badge mx-2">Mongodb</p>
                <p className="badge mx-2">Firebase</p>
              </div>
              <div className="card-actions justify-start">
                <button className="border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold">
                  <Link
                    href={"https://studybuddy-org.web.app/"}
                    target="_blank"
                  >
                    Visit Site
                  </Link>
                </button>
                <button className="border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold">
                  <Link
                    href={
                      "https://github.com/rizwanul-haque-roman/StudyBuddy-Client"
                    }
                    target="_blank"
                  >
                    View Code (client)
                  </Link>
                </button>
                <button className="border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold">
                  <Link
                    href={
                      "https://github.com/rizwanul-haque-roman/StudyBuddy-Server"
                    }
                    target="_blank"
                  >
                    View code (server)
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-[#1b0724] shadow-xl">
            <figure>
              <img src="/artshop.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-[#ba2ffa] font-bold">Project Name:</span>{" "}
                FitQuest
              </h2>
              <p>
                <span className="text-[#ba2ffa] font-bold">Project Type:</span>{" "}
                Fullstack
              </p>
              <div>
                <p className="text-[#ba2ffa] font-bold">Project Description</p>
                <p>
                  This is an art exhibition or showcasing website where every
                  user can showcase their Artwork.
                </p>
              </div>
              <div>
                <p className="text-[#ba2ffa] font-bold">Features</p>
                <ul className="pl-4 space-y-3">
                  <li className=" list-disc">
                    Users can publish their artwork on the ‘Add craft item’
                    page. Added items will be shown on ‘All art and craft items’
                    page. Users can see details information by clicking the
                    ‘view details’ button.
                  </li>
                  <li className=" list-disc">
                    Users can see the items that they added on the ‘My art &
                    craft list’ page and filter the Artworks.
                  </li>
                  <li className=" list-disc">
                    Users can Update the information and delete any artwork that
                    only they have added.
                  </li>
                </ul>
              </div>
              <div className="leading-8 text-[#ba2ffa] font-bold">
                Technologies Used: <p className="badge mx-2">HTML</p>
                <p className="badge mx-2">CSS</p>
                <p className="badge mx-2">Tailwind CSS</p>
                <p className="badge mx-2">JavaScript</p>
                <p className="badge mx-2">React</p>
                <p className="badge mx-2">Express.js</p>
                <p className="badge mx-2">Node.js</p>
                <p className="badge mx-2">Mongodb</p>
                <p className="badge mx-2">Firebase</p>
              </div>
              <div className="card-actions justify-start">
                <button className="border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold">
                  <Link href={"https://art-shoopp.web.app"} target="_blank">
                    Visit Site
                  </Link>
                </button>
                <button className="border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold">
                  <Link
                    href={
                      "https://github.com/rizwanul-haque-roman/ArtShop-Client"
                    }
                    target="_blank"
                  >
                    View Code (client)
                  </Link>
                </button>
                <button className="border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded px-4 py-2 font-bold">
                  <Link
                    href={
                      "https://github.com/rizwanul-haque-roman/ArtShop-Server"
                    }
                    target="_blank"
                  >
                    View code (server)
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

export default Portfolio;
