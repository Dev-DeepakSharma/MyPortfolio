import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">MySite</h1>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-600"
        >
          {open ? <X /> : <Menu />}
        </button>
        <ul
          className={`flex flex-col md:flex-row absolute md:static bg-white left-0 w-full md:w-auto transition-all duration-300 ${
            open ? "top-16" : "top-[-400px]"
          }`}
        >
          <li className="mx-4 my-2 md:my-0">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li className="mx-4 my-2 md:my-0">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li className="mx-4 my-2 md:my-0">
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
