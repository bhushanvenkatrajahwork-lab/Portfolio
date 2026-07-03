'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, X, Eye, ShieldAlert, Cpu, 
  Lightbulb, Rocket, ListFilter, Activity 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  futureScope: string;
  githubUrl: string;
  demoUrl: string;
  imageIcon: React.ElementType;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ChargeWise AI EV',
    shortDesc: 'AI-powered EV intelligence system analyzing driving data for battery optimization and charging recommendations.',
    overview: 'ChargeWise AI is a telemetry analytics platform that bridges electric vehicle battery management systems with advanced cloud intelligence to extend battery lifespans and maximize vehicle range.',
    problem: 'EV battery cells degrade rapidly due to unoptimized fast-charging cycles and aggressive driving behaviors, while range anxiety remains a primary barrier for vehicle adoption.',
    solution: 'Designed machine learning models running on real-time vehicle telematics data to predict cell state-of-health (SoH) and suggest personalized, optimal charge schedules and range-maximizing routing.',
    tech: ['Python', 'PyTorch', 'Streamlit', 'Pandas', 'Scikit-Learn'],
    features: [
      'Real-time State of Health (SoH) and Remaining Useful Life (RUL) estimation.',
      'Dynamic battery pre-conditioning alerts based on route destination.',
      'Optimal smart charging schedules balancing electricity grid tariffs.'
    ],
    futureScope: 'Integrating as an embedded app inside Android Automotive OS (AAOS) for zero-latency vehicle console integration.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    imageIcon: Cpu,
  },
  {
    id: 2,
    title: 'Intelligence in EV using IoT',
    shortDesc: 'IoT sensors monitor electric vehicle performance parameters for smarter maintenance and enhanced efficiency.',
    overview: 'A smart IoT hardware-software framework mapping real-time drive-train dynamics, thermal state, and cell voltage of light electric vehicles.',
    problem: 'Electric vehicles often lack low-cost diagnostic retrofits, resulting in delayed detection of mechanical anomalies or motor over-heating.',
    solution: 'Engineered an ESP32 micro-controller sensor array measuring temperature, current, and speed, publishing data via MQTT protocol to a dashboard representing structural battery packs.',
    tech: ['C++', 'ESP32', 'Node.js', 'React', 'MQTT', 'Websockets'],
    features: [
      'Multichannel thermal tracking for battery hot-spots detection.',
      'Sensory dashboard rendering live gauge components.',
      'Emergency remote power cutoff utility triggered over WebSockets.'
    ],
    futureScope: 'Deploying lightweight Edge AI classification networks directly on the micro-controller for offline failure categorization.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    imageIcon: Activity,
  },
  {
    id: 3,
    title: 'Pyrolysis Waste-to-Energy',
    shortDesc: 'Converts municipal waste into syngas through automated pyrolysis for clean, sustainable electricity.',
    overview: 'An environmental computing project automation mapping temperatures and gas sensors inside a pyrolysis chamber transforming waste plastic into energy.',
    problem: 'Uncontrolled landfill waste volume and high carbon-footprints of grid energy call for decentralized clean fuels.',
    solution: 'Programmed feedback control loops tracking thermal and gaseous outputs of the chemical process, capturing synthetic gas output data.',
    tech: ['Arduino', 'Python', 'Django', 'Tailwind CSS', 'Serial IO'],
    features: [
      'Proportional-Integral-Derivative (PID) controller maintaining optimal cracking temperature.',
      'Gas density sensing and composition visualization.',
      'Automated visual diagnostic maps checking thermal limits.'
    ],
    futureScope: 'Deploying closed-loop turbine generator metrics to automate grid-tied energy flow reporting.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    imageIcon: Lightbulb,
  },
  {
    id: 4,
    title: 'Equipment Failure Prediction',
    shortDesc: 'Predictive maintenance using vibration, temperature, and performance analytics with ML classification.',
    overview: 'An industrial IoT diagnostic utility predicting mechanical failures of rotating shafts, bearings, and electric pumps.',
    problem: 'Unplanned industrial equipment down-time costs manufacturing facilities millions, with classical threshold alarms sounding too late.',
    solution: 'Designed anomaly detection and vibration FFT frequency peak analyses, predicting failures hours before occurrence.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'IoT Sensors', 'NumPy'],
    features: [
      'Vibration Fast Fourier Transform (FFT) extraction pipeline.',
      'Real-time remaining useful life calculation dashboard.',
      'Automated SMS/Email notification alerts triggered by anomalous patterns.'
    ],
    futureScope: 'Integrating temporal Convolutional Networks (TCN) to track historical degradation trends in multi-axis setups.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    imageIcon: ShieldAlert,
  },
  {
    id: 5,
    title: 'Smart Parking System',
    shortDesc: 'Real-time parking allocation platform utilizing sensor nodes to reduce search traffic congestion.',
    overview: 'A smart city infrastructure system checking vacant spaces, routing drivers directly, and saving city emissions.',
    problem: 'Drivers searching for vacant urban parking contribute to over 30% of inner-city traffic congestion and emissions.',
    solution: 'Implemented physical ultrasonic sensor arrays combined with computer vision feeds mapping parking grids in real time.',
    tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'OpenCV', 'Express'],
    features: [
      'Live parking layout display with automated empty slot highlights.',
      'Digital pre-booking parking slot system.',
      'Integrated QR code booking scanners.'
    ],
    futureScope: 'Adding camera feeds processing via edge TPU accelerators to support autonomous self-parking guidance mapping.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    imageIcon: Rocket,
  },
  {
    id: 6,
    title: 'AI Travel Concierge Agent',
    shortDesc: 'Multi-agent travel coordination planner powered by LLMs, API toolsets, and workflow charts.',
    overview: 'An artificial intelligence concierge agent generating contextual travel itineraries using multi-agent workflow systems.',
    problem: 'Travel search filters return rigid template options instead of contextually adjusting to dynamic user preferences.',
    solution: 'Engineered an AI agent workspace with specialized sub-agents executing searching, budget checking, and itinerary formatting.',
    tech: ['Next.js', 'LangChain', 'Python', 'N8N', 'Tailwind CSS'],
    features: [
      'Multi-agent conversation workflows mapping flight options.',
      'Real-time weather API checks updating schedule events.',
      'Interactive vector maps previewing schedules.'
    ],
    futureScope: 'Deploying direct payment and booking agents integrating open APIs of hoteliers.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    imageIcon: ListFilter,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Glow mesh top-left */}
      <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-electric-blue/10 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            SELECTED PROJECTS
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const ProjectIcon = project.imageIcon;
            return (
              <motion.div
                key={project.id}
                className="relative rounded-2xl border border-white/5 bg-white/[0.01] glass-panel glow-card flex flex-col justify-between overflow-hidden interactive-card group p-6 h-[320px] transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Upper container */}
                <div className="flex flex-col gap-4">
                  {/* Decorative glowing icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-neutral-400 group-hover:text-neon-cyan group-hover:border-neon-cyan/40 transition-colors duration-300">
                    <ProjectIcon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-space text-white tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-xs sm:text-sm font-sans line-clamp-3 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Footer interactive bar */}
                <div className="flex items-center justify-between mt-6 border-t border-white/5 pt-4">
                  {/* Tech stack inline */}
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-space font-medium tracking-wider uppercase text-neutral-500">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Deep dive CTA */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2.5 rounded-full bg-white/[0.03] border border-white/5 hover:border-neon-cyan/50 text-neutral-400 hover:text-neon-cyan transition-colors cursor-none flex items-center justify-center"
                    aria-label={`View details of ${project.title}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Futuristic Deep Dive Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Modal backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal window container */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#070707] glass-panel z-10 p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-8 scrollbar-thin"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              {/* Close trigger */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/15 text-neutral-400 hover:text-white transition-colors cursor-none flex items-center justify-center z-20"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/5 pb-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-space tracking-[0.2em] text-neon-cyan uppercase font-semibold">
                      Tech Deep Dive
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_#00f2fe]" />
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold font-space text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Live and GitHub triggers */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/5 hover:border-white/15 bg-white/[0.02] text-xs font-space tracking-wider uppercase text-soft-white hover:text-white cursor-none transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    Source Code
                  </a>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-electric-blue to-neon-cyan text-xs font-space tracking-wider uppercase text-white shadow-lg shadow-electric-blue/20 hover:shadow-neon-cyan/20 cursor-none transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Modal Body: Split Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left block (Overview, Problem, Solution) */}
                <div className="md:col-span-8 flex flex-col gap-6">
                  {/* Overview */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-bold font-space tracking-widest text-neutral-400 uppercase">
                      Overview
                    </h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>

                  {/* Problem */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-bold font-space tracking-widest text-neutral-400 uppercase">
                      The Problem
                    </h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-bold font-space tracking-widest text-neutral-400 uppercase">
                      The Solution
                    </h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Right block (Technologies, Features, Future Scope) */}
                <div className="md:col-span-4 flex flex-col gap-6">
                  {/* Tech stack grid */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-bold font-space tracking-widest text-neutral-400 uppercase">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-space font-semibold tracking-wider text-neon-cyan bg-neon-cyan/5 border border-neon-cyan/15 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-bold font-space tracking-widest text-neutral-400 uppercase">
                      Key Features
                    </h4>
                    <ul className="flex flex-col gap-2 pl-4 list-disc text-neutral-300 text-xs sm:text-sm">
                      {selectedProject.features.map((feat, index) => (
                        <li key={index} className="leading-relaxed">
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Future Scope */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-bold font-space tracking-widest text-neutral-400 uppercase">
                      Future Scope
                    </h4>
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.futureScope}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
