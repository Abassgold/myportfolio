// import React, { lazy } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';
// import { Navbar } from '../components/Navbar';
// import { Footer } from '../components/Footer';
// import Link from 'next/link';



//   const projects = {
//     'fintrack-dashboard': {
//       title: 'FinTrack Dashboard',
//       description: 'A comprehensive financial tracking platform with real-time data visualization and expense management.',
//       fullDescription: `
//         <p>FinTrack Dashboard is a comprehensive financial management application designed to help users track expenses, manage budgets, and visualize financial data in real-time.</p>
//         <h3>Key Features</h3>
//         <ul>
//           <li>Real-time expense tracking and categorization</li>
//           <li>Interactive dashboards with customizable charts</li>
//           <li>Budget planning and monitoring tools</li>
//           <li>Financial goal setting and progress tracking</li>
//           <li>Secure user authentication and data encryption</li>
//           <li>Mobile-responsive design for on-the-go access</li>
//         </ul>
//         <h3>Technical Implementation</h3>
//         <p>The application was built using the MERN stack (MongoDB, Express, React, and Node.js) with a focus on performance and security. The frontend utilizes React with Redux for state management, while the backend is powered by Express and MongoDB.</p>
//         <p>Data visualization is implemented using D3.js, allowing for dynamic and interactive charts that update in real-time as users input new financial data. The application also leverages WebSockets for real-time updates across multiple devices.</p>
//         <h3>Challenges and Solutions</h3>
//         <p>One of the main challenges was ensuring data accuracy and consistency across different financial categories and time periods. This was addressed by implementing a robust validation system on both the frontend and backend, as well as creating a flexible data model that could accommodate various financial scenarios.</p>
//         <p>Another challenge was optimizing the performance of the data visualization components, especially when dealing with large datasets. This was resolved by implementing data aggregation techniques and lazy loading for historical data.</p>
//       `,
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//       tags: ['React', 'Node.js', 'MongoDB', 'D3.js', 'Redux', 'WebSockets', 'Express'],
//       demoUrl: 'https://example.com',
//       repoUrl: 'https://github.com',
//       date: 'January 2023',
//       screenshots: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80']
//     },
//     // Add other projects here with similar structure
//     default: {
//       title: 'Project Not Found',
//       description: 'The requested project could not be found.',
//       fullDescription: '<p>Please go back to the projects page and select a valid project.</p>',
//       image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80',
//       tags: [],
//       demoUrl: '',
//       repoUrl: '',
//       date: '',
//       screenshots: []
//     }
//   };
//   // const project = projects[id] || projects.default;
//   return <>
//       <Navbar theme={theme} toggleTheme={toggleTheme} />
//       <main className="pt-20">
//         <div className="container mx-auto px-4 py-12">
//           <Link href="/#projects" className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-700 transition-colors">
//             <ArrowLeft size={16} className="mr-2" />
//             Back to Projects
//           </Link>
//           <div className="max-w-4xl mx-auto">
//             <motion.div initial={{
//             opacity: 0,
//             y: 20
//           }} animate={{
//             opacity: 1,
//             y: 0
//           }} transition={{
//             duration: 0.5
//           }}>
//               <h1 className="text-3xl md:text-4xl font-bold mb-4">
//                 {project.title}
//               </h1>
//               <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
//                 <Calendar size={14} className="mr-1" />
//                 <span>{project.date}</span>
//               </div>
//               <div className="mb-8 flex flex-wrap gap-2">
//                 {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
//                     {tag}
//                   </span>)}
//               </div>
//               <div className="w-full h-80 bg-cover bg-center rounded-xl mb-8" style={{
//               backgroundImage: `url(${project.image})`
//             }}></div>
//               <div className="prose prose-lg dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{
//               __html: project.fullDescription
//             }}></div>
//               {project.screenshots && project.screenshots.length > 0 && <div className="mb-12">
//                   <h2 className="text-2xl font-bold mb-6">
//                     Project Screenshots
//                   </h2>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     {project.screenshots.map((screenshot, index) => <div key={index} className="rounded-lg overflow-hidden shadow-lg">
//                         <img src={screenshot} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto" />
//                       </div>)}
//                   </div>
//                 </div>}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium">
//                     <ExternalLink size={18} />
//                     Live Demo
//                   </a>}
//                 {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium">
//                     <Github size={18} />
//                     View Source Code
//                   </a>}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>;
// };

import React from 'react'

const ProjectDetail = () => {
  return (
    <div>ProjectDetail</div>
  )
}

export default ProjectDetail