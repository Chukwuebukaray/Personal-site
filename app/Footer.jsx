import React from "react";
import { motion } from 'motion/react';
import Image from "next/image";

const Footer = ({ isDarkMode }) => {

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
    {
      src: isDarkMode ? "/mail-dark.png" : "/mail-light.png",
      url: "mailto:victor2ejieme@gmail.com",
    },
  ];

  return (
    <div className="flex lg:flex-row sm:flex-col md:flex-row justify-between items-center mt-[15%] mb-[5%] text-[12px] lg:text-[14px] text-[#444343]">
      <div className="flex gap-8">
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
              transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
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
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.9}}
        className="font-thin text-[#aaa]"
      >
        {" "}
        <p>&copy; 2025 Chukwuebuka. All rights reserved</p>
      </motion.div>
    </div>
  );
};

export default Footer;
