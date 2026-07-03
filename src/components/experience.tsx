'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Software Intern',
    company: 'SNS Square',
    duration: '3 Months',
    description: 'Collaborated on developing commercial enterprise software modules, writing modular backend utilities, and building responsive client interface components.',
    location: 'Coimbatore, India',
  },
  {
    role: 'Mentor (Python & Web Development)',
    company: 'B.Sc Final Year Students',
    duration: '1 Month',
    description: 'Conducted engineering project guidance, leading workshops on full-stack application development, database design, and intelligent Python scripts.',
    location: 'Academic Campus',
  },
  {
    role: 'Web Development Intern',
    company: 'InternPe',
    duration: '1 Month',
    description: 'Designed web projects utilizing HTML/CSS, JavaScript, and React, focusing on responsive UI implementation and fast load optimizations.',
    location: 'Remote',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-[40%] -left-[10%] w-[350px] h-[350px] rounded-full bg-neon-purple/5 filter blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-20 items-center text-center">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            History
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Timeline Path container */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-4 sm:ml-6 flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Timeline dot node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-neon-cyan shadow-[0_0_8px_#00f2fe] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
              </div>

              {/* Experience Card */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] glass-panel glow-card flex flex-col gap-4 interactive-card">
                {/* Header detail */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold font-space tracking-[0.15em] text-neon-cyan uppercase flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-neon-cyan" />
                      {exp.role}
                    </span>
                    <h3 className="text-xl font-bold font-space text-white">
                      {exp.company}
                    </h3>
                  </div>
                  
                  {/* Meta stats */}
                  <div className="flex flex-col sm:items-end text-neutral-500 font-space text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 mt-1 text-[10px]">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description info */}
                <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
