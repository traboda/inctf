import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Crosshair, Target, Activity, Wifi, Shield, Flag, Award, Eye, Lock } from 'lucide-react';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const OperationalSection = styled.section`
  padding: 4rem 0;
  overflow: hidden;
`;

const PhaseCard = ({ phase, index }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 md:border-t-2 border-sky-digital/30 md:pt-8 pb-8 md:pb-0 md:text-center group"
  >
    <div className="absolute top-0 left-[-9px] md:top-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-obsidian border-2 border-sky-digital group-hover:bg-sky-digital transition-colors"></div>
    <div className="text-sky-digital font-tactical text-xs tracking-widest mb-2">PHASE {phase.id}</div>
    <h3 className="text-xl font-bold text-white mb-2 font-heading">{phase.title}</h3>
    <p className="text-slate-400 text-sm font-mono leading-relaxed">{phase.desc}</p>
  </motion.div>
);

const LandingOperationalPlan = () => {
  return (
    <OperationalSection className="container mx-auto px-4" id="operational-plan">

      {/* Command Intent */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase flex items-center justify-center gap-3">
            <Crosshair size={32} className="text-alert-crimson" /> COMMAND INTENT
          </h2>
          <p className="text-lg md:text-xl text-slate-300 border-l-4 border-alert-crimson pl-6 py-2 bg-gradient-to-r from-alert-crimson/10 to-transparent text-left md:text-center md:border-l-0 md:border-t-4 md:pt-6">
            {data.OperationalPlan.CommandIntent}
          </p>
        </motion.div>
      </div>

      {/* Objectives */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {data.OperationalPlan.Objectives.map((obj: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-sky-digital/5 border border-sky-digital/10 p-6 rounded hover:bg-sky-digital/10 transition-colors"
          >
            <Target size={24} className="text-sky-400 mb-4" />
            <p className="text-slate-200 font-mono text-sm font-bold">{obj}</p>
          </motion.div>
        ))}
      </div>

      {/* Operation Phases */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-10 text-center uppercase tracking-widest flex items-center justify-center gap-2">
          <Activity className="text-sky-digital" /> Operation Phases
        </h3>
        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-0.5 bg-sky-digital/30"></div>

          {data.OperationalPlan.Phases.map((phase: any, index: number) => (
            <PhaseCard key={index} phase={phase} index={index} />
          ))}
        </div>
      </div>

      {/* Principles & Communication */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Principles */}
        <div className="bg-obsidian border border-slate-700 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="text-alert-crimson" /> COMMAND PRINCIPLES
          </h3>
          <ul className="space-y-4">
            {data.OperationalPlan.Principles.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-slate-300 font-mono">
                <div className="w-2 h-2 bg-alert-crimson rotate-45"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mission Control */}
        <div className="bg-sky-digital/5 border border-sky-digital/20 p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Wifi size={100} />
          </div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Wifi className="text-sky-digital" /> MISSION CONTROL
          </h3>
          <p className="text-slate-300 font-mono text-sm leading-relaxed mb-4">
            {data.OperationalPlan.MissionControl.desc}
          </p>
          <div className="bg-alert-crimson/10 border border-alert-crimson/30 p-3 rounded flex items-start gap-3">
            <Lock size={16} className="text-alert-crimson mt-1 shrink-0" />
            <p className="text-alert-crimson text-xs font-bold font-tactical tracking-wide uppercase">
              {data.OperationalPlan.MissionControl.note}
            </p>
          </div>
        </div>
      </div>

    </OperationalSection>
  );
};

export default LandingOperationalPlan;