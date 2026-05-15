import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const GlitchText = ({ text, className = "", delay = 0, strikethrough = false, triggerOnView = false }: { text: string, className?: string, delay?: number, strikethrough?: boolean, triggerOnView?: boolean }) => {
  const [displayText, setDisplayText] = React.useState("");
  const [started, setStarted] = React.useState(false);
  const [typingComplete, setTypingComplete] = React.useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  React.useEffect(() => {
    if (triggerOnView && !isInView) return;

    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [delay, triggerOnView, isInView]);

  React.useEffect(() => {
    if (!started) return;

    if (triggerOnView) {
      // Scrambling Decoding Animation
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(text.split("").map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return characters[Math.floor(Math.random() * characters.length)];
        }).join(""));

        if (iteration >= text.length) {
          clearInterval(interval);
          setTypingComplete(true);
          setDisplayText(text); // Ensure final text is correct
        }

        iteration += 1 / 1.5; // Faster reveal
      }, 30);

      return () => clearInterval(interval);
    } else {
      // Standard Typewriter Animation
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.substring(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setTypingComplete(true);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [started, text, triggerOnView]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <style jsx>{`
        @keyframes glitchSlow {
          0%, 90%, 100% { transform: translate(0.04em, 0); }
          92% { transform: translate(0.08em, -0.01em); }
          94% { transform: translate(0.02em, 0.01em); }
        }
        @keyframes glitchSlowBottom {
          0%, 90%, 100% { transform: translate(-0.04em, 0); }
          92% { transform: translate(-0.08em, 0.01em); }
          94% { transform: translate(-0.02em, -0.01em); }
        }
        
        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }
        
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
          opacity: 1;
        }
        
        .glitch-wrapper::before {
          color: #ff0000;
          animation: glitchSlow 8s ease-in-out infinite;
        }
        
        .glitch-wrapper::after {
          color: #00ffff;
          animation: glitchSlowBottom 8s ease-in-out infinite;
        }
        
        .glitch-main {
          position: relative;
          z-index: 1;
          color: inherit;
          /* No shadow, no blur - pure clarity */
        }
      `}</style>

      {!typingComplete ? (
        <span className="glitch-main">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      ) : (
        <span className="glitch-wrapper" data-text={text}>
          <span className="glitch-main">{text}</span>
        </span>
      )}

      {/* Strikethrough Lines */}
      {strikethrough && (
        <>
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/80 z-30 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black z-30 pointer-events-none"></div>
        </>
      )}
    </span>
  );
};

export default GlitchText;


