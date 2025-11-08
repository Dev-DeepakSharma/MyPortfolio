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
    <section className="h-[200vh] pt-40 w-full relative bg-blue-50">
      <motion.h1
        className="sticky top-16 text-6xl ml-56 cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        3/7, About-ME.
      </motion.h1>

      <div className="absoute pt-20 h-screen py-20 pl-80 sticky top-16 bg-blue-50">
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          className="cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <motion.p
            variants={letterVariants}
            className="text-3xl tracking-widest mb-6 mt-10 text-black"
          >
            Hey Visitor 👋 !,
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-4xl md:text-5xl font-semibold tracking-widest mb-6 text-black ml-52"
          >
            This is my portFolio,
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-4xl md:text-4xl font-semibold tracking-widest mb-6 text-black ml-20"
          >
            and,
          </motion.p>
          <motion.h1
            variants={letterVariants}
            className="text-4xl md:text-7xl font-bold tracking-widest mb-12 bg-clip-text text-transparent bg-teal-500"
          >
            I’m Welcoming You.
          </motion.h1>
          <motion.p
            variants={letterVariants}
            className="text-4xl md:text-3xl font-semibold tracking-widest mb-6 text-black ml-80"
          >
            I'm Deepak Sharma, from Delhi.
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-4xl md:text-5xl font-semibold tracking-widest mb-10 text-black ml-10"
          >
            An,
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-4xl md:text-6xl font-semibold tracking-widest mb-8 text-black ml-40"
          >
            IT Aspirant, |
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-4xl md:text-6xl font-semibold tracking-widest mb-8 text-black ml-120"
          >
            Full-Stack Developer, |
          </motion.p>
          <motion.p
            variants={letterVariants}
            className="text-4xl md:text-5xl font-semibold tracking-widest mb-8 text-black"
          >
            MERN_ Stack Developer, |
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
