import React from 'react';

import ThemeWrapper from '../src/components/shared/ThemeWrapper';
import Footer from '../src/components/shared/Footer';
import PageHeader from '../src/components/PageHeader';
import YoutubeVideos from '../src/components/resources/YoutubeVideos';

const ResourcesPage = () => {
  return (
    <ThemeWrapper meta={{ title: 'Resources' }}>
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
    </ThemeWrapper>
  );
};

export default ResourcesPage;