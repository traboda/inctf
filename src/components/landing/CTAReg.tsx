import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Radio } from 'lucide-react';
import Link from 'next/link';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const CTASection = styled.section`
   position: relative;
   overflow: hidden;
   border-top: 1px solid rgba(56, 189, 248, 0.3);
   background: radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, rgba(2, 6, 23, 1) 70%);
`;

const LandingJoinMissionControl = ({ UTMSource }: { UTMSource?: string }) => {
  const registerUrl = UTMSource
    ? `${data.CTAreg.button.url}${data.CTAreg.button.url.includes('?') ? '&' : '?'}utm_source=${UTMSource}`
    : data.CTAreg.button.url;

  return (
    <CTASection className="py-20" id="join-mission-control">
      <div className="container mx-auto px-4 text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 text-alert-crimson font-tactical text-sm tracking-widest uppercase mb-4 animate-pulse">
            <Radio size={16} /> SIGNAL STRENGTH: STRONG
          </div>
          {/* Glitch Effect on Title */}
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 glitch" data-text="JOIN MISSION CONTROL">
            JOIN MISSION CONTROL
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-mono leading-relaxed">
            {data.CTAreg.message}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* Primary Action */}
          <a
            href={registerUrl}
            className="group relative px-8 py-4 bg-sky-digital text-black font-bold font-heading text-lg tracking-wider uppercase overflow-hidden"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-3 z-10">
              <Terminal size={20} />
              {data.CTAreg.button.label}
            </span>
          </a>

          {/* Secondary Action */}
          <Link
            href="#mission-brief"
            className="group px-8 py-4 border border-slate-700 text-slate-300 hover:text-white hover:border-sky-digital font-tactical text-sm tracking-widest uppercase transition-all flex items-center gap-3"
          >
            Explore the Mission
          </Link>
        </motion.div>

        {/* Decorative Grid */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[url('/inctf/assets/grid.svg')]"></div>
      </div>
    </CTASection>
  );
};

export default LandingJoinMissionControl;