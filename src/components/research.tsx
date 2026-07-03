'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, FileText, ChevronRight } from 'lucide-react';

const researchItems = [
  {
    type: 'Journal Publication',
    title: 'Synergistic Drugs Coated Titanium Dental Implants Against Bacterial Pathogens',
    publisher: 'International Scientific Journal',
    summary: 'Investigates nanotechnology-driven drug coating applications on titanium dental implants. Optimizes dual-drug delivery mechanisms to synergistically eradicate localized bacterial pathogens and improve implant integration.',
    tags: ['Biomaterials', 'Nanotechnology', 'Pathology Control'],
  },
  {
    type: 'Journal Publication',
    title: 'Mycofabrication of Mycelium-Based Leather using Pleurotus Florida and Pleurotus Ostreatus',
    publisher: 'Bio-materials & Sustainability Journal',
    summary: 'Examines mycelium cultivation methods utilizing agricultural waste substrates. Fabricates sustainable leather alternatives with high tensile strength, investigating properties of P. Florida and P. Ostreatus species.',
    tags: ['Mycology', 'Sustainable Design', 'Green Materials'],
  },
  {
    type: 'Patent Published',
    title: 'Smart Water Bottle with Integrated Medical Box for Elderly Care',
    publisher: 'Patent Office of India',
    summary: 'A physical IoT computing device monitoring daily water intake and alerting elderly users to scheduled medication times. Combines load-cell sensors, alarm triggers, and visual display widgets.',
    tags: ['IoT', 'Geriatric Health', 'Edge Hardware'],
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background neon lighting accent */}
      <div className="absolute top-[40%] -left-[10%] w-[450px] h-[450px] rounded-full bg-electric-blue/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 items-center text-center">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            Scholarly
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            RESEARCH & PATENTS
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Research Items Grid */}
        <div className="flex flex-col gap-8">
          {researchItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] glass-panel glow-card flex flex-col md:flex-row gap-6 items-start justify-between interactive-card group"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Left Column: Details */}
              <div className="flex-grow flex flex-col gap-4 max-w-3xl">
                {/* Badge Type */}
                <div className="flex items-center gap-2">
                  {item.type.includes('Patent') ? (
                    <span className="px-3 py-1 text-[10px] font-space font-bold tracking-wider text-neon-purple bg-neon-purple/5 border border-neon-purple/20 rounded-full flex items-center gap-1.5 uppercase">
                      <Award className="w-3.5 h-3.5 text-neon-purple" />
                      {item.type}
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-[10px] font-space font-bold tracking-wider text-neon-cyan bg-neon-cyan/5 border border-neon-cyan/20 rounded-full flex items-center gap-1.5 uppercase">
                      <BookOpen className="w-3.5 h-3.5 text-neon-cyan" />
                      {item.type}
                    </span>
                  )}
                  <span className="text-[10px] font-space text-neutral-500 uppercase tracking-widest">
                    {item.publisher}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-space text-white group-hover:text-neon-cyan transition-colors duration-300 tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed">
                  {item.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[9px] font-space tracking-wider uppercase text-neutral-500 bg-white/[0.02] border border-white/5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Mini action link */}
              <div className="flex items-center justify-end w-full md:w-auto mt-4 md:mt-0">
                <button
                  className="p-3 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-neon-cyan/40 text-neutral-500 group-hover:text-neon-cyan cursor-none transition-all duration-300 flex items-center justify-center"
                  aria-label="View publisher resource"
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
