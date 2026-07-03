'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Check, AlertCircle } from 'lucide-react';

export default function Resume() {
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleDownload = () => {
    setDownloadState('loading');
    
    // Simulate generation and trigger download of a formatted text file as a fallback
    setTimeout(() => {
      try {
        const resumeContent = `
=========================================
BHUSHAN V - AI ENGINEER & DEVELOPER
=========================================
Email: bhushan@example.com
GitHub: github.com
LinkedIn: linkedin.com

EDUCATION:
- B.E. Computer Science & Engineering, SNS College of Engineering (CGPA 8.22)
- HSC, CMS Vidya Mandir (70%)
- SSLC, CMS Vidya Mandir (80%)

RESEARCH & PUBLICATIONS:
- Journal: Synergistic Drugs Coated Titanium Dental Implants Against Bacterial Pathogens
- Journal: Mycofabrication of Mycelium-Based Leather using Pleurotus Florida and Pleurotus Ostreatus
- Patent: Smart Water Bottle with Integrated Medical Box for Elderly Care

EXPERIENCE:
- Software Intern, SNS Square (3 Months)
- Mentor (Python & Web Development), B.Sc Final Year Students (1 Month)
- Web Development Intern, InternPe (1 Month)

PROJECTS:
1. ChargeWise AI EV
2. Intelligence in EV using IoT
3. Pyrolysis-Based Waste-to-Energy System
4. Smart Equipment Monitoring & Failure Prediction System
5. Smart Parking System
6. AI Travel Concierge Agent

ACHIEVEMENTS:
- First Prize: National Level Paper Presentation (PSG Institute of Technology)
- Top 10 Global: AI Agent Hackathon (Swafinix Technologies)
- First Prize: Bootcamp (SNS College of Engineering)
- Top 10 Finalist: MobilityX 2.0
=========================================
        `;
        const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Bhushan_V_Resume.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        setDownloadState('success');
        setTimeout(() => setDownloadState('idle'), 2000);
      } catch (err) {
        setDownloadState('idle');
      }
    }, 1200);
  };

  return (
    <section id="resume" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background neon lighting accent */}
      <div className="absolute top-[40%] -left-[10%] w-[380px] h-[380px] rounded-full bg-neon-purple/5 filter blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 items-center text-center">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            RESUME OVERVIEW
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Resume Preview Box and CTA */}
        <div className="flex flex-col gap-8 items-center">
          
          {/* Scientific Document Mockup */}
          <motion.div
            className="w-full rounded-3xl border border-white/10 bg-[#070707] glass-panel p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col gap-8 select-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold font-space text-white tracking-tight">
                  BHUSHAN V
                </h3>
                <span className="text-xs font-space tracking-wider uppercase text-neon-cyan">
                  AI Engineer & Software Developer
                </span>
              </div>
              <div className="text-left sm:text-right text-[10px] font-space text-neutral-500 uppercase tracking-widest leading-relaxed">
                Coimbatore, Tamil Nadu, India <br />
                github.com/bhushan-v • linkedin.com/in/bhushan
              </div>
            </div>

            {/* Resume Summary highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm font-sans text-neutral-400">
              {/* Left Side: Summary & Education */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h4 className="font-space font-semibold uppercase tracking-wider text-soft-white border-b border-white/5 pb-1">
                    Profile
                  </h4>
                  <p className="leading-relaxed">
                    Dedicated Computer Science student creating intelligent algorithms, IoT systems, and deep learning analytics. Expert in EV battery management diagnostics and bio-sustainable engineering.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-space font-semibold uppercase tracking-wider text-soft-white border-b border-white/5 pb-1">
                    Education
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <div>
                      <p className="font-semibold text-neutral-300">SNS College of Engineering</p>
                      <p className="text-[11px] text-neutral-500 font-space">B.E. Computer Science • CGPA 8.22 • 2022 - 2026</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-300">CMS Vidya Mandir</p>
                      <p className="text-[11px] text-neutral-500 font-space">HSC • 70% | SSLC • 80%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Key Core Competencies */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h4 className="font-space font-semibold uppercase tracking-wider text-soft-white border-b border-white/5 pb-1">
                    Research & Patents
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-4 text-neutral-400">
                    <li>Titanium Dental Implants drug coating research.</li>
                    <li>Pleurotus mycelium-based bio-leather mycofabrication.</li>
                    <li>IoT Smart Water Bottle for elderly patient monitoring (Patent).</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-space font-semibold uppercase tracking-wider text-soft-white border-b border-white/5 pb-1">
                    Experience Highlights
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-4 text-neutral-400">
                    <li>Developed responsive logic modules during SNS Square Internship.</li>
                    <li>Mentored academic candidates on Python programming algorithms.</li>
                    <li>Built interactive frontend portals at InternPe.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Glowing lock indicators overlay */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />
          </motion.div>

          {/* Download triggers */}
          <motion.button
            onClick={handleDownload}
            disabled={downloadState === 'loading'}
            className={`px-8 py-4.5 rounded-full font-space text-xs font-bold tracking-wider uppercase cursor-none transition-all duration-300 flex items-center justify-center gap-2.5 border border-white/10 min-w-[220px] ${
              downloadState === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/15'
                : 'bg-white/[0.02] hover:border-neon-cyan/50 hover:text-white text-soft-white shadow-xl shadow-black/40 hover:shadow-neon-cyan/20'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {downloadState === 'idle' && (
              <>
                <Download className="w-4 h-4 text-neutral-400" />
                Download Resume
              </>
            )}
            {downloadState === 'loading' && (
              <>
                <svg className="animate-spin h-4 w-4 text-neon-cyan" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Compiling PDF...
              </>
            )}
            {downloadState === 'success' && (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                Downloaded!
              </>
            )}
          </motion.button>

        </div>
      </div>
    </section>
  );
}
