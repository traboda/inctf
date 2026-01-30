import React from 'react';

import LandingHeader from '../src/components/landing/Header';
import LandingMissionCredentials from '../src/components/landing/Organizers';
import LandingCrewEligibility from '../src/components/landing/WhyParticipate';
import LandingJoinMissionControl from '../src/components/landing/CTAReg';
import LandingMissionOutcomes from '../src/components/landing/QuickInfo';
import LandingAboutInCTF from '../src/components/landing/About';
// import LandingStatsBar from "../src/components/landing/StatsCounter";
import LandingOperationalPlan from '../src/components/landing/HowItWorks';
import LandingContactsBar from '../src/components/landing/ContactsBar';
import TopBar from '../src/components/shared/TopBar';
import LandingMissionOutreach from '../src/components/landing/CTAPartners';
// import LandingPromoVideo from '../src/components/landing/PromoVideo';
import LandingSearch from '../src/components/landing/search';
import Footer from '../src/components/shared/Footer';
import SiteView from '../src/components/SiteView';

const LandingPage = () => {

  return (
    <SiteView>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden" id="landing-page">
        <div className="scanlines"></div>
        {/* Skygrid / Starfield Parallax Background */}
        <div className="absolute inset-0 z-0 opacity-40" style={{
          backgroundImage: 'radial-gradient(1px 1px at 50% 50%, #ffffff 0%, transparent 100%)',
          backgroundSize: '30px 30px',
          animation: 'skygrid-move 100s linear infinite'
        }}></div>
        <style jsx global>{`
            @keyframes skygrid-move {
                0% { transform: translateY(0); }
                100% { transform: translateY(100vh); }
            }
        `}</style>

        <TopBar />
        <div className="relative z-10 overflow-x-hidden">
          <LandingHeader />
          <LandingAboutInCTF />
          <LandingCrewEligibility />
          <LandingMissionOutcomes />
          {/* <LandingPromoVideo />  -- Commented out for Operation VAJRA theme cohesion */}
          <LandingOperationalPlan />
          <LandingMissionOutreach />
          <LandingMissionCredentials />
          <LandingJoinMissionControl />
          {/* <LandingTestimonials /> -- Commented out */}
          {/* <LandingSponsorship /> -- Commented out unless requested */}
          <LandingSearch />
          <LandingContactsBar />
        </div>
      </div>
      <Footer />
    </SiteView>
  );

};

export default LandingPage;