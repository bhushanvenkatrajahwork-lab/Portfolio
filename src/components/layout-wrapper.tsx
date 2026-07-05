'use client';

import { motion } from 'framer-motion';
import BackgroundCanvas from './background-canvas';
import Navbar from './navbar';
import Footer from './footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Static Ambient Background */}
      <BackgroundCanvas />

      {/* Navigation Menu */}
      <Navbar />

      {/* Viewport Content with smooth page entrance reveal */}
      <motion.main 
        className="flex-grow pt-24"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
