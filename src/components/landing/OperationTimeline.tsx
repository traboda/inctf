'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Trophy, MousePointer2, ChevronRight, ChevronDown } from 'lucide-react';

const timelineEvents = [
  {
    date: "APRIL",
    title: "Masterclass",
    description: "Talks + training + mock CTF",
    icon: <Calendar className="w-5 h-5" />,
    status: "ready",
    coords: "01.04"
  },
  {
    date: "MAY 23 / 24",
    title: "Qualifiers",
    description: "Online jeopardy round",
    icon: <Target className="w-5 h-5" />,
    status: "locked",
    coords: "09.05"
  },
  {
    date: "JULY",
    title: "Finals",
    description: "On-site competition",
    icon: <Trophy className="w-5 h-5" />,
    status: "final",
    coords: "07.26"
  }
];

const RedReticleOverlay = () => (
  <div className="absolute -inset-1 pointer-events-none z-20">
    {/* Red Corners */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500"></div>
    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500"></div>
    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500"></div>
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500"></div>
  </div>
);

const OperationTimeline = () => {
  return (
    <section className="py-24 bg-obsidian border-y border-sky-digital/10 relative overflow-hidden font-mono">
      {/* HUD Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scanlines"></div>
      </div>

      {/* Atmospheric Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/inctf/assets/design/Common/grid_pattern.svg')] bg-[length:50px_50px] opacity-[0.03] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="px-6 md:px-16 mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-sky-digital text-xs tracking-[0.3em] uppercase mb-3">
              [ Operation Milestones ]
            </p>
            <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider">
              Mission <span className="text-sky-digital">Timeline</span>
            </h2>
          </motion.div>
          <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-sky-400/60 via-sky-400/20 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Energy Conduit SVG Line */}
          <div className="absolute top-[4.5rem] left-0 w-full h-8 hidden md:block z-0 pointer-events-none">
            <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
              {/* Base Line */}
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-sky-digital/20" />
              
              {/* Moving Pulse 1 */}
              <motion.line 
                x1="0" y1="50%" x2="100%" y2="50%" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-sky-digital shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 0.15, pathOffset: [0, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Moving Pulse 2 (Secondary) */}
              <motion.line 
                x1="0" y1="50%" x2="100%" y2="50%" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="text-white/40"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 0.05, pathOffset: [0, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
              />
            </svg>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 lg:gap-10 relative">
            {/* Card Flow Arrows (Red) - Visible on desktop only */}
            <div className="absolute top-[68%] left-[33.3%] -translate-x-1/2 -translate-y-1/2 hidden md:flex z-20 pointer-events-none text-red-600/80">
              <ChevronRight size={24} strokeWidth={3} className="-mr-4" />
              <ChevronRight size={24} strokeWidth={3} className="-mr-4" />
              <ChevronRight size={24} strokeWidth={3} className="-mr-4" />
              <ChevronRight size={24} strokeWidth={3} className="-mr-4" />
              <ChevronRight size={24} strokeWidth={3} />
            </div>
            <div className="absolute top-[68%] left-[66.6%] -translate-x-1/2 -translate-y-1/2 hidden md:flex z-20 pointer-events-none text-red-600/80">
              <ChevronRight size={24} strokeWidth={3} className="-mr-4" />
              <ChevronRight size={24} strokeWidth={3} className="-mr-4" />
              <ChevronRight size={24} strokeWidth={3} className="-mr-4" />
              <ChevronRight size={24} strokeWidth={3} className="-mr-4" />
              <ChevronRight size={24} strokeWidth={3} />
            </div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="relative flex flex-col items-center group"
              >
                {/* Node with Reticle */}
                <div className="mb-4 relative">
                  <div className="w-20 h-20 bg-obsidian/40 backdrop-blur-sm rounded-xl flex items-center justify-center text-sky-digital transition-all duration-500 relative z-10 overflow-hidden">
                    {/* Interior Scanlines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 group-hover:opacity-40"></div>
                    
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {event.icon}
                    </div>

                  </div>
                  
                  <RedReticleOverlay />
                </div>

                {/* Glassmorphic Tactical Card */}
                <div className="w-full relative px-1">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-obsidian/40 backdrop-blur-xl border border-sky-digital/20 rounded-xl p-5 relative overflow-hidden group/card transition-all duration-500 group-hover:border-sky-digital/60 shadow-[0_10px_40px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] max-w-[310px] mx-auto"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-4 bg-sky-digital/0 group-hover/card:bg-sky-digital/[0.03] transition-colors duration-500 rounded-xl"></div>
                    
                    {/* Top Detail Rail */}
                    <div className="flex justify-between items-center mb-4 relative z-10 border-b border-sky-digital/10 pb-2">
                       <span className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] uppercase">SYSTEM_{event.status}</span>
                    </div>

                    <div className="space-y-3 relative z-10">
                      <div className="font-mono text-cyan-400 text-xs md:text-sm font-black tracking-widest uppercase flex items-center gap-2">
                        <MousePointer2 className="w-3 h-3 animate-pulse" />
                        {event.date}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-wider group-hover:text-sky-digital transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                        {event.title}
                      </h3>
                      <p className="text-sky-digital/70 font-mono text-sm leading-relaxed border-l-2 border-sky-digital/30 pl-3 group-hover:border-sky-digital transition-all">
                        {event.description}
                      </p>
                    </div>

                    {/* Bottom Digital Artifacts */}
                    <div className="mt-6 pt-4 flex gap-1 relative z-10 opacity-30 group-hover:opacity-100 transition-opacity">
                      <div className="h-1 w-8 bg-sky-digital/40"></div>
                      <div className="h-1 w-2 bg-sky-digital/60"></div>
                      <div className="h-1 w-4 bg-sky-digital/20"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile Connector with Downward Chevrons - Enlarged with Gap */}
                {index < timelineEvents.length - 1 && (
                  <div className="flex flex-col items-center gap-1 md:hidden mt-10 mb-8">
                    <div className="flex flex-col items-center -space-y-4 text-red-600/80">
                      <ChevronDown size={32} strokeWidth={3} />
                      <ChevronDown size={32} strokeWidth={3} />
                      <ChevronDown size={32} strokeWidth={3} />
                      <ChevronDown size={32} strokeWidth={3} />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanlines {
          from { transform: translateY(0); }
          to { transform: translateY(4px); }
        }
        .animate-scanlines {
          animation: scanlines 0.2s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        @keyframes spin-medium {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-medium {
          animation: spin-medium 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OperationTimeline;
