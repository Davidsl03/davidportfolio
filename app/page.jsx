"use client"
import Hero from '@components/Hero';
import React from 'react'
import {motion} from "framer-motion"
import RecentProjects from '@components/RecentProjects';
import Technologies from '@components/Technologies';
import About from '@components/About';
import Contact from '@components/Contact';

const Home = () => {
  return (
    <main className="sm:px-10 px-5  bg-spaceBlack mx-auto flex justify-center items-center ">
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-deepNavy via-galaxyPurple to-spaceBlack opacity-80 blur-3xl"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <div className='w-full'>
            <Hero />
            <RecentProjects />
            <Technologies />
            <About />
            <Contact />
        </div>
        
    </main>
)
}

export default Home;