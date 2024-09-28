import Link from "next/link";
import React from "react";

import { FaEnvelopeOpen, FaMap } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      to: "Roman",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        console.log("SUCCESS!");
        Swal.fire({
          title: "Message Sent!",
          text: "Your message is successfully sent to Roman. He will reply soon!",
          icon: "success",
        });
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="m-6 lg:m-24">
      <div className="relative lg:px-24 lg:py-12">
        <div className="w-full absolute lg:pt-6 inset-0 opacity-5 ">
          <h1 className="text-center text-5xl lg:text-8xl font-bold">
            GET IN TOUCH
          </h1>
        </div>
        <h1 className="text-center text-4xl lg:text-6xl font-bold">
          GET IN <span className="text-[#70139b]">TOUCH</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-start">
        <div className="lg:w-1/2">
          <div>
            <h3 className="text-4xl font-bold my-6 text-[#70139b]">
              Don&apos;t Be Shy!
            </h3>
            <p className="lg:w-2/3 text-xl">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-6 ">
              <FaMap className="text-4xl text-[#6f139b]" />
              <div>
                <p className="text-xl font-bold">Address</p>
                <p>Mirpur DOHS, Dhaka.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 ">
              <FaEnvelopeOpen className="text-4xl text-[#6f139b]" />
              <div>
                <p className="text-xl font-bold">Email Me</p>
                <p>dev.rizwanul@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 ">
              <IoCallSharp className="text-4xl text-[#6f139b]" />
              <div>
                <p className="text-xl font-bold">Call Me</p>
                <p>+880 1975 552 562</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="">
            <h3 className="text-4xl font-bold my-6 text-[#70139b]">
              Send Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="grid gap-6">
              <div className="flex gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered border-[#6f139b] w-full bg-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered border-[#6f139b] w-full bg-transparent"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input input-bordered border-[#6f139b] w-full bg-transparent"
              />
              <textarea
                name="message"
                className="textarea bg-transparent border border-[#6f139b]"
                placeholder="Your Message"
              ></textarea>
              <button className="btn border hover:bg-[#1f052bcd] border-[#6f139b] bg-[#1f052bcd] rounded-lg px-4 py-2 font-bold w-full bg-clr-main text-white">
                Send Message
              </button>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
