import React from 'react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Azeez Abass. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>;
};