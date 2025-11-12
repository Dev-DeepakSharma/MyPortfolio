import React from "react";
import { motion } from "framer-motion";

const HomeSection = () => {
  const sections = [
    {
      title: "Home.",
      text: (
        <>
          Hey visitor👋, Welcome to my portfolio! This is{" "}
          <span className="font-semibold text-blue-600 hover:underline">
            Home Page
          </span>
          , where you will see everything — a demo of a full WEB/Portfolio.
        </>
      ),
      color: "bg-white ",
    },
    {
      title: "Me!",
      text: (
        <>
          Hey visitor👋, Welcome to my About Me Section! I’m{" "}
          <span className="font-semibold text-gray-700 hover:underline">
            Deepak Sharma
          </span>
          , an IT aspirant | Full-Stack Developer | MERN Stack passionate about
          crafting interactive and user-friendly web experiences.
        </>
      ),
      color: "bg-white ",
    },
    {
      title: "Products,",
      text: (
        <>
          Hey visitor👋, Welcome to my Product Section! Here you’ll find details
          about{" "}
          <span className="font-semibold">
            <a href="#" className="text-yellow-600 hover:underline">
              Web,
            </a>{" "}
            <a href="#" className="text-red-600 hover:underline">
              CRM,
            </a>{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Portfolio
            </a>
          </span>{" "}
          — these are the types of projects I work on.
        </>
      ),
      color: "bg-white ",
    },
    {
      title: "Social Handles,",
      text: (
        <>
          Hey visitor👋, Welcome to my Social Section! Connect with me on{" "}
          <span className="font-semibold cursor-pointer">
            <a href="#" className="text-blue-600 hover:underline">
              GitHub,
            </a>{" "}
            <a href="#" className="text-red-500 hover:underline">
              Twitter,
            </a>{" "}
            <a href="#" className="text-pink-600 hover:underline">
              Instagram,
            </a>{" "}
            <a href="#" className="text-red-700 hover:underline">
              YouTube
            </a>
          </span>
          , and more!
        </>
      ),
      color: "bg-white ",
    },
    {
      title: "Location,",
      text: (
        <>
          Hey visitor👋, Welcome to my Location Section! You can find me in{" "}
          <span className="font-semibold cursor-pointer">
            <a href="#" className="text-cyan-700 hover:underline">
              Dwarka Mor, Delhi
            </a>
          </span>
          .
        </>
      ),
      color: "bg-white ",
    },
  ];

  return (
    <section className="h-[250vh]  w-full relative bg-white pt-5 sm:pt-10">
      {/* Section Headings */}
      <motion.h1
        className="sticky top-16 sm:top-20  ml-2 sm:ml-4 md:ml-16 lg:ml-40 mb-5 sm:mb-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        2/7, Home.
      </motion.h1>

      <motion.h1
        className="sticky top-20 sm:top-18 lg:top-24 text-xl sm:text-2xl md:text-4xl lg:text-5xl pt-5 sm:pt-10 md:pt-20 pb-20 sm:pb-16 md:pb-32 text-center px-4 sm:px-6 lg:px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        HOME / ABOUT / PRODUCT / SOCIAL HANDLES.
      </motion.h1>

      {/* Cards Grid */}
      <div className=" h-[220vh] lg:h-[230vh] xl:h-[150vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 sm:gap-y-10 md:gap-y-10 lg:gap-x-10 sticky top-12 sm:top-16 bg-sky-100 pb-10 sm:pb-20 md:pb-40 lg:pb-20 pt-5 sm:pt-10 md:pt-20 px-2 sm:px-4">
        {sections.map((item, i) => (
          <motion.div
            key={i}
            className={`relative shadow-xl border-t-4 sm:border-t-8 md:border-t-20 border-gray-900 h-fit w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto mt-8 sm:mt-16 md:mt-32 rounded-xl sm:rounded-2xl md:rounded-4xl p-3 sm:p-4 md:p-6 cursor-pointer ${item.color}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 md:mb-6 mt-1 sm:mt-2">
              {item.title}
            </h1>
            <p
              className={`text-xs sm:text-sm md:text-base lg:text-lg leading-loose text-justify mb-2 sm:mb-4 md:mb-6 tracking-widest ${item.textColor}`}
            >
              {item.text}
            </p>
            <div
              className={`absolute -bottom-2 sm:-bottom-3 md:-bottom-5 left-4 sm:left-6 md:left-10 w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 bg-blue-300 border-l border-b border-black rotate-45`}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;