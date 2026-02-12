import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import ProfileSummaryCard from '../src/components/ProfileSummaryCard';
import ProfileMicroCard from '../src/components/ProfileMicroCard';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';
import SiteView from '../src/components/SiteView';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const eventOrganizers = require(`../src/data/${eventID}/organizers`).default;

const OrganizersPage = () => {

  const getAvatar = (path) => {
    if (eventID && path)
      return `/inctfj/assets/organizers/${path}`;
    return null;
  };

  return (
    <SiteView meta={{ title: 'Organizers' }}>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>
        
        {/* Starfield Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-slate-900/30 to-obsidian"></div>
          
          {/* Stars - Pattern */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '6%', left: '5%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '14%', left: '28%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '10%', left: '52%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '16%', left: '78%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '30%', left: '12%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '36%', left: '42%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '33%', left: '68%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '38%', left: '88%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '54%', left: '18%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '60%', left: '48%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '57%', left: '72%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '76%', left: '8%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '82%', left: '35%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '80%', left: '62%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '86%', left: '85%', width: '56px' }} />

          {/* Sparkles */}
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '8%', left: '18%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '18%', left: '62%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '24%', left: '85%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '40%', left: '22%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '46%', left: '75%', width: '66px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '64%', left: '32%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '70%', left: '55%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '78%', left: '18%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '90%', left: '68%', width: '62px' }} />
        </div>

        <TopBar />
        <div className="relative z-10">
          <PageHeader
            title="Organizers"
            breadcrumb={[
              {
                link: '/about',
                title: 'About',
              },
              {
                link: '/organizers',
                isActive: true,
                title: 'Organizers',
              },
            ]}
          />
        </div>
        {eventOrganizers?.length > 0 && (
          <div className="relative z-10 py-12 px-2">
          {eventOrganizers?.filter((f) => f.type === 'profile').map((p, i) => (
            <div className="py-8 container mx-auto" key={i}>
              <div className="font-mono text-xs text-sky-digital mb-4 text-center uppercase tracking-widest">// {p.label}</div>
              <div className="w-16 h-0.5 bg-alert-crimson mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono text-ghost-white mb-8 text-center tracking-wide">{p.label}</h2>
              <div className="flex flex-wrap">
                {p?.members.map((a, i) => (
                  <div className="w-full md:w-1/3 p-3" key={i}>
                    <ProfileSummaryCard
                      {...a}
                      avatar={getAvatar(a.avatar)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          {eventOrganizers?.filter((f) => f.type === 'badge').map((p, i) => (
            <div className="py-8 container mx-auto" key={i}>
              <div className="font-mono text-xs text-sky-digital mb-4 text-center uppercase tracking-widest">// {p.label}</div>
              <div className="w-16 h-0.5 bg-alert-crimson mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono text-ghost-white mb-8 text-center tracking-wide">{p.label}</h2>
              <div className="flex flex-wrap">
                {p?.members.map((a, i) => (
                  <div className="w-full md:w-1/3 p-3" key={i}>
                    <ProfileMicroCard
                      {...a}
                      avatar={getAvatar(a.avatar)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        )}
        <div className="relative z-10">
          <PageFooterExplorer
            items={[
              {
                'title': 'Our Reach & Impact',
                'text': 'See our reach & impact',
                'link': '/about#our-reach',
              },
              {
                'title': 'Advisory Board',
                'text': 'View our elite panel of advisors',
                'link': '/advisory-board',
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

export default OrganizersPage;