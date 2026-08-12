"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const LandingOrganizedBy = () => {
  const organizers = [
    {
      name: "Amrita Vishwa Vidyapeetham",
      desc: "Top-ranked multi-disciplinary research university driving innovation.",
      logo: "/assets/images/logos/amritapuri_dark.png"
    },
    {
      name: "Team bi0s",
      desc: "India's No.1 ranked CTF hacking team and pioneering research group.",
      logo: "/assets/images/logos/bi0s_dark.png"
    },
    {
      name: "Amrita Center for Cyber Security",
      desc: "Dedicated research hub building indigenous cybersecurity capabilities.",
      logo: ""
    }
  ];

  return (
    <section className="relative py-24 z-20" id="organized-by">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <ShieldCheck size={14} /> Mission Control
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide font-heading">
              Mission <span className="text-sky-400">Command</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex justify-center mb-10">
          <a
            href="/sponsors"
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-sky-300 transition hover:border-sky-400 hover:bg-sky-500/20 hover:text-white"
          >
            Sponsors
          </a>
        </div>

        {/* 3 Organizers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizers.map((org, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-8 hover:border-sky-500/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] group flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400/30 group-hover:border-sky-400 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400/30 group-hover:border-sky-400 transition-colors"></div>

              <div className="h-20 mb-6 flex items-center justify-center relative w-full">
                {org.logo ? (
                  <img 
                    src={org.logo} 
                    alt={org.name} 
                    className={`max-h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity z-10 ${org.name.includes('bi0s') ? 'brightness-0 invert' : ''}`}
                  />
                ) : (
                  <div className="w-16 h-16 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 z-10 border border-sky-500/20">
                    <ShieldCheck size={32} />
                  </div>
                )}
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-sky-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide">{org.name}</h3>
              <p className="text-slate-400 font-mono text-xs md:text-sm leading-relaxed">
                {org.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingOrganizedBy;
