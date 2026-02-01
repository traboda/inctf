import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import SectionCard from './SectionCard';
import DecodedText from '../shared/DecodedText';

const CrewRewardsContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem 0;
`;

const RewardCard = ({ title, points, delay }: { title: string, points: string[], delay: number }) => (
    <div className="h-full">
        <SectionCard delay={delay} className="h-full flex flex-col !p-6">
            <div className="w-12 h-0.5 bg-alert-crimson mx-auto mb-4"></div>
            <h3 className="text-lg md:text-xl font-bold font-mono text-white text-center mb-4 tracking-wide">
                {title}
            </h3>
            <div className="space-y-2 text-sky-400 font-mono text-sm leading-relaxed flex-grow">
                {points.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: delay + 0.4 + (index * 0.1) }} // Start after card loads
                        className="flex items-start"
                    >
                        <span className="text-sky-400 mr-2 shrink-0">&gt;</span>
                        <p>{point}</p>
                    </motion.div>
                ))}
            </div>
        </SectionCard>
    </div>
);

const CrewRewards = () => {
    const rewards = [
        {
            title: "Cash Rewards",
            points: [
                "Prize pool worth ₹5 Lakhs awarded to top-performing teams during the Final Deployment phase"
            ]
        },
        {
            title: "Internship & Hiring Opportunities",
            points: [
                "Hiring visibility and Internship opportunities with leading cybersecurity companies and government institutions.",
                "Top performers are identified and recommended based on demonstrated skills, not resumes alone"
            ]
        },
        {
            title: "Advanced Cyber Security Training",
            points: [
                "Hands-on exposure to real-world cybersecurity challenges",
                "Structured learning designed by experienced practitioners and researchers"
            ]
        },
        {
            title: "Official Certification",
            points: [
                "Participation certificates were issued to all registered and active participants",
                "National recognition for finalists and top-performing teams"
            ]
        },
        {
            title: "National-Level Skill Benchmarking",
            points: [
                "Performance was evaluated against participants from institutions across India",
                "Clear indication of skill level in a competitive national environment"
            ]
        }
    ];

    return (
        <CrewRewardsContainer>

            {/* Blurred Satellite Background  */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 opacity-30 pointer-events-none">
                <img
                    src="/inctf/assets/design/Homepage/satellite_laser.webp"
                    alt=""
                    className="w-[850px] h-auto"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))' }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <SectionCard className="max-w-6xl mx-auto !p-8 md:!p-10">
                    <div className="w-16 h-1 bg-alert-crimson mx-auto mb-6"></div>
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-white text-center mb-10 tracking-wider">
                        <DecodedText text="WHAT CREW MEMBERS EARN" revealSpeed={50} />
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
                        {rewards.map((reward, index) => (
                            <RewardCard
                                key={index}
                                title={reward.title}
                                points={reward.points}
                                delay={0.2 + (index * 0.1)}
                            />
                        ))}
                    </div>
                </SectionCard>
            </div>
        </CrewRewardsContainer>
    );
};

export default CrewRewards;
