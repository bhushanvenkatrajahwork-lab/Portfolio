'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Briefcase, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const roles = [
  'AI Engineer',
  'Software Developer',
  'Research Enthusiast',
  'Innovation Builder',
  'Future Mobility Explorer',
];

const socials = [
  { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaResearchgate, url: 'https://researchgate.net', label: 'ResearchGate' },
  { icon: SiLeetcode, url: 'https://leetcode.com', label: 'LeetCode' },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIdx];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentFullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      // Switch role
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    } else {
      // Type or delete characters
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentFullText.substring(0, displayedText.length - 1)
            : currentFullText.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIdx]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-20 px-6 sm:px-12 md:px-24 overflow-hidden">
      {/* Absolute center ambient glowing meshes */}
      <div className="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-gradient-to-r from-electric-blue/15 via-neon-cyan/5 to-neon-purple/10 filter blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Main hero grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column (Socials vertical panel) */}
        <motion.div 
          className="hidden lg:flex lg:col-span-1 flex-col items-center gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/10" />
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full border border-white/5 bg-white/[0.01] text-neutral-400 hover:text-neon-cyan hover:border-neon-cyan/35 transition-all duration-300 cursor-none flex items-center justify-center"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-4.5 h-4.5" />
            </motion.a>
          ))}
          <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-white/10" />
        </motion.div>

        {/* Center/Main column */}
        <div className="lg:col-span-11 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-[10px] sm:text-xs font-semibold font-space tracking-wider text-neon-cyan uppercase mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_#00f2fe]" />
            Available for Opportunities
          </motion.div>

          {/* Main Title Heading */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-space tracking-tight text-white mb-4 leading-none"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            BHUSHAN V
          </motion.h1>

          {/* Typing Subtitle */}
          <motion.div
            className="text-lg sm:text-2xl md:text-3xl font-space font-medium text-neutral-400 min-h-[40px] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-electric-blue to-neon-purple font-semibold typing-cursor">{displayedText}</span>
          </motion.div>

          {/* Quick statement / summary */}
          <motion.p
            className="max-w-xl text-neutral-400 font-sans text-sm sm:text-base leading-relaxed mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Designing, developing, and researching state-of-the-art AI systems, EV optimizations, and intelligent hardware-software interfaces. Dedicated to sustainable engineering and technical excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* View Projects */}
            <motion.button
              onClick={() => handleScrollTo('projects')}
              className="relative w-full sm:w-auto px-8 py-4 rounded-full font-space text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-electric-blue via-neon-cyan to-neon-purple text-white shadow-xl shadow-electric-blue/15 hover:shadow-neon-cyan/20 cursor-none transition-all duration-300 flex items-center justify-center gap-2 group border border-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Briefcase className="w-4 h-4" />
              View Projects
            </motion.button>

            {/* Download Resume */}
            <motion.button
              onClick={() => handleScrollTo('resume')}
              className="relative w-full sm:w-auto px-8 py-4 rounded-full font-space text-xs font-bold tracking-wider uppercase bg-white/[0.02] border border-white/10 hover:border-neon-cyan/40 text-soft-white hover:text-white cursor-none transition-all duration-300 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText className="w-4 h-4 text-neutral-400 group-hover:text-neon-cyan" />
              Get Resume
            </motion.button>

            {/* Contact Me */}
            <motion.button
              onClick={() => handleScrollTo('contact')}
              className="relative w-full sm:w-auto px-8 py-4 rounded-full font-space text-xs font-bold tracking-wider uppercase bg-transparent text-neutral-400 hover:text-soft-white cursor-none transition-colors duration-300 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4 text-neutral-500 group-hover:text-soft-white" />
              Contact
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Down indicator */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <span className="text-[10px] font-space tracking-[0.3em] uppercase text-neutral-600">
          Scroll Down
        </span>
        <button
          onClick={() => handleScrollTo('about')}
          className="p-2.5 rounded-full border border-white/5 bg-white/[0.01] hover:border-white/10 hover:text-neon-cyan cursor-none transition-colors"
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-4 h-4 text-neutral-500 hover:text-neon-cyan" />
        </button>
      </motion.div>
    </section>
  );
}
