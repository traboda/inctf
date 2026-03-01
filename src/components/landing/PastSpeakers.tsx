'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Speaker } from 'lucide-react';
import { StaticImageData } from 'next/image';
import SuvaBrata from '../../../public/assets/images/past_speakers/subabrata.jpg';
import Lavi from '../../../public/assets/images/past_speakers/lavi.jpg';
import Vipin from '../../../public/assets/images/past_speakers/vipin.jpg';
import Uri from '../../../public/assets/images/past_speakers/uri.jpg';
import Yogi from '../../../public/assets/images/past_speakers/yogi.jpg';
import Britto from '../../../public/assets/images/past_speakers/britto.jpg';
import Srinivas from '../../../public/assets/images/past_speakers/srinivas.jpg';
import DrAmir from '../../../public/assets/images/past_speakers/amir.png';
import Rushi from '../../../public/assets/images/past_speakers/rushi.png';

interface Speaker {
    name: string;
    title: string;
    company: string;
    image: string | StaticImageData;
}

const speakers: Speaker[] = [
    {
        name: 'Suvabrata Sinha',
        title: 'Chief Information Security Officer',
        company: 'NXP SEMICONDUCTORS',
        image: SuvaBrata,
    },
    {
        name: 'Lavi Lazorovitz',
        title: 'Head of Research',
        company: 'CYBERARK',
        image: Lavi,
    },
    {
        name: 'VIPIN PAVITHRAN',
        title: 'FOUNDER & CHIEF MENTOR OF TEAM BIOS, AMFOSS,TEAM SHAKTI, INCTF & INCTFJ',
        company: 'AMRITA UNIVERSITY',
        image: Vipin,
    },
    {
        name: 'URI SHAI',
        title: 'INDEPENDENT CONSULTANT',
        company: '',
        image: Uri,
    },
    {
        name: 'BRITTO SIDHAN',
        title: 'GENERAL MANAGER',
        company: 'GLOBAL SECURITY LAB, SCHNEIDER ELECTRIC',
        image: Britto,
    },
    {
        name: 'YOGI KAPUR',
        title: 'DIRECTOR',
        company: 'SOC, SALESFORCE',
        image: Yogi,
    },
    {
        name: 'SRINIVAS BHARADWAJ',
        title: 'LEAD FOUNDER',
        company: 'JNANA MARGA TECHNOLOGIES',
        image: Srinivas,
    },
    {
        name: 'DR. AMIR SCHREIBER',
        title: 'SENIOR DIRECTOR',
        company: 'BANK HAPOALIM',
        image: DrAmir,
    },
    {
        name: 'RUSHI',
        title: 'Senior program manager',
        company: 'MINISTRY OF HOME AFFAIRS, INDIA',
        image: Rushi,
    },

];

const SpeakerCard: React.FC<{ speaker: Speaker; index: number }> = ({ speaker, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="flex-shrink-0 w-[85vw] sm:w-72 md:w-80 snap-center group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        >
            <div className="relative h-full min-h-[380px] md:min-h-[440px] rounded-lg overflow-hidden border border-sky-400/20 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 group-hover:border-sky-400/80 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] p-5 md:p-8 flex flex-col items-center text-center">

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400 z-10" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 z-10" />

                {/* Circular Photo */}
                <div className="flex justify-center mb-5 md:mb-6 flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-44 md:h-44">
                        {/* Outer gradient ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-purple-500 to-pink-500 p-[3px] group-hover:p-[4px] transition-all duration-300">
                            <div className="w-full h-full rounded-full bg-slate-900 p-[2px]">
                                <img
                                    src={typeof speaker.image === 'string' ? speaker.image : speaker.image.src}
                                    alt={speaker.name}
                                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="flex-grow flex flex-col justify-center w-full">
                    <h3 className="font-heading font-bold text-white text-lg md:text-xl leading-tight mb-2 md:mb-3 uppercase">
                        {speaker.name}
                    </h3>
                    <p className="font-mono text-white/80 text-[11px] md:text-xs mb-2 md:mb-3 uppercase tracking-wider leading-relaxed line-clamp-3 min-h-[2.5rem]">
                        {speaker.title}
                    </p>
                    <p className="font-mono text-sky-400 text-xs md:text-sm font-semibold tracking-wide mt-auto">
                        {speaker.company}
                    </p>
                </div>

                {/* Bottom Corner Accents */}
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400/50 z-10" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400/50 z-10" />
            </div>
        </motion.div>
    );
};

const PastSpeakers: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const isTitleInView = useInView(titleRef, { once: true });

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const amount = 320;
            scrollRef.current.scrollBy({
                left: direction === 'right' ? amount : -amount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="relative z-10 w-full py-16 md:py-24 overflow-hidden">
            {/* Section Header */}
            <div ref={titleRef} className="px-6 md:px-16 mb-10 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
                >
                    <div>
                        <p className="font-mono text-sky-400 text-xs tracking-[0.3em] uppercase mb-3">
                            [ Expert Speakers ]
                        </p>
                        <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider">
                            Past <span className="text-sky-400">Speakers</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 border border-sky-400/30 text-sky-400 hover:bg-sky-400/10 hover:border-sky-400 transition-all duration-200 rounded-sm"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 border border-sky-400/30 text-sky-400 hover:bg-sky-400/10 hover:border-sky-400 transition-all duration-200 rounded-sm"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </motion.div>


                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-sky-400/60 via-sky-400/20 to-transparent" />
            </div>


            <div
                ref={scrollRef}
                className="flex gap-4 md:gap-8 px-4 md:px-16 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
                {speakers.map((speaker, index) => (
                    <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
                ))}
            </div>
        </section>
    );
};

export default PastSpeakers;
