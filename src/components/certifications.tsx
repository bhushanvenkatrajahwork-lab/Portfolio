'use client';

import { motion } from 'framer-motion';
import { Award, FileCheck, CheckCircle } from 'lucide-react';

const certifications = [
  {
    name: 'Neural Networks & Deep Learning',
    issuer: 'DeepLearning.AI',
    date: '2024',
    credentialId: 'DL-9302847A',
  },
  {
    name: 'Advanced Software Engineering',
    issuer: 'HackerRank',
    date: '2023',
    credentialId: 'HR-SE-77301B',
  },
  {
    name: 'Using Python for Research',
    issuer: 'Harvard University (edX)',
    date: '2024',
    credentialId: 'HARV-EDX-9930',
  },
  {
    name: 'Internet of Things (IoT) Fundamentals',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    credentialId: 'CSCO-IoT-309',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-[20%] -right-[15%] w-[400px] h-[400px] rounded-full bg-neon-cyan/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            CERTIFICATIONS
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] glass-panel glow-card flex flex-col justify-between interactive-card group h-[220px]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Badge Icon */}
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-neutral-400 group-hover:text-neon-cyan group-hover:border-neon-cyan/35 transition-colors duration-300">
                  <Award className="w-5 h-5 text-neon-cyan" />
                </div>
                <span className="text-[10px] font-space text-neutral-500 uppercase tracking-widest">
                  {cert.date}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="flex flex-col gap-1 mt-4">
                <h3 className="text-sm font-bold font-space text-white tracking-tight leading-snug group-hover:text-neon-cyan transition-colors">
                  {cert.name}
                </h3>
                <span className="text-xs text-neutral-500 font-sans">
                  {cert.issuer}
                </span>
              </div>

              {/* Footer Credentials */}
              <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between text-[9px] font-space tracking-wider uppercase text-neutral-600">
                <span className="flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 text-neutral-600" />
                  ID: {cert.credentialId}
                </span>
                <span className="flex items-center gap-1 text-emerald-500/80">
                  <CheckCircle className="w-3 h-3 text-emerald-500/80" />
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
