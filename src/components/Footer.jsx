/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/joshnino10",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "http://linkedin.com/in/joshua-nduka-5a8424277",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:NdukaJoshua6@gmail.com",
      icon: Mail,
    },
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-black via-zinc-900 to-black text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4"
              >
                Nduka Joshua
              </motion.h2>
            </Link>
            <p className="text-gray-400 text-center md:text-left">
            Delivering sleek, modern mobile apps that elevate digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {navItems.map((item) => (
                <motion.li key={item.id} whileHover={{ x: 5 }}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} NDUKA JOSHUA. All rights
            reserved.
          </p>
          {/* <p className="text-gray-500 text-sm mt-2">
            Built with React, Tailwind CSS, and Framer Motion.
          </p> */}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
