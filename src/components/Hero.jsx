import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import profileImage from '../assets/my-profile.jpg';
import { motion } from 'framer-motion';

const buttonAnim = {
  whileHover: { scale: 1.08 },
  whileTap: { scale: 0.95 }
};

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,41,59,0.7),rgba(30,41,59,0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')"
        }}
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Isaac Kodom Boateng"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Isaac Kodom Boateng
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200 mb-8">
            Frontend Developer & Digital Creator
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Based in Accra, Ghana. Currently pursuing studies at Central University while crafting beautiful web experiences.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Isaac9876"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-kodom-boateng-107877272"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/isaackodom.boateng.7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              {...buttonAnim}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
              {...buttonAnim}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="btn bg-green-600 text-white hover:bg-green-700 flex items-center gap-2"
              aria-label="Download CV"
              {...buttonAnim}
            >
              <FaDownload /> Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
      {/* Animated SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0" aria-hidden="true">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#6366f1" fillOpacity="0.3">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,160L80,170C160,180,320,200,480,197.3C640,195,800,169,960,154.7C1120,140,1280,138,1360,138.7L1440,139L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
              M0,160L80,180C160,200,320,220,480,217.3C640,215,800,189,960,174.7C1120,160,1280,158,1360,158.7L1440,159L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
              M0,160L80,170C160,180,320,200,480,197.3C640,195,800,169,960,154.7C1120,140,1280,138,1360,138.7L1440,139L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 