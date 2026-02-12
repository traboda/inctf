import React from 'react';
import SiteView from '../src/components/SiteView';
import TopBar from '../src/components/shared/TopBar';
import { motion } from 'framer-motion';
import SectionCard from '../src/components/landing/SectionCard';
import DecodedText from '../src/components/shared/DecodedText';
import Link from 'next/link';

const ComingSoon = () => {
    return (
        <SiteView meta={{ title: "Coming Soon" }}>
            <div className="bg-obsidian min-h-screen text-ghost-white relative flex flex-col">

                {/* Scanlines */}
                <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

                <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                    <img
                        src="/inctf/assets/design/Homepage/satellite_laser.webp"
                        alt=""
                        className="w-[60vw] h-[60vh] object-cover opacity-20"
                        style={{
                            filter: 'blur(2px)',
                            transform: 'scale(1.1)'
                        }}
                    />
                </div>


                {/* Starfield Background */}
                <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden opacity-80">
                    {/* Stars - Row 1 (Top) */}
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '3%', left: '2%', width: '55px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '8%', left: '15%', width: '48px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '5%', left: '35%', width: '52px' }} />

                    {/* Stars - Row 2 */}
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '22%', left: '5%', width: '60px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '30%', left: '65%', width: '56px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '27%', left: '85%', width: '52px' }} />

                    {/* Stars - Row 3 (Bottom) */}
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '82%', left: '10%', width: '58px' }} />
                    <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '90%', left: '68%', width: '50px' }} />

                    {/* Sparkles - Scattered */}
                    <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '6%', left: '22%', width: '64px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '14%', left: '42%', width: '60px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: '74%', left: '15%', width: '58px' }} />
                    <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: '78%', left: '52%', width: '66px' }} />
                </div>

                <TopBar />

                {/* Main Content */}
                <div className="flex-grow flex flex-col items-center justify-center w-full relative z-20 p-4">
                    <div className="max-w-3xl w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <SectionCard bottomBracketOffset={{ y: 16, x: -16 }}>
                                <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-8"></div>

                                <h1 className="text-4xl md:text-6xl font-black font-heading text-ghost-white text-center mb-8 tracking-wider uppercase">
                                    <DecodedText text="MISSION PENDING" revealSpeed={60} />
                                </h1>

                                <div className="w-full h-px bg-sky-digital/20 mb-8"></div>

                                <div className="text-center space-y-8 px-4 md:px-12">
                                    <p className="text-sky-digital font-mono text-xl md:text-2xl font-bold tracking-tight">
                                        &gt; SECTOR UNDER DEVELOPMENT
                                    </p>
                                    <p className="text-slate-satellite font-mono text-lg leading-relaxed">
                                        Our engineers are currently constructing this module.
                                        Secure communications channels will be established shortly.
                                    </p>
                                    <div className="inline-block px-4 py-2 border border-alert-crimson/30 bg-alert-crimson/10 rounded">
                                        <p className="text-alert-crimson font-tactical text-sm tracking-widest">
                                            // SYSTEM STATUS: STANDBY
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-12 flex justify-center mb-4">
                                    <Link href="/">
                                        <motion.button
                                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-4 bg-obsidian border-2 border-sky-digital text-sky-digital font-mono font-bold text-lg tracking-wide uppercase hover:bg-sky-digital hover:text-obsidian transition-colors duration-300"
                                        >
                                            [ Return to Base ]
                                        </motion.button>
                                    </Link>
                                </div>

                            </SectionCard>
                        </motion.div>
                    </div>
                </div>

            </div>
        </SiteView>
    );
};

export default ComingSoon;
