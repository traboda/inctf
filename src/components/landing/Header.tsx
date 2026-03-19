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

import TypewriterText from '../shared/TypewriterText';
import GlitchText from '../shared/GlitchText';
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
              className="w-full lg:w-1/2 flex flex-col items-start ml-4 mt-[-10px] sm:mt-[-20px] lg:mt-[-50px]"
            >
              {/* Mission Alert Status */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
                className="inline-flex items-center gap-3 mb-1 self-start"
              >
                <div className="w-2 h-2 rounded-full bg-sky-digital animate-pulse"></div>
                <span className="font-tactical text-alert-crimson tracking-widest text-sm font-bold">
                  ALERT STATUS: <TypewriterText text="ACTIVE" className="underline" delay={1} />
                </span>
              </motion.div>

              {/* Textbox and Buttons Container */}
              <div className="flex flex-col items-center w-full max-w-4xl">
                {/* Content Box with Border */}

                <SectionCard className="mb-0 w-full !p-2.5 md:!p-3.5" paddingClassName="p-2 md:p-2.5">
                  <h1 className="text-[26px] min-[400px]:text-3xl sm:text-5xl md:text-6xl font-black font-heading mb-0 text-ghost-white text-center break-words">
                    <span className="block text-[20px] min-[400px]:text-2xl sm:text-3xl md:text-4xl font-mono text-ghost-white mb-0 tracking-wide">
                      <TypewriterText text="Amrita InCTF 2026" delay={0.5} />
                    </span>
                    <GlitchText text="OPERATION VAJRA" strikethrough={true} className="text-[26px] min-[400px]:text-3xl sm:text-4xl md:text-5xl text-white font-black" />
                  </h1>

                  {/* 3-Stat Strip */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-2 border-y border-sky-digital/20 w-full mt-2 font-mono text-xs sm:text-sm text-cyan-400 font-bold uppercase tracking-wider text-center">
                    <div className="flex items-center gap-1"><Banknote size={14} /> ₹5L Prize Pool</div>
                    <div className="hidden sm:block text-sky-digital/40">|</div>
                    <div className="flex items-center gap-1"><Users size={14} /> Open to UG Students</div>
                    <div className="hidden sm:block text-sky-digital/40">|</div>
                    <div className="flex items-center gap-1"><ShieldCheck size={14} /> Teams of 1-5</div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="my-1 text-center w-full border-b border-sky-digital/10 pb-2">
                    <div className="text-[10px] sm:text-xs font-mono text-alert-crimson font-bold animate-pulse uppercase tracking-widest mb-1.5">[ REGISTRATION CLOSES IN ]</div>
                    <div className="flex justify-center gap-2 sm:gap-3 font-mono">
                      {Object.entries(timeLeft).map(([label, value]) => (
                        <div key={label} className="flex flex-col items-center countdown-box">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-alert-crimson bg-alert-crimson/5 text-alert-crimson font-bold text-base sm:text-xl rounded-lg shadow-[0_0_10px_rgba(244,63,94,0.15)] relative" suppressHydrationWarning>
                            {String(value).padStart(2, '0')}
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-sky-digital/50 mt-1 uppercase tracking-wider font-semibold">{label}</div>
                        </div>
                      ))}
                    </div>

                    <motion.div
                      key="register-btn-wrap"
                      initial={{ scale: 0.85, opacity: 0, y: 10 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                      className="mt-2.5 flex justify-center"
                    >
                      <a
                        href="https://register.inctf.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-950/40 hover:bg-red-600 text-alert-crimson hover:text-white font-mono text-sm sm:text-base font-bold tracking-wider px-9 py-3 sm:px-14 sm:py-3.5 rounded-md border-2 border-alert-crimson hover:border-red-600 shadow-[0_0_12px_rgba(244,63,94,0.3)] hover:shadow-[0_0_20px_rgba(244,63,94,0.6)] transition-all duration-300 flex items-center justify-center uppercase mt-1 register-btn opacity-70 hover:opacity-100"
                        onClick={(event) =>
                          trackRegisterClick(event, {
                            ctaLocation: 'countdown',
                            url: 'https://register.inctf.in',
                          })
                        }
                      >
                        REGISTER NOW
                      </a>
                    </motion.div>
                  </div>

                  {/* Value Prop Cards Grid - Replacing Description */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-1 w-full text-left">
                    {[
                      { icon: <Banknote size={18} />, title: "₹5 Lakh Prize Pool", desc: "Top teams win cash in final phase" },
                      { icon: <Users size={18} />, title: "Internship Oppurtunities", desc: "Skills-first hiring exposure to tech firms" },
                      { icon: <ShieldCheck size={18} />, title: "Real-World Training", desc: "Hands-on scenarios built by practitioners" },
                      { icon: <Award size={18} />, title: "Certified & Recognized", desc: "Spotlight for finalists & National Cert for all" }
                    ].map((prop, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex flex-col min-[380px]:flex-row items-start gap-1.5 min-[380px]:gap-3 bg-slate-900/40 border border-sky-digital/10 p-2 sm:p-3 rounded group hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm"
                      >
                        <div className="text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                          {prop.icon}
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-white text-sm mb-0.5 tracking-wide">
                            {prop.title}
                          </h3>
                          <p className="font-mono text-xs text-sky-digital/70 leading-relaxed">
                            {prop.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Card Sponsors Footer */}
                  <div className="mt-2 pt-2 border-t border-sky-digital/10 flex flex-col items-center justify-center gap-1.5">
                    <div className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest text-center">Powered by TCS & Co-Powered by NIQ</div>
                    <div className="flex items-center gap-5">
                        <a
                          href="https://www.tcs.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit TCS"
                          className="transition-opacity duration-300 hover:opacity-100"
                        >
                          <img src="/inctf/assets/images/current_sponsors/Tata_Consultancy_Services_old_logo.svg.png" alt="TCS Logo" className="h-10 sm:h-14 w-auto object-contain brightness-0 invert opacity-90" />
                        </a>
                      <div className="w-[2px] h-8 bg-white/20"></div>
                        <a
                          href="https://nielseniq.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit NIQ"
                          className="transition-opacity duration-300 hover:opacity-100"
                        >
                          <img src="/inctf/assets/images/current_sponsors/NIQ-logo-bright-blue-web.png" alt="NIQ Logo" className="h-7 sm:h-10 w-auto object-contain brightness-0 invert opacity-90" />
                        </a>
                    </div>
                  </div>
                </SectionCard>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 justify-center w-full px-4 sm:px-8 mt-1">
                  <Link href="/mission-control" className="plain-link w-full">
                    <motion.button
                      initial={{ opacity: 0, y: 20, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      animate={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      transition={{ delay: 2, type: "spring" }}
                      whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full h-full min-h-[56px] px-2 sm:px-6 py-3 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono tracking-wide whitespace-nowrap flex items-center justify-center text-center text-sm md:text-base"
                    >
                      [ Enter Mission Control ]
                    </motion.button>
                  </Link>

                  <Link href="/mission-brief" className="plain-link w-full">
                    <motion.button
                      initial={{ opacity: 0, y: 20, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      animate={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      transition={{ delay: 2.2, type: "spring" }}
                      whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full h-full min-h-[56px] px-2 sm:px-6 py-3 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono tracking-wide whitespace-nowrap flex items-center justify-center text-center text-sm md:text-base"
                    >
                      [ View Mission Brief ]
                    </motion.button>
                  </Link>
                  <div className="w-full md:col-span-2">
                    <motion.button
                      onClick={() => {
                        gsap.to(window, { duration: 0.8, scrollTo: { y: "#mission-grid", offsetY: 320 }, ease: "power2.inOut" });
                      }}
                      initial={{ opacity: 0, y: 20, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      animate={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                      transition={{ delay: 2.3, type: "spring" }}
                      whileHover={{ scale: 1.02, backgroundColor: "#dc2626", color: "#ffffff", borderColor: "#dc2626", boxShadow: "0 0 30px rgba(244,63,94,0.5), 4px 4px 0 rgba(255,255,255,0.7)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-full min-h-[52px] px-6 py-3 bg-gradient-to-br from-cyan-950/80 to-sky-900/80 border-2 border-cyan-400/50 text-cyan-50 font-mono tracking-wider flex items-center justify-center text-center relative overflow-hidden font-bold cursor-pointer"
                    >
                      <span className="relative z-10">[ Know More ]</span>
                      <div className="absolute inset-0 bg-sky-400/10 blur-xl animate-pulse"></div>
                    </motion.button>
                  </div>
                </div>
              </div>



            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:flex w-full lg:w-[42%] mt-0 lg:mt-0 lg:translate-x-12 relative justify-center items-center"
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
                    className="w-[80%] md:w-[650px] lg:w-[800px] h-auto object-contain md:filter-none filter blur-sm opacity-20 md:opacity-100 scale-150 md:scale-100"
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
              className="relative md:absolute md:bottom-2 w-full md:w-auto left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-30 mt-8 md:mt-0"
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
