/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import ecommerce from "/src/assets/e-commerce.JPG"
import exchange from "/src/assets/exchange.JPG"


const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Ecommerce App",
      description:
        " sleek, modern eCommerce mobile application built to provide users with a seamless shopping experience. The app supports product browsing, detailed product views, cart management, and a secure checkout process, all within an intuitive, responsive interface. ",
      technologies: [
        "TypeScript",
        "JavaScript",
        "ReactNative",
        "Font Awesome",
      ],
      image: ecommerce,
      github: "https://github.com/joshnino10/E-Commerce",
      features: [
       
      ],
    },
    {
      title: "Josh Exchange",
      description:
        "Josh Exchange is a cross-platform mobile app built with React Native, designed to provide users with a seamless and secure experience for exchanging gift cards and cryptocurrencies like Bitcoin. The app emphasizes simplicity, speed, and transparency, allowing users to initiate and manage exchanges with just a few taps.",
      technologies: [
        "TypeScript",
        "JavaScript",
        "ReactNative",
        "Font Awesome",
      ],
      image: exchange,
      github: "https://github.com/joshnino10/JoshExchange",
      features: [
        
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-zinc-700 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-blue-400">Projects</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects showcasing my skills and
          problem-solving approach.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="h-80 bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredProject === index ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    {/* Features List (shown on hover) */}
                    <motion.ul
                      className="space-y-1 mb-4 text-sm text-gray-400"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredProject === index ? 1 : 0,
                        height: hoveredProject === index ? "auto" : 0,
                      }}
                    >
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="bg-blue-900/50 text-blue-300 text-xs px-3 py-1 rounded-lg border border-blue-800"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <motion.a
                      href={project.link}
                      className="flex-1 text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="flex-1 text-center text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
