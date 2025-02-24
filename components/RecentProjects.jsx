import React from 'react'
import {motion} from "framer-motion"

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

        </div>
    </section>
  )
}

export default RecentProjects