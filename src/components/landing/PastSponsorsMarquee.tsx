import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { name: 'Schneider Electric', logo: '/assets/images/past_sponsors/Schneider.png' },
    { name: 'Secfence', logo: '/assets/images/past_sponsors/Secfence.png' },
    { name: 'Audius', logo: '/assets/images/past_sponsors/audius.png' },
    { name: 'Bugcrowd', logo: '/assets/images/past_sponsors/bugcrowd.png' },
    { name: 'CRED', logo: '/assets/images/past_sponsors/cred.png' },
    { name: 'Crowdstrike', logo: '/assets/images/past_sponsors/crowdstrike.png' },
    { name: 'Great Learning', logo: '/assets/images/past_sponsors/greatLearning.png' },
    { name: 'H&R Block', logo: '/assets/images/past_sponsors/h&r_block.png' },
    { name: 'Salesforce', logo: '/assets/images/past_sponsors/salesforce.png' },
    { name: 'VMware', logo: '/assets/images/past_sponsors/vmware.png' },
    { name: 'Zoho', logo: '/assets/images/past_sponsors/zoho.png' },
];

const PastSponsorsMarquee = () => {
    return (
        <div className="w-full relative overflow-hidden py-12 md:py-20 flex flex-col items-center justify-center border-y border-sky-400/20 bg-slate-900/50 backdrop-blur-sm">
            <div className="mb-8 md:mb-12 flex items-center gap-4 md:gap-6">
                <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-sky-400"></div>
                <h3 className="text-white font-heading font-medium tracking-[0.2em] text-sm md:text-lg uppercase">
                    Our Past <span className="text-sky-400">Sponsors</span>
                </h3>
                <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-sky-400"></div>
            </div>

            <div className="w-full flex overflow-hidden group">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex whitespace-nowrap min-w-full items-center gap-8 md:gap-16 px-4 md:px-8"
                    style={{ width: 'max-content' }}
                >

                    {[...sponsors, ...sponsors].map((sponsor, index) => (
                        <div
                            key={`${sponsor.name}-${index}`}
                            className="relative h-14 md:h-24 w-40 md:w-64 flex-shrink-0 flex items-center justify-center opacity-70 group-hover:opacity-100 hover:!opacity-100 hover:scale-110 transition-all duration-300 filter"
                        >
                            <img
                                src={sponsor.logo}
                                alt={`${sponsor.name} Logo`}
                                className="max-h-full max-w-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>


            <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none"></div>
        </div>
    );
};

export default PastSponsorsMarquee;
