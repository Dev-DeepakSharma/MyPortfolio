import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets.js";

const ProductSection = () => {
  return (
    <section className="h-[170vh] w-full relative bg-violet-100 pt-20">
      <motion.h1
        className="sticky top-16 ml-56 text-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        4/7, Product,
      </motion.h1>

      <div className="pt-16 text-center text-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Projects I Have Built / Developed
        </motion.p>
      </div>

      <div className="sticky top-16 bg-fuchsia-100 w-full px-56 pt-28">
        <div className="flex justify-between h-200">
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
            <div key={i} className="w-full text-center pt-10 px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <h1 className="text-5xl mb-10">{project.title}</h1>
                <p className="text-2xl pb-2">Hey visitor👋,</p>
                <p className="text-2xl pb-2">
                  I have Created a {project.title}.
                </p>
                <p className="text-2xl pb-3">Welcome to my Projects,</p>

                <div className="relative flex justify-center items-center min-h-80 py-8">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-120 rounded shadow-2xl cursor-pointer"
                    whileHover={{
                      scale: 2,
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

                <p className="text-2xl">
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
