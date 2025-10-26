import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react';

const Whatsapp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M16.65 13.54c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01a1 1 0 0 0-.73.34c-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.18 1.94 2.97 4.7 4.07 2.76 1.09 2.76.73 3.26.69.5-.04 1.61-.65 1.84-1.27.23-.63.23-1.17.16-1.27-.07-.09-.25-.14-.52-.27Z" />
    <path d="M12 2a9.91 9.91 0 0 0-8.46 15.06L2 22l5.11-1.49A9.91 9.91 0 1 0 12 2Zm0 17.94a7.97 7.97 0 0 1-4.07-1.12l-.29-.17-3.03.88.9-2.95-.19-.3A7.96 7.96 0 1 1 12 19.94Z" />
  </svg>
);

const X = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M18.25 2H21l-6.51 7.43L21.88 22h-5.52l-4.33-6.49L6.94 22H3.25l7.02-8.02L2.25 2h5.57l3.91 5.94L18.25 2Zm-1.93 18h1.53L8.75 4h-1.5L16.32 20Z" />
  </svg>
);

const quickLinks = [
  { label: 'About', Link: '#about', icon: <ArrowUpRight /> },
  { label: 'Projects', Link: '#projects', icon: <ArrowUpRight /> },
  { label: 'Blog', Link: '#blog', icon: <ArrowUpRight /> },
  { label: 'Contact', Link: '#contact', icon: <ArrowUpRight /> },
  { label: 'Resume', Link: 'https://fonts.google.com/specimen/Space+Grotesk', icon: <ArrowUpRight /> },
  { label: 'Skills', Link: '#tech-stack', icon: <ArrowUpRight /> },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 leading-relaxed">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 justify-center gap-8">
          {/* Left Section */}
          <div>
            <h1 className="text-2xl md:text-3xl text-blue-800 font-semibold mb-2">
              Let&apos;s work together
            </h1>
            <p className="leading-relaxed mb-2">
              I&apos;m always excited to connect with fellow developers, potential clients, and anyone passionate about technology.
              Whether you have a project in mind or just want to say hello, I&apos;m here to collaborate.
            </p>

            <div className="mt-2 flex gap-4 items-center group transition-all duration-300">
              <Link href="https://github.com/Abassgold">
                <Github size={18} className="hover:text-blue-600 duration-300 cursor-pointer" />
              </Link>
              <Link href="https://api.whatsapp.com/qr/BHKITMXTHP2PE1?autoload=1&app_absent=0">
                <Whatsapp className="hover:text-blue-600 duration-300 w-5 cursor-pointer" />
              </Link>
              <Link href="https://www.linkedin.com/in/azeez-abass-4b8015222/">
                <Linkedin size={18} className="hover:text-blue-600 duration-300 cursor-pointer" />
              </Link>
              <Link href="https://x.com/Kolawolegold10?t=B_F2wdRvQZGrLJD4Zu62kg&s=09">
                <X className="hover:text-blue-600 duration-300 w-5 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-xl md:2xl text-gray-600 mb-2">Quick Links</h1>
            <div className="grid grid-cols-2">
              {quickLinks.map((item) => (
                <Link href={item.Link} key={item.label} className="cursor-pointer">
                  <button className="group flex items-center gap-2 transition-all duration-300">
                    <span>{item.label}</span>
                    <span className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      {item.icon}
                    </span>
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl md:2xl text-gray-600 mb-2">Get in Touch</h2>
            <p className="my-2">
              Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
            </p>
            <div className="mt-2">
              <Link
                href="mailto:abasskola10@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex w-full cursor-pointer justify-center gap-2 items-center p-2 rounded-md bg-blue-900 text-white hover:bg-blue-800 transition">
                  <Mail />
                  Send me an Email
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-200 dark:border-gray-800 pt-6 mt-4">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Azeez Abass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
