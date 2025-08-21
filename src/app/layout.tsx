import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css'; // Correct path to your global CSS

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NovaLearn - Postgraduate Diploma in Education',
  description: 'Experience learning reimagined with cutting-edge technology and immersive education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}