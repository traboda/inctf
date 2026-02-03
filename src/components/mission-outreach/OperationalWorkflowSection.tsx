import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  min-height: 600px;
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

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 20px;
  max-width: 900px;
  margin: 60px auto 0;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 20px;
  border-radius: 12px;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(56, 189, 248, 0.05);
  }
  
  &:hover img {
    transform: scale(1.1);
    filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.8));
  }
`;

const StepNumberImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
  object-fit: contain;
  transition: all 0.3s ease;
`;

const StepTitle = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 20px;
  line-height: 26px;
  color: #FFFFFF;
  margin: 0 0 12px 0;
`;

const StepDescription = styled.p`
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #38BDF8;
  margin: 0;
  max-width: 220px;
  
  .highlight {
    color: #FFFFFF;
    font-weight: 700;
  }
`;

const ArrowRight = styled.img`
  position: absolute;
  right: -45px;
  top: 20px;
  width: 40px;
  height: 40px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ArrowLeft = styled.img`
  position: absolute;
  left: -45px;
  top: 20px;
  width: 40px;
  height: 40px;
  transform: rotate(180deg);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const RowDividerContainer = styled.div`
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const DownArrow = styled.img`
  width: 40px;
  height: 40px;
  transform: rotate(90deg);
`;

// Steps data with number images
const stepsRow1 = [
  {
    number: 1,
    numberImage: '/inctf/assets/design/MissionOutreachpage/number-one.png',
    title: 'Step 1',
    description: 'Register as a <span class="highlight">Mission Outreach Operative</span> through the official portal',
    hasArrowRight: true
  },
  {
    number: 2,
    numberImage: '/inctf/assets/design/MissionOutreachpage/number-2.png',
    title: 'Step 2',
    description: 'Receive a unique <span class="highlight">Mission Outreach Code</span>',
    hasArrowRight: true
  },
  {
    number: 3,
    numberImage: '/inctf/assets/design/MissionOutreachpage/number-3.png',
    title: 'Step 3',
    description: 'Share the code within <span class="highlight">your</span> institution and peer network',
    hasArrowRight: false
  }
];

const stepsRow2 = [
  {
    number: 6,
    numberImage: '/inctf/assets/design/MissionOutreachpage/six.png',
    title: 'Step 6',
    description: 'Top-performing operatives are invited to the onsite event in <span class="highlight">Bangalore</span> and formally recognised during the <span class="highlight">Final Deployment</span> phase',
    hasArrowLeft: false
  },
  {
    number: 5,
    numberImage: '/inctf/assets/design/MissionOutreachpage/number-5.png',
    title: 'Step 5',
    description: 'Rewards and recognition are calculated based on <span class="highlight">confirmed</span>, paid registrations',
    hasArrowLeft: true
  },
  {
    number: 4,
    numberImage: '/inctf/assets/design/MissionOutreachpage/number-four.png',
    title: 'Step 4',
    description: 'Each verified team registration using your code contributes to your operational count',
    hasArrowLeft: true
  }
];

const OperationalWorkflowSection = () => {
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

      {/* Bottom-right corner decoration - Vector 15 (rotated 180deg) */}
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
            width: '760px',
            height: '760px',
            left: '10%',
            top: '0',
            opacity: 0.3,
            transform: 'rotate(-28.17deg)'
          }}
        />
        {/* Small satellite top right */}
        <img
          src="/inctf/assets/design/MissionOutreachpage/image-removebg-preview.png"
          alt=""
          style={{
            position: 'absolute',
            width: '254px',
            height: '179px',
            right: '5%',
            top: '150px',
            opacity: 0.5,
            transform: 'rotate(-12.75deg)'
          }}
        />
        {/* Control center image */}
        <img
          src="/inctf/assets/design/MissionOutreachpage/image-removebg-preview(1).png"
          alt=""
          style={{
            position: 'absolute',
            width: '447px',
            height: '447px',
            left: '5%',
            bottom: '0',
            opacity: 0.4
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
        <div className="text-center mb-8">
          <h2>
            <GlitchWrapper data-text="OPERATIONAL WORKFLOW">
              <GlitchMain>OPERATIONAL WORKFLOW</GlitchMain>
            </GlitchWrapper>
          </h2>
        </div>

        {/* Steps Grid */}
        <StepsGrid>
          {/* Row 1: Steps 1, 2, 3 */}
          {stepsRow1.map((step, index) => (
            <StepCard key={step.number}>
              <StepNumberImage src={step.numberImage} alt={`Step ${step.number}`} />
              <StepTitle>{step.title}</StepTitle>
              <StepDescription dangerouslySetInnerHTML={{ __html: `> ${step.description}` }} />
              {step.hasArrowRight && <ArrowRight src="/inctf/assets/design/MissionOutreachpage/right(1).png" alt="arrow" />}
            </StepCard>
          ))}

          {/* Down Arrow Divider between rows */}
          <RowDividerContainer>
            <DownArrow src="/inctf/assets/design/MissionOutreachpage/right(1).png" alt="arrow" />
          </RowDividerContainer>

          {/* Row 2: Steps 6, 5, 4 (reverse order with left arrows) */}
          {stepsRow2.map((step, index) => (
            <StepCard key={step.number}>
              <StepNumberImage src={step.numberImage} alt={`Step ${step.number}`} />
              <StepTitle>{step.title}</StepTitle>
              <StepDescription dangerouslySetInnerHTML={{ __html: `> ${step.description}` }} />
              {step.hasArrowLeft && <ArrowLeft src="/inctf/assets/design/MissionOutreachpage/right(1).png" alt="arrow" />}
            </StepCard>
          ))}
        </StepsGrid>
      </div>
    </SectionContainer>
  );
};

export default OperationalWorkflowSection;
