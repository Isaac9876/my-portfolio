import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaCalendarCheck } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const SERVICE_ID = 'service_wvcfzxn';
const TEMPLATE_ID = 'template_xiiaxm1';
const USER_ID = '8QTUM8Z2aIddJwP3Y';

const buttonAnim = {
  whileHover: { scale: 1.08 },
  whileTap: { scale: 0.95 }
};

const fireConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    details: ''
  });
  const [bookingStatus, setBookingStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        fireConfetti();
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Booking form handlers
  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStatus('Sending...');
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: bookingData.name,
      email: bookingData.email,
      message: `Booking request: ${bookingData.details}`
    }, USER_ID)
      .then(() => {
        setBookingStatus('Booking request sent!');
        setBookingData({ name: '', email: '', details: '' });
        fireConfetti();
        setTimeout(() => setShowBooking(false), 2000);
      })
      .catch(() => {
        setBookingStatus('Failed to send booking. Please try again.');
      });
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900 relative">
      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setShowBooking(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Book Me</h3>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={bookingData.name}
                onChange={handleBookingChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={bookingData.email}
                onChange={handleBookingChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <textarea
                name="details"
                placeholder="Project Details / What do you want to book me for?"
                value={bookingData.details}
                onChange={handleBookingChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              ></textarea>
              <motion.button type="submit" className="w-full btn btn-primary" {...buttonAnim}>
                Send Booking
              </motion.button>
              {bookingStatus && <p className="text-center mt-2 text-blue-600 dark:text-blue-400">{bookingStatus}</p>}
            </form>
          </div>
        </div>
      )}
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="flex justify-center mb-8">
          <motion.button
            className="btn btn-primary flex items-center gap-2"
            onClick={() => setShowBooking(true)}
            {...buttonAnim}
          >
            <FaCalendarCheck /> Book Me
          </motion.button>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:boatengisaackodom@gmail.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  <FaEnvelope size={20} />
                  <span>boatengisaackodom@gmail.com</span>
                </a>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Isaac9876"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/isaac-kodom-boateng-107877272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/isaackodom.boateng.7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg mt-8">
              <iframe
                title="Central University, Miotso, Accra"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.234073289889!2d0.0894153147629646!3d5.818381495782998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe6b8b2e2e2e2e2b%3A0x2e2e2e2e2e2e2e2e!2sCentral%20University%2C%20Miotso%2C%20Accra!5e0!3m2!1sen!2sgh!4v1685555555555!5m2!1sen!2sgh"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full btn btn-primary"
                {...buttonAnim}
              >
                Send Message
              </motion.button>
              {status && <p className="text-center mt-4 text-sm text-blue-600 dark:text-blue-400">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 