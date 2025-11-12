import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-fit lg:h-screen w-full bg-white text-black overflow-hidden mb-10 md:mb-20">
      {/* Header Tag */}
      <h1 className="text-lg sm:text-xl md:text-3xl lg:text-3xl  xl:text-5xl absolute top-10 sm:top-14 md:top-20 left-3 sm:left-6 md:left-16 lg:left-32">
        1/7, Portfolio
      </h1>

      {/* Main Content */}
      <div className="flex flex-col justify-center h-[85vh] sm:h-[90vh] md:h-screen lg:h-screen xl:h-screen gap-4 sm:gap-6 md:gap-8 px-6 sm:px-10 md:px-16 lg:px-28 relative z-10 pt-20 mb-10 ">
        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl tracking-widest text-gray-700"
        >
          Hey Visitor!,
        </motion.p>

        {/* Welcome Line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-3xl  lg:text-2xl xl:text-5xl font-semibold tracking-widest text-gray-900"
        >
          Welcome to My Portfolio.
        </motion.p>

        {/* Name Highlight */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-8xl font-bold tracking-widest bg-clip-text text-transparent bg-linear-to-r from-teal-400 to-blue-500"
        >
          I’m Deepak Sharma.
        </motion.h1>

        {/* Titles */}
        <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-6">
          {["IT Aspirant", "MERN Stack Developer", "Full Stack Developer"].map(
            (title, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                className="text-sm sm:text-base md:text-xl lg:text-3xl xl:text-4xl tracking-widest text-gray-700"
              >
                {title} |
              </motion.p>
            )
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 w-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center"
        >
          <p className="text-gray-600 text-xs sm:text-sm md:text-base tracking-widest mb-2">
            SCROLL TO EXPLORE
          </p>
          <motion.div
            className="w-5 h-9 sm:w-6 sm:h-10 md:w-8 md:h-12 border-2 border-gray-400 rounded-full flex justify-center mx-auto"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1 h-2 sm:w-1.5 sm:h-2.5 md:w-1.5 md:h-3 bg-gray-600 rounded-full mt-1"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Background Circle */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-[400px] md:h-[400px] bg-blue-200/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroSection;
