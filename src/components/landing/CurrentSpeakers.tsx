'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Speaker {
    name: string;
    title: string;
    company: string;
    image: string;
    bio?: string;
}

const speakers: Speaker[] = [
    {
        name: 'Sreepriya C',
        title: '101 to Product Security Incident Response (PSIRT)',
        company: 'Siemens',
        image: '/inctf/assets/images/current_speakers/Sreepriya_C.jpeg',
        bio: `Sreepriya Chalakkal is a Product Security Incident Response Team (PSIRT) engineer at Siemens, where she works on vulnerability handling and securing large-scale industrial and enterprise systems. Her expertise spans telecommunication security, protocol analysis, and real-world network infrastructures.\n\nPrior to this, she worked as a security researcher at ERNW GmbH, focusing on mobile and telecom security, including technologies like VoLTE and core network protocols.\n\nShe is a former core member and mentor of team bi0s and a strong advocate for diversity in cybersecurity. She founded Team Shakti and is a key organizer of ShaktiCon, contributing to building a more inclusive global security community.`
    },
    {
        name: 'Abhishek JM',
        title: '',
        company: 'Cred',
        image: '/inctf/assets/images/current_speakers/Abhishek_JM.jpeg',
        // Keeping bio and role blank/unclickable
        bio: ''
    },
];

const SpeakerCard: React.FC<{ speaker: Speaker; index: number; onClick: () => void }> = ({ speaker, index, onClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const isClickable = !!speaker.bio;

    return (
        <motion.div
            ref={ref}
            className={`flex-shrink-0 w-[85vw] sm:w-72 md:w-80 snap-center group ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            onClick={isClickable ? onClick : undefined}
        >
            <div className={`relative h-full min-h-[380px] md:min-h-[440px] rounded-lg overflow-hidden border border-sky-400/20 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 p-5 md:p-8 flex flex-col items-center text-center ${isClickable ? 'group-hover:border-sky-400/80 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]' : ''
                }`}>

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400 z-10" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 z-10" />

                {/* Circular Photo */}
                <div className="flex justify-center mb-5 md:mb-6 flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-44 md:h-44">
                        {/* Outer gradient ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-purple-500 to-pink-500 p-[3px] group-hover:p-[4px] transition-all duration-300">
                            <div className="w-full h-full rounded-full bg-slate-900 p-[2px]">
                                <img
                                    src={speaker.image}
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
                    {isClickable && (
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="font-mono text-[9px] text-sky-400 border border-sky-400/30 px-3 py-1 rounded-full uppercase tracking-widest">
                                View Intel
                            </span>
                        </div>
                    )}
                </div>

                {/* Bottom Corner Accents */}
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400/50 z-10" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400/50 z-10" />
            </div>
        </motion.div>
    );
};

const CurrentSpeakers: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const isTitleInView = useInView(titleRef, { once: true });
    const [selectedSpeaker, setSelectedSpeaker] = React.useState<Speaker | null>(null);

    React.useEffect(() => {
        const header = document.querySelector('header');
        if (selectedSpeaker) {
            document.body.style.overflow = 'hidden';
            if (window.innerWidth <= 768 && header) {
                header.style.display = 'none';
            }
        } else {
            document.body.style.overflow = 'unset';
            if (header) header.style.display = 'flex';
        }
        return () => {
            document.body.style.overflow = 'unset';
            if (header) header.style.display = 'flex';
        };
    }, [selectedSpeaker]);

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
                    className="flex flex-row items-end justify-between gap-2"
                >
                    <div>
                        <p className="font-mono text-sky-400 text-xs tracking-[0.3em] uppercase mb-3">
                            [ Expert Speakers ]
                        </p>
                        <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider">
                            Current <span className="text-sky-400">Speakers</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0 mb-1">
                        <button
                            onClick={() => scroll('left')}
                            className="group flex items-center justify-center p-2 border border-sky-400/30 text-sky-400 hover:bg-sky-400/10 hover:border-sky-400 transition-all duration-200 rounded-sm"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="group flex items-center justify-center p-2 border border-sky-400/30 text-sky-400 hover:bg-sky-400/10 hover:border-sky-400 transition-all duration-200 rounded-sm"
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
                className="flex gap-6 md:gap-8 px-8 md:px-16 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 md:justify-center scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
                {speakers.map((speaker, index) => (
                    <SpeakerCard
                        key={`${speaker.name}-${index}`}
                        speaker={speaker}
                        index={index}
                        onClick={() => setSelectedSpeaker(speaker)}
                    />
                ))}
            </div>

            {/* Speaker Bio Modal */}
            <motion.div initial={false}>
                {selectedSpeaker && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 text-left">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSpeaker(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl bg-slate-900 border border-sky-400/30 rounded-lg overflow-y-auto md:overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.1)] flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
                        >
                            {/* Tactical Accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sky-400 m-4 z-10" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-400 m-4 z-10" />

                            <button
                                onClick={() => setSelectedSpeaker(null)}
                                className="absolute top-6 right-6 z-20 p-2 text-sky-400 hover:text-white hover:bg-sky-400/20 transition-all rounded-md"
                            >
                                <X size={24} />
                            </button>

                            {/* Left Side: Photo & Quick Info */}
                            <div className="w-full md:w-1/3 bg-slate-950 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-sky-400/20">
                                <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-purple-500 to-pink-500 p-[3px]">
                                        <div className="w-full h-full rounded-full bg-slate-900 p-[2px]">
                                            <img
                                                src={selectedSpeaker.image}
                                                alt={selectedSpeaker.name}
                                                className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-white font-heading font-bold text-xl md:text-2xl text-center mb-1 uppercase">
                                    {selectedSpeaker.name}
                                </h4>
                                <p className="text-sky-400 font-mono text-sm uppercase tracking-widest text-center mb-4">
                                    {selectedSpeaker.company}
                                </p>
                                <div className="h-px w-24 bg-sky-400/30" />
                            </div>

                            {/* Right Side: Bio & Mission Intel */}
                            <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto">
                                <div className="mb-8">
                                    <h5 className="text-white font-heading text-lg md:text-xl font-semibold mb-6 uppercase tracking-wider border-b border-sky-400/10 pb-4">
                                        {selectedSpeaker.title}
                                    </h5>
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-white/80 font-mono text-sm leading-relaxed whitespace-pre-line mb-4">
                                            {selectedSpeaker.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default CurrentSpeakers;
