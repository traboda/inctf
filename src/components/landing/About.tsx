import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const DecodingText = ({ text, className }: { text: string; className?: string }) => (
  <motion.span
    initial="hiddenDecoding"
    whileInView="decoding"
    viewport={{ once: true }}
    variants={animation}
    className={className}
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={{
          hiddenDecoding: animation.hiddenChar,
          decoding: animation.charReveal
        }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

const LandingAboutInCTF = () => (
  <section className="container mx-auto py-20 px-4">
    <div>
      <div className="md:hidden flex justify-center mb-6">
        <div className="rounded-none border border-sky-digital/30 bg-sky-digital/10 p-4 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-sky-digital"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-sky-digital"></div>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/5 text-slate-satellite font-mono text-sm mb-4">
              [ MISSION SUPPORT ] <br />
              Have you got stuck? Need Help?
              {' '}
              <span className="inline-block text-sky-digital">
                Join our discord server, ask your doubts & get support from our experts.
              </span>
            </div>
            <div className="w-full flex items-center justify-start">
              <Link href="/discord" className="bg-sky-digital/10 border border-sky-digital text-sky-digital px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-sky-digital hover:text-black transition-all">
                Join Discord
                {' '}
                <i className="fa fa-chevron-right ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <motion.div
          variants={animation}
          initial="hiddenScale"
          whileInView="tacticalFocus"
          viewport={{ once: true }}
          className="w-full md:col-span-2 border-glass p-8 rounded-xl relative"
        >
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-sky-digital opacity-50"></div>
          <h2 className="mb-6 text-4xl font-heading font-bold text-white tracking-tight">
            <DecodingText text="About InCTF" />
          </h2>
          {data.LandingDescINCTF.map((item, index) => (
            <p className="mb-2 md:mb-4 text-base md:text-lg max-w-full text-slate-satellite font-mono leading-relaxed" key={index}>
              {">"} {item}
            </p>
          ))}
        </motion.div>
        <motion.div
          variants={animation}
          initial="hiddenBlur"
          whileInView="tacticalFocus"
          viewport={{ once: true }}
          className="flex justify-start items-center p-6 border-glass rounded-xl"
        >
          <ul className="flex flex-col text-lg font-semibold gap-6 w-full">
            {data.LandingHighlights.map((item, index) => (
              <motion.li
                key={index}
                variants={animation}
                className="flex items-center text-ghost-white font-tactical text-sm uppercase tracking-wide border-b border-slate-700/50 pb-2"
              >
                <span className="text-alert-crimson mr-3 text-xs">[0{index + 1}]</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LandingAboutInCTF;