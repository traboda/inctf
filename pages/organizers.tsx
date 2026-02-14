import React from 'react';

import ThemeWrapper from '../src/components/shared/ThemeWrapper';
import Footer from '../src/components/shared/Footer';
import ProfileSummaryCard from '../src/components/ProfileSummaryCard';
import ProfileMicroCard from '../src/components/ProfileMicroCard';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const eventOrganizers = require(`../src/data/${eventID}/organizers`).default;

const OrganizersPage = () => {

  const getAvatar = (path) => {
    if (eventID && path)
      return `/inctf/assets/organizers/${path}`;
    return null;
  };

  return (
    <ThemeWrapper meta={{ title: 'Organizers' }}>
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
    </ThemeWrapper>
  );
};

export default OrganizersPage;