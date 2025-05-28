import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Kwame Mensah',
    title: 'Lead Developer, Erudite Africa Network',
    text: 'Isaac is a fast learner and a creative problem solver. He contributed greatly to our frontend projects and always brought fresh ideas to the team.'
  },
  {
    name: 'Akosua Boateng',
    title: 'Mentor, Central University',
    text: 'Isaac demonstrates a strong passion for web development and digital creation. He is dedicated, reliable, and always eager to learn more.'
  },
  {
    name: 'Acacia Health Insurance',
    title: 'Internship Supervisor (2024)',
    text: 'During his internship at Acacia Health Insurance, Isaac showed professionalism and technical skill. He was proactive in learning and contributed to our digital transformation projects.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } })
};

const Testimonials = () => (
  <section className="section bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <div className="container">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Testimonials
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center border border-blue-100 dark:border-blue-900 backdrop-blur-md hover:scale-105 transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            <FaQuoteLeft className="text-blue-400 text-3xl mb-4" />
            <p className="text-gray-700 dark:text-gray-200 mb-4 italic">"{t.text}"</p>
            <div className="font-semibold text-blue-600 dark:text-blue-400">{t.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{t.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 