"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const cells = containerRef.current.querySelectorAll('.sponsor-cell');
        
        // Initial state set via CSS (opacity: 0)
        
        gsap.to(cells, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            onStart: (target) => {
                // Simplified Decoding jitter effect using random opacity jumps
                gsap.to(cells, {
                    opacity: 1,
                    overwrite: 'auto'
                });
            }
        });

        // Add a secondary "decoding" flutter for each element
        cells.forEach((cell, i) => {
            gsap.fromTo(cell, 
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.1,
                    repeat: 4,
                    repeatDelay: 0.05,
                    yoyo: true,
                    delay: i * 0.1, // Match stagger
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                    },
                    onComplete: () => {
                        gsap.set(cell, { opacity: 1 });
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section className="w-full relative py-16 md:py-24 bg-obsidian/80 border-t border-sky-400/10" id="past-sponsors" ref={containerRef}>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-sky-400/10 relative">
                    {/* Parent Grid Intersection Nodes (Top/Left edges) */}
                    <div className="absolute -top-[5px] -left-[3px] text-sky-400/40 font-mono text-[10px] z-20">+</div>
                    
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={sponsor.name}
                            className={`sponsor-cell aspect-[5/2] flex items-center justify-center border-r border-b border-sky-400/10 group hover:bg-sky-400/5 transition-all duration-300 relative overflow-visible opacity-0 transform translate-y-4`}
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

                            {/* Persistent Intersection Nodes (Bottom-Right of every cell) */}
                            <div className="absolute -bottom-[6px] -right-[3px] text-sky-400/40 font-mono text-[10px] z-20">+</div>
                            
                            {/* Internal Top-Right intersections for the first row */}
                            {index < 3 && (
                                <div className="absolute -top-[6px] -right-[3px] text-sky-400/40 font-mono text-[10px] z-20">+</div>
                            )}
                            {/* Internal Bottom-Left intersections for the first column */}
                            {index % 3 === 0 && (
                                <div className="absolute -bottom-[6px] -left-[3px] text-sky-400/40 font-mono text-[10px] z-20">+</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastSponsorsTable;
