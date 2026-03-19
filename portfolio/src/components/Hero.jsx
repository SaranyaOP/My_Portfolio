import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const scrollToSection = (id) => {
    console.log("clicked");
    const section = document.getElementById(id);
    if (section) {
      console.log("clicked");
      console.log(section);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 text-gray-900">
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-5 right-5 z-50 bg-white dark:bg-gray-800 
        text-black dark:text-white p-3 rounded-full shadow-md 
        hover:scale-110 transition"
      >
        {dark ? <FaMoon /> : <FaSun />}
      </button>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm Saranya 👋
      </motion.h1>

      <AnimatedText />

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => scrollToSection("projects")}
          className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:scale-105 transition"
        >
          View Projects
        </button>

        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 hover:scale-105 transition">
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </button>
      </div>
      <div className="flex gap-3 mt-6 justify-center">
        <a
          href="https://github.com/SaranyaOP"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-700  hover:text-black transition transform hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/saranyaop/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl  text-gray-700 hover:text-black transition transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
