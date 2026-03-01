'use client';
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const StarfieldBackground: React.FC = () => {
  const [documentHeight, setDocumentHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    // Update height when content changes
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);

  useGSAP(() => {
    if (!isClient || !starsRef.current || !sparklesRef.current || documentHeight === 0) return;


    const triggerEl = document.documentElement;

    // Animate stars 
    gsap.to(starsRef.current, {
      y: () => -(triggerEl.scrollHeight - window.innerHeight) * 0.25, // Lowered from 0.4
      ease: "none",
      scrollTrigger: {
        trigger: triggerEl,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        invalidateOnRefresh: true
      }
    });

    // Animate sparkles 
    gsap.to(sparklesRef.current, {
      y: () => -(triggerEl.scrollHeight - window.innerHeight) * 0.45, // Lowered from 0.8
      ease: "none",
      scrollTrigger: {
        trigger: triggerEl,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        invalidateOnRefresh: true
      }
    });
  }, { dependencies: [documentHeight, isClient], scope: containerRef });

  // Fallback pattern height logic to SSR default state 
  const patternHeight = isClient ? window.innerHeight : 1000;
  const repeatCount = isClient ? Math.ceil((documentHeight + patternHeight) / patternHeight) + 1 : 2;

  const StarPattern = ({ index }: { index: number }) => (
    <>
      {/* Stars - Row 1 (Top) */}
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 2}%`, left: '1%', width: '55px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 5}%`, left: '8%', width: '42px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 3}%`, left: '15%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 7}%`, left: '23%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 4}%`, left: '35%', width: '46px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 6}%`, left: '42%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 8}%`, left: '55%', width: '44px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 5}%`, left: '63%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 9}%`, left: '75%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 6}%`, left: '82%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 10}%`, left: '90%', width: '46px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 7}%`, left: '96%', width: '52px' }} />

      {/* Stars - Row 2 */}
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 15}%`, left: '4%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 18}%`, left: '12%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 16}%`, left: '20%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 19}%`, left: '30%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 17}%`, left: '38%', width: '46px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 20}%`, left: '50%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 18}%`, left: '58%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 16}%`, left: '68%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 19}%`, left: '77%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 17}%`, left: '85%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 20}%`, left: '93%', width: '54px' }} />

      {/* Stars - Row 3 */}
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 28}%`, left: '2%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 30}%`, left: '10%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 26}%`, left: '18%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 29}%`, left: '28%', width: '46px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 27}%`, left: '37%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 31}%`, left: '48%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 28}%`, left: '56%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 30}%`, left: '66%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 27}%`, left: '74%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 29}%`, left: '84%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 31}%`, left: '92%', width: '50px' }} />

      {/* Stars - Row 4 */}
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 40}%`, left: '5%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 42}%`, left: '13%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 38}%`, left: '22%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 41}%`, left: '32%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 39}%`, left: '42%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 43}%`, left: '52%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 40}%`, left: '60%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 38}%`, left: '70%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 41}%`, left: '80%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 42}%`, left: '88%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 39}%`, left: '95%', width: '48px' }} />

      {/* Stars - Row 5 */}
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 52}%`, left: '3%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 54}%`, left: '11%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 50}%`, left: '19%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 53}%`, left: '29%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 51}%`, left: '39%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 55}%`, left: '49%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 52}%`, left: '59%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 50}%`, left: '69%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 53}%`, left: '79%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 54}%`, left: '87%', width: '52px' }} />

      {/* Stars - Row 6 */}
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 64}%`, left: '6%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 66}%`, left: '14%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 62}%`, left: '24%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 65}%`, left: '34%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 63}%`, left: '44%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 67}%`, left: '54%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 64}%`, left: '64%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 66}%`, left: '73%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 63}%`, left: '83%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 65}%`, left: '91%', width: '56px' }} />

      {/* Stars - Row 7 */}
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 76}%`, left: '4%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 78}%`, left: '16%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 74}%`, left: '26%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 77}%`, left: '36%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 75}%`, left: '46%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 79}%`, left: '56%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 76}%`, left: '66%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 74}%`, left: '76%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 77}%`, left: '86%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 78}%`, left: '94%', width: '50px' }} />

      {/* Stars - Row 8 (Bottom) */}
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 88}%`, left: '7%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 90}%`, left: '17%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 86}%`, left: '27%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 89}%`, left: '38%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 87}%`, left: '48%', width: '50px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 91}%`, left: '58%', width: '52px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 88}%`, left: '68%', width: '56px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 90}%`, left: '78%', width: '48px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 87}%`, left: '88%', width: '54px' }} />
      <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: `${index * 100 + 89}%`, left: '96%', width: '50px' }} />
    </>
  );

  const SparklePattern = ({ index }: { index: number }) => (
    <>
      {/* Sparkles - Row 1 */}
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 4}%`, left: '10%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 6}%`, left: '22%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 8}%`, left: '33%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 5}%`, left: '47%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 7}%`, left: '61%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 9}%`, left: '73%', width: '66px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 6}%`, left: '88%', width: '60px' }} />

      {/* Sparkles - Row 2 */}
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 14}%`, left: '6%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 16}%`, left: '18%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 18}%`, left: '31%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 15}%`, left: '44%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 17}%`, left: '57%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 19}%`, left: '70%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 16}%`, left: '84%', width: '66px' }} />

      {/* Sparkles - Row 3 */}
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 26}%`, left: '12%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 28}%`, left: '25%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 24}%`, left: '38%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 27}%`, left: '51%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 25}%`, left: '65%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 29}%`, left: '79%', width: '66px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 26}%`, left: '92%', width: '60px' }} />

      {/* Sparkles - Row 4 */}
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 36}%`, left: '8%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 38}%`, left: '21%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 34}%`, left: '34%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 37}%`, left: '48%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 35}%`, left: '62%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 39}%`, left: '76%', width: '66px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 36}%`, left: '89%', width: '64px' }} />

      {/* Sparkles - Row 5 */}
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 46}%`, left: '5%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 48}%`, left: '17%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 44}%`, left: '30%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 47}%`, left: '43%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 45}%`, left: '56%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 49}%`, left: '69%', width: '66px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 46}%`, left: '83%', width: '62px' }} />

      {/* Sparkles - Row 6 */}
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 56}%`, left: '11%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 58}%`, left: '24%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 54}%`, left: '37%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 57}%`, left: '50%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 55}%`, left: '64%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 59}%`, left: '77%', width: '66px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 56}%`, left: '91%', width: '60px' }} />

      {/* Sparkles - Row 7 */}
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 66}%`, left: '7%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 68}%`, left: '20%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 64}%`, left: '33%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 67}%`, left: '46%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 65}%`, left: '60%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 69}%`, left: '74%', width: '66px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 66}%`, left: '87%', width: '64px' }} />

      {/* Sparkles - Row 8 */}
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 76}%`, left: '13%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 78}%`, left: '27%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 74}%`, left: '41%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 77}%`, left: '54%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 75}%`, left: '68%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 79}%`, left: '81%', width: '66px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 76}%`, left: '95%', width: '62px' }} />

      {/* Sparkles - Row 9 */}
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 86}%`, left: '9%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 88}%`, left: '23%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 84}%`, left: '36%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 87}%`, left: '49%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 85}%`, left: '63%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 89}%`, left: '77%', width: '66px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 86}%`, left: '90%', width: '64px' }} />

      {/* Sparkles - Row 10 */}
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 94}%`, left: '15%', width: '62px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 96}%`, left: '29%', width: '60px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 92}%`, left: '43%', width: '68px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 95}%`, left: '57%', width: '64px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 93}%`, left: '71%', width: '58px' }} />
      <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: `${index * 100 + 97}%`, left: '85%', width: '66px' }} />
    </>
  );

  return (
    <div ref={containerRef} className="fixed inset-0 z-10 pointer-events-none overflow-hidden opacity-80">
      {/* Stars Layer */}
      <div
        ref={starsRef}
        className="absolute will-change-transform"
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: `${documentHeight + patternHeight}px`
        }}
      >
        {Array.from({ length: repeatCount }).map((_, i) => (
          <StarPattern key={`stars-${i}`} index={i} />
        ))}
      </div>

      {/* Sparkles Layer */}
      <div
        ref={sparklesRef}
        className="absolute will-change-transform"
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: `${documentHeight + patternHeight}px`
        }}
      >
        {Array.from({ length: repeatCount }).map((_, i) => (
          <SparklePattern key={`sparkles-${i}`} index={i} />
        ))}
      </div>
    </div>
  );
};

export default StarfieldBackground;
