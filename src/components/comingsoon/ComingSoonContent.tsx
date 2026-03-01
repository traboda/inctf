'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import SectionCard from '../landing/SectionCard';
import DecodedText from '../shared/DecodedText';

const ComingSoonContent = () => {
    return (
        <AppThemeWrapper id="coming-soon-page">
            <div className="flex-grow flex flex-col items-center justify-center w-full relative z-20 p-4">
                <div className="max-w-3xl w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionCard bottomBracketOffset={{ y: 16, x: -16 }}>
                            <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-8"></div>

                            <h1 className="text-4xl md:text-6xl font-black font-heading text-ghost-white text-center mb-8 tracking-wider uppercase">
                                <DecodedText text="MISSION PENDING" revealSpeed={60} />
                            </h1>

                            <div className="w-full h-px bg-sky-digital/20 mb-8"></div>

                            <div className="text-center space-y-8 px-4 md:px-12">
                                <p className="text-sky-digital font-mono text-xl md:text-2xl font-bold tracking-tight">
                                    &gt; SECTOR UNDER DEVELOPMENT
                                </p>
                                <p className="text-slate-satellite font-mono text-lg leading-relaxed">
                                    Our engineers are currently constructing this module.
                                    Secure communications channels will be established shortly.
                                </p>
                                <div className="inline-block px-4 py-2 border border-alert-crimson/30 bg-alert-crimson/10 rounded">
                                    <p className="text-alert-crimson font-tactical text-sm tracking-widest">
                                        // SYSTEM STATUS: STANDBY
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 flex justify-center mb-4">
                                <Link href="/">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-4 bg-obsidian border-2 border-sky-digital text-sky-digital font-mono font-bold text-lg tracking-wide uppercase hover:bg-sky-digital hover:text-obsidian transition-colors duration-300"
                                    >
                                        [ Return to Base ]
                                    </motion.button>
                                </Link>
                            </div>

                        </SectionCard>
                    </motion.div>
                </div>
            </div>
        </AppThemeWrapper>
    );
};

export default ComingSoonContent;
