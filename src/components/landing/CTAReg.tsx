import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

import animation from '@/src/animation';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const RegCTASection = styled.section`
   h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 0;
      font-family: 'JetBrains Mono', monospace;
      color: #38BDF8; /* sky-400 */
      text-transform: uppercase;
      letter-spacing: 0.05em;
   }
   background: rgba(2, 6, 23, 0.5);
   border: 1px solid rgba(56, 189, 248, 0.2);
   backdrop-filter: blur(8px);
   border-radius: 1px;
   position: relative;
   overflow: hidden;

   &::before {
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: repeating-linear-gradient(
       0deg,
       transparent,
       transparent 2px,
       rgba(56, 189, 248, 0.05) 3px,
       rgba(56, 189, 248, 0.05) 3px
     );
     pointer-events: none;
   }
`;

const CTAReg = ({ UTMSource = null }) => (
  <motion.div
    className="bg-transparent py-4"
    variants={animation}
    initial="fade"
    whileInView="animated"
  >
    <RegCTASection className="container mx-auto px-4 md:py-10">
      <div className="flex flex-wrap items-center justify-center">
        <div className="lg:w-2/3 flex items-center justify-center py-2">
          {/* Replaced shooting_star.png with a tactical icon/element if needed, or kept consistent */}
          <div className="hidden md:flex items-center justify-center mr-4 h-12 w-12 rounded-none border border-sky-500/50 bg-sky-500/10 text-sky-400">
            <Terminal size={24} strokeWidth={2} />
          </div>
          <h3>
            {data.CTAreg.message}
          </h3>
        </div>
      </div>
    </RegCTASection>
  </motion.div>
);

export default CTAReg;