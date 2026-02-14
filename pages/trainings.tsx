import React from 'react';

import ThemeWrapper from '../src/components/shared/ThemeWrapper';
import Footer from '../src/components/shared/Footer';
import Schedule from '../src/components/landing/Schedule';
import PageHeader from '../src/components/PageHeader';

const TrainingSchedulePage = () => {
  return (
    <ThemeWrapper meta={{ title: 'Training Schedule' }}>
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
    </ThemeWrapper>
  );
};

export default TrainingSchedulePage;