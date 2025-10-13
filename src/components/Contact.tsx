import React from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();
  const onSubmit = async data => {
    // This would be connected to a real email service in production
    console.log('Form data:', data);
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Message sent successfully!');
  };
  return <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto" initial={{
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm currently open to freelance opportunities and full-time
                positions. Feel free to reach out if you have a project in mind
                or just want to connect!
              </p>
              <div className="space-y-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                  <span>linkedin.com/in/azeez-abass</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github size={20} />
                  <span>github.com/azeez-abass</span>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Phone size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input id="name" type="text" className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md bg-white dark:bg-gray-900`} {...register('name', {
                  required: 'Name is required'
                })} />
                  {errors.name && <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input id="email" type="email" className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md bg-white dark:bg-gray-900`} {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })} />
                  {errors.email && <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>}
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea id="message" rows={5} className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md bg-white dark:bg-gray-900`} {...register('message', {
                  required: 'Message is required'
                })}></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 w-full">
                  {isSubmitting ? 'Sending...' : <>
                      <Send size={18} />
                      Send Message
                    </>}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};