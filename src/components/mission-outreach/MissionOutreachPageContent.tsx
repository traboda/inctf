'use client';

import React from 'react';
import AppThemeWrapper from '../shared/AppThemeWrapper';
import HeroSection from './HeroSection';
import PerformanceTiersSection from './PerformanceTiersSection';
import OperationalWorkflowSection from './OperationalWorkflowSection';
import OperationalNotesSection from './OperationalNotesSection';

const MissionOutreachPageContent = () => {
    return (
        <AppThemeWrapper id="mission-outreach-page">
            <main className="relative z-20 pt-20 w-full">
                <HeroSection />
                <PerformanceTiersSection />
                <OperationalWorkflowSection />
                <OperationalNotesSection />
            </main>
        </AppThemeWrapper>
    );
};

export default MissionOutreachPageContent;
