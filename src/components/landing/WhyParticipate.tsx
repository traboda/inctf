import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Briefcase, Users, CheckCircle, Rocket } from 'lucide-react';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);


const ReasonsSection = styled.section`
  padding: 8vh 2vw;
  color: #F8FAFC;
  h2 {
    font-weight: 800;
    margin-bottom: 3rem;
    text-align: center;
    font-size: calc(1.5rem + 0.5vw);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Inter', sans-serif;
  }
`;

const EligibilityCard = ({ title, details, icon: Icon, delay }: any) => (
  <motion.div
    variants={animation}
    initial="hiddenScale"
    whileInView="tacticalFocus"
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-obsidian border-glass p-6 rounded-lg hover:border-sky-digital hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all group"
  >
    <div className="mb-4 text-sky-digital group-hover:text-white transition-colors">
      <Icon size={40} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold font-tactical mb-2">{title}</h3>
    <p className="text-slate-400 font-mono text-sm">{details}</p>
  </motion.div>
);

const LandingCrewEligibility = () => {
  return (
    <ReasonsSection className="container mx-auto px-4" id="crew-eligibility">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 border border-alert-crimson/50 text-alert-crimson font-tactical text-xs tracking-widest uppercase mb-4 bg-alert-crimson/5 rounded-full">
          <Users size={14} /> Crew Selection Criteria
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">MISSION CREW ELIGIBILITY</h2>
      </motion.div>

      {/* Eligibility Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <EligibilityCard
          title={data.CrewEligibility[0].title}
          details={data.CrewEligibility[0].details}
          icon={GraduationCap}
          delay={0}
        />
        <EligibilityCard
          title={data.CrewEligibility[1].title}
          details={data.CrewEligibility[1].details}
          icon={Cpu}
          delay={0.1}
        />
        <EligibilityCard
          title={data.CrewEligibility[2].title}
          details={data.CrewEligibility[2].details}
          icon={Briefcase}
          delay={0.2}
        />
        <EligibilityCard
          title={data.CrewEligibility[3].title}
          details={data.CrewEligibility[3].details}
          icon={Users}
          delay={0.3}
        />
      </div>

      {/* Deployment Section */}
      <div className="border-t border-sky-digital/20 pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold font-heading mb-6 flex items-center gap-3">
              <Rocket className="text-alert-crimson" /> DEPLOYMENT OVERVIEW
            </h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              {data.Deployment.Overview}
            </p>
            <div className="p-6 bg-sky-digital/5 border border-sky-digital/20 rounded-lg">
              <h4 className="font-tactical text-sky-400 text-sm uppercase tracking-wider mb-4">Expectations from Crew Members</h4>
              <ul className="space-y-3">
                {data.Deployment.Expectations.map((exp: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300 font-mono text-sm">
                    <CheckCircle size={16} className="text-sky-500 mt-1 shrink-0" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] border border-dashed border-slate-700 rounded-xl flex items-center justify-center bg-obsidian/50"
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[url('/inctf/assets/grid.svg')] opacity-20"></div>
            <div className="text-center relative z-10 p-8">
              <div className="w-24 h-24 mx-auto bg-sky-digital/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Rocket size={48} className="text-sky-digital" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">READY FOR DEPLOYMENT?</h4>
              <p className="text-slate-400 text-sm mb-6">Complete your profile in Mission Control to initiate sequence.</p>
              <button className="px-6 py-3 bg-sky-digital hover:bg-white hover:text-black text-black font-bold font-tactical uppercase tracking-wider transition-all">
                Initiate Deployment
              </button>
            </div>
          </motion.div>
        </div>
      </div>

    </ReasonsSection>
  );
};

export default LandingCrewEligibility;