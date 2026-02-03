import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

// Corner Breathing Animation
const BreathingCorner = styled(motion.div)`
  @keyframes breathing {
    0%, 100% { opacity: 0.3; text-shadow: 0 0 0px transparent; }
    50% { opacity: 1; text-shadow: 0 0 10px rgba(56, 189, 248, 0.8); }
  }
  animation: breathing 3s ease-in-out infinite;
`;

// Running Data Border Animation
const RunningBorder = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 15;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px dashed rgba(56, 189, 248, 0.3);
    /* Clip path matches the angled card shape */
    clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
    mask: linear-gradient(90deg, transparent, #fff 50%, transparent);
    mask-size: 200% 100%;
    animation: borderRun 3s linear infinite;
  }

  @keyframes borderRun {
    0% { mask-position: 100% 0; }
    100% { mask-position: -100% 0; }
  }
`;

const CardContainer = styled(motion.div)`
  /* Keep existing glow if needed, or rely on the new effects */
`;

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionCard: React.FC<SectionCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <div className="relative group p-1">
      {/* Main Card Content */}
      <CardContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
          hidden: { opacity: 0, scale: 0.9, skewX: 10, filter: "blur(10px)" },
          visible: {
            opacity: 1,
            scale: 1,
            skewX: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.4,
              delay: delay + 0.1,
              ease: "backOut"
            }
          }
        }}
        className={`
            group relative z-10 
            bg-obsidian/40 
            backdrop-blur-md 
            p-8 md:p-12 
            overflow-hidden
            ${className}
          `}
        style={{
          clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        {/* Glass Reactor - Mouse Follow Gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.1), transparent 40%)`
          }}
        />

        {/* Tactical Borders & Codes */}
        {/* The main solid border */}
        <div className="absolute inset-0 border border-sky-digital/20 pointer-events-none"
          style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}>
        </div>

        {/* Idea 5: Running Data Borders */}
        <RunningBorder />

        {/* Idea 6: Corner Breathing (Static/Independent) */}
        {/* Top Left */}
        <BreathingCorner
          className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sky-500 rounded-tl-sm pointer-events-none"
          style={{ animationDelay: '0s' }}
        />
        {/* Bottom Right */}
        <BreathingCorner
          className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-500 rounded-br-sm pointer-events-none"
          style={{ animationDelay: '1.5s' }} // Offset phase
        />

        {/* Tactical Codes */}
        <div className="absolute top-1 right-2 text-[8px] font-mono text-sky-500/40 tracking-widest">SYS-01</div>
        <div className="absolute bottom-1 left-2 text-[8px] font-mono text-sky-500/40 tracking-widest">RDY</div>

        <div className="relative z-10">
          {children}
        </div>
      </CardContainer>
    </div>
  );
};

export default SectionCard;
