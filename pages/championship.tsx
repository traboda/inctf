import React from 'react';

import ThemeWrapper from '../src/components/shared/ThemeWrapper';
import Footer from '../src/components/shared/Footer';
import LandingHeader from '../src/components/landing/Header';
import LandingQuickInfo from '../src/components/landing/QuickInfo';

const ChampionshipPage = () => {

  return (
    <ThemeWrapper meta={{ title: 'CTF CyberSecurity Championship' }}>
      <div className="relative z-20 pt-20">
        <LandingHeader />
        <LandingQuickInfo />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </ThemeWrapper>
  );

};

export default ChampionshipPage;