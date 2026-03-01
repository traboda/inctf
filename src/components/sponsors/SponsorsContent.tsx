'use client';

import React from 'react';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import SponsorsSection from '../landing/SponsorsSection';
import PageHeader from '../PageHeader';
import PageFooterExplorer from '../PageFooterExplorer';

const SponsorsContent = () => {
    return (
        <AppThemeWrapper id="sponsors-page">
            <div className="relative z-10 w-full">
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
            <div className="relative z-10 mx-auto text-center px-4 pb-12 w-full" style={{ maxWidth: 700 }}>
                <SponsorsSection />
            </div>
            <div className="relative z-10 w-full">
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
        </AppThemeWrapper>
    );
};

export default SponsorsContent;
