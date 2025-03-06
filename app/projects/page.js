"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const projects = [
  {
    name: "e-Mages",
    description:
      "A sleek image search tool powered by the Unsplash API that fetches images based on user queries.",
    link: "https://e-mages.netlify.app/",
    screenshot: "/screenshots/emages.png",
  },
  {
    name: "AlphaTwelve",
    description:
      "A Figma-to-code project built for a job application challenge, enhancing my frontend skills.",
    link: "https://alphatwelveapp.netlify.app",
    screenshot: "/screenshots/alphatwelve.png",
  },
  {
    name: "Task Flow",
    description:
      "A frontend-focused Figma-to-code project that improved my CSS skills and experience working under deadlines.",
    link: "https://taskflowin.netlify.app",
    screenshot: "/screenshots/taskflow.png",
  },
  {
    name: "Educity",
    description:
      "A fully functional college website built with React, featuring dynamic UI components and EmailJS integration.",
    link: "https://educityapp.netlify.app",
    screenshot: "/screenshots/educity.png",
  },
  {
    name: "Users List",
    description:
      "An internship challenge project featuring a static user list with a shuffle function and smooth animations.",
    link: "https://shuffletest.netlify.app",
    screenshot: "/screenshots/userslist.png",
  },
];

const ProjectCard = ({ name, description, link, screenshot, index }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.2 + index * 0.2 }}
      className="w-full flex flex-col gap-6 border-2 border-transparent rounded-2xl p-4 hover:bg-[#ddd] transition-all duration-200 dark:hover:bg-[#1c1c1c]"
    >
      <div
        className="w-full h-40 rounded-lg bg-cover bg-center relative"
        style={{ backgroundImage: `url(${screenshot})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
      </div>

      <h6 className="font-semibold text-[#444343] dark:text-[#bbb]">{name}</h6>
      <p className="text-sm font-light text-[#444343] dark:text-[#bbb]">
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-extralight text-sm text-[#aaa] hover:text-teal-500"
      >
        <Image src="/linkicon.png" width={16} height={16} alt="Link Icon" />
        Visit {name}
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="w-full mt-[140px]">
      <div className="w-full lg:max-w-[70%]">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[2rem] text-[#1f1e1e] font-bold leading-[1.3] sm:text-[2.9rem] lg:font-semibold dark:text-[#e2e1e1]"
        >
          Some projects I've worked on.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="leading-[1.8] my-5 text-[15px] text-[#444343] font-light lg:text-[1rem] lg:font-normal dark:text-[#bbb]"
        >
          These are just a few of the projects from my journey. If you see
          something you like, check out my GitHub, fork the repository, and
          contribute if you have ideas for improvement.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
