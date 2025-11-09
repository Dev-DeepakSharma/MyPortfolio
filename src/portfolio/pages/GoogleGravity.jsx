import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-teal-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-100 rounded-full blur-xl opacity-40"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-28 sm:h-28 bg-teal-100 rounded-full blur-xl opacity-40"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Top Left Tag */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-4 text-lg sm:top-8 sm:left-6 md:top-10 md:left-8 lg:top-12 lg:left-12 xl:top-16 xl:left-20 2xl:top-20 2xl:left-24 text-gray-600 font-medium tracking-wide z-10"
      >
        1/7 • Portfolio
      </motion.h1>

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-start space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14">
          {/* Greeting Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-gray-600 font-light">
              Hey Visitor! 👋
            </p>
          </motion.div>

          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              Welcome to My
              <br />
              <span className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Portfolio.
              </span>
            </h2>
          </motion.div>

          {/* Name Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-full"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight bg-linear-to-r from-teal-500 via-teal-600 to-teal-700 bg-clip-text text-transparent leading-tight sm:leading-tight md:leading-tight">
              I'm Deepak
              <br />
              Sharma.
            </h1>
          </motion.div>

          {/* Titles Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="w-full space-y-3 sm:space-y-4 md:space-y-5 mt-4 sm:mt-6"
          >
            {[
              "IT Aspirant",
              "MERN Stack Developer", 
              "Full Stack Developer",
              "Problem Solver"
            ].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 1.2 + index * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex items-center group cursor-pointer"
              >
                <motion.div
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded-full mr-3 sm:mr-4"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-wide text-gray-700 group-hover:text-teal-600 transition-colors duration-300">
                  {title} |
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-linear-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold text-base sm:text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-base sm:text-lg tracking-wide hover:border-teal-500 hover:text-teal-600 transition-all duration-300"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 w-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center cursor-pointer"
        >
          <p className="text-gray-500 text-xs sm:text-sm md:text-base tracking-widest font-medium mb-3 sm:mb-4">
            SCROLL TO EXPLORE
          </p>
          <motion.div
            className="w-5 h-8 sm:w-6 sm:h-10 md:w-7 md:h-12 border-2 border-gray-400 rounded-full flex justify-center relative mx-auto"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1 h-2 sm:w-1.5 sm:h-3 bg-gray-500 rounded-full mt-1 sm:mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Social Links - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center space-y-6"
      >
        <div className="w-px h-32 bg-gray-300"></div>
        {["GitHub", "LinkedIn", "Twitter"].map((platform, index) => (
          <motion.a
            key={platform}
            href="#"
            className="text-gray-500 hover:text-teal-600 text-sm tracking-wide rotate-90 origin-center whitespace-nowrap transform -rotate-90"
            whileHover={{ scale: 1.1, x: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {platform}
          </motion.a>
        ))}
        <div className="w-px h-32 bg-gray-300"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;