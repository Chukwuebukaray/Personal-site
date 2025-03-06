"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Footer from "./Footer";
import Contact from "./contact/page";
import About from "./about/page";
import Projects from "./projects/page";
import Typewriter from "./Typewriter";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  const socialLinks = [
    {
      src: isDarkMode ? "/x-dark.png" : "/x-light.png",
      url: "https://x.com/ebukaejieme",
    },
    {
      src: isDarkMode ? "/instagram-dark.png" : "/instagram-light.png",
      url: "https://instagram.com/ebukaejieme",
    },
    {
      src: isDarkMode ? "/github-mark-dark.png" : "/github-mark-light.png",
      url: "https://github.com/chukwuebukaray",
    },
    {
      src: isDarkMode ? "/linkedin-dark.png" : "/linkedin-light.png",
      url: "https://linkedin.com/in/victor-ejieme",
    },
  ];

  return (
    <>
      <div className="bg-[#eee] mx-0 lg:mx-[5%] md:mx-[5%] border-[1px] border-x-[#e2e1e1] dark:bg-[#131313] dark:border-[#383544]">
        <div
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed top-[5%] right-[18%] border-2 border-[#e2e1e1] rounded-full p-2 bg-[#ededed] z-10"
        >
          <Image
            src={isDarkMode ? "/darkmode.png" : "/lightmode.png"}
            width={20}
            height={20}
            title="Dark mode"
            alt=""
          />
        </div>
        <div className="mx-[10%]">
          <div className="w-full text-[#1f1e1e]  h-screen flex flex-col justify-center ">
            <div className="w-full lg:max-w-[80%] mb-4 ">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: "50" }}
                className="w-fit"
              >
                <Image
                  src="/Chukwuebukamug.jpg"
                  className="rounded-full aspect-square w-32 mb-[20px] sticky"
                  alt="Chukwuebuka"
                  width={128}
                  height={128}
                  priority
                />
              </motion.div>
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[1.7rem] font-bold leading-[1.3] sm:text-[2.9rem] lg:font-semibold dark:text-[#ededed]"
              >
                Frontend Web{" "}
                <Typewriter words={["Developer", "Designer", "Engineer"]} />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="leading-[1.8] my-[20px] text-[15px] text-[#444343] font-light lg:text-[1rem] lg:font-normal dark:text-[#bbb]"
              >
                I'm a developer who loves turning ideas into visually stunning
                code. Challenges don't scare me—they drive me. I strongly believe every project is
                an opportunity to learn, grow, and push my skills further.
              </motion.p>
            </div>
            <motion.div className="flex gap-8 mt-7">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-5 items-center dark:text-[#bbb]"
                >
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex flex-row gap-5 items-center dark:text-[#bbb]"
                  >
                    <Image
                      src={link.src}
                      className="w-[20px] cursor-pointer"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="mx-[5%]">
          <About isDarkMode={isDarkMode} />
          <Projects />
          <Contact isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
        </div>
      </div>
    </>
  );
};

export default Home;
