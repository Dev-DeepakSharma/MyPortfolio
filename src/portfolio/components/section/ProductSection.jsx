import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets.js";

const ProductSection = () => {
  return (
    <section className="h-[180vh] w-full relative bg-white pt-10 sm:pt-20 md:pt-40">
      <motion.h1
        className="sticky top-16 sm:top-20 ml-2 sm:ml-4 md:ml-16 lg:ml-32 text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        4/7, Product,
      </motion.h1>

      <div className="sticky pt-4 sm:pt-8 md:pt-16 top-16 sm:top-20 text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl pb-14 sm:pb-28 md:pb-56 px-2 sm:px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Projects I Have Built / Developed
        </motion.p>
      </div>

      <div className="sticky top-12 sm:top-16 bg-red-100 w-full h-screen px-2 sm:px-4 md:px-16 lg:px-56 pt-7 sm:pt-14 md:pt-28 pb-10 sm:pb-20 md:pb-40">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {[
            {
              title: "CRM",
              img: assets.crmimage,
              link: "https://dropworld.onrender.com",
            },
            {
              title: "Portfolio",
              img: assets.portfolio,
              link: "#",
            },
          ].map((project, i) => (
            <div key={i} className="w-full md:w-1/2 text-center pt-3 sm:pt-5 md:pt-10 px-2 sm:px-4 mb-5 sm:mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-6 md:mb-10">{project.title}</h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl pb-1 sm:pb-2">Hey visitor👋,</p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl pb-1 sm:pb-2">
                  I have Created a {project.title}.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl pb-2 sm:pb-3">Welcome to my Projects,</p>

                <div className="relative flex justify-center items-center min-h-32 sm:min-h-40 md:min-h-80 py-2 sm:py-4 md:py-8">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-64 sm:w-80 md:w-96 lg:w-120 rounded shadow-2xl cursor-pointer"
                    whileHover={{
                      scale: 1.5,
                      zIndex: 1000,
                      transition: {
                        duration: 3,
                        ease: [0.5, 1, 0.23, 1],
                      },
                    }}
                    style={{
                      transformOrigin: "center center",
                      willChange: "transform",
                    }}
                  />
                </div>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  Link -{" "}
                  <a
                    href={project.link}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.link}
                  </a>
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;