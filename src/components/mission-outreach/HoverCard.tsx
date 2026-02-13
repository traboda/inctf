import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Breathing glow animation
const breathingGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
  }
  50% {
    box-shadow: 0 0 35px rgba(56, 189, 248, 0.4);
  }
`;

// Styled container with hover effects
const CardWrapper = styled.div`
  position: relative;
  
  &:hover .corner-decoration {
    border-color: #38BDF8;
  }
  
  &:hover .hover-glow {
    opacity: 1;
  }
  
  &:hover .tactical-border {
    border-color: rgba(56, 189, 248, 0.6);
  }
`;

const CardContent = styled.div<{ enableGlow?: boolean }>`
  position: relative;
  background: rgba(2, 6, 23, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  transition: all 0.3s ease;
  ${props => props.enableGlow ? `animation: ${breathingGlow} 5s ease-in-out infinite;` : ''}
  
  &:hover {
    border-color: rgba(56, 189, 248, 0.5);
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
  }
`;

// Mouse follow gradient overlay
const HoverGlow = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 1;
`;

interface HoverCardProps {
    children: React.ReactNode;
    className?: string;
    enableBreathingGlow?: boolean;
    showCornerDecorations?: boolean;
}

const HoverCard: React.FC<HoverCardProps> = ({
    children,
    className = '',
    enableBreathingGlow = true,
    showCornerDecorations = true
}) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <CardWrapper className={className} onMouseMove={handleMouseMove}>
            {/* Corner decorations */}
            {showCornerDecorations && (
                <>
                    <div
                        className="corner-decoration absolute border-l border-t transition-colors duration-300"
                        style={{
                            width: '44.5px',
                            height: '46px',
                            left: '0',
                            top: '0',
                            borderColor: 'rgba(56, 189, 248, 0.5)'
                        }}
                    />
                    <div
                        className="corner-decoration absolute border-l border-t transition-colors duration-300"
                        style={{
                            width: '40px',
                            height: '44px',
                            right: '0',
                            bottom: '0',
                            borderColor: 'rgba(56, 189, 248, 0.5)',
                            transform: 'rotate(180deg)'
                        }}
                    />
                </>
            )}

            <CardContent enableGlow={enableBreathingGlow}>
                {/* Mouse-follow glow gradient */}
                <HoverGlow
                    className="hover-glow"
                    style={{
                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.15), transparent 40%)`
                    }}
                />

                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </CardContent>
        </CardWrapper>
    );
};

export default HoverCard;
