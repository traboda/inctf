'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import YearlyLeaderboard from '../HallOfFame/YearlyLeaderboard';
import Footer from '../shared/Footer';
import PageHeader from '../PageHeader';

const PageWrap = styled.div`
    min-height: 50vh;
    background: transparent;
    display: flex;
    justify-content: center;
`;

type TabButton = {
    isActive: boolean
};

const TabButton = styled.button<TabButton>`
    padding: 0.5rem 1rem 0.5rem 0;
    font-size: 24px;
    font-family: 'Inter', sans-serif;
    background: none;
    border: none;
    font-weight: 600;
    color: ${({ isActive }) => isActive ? '#38BDF8' : '#94A3B8'};
    &:hover, &:focus {
        outline: none!important;
    }
`;

// Dynamic requires might complain in standard webpack without context matching, 
// so we'll allow it for now since the original code did it identically.
const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID || 'inctf';
const eventStats = require(`../../data/${eventID}/stats/index.ts`).default;

const StatsContent = () => {
    const [year, setYear] = useState(eventStats?.editions[0].year);
    const editions = eventStats?.editions || [];

    return (
        <AppThemeWrapper id="stats-page">
            <div className="relative z-10 w-full">
                <PageHeader
                    title="Results & Statistics"
                    description="The results and statistics of the InCTF Junior editions showcasing the top cyber-security student talents in the country."
                    breadcrumb={[
                        { link: '/championship', title: 'Championship' },
                        { link: '/stats', isActive: true, title: 'Results & Statistics' },
                    ]}
                />
                <PageWrap>
                    <div style={{ maxWidth: '1100px', width: '100%' }}>
                        <div className="flex items-center">
                            <div className="container-lg mt-6 px-4 mx-auto">
                                {editions.map((y: any, i: number) => (
                                    <TabButton
                                        key={i}
                                        isActive={y.year === year}
                                        onClick={() => setYear(y.year)}
                                    >
                                        {y.year}
                                    </TabButton>
                                ))}
                            </div>
                        </div>
                        <div className="container-lg px-4 py-5 mx-auto">
                            {editions.filter((y: any) => y.year === year).map((y: any, i: number) =>
                                <YearlyLeaderboard data={y} key={i} />,
                            )}
                        </div>
                    </div>
                </PageWrap>
            </div>
            <div className="relative z-10 w-full">
                <Footer />
            </div>
        </AppThemeWrapper>
    );
};

export default StatsContent;
