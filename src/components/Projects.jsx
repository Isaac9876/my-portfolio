import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my work and experience.",
    details: "This project demonstrates my skills in React, Tailwind CSS, and responsive design. It features a beautiful UI, dark/light mode, and interactive sections.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/Isaac9876/portfolio",
    live: "#"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
    details: "Built with React, Node.js, and MongoDB, this platform supports user authentication, product search, and secure payments.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/Isaac9876/ecommerce",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    details: "This app uses React, Firebase, and Material-UI to enable teams to manage tasks, deadlines, and collaboration in real time.",
    technologies: ["React", "Firebase", "Material-UI"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/Isaac9876/taskmanager",
    live: "#"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } })
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl overflow-hidden shadow-2xl border border-blue-100 dark:border-blue-900 backdrop-blur-md hover:scale-105 transition-transform duration-300 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setSelected(project)}
              aria-label={`View details for ${project.title}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <span className="text-blue-500 underline cursor-pointer">More Details</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        {/* Modal for project details */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full p-8 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                  onClick={() => setSelected(null)}
                  aria-label="Close project details"
                >
                  &times;
                </button>
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">{selected.title}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-200">{selected.details}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    GitHub
                  </a>
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 