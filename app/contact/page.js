"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import * as emailjs from "@emailjs/browser";
import Image from "next/image";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const form = useRef();

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setResult("Sending...");

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setResult("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="contact justify-between my-20 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:max-w-[60%]">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=" text-xl text-[#1f1e1e] flex items-center text-[2rem]  font-bold leading-[1.3] sm:text-[2.9rem] lg:font-semibold dark:text-[#e2e1e1]"
          >
            Send me a message{" "}
            <Image
              src={isDarkMode ? "/mail-dark.png" : "/mail-light.png"}
              alt=""
              width={20}
              height={20}
              className="ml-4"
            />
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="leading-[1.8] my-5 text-[15px] text-[#444343] font-light lg:text-[1rem] lg:font-normal dark:text-[#bbb]"
          >
            Have a project in mind or just want to say hi? Feel free to reach
            out! Whether it's about web development, design, or just tech in
            general, I'll be very happy to hear from you.
          </motion.p>
        </div>
        <div className="contact-col text-sm text-[#444343] max-w-full">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5 max-w-2xl mr-auto ml-0"
          >
            <div className="flex flex-col lg:flex-row  gap-4 justify-center">
              <motion.input
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="flex-1 border-[0.5px] border-[#999] bg-gray-200 p-4 rounded-md focus:outline-none"
              />

              <motion.input
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-1 border-[0.5px] border-[#999] bg-gray-200 p-4 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <motion.textarea
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                name="messages"
                rows={6}
                placeholder="Enter your message"
                required
                className="w-full border-[0.5px] border-[#999] bg-gray-200 p-4 rounded-md focus:outline-none"
              />
            </div>
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              type="submit"
              className="flex items-center justify-between mx-auto mt-5  rounded-lg border-[1px] border-[#444343] py-1 px-2 bg-[#ddd]  transition duration-300 hover:bg-[#ccc] dark:hover:bg-[#111] dark:bg-[#000] text-[10px] dark:text-[#bbb]"
            >
              Submit
            </motion.button>
          </motion.form>
          <span className="block mt-5 text-lg text-gray-700">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
