import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import animations from '../../animation';
import TypewriterText from '../shared/TypewriterText';
import GlitchText from '../shared/GlitchText';

// Keyframes for glitch effect
const glitch = keyframes`
  2%, 64% {
    transform: translate(2px, 0) skew(0deg);
  }
  4%, 60% {
    transform: translate(-2px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }
`;

const glitchTop = keyframes`
  2%, 64% {
    transform: translate(2px, -2px);
  }
  4%, 60% {
    transform: translate(-2px, 2px);
  }
  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
`;

const glitchBottom = keyframes`
  2%, 64% {
    transform: translate(-2px, 0);
  }
  4%, 60% {
    transform: translate(-2px, 0);
  }
  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
`;

const GlitchWrapper = styled.span`
  position: relative;
  display: inline-block;
  animation: ${glitch} 1s linear infinite;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 48px;
  line-height: 63px;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    color: #ff0000;
    animation: ${glitchTop} 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  &::after {
    color: #00ffff;
    animation: ${glitchBottom} 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
`;

const GlitchMain = styled.span`
  position: relative;
  z-index: 1;
  color: #ffffff;
  text-shadow:
    2px 0 #0a0a14,
    -1px 0 rgba(255, 0, 0, 0.5),
    -2px 0 rgba(0, 255, 255, 0.5);
`;

// Smaller glitch for ECHO-9
const GlitchWrapperSmall = styled.span`
  position: relative;
  display: inline-block;
  animation: ${glitch} 1s linear infinite;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    color: #ff0000;
    animation: ${glitchTop} 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  &::after {
    color: #00ffff;
    animation: ${glitchBottom} 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
`;

// Pulsing animation for ACTIVE text
const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const ActiveText = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 32px;
  color: #FF0000;
  animation: ${pulse} 2s ease-in-out infinite;
`;

// GlitchText component with typing effect


const MissionBriefContent = () => {
    return (
        <div className="relative z-20 pt-20">
            {/* OPERATION VAJRA - Mission Brief Header */}
            <div className="max-w-[1215px] mx-auto px-8 mb-12">
                <h1 className="text-center">
                    <GlitchText
                        text="OPERATION VAJRA"
                        strikethrough={true}
                        className="font-mono font-extrabold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] md:leading-[63px] text-white"
                    />
                    <span
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 400,
                            fontSize: 'clamp(24px, 5vw, 48px)',
                            lineHeight: '1.2',
                            color: '#38BDF8',
                        }}
                    >
                        {' '}-{' '}
                    </span>
                    <span
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontWeight: 400,
                            fontSize: 'clamp(24px, 5vw, 48px)',
                            lineHeight: '1.2',
                            color: '#F8FAFC',
                            fontStyle: 'italic',
                        }}
                    >
                        Mission Brief
                    </span>
                </h1>
            </div>

            {/* SITUATION REPORT Section */}
            <div className="max-w-[1215px] mx-auto px-8">
                {/* Section header with bullet */}
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: '#38BDF8', boxShadow: '0 0 10px #38BDF8, 0 0 20px #38BDF8' }}
                    />
                    <h2
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 800,
                            fontSize: '32px',
                            lineHeight: '42px',
                            color: '#FF0000',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                        }}
                    >
                        <TypewriterText text="SITUATION REPORT" delay={0.2} />
                    </h2>
                </div>

                {/* Report Content Box */}
                <motion.div
                    className="relative"
                    variants={animations}
                    initial="hiddenScale"
                    whileInView="tacticalFocus"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        background: 'rgba(2, 6, 23, 0.85)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        borderRadius: '8px',
                        padding: '40px',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.1), inset 0 0 30px rgba(56, 189, 248, 0.05)',
                    }}
                >
                    {/* Background satellite image */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                        <img
                            src="/inctf/assets/design/Homepage/satellite_laser.webp"
                            alt=""
                            className="absolute bottom-0 right-0 opacity-10"
                            style={{
                                width: '500px',
                                height: 'auto',
                                filter: 'brightness(0.8) contrast(1.2)',
                            }}
                        />
                    </div>

                    {/* Corner decorations */}
                    <div
                        className="absolute top-0 left-0 w-[30px] h-[30px] border-l-2 border-t-2"
                        style={{ borderColor: '#38BDF8' }}
                    />
                    <div
                        className="absolute top-0 right-0 w-[30px] h-[30px] border-r-2 border-t-2"
                        style={{ borderColor: '#38BDF8' }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-[30px] h-[30px] border-l-2 border-b-2"
                        style={{ borderColor: '#38BDF8' }}
                    />
                    <div
                        className="absolute bottom-0 right-0 w-[30px] h-[30px] border-r-2 border-b-2"
                        style={{ borderColor: '#38BDF8' }}
                    />

                    <div className="relative z-10 space-y-6">
                        {/* Paragraph 1 */}
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> For over a decade, a deep-orbit system designated ECHO-9 was believed to be inactive.
                        </p>

                        {/* Paragraph 2 */}
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> Its purpose undocumented. Its status unknown.
                        </p>

                        {/* Paragraph 3 - with highlighted time */}
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> At{' '}
                            <span
                                style={{
                                    backgroundColor: 'rgba(56, 189, 248, 0.2)',
                                    padding: '2px 6px',
                                    borderRadius: '3px',
                                    color: '#ffffff',
                                }}
                            >
                                02:14 IST
                            </span>
                            , dormant transmission channels resumed activity.
                        </p>

                        {/* Indented items */}
                        <div className="pl-8 space-y-2">
                            <p
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#38BDF8',
                                }}
                            >
                                [ Not a beacon ]
                            </p>
                            <p
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#38BDF8',
                                }}
                                className="pl-4"
                            >
                                [ Not a distress signal ]
                            </p>
                            <p
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#FF0000',
                                }}
                                className="pl-8"
                            >
                                [ A structured transmission—encoded in an unfamiliar protocol ]
                            </p>
                        </div>

                        {/* Paragraph 4 */}
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> Within hours, correlated anomalies were detected across multiple layers of critical digital infrastructure:
                        </p>

                        {/* Bullet list */}
                        <ul className="pl-12 space-y-2">
                            <li
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#38BDF8',
                                    listStyleType: 'disc',
                                }}
                            >
                                Unauthorised uplink attempts
                            </li>
                            <li
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#94A3B8',
                                    listStyleType: 'disc',
                                }}
                            >
                                Altered access rules
                            </li>
                            <li
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#94A3B8',
                                    listStyleType: 'disc',
                                }}
                            >
                                Irregular routing behaviour
                            </li>
                            <li
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#94A3B8',
                                    listStyleType: 'disc',
                                }}
                            >
                                Command sequences originating outside known control zones
                            </li>
                        </ul>

                        {/* ECHO-9 is ACTIVE footer */}
                        <div className="mt-8 pt-6 flex items-center gap-3 flex-wrap">
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                    color: '#94A3B8',
                                }}
                            >
                                The source was confirmed:
                            </span>
                            <GlitchText
                                text="ECHO-9"
                                strikethrough={true}
                                className="font-mono font-extrabold text-[28px] leading-[36px] text-white"
                            />
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                    color: '#94A3B8',
                                }}
                            >
                                is
                            </span>
                            <ActiveText>[...ACTIVE...]</ActiveText>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* THREAT ASSESSMENT Section */}
            <div className="max-w-[1215px] mx-auto px-8 mt-16">
                {/* Section header with bullet */}
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: '#38BDF8', boxShadow: '0 0 10px #38BDF8, 0 0 20px #38BDF8' }}
                    />
                    <h2
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 800,
                            fontSize: 'clamp(24px, 4vw, 32px)',
                            lineHeight: '1.2',
                            color: '#FF0000',
                            textTransform: 'uppercase',
                            letterSpacing: 'clamp(1px, 0.5vw, 3px)',
                        }}
                    >
                        <TypewriterText text="THREAT ASSESSMENT" delay={0.2} />
                    </h2>
                </div>

                {/* Threat Assessment Content Box */}
                <motion.div
                    className="relative"
                    variants={animations}
                    initial="hiddenScale"
                    whileInView="tacticalFocus"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        background: 'rgba(2, 6, 23, 0.85)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        borderRadius: '8px',
                        padding: '40px',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.1), inset 0 0 30px rgba(56, 189, 248, 0.05)',
                    }}
                >
                    {/* Background logo/emblem image */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none flex items-center justify-center">
                        <img
                            src="/inctf/assets/design/Homepage/satellite_laser.webp"
                            alt=""
                            className="opacity-10"
                            style={{
                                width: '400px',
                                height: 'auto',
                                filter: 'brightness(0.8) contrast(1.2)',
                            }}
                        />
                    </div>

                    {/* Corner decorations */}
                    <div
                        className="absolute top-0 left-0 w-[30px] h-[30px] border-l-2 border-t-2"
                        style={{ borderColor: '#38BDF8' }}
                    />
                    <div
                        className="absolute top-0 right-0 w-[30px] h-[30px] border-r-2 border-t-2"
                        style={{ borderColor: '#38BDF8' }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-[30px] h-[30px] border-l-2 border-b-2"
                        style={{ borderColor: '#38BDF8' }}
                    />
                    <div
                        className="absolute bottom-0 right-0 w-[30px] h-[30px] border-r-2 border-b-2"
                        style={{ borderColor: '#38BDF8' }}
                    />

                    <div className="relative z-10 space-y-6">
                        {/* Paragraph 1 */}
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#94A3B8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> Analysis indicates the transmission is not random.
                        </p>

                        {/* Paragraph 2 */}
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#94A3B8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> The signal demonstrates intent.
                        </p>

                        {/* Paragraph 3 - ECHO-9 and VAJRA Station */}
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> ECHO-9 appears to be interfacing with a critical control system known internally as{' '}
                            <span style={{ color: '#ffffff', fontWeight: 700 }}>VAJRA Station</span>
                            {' '}— an operational hub responsible for:
                        </p>

                        {/* Bracketed items */}
                        <div className="pl-8 space-y-2">
                            <p
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#38BDF8',
                                }}
                            >
                                [ Secure communication ]
                            </p>
                            <p
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#FF0000',
                                }}
                            >
                                [ Navigation systems ]
                            </p>
                            <p
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#38BDF8',
                                }}
                            >
                                [ Satellite-linked digital assets ]
                            </p>
                        </div>

                        {/* Paragraph 4 - risk scenario */}
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#94A3B8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> As VAJRA Station begins responding to external inputs, analysts confirm an unprecedented risk scenario:
                        </p>

                        {/* Indented sub-paragraphs */}
                        <div className="pl-12 space-y-4">
                            <p
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#38BDF8',
                                }}
                            >
                                <span style={{ color: '#38BDF8' }}>&gt;</span> A legacy system in deep orbit is attempting to reassert control over modern digital infrastructure
                            </p>
                            <p
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#38BDF8',
                                }}
                            >
                                <span style={{ color: '#38BDF8' }}>&gt;</span> If{' '}
                                <span
                                    style={{
                                        backgroundColor: 'rgba(56, 189, 248, 0.2)',
                                        padding: '2px 6px',
                                        borderRadius: '3px',
                                        color: '#ffffff',
                                    }}
                                >
                                    successful
                                </span>
                                , the consequences extend beyond system compromise.
                            </p>
                        </div>

                        {/* Loss of Command footer */}
                        <div className="mt-8 pt-4 text-center">
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                    color: '#94A3B8',
                                }}
                            >
                                This is a{' '}
                            </span>
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 700,
                                    fontSize: '24px',
                                    lineHeight: '30px',
                                    color: '#FF0000',
                                    fontStyle: 'italic',
                                    textShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
                                }}
                            >
                                Loss of Command...
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* OPERATIONAL RESPONSE Section */}
            <div className="max-w-[1215px] mx-auto px-8 mt-16">
                {/* Section header with bullet */}
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: '#38BDF8', boxShadow: '0 0 10px #38BDF8, 0 0 20px #38BDF8' }}
                    />
                    <h2
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 800,
                            fontSize: 'clamp(24px, 4vw, 32px)',
                            lineHeight: '1.2',
                            color: '#FF0000',
                            textTransform: 'uppercase',
                            letterSpacing: 'clamp(1px, 0.5vw, 3px)',
                        }}
                    >
                        <TypewriterText text="OPERATIONAL RESPONSE" delay={0.2} />
                    </h2>
                </div>

                {/* Intro paragraph */}
                <p
                    className="mb-8 pl-4"
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: '#94A3B8',
                    }}
                >
                    <span style={{ color: '#38BDF8' }}>&gt;</span> In response to this escalation,{' '}
                    <span style={{ color: '#ffffff', fontWeight: 700 }}>Operation VAJRA</span>
                    {' '}has been activated.
                </p>

                {/* Objective Box */}
                <motion.div
                    className="relative mb-8"
                    variants={animations}
                    initial="hiddenScale"
                    whileInView="tacticalFocus"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        background: 'rgba(2, 6, 23, 0.85)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        borderRadius: '8px',
                        padding: '32px',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.1), inset 0 0 30px rgba(56, 189, 248, 0.05)',
                    }}
                >
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-[20px] h-[20px] border-l-2 border-t-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute top-0 right-0 w-[20px] h-[20px] border-r-2 border-t-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-l-2 border-b-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-r-2 border-b-2" style={{ borderColor: '#38BDF8' }} />

                    <p
                        className="mb-6"
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '30px',
                            color: '#94A3B8',
                        }}
                    >
                        The objective is clear:
                    </p>

                    <div className="space-y-4 pl-4">
                        {[
                            'Decode the unknown transmission protocols',
                            'Analyse anomalous system behaviour',
                            'Restore command authority',
                            'Prevent autonomous hostile control',
                        ].map((item, index) => (
                            <motion.div key={index} className="flex items-center gap-4" variants={animations}>
                                <img
                                    src="/inctf/assets/design/MissionOutreachpage/right.png"
                                    alt=""
                                    className="flex-shrink-0"
                                    style={{ width: '32px', height: '32px' }}
                                />
                                <span
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '26px',
                                        color: '#F8FAFC',
                                    }}
                                >
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Closing paragraph */}
                <p
                    className="pl-4"
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: '#94A3B8',
                        maxWidth: '700px',
                    }}
                >
                    <span style={{ color: '#38BDF8' }}>&gt;</span> This operation requires individuals capable of operating under uncertainty—analysts, problem-solvers, and defenders trained to think beyond predefined rules.
                </p>
            </div>

            {/* MISSION PARAMETERS Section */}
            <div className="max-w-[1215px] mx-auto px-8 mt-16">
                {/* Section header with bullet */}
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: '#38BDF8', boxShadow: '0 0 10px #38BDF8, 0 0 20px #38BDF8' }}
                    />
                    <h2
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 800,
                            fontSize: '32px',
                            lineHeight: '42px',
                            color: '#FF0000',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                        }}
                    >
                        <TypewriterText text="MISSION PARAMETERS" delay={0.2} />
                    </h2>
                </div>

                {/* Intro paragraph */}
                <p
                    className="mb-8 pl-4"
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: '#94A3B8',
                    }}
                >
                    <span style={{ color: '#38BDF8' }}>&gt;</span> Operation VAJRA is{' '}
                    <span style={{ color: '#ffffff', fontWeight: 700 }}>not a simulation</span>.
                </p>

                {/* Parameters Box */}
                <motion.div
                    className="relative mb-8"
                    variants={animations}
                    initial="hiddenScale"
                    whileInView="tacticalFocus"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        background: 'rgba(2, 6, 23, 0.85)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        borderRadius: '8px',
                        padding: '32px',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.1), inset 0 0 30px rgba(56, 189, 248, 0.05)',
                    }}
                >
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-[20px] h-[20px] border-l-2 border-t-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute top-0 right-0 w-[20px] h-[20px] border-r-2 border-t-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-l-2 border-b-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-r-2 border-b-2" style={{ borderColor: '#38BDF8' }} />

                    <p
                        className="mb-6"
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '30px',
                            color: '#94A3B8',
                        }}
                    >
                        It is a{' '}
                        <span style={{ color: '#38BDF8', fontWeight: 700 }}>controlled, progressive mission environment</span>
                        {' '}designed to mirror real-world cyber defence challenges:
                    </p>

                    <div className="space-y-4 pl-4">
                        {[
                            'Incomplete information',
                            'Evolving threat conditions',
                            'Time-sensitive decision-making',
                            'Multi-layered system interactions',
                        ].map((item, index) => (
                            <motion.div key={index} className="flex items-center gap-4" variants={animations}>
                                <img
                                    src="/inctf/assets/design/MissionOutreachpage/right.png"
                                    alt=""
                                    className="flex-shrink-0"
                                    style={{ width: '32px', height: '32px' }}
                                />
                                <span
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '26px',
                                        color: '#F8FAFC',
                                    }}
                                >
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Closing paragraph */}
                <p
                    className="pl-4"
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: '#94A3B8',
                        maxWidth: '700px',
                    }}
                >
                    <span style={{ color: '#38BDF8' }}>&gt;</span> Participants will encounter systems that resist standard approaches and challenges that require adaptive thinking rather than scripted solutions.
                </p>
            </div>

            {/* COMMAND AUTHORITY Section */}
            <div className="max-w-[1215px] mx-auto px-8 mt-16">
                {/* Section header with bullet */}
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: '#38BDF8', boxShadow: '0 0 10px #38BDF8, 0 0 20px #38BDF8' }}
                    />
                    <h2
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 800,
                            fontSize: '32px',
                            lineHeight: '42px',
                            color: '#FF0000',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                        }}
                    >
                        <TypewriterText text="COMMAND AUTHORITY" delay={0.2} />
                    </h2>
                </div>

                {/* Content Box */}
                <motion.div
                    className="relative"
                    variants={animations}
                    initial="hiddenScale"
                    whileInView="tacticalFocus"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        background: 'rgba(2, 6, 23, 0.85)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        borderRadius: '8px',
                        padding: '40px',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.1), inset 0 0 30px rgba(56, 189, 248, 0.05)',
                    }}
                >
                    {/* Background image */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none flex items-center justify-center">
                        <img
                            src="/inctf/assets/design/Homepage/satellite_laser.webp"
                            alt=""
                            className="opacity-10"
                            style={{
                                width: '400px',
                                height: 'auto',
                                filter: 'brightness(0.8) contrast(1.2)',
                            }}
                        />
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-[30px] h-[30px] border-l-2 border-t-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute top-0 right-0 w-[30px] h-[30px] border-r-2 border-t-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute bottom-0 left-0 w-[30px] h-[30px] border-l-2 border-b-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute bottom-0 right-0 w-[30px] h-[30px] border-r-2 border-b-2" style={{ borderColor: '#38BDF8' }} />

                    <div className="relative z-10 space-y-6">
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> Operation VAJRA is executed under the command of{' '}
                            <span style={{ color: '#ffffff', fontWeight: 700 }}>Amrita Vishwa Vidyapeetham</span>
                            , in collaboration with team{' '}
                            <span style={{ color: '#38BDF8', fontWeight: 700 }}>bi0s</span>
                            , one of India's most respected cyber security research teams.
                        </p>

                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> The mission framework draws from years of research, competitive problem design, and real-world security practice, ensuring technical depth and operational realism
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* FINAL DIRECTIVE Section */}
            <div className="max-w-[1215px] mx-auto px-8 mt-16 pb-10">
                {/* Section header with bullet */}
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: '#38BDF8', boxShadow: '0 0 10px #38BDF8, 0 0 20px #38BDF8' }}
                    />
                    <h2
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 800,
                            fontSize: '32px',
                            lineHeight: '42px',
                            color: '#FF0000',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                        }}
                    >
                        <TypewriterText text="FINAL DIRECTIVE" delay={0.2} />
                    </h2>
                </div>

                {/* Content Box */}
                <motion.div
                    className="relative"
                    variants={animations}
                    initial="hiddenScale"
                    whileInView="tacticalFocus"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        background: 'rgba(2, 6, 23, 0.85)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        borderRadius: '8px',
                        padding: '40px',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.1), inset 0 0 30px rgba(56, 189, 248, 0.05)',
                    }}
                >
                    {/* Background image */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none flex items-center justify-center">
                        <img
                            src="/inctf/assets/design/Homepage/satellite_laser.webp"
                            alt=""
                            className="opacity-10"
                            style={{
                                width: '400px',
                                height: 'auto',
                                filter: 'brightness(0.8) contrast(1.2)',
                            }}
                        />
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-[30px] h-[30px] border-l-2 border-t-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute top-0 right-0 w-[30px] h-[30px] border-r-2 border-t-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute bottom-0 left-0 w-[30px] h-[30px] border-l-2 border-b-2" style={{ borderColor: '#38BDF8' }} />
                    <div className="absolute bottom-0 right-0 w-[30px] h-[30px] border-r-2 border-b-2" style={{ borderColor: '#38BDF8' }} />

                    <div className="relative z-10 space-y-6">
                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> The window for intervention is opening.
                        </p>

                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> Engage protocols. Stand by for tasking orders.
                        </p>

                        <p
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#38BDF8',
                            }}
                        >
                            <span style={{ color: '#38BDF8' }}>&gt;</span> Welcome to <span style={{ color: '#FF0000', fontWeight: 700 }}>Operation VAJRA</span>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MissionBriefContent;
