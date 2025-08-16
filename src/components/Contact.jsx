import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create FormData for the API request
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      formData.append('source', 'ayesha'); // Add source as "ayesha"

      // Determine API URL based on environment
      const isDevelopment = import.meta.env.DEV;
      const apiUrl = isDevelopment
        ? '/api/contact' // Use proxy in development
        : 'https://www.zolixi.com/api/contact'; // Use full URL in production

      // Make API call to Zolixi contact endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setLoading(false);
        setShowSuccessModal(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error submitting form:', error);
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Write your email!"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black-200 bg-opacity-90 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setShowSuccessModal(false)}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#915EFF] rounded-full opacity-30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30, rotateX: -15 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30, rotateX: -15 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              duration: 0.6
            }}
            className="relative bg-gradient-to-br from-black-100 via-black-100 to-tertiary border border-secondary/30 p-6 rounded-3xl max-w-lg mx-4 mt-28 text-center shadow-2xl backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: "0 25px 50px -12px rgba(145, 94, 255, 0.25), 0 0 0 1px rgba(145, 94, 255, 0.1)"
            }}
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#915EFF]/20 via-transparent to-[#915EFF]/20 opacity-0 animate-pulse" />

            {/* Corner decorative elements */}
            <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-gradient-to-r from-[#915EFF] to-[#915EFF]/60 opacity-80 animate-pulse" />
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-[#915EFF] to-[#915EFF]/60 opacity-80 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-gradient-to-r from-[#915EFF] to-[#915EFF]/60 opacity-80 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-[#915EFF] to-[#915EFF]/60 opacity-80 animate-pulse" style={{ animationDelay: "1.5s" }} />

            <div className="relative mb-10">
              {/* Enhanced success icon with multiple layers */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                {/* Outer glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF] via-[#915EFF]/80 to-[#915EFF] opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Middle glow */}
                <div className="absolute inset-2 bg-gradient-to-r from-[#915EFF]/40 to-[#915EFF]/20 rounded-full blur-md" />

                {/* Main icon container */}
                <motion.div
                  className="relative w-full h-full bg-gradient-to-br from-[#915EFF] via-[#915EFF]/90 to-[#915EFF]/70 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* Inner glow */}
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />

                  {/* Checkmark icon */}
                  <motion.svg
                    className="w-12 h-12 text-white relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </motion.div>
              </div>

              {/* Enhanced title with animated gradient */}
              <motion.h3
                className="text-white text-2xl font-black mb-4 bg-gradient-to-r from-white via-[#915EFF] to-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Message Sent!
              </motion.h3>

              {/* Enhanced subtitle with better typography */}
              <motion.p
                className="text-secondary leading-relaxed max-w-sm mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Thank you for reaching out. I'll get back to you as soon as possible with a detailed response.
              </motion.p>
            </div>

            {/* Enhanced close button with multiple states */}
            <motion.button
              onClick={() => setShowSuccessModal(false)}
              className="relative bg-gradient-to-r from-[#915EFF] via-[#915EFF]/90 to-[#915EFF] text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/80 to-[#915EFF]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Button text */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Got it!
                </motion.span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
