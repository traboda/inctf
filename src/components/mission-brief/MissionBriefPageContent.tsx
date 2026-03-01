'use client';

import React from 'react';
import AppThemeWrapper from '../shared/AppThemeWrapper';
import MissionBriefContent from './MissionBriefContent';

const MissionBriefPageContent = () => {
    return (
        <AppThemeWrapper id="mission-brief-page">
            {/* Main Content */}
            <main className="relative z-20 pt-20 pb-20 w-full">
                <MissionBriefContent />
            </main>
        </AppThemeWrapper>
    );
};

export default MissionBriefPageContent;
