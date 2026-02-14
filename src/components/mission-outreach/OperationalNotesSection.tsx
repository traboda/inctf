import React from 'react';
import styled from '@emotion/styled';
import GlitchText from '../shared/GlitchText';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  min-height: 500px;
  overflow: hidden;
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
  transition: all 0.3s ease;
  cursor: pointer;
  
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #38BDF8;
  
  .highlight {
    color: #FFFFFF;
    font-weight: 700;
  }
  
  &:hover {
    transform: translateX(10px);
    box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
    border-color: #7DD3FC;
    background: rgba(56, 189, 248, 0.1);
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
            <GlitchText text="OPERATIONAL NOTES" strikethrough={true} className="text-white font-bold text-3xl md:text-4xl" />
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
