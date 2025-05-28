import { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

// Theme context for dark/light mode
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

function getInitialTheme() {
  if (typeof window !== 'undefined') {
    if (document.documentElement.classList.contains('dark')) {
      return 'dark';
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Ensure correct class on mount and theme change
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className={theme === 'dark' ? 'dark min-h-screen' : 'min-h-screen'}>
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <About />
                <Experience />
                <Testimonials />
                <Projects />
                <Contact />
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App; 