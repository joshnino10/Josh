/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Twitter, ArrowRight, Download } from "lucide-react";
import Josh from "../assets/josh.jpeg"

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroContent = {
    greeting: "Hi, I'm",
    name: "Nduka, JOSHUA,",
    roles: [
      "Frontend Developer",
      2000,
      "Mobile App Developer",
      3000,
   
    ],
    description: [
      "I'm a passionate React Native developer who specializes in building high-performance, cross-platform mobile applications that deliver exceptional user experiences",
      "With little knowledge in JavaScript, TypeScript, and the React ecosystem, I transform ideas into polished mobile apps that work seamlessly across iOS and Android platforms."
    
    ],
    cta: "Download My Resume",
    resumeUrl: "https://drive.google.com/file/d/1TyQPvsHHsRLM1NSUCrsmBP9OnMbsVHQG/view?usp=drivesdk", // Make sure this file exists in your public folder
    socialLinks: [
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
    ],
  };

  const imageParallaxStyle = {
    transform: `translateY(${scrollY * 0.1}px)`,
  };

  // Cursor follower effect
  const cursorFollowers = [...Array(2)].map((_, i) => ({
    style: {
      left: `${cursorPosition.x - 10 + i * 5}px`,
      top: `${cursorPosition.y - 10 + i * 5}px`,
      transition: `all ${0.3 + i * 0.1}s ease-out`,
      opacity: 0.8 - i * 0.2,
    },
  }));

  return (
    <section
      id="home"
     className="min-h-4xl flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden relative"
      aria-label="Introduction section"
    >
      {/* Cursor followers */}
      {cursorFollowers.map((follower, i) => (
        <motion.div
          key={i}
          className="fixed w-8 h-8 rounded-full border-2 border-amber-400 pointer-events-none z-50"
          style={follower.style}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8 - i * 0.2, 1, 0.8 - i * 0.2],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.article
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <header className="space-y-4">
            <motion.p
              className="text-2xl md:text-3xl font-medium text-amber-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {heroContent.greeting}
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-amber-400 block mt-2 bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600 hover:text-transparent transition-all duration-500">
                {heroContent.name}
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-semibold text-gray-300 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypeAnimation
                sequence={heroContent.roles}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-purple-300"
                style={{ display: "inline-block" }}
              />
            </motion.div>
          </header>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {heroContent.description.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg md:text-xl leading-relaxed text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Resume Download Button */}
            <motion.a
              href={heroContent.resumeUrl}
              download="Olawale-Oluwafemi-Resume.pdf"
              className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 overflow-hidden group shadow-lg shadow-purple-500/25"
              aria-label="Download my resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {heroContent.cta}
                <motion.span
                  animate={{ x: isHovering ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Download size={18} />
                </motion.span>
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 1 : 0 }}
              />
            </motion.a>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {heroContent.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 p-2 rounded-full bg-slate-800 hover:bg-slate-700 shadow-lg hover:shadow-amber-500/20"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.article>

        {/* Profile Image */}
        <motion.figure
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="relative w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-2xl overflow-hidden border-4 border-amber-400 shadow-2xl shadow-purple-500/30 group hover:shadow-amber-500/40 transition-all duration-500"
            style={imageParallaxStyle}
          >
            <img
              src={Josh}
              alt="Portrait of JOSHUA, NDUKA IFEANYICHUKWU"
              className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              width={700}
              height={700}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 border-8 border-transparent group-hover:border-amber-400/30 transition-all duration-500 rounded-xl" />

            {/* Floating tech badges */}
            <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {["React Native","React", "Tailwind","Javascript","TypeScript"].map((tech, i) => (
                <motion.span
                  key={i}
                  className="bg-slate-800/90 text-amber-400 px-3 py-1 rounded-lg text-sm font-medium border border-amber-500/20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.figure>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/10 to-amber-400/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0.1,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center"
        >
          <motion.div
            className="w-1 h-2 bg-amber-400 rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;