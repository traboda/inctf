import React from 'react';
import styled from '@emotion/styled';
import PartnerTiersGrid from './PartnerTiersGrid';
import GlitchText from '../shared/GlitchText';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  min-height: 400px;
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

      {/* Satellite Image - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-5 opacity-30">
        <img
          src="/inctf/assets/design/Homepage/satellite_laser.webp"
          alt=""
          className="w-[850px] h-auto"
          style={{ filter: 'blur(5px) drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))' }}
        />
      </div>

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

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="mb-6 flex flex-col items-center">
          <GlitchText text="PERFORMANCE TIERS &" className="mb-2" />
          <GlitchText text="RECOGNITION" />
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
    </SectionContainer>
  );
};

export default PerformanceTiersSection;
