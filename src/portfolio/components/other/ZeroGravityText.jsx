import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ZeroGravityText = () => {
  const text = "About Me";
  const [gravity, setGravity] = useState(false);

  // Detect scroll position to toggle gravity
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 600) setGravity(true); // start floating after 600px
      else setGravity(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center h-[60vh] relative overflow-hidden">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-7xl font-bold text-black select-none"
          animate={
            gravity
              ? {
                  y: [0, Math.random() * 200 - 100],
                  x: [0, Math.random() * 200 - 100],
                  rotate: [0, Math.random() * 360],
                  transition: { duration: 3, repeat: Infinity, repeatType: "mirror" },
                }
              : { y: 0, x: 0, rotate: 0 }
          }
          whileHover={{
            scale: 1.4,
            rotate: Math.random() * 360,
            y: [0, -20, 0],
            transition: { duration: 0.4 },
          }}
          style={{
            marginRight: char === " " ? "1rem" : "0.2rem",
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default ZeroGravityText;
