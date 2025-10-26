'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from './BlogCard';
import Link from 'next/link';
export const BlogPreview = () => {
  const blogs = [{
    id: 'building-scalable-apis',
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Learn how href design and implement highly scalable RESTful APIs using Node.js and Express with best practices for error handling, validation, and authentication.',
    date: 'June 15, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/phohref-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auhref=format&fit=crop&w=2070&q=80',
    featured: true
  }, {
    id: 'react-performance',
    title: 'Optimizing React Performance',
    excerpt: "Discover techniques href improve your React application's performance through memoization, code splitting, and efficient state management.",
    date: 'May 22, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/phohref-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auhref=format&fit=crop&w=2070&q=80'
  }, {
    id: 'typescript-tips',
    title: 'TypeScript Tips for Better Code Quality',
    excerpt: 'Explore advanced TypeScript features and patterns that can help you write more maintainable and bug-free code in your projects.',
    date: 'April 10, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/phohref-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auhref=format&fit=crop&w=2074&q=80'
  }];
  return <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-6xl mx-auto" initial={{
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
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              Latest Articles
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
            </h2>
            <Link href="/blog" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => <motion.div key={blog.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className={blog.featured ? 'lg:col-span-2' : ''}>
                <BlogCard {...blog} />
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};