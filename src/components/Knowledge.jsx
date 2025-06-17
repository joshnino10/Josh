import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      role: "Front-end Mobile Developer",
      company: "Nupat Technologies",
      period: "November 2024 - Present",
      highlights: [
        "CROSS-PLATFORM EXCELLENCE: Leveraging React Native's capabilities to deliver native-quality apps with shared codebases",
        "PERFORMANCE OPTIMIZATION: Implementing efficient state management, optimized rendering, and smooth animations ",
        "MODERN ARCHITECTURE: Using Redux, Context API, and custom hooks for robust application structure ",
        "THIRD-PARTY INTEGRATION: Seamlessly connecting apps with APIs, payment systems, push notifications, and device features ",
      
      ],
      skills: [
        "React Native",
        "React",
        "TailwindCSS",
        "Typescript",
        "Javascript",
        "Responsive Design",
        "Smooth Animation",
      ],
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional <span className="text-blue-600">Experience</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Timeline tabs */}
          <motion.div
            className="flex md:flex-col overflow-x-auto md:overflow-visible pb-2 md:pb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 px-4 py-3 text-left border-b-4 md:border-l-4 md:border-b-0 transition-all duration-300 ${
                  activeTab === index
                    ? "border-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
              >
                <span className="block font-medium">{exp.company}</span>
                <span className="block text-sm text-gray-500">
                  {exp.period}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Experience content */}
          <motion.div
            className="flex-grow bg-white rounded-xl shadow-md p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {experiences[activeTab].role}
              </h3>
              <p className="text-lg text-blue-600 font-semibold">
                {experiences[activeTab].company}
              </p>
              <p className="text-gray-500">{experiences[activeTab].period}</p>
            </div>

            <ul className="space-y-4">
              {experiences[activeTab].highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="flex-shrink-0 mt-1 mr-3 text-blue-500">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{highlight}</span>
                </motion.li>
              ))}
            </ul>

            {/* Skills chips */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experiences[activeTab].skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Knowledge;
