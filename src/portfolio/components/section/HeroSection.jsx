import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen lg:h-[130vh]  w-full bg-white text-black overflow-hidden mb-10 md:mb-20">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl absolute top-16 sm:top-16 md:top-24 left-2 sm:left-4 md:left-16 lg:left-32">
        1/7, Portfolio
      </h1>

      <div className="h-screen flex flex-col justify-center gap-6 lg:gap-2  lg:mt-32  2xl:mt-10 pl-6 sm:pl-8 md:pl-16 lg:px-28  lg:left-32 z-10 relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-widest mb-2 sm:mb-4 md:mb-6 text-gray-700"
        >
          Hey Visitor!,
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold tracking-widest mb-2 sm:mb-4 md:mb-6 text-gray-900"
        >
          Welcome to My Portfolio.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-2xl sm:text-3xl md:text-6xl lg:text-9xl font-bold tracking-widest mb-2 sm:mb-4 md:mb-8 bg-clip-text text-transparent bg-teal-500"
        >
          I’m Deepak Sharma.
        </motion.h1>

        <div className="space-y-1 sm:space-y-1 md:space-y-2">
          {["IT Aspirant", "MERN Stack Developer", "Full Stack Developer"].map(
            (title, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl tracking-widest text-gray-700 "
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
        className="absolute bottom-4 sm:bottom-8 lg:bottom-0 w-full flex justify-center px-2 sm:px-4"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center"
        >
          <p className="text-gray-600 text-xs sm:text-sm md:text-lg tracking-widest mb-1 sm:mb-2 md:mb-3">
            SCROLL TO EXPLORE
          </p>
          <motion.div
            className="w-6 h-10 sm:w-8 sm:h-12 md:w-10 md:h-16 border-2 border-gray-400 rounded-full flex justify-center relative mx-auto"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1 h-2 sm:w-1.5 sm:h-2 md:w-1.5 md:h-3 bg-gray-600 rounded-full mt-1 sm:mt-1 md:mt-2"
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

      <motion.div
        className="absolute -top-12 sm:-top-16 md:-top-32 -right-12 sm:-right-16 md:-right-32 w-48 h-48 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] bg-blue-200/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroSection;
