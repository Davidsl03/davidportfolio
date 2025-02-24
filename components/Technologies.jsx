import React from 'react'
import {motion} from 'framer-motion'
import {SiReact, SiJavascript, SiTailwindcss, SiExpo, SiExpress, SiNextdotjs, SiMongodb, SiGit} from "react-icons/si"

const Technologies = () => {
    const techStack = [
        { name: "React", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "React Native (Expo)", icon: <SiExpo /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Git", icon: <SiGit /> },
      ];
  return (
    <section
        id='technologies' 
        className="py-20"
    >
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{ once: true }}
            className='sm:text-6xl text-4xl text-center'
        >
            <span className='text-cyanGlow'>Technologies</span> I use
        </motion.h1>
        <div className=" pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-5xl text-cyanGlow">{tech.icon}</div>
            <p className="text-lg font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
    
  )
}

export default Technologies