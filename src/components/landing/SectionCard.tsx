import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const CardContainer = styled(motion.div)`
  /* Glassmorphism & Glow */
  background: rgba(2, 6, 23, 0.6); /* Very dark blue/slate */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(56, 189, 248, 0.5); /* Solid blue border */
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.15), inset 0 0 20px rgba(56, 189, 248, 0.05);
  border-radius: 1.5rem; /* Large rounded corners */
`;

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  bottomBracketOffset?: { x?: number; y?: number }; // Custom offset for bottom bracket
}

const SectionCard: React.FC<SectionCardProps> = ({
  children,
  className = "",
  delay = 0,
  bottomBracketOffset = { x: 0, y: -16 } // Default: -16px up (current -translate-y-4)
}) => {
  return (
    <div className="relative group p-4 md:p-8">

      {/* Top-Left L-Bracket (Cyan) */}
      <motion.div
        initial={{ width: 0, height: 0, opacity: 0 }}
        whileInView={{ width: 60, height: 60, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay, ease: "circOut" }}
        className="absolute top-0 left-0 p-4 border-l-[3px] border-t-[3px] border-sky-digital pointer-events-none"
      ></motion.div>

      {/* Bottom-Right L-Bracket (Cyan) - with custom offset */}
      <motion.div
        initial={{ width: 0, height: 0, opacity: 0 }}
        whileInView={{ width: 60, height: 60, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay, ease: "circOut" }}
        className="absolute bottom-0 right-0 p-4 border-r-[3px] border-b-[3px] border-sky-digital pointer-events-none"
        style={{
          transform: `translate(${bottomBracketOffset.x || 0}px, ${bottomBracketOffset.y || 0}px)`
        }}
      ></motion.div>

      {/* Main Card Content */}
      <CardContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
          hidden: { opacity: 0, scale: 0.95, y: 10 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, delay: delay + 0.1 }
          }
        }}
        className={`
            relative z-10 
            p-6 md:p-12 
            overflow-hidden
            ${className}
          `}
        /* Thicker right/bottom borders for 3D effect */
        style={{
          borderRightWidth: '4px',
          borderBottomWidth: '4px',
          borderColor: 'rgba(56, 189, 248, 0.5)',
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
            background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.08), transparent 40%)`
          }}
        />

        {/* Top Accent Line (Red) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-alert-crimson shadow-[0_0_15px_rgba(244,63,94,0.6)] rounded-b-md"></div>



        <div className="relative z-10">
          {children}
        </div>
      </CardContainer>
    </div>
  );
};

export default SectionCard;
