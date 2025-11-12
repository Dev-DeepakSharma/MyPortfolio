import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const SocialHandleSection = () => {
  const socialHandles = [
    {
      name: "GitHub",
      link: "https://github.com",
      color: "text-gray-800",
      icon: <FaGithub />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      color: "text-blue-400",
      icon: <FaTwitter />,
    },
    
    
    {
      name: "LinkedIn",
      link: "https://linkedin.com",
      color: "text-blue-700",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <section className="h-[160vh] w-full relative bg-white pt-5 sm:pt-10 md:pt-20">
      <motion.h1
        className="sticky top-16 sm:top-20 ml-2 sm:ml-4 md:ml-16 lg:ml-32 text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        5/7, Social-Handles,
      </motion.h1>

      <div className="sticky top-12 sm:top-16 pt-10 sm:pt-20 pb-20 sm:pb-40 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-lg sm:text-xl md:text-2xl mb-10 sm:mb-20"
        >
          Connect with me on social media!
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {socialHandles.map((handle, index) => (
            <motion.a
              key={index}
              href={handle.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-4 sm:p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 hover:underline ${handle.color} `}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl sm:text-5xl mb-2">{handle.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold">{handle.name}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialHandleSection;
