import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { X } from 'lucide-react';

interface RegistrationEndingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationEndingPopup: React.FC<RegistrationEndingPopupProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && mounted) {
      const tl = gsap.timeline();

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });

      tl.fromTo(modalRef.current,
        { scaleY: 0, scaleX: 0.05, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.3, ease: 'power2.inOut' }
      )
        .to(modalRef.current, {
          scaleX: 1,
          duration: 0.3,
          ease: 'back.out(1.2)'
        });

      if (progressBarRef.current) {
        gsap.fromTo(progressBarRef.current,
          { width: '100%' },
          { width: '0%', duration: 25, ease: 'none', delay: 0.6 }
        );
      }

      const timer = setTimeout(() => {
        handleClose();
      }, 25600);

      return () => {
        clearTimeout(timer);
        tl.kill();
      };
    }
  }, [isOpen, mounted]);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(modalRef.current, { scale: 0.85, opacity: 0, y: 30, duration: 0.3, ease: 'power2.in' })
      .to(overlayRef.current, { opacity: 0, duration: 0.3 }, '<');
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#020610]/90 opacity-0"
        onClick={handleClose}
      />

      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-[500px] opacity-0"
      >
        <div
          className="relative"
          style={{
            border: '3px solid #FF0000',
            boxShadow:
              '0 0 18px rgba(244,63,94,0.35), 0 0 60px rgba(244,63,94,0.08), inset 0 0 18px rgba(244,63,94,0.08)',
            background: 'transparent',
          }}
        >
          <div
            className="relative overflow-y-auto overflow-x-hidden p-5 pt-8 md:p-8 md:pt-10 max-h-[75svh] scrollbar-thin scrollbar-thumb-red-500/30 scrollbar-track-transparent"
            style={{
              margin: '4px',
              border: '1px solid rgba(255,0,0,0.25)',
              background: '#060a16',
            }}
          >
            {/* Timer bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px]">
              <div
                ref={progressBarRef}
                className="h-full"
                style={{ background: '#FF0000', boxShadow: '0 0 10px rgba(255,0,0,0.7)' }}
              />
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 p-2 rounded-md text-red-500 border border-red-500/60 bg-red-500/10 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.9)] hover:scale-110 transition-all duration-200"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center mt-6">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#e2e8f0] mb-2">
                Registration Ends Soon!
              </h2>

              <p className="font-mono text-[#94a3b8] text-sm md:text-base mb-6 max-w-sm">
                Last chance to join the CTF challenge.
              </p>

              <div className="flex items-center gap-3 font-mono text-[#FF0000] text-base md:text-lg mb-6"
                style={{ textShadow: '0 0 10px rgba(255,0,0,0.3)' }}
              >
                <span className="text-2xl">📅</span>
                <span className="font-bold">Qualifiers: 20th–21st June</span>
              </div>

              <a
                href="https://register.inctf.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-heading text-base md:text-lg font-semibold text-white bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 px-8 py-3 rounded-sm hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] hover:border-white transition-all duration-200"
              >
                Sign Up Now 🚀
              </a>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-0 left-0">
              <div className="absolute top-0 left-0 w-8 h-[4px] bg-[#FF0000]" style={{ boxShadow: '0 0 8px rgba(255,0,0,0.6)' }} />
              <div className="absolute top-0 left-0 h-8 w-[4px] bg-[#FF0000]" style={{ boxShadow: '0 0 8px rgba(255,0,0,0.6)' }} />
            </div>
            <div className="absolute top-0 right-0">
              <div className="absolute top-0 right-0 w-8 h-[4px] bg-[#FF0000]" style={{ boxShadow: '0 0 8px rgba(255,0,0,0.6)' }} />
              <div className="absolute top-0 right-0 h-8 w-[4px] bg-[#FF0000]" style={{ boxShadow: '0 0 8px rgba(255,0,0,0.6)' }} />
            </div>
            <div className="absolute bottom-0 left-0">
              <div className="absolute bottom-0 left-0 w-8 h-[4px] bg-[#FF0000]" style={{ boxShadow: '0 0 8px rgba(255,0,0,0.6)' }} />
              <div className="absolute bottom-0 left-0 h-8 w-[4px] bg-[#FF0000]" style={{ boxShadow: '0 0 8px rgba(255,0,0,0.6)' }} />
            </div>
            <div className="absolute bottom-0 right-0">
              <div className="absolute bottom-0 right-0 w-8 h-[4px] bg-[#FF0000]" style={{ boxShadow: '0 0 8px rgba(255,0,0,0.6)' }} />
              <div className="absolute bottom-0 right-0 h-8 w-[4px] bg-[#FF0000]" style={{ boxShadow: '0 0 8px rgba(255,0,0,0.6)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default RegistrationEndingPopup;
