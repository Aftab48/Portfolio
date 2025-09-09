"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-red-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-8 bg-white rounded-2xl shadow-xl">
        {/* Left Section: Animated Text */}
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}{" "}
            😊
          </h1>
          <p className="text-gray-500 max-w-md text-sm sm:text-base">
            Drop me a message anytime and I’ll get back to you as soon as I can.
          </p>
        </div>

        {/* Right Section: Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white rounded-xl flex flex-col gap-5 text-base sm:text-lg p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-medium">Dear Aftab,</span>
          <textarea
            name="user_message"
            rows={4}
            required
            placeholder="Write your message..."
            className="bg-gray-50 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-400 transition w-full resize-none"
          />
          <span className="font-medium">My mail address is:</span>
          <input
            name="user_email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-gray-50 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-400 transition w-full"
          />
          <span className="font-medium">Regards</span>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg p-3 transition"
          >
            Send Message
          </button>
          {success && (
            <span className="text-green-600 text-sm font-medium">
              ✅ Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 text-sm font-medium">
              ❌ Something went wrong. Please try again.
            </span>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
