import React from 'react';

const Footer = () => {
    return (
        <div className="w-full relative z-10 pt-16 pb-8 mt-auto bg-obsidian border-t border-sky-digital/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left Logo */}
                <div className="w-48 md:w-64">
                    <img src="/inctf/assets/logo_light.png" alt="Amrita InCTF 2026" className="w-full h-auto opacity-90" />
                </div>

                {/* Center Text */}
                <div className="text-center space-y-2">
                    <p className="text-ghost-white font-mono text-base md:text-lg mb-1">© Amrita InCTF 2026</p>
                    <p className="text-slate-satellite font-mono text-sm md:text-base">Conducted by Amrita Vishwa Vidyapeetham</p>
                    <p className="text-slate-satellite font-mono text-sm md:text-base">Organized with team bi0s</p>
                </div>

                {/* Right Logo */}
                <div className="w-32 md:w-48 text-right">
                    <img src="/assets/images/logos/bi0s_dark.png" alt="team bi0s" className="w-full h-auto opacity-90 invert" />
                </div>
            </div>
        </div>
    );
};

export default Footer;