'use client';

import React from 'react';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import Schedule from '../landing/Schedule';
import PageHeader from '../PageHeader';

const TrainingsContent = () => {
    return (
        <AppThemeWrapper id="trainings-page">
            <div className="relative z-10 w-full">
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
                <div className="py-8 pb-12 w-full">
                    <Schedule />
                </div>
            </div>
            <Footer />
        </AppThemeWrapper>
    );
};

export default TrainingsContent;
