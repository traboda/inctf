'use client';
import React from 'react';
import styled from '@emotion/styled';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}
import { AlertTriangle, Radio, Terminal, ChevronRight, Crosshair, Banknote, Users, ShieldCheck, Award, Zap } from 'lucide-react';

import animations from '../../animation';
import { trackRegisterClick } from '../../utils/trackRegisterClick';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

import GlitchText from '../shared/GlitchText';
import TypewriterText from '../shared/TypewriterText';
import SectionCard from './SectionCard';
import CurrentSponsors from './CurrentSponsors';
// import EarlyBirdPopup from './EarlyBirdPopup';

const HeaderContainer = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  padding-top: clamp(20px, 3vh, 50px);
  
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
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [shouldAutoOpen, setShouldAutoOpen] = React.useState(true);
  const hasAutoOpenedRef = React.useRef(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // Sticky CTA trigger
  const heroRef = React.useRef(null);
  const isInView = useInView(heroRef, { amount: 0.1 });
  const showSticky = !isInView;

  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date('2026-04-30T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      const boxes = document.querySelectorAll('.countdown-box');
      const btn = document.querySelectorAll('.register-btn');

      if (boxes.length) {
        const tl = gsap.timeline({ delay: 0.1 });
        tl.from(boxes,
          { scale: 0.85, opacity: 0, duration: 0.4, ease: "back.out(1.2)", stagger: 0.08 }
        );
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isMounted]);

  return (
    <>
      <HeaderContainer suppressHydrationWarning>
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
              className="w-full lg:w-3/5 flex flex-col items-start mt-12 lg:-mt-12 xl:-mt-16 ml-4 md:ml-0"
            >
              {/* Mission Alert Status */}
              <div className="flex flex-wrap items-center gap-4 mb-2 self-start">
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
                  className="inline-flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-sky-digital animate-pulse"></div>
                  <span className="font-tactical text-alert-crimson tracking-widest text-sm font-bold">
                    ALERT STATUS: <TypewriterText text="ACTIVE" className="underline" delay={1} />
                  </span>
                </motion.div>
              </div>

              {/* Textbox and Buttons Container */}
              <div className="flex flex-col w-full max-w-4xl mt-12 md:mt-20 sm:mt-8">
                {/* Content Box with Border */}

                <SectionCard className="mb-0 w-full !p-5 md:!py-10 md:!px-8" paddingClassName="p-0">
                  <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading mb-4 text-ghost-white text-left break-words leading-tight">
                    <span className="block mb-2">
                      <GlitchText
                        text="India's Cybersecurity Championship"
                        triggerOnView={true}
                        className="text-ghost-white"
                      />
                    </span>

                  </h1>

                  <div className="mt-6 text-left w-full">
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-4">
                      InCTF is a multi-month, beginner-friendly ethical hacking programme with training, Capture The Flag contests, and a national-level final championship.
                    </p>
                    <p className="text-sm sm:text-base text-slate-400 font-mono border-l-2 border-sky-500/50 pl-4">
                      Learn from Team bi0s, build real skills, win prizes, and get recognized through InCTF's national cybersecurity platform.
                    </p>
                  </div>
                </SectionCard>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 justify-center w-full mt-6 md:mt-8">
                  <Link href="https://register.inctf.in" target="_blank" rel="noopener noreferrer" className="plain-link w-full">
                    <motion.button
                      initial={{ opacity: 0, y: 20, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      animate={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      transition={{ delay: 2, type: "spring" }}
                      whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full h-full min-h-[56px] px-2 sm:px-6 py-3 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono tracking-wide whitespace-nowrap flex items-center justify-center text-center text-sm md:text-base cursor-pointer"
                    >
                      [ Register Now ]
                    </motion.button>
                  </Link>

                  <div className="w-full">
                    <motion.button
                      onClick={() => {
                        gsap.to(window, { duration: 0.8, scrollTo: { y: "#how-it-works", offsetY: 100 }, ease: "power2.inOut" });
                      }}
                      initial={{ opacity: 0, y: 20, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      animate={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      transition={{ delay: 2.2, type: "spring" }}
                      whileHover={{ scale: 1.03, backgroundColor: "#083344", boxShadow: "0 0 30px rgba(56,189,248,0.5), 4px 4px 0 rgba(255,255,255,0.7)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full h-full min-h-[56px] px-2 sm:px-6 py-3 bg-slate-900/80 border-2 border-cyan-500/50 text-cyan-400 font-mono tracking-wide whitespace-nowrap flex items-center justify-center text-center text-sm md:text-base cursor-pointer"
                    >
                      [ How InCTF Works ]
                    </motion.button>
                  </div>
                </div>

                {/* Registration Alert Status */}
                <div className="mt-6 w-full flex justify-center md:justify-start">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                    className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/40 px-4 py-2 rounded-sm backdrop-blur-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-alert-crimson animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.7)]"></div>
                    <span className="text-xs sm:text-sm font-mono text-red-400 tracking-widest font-black uppercase">
                      REGISTRATIONS ARE ONGOING
                    </span>
                  </motion.div>
                </div>

                {/* Relocated Sponsors Row */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:flex w-full lg:w-[45%] mt-0 lg:mt-0 lg:translate-x-4 relative justify-center items-center"
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
                  className="relative z-10 floating md:static absolute inset-0 md:inset-auto flex justify-center items-center pointer-events-none md:pointer-events-auto mt-0"
                >
                  <img
                    src="/inctf/assets/design/Homepage/satellite_laser.webp"
                    alt="InCTF Satellite"
                    className="w-[68%] md:w-[550px] lg:w-[680px] h-auto object-contain md:filter-none filter blur-none opacity-40 md:opacity-90 scale-150 md:scale-100 mt-4 ml-24"
                    draggable="false"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(56, 189, 248, 0.4))'
                    }}
                  />
                </motion.div>
              </HolographicFlicker>

            </motion.div>
            {/* Scroll to Explore */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="relative md:absolute md:bottom-2 w-full md:w-auto left-0 md:left-1/2 md:-translate-x-1/2 flex md:hidden flex-col items-center gap-1 cursor-pointer z-30 mt-8 md:mt-0"
            >
              <div
                onClick={() => gsap.to(window, { duration: 0.8, scrollTo: { y: "#mission-grid", offsetY: 240 }, ease: "power2.inOut" })}
                className="flex flex-col items-center gap-1 cursor-pointer"
              >
                <span className="font-mono text-[9px] sm:text-[10px] text-cyan-400/50 uppercase tracking-widest animate-pulse">[ Scroll to Explore ]</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="text-cyan-400/80"
                >
                  <ChevronRight className="rotate-90 w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* Hero Quick Facts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 md:mt-24 pb-12 w-full max-w-4xl mx-auto relative z-20">
            {/* Fact 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-slate-900/40 border border-sky-500/20 p-5 md:p-6 rounded-lg backdrop-blur-sm"
            >
              <h4 className="text-cyan-400 font-mono font-bold text-sm md:text-base uppercase mb-2 tracking-wider flex items-center gap-2">
                <Users size={16} /> Who can participate?
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">College students and working professionals in India.</p>
            </motion.div>

            {/* Fact 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-slate-900/40 border border-sky-500/20 p-5 md:p-6 rounded-lg backdrop-blur-sm"
            >
              <h4 className="text-cyan-400 font-mono font-bold text-sm md:text-base uppercase mb-2 tracking-wider flex items-center gap-2">
                <Award size={16} /> Prizes & Recognition
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">Prizes, certificates, and post-contest training opportunities for top performers.</p>
            </motion.div>
          </div>
        </div>
      </HeaderContainer>


      {/* <EarlyBirdPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      /> */}
    </>
  );
};

export default LandingHeader;
