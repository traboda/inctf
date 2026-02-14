import React from 'react';
import styled from '@emotion/styled';
import GlitchText from '../shared/GlitchText';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  min-height: 600px;
  overflow: hidden;
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

      {/* Satellite Image - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-5 opacity-30">
        <img
          src="/inctf/assets/design/Homepage/satellite_laser.webp"
          alt=""
          className="w-[850px] h-auto"
          style={{ filter: 'blur(5px) drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))' }}
        />
      </div>

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
            <GlitchText text="OPERATIONAL WORKFLOW" strikethrough={true} className="text-white font-bold text-3xl md:text-4xl" />
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
