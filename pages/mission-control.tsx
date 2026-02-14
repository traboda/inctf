import React from 'react';
import { motion } from 'framer-motion';
import TopBar from '../src/components/shared/TopBar';
import SiteView from '../src/components/SiteView';
import GlitchText from '../src/components/shared/GlitchText';

import TypewriterText from '../src/components/shared/TypewriterText';

// Reusable Section Component
const MissionSection = ({ title, children, className = "", isFirst, isLast }: { title: string, children: React.ReactNode, className?: string, isFirst?: boolean, isLast?: boolean }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`relative mb-24 pl-8 md:pl-16 ${className}`}
    >
        {/* ===== Branching Line Visualization (Left Side) ===== */}
        <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none hidden md:block">
            {/* Main Trunk Line */}
            <div
                className="absolute left-[6px] top-0 w-[2px] bg-sky-digital/60 shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                style={{ bottom: isLast ? 'auto' : '0', height: isLast ? '60px' : 'auto' }}
            ></div>

            {/* Connection to Title */}
            <div className="absolute left-[6px] top-[14px] w-[20px] h-[2px] bg-sky-digital/60 shadow-[0_0_8px_rgba(56,189,248,0.6)]"></div>
            <div className="absolute left-[2px] top-[10px] w-2.5 h-2.5 rounded-full border-2 border-sky-digital bg-obsidian z-10 box-content shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>

            {/* Bracket Line for Card */}
            {!isFirst && <div className="absolute left-[6px] top-[50px] w-[30px] h-[2px] bg-sky-digital/40">
                <div className="absolute right-0 top-0 w-[2px] h-[40px] bg-sky-digital/40 origin-top transform rotate-[15deg]"></div>
            </div>}
        </div>

        {/* Mobile Line */}
        <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-sky-digital/30 md:hidden"></div>

        {/* ===== Header (OUTSIDE THE CARD) ===== */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-3 h-3 bg-sky-digital rounded-full shadow-[0_0_10px_rgba(56,189,248,1)]"></div>
            <h2 className="font-tactical text-3xl md:text-5xl font-bold italic text-white tracking-widest uppercase shadow-black drop-shadow-lg">
                <TypewriterText text={title} />
            </h2>
        </div>

        {/* ===== Clean Tech Card ===== */}
        {/* Wrapper for the Glow */}
        <div className="relative filter drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">

            {/* The Card Shape */}
            <div
                className="relative p-[2px] bg-gradient-to-r from-sky-digital/80 via-sky-digital/40 to-sky-digital/80"
                style={{
                    clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                }}
            >
                {/* Inner Dark Background */}
                <div
                    className="bg-[#020617] h-full w-full p-8 md:p-12 relative overflow-hidden"
                    style={{
                        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                    }}
                >
                    {/* Subtle Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-10 font-tactical text-lg md:text-xl leading-8 text-sky-digital/90 font-medium tracking-wide">
                        {children}
                    </div>
                </div>
            </div>

            {/* Outer Decor Lines */}
            <div className="absolute -top-4 right-10 w-24 h-[1px] bg-sky-digital/40">
                <div className="absolute right-0 top-0 w-2 h-2 rounded-full border border-sky-digital/60 bg-black"></div>
            </div>

        </div>
    </motion.div>
);

const MissionControlPage = () => {
    return (
        <SiteView>
            <div className="bg-obsidian min-h-screen relative overflow-x-hidden text-ghost-white font-mono selection:bg-sky-digital/30">
                {/* Background Globe */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: 'url(/assets/images/mission-control/globe.png)',
                        backgroundSize: '1250px auto',
                        backgroundRepeat: 'repeat-y',
                        backgroundPosition: 'top 100px center',
                        opacity: 0.25,
                        mixBlendMode: 'screen'
                    }}
                />

                {/* Grid Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('/inctf/assets/grid.svg')] bg-fixed"></div>

                <TopBar />

                {/* Content Container */}
                <div className="relative z-10 pt-32 pb-40 px-4 container mx-auto max-w-5xl">

                    {/* Page Title Section - VISUAL MATCH */}
                    <div className="text-center mb-32 relative">
                        <div className="inline-block relative">
                            {/* Blue Glow Background */}
                            <div className="absolute inset-0 bg-sky-digital/20 blur-[60px] rounded-full mix-blend-screen pointer-events-none"></div>

                            {/* Glitch Title & Subtitle Container */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 relative z-10">

                                {/* Main Title Wrapper */}
                                <div className="relative">
                                    <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight uppercase text-white drop-shadow-[0_0_15px_rgba(56,189,248,0.8)] whitespace-nowrap z-20 relative">
                                        <GlitchText text="OPERATION VAJRA" strikethrough={true} className="text-white" />
                                    </h1>
                                </div>

                                {/* Hyphen with Red Lines */}
                                <div className="relative flex flex-col items-center justify-center px-2">
                                    {/* Top Red Line */}
                                    <div className="absolute -top-2 md:-top-4 left-1/2 -translate-x-1/2 w-12 md:w-20 h-[3px] bg-alert-crimson shadow-[0_0_10px_rgba(255,0,0,0.8)]"></div>

                                    {/* The Hyphen */}
                                    <span className="text-4xl md:text-6xl font-black font-heading text-white drop-shadow-[0_0_15px_rgba(56,189,248,0.8)] pb-1">
                                        -
                                    </span>

                                    {/* Bottom Red Line */}
                                    <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-16 md:w-24 h-[3px] bg-alert-crimson shadow-[0_0_10px_rgba(255,0,0,0.8)]"></div>
                                </div>

                                {/* Subtitle */}
                                <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight uppercase text-white drop-shadow-[0_0_15px_rgba(56,189,248,0.8)] whitespace-nowrap z-20 relative">
                                    Operational Plan
                                </h1>
                            </div>

                        </div>
                    </div>
                    {/* Main Layout */}
                    <div className="relative">
                        {/* Top Connector Line from Title to First Block */}
                        <div className="absolute left-[7px] md:left-[22px] -top-16 h-16 w-[2px] bg-gradient-to-b from-transparent to-sky-digital/40 hidden md:block"></div>

                        {/* COMMAND INTENT */}
                        <MissionSection title="COMMAND INTENT" isFirst>
                            <p className="pl-4 border-l-2 border-alert-crimson/50">
                                <span className="text-sky-digital mr-2">&gt;</span>
                                <span className="text-alert-crimson font-bold drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Operation VAJRA</span> has been initiated to <span className="text-white font-bold">restore</span> command authority, <span className="text-white font-bold">analyse</span> hostile cyber activity, and <span className="text-white font-bold">secure critical digital systems</span> affected by external interference.
                            </p>
                        </MissionSection>

                        {/* OPERATION OBJECTIVES */}
                        <MissionSection title="OPERATION OBJECTIVES">
                            <p className="mb-6 pl-4">
                                <span className="text-sky-digital mr-2">&gt;</span>
                                <span className="text-alert-crimson font-bold">Operation VAJRA</span> is structured to:
                            </p>
                            <ul className="space-y-3 list-none pl-4">
                                {[
                                    "Identify individuals capable of advanced cyber threat analysis.",
                                    "Train participants to operate under incomplete and evolving information.",
                                    "Evaluate technical skill, analytical depth, and decision-making ability.",
                                    "Simulate real-world cyber defence conditions in a controlled environment.",
                                    "Restore operational control through systematic problem-solving."
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group">
                                        <div className="mt-2 w-1.5 h-1.5 bg-sky-digital rounded-full group-hover:bg-alert-crimson transition-colors duration-300 shadow-[0_0_5px_rgba(56,189,248,0.8)]"></div>
                                        <span className="text-slate-300">
                                            {item.split(' ').map((word, i) => {
                                                const highligts = ['Identify', 'Train', 'Evaluate', 'Simulate', 'Restore', 'cyber', 'threat', 'analysis', 'incomplete', 'evolving', 'technical', 'skill', 'analytical', 'depth', 'decision-making', 'real-world', 'defence', 'systematic'];
                                                const clean = word.replace(/[,.]/g, '');
                                                if (highligts.includes(clean)) {
                                                    return <span key={i} className="text-white font-bold">{word} </span>;
                                                }
                                                return <span key={i}>{word} </span>;
                                            })}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </MissionSection>

                        {/* OPERATION PHASE (Custom Layout - No Card) */}
                        <div className="relative mb-24 pl-4 md:pl-16">

                            {/* Header with Custom Circuit Connection */}
                            <div className="flex flex-col mb-12 relative z-10">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-3 h-3 bg-sky-digital rounded-full shadow-[0_0_10px_rgba(56,189,248,1)] border border-white/50"></div>
                                    <h2 className="font-tactical text-3xl md:text-5xl font-bold italic text-white tracking-widest uppercase shadow-black drop-shadow-lg">
                                        <TypewriterText text="OPERATION PHASE" />
                                    </h2>
                                </div>

                                {/* The Circuit Line: Underline -> Curve -> Timeline Spine */}
                                {/* Horizontal Line under Title */}
                                <div className="h-[2px] bg-sky-digital/60 w-[300px] md:w-[400px] relative shadow-[0_0_8px_rgba(56,189,248,0.6)]">
                                    {/* End Cap */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-sky-digital rounded-full"></div>
                                </div>

                                {/* Elbow Connector to Timeline */}
                                <div className="absolute left-[24px] md:left-[40px] top-[45px] w-[2px] h-[30px] bg-sky-digital/60">
                                    {/* Curve from horizontal to vertical */}
                                    <div className="absolute -top-[16px] -left-[2px] w-[18px] h-[18px] border-b-2 border-l-2 border-sky-digital/60 rounded-bl-xl"></div>
                                </div>
                            </div>

                            <div className="flex flex-col relative space-y-12 pl-4 md:pl-8">
                                {/* Vertical Timeline Line (Spine) */}
                                {/* Connected to the header elbow above */}
                                <div className="absolute left-[38px] md:left-[54px] top-[-10px] bottom-12 w-[2px] bg-sky-digital/40 hidden md:block shadow-[0_0_10px_rgba(56,189,248,0.3)]"></div>

                                {[
                                    {
                                        id: "01",
                                        title: "Mission\nEnlistment",
                                        desc: "Teams are inducted into the operation and granted access to Mission Control. Initial orientation and operational briefings are issued.",
                                        img: "/assets/images/mission-control/employee.png"
                                    },
                                    {
                                        id: "02",
                                        title: "Capability\nDevelopment",
                                        desc: "Participants undergo structured capability building through guided learning sessions and technical exercises designed to establish operational readiness.",
                                        img: "/assets/images/mission-control/skill.png"
                                    },
                                    {
                                        id: "03",
                                        title: "Systems\nSimulation",
                                        desc: "Controlled simulations are conducted to evaluate preparedness, adaptability, and familiarity with mission environments.",
                                        img: "/assets/images/mission-control/simulation.png"
                                    },
                                    {
                                        id: "04",
                                        title: "Operational\nEngagement",
                                        sub: "(Online)",
                                        desc: "Teams participate in a national-level cyber engagement designed to assess performance under time constraints and adversarial conditions.",
                                        img: "/assets/images/mission-control/public-relation.png"
                                    },
                                    {
                                        id: "05",
                                        title: "Final\nDeployment",
                                        sub: "(Onsite)",
                                        desc: "Top-performing teams are deployed onsite for advanced operational challenges and final evaluation.",
                                        img: "/assets/images/mission-control/deployment.png"
                                    }
                                ].map((phase, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 group"
                                    >

                                        {/* Icon Circle */}
                                        <div className="relative shrink-0 z-10 ml-[8px] md:ml-0">
                                            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-sky-digital/60 bg-obsidian flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:border-sky-digital group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300">
                                                {/* Inner Ring */}
                                                <div className="absolute inset-1 rounded-full border border-sky-digital/20"></div>
                                                <img
                                                    src={phase.img}
                                                    alt={phase.title}
                                                    className="w-10 h-10 md:w-16 md:h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]"
                                                />
                                                {/* Connection to Spine */}
                                                <div className="absolute top-1/2 -left-[24px] w-[24px] h-[2px] bg-sky-digital/40 hidden md:block"></div>
                                            </div>
                                        </div>

                                        {/* Content Block */}
                                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 flex-1 pt-2 md:pt-0">

                                            {/* Phase Title Block */}
                                            <div className="w-full md:w-48 shrink-0 flex flex-col pt-1 text-left">
                                                <span className="font-mono text-sm text-white/50 italic mb-1">Phase {phase.id}</span>
                                                <h3 className="font-tactical font-bold text-xl md:text-2xl text-alert-crimson leading-tight uppercase whitespace-pre-line drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                                                    {phase.title}
                                                </h3>
                                                {phase.sub && (
                                                    <span className="font-mono text-xs text-white/70 font-bold mt-1 uppercase tracking-wider">{phase.sub}</span>
                                                )}
                                            </div>

                                            {/* Horizontal separator (Dash) */}
                                            <div className="hidden md:block w-8 h-[2px] bg-sky-digital/30"></div>

                                            {/* Description */}
                                            <p className="font-mono text-base md:text-xl text-sky-digital/90 font-medium leading-relaxed max-w-3xl drop-shadow-[0_0_2px_rgba(56,189,248,0.3)]">
                                                {phase.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* COMMAND PRINCIPLES */}
                        <MissionSection title="COMMAND PRINCIPLES">
                            <div className="pl-4">
                                <p className="mb-6 font-mono text-lg">
                                    <span className="text-sky-digital mr-2">&gt;</span>
                                    <span className="text-alert-crimson font-bold">Operation VAJRA</span> <span className="text-white">is executed under the following command principles:</span>
                                </p>
                                <ul className="space-y-3 list-none pl-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-white fill-white mt-1.5">•</span>
                                        <span className="text-white font-mono text-lg">
                                            Merit-based <span className="text-sky-digital">progression</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white fill-white mt-1.5">•</span>
                                        <span className="text-white font-mono text-lg">
                                            Fair <span className="text-sky-digital">and</span> transparent <span className="text-sky-digital">evaluation</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white fill-white mt-1.5">•</span>
                                        <span className="text-white font-mono text-lg">
                                            Technical accuracy <span className="text-sky-digital">over</span> speed alone
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white fill-white mt-1.5">•</span>
                                        <span className="text-white font-mono text-lg">
                                            Ethical conduct <span className="text-sky-digital">and</span> operational discipline
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </MissionSection>

                        {/* OPERATIONAL READINESS */}
                        <MissionSection title="OPERATIONAL READINESS" isLast>
                            <div className="pl-4 space-y-6">
                                <p className="font-mono text-lg">
                                    <span className="text-sky-digital mr-2">&gt;</span>
                                    <span className="text-alert-crimson font-bold">Operation VAJRA</span> <span className="text-white">is not a one-time exercise.</span>
                                </p>

                                <p className="font-mono text-lg leading-relaxed">
                                    <span className="text-sky-digital mr-2">&gt;</span>
                                    <span className="text-sky-digital">It is a </span><span className="text-white font-bold">deliberate</span><span className="text-white">, </span><span className="text-white font-bold">long-duration</span> <span className="text-sky-digital">operation designed to prepare participants for real-world cyber defence roles.</span>
                                </p>

                                <p className="font-mono text-lg leading-relaxed">
                                    <span className="text-sky-digital mr-2">&gt;</span>
                                    <span className="text-sky-digital">Only teams that demonstrate </span><span className="text-white font-bold">discipline</span><span className="text-sky-digital">, </span><span className="text-white font-bold">adaptability</span><span className="text-sky-digital">, and </span><span className="text-white font-bold">technical depth</span> <span className="text-sky-digital">will progress.</span>
                                </p>
                            </div>
                        </MissionSection>
                    </div>

                </div>
            </div>
        </SiteView>
    );
};

export default MissionControlPage;
