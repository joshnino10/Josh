/* eslint-disable no-unused-vars */
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactMethods = [
    {
      name: "Email",
      value: "Ndukajoshua6@gmail.com",
      icon: Mail,
      color: "from-blue-500 to-blue-600",
      action: (email) => `mailto:${email}?subject=Portfolio Inquiry`,
      buttonText: "Send Message",
      buttonIcon: Send,
    },
    {
      name: "WhatsApp",
      value: "+234 814 936 4188",
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      action: (number) =>
        `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(
          "Hello! I came across your portfolio and wanted to connect."
        )}`,
      buttonText: "Chat Now",
      buttonIcon: MessageCircle,
    },
    {
      name: "Call Me",
      value: "+234 814 936 4188",
      icon: Phone,
      color: "from-purple-500 to-purple-600",
      action: (number) => `tel:${number.replace(/\D/g, "")}`,
      buttonText: "Call Now",
      buttonIcon: Phone,
    },
    {
      name: "Location",
      value: "Lagos, Nigeria",
      icon: MapPin,
      color: "from-amber-500 to-amber-600",
      action: () => "https://maps.google.com/?q=Lagos,Nigeria",
      buttonText: "View Map",
      buttonIcon: MapPin,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/joshnino10",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "http://linkedin.com/in/joshua-nduka-5a8424277",
      icon: Linkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-black via-zinc-900 to-black dark:from-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Something Amazing
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Reach out
            through any channel below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className={`h-2 bg-gradient-to-r ${method.color}`}></div>
              <div className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${method.color} text-white`}
                >
                  <method.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {method.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {method.value}
                </p>
                <a
                  href={method.action(method.value)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r ${method.color} text-white hover:shadow-md transition-all`}
                >
                  <method.buttonIcon size={18} className="mr-2" />
                  {method.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Or find me on
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all ${social.color} border border-gray-200 dark:border-gray-700`}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
