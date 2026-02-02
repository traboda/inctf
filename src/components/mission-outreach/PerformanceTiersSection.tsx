import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import PartnerTiersGrid from './PartnerTiersGrid';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  min-height: 400px;
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
  font-size: 40px;
  line-height: 52px;
  
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

const PerformanceTiersSection = () => {
  return (
    <SectionContainer>
      {/* Corner decoration - Vector 7 (cyan L-shape top-left) - aligned with HeroSection */}
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

      {/* Red horizontal line - Vector 12 */}
      <div
        style={{
          position: 'absolute',
          width: '75px',
          height: '2px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '40px',
          background: '#FF0000'
        }}
      />

      {/* Satellite image on the right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%) rotate(-15deg)',
          opacity: 0.6
        }}
      >
        <img
          src="/inctf/assets/design/MissionOutreachpage/image-removebg-preview(3).png"
          alt=""
          style={{
            width: '200px',
            filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.4))'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="mb-6">
          <GlitchWrapper data-text="PERFORMANCE TIERS &">
            <GlitchMain>PERFORMANCE TIERS &</GlitchMain>
          </GlitchWrapper>
          <br />
          <GlitchWrapper data-text="RECOGNITION">
            <GlitchMain>RECOGNITION</GlitchMain>
          </GlitchWrapper>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
            color: '#38BDF8',
            maxWidth: '922px',
            margin: '0 auto'
          }}
        >
          <span style={{ color: '#38BDF8' }}>&gt;</span> Mission Outreach performance is evaluated based on verified team registrations achieved using the assigned outreach code.
        </p>
      </div>

      {/* Partner Tiers Grid */}
      <PartnerTiersGrid />

      {/* Right corner decoration - Vector 8 (rotated 180deg) */}
      <div
        className="absolute border-r border-b"
        style={{
          width: '40px',
          height: '44px',
          right: '33px',
          bottom: '0',
          borderColor: '#38BDF8',
          transform: 'rotate(180deg)'
        }}
      />
    </SectionContainer>
  );
};

export default PerformanceTiersSection;
