import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Erudite Africa Network",
    period: "2023 - Present",
    description: "Gaining practical experience in web development and user interface design. Working on real-world projects and collaborating with experienced developers.",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX Design"]
  },
  {
    title: "Digital Creator",
    company: "Self-employed",
    period: "2022 - Present",
    description: "Creating and sharing digital content across various platforms, building a personal brand, and engaging with the tech community.",
    skills: ["Content Creation", "Social Media", "Digital Marketing"]
  },
  {
    title: "Intern",
    company: "Acacia Health Insurance",
    period: "2024",
    description: "Worked on digital transformation projects, learned about health insurance systems, and contributed to the IT team.",
    skills: ["Teamwork", "Communication", "Web Development"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } })
};

const Experience = () => (
  <section id="experience" className="section bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
    <div className="container">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-2xl border border-blue-100 dark:border-blue-900 backdrop-blur-md hover:scale-105 transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 