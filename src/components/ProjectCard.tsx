import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl
}) => {
  return <motion.div className="rounded-xl overflow-hidden h-full flex flex-col" whileHover={{
    y: -5
  }} transition={{
    duration: 0.3
  }}>
      <div className="h-48 bg-cover bg-center" style={{
      backgroundImage: `url(${image})`
    }}></div>
      <div className="flex-1 p-6 border border-t-0 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-b-xl flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
              {tag}
            </span>)}
        </div>
        <div className="flex gap-3 mt-auto">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-1 text-sm">
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center flex items-center justify-center gap-1 text-sm">
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>;
};