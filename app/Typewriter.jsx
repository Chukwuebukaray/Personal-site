"use client";

import { useEffect, useState } from "react";
import { animate } from "motion";

const Typewriter = ({ words, speed = 100, delay = 1500 }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);


  useEffect(() => {
    let timeout;

    if (deleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1)); // Remove last character
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => words[index].slice(0, prev.length + 1)); // Add next character
      }, speed);
    }

    if (!deleting && text === words[index]) {
      setTimeout(() => setDeleting(true), delay);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, delay]);

   // Cursor blinking effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);


  useEffect(() => {
    animate(
      ".typewriter",
      { duration: 0.3, easing: "ease-in-out" }
    );
  }, [text]);

  return (
    <span className="typewriter text-[#444343] font-bold dark:text-gray-500">
      {text}
      <span
        className={`${
          cursorVisible ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        |
      </span>
    </span>
  );
};

export default Typewriter;
