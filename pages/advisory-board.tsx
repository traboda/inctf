import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import { AdvisoryBoard, AdvisoryBoardAlumni } from '../src/data/organizers';
import ProfileCard from '../src/components/ProfileCard';
import Footer from '../src/components/shared/Footer';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';
import SiteView from '../src/components/SiteView';

const AdvisoryBoardPage = () => {

  return (
    <SiteView meta={{ title: 'Advisory Board' }}>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>
        
        {/* Starfield Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-slate-900/30 to-obsidian"></div>
          
          {/* Stars - Distributed */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '7%', left: '10%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '15%', left: '32%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '12%', left: '58%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '18%', left: '85%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '32%', left: '15%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '38%', left: '45%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '35%', left: '72%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '55%', left: '8%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '62%', left: '38%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '58%', left: '65%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '78%', left: '22%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '82%', left: '55%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '88%', left: '78%', width: '48px' }} />

          {/* Sparkles */}
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '10%', left: '22%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '20%', left: '48%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '28%', left: '68%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '42%', left: '25%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '52%', left: '82%', width: '66px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '65%', left: '18%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '72%', left: '48%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '85%', left: '35%', width: '64px' }} />
        </div>

        <TopBar />
        <div className="relative z-10">
          <PageHeader
            breadcrumb={[
              {
                link: '/about',
                title: 'About',
              },
              {
                link: '/advisory-board',
                isActive: true,
                title: 'Advisory Board',
              },
            ]}
            title="Advisory Board"
            description="
                    The InCTF Advisory Board is a high-level expert panel consisting of eminent personalities
                    from academia and industry who review and provide valuable help and advice on all aspects
                    of our end-to-end CyberSecurity programme. Our advisory board plays a pivotal role in transforming
                    InCTF to a global pioneer in CyberSecurity education, that sets a platform that inspires & enables
                    CyberSecurity education among the students, and thereby helping nurture next generation of
                    CyberSecurity workforce for tomorrow.
                "
          />
        </div>
        <div className="w-full relative z-10 py-12 px-2">
        {AdvisoryBoard?.length > 0 && (
        <div className="py-8 container mx-auto">
          <div className="font-mono text-xs text-sky-digital mb-4 text-center uppercase tracking-widest">// INDUSTRY EXPERTS</div>
          <div className="w-16 h-0.5 bg-alert-crimson mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-ghost-white mb-10 text-center tracking-wide">Industry Experts</h2>
          <div className="flex flex-wrap">
            {AdvisoryBoard.map((a, i) => (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3 sm:p-3" key={i}>
                <ProfileCard {...a} />
              </div>
            ))}
          </div>
        </div>
        )}
        {AdvisoryBoardAlumni?.length > 0 && (
          <div className="py-8 container mx-auto">
            <div className="font-mono text-xs text-sky-digital mb-4 text-center uppercase tracking-widest">// AMRITA ALUMNI & INDUSTRY EXPERTS</div>
            <div className="w-16 h-0.5 bg-alert-crimson mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-ghost-white mb-10 text-center tracking-wide">Amrita Alumni & Industry Experts</h2>
            <div className="flex flex-wrap">
              {AdvisoryBoardAlumni.map((a, i) => (
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3 sm:p-3" key={i}>
                  <ProfileCard {...a} />
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
        <div className="relative z-10">
          <PageFooterExplorer
            items={[
              {
                'title': 'Our Reach & Impact',
                'text': 'See our reach & impact',
                'link': '/about#our-reach',
              },
              {
                'title': 'Organizers',
                'text': 'View our team of organizers',
                'link': '/organizers',
              },
              {
                'title': 'Sponsors',
                'text': 'View our Sponsors',
                'link': '/sponsors',
              },
            ]}
          />
        </div>
        <Footer />
      </div>
    </SiteView>
  );
};

export default AdvisoryBoardPage;