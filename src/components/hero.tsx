'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Briefcase, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';

const socials = [
  { icon: FaGithub, url: 'https://github.com/BhushanVenkatrajah22', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhushan-venkatrajah/', label: 'LinkedIn' },
  { icon: FaResearchgate, url: 'https://www.researchgate.net/profile/Bhushan-Venkatrajah?ev=hdr_xprf', label: 'ResearchGate' },
  { icon: SiLeetcode, url: 'https://leetcode.com/u/BhushanVenkatrajah/', label: 'LeetCode' },
];

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center py-16 px-6 sm:px-12 md:px-24 overflow-hidden">
      {/* Background Subtle Tech Grid (Futuristic ambiance) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Two-column container on desktop, vertical stack on mobile */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Name, Title & Details */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          {/* Status Pill Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/80 bg-slate-50 text-xs font-medium font-space tracking-wide text-slate-600 mb-4 shadow-sm shadow-slate-100 dark:bg-slate-900/60 dark:border-slate-800/80 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            Available for Opportunities
          </motion.div>

          {/* Title Name with Glowing & Flowing Gradient */}
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold font-space tracking-tight bg-gradient-to-r from-electric-blue via-neon-cyan via-neon-purple to-electric-blue bg-[length:200%_auto] bg-clip-text text-transparent mb-3 leading-none drop-shadow-[0_0_12px_rgba(37,99,235,0.18)]"
            initial={{ opacity: 0, y: 15, backgroundPosition: "0% center" }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ["0% center", "-200% center"]
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.2 },
              y: { duration: 0.6, delay: 0.2 },
              backgroundPosition: {
                repeat: Infinity,
                duration: 6,
                ease: "linear"
              }
            }}
          >
            BHUSHAN V
          </motion.h1>

          {/* Role Statement (Darkened for better contrast) */}
          <motion.h2
            className="text-lg sm:text-2xl md:text-3xl font-space font-semibold text-slate-900 dark:text-slate-100 mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            AI Engineer & Software Developer
          </motion.h2>

          {/* Short Statement (Darkened for better contrast) */}
          <motion.p
            className="max-w-2xl text-slate-700 dark:text-slate-350 font-sans text-sm sm:text-base leading-relaxed mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Designing, developing, and researching state-of-the-art AI systems, EV battery diagnostics, and intelligent hardware-software interfaces. Committed to sustainable engineering and architectural excellence.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Projects Link */}
            <button
              onClick={() => handleScrollTo('projects')}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-space text-xs font-semibold tracking-wider uppercase bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 border border-blue-600 cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              View Projects
            </button>

            {/* Resume Link */}
            <button
              onClick={() => handleScrollTo('resume')}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-space text-xs font-semibold tracking-wider uppercase bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800/50"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              Get Resume
            </button>

            {/* Contact Link */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-space text-xs font-semibold tracking-wider uppercase bg-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              Contact
            </button>
          </motion.div>

          {/* Social Icons row */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 shadow-sm transition-all duration-200 flex items-center justify-center dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Clean Profile Image */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-[190px] sm:max-w-[220px] md:max-w-[250px] aspect-[4/5] flex items-center justify-center">
            
            {/* Main Photo Container with Floating & Hover Motion */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden z-10 shadow-lg"
              animate={{ 
                y: [-5, 5, -5],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Image element */}
              <Image 
                src="/profile.jpg"
                alt="Bhushan V"
                fill
                priority
                className="object-cover object-top filter contrast-[1.01] transition-all duration-700 ease-out scale-100 hover:scale-105 rounded-2xl"
                sizes="(max-width: 640px) 190px, (max-width: 768px) 220px, 250px"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Scroll down indicator absolute centered at bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <button
          onClick={() => handleScrollTo('about')}
          className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600 shadow-sm transition-colors cursor-pointer dark:bg-slate-900 dark:border-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
