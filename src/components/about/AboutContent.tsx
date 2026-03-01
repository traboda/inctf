'use client';

import React from 'react';
import { motion } from 'framer-motion';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import InctfIntro from './Intro';
import Footer from '../shared/Footer';
import AboutAchievements from './Achievements';
import UNSDGSection from './unsdg';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID || 'inctf';
const data = require(`../../data/${eventID}/about.json`);

const AboutContent = () => {
    return (
        <AppThemeWrapper id="about-page">
            {/* Hero Cover Image with Overlay */}
            <section className="relative z-10 w-full">
                <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        src={`/${eventID}/${data.coverImage1}`}
                        alt="Cover"
                        className="w-full h-full object-cover"
                        draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent"></div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="relative z-10 w-full">
                <InctfIntro />
            </section>

            {/* Second Cover Image */}
            <section className="relative z-10 py-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center px-4"
                >
                    <div className="relative inline-block">
                        <img
                            draggable="false"
                            src={`/${eventID}/${data.CoverImage2}`}
                            alt="Cover Image"
                            className="rounded-xl border border-sky-digital/20 shadow-[0_0_30px_rgba(56,189,248,0.1)]"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Achievements Section */}
            <section className="relative z-10 w-full">
                <AboutAchievements />
            </section>

            {/* UNSDG Section */}
            <section className="relative z-10 w-full">
                <UNSDGSection />
            </section>

            <Footer />
        </AppThemeWrapper>
    );
};

export default AboutContent;
