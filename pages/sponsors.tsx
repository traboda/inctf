import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import SponsorsSection from '../src/components/landing/SponsorsSection';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';
import SiteView from '../src/components/SiteView';

const SponsorsPage = () => {
  return (
    <SiteView meta={{ title: 'Sponsors ' }}>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>
        
        {/* Starfield Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-slate-900/30 to-obsidian"></div>
          
          {/* Stars - Scattered */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '8%', left: '12%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '16%', left: '38%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '12%', left: '65%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '20%', left: '88%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '34%', left: '8%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '40%', left: '35%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '37%', left: '58%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '42%', left: '82%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '58%', left: '15%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '64%', left: '45%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '62%', left: '72%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '80%', left: '25%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '84%', left: '52%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '88%', left: '80%', width: '52px' }} />

          {/* Sparkles */}
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '12%', left: '25%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '22%', left: '52%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '28%', left: '75%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '44%', left: '18%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '50%', left: '68%', width: '66px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '68%', left: '28%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '74%', left: '58%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '82%', left: '10%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '92%', left: '65%', width: '60px' }} />
        </div>

        <TopBar />
        <div className="relative z-10">
          <PageHeader
            title="Our Sponsors"
            breadcrumb={[
              {
                link: '/about',
                title: 'About',
              },
              {
                link: '/sponsors',
                isActive: true,
                title: 'Sponsors',
              },
            ]}
          />
        </div>
        <div className="relative z-10 mx-auto text-center px-4 pb-12" style={{ maxWidth: 700 }}>
          <SponsorsSection />
        </div>
        <div className="relative z-10">
          <PageFooterExplorer
            items={[
              {
                'title': 'Advisory Board',
                'text': 'View our elite panel of advisors',
                'link': '/advisory-board',
              },
              {
                'title': 'Organizers',
                'text': 'View our team of organizers',
                'link': '/organizers',
              },
              {
                'title': 'Our Reach & Impact',
                'text': 'See our reach & impact',
                'link': '/about#our-reach',
              },
            ]}
          />
        </div>
        <Footer />
      </div>
    </SiteView>
  );
};

export default SponsorsPage;