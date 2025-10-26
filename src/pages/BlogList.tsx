import React from "react";
import { motion } from "framer-motion";
import { BlogCard } from "../components/BlogCard";
import { Footer } from "../components/Footer";



const BlogList= () => {
  const blogs = [
    {
      id: "building-scalable-apis",
      title: "Building Scalable APIs with Node.js and Express",
      excerpt:
        "Learn how to design and implement highly scalable RESTful APIs using Node.js and Express with best practices for error handling, validation, and authentication.",
      date: "June 15, 2023",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2070&q=80",
      featured: true,
    },
    {
      id: "react-performance",
      title: "Optimizing React Performance",
      excerpt:
        "Discover techniques to improve your React application's performance through memoization, code splitting, and efficient state management.",
      date: "May 22, 2023",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=2070&q=80",
    },
    // ...rest of your blogs
  ];

  return (
    <>
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Blog & Articles
              </h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={blog.featured ? "lg:col-span-2" : ""}
                  >
                    <BlogCard {...blog} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogList;
