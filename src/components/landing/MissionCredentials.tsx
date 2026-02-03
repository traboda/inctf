import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import SectionCard from './SectionCard';
import DecodedText from '../shared/DecodedText';

const CredentialsContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 2rem 0;
`;

const MissionCredentials = () => {
    return (
        <CredentialsContainer>
            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center flex-grow justify-center">

                {/* Mission Credentials Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl w-full mb-20"
                >
                    <SectionCard bottomBracketOffset={{ y: 16, x: -16 }}>

                        <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-6"></div>
                        <h2 className="text-3xl md:text-4xl font-black font-heading text-ghost-white text-center mb-8 tracking-wider uppercase">
                            <DecodedText text="Mission Credentials" revealSpeed={60} />
                        </h2>

                        <div className="space-y-4 text-sky-digital font-tactical text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-bold">
                            <p>
                                <span className="text-sky-digital mr-2">&gt;</span> Operational continuously since 2010
                            </p>
                            <p>
                                <span className="text-sky-digital mr-2">&gt;</span> Hosted by Amrita Vishwa Vidyapeetham
                            </p>
                            <p>
                                <span className="text-sky-digital mr-2">&gt;</span> Organised in collaboration with team bi0s
                            </p>
                        </div>
                    </SectionCard>
                </motion.div>

                {/* Join Mission Control Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center max-w-4xl w-full mb-20"
                >
                    <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-6"></div>
                    <h2 className="text-3xl md:text-4xl font-black font-mono text-ghost-white mb-6 uppercase tracking-widest">
                        <DecodedText text="Join Mission Control" revealSpeed={60} delay={500} />
                    </h2>
                    <div className="flex items-start justify-center text-sky-digital font-mono text-base md:text-lg mb-10">
                        <span className="mr-2 text-xl">&gt;</span>
                        <p>Receive mission updates, briefings, timelines, and official communications.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/comingsoon">
                            <motion.button
                                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                                whileTap={{ scale: 0.95 }}
                                style={{ boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                                className="px-8 py-4 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono font-bold text-lg tracking-wide rounded"
                            >
                                [ Enter Mission Control ]
                            </motion.button>
                        </Link>

                        <Link href="/comingsoon">
                            <motion.button
                                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                                whileTap={{ scale: 0.95 }}
                                style={{ boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                                className="px-8 py-4 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono font-bold text-lg tracking-wide rounded"
                            >
                                [ View Mission Brief ]
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="w-full relative z-10 pt-16 pb-8 mt-auto">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left Logo */}
                    <div className="w-48 md:w-64">
                        <img src="/inctf/assets/logo_light.png" alt="Amrita InCTF Junior" className="w-full h-auto opacity-90" />
                    </div>

                    {/* Center Text */}
                    <div className="text-center space-y-2">
                        <p className="text-ghost-white font-mono text-base md:text-lg mb-1">© Amrita InCTF 2026</p>
                        <p className="text-slate-satellite font-mono text-sm md:text-base">Conducted by Amrita Vishwa Vidyapeetham</p>
                        <p className="text-slate-satellite font-mono text-sm md:text-base">Organized with team bi0s</p>
                    </div>

                    {/* Right Logo */}
                    <div className="w-32 md:w-48 text-right">
                        <img src="/assets/images/logos/bi0s_dark.png" alt="team bi0s" className="w-full h-auto opacity-90 invert" />
                    </div>
                </div>
            </div>

            {/* Satellite Graphic for this section (Design shows one behind the box) - optional but adds to the look */}
            <div className="absolute right-0 top-1/4 z-0 opacity-20 pointer-events-none">
                <img
                    src="/inctf/assets/design/Homepage/satellite_laser.webp"
                    alt=""
                    className="w-[600px] h-auto"
                    style={{
                        filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))'
                    }}
                />
            </div>
        </CredentialsContainer>
    );
};

export default MissionCredentials;
