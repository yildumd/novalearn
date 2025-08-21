import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

interface User {
  role?: string;
  // add other user properties as needed
}

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  
  // Safe type casting and role check
  const user = session?.user as User | undefined;
  const isAdmin = user?.role === 'admin';

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-gray-900"
    >
      <nav className="bg-blue-900/10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">NovaLearn</h1>
          <div className="space-x-4">
            <a href="/dashboard" className="text-white hover:text-purple-400">Dashboard</a>
            {isAdmin ? (
              <a href="/admin" className="text-white hover:text-purple-400">Admin</a>
            ) : null}
          </div>
        </div>
      </nav>
      {children}
    </motion.div>
  );
}