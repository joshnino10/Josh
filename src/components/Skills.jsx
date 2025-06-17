/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import react from "/src/assets/react-original.svg";
import javascript from "/src/assets/javascript-original.svg";
import typescript from '../assets/typescript-original.svg'
import html from "/src/assets/html-original.svg";
import css from "/src/assets/css-original.svg";
import tail from "/src/assets/tailwindcss-original.svg";
import node from "/src/assets/node-original.png";
import gitz from "/src/assets/git-original.svg";
import gitzH from "/src/assets/github-original.svg";
import nupat from "/src/assets/nupat.jpg";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "React Native",
      level: 90,
      icon: react,
      color: "from-blue-500 to-blue-600",
    },

    {
      name: "React",
      level: 70,
      icon: react,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "JavaScript",
      level: 70,
      icon: javascript,
      color: "from-yellow-400 to-yellow-500",
    },
    {
      name: "Typescript",
      level: 80,
      icon: typescript,
      color: "from-yellow-400 to-yellow-500",
    },
    {
      name: "HTML",
      level: 90,
      icon: html,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "CSS",
      level: 90,
      icon: css,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Tailwind",
      level: 70,
      icon: tail,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Node.js",
      level: 40,
      icon: node,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Git",
      level: 70,
      icon: gitz,
      color: "from-red-500 to-red-600",
    },
    {
      name: "Git-Hub",
      level: 70,
      icon: gitzH,
      color: "from-[#000000] to-[#111111]",
    },
    
  ];

  const certifications = [
   
    {
      name: "Front-end Mobile Development Certificate",
      issuer: "Nupat Code Camp",
      year: 2025,
      link: "https://nupat.africa/NUP-CCP-24009006",
      image: nupat,
      skills: ["HTML/CSS", "JavaScript", "Responsive Design"],
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & <span className="text-blue-600">Certifications</span>
        </motion.h2>

        <div className="">
          {/* Skills Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : 50 }} // No x-offset on mobile
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: window.innerWidth < 768 ? 0 : 0.2, // No delay on mobile
            }}
            viewport={{
              once: true,
              margin: window.innerWidth < 768 ? "0px" : "-100px",
            }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              My <span className="text-blue-600">Achievements</span>
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={window.innerWidth < 768 ? {} : { y: -5 }} // hover effect disabled on mobile
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
                  initial={
                    window.innerWidth < 768 ? { opacity: 1 } : { opacity: 0 }
                  } // Immediate show on mobile
                  whileInView={window.innerWidth < 768 ? {} : { opacity: 1 }} // Only animate on desktop
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={cert.image}
                        alt={cert.issuer}
                        className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-medium mb-1">{cert.name}</h4>
                      <p className="text-gray-600 mb-2">
                        {cert.issuer} • {cert.year}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {cert.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        View Certificate
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Visualization */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Skills <span className="text-blue-600">Showcase</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 rounded-lg mb-2"
                />
                <div className="text-center">
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-gray-500">{skill.level}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
