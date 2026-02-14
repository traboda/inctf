import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import PageHeader from '../src/components/PageHeader';
import YoutubeVideos from '../src/components/resources/YoutubeVideos';
import SiteView from '../src/components/SiteView';

const ResourcesPage = () => {
  return (
    <SiteView meta={{ title: 'Resources' }}>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

        {/* Starfield Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-slate-900/30 to-obsidian"></div>
          
          {/* Stars - Row 1 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '5%', left: '8%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '12%', left: '25%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '8%', left: '45%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '15%', left: '68%', width: '55px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '10%', left: '88%', width: '48px' }} />

          {/* Stars - Row 2 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '28%', left: '12%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '35%', left: '38%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '32%', left: '62%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '38%', left: '82%', width: '52px' }} />

          {/* Stars - Row 3 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '52%', left: '5%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '58%', left: '28%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '55%', left: '52%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '60%', left: '75%', width: '50px' }} />

          {/* Stars - Row 4 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '75%', left: '15%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '82%', left: '42%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '78%', left: '65%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '85%', left: '90%', width: '54px' }} />

          {/* Sparkles - Scattered */}
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '18%', left: '18%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '25%', left: '55%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '22%', left: '78%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '45%', left: '20%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '48%', left: '68%', width: '66px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '68%', left: '35%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '72%', left: '8%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '88%', left: '25%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '92%', left: '72%', width: '62px' }} />
        </div>

        <TopBar />
        
        <div className="relative z-10">
          <PageHeader
            breadcrumb={[
              {
                title: 'Resources',
                link: '/resources',
                isActive: true,
              },
            ]}
            title="Resources"
          />
          <div className="container mx-auto px-4 py-12">
            <YoutubeVideos />
          </div>
          <Footer />
        </div>
      </div>
    </SiteView>
  );
};

export default ResourcesPage;