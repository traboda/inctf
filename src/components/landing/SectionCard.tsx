import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const CardContainer = styled(motion.div)`
  @keyframes breathingGlow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
    }
    50% {
      box-shadow: 0 0 35px rgba(56, 189, 248, 0.5);
    }
  }
  animation: breathingGlow 5s ease-in-out infinite;
`;

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const CornerBracket = ({ top, bottom, left, right, delay }: { top?: boolean, bottom?: boolean, left?: boolean, right?: boolean, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 1.2 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={`absolute w-8 h-8 border-sky-digital/50 group-hover:border-sky-digital transition-colors duration-300 pointer-events-none z-20 
        ${top ? 'border-t-2 -top-[2px] rounded-tl-sm' : ''} 
        ${bottom ? 'border-b-2 -bottom-[2px] rounded-br-sm' : ''} 
        ${left ? 'border-l-2 -left-[2px]' : ''} 
        ${right ? 'border-r-2 -right-[2px]' : ''}`}
  />
);

const SectionCard: React.FC<SectionCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <div className="relative group p-1">
      {/* Animation: Corner Brackets */}
      <CornerBracket top left delay={delay} />
      <CornerBracket bottom right delay={delay} />

      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-sky-digital/30 group-hover:border-sky-digital/60 transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-sky-digital/30 group-hover:border-sky-digital/60 transition-colors duration-300"></div>

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
        <div className="absolute inset-0 border border-sky-digital/20 transition-all duration-300 group-hover:border-sky-digital/40 pointer-events-none"
          style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}>
        </div>

        {/* Corner Decorators */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sky-500/50 rounded-tl-sm" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-500/50 rounded-br-sm" />

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
