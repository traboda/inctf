import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Trophy, Briefcase, BookOpen, Award, BarChart2 } from 'lucide-react';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const OutcomesSection = styled.section`
  padding: 6rem 0;
  background: rgba(2, 6, 23, 0.4);
  border-top: 1px solid rgba(56, 189, 248, 0.1);
  border-bottom: 1px solid rgba(56, 189, 248, 0.1);
`;

const OutcomeCard = ({ title, desc, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-obsidian border-glass p-6 hover:bg-sky-digital/5 transition-all group"
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="p-3 bg-sky-digital/10 rounded-lg text-sky-digital group-hover:text-white group-hover:bg-sky-digital transition-all">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold font-tactical text-white tracking-wide uppercase">{title}</h3>
    </div>
    <p className="text-slate-400 font-mono text-sm leading-relaxed pl-2 border-l border-slate-700 ml-4 group-hover:border-sky-digital/50 transition-colors">
      {desc}
    </p>
  </motion.div>
);

const LandingMissionOutcomes = () => {

  const outcomes = [
    { icon: Trophy, title: data.MissionOutcomes[0].title, desc: data.MissionOutcomes[0].description },
    { icon: Briefcase, title: data.MissionOutcomes[1].title, desc: data.MissionOutcomes[1].description },
    { icon: BookOpen, title: data.MissionOutcomes[2].title, desc: data.MissionOutcomes[2].description },
    { icon: Award, title: data.MissionOutcomes[3].title, desc: data.MissionOutcomes[3].description },
    { icon: BarChart2, title: data.MissionOutcomes[4].title, desc: data.MissionOutcomes[4].description },
  ];

  return (
    <OutcomesSection id="mission-outcomes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase">MISSION OUTCOMES</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-alert-crimson to-transparent mx-auto"></div>
          <p className="text-slate-400 mt-4 font-mono text-sm uppercase tracking-widest">
                  // REWARDS FOR SUCESSFUL OPERATIONS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, i) => (
            <OutcomeCard
              key={i}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </OutcomesSection>
  );
};

export default LandingMissionOutcomes;