'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ... (keep the Header and Sidebar components but update them)

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">NL</span>
            </div>
            <h1 className="text-white text-xl font-bold">NovaLearn</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/dashboard" className="text-white/80 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="/courses" className="text-white/80 hover:text-white transition-colors">
              Courses
            </a>
            <a href="/grades" className="text-white/80 hover:text-white transition-colors">
              Grades
            </a>
            <a href="/profile" className="text-white/80 hover:text-white transition-colors">
              Profile
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/5 backdrop-blur-md rounded-lg mt-2 p-4"
            >
              <div className="space-y-2">
                <a href="/dashboard" className="block text-white/80 hover:text-white transition-colors p-2">
                  Dashboard
                </a>
                <a href="/courses" className="block text-white/80 hover:text-white transition-colors p-2">
                  Courses
                </a>
                <a href="/grades" className="block text-white/80 hover:text-white transition-colors p-2">
                  Grades
                </a>
                <a href="/profile" className="block text-white/80 hover:text-white transition-colors p-2">
                  Profile
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', href: '/dashboard' },
    { name: 'My Courses', icon: '🎓', href: '/courses' },
    { name: 'Grades', icon: '⭐', href: '/grades' },
    { name: 'Progress', icon: '📈', href: '/progress' },
    { name: 'Resources', icon: '📚', href: '/resources' },
    { name: 'Settings', icon: '⚙️', href: '/settings' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white/5 backdrop-blur-md border-r border-white/10 h-screen fixed left-0 top-16">
        <div className="p-6">
          <h2 className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-4">
            Main Menu
          </h2>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar becomes bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 z-40">
        <nav className="flex justify-around p-2">
          {menuItems.slice(0, 4).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex flex-col items-center p-2 text-white/70 hover:text-white transition-all"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs mt-1">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <Header />
      <div className="flex">
        <Sidebar />
        {/* Adjust margins for mobile */}
        <main className="flex-1 p-4 md:p-6 md:ml-64 pb-16 md:pb-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}