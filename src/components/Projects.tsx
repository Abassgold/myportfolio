import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
export const Projects = () => {
  const projects = [{
    title: 'FinTrack Dashboard',
    description: 'A comprehensive financial tracking platform with real-time data visualization and expense management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'D3.js'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com'
  }, {
    title: 'TaskFlow',
    description: 'An automated workflow management system that helps teams streamline their processes and improve productivity.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Next.js', 'Express', 'MongoDB', 'WebSockets'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com'
  }, {
    title: 'PayEase',
    description: 'A secure payment processing solution for small businesses with integrated invoice management.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'Node.js', 'Stripe API', 'MongoDB'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com'
  }, {
    title: 'DevConnect',
    description: 'A social platform for developers to share projects, collaborate, and get feedback from the community.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com'
  }, {
    title: 'CloudStore',
    description: 'A scalable cloud storage solution with advanced file management and sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'Firebase', 'Node.js', 'Express'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com'
  }, {
    title: 'AI Content Generator',
    description: 'An AI-powered tool that generates high-quality content for blogs, social media, and marketing materials.',
    image: 'https://images.unsplash.com/photo-1677442135136-760302cb3148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Next.js', 'OpenAI API', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
            Featured Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
          </h2>
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