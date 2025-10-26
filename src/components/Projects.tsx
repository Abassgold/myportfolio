"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import Link from 'next/link';
export const Projects = () => {
  const projects = [{
    id: 'zakazai',
    title: 'Zakazai',
    description: 'An innovative clean energy company developing zero-emission power systems for homes, businesses, and EVs to promote a sustainable future.',
    image: 'https://res.cloudinary.com/abasskola/image/upload/v1727891817/sakazai_vm4xmu.png',
    tags: ['Html', 'Css', 'Booststrap', 'Javascript', 'Firebase'],
    demoUrl: 'https://boisterous-cuchufli-94d070.netlify.app/',
    repoUrl: 'https://github.com/Abassgold/Figma'
  }, {
    id: 'exclusive',
    title: 'Exclusive Varieties',
    description: 'A MERN stack eCommerce platform offering a wide range of products with secure payments for a seamless and reliable shopping experience.',
    image: 'https://res.cloudinary.com/abasskola/image/upload/v1727892405/exclusive_bh9cg7.png',
    tags: ['Reactjs', 'TailwindCss', 'Nodejs', 'Redux'],
    demoUrl: 'https://theexclusiv.vercel.app/',
    repoUrl: 'https://github.com/Abassgold/myEcommerce'
  }, {
    id: 'natninja',
    title: 'Netninja-clone',
    description: 'A replica of the Net Ninja YouTube channel built with HTML, Bootstrap, and JavaScript, offering a centralized, user-friendly platform for learning web development.',
    image: 'https://abasskola.vercel.app/netninja.png',
    tags: ['Html', 'Booststarp', 'Javascript'],
    demoUrl: 'https://netninnja.netlify.app/',
    repoUrl: 'https://github.com/Abassgold/Netninja-clone'
  }, {
    id: 'flozap',
    title: 'FloZap',
    description: 'A scalable fintech platform for buying virtual numbers, eSIMs, trading gift cards, and performing secure crypto transactions for local and global users.',
    image: 'https://abasskola.vercel.app/flozap.png',
    tags: ['Nextjs', 'GraphQL', 'Node.js', 'MongoDB', 'BullMq', 'Api'],
    demoUrl: 'www.flozap.com.ng',
    repoUrl: 'https://github.com/Abassgold/flozap'
  }, {
    id: 'kobodrop',
    title: 'Kobodrop',
    description: 'A smart finance app that helps you manage, track, and control your money anytime, anywhere, empowering you to spend smarter with Kobodrop.',
    image: '/kobdrops.png',
    tags: ['React', 'Firebase', 'Node.js', 'Express'],
    demoUrl: 'https://kobodrop.netlify.app/',
    repoUrl: 'https://github.com/Abassgold/kobodrops'
  }, {
    id: 'borrow',
    title: 'BorrowQ',
    description: 'A fast and secure loan platform offering quick applications and instant approvals to help you get the financial support you need.',
    image: '/borrowQ.png',
    tags: ['Next.js', 'TailwindCss', 'Api route'],
    demoUrl: 'https://borrowq.vercel.app/',
    repoUrl: 'https://github.com'
  }];
  return <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              My Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
            </h2>
            <Link href="/projects" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => <motion.div key={project.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <ProjectCard {...project} />
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};