import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, Radio, Terminal, ChevronRight, Crosshair } from 'lucide-react';

import animations from '../../animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

import TypewriterText from '../shared/TypewriterText';

const HeaderContainer = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  #landing-header-cover-image {
    max-height: 70vh;
    filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.4));
  }
`;

const GlitchText = ({ text, className = "" }: { text: string, className?: string }) => (
  <span className={`glitch relative inline-block ${className}`} data-text={text}>
    {text}
  </span>
);

const LandingHeader = () => {
  return (
    <HeaderContainer>
      <motion.div
        className="scanlines"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>
      <div className="container mx-auto px-4 relative z-20">
        {/* HUD Elements */}
        <motion.div
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{ width: 64, height: 64, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          className="absolute top-0 left-0 p-4 border-l-2 border-t-2 border-alert-crimson"
        ></motion.div>
        <motion.div
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{ width: 64, height: 64, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          className="absolute bottom-0 right-0 p-4 border-r-2 border-b-2 border-sky-digital"
        ></motion.div>

        <div className="flex flex-wrap items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            {/* Mission Alert Status */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-alert-crimson/10 border border-alert-crimson/30 rounded-full mb-8"
            >
              <AlertTriangle size={18} className="text-alert-crimson animate-pulse" />
              <span className="font-tactical text-alert-crimson tracking-widest text-sm font-bold">
                MISSION ALERT STATUS: ACTIVE
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black font-heading mb-2 text-white tracking-tighter">
              <span className="block text-2xl md:text-3xl font-tactical text-sky-digital mb-2 tracking-widest font-normal">
                <TypewriterText text="AMRITA InCTF 2026" delay={0.2} />
              </span>
              <TypewriterText text="OPERATION" delay={1.5} /> <TypewriterText text="VAJRA" className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600" delay={2.5} />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="text-lg md:text-xl text-slate-300 font-mono mt-6 mb-8 border-l-4 border-sky-digital pl-6 max-w-2xl leading-relaxed"
            >
              <span className="text-sky-400 font-bold">{"//"} <TypewriterText text="MISSION BRIEF:" delay={3.5} /></span>
              <span className="block mt-2">
                {data.Desc}
              </span>
              <span className="text-sm mt-3 block text-slate-400">
                {data.subDesc}
              </span>
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <Link href="#mission-control" className="plain-link">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-alert-crimson hover:bg-red-700 text-white font-bold font-tactical tracking-wider uppercase clip-corner-br transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)]"
                >
                  <Terminal size={20} />
                  Enter Mission Control
                </motion.button>
              </Link>

              <Link href="#mission-brief" className="plain-link">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.2, type: "spring" }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-transparent border border-sky-digital text-sky-digital font-bold font-tactical tracking-wider uppercase clip-corner-tl hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all"
                >
                  <Radio size={20} />
                  View Mission Brief
                </motion.button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 1 }}
              className="mt-12 flex items-center gap-4 text-xs font-mono text-slate-500"
            >
              <div className="flex items-center gap-2">
                <Crosshair size={14} />
                <span>TARGET: NATIONAL RESILIENCE</span>
              </div>
              <div className="h-4 w-[1px] bg-slate-700"></div>
              <div>SECURE TRANSMISSION ESTABLISHED</div>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-2/5 mt-12 lg:mt-0 relative flex justify-center"
          >
            {/* Rotating HUD Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-sky-digital/20 rounded-full animate-spin-slow pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-dashed border-alert-crimson/20 rounded-full animate-reverse-spin pointer-events-none"></div>

            <img
              id="landing-header-cover-image"
              src="/inctf/assets/satellite-wireframe.png"
              alt="ECHO-9 Satellite"
              className="relative z-10"
              draggable="false"
            />

            {/* Signal Waves */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default LandingHeader;
