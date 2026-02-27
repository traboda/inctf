import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Facebook, Linkedin } from 'lucide-react';
import TypewriterText from '../shared/TypewriterText';

interface EarlyBirdPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EarlyBirdPopup: React.FC<EarlyBirdPopupProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay Background */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative z-10 w-full max-w-2xl bg-slate-900/95 border border-sky-400/30 p-8 md:p-10 overflow-hidden"
            style={{ boxShadow: '0 0 30px rgba(56, 189, 248, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.5)' }}
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {/* Top Border Glow / Timer Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-600"
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 10, ease: 'linear' }}
              />
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-rose-500 hover:rotate-90 transition-all duration-200 z-10"
            >
              <X size={24} />
            </button>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="mb-4 text-sky-400 opacity-70 font-mono text-sm tracking-widest">
                [ SECURE CHANNEL OPENED ]
              </div>

              <h2 className="font-heading text-white text-2xl md:text-3xl mb-6 tracking-widest uppercase">
                Hello, <span className="text-sky-400">Crew Member.</span>
              </h2>

              <div className="font-mono text-white/80 space-y-4 mb-6 leading-relaxed text-sm md:text-base max-w-lg">
                <p>
                  You are among the first to show interest in this mission.
                  As an early respondent to Amrita InCTF 2026 — Operation VAJRA, you are granted exclusive access to:
                </p>

                <div className="text-rose-500 font-bold text-lg md:text-xl my-8 mx-auto w-full px-4 animate-[pulse_3s_ease-in-out_infinite]" style={{ textShadow: '0 0 10px rgba(244, 63, 94, 0.4)' }}>
                  First Wave Early Bird Enrollment <br className="hidden sm:block" /> — 100% Discount
                </div>

                <p>
                  For a limited window, your registration has been unlocked at ₹0.
                  To activate your access, check our official social channels and retrieve the Early Bird code.
                </p>
              </div>

              <div className="flex justify-center gap-6 my-8">
                <a
                  href="https://www.instagram.com/inctf.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-4 border border-white/10 rounded-full bg-white/5 hover:text-sky-400 hover:border-sky-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                >
                  <Instagram size={32} />
                </a>
                <a
                  href="https://linkedin.com/company/inctf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-4 border border-white/10 rounded-full bg-white/5 hover:text-sky-400 hover:border-sky-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="https://facebook.com/InCTF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-4 border border-white/10 rounded-full bg-white/5 hover:text-sky-400 hover:border-sky-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                >
                  <Facebook size={32} />
                </a>
              </div>

              <div className="text-sky-400 font-mono text-sm inline-block">
                <TypewriterText text="Follow us while you're there for mission updates and announcements." delay={0.5} />

              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400/50"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400/50"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400/50"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400/50"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EarlyBirdPopup;
