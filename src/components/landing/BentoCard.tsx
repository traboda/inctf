"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
    title: string;
    children: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, children }) => {
    return (
        <div className="relative group w-full h-full p-4 z-20">
            
            {/* Top-Left L-Bracket (Cyan) */}
            <div className="absolute top-0 left-0 w-12 h-12 opacity-50 border-l-[3px] border-t-[3px] border-sky-digital pointer-events-none"></div>

            {/* Bottom-Right L-Bracket (Cyan) */}
            <div className="absolute bottom-0 right-0 w-12 h-12 opacity-50 border-r-[3px] border-b-[3px] border-sky-digital pointer-events-none"></div>

            {/* Main Container Card */}
            <div 
                className="relative z-30 flex flex-col justify-between p-6 rounded-2xl bg-obsidian/85 backdrop-blur-md h-full w-full overflow-hidden"
                style={{
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    borderRightWidth: '4px',
                    borderBottomWidth: '4px',
                }}
            >
                {/* Ambient Inner Glow Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-red-500/5 opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"></div>
                {/* Top Accent Line (Red) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-alert-crimson shadow-[0_0_15px_rgba(244,63,94,0.6)] rounded-b-md"></div>

                {/* Centered Header with Underline */}
                <div className="text-center mb-6 mt-2">
                    <h3 className="uppercase font-mono font-bold text-ghost-white text-2xl tracking-widest">{title}</h3>
                    <div className="w-12 h-0.5 bg-alert-crimson mx-auto mt-2"></div>
                </div>

                {/* Content Area (Grows to fill space) */}
                <div className="flex-grow flex flex-col justify-between">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default BentoCard;
