import React from 'react';
import { motion } from 'framer-motion';

import ThemeWrapper from '../src/components/shared/ThemeWrapper';
import InctfIntro from '../src/components/about/Intro';
import Footer from '../src/components/shared/Footer';
import AboutAchievements from '../src/components/about/Achievements';
import UNSDGSection from '../src/components/about/unsdg';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../src/data/${eventID}/about.json`);

const AboutPage = () => {

  return (
    <ThemeWrapper meta={{ title: 'About' }}>
      {/* Hero Cover Image with Overlay */}
      <section className="relative z-10">
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
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
      <section className="relative z-10">
        <InctfIntro />
      </section>

      {/* Second Cover Image */}
      <section className="relative z-10 py-12">
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
      <section className="relative z-10">
        <AboutAchievements />
      </section>

      {/* UNSDG Section */}
      <section className="relative z-10">
        <UNSDGSection />
      </section>

      <Footer />
    </ThemeWrapper>
  );
};

export default AboutPage;