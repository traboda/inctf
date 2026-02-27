import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Speaker {
    name: string;
    title: string;
    company: string;
    image: string;
}

const speakers: Speaker[] = [
    {
        name: 'X',
        title: 'x',
        company: 'X',
        image: '',
    },

];

const SpeakerCard: React.FC<{ speaker: Speaker; index: number }> = ({ speaker, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="flex-shrink-0 w-64 md:w-72 group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        >
            <div className="relative rounded-sm overflow-hidden border border-sky-400/20 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 group-hover:border-sky-400/60 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400 z-10" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 z-10" />

                {/* Photo */}
                <div className="w-full h-56 md:h-64 overflow-hidden bg-slate-800/80">
                    <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                </div>

                {/* Info */}
                <div className="p-5 border-t border-sky-400/20">
                    <h3 className="font-heading font-semibold text-white text-base md:text-lg leading-tight mb-1">
                        {speaker.name}
                    </h3>
                    <p className="font-mono text-white/50 text-xs mb-1 uppercase tracking-widest">
                        {speaker.title}
                    </p>
                    <p className="font-mono text-sky-400 text-sm font-medium">
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
                            [ MISSION BRIEFINGS ]
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
                className="flex gap-5 md:gap-6 px-6 md:px-16 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {speakers.map((speaker, index) => (
                    <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
                ))}
            </div>
        </section>
    );
};

export default PastSpeakers;
