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

            {/* Mission Brief Section */}
            <section className="min-h-screen flex flex-col justify-center">
                <MissionBrief />
            </section>

            {/* Crew Eligibility Section */}
            <section className="min-h-screen flex flex-col justify-center">
                <CrewEligibility />
            </section>

            {/* Crew Rewards Section */}
            <section className="min-h-screen flex flex-col justify-center">
                <CrewRewards />
            </section>

            {/* Mission Credentials & Footer Section */}
            <section className="min-h-screen flex flex-col justify-center">
                <MissionCredentials />
            </section>
        </div>
    );
}
