'use client';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', href: '/dashboard' },
    { name: 'My Courses', icon: '🎓', href: '/courses' },
    { name: 'Grades', icon: '⭐', href: '/grades' },
    { name: 'Progress', icon: '📈', href: '/progress' },
    { name: 'Resources', icon: '📚', href: '/resources' },
    { name: 'Settings', icon: '⚙️', href: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white/5 backdrop-blur-md border-r border-white/10 h-screen fixed left-0 top-16">
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
  );
}