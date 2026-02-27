import React from 'react';
import SiteView from '../SiteView';
import { PageMeta } from '../SiteView/head';
import TopBar from './TopBar';
import StarfieldBackground from './StarfieldBackground';

interface ThemeWrapperProps {
    children: React.ReactNode;
    meta?: PageMeta;
    id?: string;
    hideTopBar?: boolean;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children, meta, id, hideTopBar = false }) => {
    return (
        <SiteView meta={meta}>
            <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-x-hidden" id={id}>
                <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

                {/* Blurred Satellite Background */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    <img
                        src="/inctf/assets/design/Homepage/satellite_laser.webp"
                        alt=""
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

                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </SiteView>
    );
};

export default ThemeWrapper;
