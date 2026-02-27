import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Facebook, Linkedin } from 'lucide-react';
import TypewriterText from '../shared/TypewriterText';

interface EarlyBirdPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

/* Small 4-point sparkle */
const Sparkle = ({ top, left, delay, size = 6 }: { top: string; left: string; delay: number; size?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top, left }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.9, 0], scale: [0, 1, 0] }}
    transition={{ duration: 2.5, delay, repeat: Infinity, repeatDelay: 4 }}
  >
    <svg width={size * 2} height={size * 2} viewBox="0 0 10 10">
      <path d="M5 0 L5.5 4 L10 5 L5.5 6 L5 10 L4.5 6 L0 5 L4.5 4 Z" fill="white" opacity="0.7" />
    </svg>
  </motion.div>
);

const EarlyBirdPopup: React.FC<EarlyBirdPopupProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay - dark to match the deep space background */}
          <motion.div
            className="absolute inset-0 bg-[#020610]/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal wrapper */}
          <motion.div
            className="relative z-10 w-full max-w-[660px]"
            initial={{ scale: 0.85, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
          >
            {/*
              Outer thick cyan border — the prominent HUD frame.
              Background is transparent so the homepage dark space bg shows through.
            */}
            <div
              className="relative"
              style={{
                border: '3px solid #22d3ee',
                boxShadow:
                  '0 0 18px rgba(0,255,255,0.35), 0 0 60px rgba(0,255,255,0.08), inset 0 0 18px rgba(0,255,255,0.08)',
                background: 'transparent',
              }}
            >
              {/* Thin inner border with tiny gap */}
              <div
                className="relative overflow-hidden"
                style={{
                  margin: '4px',
                  border: '1px solid rgba(34,211,238,0.25)',
                  background: '#060a16',
                  padding: '40px 28px 36px',
                }}
              >
                {/* Sparkles scattered like the image */}
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

                {/* Timer bar at top edge */}
                <div className="absolute top-0 left-0 right-0 h-[2px]">
                  <motion.div
                    className="h-full"
                    style={{ background: '#22d3ee', boxShadow: '0 0 10px rgba(0,255,255,0.7)' }}
                    initial={{ width: '100%' }}
                    animate={{ width: '0%' }}
                    transition={{ duration: 10, ease: 'linear' }}
                  />
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-cyan-400/40 hover:text-red-500 hover:rotate-90 transition-all duration-200 z-20"
                >
                  <X size={18} />
                </button>

                {/* ── Content (matches image text layout exactly) ── */}
                <div className="relative z-10 text-center flex flex-col items-center">

                  {/* > Hello, Crew Member. */}
                  <h2 className="font-mono text-xl md:text-2xl mb-5 leading-tight">
                    <span className="text-[#e2e8f0] font-bold">&gt; Hello,</span>
                    <span className="text-[#22b8cf]">Crew Member.</span>
                  </h2>

                  {/* Intro lines */}
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

                  {/* Discount block */}
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

                  {/* Detail bullets */}
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
                    <a
                      href="https://www.instagram.com/inctf.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 p-3 border border-cyan-400/20 bg-cyan-400/5 hover:text-cyan-400 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="https://linkedin.com/company/inctf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 p-3 border border-cyan-400/20 bg-cyan-400/5 hover:text-cyan-400 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://facebook.com/InCTF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 p-3 border border-cyan-400/20 bg-cyan-400/5 hover:text-cyan-400 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                    >
                      <Facebook size={24} />
                    </a>
                  </div>

                  {/* Follow text */}
                  <p className="font-mono text-[#5e8ca0] text-sm mb-3 max-w-md">
                    <span className="text-[#5e8ca0]">&gt;</span>{' '}
                    <TypewriterText text="Follow us while you're there for mission updates and announcements." delay={0.5} />
                  </p>

                  {/* Time-bound warning */}
                  <p
                    className="font-mono text-[#dc2626] font-bold text-sm md:text-base mt-1"
                    style={{ textShadow: '0 0 8px rgba(220,38,38,0.25)' }}
                  >
                    This window is time-bound ⚠️
                  </p>
                </div>

                {/* ── HUD L-shaped corner brackets (matching image) ── */}
                {/* Top-left */}
                <div className="absolute top-0 left-0">
                  <div className="absolute top-0 left-0 w-8 h-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
                  <div className="absolute top-0 left-0 h-8 w-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
                </div>
                {/* Top-right */}
                <div className="absolute top-0 right-0">
                  <div className="absolute top-0 right-0 w-8 h-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
                  <div className="absolute top-0 right-0 h-8 w-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
                </div>
                {/* Bottom-left */}
                <div className="absolute bottom-0 left-0">
                  <div className="absolute bottom-0 left-0 w-8 h-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
                  <div className="absolute bottom-0 left-0 h-8 w-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
                </div>
                {/* Bottom-right */}
                <div className="absolute bottom-0 right-0">
                  <div className="absolute bottom-0 right-0 w-8 h-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
                  <div className="absolute bottom-0 right-0 h-8 w-[4px] bg-[#22d3ee]" style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EarlyBirdPopup;
