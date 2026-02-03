import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

import Logo from '../Logo';

import MobileMenu from './MobileMenu';
import TopBarSearch from './search';
import TopBarItem from './item';


const TopbarContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 8000;
  background: rgba(2, 6, 23, 0.7);
  backdrop-filter: blur(10px);
   transition: all 300ms ease-in-out;
  padding: 1rem 0.35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  opacity: 0;

  &.floating {
    background: rgba(2, 6, 23, 0.85);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  }

  &.up, &.top {
    pointer-events: auto;
    opacity: 1;
    transform: none;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    border-bottom: none !important;
    background: rgba(2, 6, 23, 0.95);
    top: 48px;
    bottom: initial;
    transform: translateY(-100%);
  }

  nav {
    a {
      font-size: 15px;
      color: #94A3B8; /* slate-satellite */
      padding: 8px 12px;
      text-decoration: none !important;
      transition: all 250ms ease;
      font-family: 'JetBrains Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &:hover {
        color: #38BDF8; /* sky-digital */
        text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
      }
    }
  }

  .logo {
    max-height: 56px;
  }

  img {
    max-height: 32px;
    max-width: 100%;
  }
`;


const TopbarInfoCard = styled.div`
  color: #F8FAFC;
  line-height: 1.3;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CloseButton = styled.button`
  background: none !important;
  top: 1rem;
  right: 1rem;
  position: absolute;
  padding: 0 !important;

  img {
    width: 32px;
  }
`;

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;


const TopBar = ({ UTMSource = null }) => {

  const [showMenu, setShowMenu] = useState(false);
  const [showRegCard, setShowRegCard] = useState(false);
  const [scrollDir, setScrollDir] = useState('up');
  const [isAtTop, setIsAtTop] = useState(true);
  const [mounted, setMounted] = useState(false);

  const topbarRef = useRef(null);
  const scrollPrevStateRef = useRef(0);

  const onOpen = () => setShowMenu(!showMenu);

  const onClose = () => setShowMenu(false);

  const onScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    st = st <= 0 ? 0 : st;

    setScrollDir(st > 100 && st > scrollPrevStateRef.current ? 'down' : 'up');
    setIsAtTop(st <= 100);
    scrollPrevStateRef.current = st;
  };

  useEffect(() => {
    // Prevent hydration mismatch by only running after mount
    setMounted(true);

    // Initialize scroll position on mount
    onScroll();

    document.addEventListener('scroll', onScroll, false);
    return () => {
      document.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  const isVisible = () => scrollDir === 'up' || isAtTop;

  useEffect(() => {
    setShowMenu(false);
  }, [scrollDir]);

  const topbarConfig = require(`../../../data/${eventID}/topbar.json`);

  return (
    <>
      {topbarConfig?.topbarCTA && (
        <div style={{ fontSize: '14px' }} className="block p-2 bg-slate-900/90 backdrop-blur-sm text-cyan-400 relative z-[7000]">
          {/* Desktop Version */}
          <div className="hidden md:flex items-center justify-between container mx-auto">
            <div className="px-3 font-mono tracking-tight">
              <span className="text-alert-crimson mr-2">[ALERT]</span>
              {topbarConfig?.topbarCTAText}
            </div>
            <div className="flex items-center md:my-0 px-2 md:px-0 justify-end gap-2">
              {topbarConfig?.topbarCTA?.map((cta, index) => (
                <Link
                  key={`topbar-cta-${index}`}
                  href={cta?.link}
                  className="bg-sky-500/10 border border-sky-500/50 text-sky-400 hover:bg-sky-500 hover:text-black mb-0 rounded-none px-4 py-1 whitespace-nowrap transition-all duration-300 font-bold uppercase text-xs tracking-wider">

                  {cta?.buttonText}
                  {' '}
                  <i className="fa fa-chevron-right ml-1" />

                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Version - Simplified One Line */}
          <div className="md:hidden flex items-center justify-center gap-2 px-2 font-mono text-xs">
            <span className="text-alert-crimson mr-1">[ALERT]</span>
            <span className="text-cyan-400">Need Help? Join our server</span>
            {topbarConfig?.topbarCTA?.[0] && (
              <Link
                href={topbarConfig.topbarCTA[0].link}
                className="bg-sky-500/10 border border-sky-500/50 text-sky-400 hover:bg-sky-500 hover:text-black px-3 py-1 rounded-none transition-all duration-300 font-bold uppercase text-xs tracking-wider">
                Discord
              </Link>
            )}
          </div>
        </div>
      )}
      <TopbarContainer
        suppressHydrationWarning
        ref={topbarRef}
        className={mounted ? `${scrollDir} ${isAtTop ? 'top' : 'floating'}` : 'up top'}
      >
        <div className="flex flex-wrap justify-center items-center container">
          <div
            className="hidden md:flex w-1/4 md:w-1/3 xl:w-1/4 md:text-center flex-wrap items-center md:justify-start justify-center px-2"
          >
            <Link className="w-full md:w-1/3" href="/">
              <Logo isDark />
            </Link>
            {topbarConfig?.associate?.link && (
              <a
                target="_blank"
                href={topbarConfig?.associate?.link}
                className="w-2/3 pl-2 md:flex hidden flex-col items-start"
                title="In association with CBSE"
              >
                <span
                  className="uppercase tracking-widest opacity-80"
                  style={{ fontSize: 8 }}
                >
                  In association with
                </span>
                <img
                  alt="cbse"
                  src={`/${eventID}/assets/${topbarConfig?.associate?.logo?.light}`}
                  style={{ position: 'unset', maxHeight: 45, maxWidth: '100%' }}
                  draggable="false"
                  className="inline"
                />
              </a>
            )}
          </div>
          <div className="md:w-2/3 xl:w-3/4 px-1 hidden md:flex items-center">
            <div className="flex w-full">
              <div className="w-full pl-4 flex justify-end text-left px-1">
                <TopbarInfoCard className="items-center flex">
                  {topbarConfig?.menu?.length > 0 && (
                    <nav className="flex items-center mr-4">
                      {topbarConfig?.menu?.map((i) => (
                        <TopBarItem
                          key={`topbar_menu_link_${i?.link}`}
                          item={i}
                          isVisible={isVisible()}
                        />
                      ))}
                      <TopBarSearch />
                    </nav>
                  )}
                  {topbarConfig?.CTA && (
                    <React.Fragment>
                      {topbarConfig?.CTA?.type === 'info' && (
                        <div className="text-right px-2">
                          <div className="text-lg font-semibold text-primary">
                            {topbarConfig?.CTA?.title}
                          </div>
                          <div className="font-semibold">{topbarConfig?.CTA?.subTitle}</div>
                        </div>
                      )}
                      {/*{eventID === 'inctfj' ? (*/}
                      {/*  <div>*/}
                      {/*    <iframe*/}
                      {/*      id="traboda-arena-reg-iframe"*/}
                      {/*      className="h-12 w-56"*/}
                      {/*      src="https://play.inctf.in/reg-frame?background=%23fafafa&buttonOnlyView=true"*/}
                      {/*      sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms allow-popups allow-pointer-lock allow-popups-to-escape-sandbox"*/}
                      {/*    />*/}
                      {/*    {' '}*/}
                      {/*  </div>*/}
                      {/*) : */}
                      {topbarConfig?.CTA.type === 'link' && (
                        <div className="md:block hidden">
                          <Link href={topbarConfig?.CTA?.link} target="_blank">
                            <button className="px-6 py-2 rounded-none border border-sky-digital bg-sky-digital/10 text-sky-digital font-bold font-tactical uppercase tracking-wider hover:bg-sky-digital hover:text-black transition-all duration-300 ml-3 shadow-[0_0_10px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                              {topbarConfig?.CTA?.buttonText}
                              {' '}
                              <i className="fa fa-chevron-right ml-1" />
                            </button>
                          </Link>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                </TopbarInfoCard>
              </div>
            </div>
          </div>
          <div className="flex md:hidden items-center justify-between w-full px-4">
            {/* Logo on Mobile */}
            <Link href="/">
              <Logo isDark maxHeight={45} />
            </Link>

            {/* Hamburger Menu Icon */}
            <button
              onClick={onOpen}
              className="p-2 hover:bg-sky-digital/10 transition-all duration-300 rounded group"
              aria-label="Toggle Menu"
            >
              {showMenu ? (
                <svg className="w-7 h-7 text-sky-digital transform transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7 text-sky-digital transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </TopbarContainer>
      <Modal
        isOpen={showRegCard}
        onRequestClose={() => {
          clearAllBodyScrollLocks();
          setShowRegCard(false);
        }}
        style={{
          overlay: {
            zIndex: 9000, background: 'rgba(0,0,0,0.5)',
            height: '100vh', width: '100%',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'right',
          },
          content: {
            position: 'unset', top: 0, left: 0, right: 0, padding: 0,
            border: 'none', background: 'none', width: '500px', maxWidth: '100vw',
          },
        }}
      >
        <CloseButton
          className="px-4 border-0 rounded"
          onClick={() => {
            clearAllBodyScrollLocks();
            setShowRegCard(false);
          }}
        >
          <img alt="close" src="/assets/images/icons/close.png" />
        </CloseButton>
        {showRegCard &&
          <div
            className="flex bg-white px-3 md:p-4 py-6 items-end rounded-t-2xl md:rounded-r-none md:rounded-bl-2xl justify-center"
          >
            <iframe
              className="border-0"
              style={{ width: '500px', maxWidth: '100vw', height: '190px', overflow: 'auto' }}
              src={`https://app.traboda.com/contest/inctfj-21-lr/reg-frame?color=000&primary=F13F17&primary_text=fff${UTMSource ? `&utm_source=${UTMSource}` : ''}`}
            />
          </div>}
      </Modal>
      {isVisible() && showMenu &&
        <MobileMenu onClose={onClose} config={topbarConfig} />}
    </>
  );
};

export default TopBar;