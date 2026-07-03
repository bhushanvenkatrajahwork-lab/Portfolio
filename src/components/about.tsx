'use client';

import { motion } from 'framer-motion';
import { Award, FileText, Cpu, BatteryCharging, ShieldAlert } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Projects Completed', icon: Cpu, color: 'from-electric-blue to-neon-cyan' },
  { value: '3', label: 'Internships Done', icon: Award, color: 'from-neon-cyan to-neon-purple' },
  { value: '2', label: 'Research Journals', icon: FileText, color: 'from-neon-purple to-electric-blue' },
  { value: '1', label: 'Patent Published', icon: ShieldAlert, color: 'from-electric-blue to-soft-white' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-[50%] -left-[10%] w-[450px] h-[450px] rounded-full bg-neon-purple/10 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            Discovery
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            ABOUT ME
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Modern Profile Illustration (Futuristic SVG Engine) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[400px] aspect-square rounded-3xl border border-white/10 glass-panel overflow-hidden p-8 flex items-center justify-center interactive-card group">
              {/* Inner ambient spotlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Sci-Fi Schematic SVG */}
              <svg className="w-full h-full text-neutral-400 group-hover:text-neon-cyan transition-colors duration-500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Concentric rotating-like orbits */}
                <motion.circle 
                  cx="100" cy="100" r="80" 
                  stroke="rgba(255,255,255,0.03)" strokeWidth="1" 
                />
                <motion.circle 
                  cx="100" cy="100" r="65" 
                  stroke="currentColor" strokeWidth="1" strokeDasharray="5 15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
                <motion.circle 
                  cx="100" cy="100" r="50" 
                  stroke="rgba(0, 242, 254, 0.2)" strokeWidth="1.5" strokeDasharray="30 40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Constellation Nodes */}
                <circle cx="100" cy="100" r="6" fill="#00f2fe" className="shadow-lg shadow-neon-cyan" />
                
                <line x1="100" y1="100" x2="60" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="60" cy="60" r="4" fill="#0066ff" />
                
                <line x1="100" y1="100" x2="140" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="140" cy="70" r="4" fill="#9d4edd" />

                <line x1="100" y1="100" x2="80" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="80" cy="150" r="4" fill="#fff" />
                
                {/* Flowing data lines */}
                <motion.path 
                  d="M60,60 L100,100 L140,70 L80,150 Z" 
                  stroke="url(#svgGrad)" strokeWidth="1.5" strokeDasharray="10 150"
                  animate={{ strokeDashoffset: [-160, 160] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                <defs>
                  <linearGradient id="svgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2fe" />
                    <stop offset="50%" stopColor="#0066ff" />
                    <stop offset="100%" stopColor="#9d4edd" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating micro indicators overlay */}
              <div className="absolute top-6 left-6 font-space text-[10px] text-neutral-500 uppercase tracking-widest">
                AI.01 // Core Eng
              </div>
              <div className="absolute bottom-6 right-6 font-space text-[10px] text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                <BatteryCharging className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
                EV Mobility
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Copy & Interactive Stats Grid */}
          <div className="lg:col-span-7 flex flex-col gap-10 order-1 lg:order-2">
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-space font-medium text-soft-white leading-snug">
                Pioneering the intersection of artificial intelligence, future mobility, and sustainable software solutions.
              </h3>
              <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
                Passionate Computer Science Engineering student committed to transforming innovative ideas into impactful technological solutions. Experienced in AI-driven applications, software development, research publications, patents, and intelligent systems. Interested in AI, Sustainability, Electric Vehicles, IoT, and Research.
              </p>
            </motion.div>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] glass-panel flex flex-col gap-3 interactive-card group"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-3xl sm:text-4xl font-extrabold font-space tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                      {stat.value}
                    </span>
                    <stat.icon className="w-5 h-5 text-neutral-500 group-hover:text-neon-cyan transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-neutral-400 font-space uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
