"use client"
import { useState } from 'react'
import {motion} from 'framer-motion'
import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Contact = () => {

  const [status, setStatus] = useState('idle')


  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading');
    const formData = new FormData(e.target);
    const email = formData.get("email")
    const name = formData.get("name");
    const message = formData.get("message");

   
    if (!name || !email || !message) {
      alert("All fields are required!");
      setStatus("idle");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const res = await fetch("https://formspree.io/f/mzzdlevl",{
      method:"POST",
      body: formData,
      headers: { "Accept": "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }

  }
  return (
    <section
        id='contact'
        className='py-20 min-h-screen flex items-center justify-center  bg-deepNavy'
    >
         <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Let's Connect</h2>
        <p className="text-center text-gray-300 mb-6">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        
        {status === "success" && <p className="text-green-400 text-center mb-4">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-400 text-center mb-4">Something went wrong. Try again.</p>}
     
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name='name'
            placeholder="Your Name"
            className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue h-32"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "loading"}
            className="w-full p-3 bg-neonBlue text-white font-bold rounded-lg hover:shadow-lg hover:bg-cyanGlow transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        
        <div className="flex justify-center mt-6 space-x-6 text-white">
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Davidsl03" className="text-2xl ">
            <FaGithub className='hover:text-cyanGlow' />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://wa.me/qr/ZV5REJM7MNHUK1" className="text-2xl">
            <FaWhatsapp className='hover:text-cyanGlow' />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/david-adegbite-76082b241" className="text-2xl">
            <FaLinkedin className='hover:text-cyanGlow'/>
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="mailto:adegbitedavid255@gmail.com" className="text-2xl">
            <FaEnvelope className='hover:text-cyanGlow'/>
          </motion.a>
        </div>
      </motion.div>


    </section>
  )
}

export default Contact