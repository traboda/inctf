import React from 'react';
import TopBar from '../src/components/shared/TopBar';
import StarfieldBackground from '../src/components/shared/StarfieldBackground';

import LandingHeader from '../src/components/landing/Header';
import MissionBrief from '../src/components/landing/MissionBrief';
import CrewEligibility from '../src/components/landing/CrewEligibility';
import CrewRewards from '../src/components/landing/CrewRewards';
import MissionCredentials from '../src/components/landing/MissionCredentials';
import SiteView from '../src/components/SiteView';

const LandingPage = () => {
  return (
    <SiteView>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-x-hidden" id="landing-page">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

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

        <section className="min-h-screen relative z-10 overflow-x-hidden pt-20 flex flex-col justify-center">
          <LandingHeader />
        </section>

        {/* Mission Brief Section */}
        <section className="min-h-screen flex flex-col justify-center">
          {/* <MissionBrief /> */}
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
    </SiteView>
  );
};

export default LandingPage;