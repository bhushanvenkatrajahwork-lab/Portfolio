'use client';

import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDna 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiMongodb, SiDjango, SiStreamlit, SiFlutter, SiN8N 
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: FaPython, color: 'hover:text-[#3776AB]' },
      { name: 'C++', icon: SiCplusplus, color: 'hover:text-[#00599C]' },
      { name: 'JavaScript', icon: FaJs, color: 'hover:text-[#F7DF1E]' },
    ],
  },
  {
    title: 'Web Core',
    skills: [
      { name: 'React', icon: FaReact, color: 'hover:text-[#61DAFB]' },
      { name: 'Next.js', icon: () => (
        <svg className="w-5 h-5 text-current" viewBox="0 0 128 128" fill="currentColor">
          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm31.8 95.7L50.4 40.5v39.4h-9.5V30h9.2l42.6 51.5V30h9.5v65.7h-6.4z"/>
        </svg>
      ), color: 'hover:text-white' },
      { name: 'Node.js', icon: FaNodeJs, color: 'hover:text-[#339933]' },
      { name: 'HTML', icon: FaHtml5, color: 'hover:text-[#E34F26]' },
      { name: 'CSS', icon: FaCss3Alt, color: 'hover:text-[#1572B6]' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'hover:text-[#47A248]' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Django', icon: SiDjango, color: 'hover:text-[#092E20]' },
      { name: 'Streamlit', icon: SiStreamlit, color: 'hover:text-[#FF4B4B]' },
      { name: 'FlutterFlow', icon: SiFlutter, color: 'hover:text-[#4285F4]' },
      { name: 'N8N', icon: SiN8N, color: 'hover:text-[#FF6C37]' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'hover:text-[#F05032]' },
      { name: 'GitHub', icon: FaGithub, color: 'hover:text-white' },
      { 
        name: 'VS Code', 
        icon: () => (
          <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.982 5.23a.898.898 0 0 0-.37-.621L18.665.485a.927.927 0 0 0-1.189.106L10.37 7.747 3.327 2.308a.933.933 0 0 0-1.184.072L.21 4.382A.9.9 0 0 0 .04 5.48l3.418 6.516L.04 18.513c-.15.348-.09.756.17 1.097l1.933 2.002c.31.32.793.385 1.184.072l7.043-5.439 7.106 7.156c.32.322.82.385 1.189.106l4.947-4.124a.899.899 0 0 0 .37-.621v-13.43zm-7.618 10.45l-3.324-2.553 3.324-2.553V15.68zM3.486 12l9.02-6.953v13.906L3.486 12z"/>
          </svg>
        ), 
        color: 'hover:text-[#007ACC]' 
      },
    ],
  },
  {
    title: 'Bioinformatics & Research',
    skills: [
      { name: 'ClustalX', icon: FaDna, color: 'hover:text-[#E91E63]' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background neon lighting accent */}
      <div className="absolute top-[30%] -right-[15%] w-[500px] h-[500px] rounded-full bg-neon-cyan/10 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col gap-3 mb-16 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            SKILLS & TOOLSETS
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] glass-panel glow-card flex flex-col gap-6 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold font-space tracking-wider uppercase text-neutral-400">
                  {category.title}
                </span>
                <span className="flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              {/* Skills Listing inside Category */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 text-neutral-300 hover:text-white transition-all duration-300 interactive-card"
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: 'rgba(0, 242, 254, 0.4)',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        boxShadow: '0 0 15px rgba(0, 242, 254, 0.15)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SkillIcon className={`w-5 h-5 transition-colors duration-300 ${skill.color}`} />
                      <span className="text-xs font-semibold font-space tracking-wide uppercase">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
