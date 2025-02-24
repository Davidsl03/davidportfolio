"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 p-4 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">David Adegbite</h1>
          <ul className="hidden md:flex space-x-6 text-white">
            {["HOME", "PROJECTS", "TECHNOLOGIES", "ABOUT", "CONTACT"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1, color: "#6a0dad" }}
                  className={`cursor-pointer transition ${
                    activeSection === item.toLowerCase()
                      ? "text-cyanGlow drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]"
                      : ""
                  }`}
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              )
            )}
          </ul>
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-xl z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-16 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 p-4 flex flex-col space-y-4 text-center z-50"
            >
              {["HOME", "PROJECTS", "TECHNOLOGIES", "ABOUT", "CONTACT"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="text-white text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
