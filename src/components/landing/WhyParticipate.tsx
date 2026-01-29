import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);


const ReasonsSection = styled.section`
  padding: 8vh 2vw;
  color: #F8FAFC;
  h2 {
    font-weight: 800;
    margin-bottom: 3rem;
    text-align: center;
    font-size: calc(1.5rem + 0.5vw);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Inter', sans-serif;
  }
  video {
    max-width: 100%;
    max-height: 300px;
    border: 1px solid rgba(56, 189, 248, 0.3);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.1);
    outline: none!important;
    transition: 0.3s all ease;
    opacity: 0.8;
  }
  video:hover {
      opacity: 1;
      border-color: #38BDF8;
      box-shadow: 0 0 25px rgba(56, 189, 248, 0.3);
  }
`;

const DecodingText = ({ text }: { text: string }) => (
  <motion.span
    initial="hiddenDecoding"
    whileInView="decoding"
    viewport={{ once: true }}
    variants={animation}
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={{
          hiddenDecoding: animation.hiddenChar,
          decoding: animation.charReveal
        }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

const LandingReasonsToParticipate = () => {
  return (
    <ReasonsSection className="container mx-auto px-4">
      <motion.h2
        className="text-center"
      >
        <div className="flex justify-center mb-4">
          <motion.img
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mr-2"
            style={{ width: '64px' }}
            alt="Why Participate?"
            src="/assets/images/icons/heart.png"
          />
        </div>
        <DecodingText text="Why Participate?" />
      </motion.h2>
      <motion.div
        variants={animation}
        initial="slideInBottom"
        whileInView="animated"
        className="grid lg:grid-cols-4 md:grid-cols-2"
        viewport={{ once: true }}
      >
        {data.whyPacrticipate.map((r, i) => (
          <motion.div
            className="w-full text-center mb-6 md:mb-0 p-2"
            key={i}
            variants={animation}
          >
            <video
              autoPlay
              loop
              muted
              src={`/${eventID}/${r.video}`}
              className="mb-4"
            />
            {r.text.map((text, index) => <div className="text-base" key={index}>{text}</div>)}
          </motion.div>
        ))}
      </motion.div>
    </ReasonsSection>
  );
};

export default LandingReasonsToParticipate;