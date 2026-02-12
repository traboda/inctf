import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const sponsorsModule = require(`../../data/${eventID}/sponsors`);
// Handle both CommonJS and ES module exports
const data = Array.isArray(sponsorsModule) ? sponsorsModule : (sponsorsModule.default || []);

const SponsorsSection = () => {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border border-sky-digital/20 bg-sky-digital/5 p-6 md:p-8 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
      {data.map((sponsor, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-wrap"
          key={index}
        >
          <div className="font-mono text-xs text-sky-digital mb-2 w-full uppercase tracking-widest text-center">// {sponsor.label}</div>
          <div className="w-full p-0 mt-2 mb-4">
            <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-3"></div>
            <div className="text-sky-digital font-semibold font-mono text-xl text-center">{sponsor.label}</div>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-center text-slate-400 font-mono text-sm mb-6 leading-relaxed">
              {sponsor.desc}
            </p>
          </div>
          <div className="flex flex-wrap mx-0 w-full">
            {sponsor.sponsors.map((sponsor, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="w-1/3 items-center flex justify-center p-1 md:p-3"
                key={index}
              >
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg border border-sky-digital/10 bg-sky-digital/5 hover:border-sky-digital/30 hover:bg-sky-digital/10 transition-all duration-300 group"
                >
                  <Image
                    loading="lazy"
                    src={`/inctf/${sponsor.path}`}
                    draggable="false"
                    alt="Sponsor Logo"
                    className="h-16 md:h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    height={200}
                    width={300}
                  />
                  {sponsor?.desg && (<div className="text-sm mt-3 font-mono text-slate-400">{sponsor.desg}</div>)}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default SponsorsSection;