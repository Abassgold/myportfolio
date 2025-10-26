import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}
export const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  image,
  featured = false
}) => {
  return <motion.div className={`rounded-xl overflow-hidden h-full flex flex-col ${featured ? 'md:col-span-2 md:flex-row' : ''}`} whileHover={{
    y: -5
  }} transition={{
    duration: 0.3
  }}>
      <div className={`${featured ? 'md:w-1/2' : ''} h-48 bg-cover bg-center`} style={{
      backgroundImage: `url(${image})`
    }}></div>
      <div className={`${featured ? 'md:w-1/2' : ''} flex-1 p-6 border border-t-0 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-b-xl flex flex-col`}>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 gap-4">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {excerpt}
        </p>
        <Link href={`/blog/${id}`} className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors mt-auhref">
          Read More
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>;
};