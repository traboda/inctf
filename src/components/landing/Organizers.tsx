import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const Data = require(`../../data/${eventID}/index.json`);

const OrganizersSection = styled.section`
    user-select: none;
    .content-container {
      h3 {
          text-align: center;
          font-weight: 700;
          font-size: 26px;
          text-transform: uppercase;
          color: #E11D48; /* alert-crimson */
          margin-bottom: 2rem;
          font-family: 'Inter', sans-serif;
          letter-spacing: 1px;
        }
        h4 {
          font-size: 18px;
          font-weight: 600;
          color: #F8FAFC; /* ghost-white */
          font-family: 'Inter', sans-serif;
        }
        img {
          max-height: 78px;
          max-width: 100%;
          margin-bottom: 1rem;
          filter: brightness(0) invert(1); /* Make logos white if possible, or just readable */
          opacity: 0.8;
          transition: 0.3s;
        }
        img:hover {
            opacity: 1;
            filter: none;
        }
        .md\\:w-1\\/3 {
            padding: 1rem;
            p {
              font-size: 12px;
              max-width: 450px;
              margin-bottom: 0;
              color: #94A3B8; /* slate-satellite */
              font-family: 'JetBrains Mono', monospace;
            }
        }
    }
    img {
      max-width: 100%;
    }
`;

const OrganizerCard = ({ name, logo, header, desc, index }: any) => (
  <motion.div
    variants={animation}
    initial="hiddenScale"
    whileInView="tacticalFocus"
    viewport={{ once: true }}
    custom={index}
    className="group relative bg-obsidian border-glass p-8 flex flex-col items-center text-center hover:bg-sky-digital/5 transition-all"
  >
    {/* Corner Accents */}
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-digital/30 group-hover:border-sky-digital transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-digital/30 group-hover:border-sky-digital transition-colors"></div>

    <div className="mb-6 relative">
      <div className="absolute inset-0 bg-sky-digital/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity"></div>
      <img src={logo} alt={name} className="h-24 w-auto object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500" />
    </div>

    <h4 className="text-sky-digital font-tactical text-xs tracking-widest uppercase mb-2">{header}</h4>
    <h3 className="text-2xl font-black font-heading text-white mb-4">{name}</h3>

    <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-sm">
      {desc}
    </p>
  </motion.div>
);

const LandingMissionCredentials = () => (
  <OrganizersSection>
    <div className="container mx-auto content-container px-4 py-10" id="mission-credentials">
      <motion.h3
        variants={animation}
        initial="fade"
        whileInView="animated"
        className="flex items-center justify-center gap-2"
      >
        <ShieldCheck className="text-alert-crimson" />
        MISSION CREDENTIALS
      </motion.h3>
      <div className="flex flex-wrap grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
        {Data.Organizers.map((org: any, index: number) => (
          <OrganizerCard
            key={`${org.name}_${index}`}
            name={org.name}
            logo={`/${eventID}/${org.logo}`}
            header={org.header}
            desc={org.desc}
            index={index}
          />
        ))}
      </div>
    </div>
  </OrganizersSection>
);

export default LandingMissionCredentials;