'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Tech {
  name: string;
  icon: string;
}

interface TechCategoryProps {
  title: string;
  techs: Tech[];
}

export const TechStack: React.FC = () => {
  const technologies = {
    frontend: [
      { name: 'React', icon: '/react.svg' },
      { name: 'Next.js', icon: '/nextjs.svg' },
      { name: 'Tailwind CSS', icon: '/tailwind.png' },
    ],
    backend: [
      { name: 'Node.js', icon: '/nodejs.svg' },
      { name: 'Express', icon: '/express-original.svg' },
      { name: 'MongoDB', icon: '/mongodb-original.svg' },
    ],
    tools: [
      { name: 'Git', icon: '/git-original.svg' },
      { name: 'Docker', icon: '/docker-original.svg' },
      { name: 'Postman', icon: '/getpostman-icon.svg' },
    ],
    others: [
      { name: 'WebSockets', icon: '/socketio-original.svg' },
      { name: 'TypeScript', icon: '/typescript-original.svg' },
      { name: 'Redux', icon: '/redux-original.svg' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const TechCategory: React.FC<TechCategoryProps> = ({ title, techs }) => (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-6 text-blue-600">{title}</h3>
      <motion.div
        className="grid grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-lg bg-gray-100 dark:bg-gray-800 p-3">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={48}
                height={48}
                className="object-contain filter dark:invert-[0.15]"
              />
            </div>
            <span className="text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
            Tech Stack
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <TechCategory title="Frontend" techs={technologies.frontend} />
            <TechCategory title="Backend" techs={technologies.backend} />
            <TechCategory title="Tools" techs={technologies.tools} />
            <TechCategory title="Others" techs={technologies.others} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
