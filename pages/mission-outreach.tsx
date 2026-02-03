import React from 'react';
import TopBar from '../src/components/shared/TopBar';
import SiteView from '../src/components/SiteView';
import HeroSection from '../src/components/mission-outreach/HeroSection';
import PerformanceTiersSection from '../src/components/mission-outreach/PerformanceTiersSection';
import OperationalWorkflowSection from '../src/components/mission-outreach/OperationalWorkflowSection';
import OperationalNotesSection from '../src/components/mission-outreach/OperationalNotesSection';

const MissionOutreachPage = () => {
    return (
        <SiteView>
            <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden" id="mission-outreach-page">
                <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

                {/* Starfield Background  */}
                <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden opacity-80">
                    {/* Stars - Row 1 (Top) */}
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '3%', left: '2%', width: '55px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '8%', left: '15%', width: '48px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '5%', left: '35%', width: '52px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '10%', left: '55%', width: '50px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '7%', left: '75%', width: '58px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '12%', left: '90%', width: '46px' }} />

                    {/* Stars - Row 2 */}
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '22%', left: '5%', width: '60px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '28%', left: '25%', width: '54px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '25%', left: '45%', width: '50px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '30%', left: '65%', width: '56px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '27%', left: '85%', width: '52px' }} />

                    {/* Stars - Row 3 */}
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '42%', left: '8%', width: '62px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '48%', left: '30%', width: '48px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '45%', left: '50%', width: '58px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '50%', left: '70%', width: '54px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '47%', left: '88%', width: '50px' }} />

                    {/* Stars - Row 4 */}
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '62%', left: '3%', width: '56px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '68%', left: '20%', width: '60px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '65%', left: '40%', width: '52px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '70%', left: '58%', width: '48px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '67%', left: '78%', width: '54px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '72%', left: '92%', width: '50px' }} />

                    {/* Stars - Row 5 (Bottom) */}
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '82%', left: '10%', width: '58px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '88%', left: '28%', width: '52px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '85%', left: '48%', width: '56px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '90%', left: '68%', width: '50px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '87%', left: '85%', width: '54px' }} />

                    {/* Sparkles - Scattered */}
                    <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '6%', left: '22%', width: '64px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '14%', left: '42%', width: '60px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: '18%', left: '62%', width: '68px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: '24%', left: '12%', width: '62px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '32%', left: '38%', width: '58px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '38%', left: '78%', width: '66px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: '44%', left: '18%', width: '60px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: '52%', left: '82%', width: '64px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '56%', left: '35%', width: '62px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '64%', left: '60%', width: '68px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: '74%', left: '15%', width: '58px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: '78%', left: '52%', width: '66px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '84%', left: '72%', width: '60px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '92%', left: '38%', width: '64px' }} />
                </div>

                <TopBar />

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
            </div>
        </SiteView>
    );
};

export default MissionOutreachPage;
