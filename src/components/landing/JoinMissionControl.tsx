"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionCard from './SectionCard';
import DecodedText from '../shared/DecodedText';

const JoinMissionControl = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-full"
        >
            <SectionCard className="h-full flex flex-col justify-center items-center !p-10">
                <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-black font-mono text-ghost-white mb-6 uppercase tracking-widest">
                    <DecodedText text="Join Mission Control" revealSpeed={60} delay={500} />
                </h2>
                <div className="flex items-start justify-center text-sky-digital font-mono text-base md:text-lg mb-10">
                    <span className="mr-2 text-xl">&gt;</span>
                    <p>Receive mission updates, briefings, timelines, and official communications.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link href="/mission-control">
                        <motion.button
                            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            style={{ boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                            className="px-16 py-6 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono font-bold text-lg tracking-wide rounded"
                        >
                            [ Enter Mission Control ]
                        </motion.button>
                    </Link>

                    <Link href="/mission-brief">
                        <motion.button
                            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            style={{ boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                            className="px-16 py-6 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono font-bold text-lg tracking-wide rounded"
                        >
                            [ View Mission Brief ]
                        </motion.button>
                    </Link>
                </div>
            </SectionCard>
        </motion.div>
    );
};

export default JoinMissionControl;
