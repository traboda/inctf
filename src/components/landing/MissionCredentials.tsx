"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import SectionCard from './SectionCard';
import DecodedText from '../shared/DecodedText';

const CredentialsContainer = styled.section`
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
                    className="w-full h-full"
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

{/* Join Mission Control extracted to standalone component */}
            </div>

{/* Footer section extracted to separate component */}

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
