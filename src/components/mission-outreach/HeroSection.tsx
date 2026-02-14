import React from 'react';
import styled from '@emotion/styled';
import GlitchText from '../shared/GlitchText';

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1215px;
  margin: 0 auto;
  padding: 0 33px;
  min-height: 657px;
`;

const HeroSection = () => {
    const responsibilities = [
        "Representing Operation VAJRA within their institutions and communities.",
        "Coordinating awareness and outreach activities.",
        "Facilitating team enlistment into the mission.",
        "Contributing to the identification and development of India's next generation of cyber defenders"
    ];

    return (
        <HeroContainer>
            {/* Top-left corner decoration */}
            <div
                className="absolute border-l border-t"
                style={{
                    width: '44.5px',
                    height: '46px',
                    left: '33px',
                    top: '0',
                    borderColor: '#38BDF8'
                }}
            />

            {/* Satellite Image - Right Side */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-5 opacity-30">
                <img
                    src="/inctf/assets/design/Homepage/satellite_laser.webp"
                    alt=""
                    className="w-[850px] h-auto"
                    style={{ filter: 'blur(5px) drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))' }}
                />
            </div>

            {/* Bottom-right corner decoration (rotated 180deg) */}
            <div
                className="absolute border-l border-t"
                style={{
                    width: '40px',
                    height: '44px',
                    right: '33px',
                    bottom: '0',
                    borderColor: '#38BDF8',
                    transform: 'rotate(180deg)'
                }}
            />

            {/* Title with glitch effect - matching home page */}
            <h1 className="mb-8">
                <GlitchText text="OPERATION VAJRA" strikethrough={true} className="text-white font-black text-4xl md:text-5xl" />
            </h1>

            {/* Main content container */}
            <div className="flex flex-col lg:flex-row items-start gap-8">

                {/* Left side - Satellite Image */}
                <div className="w-full lg:w-1/2">
                    <div
                        className="relative overflow-hidden"
                        style={{
                            width: '563px',
                            maxWidth: '100%',
                            height: '413px',
                            borderRadius: '43px'
                        }}
                    >
                        <img
                            src="/inctf/assets/design/MissionOutreachpage/mission.jpeg"
                            alt="Mission Outreach"
                            className="w-full h-full object-cover"
                            style={{
                                filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.4))'
                            }}
                        />
                    </div>
                </div>

                {/* Right side - Info Box */}
                <div className="w-full lg:w-1/2">
                    <div
                        className="relative rounded-[14px] p-6 transition-all duration-300 hover:shadow-[5px_5px_30px_rgba(56,189,248,0.6)] hover:border-[rgba(56,189,248,0.5)] hover:bg-[rgba(2,6,23,0.6)]"
                        style={{
                            width: '586px',
                            maxWidth: '100%',
                            background: 'rgba(2, 6, 23, 0.43)',
                            border: '1px solid rgba(56, 189, 248, 0.24)',
                            boxShadow: '5px 5px 4px rgba(56, 189, 248, 0.51)'
                        }}
                    >
                        {/* Main description */}
                        <p
                            className="mb-4"
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '30px',
                                color: '#38BDF8'
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> The Mission Outreach Unit is a critical extension of Operation VAJRA, established to expand mission awareness and participation across institutions nationwide.
                        </p>

                        <p
                            className="mb-4"
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '30px',
                                color: '#38BDF8'
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> Selected participants act as Mission Outreach Operatives, responsible for:
                        </p>

                        {/* Responsibilities list */}
                        <ul className="space-y-4">
                            {responsibilities.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[rgba(56,189,248,0.1)] hover:translate-x-2"
                                >
                                    <img
                                        src="/inctf/assets/design/MissionOutreachpage/right.png"
                                        alt=""
                                        className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                                        style={{ width: '40px', height: '40px' }}
                                    />
                                    <span
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            fontWeight: 400,
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            color: '#38BDF8'
                                        }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </HeroContainer>
    );
};

export default HeroSection;
