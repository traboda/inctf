import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import animations from '../../animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const HeaderContainer = styled.section`
  #landing-header-cover-image {
    bottom: 0;
    left: 0;
    position: absolute;
    max-height: 80vh;
  }
  #header-register-button {
    display: inline-block;
    width: 100%;
    text-align: center;
    max-width: 300px;
    background: #f13f17;
    color: white;
    font-weight: 600;
    padding: 0.75rem 1rem;
    text-decoration: none !important;
    border-radius: 8px;
    box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.3);
    &:hover {
      background: white;
      color: #f13f17;
    }
  }
  .limited-slots-warning {
    color: #ff9100;
    font-size: 13px;
  }
`;

const LandingHeader = () => (
  <HeaderContainer>
    <div className="container mx-auto px-4 pt-24 pb-12 relative z-20">
      {/* Corner Brackets */}
      <div className="absolute top-20 left-4 w-8 h-8 border-t-2 border-l-2 border-sky-digital opacity-60"></div>
      <div className="absolute bottom-10 right-4 w-8 h-8 border-b-2 border-r-2 border-sky-digital opacity-60"></div>

      <div className="flex flex-wrap items-center">
        <motion.div
          variants={animations}
          initial="hiddenBlur"
          whileInView="tacticalFocus"
          className="w-full md:w-1/2 px-4 flex flex-col justify-center"
        >
          <div className="max-w-full w-[640px]">
            {/* Status Indicator */}
            <div className="mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-alert-crimson animate-pulse"></span>
              <span className="font-tactical text-sm tracking-widest text-slate-satellite">ALERT STATUS: ACTIVE</span>
            </div>

            <motion.h1
              variants={animations}
              initial="hiddenDecoding"
              animate="decoding"
              className="text-4xl md:text-6xl lg:text-7xl mb-6 font-heading font-black tracking-tight text-white glitch"
              data-text={data.Landingheader}
            >
              {data.Landingheader.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hiddenDecoding: animations.hiddenChar,
                    decoding: animations.charReveal
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {eventID === 'inctf' && (
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-sky-digital mb-8 font-tactical"
              >
                {data.date}
              </motion.h2>
            )}

            {eventID === 'inctfj' && (
              <div className="my-5">
                <div className="text-3xl font-bold flex gap-4 items-center">
                  <div className="bg-sky-digital/10 p-2 rounded border border-sky-digital/20 backdrop-blur-sm">
                    <Image
                      alt="InCTF Junior"
                      src="/inctf/assets/logo_dark.png"
                      height="80"
                      width="50"
                      className="opacity-90 grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="text-sky-digital text-5xl font-tactical tracking-tighter">Junior <span className="text-white">2025</span></div>
                </div>
              </div>
            )}

            <div className="font-mono text-slate-300">
              {eventID === 'inctf' ? (
                <>
                  <p className="text-sky-400 text-xl mb-3 font-tactical uppercase tracking-wider before:content-['>_'] before:mr-2">{data.Desc}</p>
                  <p className="font-bold mb-8 text-xl block border-l-4 border-alert-crimson pl-4">{data.subDesc}</p>
                </>
              ) : (
                <>
                  <p className="text-sky-400 font-semibold text-xl mb-3 font-tactical before:content-['>>_'] before:mr-2">
                    {data.Desc}
                  </p>
                  <div className="text-slate-300">
                    <div className="font-semibold text-xl border-l-2 border-slate-satellite pl-4 my-4">
                      <span className="font-bold mb-4 text-xl block text-ghost-white">
                        Registration Opening Soon
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 flex gap-4">
              {eventID === 'inctfj' ? (
                <>
                  <Link
                    href="https://www.youtube.com/@InCTFj/live"
                    target="_blank"
                  >
                    <button
                      id="header-register-button"
                      rel="noopener noreferrer"
                      className="!px-8 !py-4 !w-fit rounded-none font-bold font-tactical bg-sky-digital/10 border border-sky-digital text-sky-digital hover:bg-sky-digital hover:text-black hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all uppercase tracking-wider"
                    >
                      [ Live Trainings ]
                    </button>
                  </Link>
                  <Link
                    href="https://www.amrita.edu/campus/amritapuri/reach-us"
                    target="_blank"
                    className="ml-2"
                  >
                    <button
                      id="header-register-button"
                      rel="noopener noreferrer"
                      className="!px-8 !py-4 !w-fit rounded-none font-bold font-tactical bg-transparent border border-slate-satellite text-slate-satellite hover:border-white hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider"
                    >
                      Reach Campus
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  id="header-register-button"
                  rel="noopener noreferrer"
                  className="!px-8 !py-4 !w-fit rounded-none font-bold font-tactical bg-sky-digital/10 border border-sky-digital text-sky-digital hover:bg-sky-digital hover:text-black hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all uppercase tracking-wider"
                >
                  [ Coming Soon ]
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 my-4 md:my-0 px-3 relative"
        >
          {/* HUD Circle Background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-sky-digital/20 rounded-full animate-spin-slow pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-alert-crimson/30 rounded-full animate-reverse-spin pointer-events-none"></div>

          <img
            alt="ECHO-9 Satellite"
            id="landing-header-cover-image"
            src="/inctf/assets/satellite-wireframe.png"
            className="relative z-10 filter drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:drop-shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-500"
            style={{ position: 'unset', maxHeight: '500px', maxWidth: '100%' }}
            draggable="false"
          />
        </motion.div>
      </div>
    </div>
  </HeaderContainer>
);

export default LandingHeader;
