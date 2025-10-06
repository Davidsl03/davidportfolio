import React from 'react'
import {motion} from "framer-motion"
import projects from '@data/Projects'
import Image from '@node_modules/next/image'

const RecentProjects = () => {
  return (
    <section id='projects'
        className='sm:py-20 py-10'
    >
        <motion.h1 className='text-center text-white sm:text-6xl text-4xl'
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 1.5, ease: "easeIn"}}
        >
            A selection of {' '}
            <span className='text-cyanGlow'>recent projects</span>
        </motion.h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
          {projects.map((project) => (
            <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-[#1b1b1b] rounded-xl p-6 max-w-sm w-full shadow-md hover:shadow-cyan-500/20 transition-shadow'
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className='rounded-lg object-cover mb-4'
            />
            <h3 className='text-white text-xl font-semibold mb-2'>{project.title}</h3>
            <p className='text-gray-300 text-sm mb-3'>{project.description}</p>
            <div className='flex items-center gap-3 flex-wrap'>
              {project.techStack.map((tech, index) => (
                <span key={index} className='flex items-center gap-1 text-sm text-cyanGlow'>
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>
          ))}
        </div>
    </section>
  )
}

export default RecentProjects