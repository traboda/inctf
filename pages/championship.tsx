import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import LandingHeader from '../src/components/landing/Header';
import LandingQuickInfo from '../src/components/landing/QuickInfo';
import SiteView from '../src/components/SiteView';

const ChampionshipPage = () => {

  return (
    <SiteView meta={{ title: 'CTF CyberSecurity Championship' }}>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

        {/* Blurred Satellite Background */}
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

        {/* Starfield Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-80">
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '3%', left: '2%', width: '55px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '8%', left: '15%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '5%', left: '35%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '10%', left: '55%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '7%', left: '75%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '12%', left: '90%', width: '46px' }} />

          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '22%', left: '5%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '28%', left: '25%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '25%', left: '45%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '30%', left: '65%', width: '56px' }} />

          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '15%', left: '68%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '48%', left: '35%', width: '64px' }} />
        </div>

        <TopBar />
        <div className="relative z-20 pt-20">
          <LandingHeader />
          <LandingQuickInfo />
        </div>
        <div className="relative z-20">
          <Footer />
        </div>
      </div>
    </SiteView>
  );

};

export default ChampionshipPage;