import React from 'react';
import { motion } from 'framer-motion';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/about.json`);

const UNSDGSection = () => (
  <div className="py-16 md:py-24 relative overflow-hidden">
    {/* Subtle gradient accent instead of solid pink background */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-alert-crimson/10 to-transparent pointer-events-none"></div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative z-10 py-6 text-center px-4"
    >
      <div className="font-mono text-xs text-sky-digital mb-4 uppercase tracking-widest">
        // GLOBAL ALIGNMENT
      </div>
      <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-6"></div>
      <h3 className="text-lg lg:text-2xl text-ghost-white font-mono font-bold mb-6 tracking-wide">
        {data.CoverImage3.header}
      </h3>
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        alt="United Nations Sustainable Development Goals"
        src={`${eventID}/${data.CoverImage3.headerImage}`}
        draggable="false"
        style={{ maxHeight: '150px' }}
        className="inline border border-sky-digital/20 rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.1)]"
      />
    </motion.div>

    <div className="relative z-10 flex justify-center text-center items-center mt-8">
      <div style={{ maxWidth: '900px', width: '100%' }}>
        <div className="flex flex-wrap justify-center items-center">
          {data.CoverImage3.subImages.map((img: any, i: number) => (
            <motion.div
              className="w-1/2 md:w-1/4 p-2"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <img
                alt={img.alt}
                src={`/${eventID}/${img}`}
                draggable="false"
                className="inline rounded-lg border border-sky-digital/20 shadow-[0_0_15px_rgba(56,189,248,0.08)] hover:border-sky-digital/40 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default UNSDGSection;