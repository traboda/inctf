'use client';

import React from 'react';
import TopBar from './TopBar';
import StarfieldBackground from './StarfieldBackground';
import ConfigContext from '../SiteView/context';

interface AppThemeWrapperProps {
    children: React.ReactNode;
    id?: string;
    hideTopBar?: boolean;
}

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID || 'inctf';

// Load config using standard require
const eventConfig = require(`../../data/${eventID}/config.ts`).default;

const AppThemeWrapper: React.FC<AppThemeWrapperProps> = ({ children, id, hideTopBar = false }) => {
    return (
        <ConfigContext.Provider value={eventConfig}>
            <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-x-hidden" id={id}>
                <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

                {/* Blurred Satellite Background */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    <img
                        src="/inctf/assets/design/Homepage/satellite_laser.webp"
                        alt="Satellite Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-20"
                        style={{
                            filter: 'blur(40px)',
                            transform: 'scale(1.1)'
                        }}
                    />
                </div>

                {/* Starfield Background */}
                <StarfieldBackground />

                {!hideTopBar && <TopBar />}

                <div className="relative z-10 w-full">
                    {children}
                </div>
            </div>
        </ConfigContext.Provider>
    );
};

export default AppThemeWrapper;
