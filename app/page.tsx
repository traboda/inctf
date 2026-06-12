"use client";

import React, { useState, useEffect } from 'react';
import TopBar from '../src/components/shared/TopBar';
import StarfieldBackground from '../src/components/shared/StarfieldBackground';
import LandingHeader from '../src/components/landing/Header';
import LandingAboutInCTF from '../src/components/landing/About';
import LandingTrainingSection from '../src/components/landing/TrainingSection';
import LandingResourcesSection from '../src/components/landing/ResourcesSection';
import LandingPrizeDetails from '../src/components/landing/Prizes';
import LandingFAQ from '../src/components/landing/LandingFAQ';
import LandingOrganizedBy from '../src/components/landing/LandingOrganizedBy';
import CurrentSpeakers from '../src/components/landing/CurrentSpeakers';
import OperationTimeline from '../src/components/landing/OperationTimeline';
import Footer from '../src/components/shared/Footer';
import FloatingContactButton from '@/src/components/landing/FloatingContactForm';
import LandingChampionshipWorks from '../src/components/landing/HowItWorks';
import RegistrationEndingPopup from '../src/components/landing/RegistrationEndingPopup';
export default function LandingPage() {
    const [showRegPopup, setShowRegPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowRegPopup(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-x-hidden" id="landing-page">
            {/* Blurred Satellite Background  */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
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

            {/* About / What is InCTF Section */}
            <LandingAboutInCTF />

            {/* Why Participate — Prizes, Perks & Career Outcomes Section */}
            <LandingPrizeDetails />

            {/* How the Championship Works Section */}
            <LandingChampionshipWorks />

            {/* Timeline & Key Milestones Section */}
            <OperationTimeline />

            {/* Training & Learning Section */}
            <LandingTrainingSection />

            {/* Resources to Level Up Section */}
            <LandingResourcesSection />

            {/* Social Proof — Expert Speakers Section */}
            <CurrentSpeakers />

            {/* Social Proof — Organized By & Partners */}
            <LandingOrganizedBy />

            {/* FAQ */}
            <LandingFAQ />

            {/* Footer */}
            <Footer />

            {/* Floating Contact Button */}
            <FloatingContactButton />

            {/* Registration Ending Popup */}
            <RegistrationEndingPopup
                isOpen={showRegPopup}
                onClose={() => setShowRegPopup(false)}
            />
        </div>
    );
}