"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <div className="my-24 flex flex-wrap lg:flex-nowrap justify-between">
      {/* About Left */}
      <div className="w-full lg:w-[48%] text-[#1f1e1e] mt-16 order-2 lg:order-none">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl font-bold leading-[1.3] sm:text-[2rem] lg:font-semibold mb-8 dark:text-[#ededed]"
        >
          I am Victor Ejieme. I live in Lagos, Nigeria, and I love to code!
        </motion.h1>
        <div>
          {[
            "Hello! I'm Victor Chukwuebuka Ejieme, a frontend developer with a passion for building responsive and visually appealing interfaces. I've always been fascinated by computers, phones, and technology as a whole—basically, any gadget I could get my hands on. So, it's no surprise that I decided to turn that passion into a career.",
            "Although my educational background is in Genetics and Biotechnology, I've dedicated myself to mastering web development. I have a solid foundation in HTML, CSS, and JavaScript. I'm also a strong researcher, always diving deep to find the best solutions to problems—because in tech, knowing how to find answers is just as important as knowing them.",
            "I have pursued training in web development, gaining a solid foundation in HTML, CSS, and JavaScript. I use React.js as my main language for building (actually because I find it interesting). However, I am willing and eager to learn more languages that would be useful in my very long and successful career ahead.",
            "I'm excited to apply my skills, collaborate with like-minded developers, and continue growing in this ever-evolving field. I'm also undergoing training to be a full-stack developer. So whatever you need—just let me know. Let's build something together!",
          ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-[#444343] leading-7 mb-4 text-sm dark:text-[#bbb]"
              >
                {text}
              </motion.p>
          ))}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3"
          >
            <a
              href="/Victor Chukwuebuka Ejieme.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" block lg:hidden order-none border-[1px] border-[#444343] rounded-md py-1 px-2 bg-[#ddd] hover:bg-[#ccc] dark:hover:bg-[#111] dark:bg-[#000]">
                <div className="text-[10px] dark:text-[#bbb]">My Resume</div>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
      {/* About Right */}
      <div className="w-full lg:w-[42%] order-1 lg:order-none mt-14 flex  lg:flex-col justify-center">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Image
            src="/Chukwuebuka.jpeg"
            alt="Chukwuebuka Ejieme"
            className="w-[75%] lg:w-[95%] aspect-square ml-2 rounded-[20px]"
            width={400}
            height={400}
          />
        </motion.div>
        <div className="lg:flex flex-col lg:flex-col justify-center gap-4 mt-14 text-[#444343] font-normal text-sm">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3"
          >
            <a
              href="/Victor Chukwuebuka Ejieme.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" hidden lg:block border-[1px] border-[#444343] rounded-md py-1 px-2 bg-[#ddd] hover:bg-[#ccc] dark:hover:bg-[#111] dark:bg-[#000]">
                <div className="text-[10px] dark:text-[#bbb]">My Resume</div>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
