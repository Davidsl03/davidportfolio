"use client"
import React from 'react'
import {FaGithub, FaWhatsapp, FaLinkedin} from "react-icons/fa"
import { motion } from "framer-motion";

const Sidebar = () => {

  const socialLinks = [
    {icon:<FaGithub size={24}/>, link: "https://github.com/Davidsl03" },
    {icon:<FaWhatsapp size={24}/>, link: "https://wa.me/qr/ZV5REJM7MNHUK1" },
    {icon:<FaLinkedin size={24}/>, link: "https://www.linkedin.com/in/david-adegbite-76082b241" },

  ]
  return (
    <aside className='fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50'>
        {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-3 bg-white/10 rounded-full text-white hover:bg-galaxyPurple transition"
        >
          {social.icon}
        </motion.a>
      ))}
    </aside>
  )
}

export default Sidebar