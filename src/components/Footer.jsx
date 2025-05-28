import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="bg-white dark:bg-gray-800 py-8 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Isaac Kodom Boateng. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Accra, Ghana &bull; Local time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Isaac9876"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-kodom-boateng-107877272"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/isaackodom.boateng.7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
          </div>
          <button
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Back to Top"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 