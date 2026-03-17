import React from 'react';
import TopBar from '../src/components/shared/TopBar';
import StarfieldBackground from '../src/components/shared/StarfieldBackground';

import LandingHeader from '../src/components/landing/Header';
import MissionBrief from '../src/components/landing/MissionBrief';
import CrewEligibility from '../src/components/landing/CrewEligibility';
import CrewRewards from '../src/components/landing/CrewRewards';
import MissionCredentials from '../src/components/landing/MissionCredentials';
import PastSponsorsMarquee from '../src/components/landing/PastSponsorsMarquee';
import PastSpeakers from '../src/components/landing/PastSpeakers';
import CurrentSponsors from '../src/components/landing/CurrentSponsors';
import Footer from '../src/components/shared/Footer';
import JoinMissionControl from '../src/components/landing/JoinMissionControl';
import BentoCard from '../src/components/landing/BentoCard';
import Link from 'next/link';
import BentoGridContainer from '../src/components/landing/BentoGridContainer';

// Opt into Cache Components via 'use cache' (This will cache the public, non-personalized output of this component at build time)
// export const dynamic = 'force-static'; 

export default async function LandingPage() {
    "use cache";
    return (
        <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-x-hidden" id="landing-page">
            <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

            {/* Blurred Satellite Background  */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/inctf/assets/design/Homepage/satellite_laser.webp"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                    style={{
                        filter: 'blur(40px)',
                        transform: 'scale(1.1)'
                    }}
                />
            </div>

            {/* Starfield Background  */}
            <StarfieldBackground />

            <TopBar />

            <section className="relative z-50 overflow-x-hidden pt-12 md:pt-10 flex flex-col justify-center -mt-4 md:-mt-8">
                <LandingHeader />
            </section>

            {/* Past Sponsors Marquee */}
            <section className="relative z-10 w-full overflow-hidden bg-obsidian border-t border-sky-digital/20">
                <PastSponsorsMarquee />
            </section>

            {/* Past Speakers Section */}
            <PastSpeakers />

            {/* Bento Grid Section */}
            <section className="py-16 relative z-30" id="mission-grid">
                <div className="container mx-auto px-4">
                    <BentoGridContainer>
                        
                        {/* 1. Mission Brief (Desktop: 2/3 wide, Row 1 Left | Mobile Rank 1) */}
                        <div className="md:col-span-2 flex w-full bento-card-wrapper opacity-0">
                            <BentoCard title="Mission Brief">
                                <div className="flex-grow flex flex-col justify-between">
                                    <div className="text-sky-digital font-mono text-sm md:text-base mb-6 leading-relaxed space-y-4">
                                        <p className="flex items-start"><span className="text-alert-crimson mr-2">&gt;</span> A dormant deep-orbit system has resumed transmission. Unidentified protocols, unauthorized access attempts, and system anomalies have been detected across critical digital infrastructure.</p>
                                        <p className="flex items-start"><span className="text-alert-crimson mr-2">&gt;</span> In response, Amrita InCTF 2026 has been activated as a national-level operation to recruit, train, and evaluate cyber defence personnel capable of analysing advanced threats, decoding unfamiliar systems, and securing sensitive digital assets under real-world conditions.</p>
                                    </div>
                                    <div className="mt-auto text-center">
                                        <Link href="/mission-brief">
                                            <button className="px-6 py-2 border border-alert-crimson text-alert-crimson font-mono uppercase tracking-wider text-sm hover:bg-alert-crimson/10 transition shadow-[0_0_12px_rgba(244,63,94,0.25)] hover:shadow-[0_0_20px_rgba(244,63,94,0.5)]">
                                                [ Know More ]
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </BentoCard>
                        </div>

                        {/* 2. Crew Eligibility (Desktop: 1/3 wide, Row 1 Right | Mobile Rank 2) */}
                        <div className="md:col-span-1 flex w-full bento-card-wrapper opacity-0">
                            <BentoCard title="Crew Eligibility">
                                <div className="flex-grow flex flex-col justify-between">
                                    <ul className="space-y-3 text-sky-digital font-mono text-sm md:text-base mb-6">
                                        <li className="flex items-start"><span className="mr-2 text-alert-crimson">&gt;</span> Undergraduate students (1st, 2nd, 3rd, and 4th year)</li>
                                        <li className="flex items-start"><span className="mr-2 text-alert-crimson">&gt;</span> Disciplines: Computer Science, IT, AI, Cyber Security, ECE, and related fields</li>
                                        <li className="flex items-start"><span className="mr-2 text-alert-crimson">&gt;</span> Cyber-security-interested professionals</li>
                                        <li className="flex items-start"><span className="mr-2 text-alert-crimson">&gt;</span> Teams consisting of 1 to 5 members</li>
                                    </ul>
                                    <div className="mt-auto text-center">
                                        <Link href="/eligibility">
                                            <button className="px-6 py-2 border border-alert-crimson text-alert-crimson font-mono uppercase tracking-wider text-sm hover:bg-alert-crimson/10 transition shadow-[0_0_12px_rgba(244,63,94,0.25)] hover:shadow-[0_0_20px_rgba(244,63,94,0.5)]">
                                                [ Know More ]
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </BentoCard>
                        </div>

                        {/* 3. Mission Credentials (Desktop: 1/3 wide, Row 2 Left | Mobile Rank 3) */}
                        <div className="md:col-span-1 flex w-full bento-card-wrapper opacity-0">
                            <BentoCard title="Mission Credentials">
                                <ul className="space-y-4 text-sky-digital font-mono text-sm md:text-base flex-grow">
                                    <li className="flex items-start"><span className="mr-2 text-alert-crimson">&gt;</span> Operational continuously since 2010</li>
                                    <li className="flex items-start"><span className="mr-2 text-alert-crimson">&gt;</span> Hosted by Amrita Vishwa Vidyapeetham</li>
                                    <li className="flex items-start"><span className="mr-2 text-alert-crimson">&gt;</span> Organised in collaboration with team bi0s</li>
                                </ul>
                            </BentoCard>
                        </div>

                        {/* 4. Join Mission Control (Desktop: 2/3 wide, Row 2 Right | Mobile Rank 4) */}
                        <div className="md:col-span-2 flex w-full bento-card-wrapper opacity-0">
                            <BentoCard title="Join Mission Control">
                                <div className="flex-grow flex flex-col justify-between">
                                    <p className="text-sky-digital font-mono text-base md:text-lg mb-8 text-center">
                                        Receive mission updates, briefings, timelines, and official communications.
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-auto">
                                        <Link href="/mission-control" className="w-full md:w-auto">
                                            <button className="w-full md:w-auto px-3 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-br from-red-900 to-red-800 border border-white/40 text-white font-mono font-bold tracking-wider rounded text-xs sm:text-sm hover:brightness-110 shadow-[0_0_12px_rgba(244,63,94,0.3)] hover:shadow-[0_0_22px_rgba(244,63,94,0.6)] transition">
                                                [ Enter Mission Control ]
                                            </button>
                                        </Link>
                                        <Link href="/mission-brief" className="w-full md:w-auto">
                                            <button className="w-full md:w-auto px-3 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-br from-red-900 to-red-800 border border-white/40 text-white font-mono font-bold tracking-wider rounded text-xs sm:text-sm hover:brightness-110 shadow-[0_0_12px_rgba(244,63,94,0.3)] hover:shadow-[0_0_22px_rgba(244,63,94,0.6)] transition">
                                                [ View Mission Brief ]
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </BentoCard>
                        </div>

                    </BentoGridContainer>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
