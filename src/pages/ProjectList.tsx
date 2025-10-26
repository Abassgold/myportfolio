import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';

const ProjectList = () => {
  const projects = [
    {
      id: 'fintrack-dashboard',
      title: 'FinTrack Dashboard',
      description: 'A comprehensive financial tracking platform with real-time data visualization and expense management.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'D3.js'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 'taskflow',
      title: 'TaskFlow',
      description: 'An automated workflow management system that helps teams streamline their processes and improve productivity.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2070&q=80',
      tags: ['Next.js', 'Express', 'MongoDB', 'WebSockets'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    // ...rest of the projects
  ];

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              All Projects
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProjectList;
