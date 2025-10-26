'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}
const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  index
}) => {
  return <motion.div className="mb-10 relative pl-8 border-l-2 border-blue-600 dark:border-blue-500" initial={{
    opacity: 0,
    x: -20
  }} whileInView={{
    opacity: 1,
    x: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }}>
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
        <Calendar size={14} className="mr-1" />
        <span>{period}</span>
      </div>
    </div>
    <h4 className="text-lg font-medium text-blue-600 mb-3 flex items-center">
      <Briefcase size={16} className="mr-2" />
      {company}
    </h4>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>;
};
export const Experience = () => {
  const experiences = [{
    title: 'Frontend Developer',
    company: 'SQI • Ibadan, Nigeria',
    period: 'Feb 2021 - Aug 2024',
    description: 'Collaborated with a fellow developer to design and implement user friendly flight booking pages for SkyEasem,with key features like flight search with real-time filtering, dynamic seat selection, secure payment integration,user authentication, responsive design for all devices, and booking history management. Delivered a seamless and intuitive user experience.'
  }, {
    title: 'Frontend Engineer',
    company: 'Hexcore Ltd • Lagos, Nigeria',
    period: 'Nov 2024 - Present',
    description: 'Optimized a client application’s frontend by implementing service workers, prefetching strategies, and integrating a Content Delivery Network (CDN), significantly boosting speed and performance.'
  }, {
    title: 'Frontend Developer',
    company: 'TheXclusive • Lagos, Nigeria',
    period: 'Sep 2024 - Feb 2025',
    description: 'Designed and built a feature-rich eCommerce website using the MERN stack, offering a seamless shopping experience across various product categories.'

  },
   {
    title: 'Full-stack Developer',
    company: 'FloZap',
    period: 'May 2025 - Present',
    description: 'Built and maintained scalable fintech features including virtual number management, crypto transactions, and utility payment systems. Developed responsive user interfaces with React and optimized backend APIs for performance and security using Node.js and MongoDB. Collaborated with a cross-functional team to deliver seamless digital experiences.'

  }];
  return <section id="experience" className="py-20 md:py-32 bg-gray-50 dark:bg-black">
    <div className="container mx-auto px-4">
      <motion.div className="max-w-4xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
          Work Experience
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
        </h2>
        <div className="mt-12">
          {experiences.map((experience, index) => <ExperienceItem key={index} index={index} title={experience.title} company={experience.company} period={experience.period} description={experience.description} />)}
        </div>
      </motion.div>
    </div>
  </section>;
};