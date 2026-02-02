import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1215px;
  margin: 0 auto;
  padding: 0 33px;
  min-height: 657px;
`;

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

// Glitch text component matching home page exactly
const GlitchText = ({ text, className = "" }: { text: string, className?: string }) => {
    const [displayText, setDisplayText] = React.useState("");
    const [showCursor, setShowCursor] = React.useState(true);
    const [typingComplete, setTypingComplete] = React.useState(false);

    React.useEffect(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.substring(0, index));
                index++;
            } else {
                clearInterval(typeInterval);
                setTypingComplete(true);
                setShowCursor(false);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, [text]);

    return (
        <span className={`relative inline-block ${className}`}>
            <span style={{ position: 'relative', display: 'inline-block' }}>
                {!typingComplete ? (
                    <GlitchMain>
                        {displayText}
                        {showCursor && <span className="animate-pulse">|</span>}
                    </GlitchMain>
                ) : (
                    <GlitchWrapper data-text={displayText}>
                        <GlitchMain>{displayText}</GlitchMain>
                    </GlitchWrapper>
                )}
            </span>
        </span>
    );
};

const HeroSection = () => {
    const responsibilities = [
        "Representing Operation VAJRA within their institutions and communities.",
        "Coordinating awareness and outreach activities.",
        "Facilitating team enlistment into the mission.",
        "Contributing to the identification and development of India's next generation of cyber defenders"
    ];

    return (
        <HeroContainer>
            {/* Corner decorations */}
            <div
                className="absolute top-0 left-[33px] w-[44.5px] h-[46px] border-l border-t"
                style={{ borderColor: '#38BDF8' }}
            />
            <div
                className="absolute bottom-0 right-0 w-[44.5px] h-[46px] border-r border-b"
                style={{ borderColor: '#38BDF8' }}
            />

            {/* Title with glitch effect - matching home page */}
            <h1 className="mb-8">
                <GlitchText text="OPERATION VAJRA" />
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
                            src="/inctf/assets/design/MissionOutreachpage/image-removebg-preview.png"
                            alt="ECHO-9 Satellite"
                            className="w-full h-full object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.4))'
                            }}
                        />
                    </div>
                </div>

                {/* Right side - Info Box */}
                <div className="w-full lg:w-1/2">
                    <div
                        className="relative rounded-[14px] p-6"
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
                                <li key={index} className="flex items-start gap-3">
                                    <img
                                        src="/inctf/assets/design/MissionOutreachpage/right.png"
                                        alt=""
                                        className="flex-shrink-0"
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
