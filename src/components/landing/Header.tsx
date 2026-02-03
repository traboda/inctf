import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, Radio, Terminal, ChevronRight, Crosshair } from 'lucide-react';

import animations from '../../animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

import TypewriterText from '../shared/TypewriterText';
import SectionCard from './SectionCard';

const HeaderContainer = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  #landing-header-cover-image {
    max-height: 70vh;
    filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.4));
  }

  /* Breathing Glow Animation */
  @keyframes breathingGlow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
    }
  }

  .breathing-glow {
    animation: breathingGlow 5s ease-in-out infinite;
  }

  /* Floating/Levitation Animation */
  @keyframes floating {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
  }

  .floating {
    animation: floating 7s ease-in-out infinite;
  }



  /* Border Flicker Animation */
  @keyframes borderFlicker {
    0%, 100% {
      opacity: 0;
    }
    10%, 30%, 50%, 70%, 90% {
      opacity: 1;
    }
    20%, 40%, 60%, 80% {
      opacity: 0.3;
    }
  }

  .border-flicker-segment {
    position: absolute;
    background: rgba(56, 189, 248, 0.8);
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
    animation: borderFlicker 0.3s ease-in-out;
    z-index: 10;
  }
`;

const GlitchText = ({ text, className = "" }: { text: string, className?: string }) => {
  const [displayText, setDisplayText] = React.useState("");
  const [showCursor, setShowCursor] = React.useState(true);
  const [typingComplete, setTypingComplete] = React.useState(false);

  React.useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTypingComplete(true);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [text]);

  return (
    <span className={`relative inline-block ${className}`}>
      <style jsx>{`
        @keyframes glitch {
          2%, 64% {
            transform: translate(2px, 0) skew(0deg);
          }
          4%, 60% {
            transform: translate(-2px, 0) skew(0deg);
          }
          62% {
            transform: translate(0, 0) skew(5deg);
          }
        }
        
        @keyframes glitchTop {
          2%, 64% {
            transform: translate(2px, -2px);
          }
          4%, 60% {
            transform: translate(-2px, 2px);
          }
          62% {
            transform: translate(13px, -1px) skew(-13deg);
          }
        }
        
        @keyframes glitchBottom {
          2%, 64% {
            transform: translate(-2px, 0);
          }
          4%, 60% {
            transform: translate(-2px, 0);
          }
          62% {
            transform: translate(-22px, 5px) skew(21deg);
          }
        }
        
        .glitch-container {
          position: relative;
          display: inline-block;
        }
        
        .glitch-wrapper {
          position: relative;
          display: inline-block;
          animation: glitch 1s linear infinite;
        }
        
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-wrapper::before {
          color: #ff0000;
          animation: glitchTop 1s linear infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        }
        
        .glitch-wrapper::after {
          color: #00ffff;
          animation: glitchBottom 1.5s linear infinite;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
        }
        
        .glitch-main {
          position: relative;
          z-index: 1;
          color: #ffffff;
          text-shadow: 
            1px 1px 0 rgba(0, 255, 255, 0.8),
            2px 2px 0 rgba(0, 255, 255, 0.7),
            3px 3px 0 rgba(0, 255, 255, 0.6),
            4px 4px 0 rgba(0, 200, 200, 0.5),
            5px 5px 0 rgba(0, 150, 150, 0.4),
            6px 6px 0 rgba(255, 0, 0, 0.3),
            7px 7px 0 rgba(255, 0, 0, 0.2),
            8px 8px 20px rgba(0, 0, 0, 0.5);
          transform: skewY(-2deg);
        }
      `}</style>
      <span className="glitch-container">
        {!typingComplete ? (
          <span className="glitch-main">
            {displayText}
            {showCursor && <span className="animate-pulse">|</span>}
          </span>
        ) : (
          <span className="glitch-wrapper" data-text={displayText}>
            <span className="glitch-main">{displayText}</span>
          </span>
        )}
      </span>
    </span>
  );
};

// Holographic Flicker Component
const HolographicFlicker = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <div className="holographic-flicker-wrapper" style={{ animationDelay: `${delay}s` }}>
      <style jsx>{`
        @keyframes holographicFlicker {
          0%, 100% {
            opacity: 1;
            filter: blur(0px);
            transform: translate(0, 0);
          }
          10% {
            opacity: 0.8;
            filter: blur(1px);
            transform: translate(-2px, 0);
          }
          20% {
            opacity: 0.6;
            filter: blur(2px);
            transform: translate(2px, 0);
          }
          30% {
            opacity: 0.9;
            filter: blur(0.5px);
            transform: translate(-1px, 0);
          }
          40% {
            opacity: 0.7;
            filter: blur(1.5px);
            transform: translate(1px, 0);
          }
          50% {
            opacity: 0.95;
            filter: blur(0.3px);
            transform: translate(0, 0);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
            transform: translate(0, 0);
          }
        }
        
        @keyframes chromatic {
          0%, 100% {
            text-shadow: 0 0 0 transparent;
          }
          25% {
            text-shadow: 
              -2px 0 0 rgba(255, 0, 0, 0.7),
              2px 0 0 rgba(0, 255, 255, 0.7);
          }
          50% {
            text-shadow: 
              -3px 0 0 rgba(255, 0, 0, 0.9),
              3px 0 0 rgba(0, 255, 255, 0.9);
          }
          75% {
            text-shadow: 
              -1px 0 0 rgba(255, 0, 0, 0.5),
              1px 0 0 rgba(0, 255, 255, 0.5);
          }
        }
        
        .holographic-flicker-wrapper {
          animation: 
            holographicFlicker 1.5s ease-in-out,
            chromatic 1.5s ease-in-out;
          animation-fill-mode: both;
        }
      `}</style>
      {children}
    </div>
  );
};



// Border Flicker Component
const BorderFlicker = ({ children }: { children: React.ReactNode }) => {
  const [flickers, setFlickers] = React.useState<Array<{ id: number; top: string; left: string; width: string; height: string }>>([]);

  React.useEffect(() => {
    const triggerFlicker = () => {
      const segments = Math.floor(Math.random() * 3) + 1; // 1-3 segments
      const newFlickers = Array.from({ length: segments }, (_, i) => ({
        id: Date.now() + i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 20 + 10}px`,
        height: '2px',
      }));

      setFlickers(newFlickers);

      setTimeout(() => setFlickers([]), 300);
    };

    // Random interval between 5-7 seconds
    const scheduleNext = () => {
      const delay = Math.random() * 2000 + 5000; // 5000-7000ms
      return setTimeout(() => {
        triggerFlicker();
        scheduleNext();
      }, delay);
    };

    const timer = scheduleNext();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {children}
      {flickers.map(flicker => (
        <div
          key={flicker.id}
          className="border-flicker-segment"
          style={{
            top: flicker.top,
            left: flicker.left,
            width: flicker.width,
            height: flicker.height,
          }}
        />
      ))}
    </div>
  );
};


const LandingHeader = () => {
  return (
    <HeaderContainer>
      <motion.div
        className="scanlines"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>
      <div className="container mx-auto px-4 relative z-20">
        {/* HUD Elements */}

        <div className="flex flex-wrap lg:flex-nowrap items-start gap-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start ml-4"
          >
            {/* Mission Alert Status */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
              className="inline-flex items-center gap-3 mb-8 self-start"
            >
              <div className="w-2 h-2 rounded-full bg-sky-digital animate-pulse"></div>
              <span className="font-tactical text-alert-crimson tracking-widest text-sm font-bold">
                ALERT STATUS: <TypewriterText text="ACTIVE" className="underline" delay={1} />
              </span>
            </motion.div>

            {/* Textbox and Buttons Container */}
            <div className="flex flex-col items-center w-full max-w-2xl">
              {/* Content Box with Border */}
              {/* Content Box with Border */}
              <SectionCard className="mb-8 w-full">
                <h1 className="text-5xl md:text-6xl font-black font-heading mb-8 text-ghost-white text-center">
                  <span className="hidden md:block text-3xl md:text-4xl font-mono text-ghost-white mb-4 tracking-wide">
                    <TypewriterText text="Amrita InCTF 2026" delay={0.5} />
                  </span>
                  <GlitchText text="OPERATION VAJRA" className="text-4xl md:text-5xl text-sky-digital" />
                </h1>

                <div className="text-lg md:text-xl text-sky-digital font-mono leading-relaxed space-y-6">
                  <p>
                    <span className="text-sky-digital">&gt;</span>  Operation VAJRA is a high-stakes cyber defence    simulation designed to identify, train, and elite India's next generation of security specialists. Built on the principles of national resilience, this mission tests technical proficiency under simulated high-pressure environments.
                  </p>
                  <p className="mt-6">
                    <span className="text-sky-digital">&gt;</span>  A multi-month cybersecurity Capture The Flag contest conducted by Amrita Vishwa Vidyapeetham and team bi0s.
                  </p>
                </div>
              </SectionCard>

              <div className="flex flex-col md:flex-row gap-4 justify-center w-full px-8">
                <Link href="/comingsoon" className="plain-link md:flex-1">
                  <motion.button
                    initial={{ opacity: 0, y: 20, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                    animate={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                    transition={{ delay: 2, type: "spring" }}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono tracking-wide"
                  >
                    [ Enter Mission Control ]
                  </motion.button>
                </Link>

                <Link href="/comingsoon" className="plain-link md:flex-1">
                  <motion.button
                    initial={{ opacity: 0, y: 20, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                    animate={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                    transition={{ delay: 2.2, type: "spring" }}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono tracking-wide"
                  >
                    [ View Mission Brief ]
                  </motion.button>
                </Link>
              </div>
            </div>



          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 mt-0 lg:mt-0 lg:-ml-16 relative flex justify-center items-center"
          >
            {/* Rotating HUD Rings */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-sky-digital/20 rounded-full animate-spin-slow pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-alert-crimson/20 rounded-full animate-reverse-spin pointer-events-none"></div>

            {/* Satellite Laser Image */}
            <HolographicFlicker delay={0.5}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="relative z-10 floating md:static absolute inset-0 md:inset-auto flex justify-center items-center pointer-events-none md:pointer-events-auto -mt-20 lg:-mt-32"
              >
                <img
                  src="/inctf/assets/design/Homepage/satellite_laser.webp"
                  alt="InCTF Satellite"
                  className="w-[80%] md:w-[650px] lg:w-[800px] h-auto object-contain md:filter-none filter blur-sm opacity-20 md:opacity-100 scale-150 md:scale-100"
                  draggable="false"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(56, 189, 248, 0.4))'
                  }}
                />
              </motion.div>
            </HolographicFlicker>
          </motion.div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default LandingHeader;
