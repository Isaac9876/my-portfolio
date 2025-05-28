import profileImage from '../assets/my-profile.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,41,59,0.8),rgba(30,41,59,0.8)), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')"
        }}
      ></div>
      <div className="container relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            <div className="md:hidden mb-8">
              <img
                src={profileImage}
                alt="Isaac Kodom Boateng"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-200">
              I am an emerging Ghanaian frontend developer and digital creator based in Accra. Currently pursuing my studies at Central University, I combine academic excellence with practical development skills.
            </p>
            <p className="text-lg text-gray-200">
              My journey in web development has been enriched through my internship with Erudite Africa Network, where I've gained valuable industry insights and practical experience in creating user-friendly interfaces.
            </p>
            <p className="text-lg text-gray-200">
              As a digital creator, I maintain an active presence across various platforms, sharing my creative endeavors and contributing to the growing tech community in Ghana.
            </p>
          </div>
          <div className="space-y-6">
            <div className="hidden md:block">
              <img
                src={profileImage}
                alt="Isaac Kodom Boateng"
                className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>
            <div className="bg-white/80 dark:bg-gray-700/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Central University, Accra<br />
                Currently pursuing studies in Computer Science
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-700/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Frontend Developer Intern<br />
                Erudite Africa Network
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-700/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm">
                  HTML/CSS
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm">
                  UI/UX Design
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 