import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [section, setSection] = useState("main");

  // ✅ Menu Items (from your previous Drop_World code)
  const menuItems = [
    {
      title: "Home",
      color: "bg-gradient-to-r from-pink-50 to-pink-100",
      border: "border-pink-200",
      items: [
        // { name: "Add Customer", path: "/add-customer" },
        // { name: "Book Orders", path: "/book-orders" },
        // { name: "Loan Leads", path: "/loan-leads" },
      ],
    },
    {
      title: "About",
      color: "bg-gradient-to-r from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
      items: [
        // { name: "Instagram", path: "https://instagram.com" },
        // { name: "YouTube", path: "https://youtube.com" },
        // { name: "Twitter", path: "https://twitter.com" },
        // { name: "GitHub", path: "https://github.com" },
        // { name: "X", path: "https://x.com" },
      ],
    },
    {
      title: "Products",
      color: "bg-gradient-to-r from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
      items: [
        // { name: "Instagram", path: "https://instagram.com" },
        // { name: "YouTube", path: "https://youtube.com" },
        // { name: "Twitter", path: "https://twitter.com" },
        // { name: "GitHub", path: "https://github.com" },
        // { name: "X", path: "https://x.com" },
      ],
    },
    {
      title: "Contact",
      color: "bg-gradient-to-r from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
      items: [
        // { name: "Instagram", path: "https://instagram.com" },
        // { name: "YouTube", path: "https://youtube.com" },
        // { name: "Twitter", path: "https://twitter.com" },
        // { name: "GitHub", path: "https://github.com" },
        // { name: "X", path: "https://x.com" },
      ],
    },
    {
      title: "Blogs",
      color: "bg-gradient-to-r from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
      items: [
        // { name: "Instagram", path: "https://instagram.com" },
        // { name: "YouTube", path: "https://youtube.com" },
        // { name: "Twitter", path: "https://twitter.com" },
        // { name: "GitHub", path: "https://github.com" },
        // { name: "X", path: "https://x.com" },
      ],
    },
  ];

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const height = window.innerHeight;

    if (scrollY < height * 0.9) setSection("main");
    else if (scrollY < height * 1.9) setSection("home");
    else setSection("about");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      window.location.href = path;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 flex items-center justify-between px-10 z-20 transition-all duration-700 ${
        section === "main"
          ? "bg-transparent text-gray-900"
          : "bg-white/60 backdrop-blur-lg shadow-sm text-gray-900"
      }`}
    >
      {/* ===== Portfolio Text Animation ===== */}
      <motion.div
        className="absolute text-2xl font-semibold"
        initial={{ opacity: 0, x: 0 }}
        animate={{
          left:
            section === "main" ? "50%" : section === "home" ? "50%" : "3rem",
          opacity:
            section === "main"
              ? 0
              : section === "home" || section === "about"
              ? 1
              : 0,
          x: section === "home" ? "-50%" : section === "about" ? "0%" : "-50%",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Portfolio
      </motion.div>

      {/* ===== Middle Section (changes with scroll) ===== */}
      <AnimatePresence>
        {section === "home" && (
          <motion.div
            key="mid-links"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-lg font-medium"
          >
          </motion.div>
        )}

        {/* ===== Show Dropdown Menus on About Section ===== */}
        {section === "about" && (
          <motion.div
            key="dropdown-menus"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-10 text-base font-medium"
          >
            {menuItems.map((menu, index) => (
              <div key={index} className="relative group">
                <button className="hover:text-blue-600 flex items-center gap-x-2 font-semibold text-base transition-all duration-300 py-2 px-1 border-b-2 border-transparent hover:border-blue-400">
                  {menu.title}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 top-full w-72 rounded-xl shadow-2xl ${menu.color} ${menu.border} p-5 border backdrop-blur-sm`}
                >
                  <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                    {menu.title}
                  </h3>
                  <ul className="space-y-3">
                    {menu.items.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleNavigation(item.path)}
                        className="text-gray-700 text-sm font-medium hover:text-blue-600 cursor-pointer transition-all duration-200 p-2 rounded-lg hover:bg-white hover:shadow-md"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Right side — Night Mode (always visible) ===== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`absolute right-10 text-xl font-medium cursor-pointer transition-colors ${
          section === "main"
            ? "text-gray-900 hover:text-blue-600"
            : "text-gray-800 hover:text-blue-600"
        }`}
      >
        Night Mode
      </motion.div>
    </nav>
  );
};

export default Navbar;
