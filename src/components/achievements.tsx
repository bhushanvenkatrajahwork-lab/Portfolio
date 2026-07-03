'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Milestone } from 'lucide-react';

const achievements = [
  {
    title: 'First Prize',
    competition: 'National Level Paper Presentation',
    org: 'PSG Institute of Technology',
    icon: Trophy,
    color: 'from-amber-500 to-yellow-300',
    description: 'Awarded for presenting pioneering research in automated control systems and bio-sustainable innovations, evaluated by industry researchers.'
  },
  {
    title: 'Top 10 Global',
    competition: 'AI Agent Hackathon',
    org: 'Swafinix Technologies',
    icon: Star,
    color: 'from-[#0066ff] to-[#00f2fe]',
    description: 'Ranked in the top 10 globally among hundreds of teams, designing autonomous multi-agent planning frameworks running edge API scripts.'
  },
  {
    title: 'First Prize',
    competition: 'SNS BootCamp Challenge',
    org: 'SNS College of Engineering',
    icon: ShieldCheck,
    color: 'from-purple-500 to-indigo-400',
    description: 'Secured the first position for conceptualizing and developing an IoT-integrated mobile prototype for elderly health management.'
  },
  {
    title: 'Top 10 Finalist',
    competition: 'MobilityX 2.0',
    org: 'Future Transport Initiative',
    icon: Milestone,
    color: 'from-teal-400 to-emerald-300',
    description: 'Shortlisted among key innovators for building battery telemetry and routing optimization blueprints for next-generation electric vehicles.'
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background glow bottom-right */}
      <div className="absolute bottom-[10%] -right-[10%] w-[400px] h-[400px] rounded-full bg-neon-purple/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            HONORS & AWARDS
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => {
            const AchIcon = ach.icon;
            return (
              <motion.div
                key={idx}
                className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] glass-panel glow-card flex items-start gap-5 interactive-card group hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Glowing trophy node */}
                <div className={`p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-neutral-400 group-hover:border-neon-cyan/40 transition-colors duration-300`}>
                  <AchIcon className="w-6 h-6 text-neon-cyan group-hover:animate-bounce" />
                </div>

                {/* Details info */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-base sm:text-lg font-bold font-space text-white">
                      {ach.title}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-space tracking-wider uppercase">
                      • {ach.org}
                    </span>
                  </div>
                  
                  <span className="text-xs font-semibold font-space tracking-wider uppercase text-neon-cyan/80">
                    {ach.competition}
                  </span>

                  <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed mt-1">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
