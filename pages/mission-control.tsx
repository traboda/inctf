import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../src/components/shared/GlitchText';
import TypewriterText from '../src/components/shared/TypewriterText';
import Navbar from '../src/components/shared/TopBar';
import SiteView from '../src/components/SiteView';

const MissionControl = () => {
    return (
        <SiteView meta={{ title: "Mission Control | InCTF Jr" }}>
            <section className="min-h-screen bg-black text-white relative overflow-hidden font-mono flex flex-col 
                before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] before:bg-[size:50px_50px] before:z-[1] before:pointer-events-none
                after:content-[''] after:absolute after:inset-0 after:bg-[url('/assets/images/mission-control/globe.png')] after:bg-repeat-y after:bg-[center_top] after:bg-[length:800px_auto] md:after:bg-[length:1300px_auto] after:opacity-20 md:after:opacity-35 after:z-0 after:pointer-events-none">
                <Navbar />

                <div className="relative z-10 max-w-[1000px] mx-auto py-[80px] px-5 md:py-[120px] md:px-5 pb-10 md:pb-[60px] flex flex-col gap-10 md:gap-20">
                    <h1 className="text-center text-[1.8rem] md:text-[2.5rem] mb-8 uppercase tracking-[4px] font-black whitespace-normal md:whitespace-nowrap leading-[1.2]">
                        <GlitchText text="OPERATION VAJRA" className="text-[#38BDF8] drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]" />
                        <span className="text-white ml-[15px] font-bold">- Operational Plan</span>
                    </h1>

                    {/* COMMAND INTENT */}
                    <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-white text-[1.5rem] md:text-[2rem] mb-2.5 flex items-center gap-[15px] italic font-extrabold tracking-[1px] uppercase ml-2.5 flex-wrap before:content-['•'] before:text-[#38BDF8] before:text-[1.5em] before:leading-[0] before:drop-shadow-[0_0_10px_#38BDF8]">
                            <TypewriterText text="COMMAND INTENT" />
                        </h2>
                        <div className="bg-[rgba(4,12,24,0.6)] border border-[#38BDF8] backdrop-blur-[8px] p-5 md:p-10 relative rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.15),inset_0_0_30px_rgba(56,189,248,0.05)]
                            before:content-[''] before:absolute before:-top-[15px] before:left-[40px] before:w-[2px] before:h-[15px] before:bg-[#38BDF8]
                            after:content-[''] after:absolute after:-top-[15px] after:left-[40px] after:w-[100px] after:h-[2px] after:bg-[#38BDF8]">
                            <div className="text-[1.1rem] leading-[1.8] text-[#94a3b8] font-mono">
                                <p className="mb-0">
                                    <span className="text-[#38BDF8] mr-3 font-bold">&gt;</span>
                                    <span className="text-[#ff3333] font-bold drop-shadow-[0_0_10px_rgba(255,51,51,0.4)]">Operation VAJRA</span> has been initiated to <span className="text-[#38BDF8] font-semibold">restore</span> <span className="text-white font-bold">command authority</span>, analyse <span className="text-white font-bold">hostile cyber activity</span>, and <span className="text-white font-bold">secure critical digital systems</span> <span className="text-[#38BDF8] font-semibold">affected by external interference</span>.
                                </p>
                            </div>
                            <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-2 border-r-2 border-[#38BDF8]"></div>
                        </div>
                    </motion.div>

                    {/* OPERATION OBJECTIVES */}
                    <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-white text-[1.5rem] md:text-[2rem] mb-2.5 flex items-center gap-[15px] italic font-extrabold tracking-[1px] uppercase ml-2.5 flex-wrap before:content-['•'] before:text-[#38BDF8] before:text-[1.5em] before:leading-[0] before:drop-shadow-[0_0_10px_#38BDF8]">
                            <TypewriterText text="OPERATION OBJECTIVES" />
                        </h2>
                        <div className="bg-[rgba(4,12,24,0.6)] border border-[#38BDF8] backdrop-blur-[8px] p-5 md:p-10 relative rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.15),inset_0_0_30px_rgba(56,189,248,0.05)]
                            before:content-[''] before:absolute before:-top-[15px] before:left-[40px] before:w-[2px] before:h-[15px] before:bg-[#38BDF8]
                            after:content-[''] after:absolute after:-top-[15px] after:left-[40px] after:w-[100px] after:h-[2px] after:bg-[#38BDF8]">
                            <div className="text-[1.1rem] leading-[1.8] text-[#94a3b8] font-mono">
                                <p className="mb-0">
                                    <span className="text-[#38BDF8] mr-3 font-bold">&gt;</span>
                                    <span className="text-[#ff3333] font-bold drop-shadow-[0_0_10px_rgba(255,51,51,0.4)]">Operation VAJRA</span> is structured to:
                                </p>
                                <ul className="list-none pl-5 mt-6">
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Identify <span className="text-[#38BDF8] font-semibold">individuals capable of</span> advanced cyber <span className="text-white font-bold">threat analysis</span>.</li>
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Train <span className="text-[#38BDF8] font-semibold">participants to operate under</span> incomplete <span className="text-[#38BDF8] font-semibold">and</span> evolving information.</li>
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Evaluate <span className="text-white font-bold">technical skill</span>, <span className="text-white font-bold">analytical depth</span>, <span className="text-[#38BDF8] font-semibold">and</span> <span className="text-white font-bold">decision-making ability</span>.</li>
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Simulate <span className="text-[#38BDF8] font-semibold">real-world</span> cyber <span className="text-white font-bold">defence conditions</span> <span className="text-[#38BDF8] font-semibold">in a controlled environment</span>.</li>
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Restore <span className="text-[#38BDF8] font-semibold">operational control through</span> systematic problem-solving.</li>
                                </ul>
                            </div>
                            <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-2 border-r-2 border-[#38BDF8]"></div>
                        </div>
                    </motion.div>

                    {/* OPERATIONAL APPROACH */}
                    <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-white text-[1.5rem] md:text-[2rem] mb-2.5 flex items-center gap-[15px] italic font-extrabold tracking-[1px] uppercase ml-2.5 flex-wrap before:content-['•'] before:text-[#38BDF8] before:text-[1.5em] before:leading-[0] before:drop-shadow-[0_0_10px_#38BDF8]">
                            <TypewriterText text="OPERATIONAL APPROACH" />
                        </h2>
                        <div className="bg-[rgba(4,12,24,0.6)] border border-[#38BDF8] backdrop-blur-[8px] p-5 md:p-10 relative rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.15),inset_0_0_30px_rgba(56,189,248,0.05)]
                            before:content-[''] before:absolute before:-top-[15px] before:left-[40px] before:w-[2px] before:h-[15px] before:bg-[#38BDF8]
                            after:content-[''] after:absolute after:-top-[15px] after:left-[40px] after:w-[100px] after:h-[2px] after:bg-[#38BDF8]">
                            <div className="text-[1.1rem] leading-[1.8] text-[#94a3b8] font-mono">
                                <p className="mb-0">
                                    <span className="text-[#38BDF8] mr-3 font-bold">&gt;</span>
                                    <span className="text-[#ff3333] font-bold drop-shadow-[0_0_10px_rgba(255,51,51,0.4)]">Operation VAJRA</span> follows a progressive <span className="text-[#38BDF8] font-semibold">operational model</span>, where <span className="text-[#38BDF8] font-semibold">participants are exposed to increasing levels of</span> complexity <span className="text-[#38BDF8] font-semibold">and</span> responsibility.
                                </p>
                                <br />
                                <p className="mb-0">
                                    <span className="text-[#38BDF8] mr-3 font-bold">&gt;</span>
                                    The mission emphasizes:
                                </p>
                                <ul className="list-none pl-5 mt-6">
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Learning before engagement</li>
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Simulation before live operations</li>
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Evaluation under realistic constraints</li>
                                </ul>
                            </div>
                            <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-2 border-r-2 border-[#38BDF8]"></div>
                        </div>
                    </motion.div>

                </div>

                {/* OPERATION PHASE TIMELINE */}
                <div className="relative z-10 max-w-[1000px] mx-auto py-[0] px-5 pb-[60px] flex flex-col gap-10 md:gap-20 mt-0">
                    <h2 className="text-white text-[1.5rem] md:text-[2rem] mb-2.5 flex items-center gap-[15px] italic font-extrabold tracking-[1px] uppercase ml-2.5 flex-wrap before:content-['•'] before:text-[#38BDF8] before:text-[1.5em] before:leading-[0] before:drop-shadow-[0_0_10px_#38BDF8]">
                        <TypewriterText text="OPERATION PHASE" />
                    </h2>

                    <div className="relative pl-0 md:pl-5">
                        {/* Vertical Line - Hidden on mobile, visible on md+ */}
                        <div className="hidden md:block absolute left-[59px] top-10 bottom-10 w-[2px] bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]"></div>

                        {/* Phase 01 */}
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-10 md:mb-[60px] items-center text-center md:text-left">
                            <div className="w-20 h-20 border-2 border-[#38BDF8] rounded-full flex items-center justify-center bg-black z-10 flex-shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                                <img src="/assets/images/mission-control/employee.png" alt="Phase 1" className="w-10" />
                            </div>
                            <div>
                                <h3 className="font-mono mb-1 md:mb-1.5 text-lg md:text-[1.2rem]">
                                    <span className="text-white text-[0.9em] opacity-80 block md:inline">Phase 01</span>
                                    <span className="text-[#ff3333] font-bold md:ml-2 block md:inline">Mission Enlistment</span>
                                </h3>
                                <p className="text-slate-400 max-w-[600px] text-sm md:text-base">
                                    Teams are inducted into the operation and granted access to Mission Control. Initial orientation and operational briefings are issued.
                                </p>
                            </div>
                        </div>

                        {/* Phase 02 */}
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-10 md:mb-[60px] items-center text-center md:text-left">
                            <div className="w-20 h-20 border-2 border-[#38BDF8] rounded-full flex items-center justify-center bg-black z-10 flex-shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                                <img src="/assets/images/mission-control/skill.png" alt="Phase 2" className="w-10" />
                            </div>
                            <div>
                                <h3 className="font-mono mb-1 md:mb-1.5 text-lg md:text-[1.2rem]">
                                    <span className="text-white text-[0.9em] opacity-80 block md:inline">Phase 02</span>
                                    <span className="text-[#ff3333] font-bold md:ml-2 block md:inline">Capability Development</span>
                                </h3>
                                <p className="text-slate-400 max-w-[600px] text-sm md:text-base">
                                    Participants undergo structured capability building through guided learning sessions and technical exercises designed to establish operational readiness.
                                </p>
                            </div>
                        </div>

                        {/* Phase 03 */}
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-10 md:mb-[60px] items-center text-center md:text-left">
                            <div className="w-20 h-20 border-2 border-[#38BDF8] rounded-full flex items-center justify-center bg-black z-10 flex-shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                                <img src="/assets/images/mission-control/simulation.png" alt="Phase 3" className="w-10" />
                            </div>
                            <div>
                                <h3 className="font-mono mb-1 md:mb-1.5 text-lg md:text-[1.2rem]">
                                    <span className="text-white text-[0.9em] opacity-80 block md:inline">Phase 03</span>
                                    <span className="text-[#ff3333] font-bold md:ml-2 block md:inline">Systems Simulation</span>
                                </h3>
                                <p className="text-slate-400 max-w-[600px] text-sm md:text-base">
                                    Controlled simulations are conducted to evaluate preparedness, adaptability, and familiarity with mission environments.
                                </p>
                            </div>
                        </div>

                        {/* Phase 04 */}
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-10 md:mb-[60px] items-center text-center md:text-left">
                            <div className="w-20 h-20 border-2 border-[#38BDF8] rounded-full flex items-center justify-center bg-black z-10 flex-shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                                <img src="/assets/images/mission-control/public-relation.png" alt="Phase 4" className="w-10" />
                            </div>
                            <div>
                                <h3 className="font-mono mb-1 md:mb-1.5 text-lg md:text-[1.2rem]">
                                    <span className="text-white text-[0.9em] opacity-80 block md:inline">Phase 04</span>
                                    <span className="text-[#ff3333] font-bold md:ml-2 block md:inline">Operational Engagement (Online)</span>
                                </h3>
                                <p className="text-slate-400 max-w-[600px] text-sm md:text-base">
                                    Teams participate in a national-level cyber engagement designed to assess performance under time constraints and adversarial conditions.
                                </p>
                            </div>
                        </div>

                        {/* Phase 05 */}
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center text-center md:text-left">
                            <div className="w-20 h-20 border-2 border-[#38BDF8] rounded-full flex items-center justify-center bg-black z-10 flex-shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                                <img src="/assets/images/mission-control/deployment.png" alt="Phase 5" className="w-10" />
                            </div>
                            <div>
                                <h3 className="font-mono mb-1 md:mb-1.5 text-lg md:text-[1.2rem]">
                                    <span className="text-white text-[0.9em] opacity-80 block md:inline">Phase 05</span>
                                    <span className="text-[#ff3333] font-bold md:ml-2 block md:inline">Final Deployment (Onsite)</span>
                                </h3>
                                <p className="text-slate-400 max-w-[600px] text-sm md:text-base">
                                    Top-performing teams are deployed onsite for advanced operational challenges and final evaluation.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* COMMAND PRINCIPLES */}
                    <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-white text-[1.5rem] md:text-[2rem] mb-2.5 flex items-center gap-[15px] italic font-extrabold tracking-[1px] uppercase ml-2.5 flex-wrap before:content-['•'] before:text-[#38BDF8] before:text-[1.5em] before:leading-[0] before:drop-shadow-[0_0_10px_#38BDF8]">
                            <TypewriterText text="COMMAND PRINCIPLES" />
                        </h2>
                        <div className="bg-[rgba(4,12,24,0.6)] border border-[#38BDF8] backdrop-blur-[8px] p-5 md:p-10 relative rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.15),inset_0_0_30px_rgba(56,189,248,0.05)]
                            before:content-[''] before:absolute before:-top-[15px] before:left-[40px] before:w-[2px] before:h-[15px] before:bg-[#38BDF8]
                            after:content-[''] after:absolute after:-top-[15px] after:left-[40px] after:w-[100px] after:h-[2px] after:bg-[#38BDF8]">
                            <div className="text-[1.1rem] leading-[1.8] text-[#94a3b8] font-mono">
                                <p className="mb-0">
                                    <span className="text-[#38BDF8] mr-3 font-bold">&gt;</span>
                                    <span className="text-[#ff3333] font-bold drop-shadow-[0_0_10px_rgba(255,51,51,0.4)]">Operation VAJRA</span> is executed under the following <span className="text-[#38BDF8] font-semibold">command principles</span>:
                                </p>
                                <ul className="list-none pl-5 mt-6">
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Merit-based <span className="text-[#38BDF8] font-semibold">progression</span></li>
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Fair <span className="text-[#38BDF8] font-semibold">and transparent evaluation</span></li>
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Technical accuracy <span className="text-[#38BDF8] font-semibold">over speed alone</span></li>
                                    <li className="mb-3 relative pl-5 text-[#cbd5e1] before:content-['•'] before:absolute before:-left-1.5 before:text-[#38BDF8] before:text-[1.2em] before:leading-[1.5]">Ethical conduct <span className="text-[#38BDF8] font-semibold">and</span> operational discipline</li>
                                </ul>
                            </div>
                            <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-2 border-r-2 border-[#38BDF8]"></div>
                        </div>
                    </motion.div>

                    {/* OPERATIONAL READINESS */}
                    <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-white text-[1.5rem] md:text-[2rem] mb-2.5 flex items-center gap-[15px] italic font-extrabold tracking-[1px] uppercase ml-2.5 flex-wrap before:content-['•'] before:text-[#38BDF8] before:text-[1.5em] before:leading-[0] before:drop-shadow-[0_0_10px_#38BDF8]">
                            <TypewriterText text="OPERATIONAL READINESS" />
                        </h2>
                        <div className="bg-[rgba(4,12,24,0.6)] border border-[#38BDF8] backdrop-blur-[8px] p-5 md:p-10 relative rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.15),inset_0_0_30px_rgba(56,189,248,0.05)]
                            before:content-[''] before:absolute before:-top-[15px] before:left-[40px] before:w-[2px] before:h-[15px] before:bg-[#38BDF8]
                            after:content-[''] after:absolute after:-top-[15px] after:left-[40px] after:w-[100px] after:h-[2px] after:bg-[#38BDF8]">
                            <div className="text-[1.1rem] leading-[1.8] text-[#94a3b8] font-mono">
                                <p className="mb-0">
                                    <span className="text-[#38BDF8] mr-3 font-bold">&gt;</span>
                                    <span className="text-[#ff3333] font-bold drop-shadow-[0_0_10px_rgba(255,51,51,0.4)]">Operation VAJRA</span> is not a one-time exercise.
                                </p>
                                <br />
                                <p className="mb-0">
                                    <span className="text-[#38BDF8] mr-3 font-bold">&gt;</span>
                                    <span className="text-[#38BDF8] font-semibold">It is a</span> <span className="text-white font-bold">deliberate</span>, <span className="text-white font-bold">long-duration</span> <span className="text-[#38BDF8] font-semibold">operation designed to prepare participants for real-world cyber defence roles.</span>
                                </p>
                                <br />
                                <p className="mb-0">
                                    <span className="text-[#38BDF8] mr-3 font-bold">&gt;</span>
                                    <span className="text-[#38BDF8] font-semibold">Only teams that demonstrate</span> <span className="text-white font-bold">discipline</span>, <span className="text-white font-bold">adaptability</span>, <span className="text-[#38BDF8] font-semibold">and</span> <span className="text-white font-bold">technical depth</span> <span className="text-[#38BDF8] font-semibold">will progress.</span>
                                </p>
                            </div>
                            <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-2 border-r-2 border-[#38BDF8]"></div>
                        </div>
                    </motion.div>

                </div>

            </section>
        </SiteView>
    );
};

export default MissionControl;
