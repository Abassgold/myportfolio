'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Profile Image */}
            <div className="md:w-1/3 flex justify-center">
              <motion.div
                className="rounded-full overflow-hidden border-4 border-blue-600 w-64 h-64 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/abass-pic.png"
                  alt="Azeez Abass"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover bg-white"
                  priority
                />
              </motion.div>
            </div>

            {/* About Text */}
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I&apos;m a passionate Full-Stack Developer specializing in the
                MERN stack with over 2 years of professional experience building
                web applications and software solutions. My journey in tech
                began with a deep curiosity about how digital products work,
                which evolved into a career focused on creating elegant
                solutions to complex problems.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                I have a particular interest in fintech, SaaS products, and
                automation tools, where I&apos;ve helped startups and established
                companies alike to build scalable, user-friendly applications.
                My approach combines technical expertise with a keen eye for
                user experience, ensuring that the solutions I build are not
                just functional but also intuitive and enjoyable to use.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I&apos;m not coding, I enjoy contributing to open-source
                projects, mentoring junior developers, and staying updated with
                the latest technologies and industry trends. I&apos;m always
                looking for new challenges and opportunities to grow as a
                developer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
