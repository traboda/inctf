import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  min-height: 500px;
  overflow: hidden;
`;

// Background images container
const BackgroundImages = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.69;
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

const NoteCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 20px;
  padding: 20px 24px;
  background: rgba(2, 6, 23, 0.6);
  border: 1px solid #38BDF8;
  border-radius: 8px;
  
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #38BDF8;
  
  .highlight {
    color: #FFFFFF;
    font-weight: 700;
  }
`;

// Notes data
const notes = [
    {
        id: 1,
        text: 'Only <span class="highlight">verified and payment-completed</span> registrations using the assigned outreach code will be counted'
    },
    {
        id: 2,
        text: 'Travel reimbursements are processed <span class="highlight">post-event</span>, subject to valid ticket receipts'
    },
    {
        id: 3,
        text: '<span class="highlight">Team Bi0s</span> reserves the right to audit registrations and ensure authenticity and fairness'
    }
];

const OperationalNotesSection = () => {
    return (
        <SectionContainer>
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

            {/* Background Images */}
            <BackgroundImages>
                {/* Large satellite - rotated */}
                <img
                    src="/inctf/assets/design/MissionOutreachpage/image-removebg-preview(3).png"
                    alt=""
                    style={{
                        position: 'absolute',
                        width: '645px',
                        height: '645px',
                        left: '15%',
                        top: '0',
                        transform: 'matrix(0.88, -0.47, 0.47, 0.88, 0, 0)'
                    }}
                />
                {/* Small satellite */}
                <img
                    src="/inctf/assets/design/MissionOutreachpage/image-removebg-preview.png"
                    alt=""
                    style={{
                        position: 'absolute',
                        width: '215px',
                        height: '152px',
                        right: '10%',
                        top: '150px',
                        transform: 'rotate(-12.75deg)'
                    }}
                />
                {/* Control center image */}
                <img
                    src="/inctf/assets/design/MissionOutreachpage/image-removebg-preview(1).png"
                    alt=""
                    style={{
                        position: 'absolute',
                        width: '379px',
                        height: '379px',
                        left: '10%',
                        bottom: '-50px'
                    }}
                />
            </BackgroundImages>

            {/* Content */}
            <div className="relative z-10">
                {/* Red line above title */}
                <div
                    style={{
                        width: '75px',
                        height: '2px',
                        background: '#FF0000',
                        margin: '0 auto 30px auto'
                    }}
                />

                {/* Title */}
                <div className="text-center mb-12">
                    <h2>
                        <GlitchWrapper data-text="OPERATIONAL NOTES">
                            <GlitchMain>OPERATIONAL NOTES</GlitchMain>
                        </GlitchWrapper>
                    </h2>
                </div>

                {/* Notes List */}
                <div className="px-4">
                    {notes.map((note) => (
                        <NoteCard key={note.id}>
                            <span dangerouslySetInnerHTML={{ __html: `> ${note.text}` }} />
                        </NoteCard>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default OperationalNotesSection;
