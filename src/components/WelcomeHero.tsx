'use client';

import { motion } from 'framer-motion';

export default function WelcomeHero() {
  return (
    <div className="text-center py-20">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-white mb-6"
      >
        Welcome to{' '}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          NovaLearn
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-white/80 mb-10 max-w-3xl mx-auto"
      >
        Postgraduate Diploma in Education - Your journey to excellence starts here. 
        Experience learning reimagined with cutting-edge technology and immersive education.
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-x-6"
      >
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
          Start Learning
        </button>
        
        <button className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
          Explore Courses
        </button>
      </motion.div>
    </div>
  );
}