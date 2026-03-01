'use client';

import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';

import TopBar from '../shared/TopBar';
import Footer from '../shared/Footer';
import LandingHeader from '../landing/Header';
import LandingQuickInfo from '../landing/QuickInfo';
import DiversityInitiatives from '../talent/diversity';
import IndianCyberLeague from '../talent/icl';
import CyberClubsInSchools from '../talent/clubs';
import CTFPedagogy from '../talent/HowCTFWorks';
import ConfigContext from '../SiteView/context';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID || 'inctf';
const eventConfig = require(`../../data/${eventID}/config.ts`).default;

const TalentIncubationContent = () => {

    ChartJS.register(...registerables);

    return (
        <ConfigContext.Provider value={eventConfig}>
            <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-x-hidden">
                <TopBar />
                <div className="w-full relative z-20">
                    <LandingHeader />
                    <LandingQuickInfo />
                    <CTFPedagogy />
                    <CyberClubsInSchools />
                    <IndianCyberLeague />
                    <DiversityInitiatives />
                </div>
                <Footer />
            </div>
        </ConfigContext.Provider>
    );

};

export default TalentIncubationContent;
