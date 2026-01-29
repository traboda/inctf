import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const RegCTASection = styled.section`
   h3 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 0;
      line-height: 1.5;
      font-family: 'JetBrains Mono', monospace;
      color: #38BDF8;
      text-transform: uppercase;
   }
   
   background: transparent;
   border: none;
   backdrop-filter: none;
   border-radius: 1px;
   position: relative;
   overflow: visible;

   a {
       display: inline-block;
       width: 100%;
       text-align: center;
       max-width: 400px;
       margin-bottom: 0.5rem;
       background: rgba(56, 189, 248, 0.1);
       color: #38BDF8;
       border: 1px solid rgba(56, 189, 248, 0.5);
       font-weight: 600;
       padding: 0.8rem 1.2rem;
       text-decoration: none!important;
       border-radius: 0;
       font-family: 'JetBrains Mono', monospace;
       text-transform: uppercase;
       transition: all 0.3s ease;
       
       &:hover {
         background: #38BDF8;
         color: black;
         box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
       }
   }
`;

const CTAPartners = () => {

  return (
    <motion.div
      variants={animation}
      initial="fade"
      whileInView="animated"
      className="bg-transparent mt-10 mb-20"
    >
      <RegCTASection className="container mx-auto px-4 py-8">
        {data.CTAPartners && (
          <div className="grid md:grid-cols-4 items-center gap-6">
            <div className="md:col-span-3">
              <div className="flex items-center">
                <div className="hidden md:flex items-center justify-center mr-6 h-12 w-12 border border-sky-500/50 bg-sky-500/10 text-sky-400">
                  <i className="fa fa-handshake text-2xl"></i>
                </div>
                <h3 style={{ maxWidth: '800px' }}>
                  {data.CTAPartners.message}
                </h3>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <a rel="nofollow noref" href={data.CTAPartners.button.url}>{data.CTAPartners.button.label}</a>
              </div>
            </div>
          </div>
        )}
      </RegCTASection>
    </motion.div>
  );

};

export default CTAPartners;