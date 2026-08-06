'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface Speaker {
    name: string;
    role: string;
    organization: string;
    sessionTitle: string;
    sessionTime: string;
    description: string;
    image?: string;
}

const companyLogos: Record<string, string> = {
    'Amrita Vishwa Vidyapeetham': '/inctf/assets/images/logos/amrita-red-logo-new.svg',
    'Honeywell': '/inctf/assets/images/current_sponsors/Honeywell_logo.svg',
    'Tata Consultancy Services (TCS)': '/inctf/assets/images/current_sponsors/Tata_Consultancy_Services_old_logo.svg.png',
    'NielsenIQ (NIQ)': '/inctf/assets/images/current_sponsors/NIQ-logo-bright-blue-web.png'
};

const fallbackLogo = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 60"%3E%3Crect width="140" height="60" rx="12" fill="%230f172a"/%3E%3Ctext x="70" y="30" font-size="11" fill="%2394a3b8" text-anchor="middle" dy=".35em" font-family="monospace"%3EORG%3C/text%3E%3C/svg%3E';

const CompanyLogo: React.FC<{ company: string; className?: string }> = ({ company, className = '' }) => {
    const [hasError, setHasError] = React.useState(false);
    const logoPath = companyLogos[company];

    if (!logoPath || hasError) {
        return (
            <div className={`inline-flex items-center justify-center rounded-full border border-sky-400/20 bg-slate-900/70 px-3 py-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300 ${className}`}>
                {company}
            </div>
        );
    }

    return (
        <img
            src={logoPath || fallbackLogo}
            alt={company}
            className={className}
            onError={() => setHasError(true)}
        />
    );
};

const speakers: Speaker[] = [
    {
        name: 'Prashant Deo',
        role: 'CTO & Global Head of Security Tools and Engineering',
        organization: 'Tata Consultancy Services (TCS)',
        sessionTitle: 'Industry Address',
        sessionTime: '09:30 AM - 10:35 AM',
        description: 'Prashant Deo delivers an industry address during the inaugural ceremony, bringing enterprise security leadership perspective to the InCTF Finals conference.',
        image: '/assets/images/speakers/Prashant Deo-Photograph.png'
    },
    {
        name: 'Veronica Fernandez',
        role: 'Talent Acquisition Director - India',
        organization: 'NielsenIQ (NIQ)',
        sessionTitle: 'Industry Address',
        sessionTime: '09:30 AM - 10:35 AM',
        description: 'Veronica Fernandez speaks in the inaugural ceremony and brings a talent and hiring lens to how cybersecurity skills translate into industry opportunities.',
        image: '/assets/images/speakers/Veronica.png'
    },
    {
        name: 'Santosh Mishra',
        role: 'Senior Cybersecurity Consultant',
        organization: 'Tata Consultancy Services (TCS)',
        sessionTitle: 'Attack Surface Management in a Post-Mythos World Swarmed with Frontier AI LLMs',
        sessionTime: '10:50 AM - 11:30 AM',
        description: 'Learn how AI is reshaping attack surface management and discover practical approaches to securing increasingly complex enterprise environments.',
        image: '/assets/images/speakers/Santosh Mishra Profile pic.jpg'
    },
    {
        name: 'Sanjay NS',
        role: 'Product Security Engineer',
        organization: 'Honeywell',
        sessionTitle: 'Decoding the Invisible: A Hacker\'s Path Through Hardware Security and HAM Radio',
        sessionTime: '11:35 AM - 12:15 PM',
        description: 'Explore the world of hardware security research, embedded systems, and HAM radio while gaining insights into real-world offensive security techniques.',
        image: '/assets/images/speakers/Sanjay_Photo.jpg'
    },
    {
        name: 'Dr. Kumaran U.',
        role: 'Associate Professor, Department of Computer Science & Engineering',
        organization: 'Amrita Vishwa Vidyapeetham',
        sessionTitle: 'LLM Security',
        sessionTime: '12:15 PM - 01:00 PM',
        description: 'Discover the evolving security landscape of Large Language Models, including emerging threats, vulnerabilities, and practical strategies for building secure AI systems.',
        image: '/assets/images/speakers/Dr Kumaran (1).jpg'
    },
    {
        name: 'Suraj Kumar',
        role: 'Antibot & Reverse Engineer',
        organization: 'NielsenIQ (NIQ)',
        sessionTitle: 'Connecting the Dots: From Flags to Production',
        sessionTime: '02:10 PM - 02:35 PM',
        description: 'Discover how the skills developed through Capture The Flag competitions translate into solving real-world cybersecurity challenges in production environments.',
        image: '/assets/images/speakers/Suraj Kumar.jpg'
    },
    {
        name: 'Ayubali Beleri',
        role: 'Product Security Engineer',
        organization: 'NielsenIQ (NIQ)',
        sessionTitle: 'Monetise Your CTF Skills',
        sessionTime: '02:35 PM - 03:00 PM',
        description: 'Learn how competitive cybersecurity experience can open doors to product security, vulnerability research, offensive security, consulting, and bug bounty programmes.',
        image: '/assets/images/speakers/Ayubali Beleri.png'
    },
];

const getInitials = (name: string) =>
    name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join('');

const SpeakerAvatar: React.FC<{ speaker: Speaker; className?: string }> = ({ speaker, className = '' }) => {
    if (speaker.image) {
        return <img src={speaker.image} alt={speaker.name} className={className} />;
    }

    return (
        <div className={`flex items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_rgba(15,23,42,0.95))] text-3xl font-heading font-bold text-white ${className}`}>
            {getInitials(speaker.name)}
        </div>
    );
};

const SpeakerCard: React.FC<{ speaker: Speaker; index: number }> = ({ speaker, index }) => {
    return (
        <div className="speaker-card group opacity-0">
            <div className="relative h-full min-h-[420px] md:min-h-[460px] rounded-lg overflow-hidden border border-sky-400/20 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 p-5 md:p-8 flex flex-col items-center text-center group-hover:border-sky-400/80 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]">

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400 z-10" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 z-10" />

                <div className="flex justify-center mb-5 md:mb-6 flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-44 md:h-44">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-purple-500 to-pink-500 p-[3px] group-hover:p-[4px] transition-all duration-300">
                            <div className="w-full h-full rounded-full bg-slate-900 p-[2px]">
                                <SpeakerAvatar
                                    speaker={speaker}
                                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-grow flex flex-col justify-center w-full">
                    <h3 className="font-heading font-bold text-white text-lg md:text-xl leading-tight mb-2 md:mb-3 uppercase">
                        {speaker.name}
                    </h3>
                    <p className="font-mono text-sky-400 text-[10px] md:text-xs mb-3 uppercase tracking-[0.22em] leading-relaxed">
                        {speaker.sessionTime}
                    </p>
                    <p className="font-mono text-white/80 text-[11px] md:text-xs mb-3 uppercase tracking-wider leading-relaxed line-clamp-3 min-h-[3.25rem]">
                        {speaker.role}
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base leading-snug min-h-[3.5rem] line-clamp-3">
                        {speaker.sessionTitle}
                    </p>
                    <div className="mt-4 w-full min-h-[3.5rem] flex items-center justify-center px-2">
                        <CompanyLogo
                            company={speaker.organization}
                            className="max-h-12 w-auto max-w-[170px] object-contain filter grayscale brightness-90 opacity-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400/50 z-10" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400/50 z-10" />
            </div>
        </div>
    );
};

const CurrentSpeakers: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });

        // Animate Title
        tl.fromTo('.speakers-header',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );

        // Stagger Cards
        tl.fromTo('.speaker-card',
            {
                opacity: 0,
                y: 40,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            },
            '-=0.6'
        );
    }, { scope: containerRef });

    return (
        <section className="relative z-20 w-full py-16 md:py-24 overflow-hidden" ref={containerRef}>
            <div className="speakers-header px-6 md:px-16 mb-10 md:mb-16 opacity-0 text-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                        <Award size={14} /> Conference Speakers
                    </div>
                    <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider">
                        <span className="text-white">Conference</span> <span className="text-sky-400">Speakers</span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-slate-400 font-mono leading-relaxed">
                        Industry leaders, keynote guests, and technical session speakers joining the InCTF Finals 2026 conference on 9 August.
                    </p>
                </div>

                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-sky-400/60 via-sky-400/20 to-transparent" />
            </div>

            <div className="px-6 md:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 auto-rows-fr">
                    {speakers.map((speaker, index) => (
                        <SpeakerCard
                            key={`${speaker.name}-${index}`}
                            speaker={speaker}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentSpeakers;