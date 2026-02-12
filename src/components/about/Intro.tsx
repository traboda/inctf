import React from 'react';
import { motion } from 'framer-motion';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/about.json`);

const InctfIntro = () => {

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 select-none">
      <div className="flex flex-wrap items-center">
        {/* Text Content */}
        <div className="md:w-2/3 pr-4 pl-4 p-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold font-mono text-3xl md:text-4xl text-ghost-white mb-8 tracking-wide">
              {data.header}
            </h1>
            <div className="border-l-2 border-alert-crimson pl-6">
              {data.description.map((item: string, index: number) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-sky-digital font-mono text-sm md:text-base leading-relaxed mb-6"
                >
                  <span className="text-sky-digital mr-2">&gt;</span>
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Participant Images Grid */}
        <div className="md:w-1/3 pr-4 pl-4 p-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-2"
          >
            {data.participants.map((i: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-1"
              >
                <img
                  draggable="false"
                  className="w-full rounded-lg border border-sky-digital/20 shadow-[0_0_15px_rgba(56,189,248,0.08)] hover:border-sky-digital/50 transition-all duration-300"
                  src={`/${eventID}/${i}`}
                  alt="INCTF participant"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );

};

export default InctfIntro;