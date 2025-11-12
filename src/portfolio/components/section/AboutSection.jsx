import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  return (
    <section className="h-[170vh] pt-20 sm:pt-40 w-full relative bg-white">
      <motion.h1
        className="sticky top-16 sm:top-20 text-3xl sm:text-4xl md:text-6xl ml-2 sm:ml-4 md:ml-16 lg:ml-32 cursor-pointer pb-40 sm:pb-80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        3/7, About-ME.
      </motion.h1>

      <div className=" pt-10 sm:pt-20 h-[150vh] py-10 sm:py-20 pl-4 sm:pl-8 md:pl-16 lg:pl-20 xl:pl-96 sticky top-12 sm:top-16 bg-gray-200 px-2 sm:px-4">
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          className="cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <motion.p
            variants={letterVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-3xl tracking-widest mb-3 sm:mb-6 lg:mb-0 lx:mb:6 mt-5 sm:mt-10 text-black"
          >
            Hey Visitor 👋 !,
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-xl sm:text-2xl md:text-4xl lg:text-2xl xl:text-5xl font-semibold tracking-widest mb-3 sm:mb-6 lg:mb-0 xl:mb-10 xl:pt-2 text-black ml-0 sm:ml-10 md:ml-20 lg:ml-52"
          >
            This is my portFolio,
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-xl sm:text-2xl md:text-4xl lg:text-2xl xl:text-5xl  font-semibold tracking-widest mb-3 sm:mb-6 lg:mb-0  xl:mb-10 xl:pt-2 text-black ml-0 sm:ml-5 md:ml-10 lg:ml-20"
          >
            and,
          </motion.p>
          <motion.h1
            variants={letterVariants}
            className="text-xl sm:text-2xl md:text-4xl lg:text-2xl xl:text-7xl font-bold tracking-widest mb-6 sm:mb-12 lg:mb-0 xl:mb-10 xl:pt-2 bg-clip-text text-transparent bg-teal-500"
          >
            I’m Welcoming You.
          </motion.h1>
          <motion.p
            variants={letterVariants}
            className="text-xl sm:text-2xl md:text-4xl  lg:text-2xl xl:text-5xl font-semibold tracking-widest mb-3 sm:mb-6 lg:mb-0 xl:mb-10 xl:pt-2 text-black ml-0 sm:ml-20 md:ml-40 lg:ml-80"
          >
            I'm Deepak Sharma, from Delhi.
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-xl sm:text-2xl md:text-5xl lg:text-2xl xl:text-5xl font-semibold tracking-widest mb-5 sm:mb-10 lg:mb-0 xl:mb-10 xl:pt-2 text-black ml-0 sm:ml-2 md:ml-5 lg:ml-10"
          >
            An,
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-xl sm:text-2xl md:text-6xl lg:text-2xl xl:text-5xl font-semibold tracking-widest mb-4 sm:mb-8 lg:mb-0 xl:mb-10 xl:pt-2 text-black ml-0 sm:ml-8 md:ml-20 lg:ml-40"
          >
            IT Aspirant, |
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-xl sm:text-2xl md:text-6xl lg:text-2xl xl:text-5xl font-semibold tracking-widest mb-4 sm:mb-8 lg:mb-0 xl:mb-10 xl:pt-2 text-black ml-0 sm:ml-24 md:ml-60 lg:ml-120"
          >
            Full-Stack Developer, |
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-xl sm:text-2xl md:text-5xl lg:text-2xl xl:text-5xl font-semibold tracking-widest mb-4 sm:mb-8 lg:mb-0 xl:mb-10 xl:pt-2 text-black"
          >
            MERN_ Stack Developer, |
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;