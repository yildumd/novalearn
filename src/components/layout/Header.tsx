'use client';

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">NL</span>
            </div>
            <h1 className="text-white text-xl font-bold">NovaLearn</h1>
          </div>

          {/* Navigation */}
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

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}