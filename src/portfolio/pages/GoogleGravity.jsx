import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerRef = useRef(null);
  const [characters, setCharacters] = useState([]);
  const [isFalling, setIsFalling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Physics constants
  const gravity = 0.4;
  const friction = 0.96;
  const bounce = 0.8;
  const hoverForce = 25;

  // All the text content from your About section
  const textLines = [
    "Hey Visitor 👋 !,",
    "This is my portFolio,",
    "and,",
    "I'm Welcoming You.",
    "I'm Deepak Sharma, from Delhi.",
    "An,",
    "IT Aspirant, |",
    "Full-Stack Developer, |",
    "MERN_ Stack Developer, |"
  ];

  // Initialize characters from all text lines
  useEffect(() => {
    const initCharacters = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const chars = [];
      
      const containerWidth = container.clientWidth;
      let charId = 0;

      // Starting positions
      let currentY = 150;
      const charWidth = 40;
      const charHeight = 60;
      const lineHeight = 80;
      const charSpacing = 4;

      textLines.forEach((line, lineIndex) => {
        let currentX = 100;
        
        // Adjust positioning based on original layout
        if (lineIndex === 1) currentX = 300; // "This is my portFolio,"
        if (lineIndex === 2) currentX = 200; // "and,"
        if (lineIndex === 4) currentX = 400; // "I'm Deepak Sharma, from Delhi."
        if (lineIndex === 5) currentX = 150; // "An,"
        if (lineIndex === 6) currentX = 250; // "IT Aspirant, |"
        if (lineIndex === 7) currentX = 450; // "Full-Stack Developer, |"
        if (lineIndex === 8) currentX = 100; // "MERN_ Stack Developer, |"

        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          
          chars.push({
            id: charId++,
            char,
            x: currentX,
            y: currentY,
            vx: 0,
            vy: 0,
            width: charWidth,
            height: charHeight,
            originalX: currentX,
            originalY: currentY,
            isFalling: false,
            isReturning: false,
            rotation: 0,
            lineIndex: lineIndex
          });

          currentX += charWidth + charSpacing;
        }

        // Move to next line position
        currentY += lineHeight;
        if (lineIndex === 3) currentY += 40; // Extra space after "I'm Welcoming You."
      });

      setCharacters(chars);
    };

    initCharacters();
    window.addEventListener('resize', initCharacters);
    return () => window.removeEventListener('resize', initCharacters);
  }, []);

  // Mouse movement tracking for hover effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutSection = document.getElementById("about-section");
      if (!aboutSection) return;
      
      const sectionTop = aboutSection.offsetTop;
      const triggerPoint = sectionTop - window.innerHeight * 0.4;
      
      if (scrollY > triggerPoint && scrollY > lastScrollY && !isFalling) {
        setIsFalling(true);
        triggerGravity();
      }
      
      if (scrollY < lastScrollY && isFalling) {
        setIsFalling(false);
        returnToOriginal();
      }
      
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isFalling]);

  // Main animation loop
  useEffect(() => {
    let animationFrameId;

    const updatePhysics = () => {
      setCharacters(prev => {
        if (!containerRef.current) return prev;

        const container = containerRef.current;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        return prev.map((char, index) => {
          let { x, y, vx, vy, isFalling, isReturning } = char;

          // HOVER EFFECTS - Only when falling
          if (isFalling && !isReturning) {
            const dx = mousePosition.x - (x + char.width / 2);
            const dy = mousePosition.y - (y + char.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);
            const hoverRadius = 120;

            if (distance < hoverRadius) {
              const force = (1 - distance / hoverRadius) * hoverForce;
              const angle = Math.atan2(dy, dx);
              
              vx += Math.cos(angle) * force * 0.1;
              vy += Math.sin(angle) * force * 0.1;
              
              // Add some upward force for jumping effect
              if (distance < hoverRadius * 0.5) {
                vy -= force * 0.2;
              }
            }
          }

          if (isFalling && !isReturning) {
            // Apply gravity
            vy += gravity;

            // Apply friction
            vx *= friction;
            vy *= friction;

            // Update position
            x += vx;
            y += vy;

            // Boundary collision with smoother bouncing
            if (x < 20) {
              x = 20;
              vx = -vx * bounce * 0.8;
            } else if (x + char.width > containerWidth - 20) {
              x = containerWidth - char.width - 20;
              vx = -vx * bounce * 0.8;
            }

            if (y < 20) {
              y = 20;
              vy = -vy * bounce * 0.8;
            } else if (y + char.height > containerHeight - 20) {
              y = containerHeight - char.height - 20;
              vy = -vy * bounce * 0.9;
              vx *= 0.85;
            }

            // Add rotation based on velocity
            const rotation = vx * 0.5;

            return {
              ...char,
              x,
              y,
              vx,
              vy,
              rotation
            };
          }

          if (isReturning) {
            const dx = char.originalX - x;
            const dy = char.originalY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 1) {
              return {
                ...char,
                x: char.originalX,
                y: char.originalY,
                vx: 0,
                vy: 0,
                isReturning: false,
                isFalling: false,
                rotation: 0
              };
            }

            // Smooth return with easing
            const speed = 0.15;
            const ease = 0.1;
            return {
              ...char,
              x: x + dx * speed,
              y: y + dy * speed,
              vx: dx * ease,
              vy: dy * ease,
              rotation: dx * 0.1
            };
          }

          return char;
        });
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isFalling, mousePosition]);

  const triggerGravity = () => {
    setCharacters(prev =>
      prev.map(char => ({
        ...char,
        isFalling: true,
        isReturning: false,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 10
      }))
    );
  };

  const returnToOriginal = () => {
    setCharacters(prev =>
      prev.map(char => ({
        ...char,
        isReturning: true,
        isFalling: false
      }))
    );
  };

  // Get character style based on line index
  const getCharStyle = (lineIndex) => {
    const styles = {
      0: "text-3xl tracking-widest text-black", // "Hey Visitor 👋 !,"
      1: "text-4xl md:text-5xl font-semibold tracking-widest text-black", // "This is my portFolio,"
      2: "text-4xl md:text-4xl font-semibold tracking-widest text-black", // "and,"
      3: "text-4xl md:text-7xl font-bold tracking-widest bg-clip-text text-transparent bg-teal-500", // "I'm Welcoming You."
      4: "text-4xl md:text-3xl font-semibold tracking-widest text-black", // "I'm Deepak Sharma, from Delhi."
      5: "text-4xl md:text-5xl font-semibold tracking-widest text-black", // "An,"
      6: "text-4xl md:text-6xl font-semibold tracking-widest text-black", // "IT Aspirant, |"
      7: "text-4xl md:text-6xl font-semibold tracking-widest text-black", // "Full-Stack Developer, |"
      8: "text-4xl md:text-5xl font-semibold tracking-widest text-black", // "MERN_ Stack Developer, |"
    };
    return styles[lineIndex] || "text-3xl text-black";
  };

  return (
    <section id="about-section" className="h-[200vh] pt-40 w-full relative bg-blue-50">
      <motion.h1
        className="sticky top-16 text-6xl ml-56 cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        3/7, About-ME.
      </motion.h1>

      <div className="absoute pt-20 h-screen py-20 pl-80 sticky top-16 bg-blue-50">
        <div
          ref={containerRef}
          className="relative w-full h-full cursor-pointer"
        >
          {characters.map((char, index) => (
            <div
              key={char.id}
              className={`absolute flex items-center justify-center font-bold pointer-events-none select-none bg-white rounded-xl shadow-lg transition-all duration-150 ${getCharStyle(char.lineIndex)}`}
              style={{
                left: `${char.x}px`,
                top: `${char.y}px`,
                width: `${char.width}px`,
                height: `${char.height}px`,
                transform: `rotate(${char.rotation}deg) scale(${1 + Math.abs(char.vx) * 0.02})`,
                zIndex: index + 1000,
                border: '2px solid #e5e7eb',
                background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                boxShadow: `
                  0 4px 20px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `,
                transition: char.isReturning ? 
                  'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 
                  'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <span className="transform transition-transform duration-150 hover:scale-110">
                {char.char}
              </span>
            </div>
          ))}

          {/* Hover Hint */}
          {isFalling && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full text-lg backdrop-blur-sm">
              ✨ Hover over characters to make them jump and move
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;