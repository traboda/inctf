'use client';

import React from 'react';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import LandingHeader from '../landing/Header';
import LandingQuickInfo from '../landing/QuickInfo';

const ChampionshipContent = () => {

    return (
        <AppThemeWrapper id="championship-page">
            <div className="relative z-20 pt-20 w-full">
                <LandingHeader />
                <LandingQuickInfo />
            </div>
            <div className="relative z-20 w-full">
                <Footer />
            </div>
        </AppThemeWrapper>
    );

};

export default ChampionshipContent;
