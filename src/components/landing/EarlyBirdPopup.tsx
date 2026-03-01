import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Instagram, Facebook, Linkedin } from 'lucide-react';
import TypewriterText from '../shared/TypewriterText';

interface EarlyBirdPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sparkle = ({ top, left, delay, size = 6 }: { top: string; left: string; delay: number; size?: number }) => {
  const sparkleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sparkleRef.current) {
      gsap.to(sparkleRef.current, {
        opacity: 0.9,
        scale: 1,
        duration: 1.25,
        delay,
        yoyo: true,
        repeat: -1,
        repeatDelay: 4,
        ease: 'power1.inOut',
      });
    }
  }, [delay]);

  return (
    <div
      ref={sparkleRef}
      className="absolute pointer-events-none"
      style={{ top, left, opacity: 0, transform: 'scale(0)' }}
    >
      <svg width={size * 2} height={size * 2} viewBox="0 0 10 10">
        <path d="M5 0 L5.5 4 L10 5 L5.5 6 L5 10 L4.5 6 L0 5 L4.5 4 Z" fill="white" opacity="0.7" />
      </svg>
    </div>
  );
};

const EarlyBirdPopup: React.FC<EarlyBirdPopupProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // 1. Give the homepage animations time to finish (wait 2.5s)
      const initDelay = 2.5;

      const tl = gsap.timeline();

      // Fade in overlay
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        delay: initDelay,
        ease: 'power2.out',
      });

      // Sci-fi HUD unfold animation
      // First expand vertically into a thin line, then snap open horizontally
      tl.fromTo(modalRef.current,
        { scaleY: 0, scaleX: 0.05, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.3, ease: 'power2.inOut' }
      )
        .to(modalRef.current, {
          scaleX: 1,
          duration: 0.3,
          ease: 'back.out(1.2)'
        });

      // Start the progress bar countdown
      if (progressBarRef.current) {
        gsap.fromTo(progressBarRef.current,
          { width: '100%' },
          { width: '0%', duration: 10, ease: 'none', delay: initDelay + 0.6 }
        );
      }

      // Auto-close timer
      const timer = setTimeout(() => {
        handleClose();
      }, (10000 + (initDelay * 1000) + 600));

      return () => {
        clearTimeout(timer);
        tl.kill();
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(modalRef.current, { scale: 0.85, opacity: 0, y: 30, duration: 0.3, ease: 'power2.in' })
      .to(overlayRef.current, { opacity: 0, duration: 0.3 }, '<');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#020610]/90 opacity-0"
        onClick={handleClose}
      />

      {/* Modal wrapper */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-[660px] opacity-0"
      >
        <div
          className="relative"
          style={{
            border: '3px solid #22d3ee',
            boxShadow:
              '0 0 18px rgba(0,255,255,0.35), 0 0 60px rgba(0,255,255,0.08), inset 0 0 18px rgba(0,255,255,0.08)',
            background: 'transparent',
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              margin: '4px',
              border: '1px solid rgba(34,211,238,0.25)',
              background: '#060a16',
              padding: '40px 28px 36px',
            }}
          >
            {/* Sparkles */}
            <Sparkle top="6%" left="10%" delay={0} size={5} />
            <Sparkle top="4%" left="88%" delay={0.7} size={6} />
            <Sparkle top="22%" left="93%" delay={1.4} size={5} />
            <Sparkle top="72%" left="6%" delay={1.9} size={5} />
            <Sparkle top="58%" left="91%" delay={0.4} size={6} />
            <Sparkle top="88%" left="12%" delay={1.1} size={5} />
            <Sparkle top="38%" left="4%" delay={1.7} size={4} />
            <Sparkle top="12%" left="52%" delay={2.3} size={4} />
            <Sparkle top="82%" left="90%" delay={2.8} size={5} />
            <Sparkle top="50%" left="7%" delay={0.9} size={5} />

            {/* Timer bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px]">
              <div
                ref={progressBarRef}
                className="h-full"
                style={{ background: '#22d3ee', boxShadow: '0 0 10px rgba(0,255,255,0.7)' }}
              />
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-cyan-400/40 hover:text-red-500 hover:rotate-90 transition-all duration-200 z-20"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center">
              <h2 className="font-mono text-xl md:text-2xl mb-5 leading-tight">
                <span className="text-[#e2e8f0] font-bold">&gt; Hello,</span>
                <span className="text-[#22b8cf]">Crew Member.</span>
              </h2>

              <p className="font-mono text-[#5e8ca0] text-sm md:text-[15px] leading-relaxed max-w-md">
                <span className="text-[#5e8ca0]">&gt;</span> You are among the first to show interest in this
                mission. As an early respondent to
              </p>
              <p className="font-mono text-[#e2e8f0] font-bold text-sm md:text-base mt-1">
                Amrita InCTF 2026 — Operation VAJRA,
              </p>
              <p className="font-mono text-[#5e8ca0] text-sm md:text-[15px] mb-6">
                you are granted exclusive access to:
              </p>

              <div className="my-3 mb-6">
                <p
                  className="font-mono text-[#22b8cf] font-bold text-base md:text-lg"
                  style={{ textShadow: '0 0 10px rgba(34,184,207,0.3)' }}
                >
                  First Wave Early Bird Enrollment —
                </p>
                <p
                  className="font-mono text-[#dc2626] font-black text-2xl md:text-3xl mt-1"
                  style={{ textShadow: '0 0 12px rgba(220,38,38,0.3)' }}
                >
                  100% Discount
                </p>
              </div>

              <div className="font-mono text-[#5e8ca0] text-sm md:text-[15px] leading-relaxed max-w-md space-y-4 mb-5">
                <p>
                  <span className="text-[#5e8ca0]">&gt;</span> For a limited window, your registration has been
                  unlocked at <span className="text-[#dc2626] font-bold">₹0</span>.
                </p>
                <p>
                  <span className="text-[#5e8ca0]">&gt;</span> To activate your access, check our official social
                  channels and retrieve the Early Bird code.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-5 my-5">
                <a href="https://www.instagram.com/inctf.in/" target="_blank" rel="noopener noreferrer" className="text-white/60 p-3 border border-cyan-400/20 bg-cyan-400/5 hover:text-cyan-400 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  <Instagram size={24} />
                </a>
                <a href="https://linkedin.com/company/inctf" target="_blank" rel="noopener noreferrer" className="text-white/60 p-3 border border-cyan-400/20 bg-cyan-400/5 hover:text-cyan-400 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  <Linkedin size={24} />
                </a>
                <a href="https://facebook.com/InCTF" target="_blank" rel="noopener noreferrer" className="text-white/60 p-3 border border-cyan-400/20 bg-cyan-400/5 hover:text-cyan-400 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  <Facebook size={24} />
                </a>
              </div>

              <p className="font-mono text-[#5e8ca0] text-sm mb-3 max-w-md">
                <span className="text-[#5e8ca0]">&gt;</span>{' '}
                <TypewriterText text="Follow us while you're there for mission updates and announcements." delay={0.5} />
              </p>

              <p
                className="font-mono text-[#dc2626] font-bold text-sm md:text-base mt-1"
                style={{ textShadow: '0 0 8px rgba(220,38,38,0.25)' }}
              >
                This window is time-bound ⚠️
              </p>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-0 left-0">
              <div className="absolute top-0 left-0 w-8 h-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
              <div className="absolute top-0 left-0 h-8 w-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
            </div>
            <div className="absolute top-0 right-0">
              <div className="absolute top-0 right-0 w-8 h-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
              <div className="absolute top-0 right-0 h-8 w-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
            </div>
            <div className="absolute bottom-0 left-0">
              <div className="absolute bottom-0 left-0 w-8 h-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
              <div className="absolute bottom-0 left-0 h-8 w-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
            </div>
            <div className="absolute bottom-0 right-0">
              <div className="absolute bottom-0 right-0 w-8 h-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
              <div className="absolute bottom-0 right-0 h-8 w-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyBirdPopup;
