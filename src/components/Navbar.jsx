import { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-blue-600">Isaac KB</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <div className="flex space-x-4">
              <a href="https://github.com/Isaac9876" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/isaac-kodom-boateng-107877272" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com/isaackodom.boateng.7/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaFacebook size={20} />
              </a>
              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <FaSun size={18} className="text-yellow-400" /> : <FaMoon size={18} className="text-blue-600" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <div className="flex space-x-4 pt-2">
                <a href="https://github.com/Isaac9876" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/isaac-kodom-boateng-107877272" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.facebook.com/isaackodom.boateng.7/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <FaFacebook size={20} />
                </a>
                <button
                  onClick={toggleTheme}
                  className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {theme === 'dark' ? <FaSun size={18} className="text-yellow-400" /> : <FaMoon size={18} className="text-blue-600" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 