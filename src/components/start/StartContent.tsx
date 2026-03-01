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
import CTAPartners from '../landing/CTAPartners';
import LandingHeader from '../landing/Header';
import LandingPromoVideo from '../landing/PromoVideo';
import YoutubeVideosSection from '../resources/YoutubeVideos';
import LandingSearch from '../landing/search';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';

const StartContent = () => {

    return (
        <AppThemeWrapper id="landing-page">
            <div className="relative z-10 w-full">
                <LandingHeader />
                <LandingQuickInfo />
                <YoutubeVideosSection />
                <LandingAboutInCTF />
                <LandingStatsBar />
                <LandingPromoVideo />
                <LandingReasonsToParticipate />
                <CTAReg UTMSource="start_page" />
                <LandingHowItWorks />
                <LandingTestimonials />
                <LandingSponsorship />
                <CTAPartners />
                <LandingOrganizers />
                <LandingSearch />
                <LandingContactsBar />
            </div>
            <div className="relative z-10 w-full">
                <Footer />
            </div>
        </AppThemeWrapper>
    );

};

export default StartContent;
