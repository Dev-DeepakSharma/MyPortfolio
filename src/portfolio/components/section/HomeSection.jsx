import React from "react";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section className="h-[200vh] w-full relative bg-gray-100 pt-10">
      <motion.h1
        className="sticky top-16 ml-56 mb-10 text-6xl cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        2/7, Home.
      </motion.h1>

      <motion.h1
        className="sticky top-16 text-5xl pt-20 pb-40 pl-132"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        HOME / ABOUT / PRODUCT / SOCIAL HANDLES.
      </motion.h1>

      <div className="grid grid-cols-3 mt-10 gap-y-20 sticky h-screen top-16 bg-gray-100 mb-32 pb-40">
        {[
          {
            title: "Home.",
            text: "Hey visitor👋, Welcome to my portfolio!, This is Home Page, where you will see all Everything, A Demo of Full WEB/Portfolio.",
            color: "bg-blue-200",
          },
          {
            title: "Me!",
            text: "Hey visitor👋, Welcome to my About Me Section!, Where you will Know ME!, I’m Deepak Sharma an IT Aspirant | Full-Stack Developer | MERN Stack passionate about crafting interactive and user-friendly web experiences.",
            color: "bg-orange-200",
          },
          {
            title: "Products,",
            text: "Hey visitor👋, Welcome to my Product Section!, Where you will Know Products/Services!, Like web, CRM, Portfolio.",
            color: "bg-blue-400",
          },
          {
            title: "Social-HANDLES,",
            text: "Hey visitor👋, Welcome to Social-Section!, Where you will Know About social-handles like GitHub, Twitter, Instagram, YouTube and more.",
            color: "bg-red-400",
          },
          {
            title: "LocAtioN,",
            text: "Hey visitor👋, Welcome to Location - Section!, Where you will Know About Our Location.! I am Laying on Dwarka Mor, Delhi.",
            color: "bg-green-400",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`relative shadow-2xl h-fit w-96 mt-32 ml-56 rounded-4xl p-6 text-gray-800 cursor-pointer bg-white`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.25 }}
          >
            <h1 className="text-center text-3xl font-semibold mb-6 mt-2">
              {item.title}
            </h1>
            <p className="text-lg leading-loose text-justify mb-6 tracking-widest">
              {item.text}
            </p>
            <div
              className={`absolute -bottom-5 left-10 w-10 h-10 ${item.color} border-l border-b border-black rotate-45`}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;
