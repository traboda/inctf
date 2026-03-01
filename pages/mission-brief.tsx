import React from 'react';
import TopBar from '../src/components/shared/TopBar';
import SiteView from '../src/components/SiteView';
import MissionBriefContent from '../src/components/mission-brief/MissionBriefContent';
import StarfieldBackground from '../src/components/shared/StarfieldBackground';

const MissionBriefPage = () => {
    return (
        <SiteView>
            <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden" id="mission-brief-page">
                <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

                {/* Blurred Satellite Background - Fixed */}
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

                {/* Starfield Background  */}
                <StarfieldBackground />

                <TopBar />

                {/* Main Content */}
                <main className="relative z-20 pt-20 pb-20">
                    <MissionBriefContent />
                </main>
            </div>
        </SiteView>
    );
};

export default MissionBriefPage;
