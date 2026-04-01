"use client";

import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { name: 'Schneider Electric', logo: '/assets/images/past_sponsors/Schneider.png' },
    { name: 'Secfence', logo: '/assets/images/past_sponsors/Secfence.png' },
    { name: 'audius', logo: '/assets/images/past_sponsors/audius.png', isLarge: true },
    { name: 'bugcrowd', logo: '/assets/images/past_sponsors/bugcrowd.png' },
    { name: 'cred', logo: '/assets/images/past_sponsors/cred.png', isLarge: true },
    { name: 'crowdstrike', logo: '/assets/images/past_sponsors/crowdstrike.png', isLarge: true },
    { name: 'greatLearning', logo: '/assets/images/past_sponsors/greatLearning.png' },
    { name: 'h&r_block', logo: '/assets/images/past_sponsors/h&r_block.png', isLarge: true },
    { name: 'salesforce', logo: '/assets/images/past_sponsors/salesforce.png', isLarge: true },
    { name: 'vmware', logo: '/assets/images/past_sponsors/vmware.png', isLarge: true },
    { name: 'zoho', logo: '/assets/images/past_sponsors/zoho.png', isLarge: true },
    { name: 'Team bi0s', logo: '/assets/images/logos/bi0s_dark.png' },
];

const PastSponsorsTable = () => {
    return (
        <section className="w-full relative py-16 md:py-24 bg-obsidian/80 border-t border-sky-400/10" id="past-sponsors">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12 flex flex-col items-center gap-4 text-center">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-sky-400/40"></div>
                        <h3 className="text-white font-heading font-medium tracking-[0.2em] text-sm md:text-xl uppercase whitespace-nowrap">
                            Our Past <span className="text-sky-400">Sponsors</span>
                        </h3>
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-sky-400/40"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-sky-400/10">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`aspect-[5/2] flex items-center justify-center border-r border-b border-sky-400/10 group hover:bg-sky-400/5 transition-all duration-300 relative overflow-hidden ${
                                sponsor.isLarge ? 'p-2' : 'p-8'
                            }`}
                        >
                            <img
                                src={sponsor.logo}
                                alt={`${sponsor.name} Logo`}
                                className={`${
                                    sponsor.isLarge ? 'max-h-[90%] max-w-[95%]' : 'max-h-[70%] max-w-[80%]'
                                } object-contain opacity-100 transition-all duration-300 transform group-hover:scale-105 ${
                                    sponsor.name.toLowerCase().includes('cred') || sponsor.name.toLowerCase().includes('bi0s') ? 'brightness-0 invert' : ''
                                }`}
                                loading="lazy"
                            />
                            
                            {/* Tactical Corner Accents Visibility on Hover */}
                            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-r border-t border-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-l border-b border-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastSponsorsTable;
