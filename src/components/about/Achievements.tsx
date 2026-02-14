import React from 'react';
import { motion } from 'framer-motion';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/about.json`);

const AboutAchievements = () => {
  if (!data.Achievements) {
    return null;
  }
  return (
    <div id="impact" className="container mx-auto py-16 md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="font-mono text-xs text-sky-digital mb-4 uppercase tracking-widest">
          // MISSION IMPACT
        </div>
        <div className="w-16 h-0.5 bg-alert-crimson mx-auto mb-6"></div>
        <h2 className="font-bold font-mono text-3xl lg:text-4xl text-ghost-white tracking-wide">
          {data.AchievementsHeader}
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {data.Achievements.map((a: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col items-center text-center p-6 rounded-xl border border-sky-digital/20 bg-sky-digital/5 hover:bg-sky-digital/10 hover:border-sky-digital/40 transition-all duration-300"
          >
            <div className="text-sky-digital font-mono text-xs uppercase tracking-widest mb-4 opacity-80">
              {a.subTitle}
            </div>
            <img
              src={`/${eventID}/${a.image}`}
              alt={a.title}
              style={{ height: '180px' }}
              className="rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.1)] border border-sky-digital/10"
              draggable={false}
            />
            <div className="font-bold font-mono text-xl mt-5 text-ghost-white group-hover:text-sky-digital transition-colors">
              {a.title}
            </div>
            <div className="text-slate-400 font-mono text-sm mt-2 leading-relaxed" style={{ width: '300px', maxWidth: '100%' }}>
              {a.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutAchievements;