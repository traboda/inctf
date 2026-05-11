'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Trophy, MousePointer2, ChevronRight, ChevronDown, Terminal } from 'lucide-react';

const timelineEvents = [
  {
    date: "Phase 01",
    title: "Registrations Open",
    description: "Mission portal active. Team formation begins.",
    icon: <Calendar className="w-5 h-5" />,
    status: "active",
    coords: "01.04"
  },
  {
    date: "Phase 02",
    title: "Training Period",
    description: "Access learning resources and interactive workshops.",
    icon: <Terminal className="w-5 h-5" />,
    status: "ready",
    coords: "15.04"
  },
  {
    date: "Phase 03",
    title: "Practice & Prep",
    description: "Solve past challenges in the archive.",
    icon: <MousePointer2 className="w-5 h-5" />,
    status: "ready",
    coords: "01.05"
  },
  {
    date: "Phase 04",
    title: "Online CTF",
    description: "The qualifiers. Top teams advance to the finals.",
    icon: <Target className="w-5 h-5" />,
    status: "locked",
    coords: "09.06"
  },
  {
    date: "Phase 05",
    title: "Final Round",
    description: "On-site showdown at Amrita University.",
    icon: <Trophy className="w-5 h-5" />,
    status: "locked",
    coords: "15.07"
  },
  {
    date: "Phase 06",
    title: "Next Steps",
    description: "Internships and career pathways.",
    icon: <ChevronRight className="w-5 h-5" />,
    status: "final",
    coords: "01.08"
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
    <section className="relative py-24 z-20 overflow-hidden font-mono">
      {/* HUD Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scanlines"></div>
      </div>

      {/* Atmospheric Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/inctf/assets/design/Common/grid_pattern.svg')] bg-[length:50px_50px] opacity-[0.03] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="px-6 md:px-16 mb-10 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <Terminal size={14} /> Operation Milestones
            </div>
            <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider">
              Mission <span className="text-sky-digital">Timeline</span>
            </h2>
          </motion.div>
          <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-6 lg:gap-x-10 relative">

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
