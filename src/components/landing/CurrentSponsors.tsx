"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CurrentSponsors = () => {
    return (
        <section className="py-8 bg-transparent relative z-20">
            <div className="container mx-auto px-4 flex justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-3xl group"
                >
                    {/* Tactical Card Container - Enhanced Blue Visibility */}
                    <div className="relative overflow-hidden bg-slate-950/40 backdrop-blur-xl border border-sky-400/50 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5),0_0_20px_rgba(56,189,248,0.1)]">
                        
                        {/* Static Red Corner Brackets - Enhanced Vibrancy & Glow */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.4)]" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.4)]" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.4)]" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.4)]" />

                        {/* Top Accent Strip - More Vibrant with Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

                        <div className="flex flex-col items-center gap-10 relative z-10">
                            {/* Primary Section Label - Matching Past Sponsors Style */}
                            <div className="flex items-center gap-4 md:gap-6 w-full justify-center">
                                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-sky-400 opacity-50"></div>
                                <h3 className="text-white font-mono font-medium tracking-[0.25em] text-sm md:text-lg uppercase whitespace-nowrap">
                                    Our Current <span className="text-cyan-400 font-bold">Sponsors</span>
                                </h3>
                                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-sky-400 opacity-50"></div>
                            </div>
                            
                            {/* Powered By Section */}
                            <div className="flex flex-col items-center gap-6 w-full">
                                <div className="text-white/60 font-mono text-xs uppercase tracking-[0.25em] mb-1">
                                    Powered By
                                </div>
                                <a
                                    href="https://www.tcs.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all duration-500 hover:scale-105 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                >
                                    <img
                                        src="/inctf/assets/images/current_sponsors/Tata_Consultancy_Services_old_logo.svg.png"
                                        alt="Tata Consultancy Services Logo"
                                        className="h-10 md:h-16 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            </div>

                            {/* Tactical Divider */}
                            <div className="flex items-center gap-4 w-full opacity-20">
                                <div className="h-px flex-grow bg-gradient-to-r from-transparent to-sky-digital" />
                                <div className="w-2 h-2 rotate-45 border border-sky-digital" />
                                <div className="h-px flex-grow bg-gradient-to-l from-transparent to-sky-digital" />
                            </div>

                            {/* Co-Powered By Section */}
                            <div className="flex flex-col items-center gap-6 w-full">
                                <div className="text-white/60 font-mono text-xs uppercase tracking-[0.25em] mb-1">
                                    Co-Powered By
                                </div>
                                <a
                                    href="https://nielseniq.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all duration-500 hover:scale-105 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                >
                                    <img
                                        src="/inctf/assets/images/current_sponsors/NIQ-logo-bright-blue-web.png"
                                        alt="NIQ Logo"
                                        className="h-8 md:h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            </div>

                        </div>

                        {/* Background Data Matrix (Very Subtle) */}
                        <div className="absolute inset-0 bg-[url('/inctf/assets/design/Common/grid_pattern.svg')] bg-[length:40px_40px] opacity-[0.03] pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CurrentSponsors;
