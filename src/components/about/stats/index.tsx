import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

import StateWiseRegistrationMap from './map';
import AboutGender from './gender';


const INCTFJStats = ({ stats }) => {

  const statsPreviewer = () => [
    { value: stats?.registrations || 0, title: 'Total Participants' },
    { value: stats?.regToday || 0, title: 'Registrations Today' },
    { value: stats?.totalInstitutions || 0, title: 'Schools Participating' },
  ];

  return (
    <div id="our-reach" className="py-16 md:py-24 px-4 select-none relative overflow-hidden">
      {/* Subtle accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-digital/5 to-transparent pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="font-mono text-xs text-sky-digital mb-4 text-center uppercase tracking-widest">
          // OPERATIONAL SCALE
        </div>
        <div className="w-16 h-0.5 bg-alert-crimson mx-auto mb-6"></div>
        <h2 className="text-center mb-12 text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-ghost-white tracking-wide">
          InCTF Jr 21 is one of the world's largest CTF
        </h2>
      </motion.div>

      <div className="relative z-10 flex flex-wrap py-8 text-center mx-0">
        {statsPreviewer().map((s, i) => (
          <motion.div
            className="w-1/2 md:w-1/3 p-3"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="p-6 rounded-xl border border-sky-digital/20 bg-sky-digital/5 hover:border-sky-digital/40 hover:bg-sky-digital/10 transition-all duration-300">
              <h2 className="text-sky-digital mb-3 font-bold font-mono text-4xl md:text-5xl">
                <CountUp delay={0.5} duration={4.5} end={s.value} />
              </h2>
              <h4 className="mb-0 font-mono text-slate-400 text-sm md:text-base tracking-wide">{s.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 flex flex-wrap items-center mt-12">
        <div className="md:w-1/3 order-2 md:order-1 w-full">
          <AboutGender data={stats} />
        </div>
        <div className="md:w-1/3 w-full order-1 md:order-2 md:mt-0 mt-6">
          <StateWiseRegistrationMap data={stats} />
        </div>
      </div>
    </div>
  );

};

export default INCTFJStats;