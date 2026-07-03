'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Check, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import confetti from 'canvas-confetti';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'bhushanv.dev@gmail.com', href: 'mailto:bhushanv.dev@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
];

const socials = [
  { icon: FaGithub, url: 'https://github.com', label: 'GitHub', color: 'hover:border-white/30 hover:text-white' },
  { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:border-[#0077b5]/30 hover:text-[#0077b5]' },
  { icon: FaResearchgate, url: 'https://researchgate.net', label: 'ResearchGate', color: 'hover:border-[#00ccbb]/30 hover:text-[#00ccbb]' },
  { icon: SiLeetcode, url: 'https://leetcode.com', label: 'LeetCode', color: 'hover:border-[#ffa116]/30 hover:text-[#ffa116]' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2500);
      return;
    }

    setStatus('sending');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      
      // Trigger futuristic confetti explosion
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#0066ff', '#00f2fe', '#9d4edd', '#ffffff'],
      });

      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background glow top-right */}
      <div className="absolute top-[25%] -right-[15%] w-[450px] h-[450px] rounded-full bg-neon-cyan/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 items-center text-center">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-neon-cyan uppercase">
            Communication
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-white">
            GET IN TOUCH
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan mt-1" />
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] glass-panel flex flex-col gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold font-space text-white">
                  Let's Build Something Exceptional
                </h3>
                <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                  Have an innovative project, research opportunity, or engineering opening? Reach out via form or direct links.
                </p>
              </div>

              {/* Direct Info */}
              <div className="flex flex-col gap-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-4 text-neutral-300 hover:text-white transition-all duration-300 cursor-none interactive-card hover:border-neon-cyan/35"
                  >
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-400">
                      <info.icon className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-space tracking-wider uppercase text-neutral-500">
                        {info.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold font-space">
                        {info.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Channels Connect */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-space tracking-widest text-neutral-500 uppercase">
                  Connected Networks
                </span>
                <div className="flex items-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-neutral-400 transition-all duration-300 cursor-none flex items-center justify-center interactive-card flex-grow ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Form fields */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.01] glass-panel flex flex-col gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] font-space font-semibold tracking-wider text-neutral-400 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Nikola Tesla"
                  disabled={status === 'sending' || status === 'success'}
                  className="px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-soft-white placeholder-neutral-600 focus:outline-none focus:border-neon-cyan/45 focus:bg-white/[0.04] transition-all duration-300 font-sans text-xs sm:text-sm cursor-none"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] font-space font-semibold tracking-wider text-neutral-400 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. nikola@tesla.com"
                  disabled={status === 'sending' || status === 'success'}
                  className="px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-soft-white placeholder-neutral-600 focus:outline-none focus:border-neon-cyan/45 focus:bg-white/[0.04] transition-all duration-300 font-sans text-xs sm:text-sm cursor-none"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-space font-semibold tracking-wider text-neutral-400 uppercase">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="What shall we build?"
                  disabled={status === 'sending' || status === 'success'}
                  className="px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-soft-white placeholder-neutral-600 focus:outline-none focus:border-neon-cyan/45 focus:bg-white/[0.04] transition-all duration-300 font-sans text-xs sm:text-sm cursor-none resize-none"
                />
              </div>

              {/* Interactive Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`relative w-full py-4.5 rounded-xl font-space text-xs font-bold tracking-wider uppercase cursor-none transition-all duration-300 flex items-center justify-center gap-2 group border border-white/10 ${
                  status === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/15'
                    : status === 'error'
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                    : 'bg-gradient-to-r from-electric-blue via-neon-cyan to-neon-purple text-white shadow-xl shadow-electric-blue/15 hover:shadow-neon-cyan/20'
                }`}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {status === 'idle' && (
                  <>
                    <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Transmit Message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Transmitting...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 animate-pulse" />
                    Message Sent Successfully!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    Please fill out all fields.
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
