"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'


const Navbar = () => {

  const [activeSection, setActionSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActionSection(section.id)
        }
      })
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll)
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 p-4 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">David Adegbite</h1>
        <ul className="flex space-x-6 text-white">
          {["HOME", "PROJECTS", "TECHNOLOGIES","ABOUT", "CONTACT"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color:"#6a0dad" }}
              className={`cursor-pointer transition ${
                activeSection === item.toLowerCase()
                  ? "text-cyanGlow drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]"
                  : ""
              }`}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header> 
  )
}

export default Navbar