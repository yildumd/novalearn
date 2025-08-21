'use client';

import { motion } from 'framer-motion';

export default function WelcomeHero() {
  return (
    <div className="text-center py-12 md:py-20 px-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-6"
      >
        Welcome to{' '}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          NovaLearn
        </span>
      </motion.h1>
      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Postgraduate Diploma in Education
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
          Accredited Online Study Center • Advanced Teaching Methodology • 
          Research-Focused Curriculum • Professional Development
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4 md:space-y-0 md:space-x-6"
      >
        <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105">
          Enroll Now
        </button>
        
        <button className="w-full md:w-auto border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
          View Curriculum
        </button>

        <button className="w-full md:w-auto bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all">
          Student Portal
        </button>
      </motion.div>

      {/* Academic Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {[
          { label: 'Accredited', icon: '🏅' },
          { label: 'Flexible', icon: '⏰' },
          { label: 'Support', icon: '👨‍🏫' },
          { label: 'Career Focus', icon: '🎯' }
        ].map((item, index) => (
          <div key={item.label} className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="text-white/80 text-sm">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}