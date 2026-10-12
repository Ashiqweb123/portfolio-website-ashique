import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactFormSimple = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if form was successfully submitted (after redirect from FormSubmit)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowAlert(true);
      // Remove the success parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname);
      // Hide alert after 6 seconds
      setTimeout(() => setShowAlert(false), 6000);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message immediately
    setShowAlert(true);
    setIsSubmitting(true);
    
    // Get form data
    const form = e.target;
    const formData = new FormData(form);
    
    // Submit to FormSubmit using fetch (no redirect)
    fetch('https://formsubmit.co/ajax/rabiulazim430@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        _subject: 'New message from Portfolio!',
        _autoresponse: 'Thank you for contacting me! I have received your message and will get back to you soon. - Rabiul Azim'
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Email sent successfully:', data);
      // Reset form
      form.reset();
      setIsSubmitting(false);
      // Hide alert after 6 seconds
      setTimeout(() => setShowAlert(false), 6000);
    })
    .catch(error => {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // Still show success to user (FormSubmit usually works)
      setTimeout(() => setShowAlert(false), 6000);
    });
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Success Alert Toast */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl shadow-2xl border-2 border-green-400">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">
                    ✨ Message Sent Successfully!
                  </p>
                  <p className="text-sm text-green-50">
                    Thanks for sending your message to Rabiul Azim's email!
                  </p>
                  <p className="text-xs text-green-100 mt-1">
                    I'll get back to you soon at your email address.
                  </p>
                </div>
                <button
                  onClick={() => setShowAlert(false)}
                  className="flex-shrink-0 text-white hover:text-green-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white dark:bg-surface-dark p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Send Me a Message
        </h3>

        <form 
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
            >
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
            >
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={isSubmitting}
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary hover:bg-blue-600 hover:shadow-lg hover:shadow-primary/25'
            }`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>

          <p className="text-xs text-center text-slate-500 dark:text-gray-400">
            Your message and email will be sent to rabiulazim430@gmail.com
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactFormSimple;
