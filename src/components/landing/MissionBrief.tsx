"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import SectionCard from './SectionCard';
import DecodedText from '../shared/DecodedText';

const MissionBriefContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MissionBrief = () => {
    return (
        <MissionBriefContainer>
            {/* Satellite Graphic on Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-5 opacity-30">
                <img
                    src="/inctf/assets/design/Homepage/satellite_laser.webp"
                    alt=""
                    className="w-[850px] h-auto"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))' }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full"
                >
                    {/* Mission Brief Box */}
                    <SectionCard bottomBracketOffset={{ y: -48 }}>
                        <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-6"></div>
                        <h2 className="text-4xl md:text-5xl font-bold font-mono text-ghost-white text-center mb-10 tracking-wider">
                            <DecodedText text="Mission Brief" revealSpeed={80} />
                        </h2>

                        <div className="space-y-8 text-sky-digital font-mono text-base md:text-lg leading-relaxed">
                            <p>
                                <span className="text-sky-digital">&gt;</span>  A dormant deep-orbit system has resumed transmission. Unidentified protocols, unauthorized access attempts, and system anomalies have been detected across critical digital infrastructure.
                            </p>

                            <p className="mt-6">
                                <span className="text-sky-digital">&gt;</span>  In response, Amrita InCTF 2026 has been activated as a national-level operation to recruit, train, and evaluate cyber defence personnel capable of analysing advanced threats, decoding unfamiliar systems, and securing sensitive digital assets under real-world conditions.
                            </p>
                        </div>

                        {/* Know More Button */}
                        <div className="flex justify-center mt-10">
                            <Link href="/comingsoon">
                                <button
                                    className="px-8 py-3 border-2 border-sky-digital/60 text-sky-digital font-mono text-lg hover:!bg-red-600 hover:!text-white hover:!border-red-600 transition-all duration-300 font-bold tracking-wide hover:scale-103 active:scale-95"
                                >
                                    [ Know More ]
                                </button>
                            </Link>
                        </div>
                    </SectionCard>
                </motion.div>
            </div>
        </MissionBriefContainer>
    );
};

export default MissionBrief;
