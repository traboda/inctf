import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Terminal, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styled from '@emotion/styled';

const MotionLink = motion(Link);
const TrainingWrapper = styled.section`
  position: relative;
  padding: 4rem 0;
  /* overflow: hidden; Removed to prevent potential clipping during animations */
`;

const LandingTrainingSection = () => {
  const animation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <TrainingWrapper className="container mx-auto px-6 md:px-8 z-20" id="training-learning">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Column - Content */}
        <div className="lg:w-1/2 w-full">
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-6 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <BookOpen size={14} /> Masterclass / Training
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-wide font-heading leading-tight">
              InCTF Training <span className="text-sky-400">& Learning</span>
            </h2>
            
            <div className="text-slate-300 space-y-4 text-base md:text-lg leading-relaxed font-mono">
              <p>
                InCTF provides comprehensive training-related content, including a live training schedule and a rich repository of learning resources. 
              </p>
              <p>
                Participants can master cybersecurity fundamentals through public resources and guided material both before and during the active competition cycle.
              </p>
            </div>

            <div className="mt-8">
              <MotionLink
                href="/resources"
                initial={{ opacity: 0, y: 20, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                whileInView={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left center" }}
                className="flex sm:inline-flex group px-6 sm:px-8 py-4 sm:py-3 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono tracking-wide whitespace-nowrap items-center justify-center text-center text-sm cursor-pointer w-full sm:w-auto"
              >
                [ View Learning Resources ]
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </MotionLink>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Highlights */}
        <div className="lg:w-1/2 w-full">
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-obsidian border border-slate-800 p-6 md:p-8 rounded-xl relative overflow-hidden shadow-[0_0_25px_rgba(56,189,248,0.1)]"
          >
            <h3 className="font-mono text-cyan-400 text-sm mb-6 uppercase tracking-widest font-bold border-b border-slate-800 pb-4">Training Features</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-sky-500/10 p-2 rounded text-cyan-400 mt-1 shrink-0">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Extensive Platform Ecosystem</h4>
                  <p className="text-slate-400 text-sm">Training and learning resources are readily available through dedicated InCTF pages and linked educational platforms.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-sky-500/10 p-2 rounded text-cyan-400 mt-1 shrink-0">
                  <Terminal size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Writeups</h4>
                  <p className="text-slate-400 text-sm">Participants can revise key concepts and techniques using detailed solution writeups.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-sky-500/10 p-2 rounded text-cyan-400 mt-1 shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Current Edition Materials</h4>
                  <p className="text-slate-400 text-sm">Access specialized session materials, guides, and specific training resources tailored for the current edition of the championship.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </TrainingWrapper>
  );
};

export default LandingTrainingSection;
