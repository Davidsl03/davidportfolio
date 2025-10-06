"use client"
import React from 'react'
import { motion } from 'framer-motion'
import MagicButton from './ui/MagicButton'
import { FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
    id="home"
    className="relative min-h-screen flex flex-col justify-center items-center text-white text-center px-6 overflow-hidden"
  >
  
    <div className="relative z-10 w-full max-w-4xl">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-gray-300"
      >
        Crafting Web Magic with Code & Motion
      </motion.p>
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
      >
        Transforming Concepts into Seamless <br />
        <span className="text-cyanGlow">User Experiences</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-4 text-xl text-gray-300"
      >
        Hey, I'm <span className="text-white font-semibold">David</span>, a <span className="text-cyanGlow">Next.js Developer</span> based in Nigeria.
      </motion.p>
      <div className='pt-4'>
        <motion.a href="/"
          download
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <MagicButton title={<>Download Resume<FaFileAlt className='ml-2 '/></>} />
        </motion.a>
      </div>
    </div>
  </section>
  )
}

export default Hero
