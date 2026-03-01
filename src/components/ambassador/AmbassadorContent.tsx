'use client';

import React from 'react';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import PageHeader from '../PageHeader';
import AmbassadorProgram from '../AmbassadorProgram/ambassador-program';

const AmbassadorContent = () => {
    return (
        <AppThemeWrapper id="ambassador-program">
            <div className="relative z-10 w-full">
                <PageHeader
                    title="Ambassador Program"
                    description="Join us in empowering the next generation of cybersecurity leaders across India."
                    breadcrumb={[
                        { title: 'Get Started', link: '/start' },
                        { title: 'Ambassador Program', link: '/ambassador', isActive: true },
                    ]}
                />
                <div className="py-4" style={{ minHeight: '100vh' }}>
                    <AmbassadorProgram />
                </div>
            </div>
            <div className="relative z-10 w-full">
                <Footer />
            </div>
        </AppThemeWrapper>
    );
};

export default AmbassadorContent;
