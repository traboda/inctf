import React from 'react';
import ThemeWrapper from '../src/components/shared/ThemeWrapper';
import HeroSection from '../src/components/mission-outreach/HeroSection';
import PerformanceTiersSection from '../src/components/mission-outreach/PerformanceTiersSection';
import OperationalWorkflowSection from '../src/components/mission-outreach/OperationalWorkflowSection';
import OperationalNotesSection from '../src/components/mission-outreach/OperationalNotesSection';

const MissionOutreachPage = () => {
    return (
        <ThemeWrapper id="mission-outreach-page">
            {/* Main Content */}
            <main className="relative z-20 pt-20">
                {/* Operation Vajra Header Section */}
                <HeroSection />

                {/* Performance Tiers & Recognition Section */}
                <PerformanceTiersSection />

                {/* Operational Workflow Section */}
                <OperationalWorkflowSection />

                {/* Operational Notes Section */}
                <OperationalNotesSection />
            </main>
        </ThemeWrapper>
    );
};

export default MissionOutreachPage;
