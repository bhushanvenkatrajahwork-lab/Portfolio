'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    institution: 'SNS College of Engineering',
    degree: 'B.E. Computer Science & Engineering',
    duration: '2022 - 2026 (Expected)',
    result: 'CGPA 8.22',
    description: 'Specializing in artificial intelligence, software engineering methodology, data structures, analysis of algorithms, and IoT edge devices. Active member of technical clubs and patent teams.',
  },
  {
    institution: 'CMS Vidya Mandir',
    degree: 'Higher Secondary Certificate (HSC)',
    duration: '2020 - 2022',
    result: 'Score: 70%',
    description: 'Focused on Computer Science, Mathematics, Physics, and Chemistry. Developed early scripts and algorithmic basics.',
  },
  {
    institution: 'CMS Vidya Mandir',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    duration: '2020',
    result: 'Score: 80%',
    description: 'General Science, Mathematics, and Languages. Graduated with first-class honors.',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background neon lighting accent */}
      <div className="absolute top-[30%] -right-[10%] w-[350px] h-[350px] rounded-full bg-neon-cyan/5 filter blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-20 items-center text-center">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            Academics
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            EDUCATION PATHWAY
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Timeline Path container */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-4 sm:ml-6 flex flex-col gap-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Timeline dot node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-neon-purple shadow-[0_0_8px_#9d4edd] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
              </div>

              {/* Education Card */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] glass-panel glow-card flex flex-col gap-4 interactive-card">
                {/* Header detail */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold font-space tracking-[0.15em] text-neon-purple uppercase flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-neon-purple" />
                      {edu.degree}
                    </span>
                    <h3 className="text-xl font-bold font-space text-white">
                      {edu.institution}
                    </h3>
                  </div>
                  
                  {/* Meta stats */}
                  <div className="flex flex-col sm:items-end text-neutral-500 font-space text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1 mt-1 text-[10px] text-neon-cyan font-bold uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-neon-cyan" />
                      {edu.result}
                    </span>
                  </div>
                </div>

                {/* Description info */}
                <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
