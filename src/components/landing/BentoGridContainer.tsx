"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Explicitly register scroll plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface BentoGridContainerProps {
    children: React.ReactNode;
}

export default function BentoGridContainer({ children }: BentoGridContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const cards = containerRef.current?.querySelectorAll('.bento-card-wrapper');
            if (!cards || cards.length < 4) return;

            // DOM Index references:
            // 0: Mission Brief (Row 1 Left)
            // 1: Crew Eligibility (Row 1 Right)
            // 2: Mission Credentials (Row 2 Left)
            // 3: Join Mission Control (Row 2 Right)
            // Target Order: R1C1 (0) -> R1C2 (1) -> R2C2 (3) -> R2C1 (2)
            const animationOrder = [cards[0], cards[1], cards[3], cards[2]];

            gsap.fromTo(animationOrder, 
                { 
                    scale: 0.7, 
                    opacity: 0 
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: "back.out(1.2)", // Pop in bounce effect
                    stagger: 0.25,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%", // Triggers when top of grid hits 75% scroll bounds
                        toggleActions: "play none none none"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {children}
        </div>
    );
}
