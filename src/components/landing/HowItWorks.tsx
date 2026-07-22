import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Terminal, Flag } from 'lucide-react';
import Link from 'next/link';

const ChampionshipSection = styled.section`
  padding: 4rem 0;
  overflow: hidden;
`;

const StepCard = ({ step, index }: { step: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 md:border-t-2 border-sky-500/30 md:pt-8 pb-8 md:pb-0 md:text-center group"
  >
    <div className="absolute top-0 left-[-9px] md:top-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
    <div className="text-cyan-400 font-mono text-xs tracking-widest mb-3 flex items-center md:justify-center gap-2">
      {step.icon} STEP 0{index + 1}
    </div>
    <h3 className="text-xl font-bold text-white mb-2 font-heading">{step.title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
  </motion.div>
);

const steps = [
  {
    title: "Training",
    desc: "Participants use InCTF training resources and supporting learning material to build fundamentals before competing.",
    icon: <BookOpen size={16} />
  },
  {
    title: "Practice",
    desc: "Learners can use the bi0s wiki and related learning channels to practice concepts and improve confidence.",
    icon: <Terminal size={16} />
  },
  {
    title: "Online CTF",
    desc: "Participants compete in the core Capture The Flag contest.",
    icon: <Flag size={16} />
  },
  {
    title: "On-site Championship Finals",
    desc: "Selected participants will be invited to attend the final round in person, where they will compete at the championship event.",
    icon: <Trophy size={16} />
  }
];
const LandingChampionshipWorks = () => {
  return (
    <ChampionshipSection className="container mx-auto px-6 md:px-8 relative z-20" id="how-it-works">
      {/* Title & Subtitle */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
            <Trophy size={14} /> Deployment / Operations
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-wide">
            How the <span className="text-sky-400">Championship Works</span>
          </h2>
          <p className="text-lg md:text-xl text-cyan-400 font-medium">
            Training, practice, competition, and finals.
          </p>
        </motion.div>
      </div>

      {/* 4-Step Process */}
      <div className="mb-16">
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-0.5 bg-sky-500/20"></div>

          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>

    </ChampionshipSection>
  );
};

export default LandingChampionshipWorks;