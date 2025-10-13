import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, FileText } from 'lucide-react';
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Azeez Abass
          </motion.h1>
          <motion.h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            Full-Stack MERN Developer & Software Engineer
          </motion.h2>
          <motion.p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            I build scalable web apps, fintech products, and automation tools.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }}>
            <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium">
              <Github size={18} />
              View Projects
            </a>
            <a href="#" className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium">
              <FileText size={18} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="absolute bottom-10 left-0 right-0 flex justify-center hidden md:flex" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1.2
      }}>
          <a href="#about" className="animate-bounce p-2" aria-label="Scroll to About section">
            <ArrowDown />
          </a>
        </motion.div>
      </div>
    </section>;
};