'use client';

import React from 'react';

import LandingSponsorship from '../landing/Sponsorship';
import LandingTestimonials from '../landing/Testimonials';
import LandingOrganizers from '../landing/Organizers';
import LandingReasonsToParticipate from '../landing/WhyParticipate';
import CTAReg from '../landing/CTAReg';
import LandingQuickInfo from '../landing/QuickInfo';
import LandingAboutInCTF from '../landing/About';
import LandingStatsBar from '../landing/StatsCounter';
import LandingHowItWorks from '../landing/HowItWorks';
import LandingContactsBar from '../landing/ContactsBar';
import TopBar from '../shared/TopBar';
import CTAPartners from '../landing/CTAPartners';
import LandingHeader from '../landing/Header';
import LandingPromoVideo from '../landing/PromoVideo';
import Footer from '../shared/Footer';
import ConfigContext from '../SiteView/context';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID || 'inctf';
const eventConfig = require(`../../data/${eventID}/config.ts`).default;

const SSIContent = () => {

    return (
        <ConfigContext.Provider value={eventConfig}>
            <div style={{ background: '#FAFAFA' }} id="landing-page" className="min-h-screen">
                <TopBar />
                <LandingHeader />
                <LandingQuickInfo />
                <LandingAboutInCTF />
                <LandingStatsBar />
                <LandingPromoVideo />
                <LandingReasonsToParticipate />
                <CTAReg UTMSource="ssi" />
                <LandingHowItWorks />
                <LandingTestimonials />
                <LandingSponsorship />
                <CTAPartners />
                <LandingOrganizers />
                <LandingContactsBar />
                <Footer />
            </div>
        </ConfigContext.Provider>
    );

};

export default SSIContent;
