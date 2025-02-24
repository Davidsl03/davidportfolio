import React from 'react'
import {motion} from "framer-motion"
import Image from '@node_modules/next/image'

const About = () => {
  return (
    <section id='about'
        className='py-20 max-w-6xl mx-auto'
    >
        <motion.h1
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }} 
             transition={{duration: 1, ease: "easeOut"}}
             className='sm:text-6xl text-4xl text-center'
             viewport={{ once: true }}
        >
            <span className='text-cyanGlow'>About</span> Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl text-gray-300">
            Hey! I'm David, a passionate Next.js developer focused on crafting seamless
            user experiences with motion and interactivity.My expertise spans across both 
            front-end and back-end development, allowing me to build robust, scalable, 
            and user-friendly web applications. I am committed to leveraging my technical
             skills and problem solving mindset to deliver innovative solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden md:block mx-auto"
        >
          <Image
            src="/assets/images/davidsportrait.png" 
            alt="David's Portrait"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

    
      <div className="mt-16">
        <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
        >
            My Journey
        </motion.h3>
        <div className="relative border-l-4 border-cyanGlow pl-6 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 p-4 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold"> July 2022 - October 2022</h4>
            <p className="text-gray-300">Started My Journey in Tech, began learning web development as an Intern in EdutamsLTD.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 p-4 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold">March 2023</h4>
            <p className="text-gray-300">Received my Certification in Responsive Web design from freeCodeCamp</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 p-4 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold">March 2023 - June 2023</h4>
            <p className="text-gray-300">I worked on improving my web development skills by collaborating with projects online</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 p-4 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold">July 2023 - November 2023</h4>
            <p className="text-gray-300">I Worked as a developer intern at Alpha Beta Consulting LLP where I worked closely with senior developers to integrate REST APIs efficiently </p>
          </motion.div>
        </div>
      </div>
      
    </section> 
  )
}

export default About