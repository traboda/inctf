import React from 'react';

import ThemeWrapper from '../src/components/shared/ThemeWrapper';
import Footer from '../src/components/shared/Footer';
import SponsorsSection from '../src/components/landing/SponsorsSection';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';

const SponsorsPage = () => {
  return (
    <ThemeWrapper meta={{ title: 'Sponsors ' }}>
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
    </ThemeWrapper>
  );
};

export default SponsorsPage;