'use client';
import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface Speaker {
    name: string;
    title: string;
    company: string;
    image: string;
    bio?: string;
}

const speakers: Speaker[] = [
     {
        name: 'Rushi Mehta',
        title: 'Program Manager',
        company: 'MHA (I4C)',
        image: '/inctf/assets/images/current_speakers/rushimehta.jpg',
        bio: `Mr. Rushi Mehta brings deep expertise in cybersecurity, fighting organized crime, and dismantling criminal networks. His work has played a key role in strengthening India’s cyber resilience and improving its forensic capabilities.`
    },
    {
        name: 'Sreepriya C',
        title: 'Senior Security Analyst ',
        company: 'Siemens',
        image: '/inctf/assets/images/current_speakers/Sreepriya_C.jpeg',
        bio: `Sreepriya Chalakkal is a Product Security Incident Response Team (PSIRT) engineer at Siemens, where she works on vulnerability handling and securing large-scale industrial and enterprise systems. Her expertise spans telecommunication security, protocol analysis, and real-world network infrastructures.\n\nPrior to this, she worked as a security researcher at ERNW GmbH, focusing on mobile and telecom security, including technologies like VoLTE and core network protocols.\n\nShe is a former core member and mentor of team bi0s and a strong advocate for diversity in cybersecurity. She founded Team Shakti and is a key organizer of ShaktiCon, contributing to building a more inclusive global security community.`
    },
    {
        name: 'Abhishek JM',
        title: 'Head of Mobile Security',
        company: 'CRED',
        image: '/inctf/assets/images/current_speakers/Abhishek_JM.jpeg',
        bio: `Abhishek JM is a Lead Security Engineer at CRED, specializing in mobile security and application security for large-scale fintech systems. He is also a trainer at 7ASecurity, where he has delivered hands-on training at global conferences including OWASP AppSec New Zealand, 44Con, and ThreatCon.\n\nWith extensive experience in offensive security, Abhishek leads security research projects such as Adhrit and EVABS, focusing on advanced mobile and application security testing. His work has been presented at premier venues like Black Hat (Asia, US, Europe) and OWASP Seasides, with his tool Adhrit gaining industry recognition.\n\nHe is an active contributor to the security community, regularly speaking at conferences and meetups, and has also served as a trainer for international security programs, helping mentor the next generation of cybersecurity professionals.`
    },
    {
        name: 'Akhil Mahendra',
        title: 'Security Engineer',
        company: 'Scapia',
        image: '/inctf/assets/images/current_speakers/Akhil.jpeg',
        bio: `Akhil Mahendra is a security engineering leader at Scapia, where he is building security foundations for a fast-growing fintech platform. He was previously a founding member of the security team at CRED, where he helped establish and scale product security and software supply chain security programs.\n\nWith over a decade of experience in application security, Akhil specializes in DevSecOps, supply chain security, and building scalable security frameworks. He is also the creator of widely used open-source tools such as SupplyShield and DepConfuse, aimed at tackling dependency and supply chain risks.\n\nAn active contributor to the security community, he is a former member of Team bi0s and has presented his work at leading conferences including Black Hat and Nullcon.`
    },
    {
        name: 'Yadhu Krishna',
        title: 'Product Security Engineer',
        company: 'CRED',
        image: '/inctf/assets/images/current_speakers/Yadhu.webp',
        bio: `Yadhu is a passionate Security Engineer, currently leading the software supply chain security charter at CRED, with over four years of experience in security. He specializes in identifying security vulnerabilities and building scalable security solutions.\n\nHe has been a speaker at prominent security conferences, including Nullcon, BlackHat Asia and BlackHat Europe. As an open-source enthusiast and core maintainer of the SupplyShield project, he actively contributes to improving software supply chain security.\n\nHe has reported high-severity security issues in critical projects such as n8n, Node.js, Gunicorn, and Safari, earning multiple CVEs for his work. He also has been part of team bi0s (India's top CTF team) as a mentor, CTF player, and challenge creator.`
    },
    {
        name: 'Meenakshi',
        title: 'Senior Security Engineer',
        company: 'Endor Labs',
        image: '/inctf/assets/images/current_speakers/Meenakshi.png',
        bio: `Meenakshi S L is a Security Researcher at Endor Labs specializing in vulnerability discovery and open-source software security. She previously worked with VMware's Purple Team. She has presented at international and community security conferences, including The Diana Initiative, ShaktiCon, and Nullcon Chapter events, and continues to deliver technical talks at security meetups such as bi0s Bangalore. She is a former competitive CTF player with Team bi0s and Team Shakti.`
    },
    {
        name: 'Jayakrishna Menon',
        title: 'Security Researcher',
        company: 'Arizona State University',
        image: '/inctf/assets/images/current_speakers/Jayakrishnan.jpeg',
        bio: `Jayakrishna Menon Vadayath is a cybersecurity researcher and Ph.D. candidate at Arizona State University, working with the SEFCOM lab on automated vulnerability analysis, binary exploitation, fuzzing, and symbolic execution.\n\nHe is a co-captain of Team Shellphish and has been actively competing in elite CTFs since 2014, previously with team bi0s. He has also participated in Pwn2Own and was part of the DARPA AI Cyber Challenge (AIxCC) finalist team that won $2M for building an autonomous vulnerability discovery system.\n\nHis research has been published in top-tier venues such as USENIX Security, ACM CCS, and IEEE S&P, with notable work on scalable vulnerability discovery in real-world software and firmware systems.`
    },
    {
        name: 'Rohit Narayanan M',
        title: 'Security Engineer',
        company: 'Scapia',
        image: '/inctf/assets/images/current_speakers/RohitNarayanan.jpeg',
    },
    {
        name: 'Suraj',
        title: 'Reverse Engineer and Antibot Bypass Specialist',
        company: 'Nielsen IQ',
        image: '/inctf/assets/images/current_speakers/Suraj.jpeg',
        bio: `Suraj works as a Reverse Engineer and Antibot Bypass Specialist at Nielsen IQ, with around four years in the cybersecurity space. He was selected as a Google Summer of Code scholar. Outside of work, he spends time on malware analysis, mostly out of curiosity and interest.\n\nHe's particularly drawn to low-level systems and has spent a lot of time working with tools like debuggers, disassemblers, compilers, and decompilers - pretty much anything tied to reverse engineering. He enjoys digging into obfuscation techniques and figuring out how different protection mechanisms work under the hood.\n\nTo him, reverse engineering feels like a constant cat-and-mouse game, and he likes staying one step ahead. At Nielsen IQ, his work revolves around reverse engineering client-side frameworks, software, and mobile applications.`
    },
    {
        name: 'Srikesh',
        title: 'Security Consultant',
        company: 'CRED',
        image: '/inctf/assets/images/current_speakers/Srikesh.jpg',
        bio: `Srikesh R is a Security Engineer at CRED, working on mobile security and application security. Before CRED, he was a Security Analyst at HackIT, where he did malware hunting, threat detection, and offensive mobile security assessments. 
        He was a former member at bi0s Pentest, where he led the mobile security team, authored challenges for various CTFs, and mentored newer members. Outside of work, he spends time pulling apart mobile malwares and digging into app internals.`
    },
    {
        name: 'Yadhu Krishna K',
        title: '',
        company: 'Palo Alto Networks Unit 42',
        image: '/inctf/assets/images/current_speakers/YadhuKrishnaK.jpg',
        bio: `.`
    },
];

const SpeakerCard: React.FC<{ speaker: Speaker; index: number; onClick: () => void }> = ({ speaker, index, onClick }) => {
    const isClickable = !!speaker.bio;

    return (
        <div
            className={`speaker-card group opacity-0 ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
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
        </div>
    );
};

const CurrentSpeakers: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedSpeaker, setSelectedSpeaker] = React.useState<Speaker | null>(null);

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

    return (
        <section className="relative z-10 w-full py-16 md:py-24 overflow-hidden" ref={containerRef}>
            {/* Section Header */}
            <div className="speakers-header px-6 md:px-16 mb-10 md:mb-16 opacity-0">
                <div>
                    <p className="font-mono text-sky-400 text-xs tracking-[0.3em] uppercase mb-3">
                        [ Expert Speakers ]
                    </p>
                    <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider">
                        <span className="text-sky-400">Speakers</span>
                    </h2>
                </div>

                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-sky-400/60 via-sky-400/20 to-transparent" />
            </div>

            {/* Responsive Grid Layout - Rows and Columns */}
            <div className="px-6 md:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8 auto-rows-fr">
                    {speakers.map((speaker, index) => (
                        <SpeakerCard
                            key={`${speaker.name}-${index}`}
                            speaker={speaker}
                            index={index}
                            onClick={() => setSelectedSpeaker(speaker)}
                        />
                    ))}
                </div>
            </div>

            {/* Speaker Bio Modal */}
            <AnimatePresence>
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
            </AnimatePresence>
        </section>
    );
};

export default CurrentSpeakers;