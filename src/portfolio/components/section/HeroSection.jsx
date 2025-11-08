import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-white text-black overflow-hidden mb-20">
      <h1 className="text-6xl absolute top-28 left-56">1/7, Portfolio</h1>

      <div className="h-full flex flex-col justify-center pl-24 md:pl-56 z-10 relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl tracking-widest mb-6 text-gray-700"
        >
          Hey Visitor!,
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-widest mb-6 text-gray-900"
        >
          Welcome to My Portfolio.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-6xl md:text-9xl font-bold tracking-widest mb-8 bg-clip-text text-transparent bg-teal-500"
        >
          I’m Deepak Sharma.
        </motion.h1>

        <div className="space-y-2">
          {["IT Aspirant", "MERN Stack Developer", "Full Stack Developer"].map(
            (title, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                className="text-3xl md:text-4xl tracking-widest text-gray-700 mb-8"
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
        className="absolute bottom-16 w-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center"
        >
          <p className="text-gray-600 text-lg tracking-widest mb-3">
            SCROLL TO EXPLORE
          </p>
          <motion.div
            className="w-10 h-16 border-2 border-gray-400 rounded-full flex justify-center relative mx-auto"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1.5 h-3 bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
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
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroSection;
