import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import SponsorsSection from './SponsorsSection';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const SponsorshipArea = styled.section`
    justify-content: center;
    h2 {
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 1rem;
      color: #F8FAFC;
      font-family: 'Inter', sans-serif;
      div {
        font-size: 90%;
        color: #38BDF8;
      }
    }
    p {
        max-width: 650px;
        color: #94A3B8;
        font-family: 'JetBrains Mono', monospace;
        div {
          font-size: 16px;
          font-weight: 500;
        }
    }
    .sponsorship-brochure-button {
       background: #E11D48;
    }
    .contact-us-button {
        background: rgba(56, 189, 248, 0.1);
        border: 1px solid #38BDF8;
        color: #38BDF8;
        transition: 0.3s;
    }
    .contact-us-button:hover {
        background: #38BDF8;
        color: #000;
        box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
    }
`;

const LandingSponsorship = () => (
  <SponsorshipArea className="grid lg:grid-cols-2 mx-auto container px-4 py-10 gap-8">
    <motion.div
      variants={animation}
      initial="slideInBottomLeft"
      whileInView="animated"
    >
      <div>
        {data.forNewSponsors && (
          <div>
            <h2>{data.forNewSponsors.title}</h2>
            <p className="mt-4">
              {data.forNewSponsors.description[0]}
              <span className="block text-lg mt-3">{data.forNewSponsors.description[1]}</span>
            </p>
            <div className="mt-4 mb-8">
              {/*<a className="sponsorship-brochure-button" href="/sponsor">Sponsorship Brochure</a>*/}
              <a
                className="contact-us-button px-3 py-2 rounded-lg text-white bg-primary"
                href={data.forNewSponsors.url}
              >
                {data.forNewSponsors.button}
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.div>
    <motion.div
      variants={animation}
      initial="slideInBottomRight"
      whileInView="animated"
    >
      <SponsorsSection />
    </motion.div>
  </SponsorshipArea>
);

export default LandingSponsorship;