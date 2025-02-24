import React from 'react'
import {motion} from 'framer-motion'


const Contact = () => {
  return (
    <section
        id='contact'
        className='py-20 '
    >
        <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{ once: true }}           
            className='sm:text-6xl text-4xl text-center'
        >
            Contact <span className='text-cyanGlow'>Me</span>
        </motion.h1>

    </section>
  )
}

export default Contact