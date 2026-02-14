import React from 'react';

import ThemeWrapper from '../src/components/shared/ThemeWrapper';
import { AdvisoryBoard, AdvisoryBoardAlumni } from '../src/data/organizers';
import ProfileCard from '../src/components/ProfileCard';
import Footer from '../src/components/shared/Footer';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';

const AdvisoryBoardPage = () => {

  return (
    <ThemeWrapper meta={{ title: 'Advisory Board' }}>
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
    </ThemeWrapper>
  );
};

export default AdvisoryBoardPage;