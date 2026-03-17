"use client";
import React from 'react';

const sponsors = [
    { name: 'NIQ', logo: '/inctf/assets/images/current_sponsors/NIQ-logo-bright-blue-web.png' },
    { name: 'Tata Consultancy Services', logo: '/inctf/assets/images/current_sponsors/Tata_Consultancy_Services_old_logo.svg.png' }
];

const CurrentSponsors = () => {
    return (
        <div className="w-full relative overflow-hidden py-3 border-y border-sky-400/20 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center gap-4 sm:gap-6 z-50">
            <div className="text-white font-mono text-[10px] sm:text-xs tracking-wider uppercase opacity-80">
                Official Sponsors:
            </div>
            <div className="flex items-center gap-6">
                {sponsors.map((sponsor) => (
                    <div
                        key={sponsor.name}
                        className="relative h-6 sm:h-8 w-24 sm:w-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group"
                        title={sponsor.name}
                    >
                        <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} Logo`}
                            className="max-h-full max-w-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurrentSponsors;
