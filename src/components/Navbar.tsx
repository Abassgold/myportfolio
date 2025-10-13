import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}
export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Tech Stack',
    href: '#tech-stack'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? `${theme === 'dark' ? 'bg-black/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md shadow-sm'}` : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a href="#home" className="text-2xl font-bold tracking-tight" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }}>
          Azeez<span className="text-blue-600">.</span>
        </motion.a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-600 transition-colors">
              {link.name}
            </a>)}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
          </button>
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && <motion.div className="absolute top-full left-0 w-full md:hidden" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
            <div className={`py-4 px-4 shadow-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              {navLinks.map(link => <a key={link.name} href={link.href} className="block py-3 text-center hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>)}
            </div>
          </motion.div>}
      </div>
    </header>;
};