import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import Schedule from '../src/components/landing/Schedule';
import PageHeader from '../src/components/PageHeader';
import SiteView from '../src/components/SiteView';

const TrainingSchedulePage = () => {
  return (
    <SiteView meta={{ title: 'Training Schedule' }}>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

        {/* Starfield Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-slate-900/30 to-obsidian"></div>
          
          {/* Stars */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '5%', left: '8%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '12%', left: '25%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '8%', left: '45%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '15%', left: '68%', width: '55px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '10%', left: '88%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '28%', left: '12%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '35%', left: '38%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '52%', left: '5%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '75%', left: '15%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '82%', left: '42%', width: '56px' }} />

          {/* Sparkles */}
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '18%', left: '18%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '45%', left: '68%', width: '66px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '72%', left: '8%', width: '64px' }} />
        </div>

        <TopBar />
        <div className="relative z-10">
          <PageHeader
            title="Training Workshops"
            breadcrumb={[
              {
                title: 'Get Started',
                link: '/start',
              },
              {
                title: 'Training Workshop',
                link: '/trainings',
                isActive: true,
              },
            ]}
          />
          <div className="py-8 pb-12">
            <Schedule />
          </div>
        </div>
        <Footer />
      </div>
    </SiteView>
  );
};

export default TrainingSchedulePage;