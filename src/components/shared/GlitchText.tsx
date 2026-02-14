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

        iteration += 1 / 3; // Slow down the reveal
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
        @keyframes glitch {
          2%, 64% { transform: translate(2px, 0) skew(0deg); }
          4%, 60% { transform: translate(-2px, 0) skew(0deg); }
          62% { transform: translate(0, 0) skew(5deg); }
        }
        @keyframes glitchTop {
          2%, 64% { transform: translate(2px, -2px); }
          4%, 60% { transform: translate(-2px, 2px); }
          62% { transform: translate(13px, -1px) skew(-13deg); }
        }
        @keyframes glitchBottom {
          2%, 64% { transform: translate(-2px, 0); }
          4%, 60% { transform: translate(-2px, 0); }
          62% { transform: translate(-22px, 5px) skew(21deg); }
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
          color: inherit; /* Inherit color to allow customization */
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

      {/* Invisible spacer to reserve layout space */}
      <span className="opacity-0 pointer-events-none select-none" aria-hidden="true">
        {text}
      </span>

      {/* Absolute overlay for the actual effect */}
      <span className="absolute top-0 left-0 whitespace-nowrap">
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
      </span>

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


