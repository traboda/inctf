import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const PastINCTFSpeakers = () => {

  const speakers = [
    { 'image': '/assets/images/photos/speakers/1.jpg' },
    { 'image': '/assets/images/photos/speakers/2.jpg' },
    { 'image': '/assets/images/photos/speakers/11.jpg' },
    { 'image': '/assets/images/photos/speakers/3.jpg' },
    { 'image': '/assets/images/photos/speakers/4.jpg' },
    { 'image': '/assets/images/photos/speakers/5.jpg' },
    { 'image': '/assets/images/photos/speakers/6.jpg' },
    { 'image': '/assets/images/photos/speakers/7.jpg' },
    { 'image': '/assets/images/photos/speakers/8.jpg' },
    { 'image': '/assets/images/photos/speakers/9.jpg' },
    { 'image': '/assets/images/photos/speakers/10.jpg' },
    { 'image': '/assets/images/photos/speakers/12.jpg' }];

  const [currHighlight, setHighlight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setHighlight(Math.floor(Math.random() * 12));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden" suppressHydrationWarning>
      {/* Subtle accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-digital/5 to-transparent pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 py-4 mb-8"
      >
        <div className="font-mono text-xs text-sky-digital mb-4 uppercase tracking-widest">
          // FIELD OPERATIVES
        </div>
        <div className="w-12 h-0.5 bg-alert-crimson mb-4"></div>
        <h4 className="font-bold font-mono text-2xl text-ghost-white tracking-wide mb-1">
          Talks &amp; Sessions
        </h4>
        <h5 className="text-slate-400 font-mono text-sm tracking-wide">
          By Leading Professionals &amp; Security Researchers
        </h5>
      </motion.div>

      <div className="relative z-10 flex flex-wrap mx-0 items-center">
        {speakers.map((s, index) => (
          <motion.div
            className="w-1/3 md:w-1/5 p-1.5"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * index }}
          >
            <div className="relative group overflow-hidden rounded-lg border border-sky-digital/20 hover:border-sky-digital/50 transition-all duration-500">
              <img
                alt="Speaker"
                draggable="false"
                src={s.image}
                className="w-full transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  transform: mounted && index === currHighlight ? 'scale(1.1)' : undefined,
                }}
              />
              {/* Glow overlay on highlight */}
              <div
                className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                style={{
                  opacity: mounted && index === currHighlight ? 1 : 0,
                  boxShadow: 'inset 0 0 20px rgba(56, 189, 248, 0.15)',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

};

export default PastINCTFSpeakers;