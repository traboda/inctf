import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Terminal } from 'lucide-react';
import animation from '@/src/animation';

const LandingAboutInCTF = () => (
  <section className="container mx-auto py-20 px-6 md:px-8" id="what-is-inctf">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Main Brief Column */}
      <div className="lg:w-1/2">
        <motion.div
          variants={animation}
          initial="hiddenScale"
          whileInView="tacticalFocus"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
            <Terminal size={14} /> Operation Overview
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 uppercase tracking-wider">
            What is <span className="text-cyan-400">InCTF?</span>
          </h2>

          <div className="text-lg md:text-xl text-slate-200 border-l-4 border-cyan-500 pl-6 py-2 mb-8 font-medium leading-relaxed bg-gradient-to-r from-cyan-500/10 to-transparent">
            <p className="mb-4">
              InCTF is a national-level ethical hacking championship run by Team bi0s in association with Amrita Vishwa Vidyapeetham and the Amrita Center for Cyber Security. The programme is designed for college students and professionals who want to learn, compete, and grow in cybersecurity.
            </p>
            <p>
              Started in 2010, InCTF has reached over 1,000+ university students across India from 25 states through its contest and training ecosystem.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Operational Column */}
      <div className="lg:w-1/2 w-full">
        <motion.div
          variants={animation}
          initial="hiddenBlur"
          whileInView="tacticalFocus"
          viewport={{ once: true }}
          className="bg-obsidian border border-slate-800 p-6 md:p-8 rounded-xl relative overflow-hidden shadow-[0_0_25px_rgba(56,189,248,0.1)]"
        >
          <h3 className="font-mono text-cyan-400 text-sm mb-6 uppercase tracking-widest font-bold border-b border-slate-800 pb-4">Key Highlights</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="bg-sky-500/10 p-2 rounded text-cyan-400 mt-1 shrink-0">
                <Target size={20} />
              </div>
              <p className="text-slate-300 leading-relaxed font-medium">
                multi-month, world-class programme.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-sky-500/10 p-2 rounded text-cyan-400 mt-1 shrink-0">
                <ShieldCheck size={20} />
              </div>
              <p className="text-slate-300 leading-relaxed font-medium">
                Beginner-friendly learning path with room for advanced participation.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-sky-500/10 p-2 rounded text-cyan-400 mt-1 shrink-0">
                <Users size={20} />
              </div>
              <p className="text-slate-300 leading-relaxed font-medium">
                Organized by Team bi0s and supported by Amrita's cybersecurity ecosystem.
              </p>
            </li>
          </ul>
          
          <div className="mt-8 p-6 border border-sky-digital/30 bg-sky-digital/5 rounded relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-sky-digital"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-sky-digital"></div>
            <p className="font-mono text-cyan-300 text-sm italic text-center">
              "Learn, compete, and grow in cybersecurity."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LandingAboutInCTF;