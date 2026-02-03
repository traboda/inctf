import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import SectionCard from './SectionCard';
import DecodedText from '../shared/DecodedText';

const CrewEligibilityContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CrewEligibility = () => {
    return (
        <CrewEligibilityContainer>
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
                    className="max-w-3xl mx-auto"
                >
                    {/* Crew Eligibility Box */}
                    <SectionCard className="mb-20" bottomBracketOffset={{ y: -48 }}>
                        <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-6"></div>
                        <h2 className="text-4xl md:text-5xl font-bold font-mono text-ghost-white text-center mb-10 tracking-wider">
                            <DecodedText text="Mission CREW ELIGIBILITY" revealSpeed={60} />
                        </h2>

                        <div className="space-y-6 text-sky-digital font-mono text-base md:text-lg leading-relaxed">
                            <p>
                                <span className="text-sky-digital">&gt;</span>  Undergraduate students (2nd, 3rd, and 4th year)
                            </p>

                            <p>
                                <span className="text-sky-digital">&gt;</span>  Disciplines: Computer Science, IT, AI, Cyber Security, ECE, and related fields
                            </p>

                            <p>
                                <span className="text-sky-digital">&gt;</span>  Cyber-security-interested professionals
                            </p>

                            <p>
                                <span className="text-sky-digital">&gt;</span>  Teams consisting of 3 to 5 members
                            </p>
                        </div>

                        {/* Know More Button */}
                        <div className="flex justify-center mt-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-sky-digital/60 text-sky-digital font-mono text-lg hover:bg-sky-digital/10 transition-all font-bold tracking-wide"
                            >
                                [ Know More ]
                            </motion.button>
                        </div>
                    </SectionCard>
                </motion.div>
            </div>
        </CrewEligibilityContainer>
    );
};

export default CrewEligibility;
