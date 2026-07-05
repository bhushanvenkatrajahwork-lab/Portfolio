'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Timeline' },
  { id: 'research', name: 'Research' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'additional', name: 'Affiliations' },
  { id: 'contact', name: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update scroll progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section scroll spy logic
      const scrollPosition = window.scrollY + 220; // Offset for sticky navbar & header
      let currentSection = 'hero';
      let maxPassedTop = -1;

      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top && top > maxPassedTop) {
            maxPassedTop = top;
            currentSection = link.id;
          }
        }
      });

      // Special fallback to keep Contact highlighted at the absolute bottom
      const distanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      if (distanceToBottom < 80) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    // Execute immediately on mount to establish current active section
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar (Cobalt Blue) */}
      <div className="fixed top-0 left-0 w-full h-[2.5px] bg-slate-200/55 z-[9999]">
        <motion.div
          className="h-full bg-blue-600"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Glass Navbar Wrapper */}
      <div className="fixed top-4 left-0 w-full z-[9990] px-4 sm:px-6 md:px-8">
        <motion.header
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ease-in-out ${
            isScrolled
              ? 'glass-panel backdrop-blur-md bg-white/75 py-3 px-6 border-slate-200/60 shadow-md shadow-slate-100'
              : 'bg-transparent py-5 px-4 border-transparent'
          }`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, 'hero')}
              className="flex items-center gap-2 group"
            >
              <span className="text-xl font-bold font-space tracking-wider text-slate-900 flex items-center gap-1.5">
                BHUSHAN
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:bg-indigo-600 transition-colors duration-200" />
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-slate-100/80 border border-slate-200/50 rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Action CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="relative inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-semibold font-space tracking-wide uppercase rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:border-slate-300 shadow-sm transition-all duration-200 group"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-slate-400 group-hover:text-slate-700" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-500 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[9980] flex flex-col justify-center px-8 lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 font-space text-2xl font-semibold">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`transition-colors py-2 border-b border-slate-100 ${
                    activeSection === link.id
                      ? 'text-blue-600'
                      : 'text-slate-500'
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="mt-4 py-3 text-center text-sm font-semibold tracking-wider uppercase rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-100"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
