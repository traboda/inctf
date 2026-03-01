"use client";

import React, { useContext } from 'react';
import styled from '@emotion/styled';

import ConfigContext from '../SiteView/context';

import SocialMediaLinks from './SocialMediaLinks';

const FooterContainer = styled.footer`
    background: rgba(2, 6, 23, 0.95);
    border-top: 1px solid rgba(56, 189, 248, 0.2);
    color: #94A3B8;
    padding: 1rem;
    font-size: 14px;
    font-family: 'JetBrains Mono', monospace;
    img {
      max-height: 64px;
      max-width: 100%;
    }
`;

const FooterLinksBar = styled.nav`
    a {
       font-size: 13px;
       color: #94A3B8;
       opacity: 0.8;
       margin-right: 16px;
       margin-bottom: 5px;
       text-transform: uppercase;
       display: inline-flex;
       align-items: center;
       gap: 6px;
       transition: all 0.2s ease;
       
       &:hover {
         color: #38BDF8;
         text-decoration: none;
         text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
       }
       
       i {
         font-size: 14px;
       }
    }
`;

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;

const Footer = () => {

  const { assets } = useContext(ConfigContext);
  const footerConfig = require(`../../data/${eventID}/footer.json`);

  return (<FooterContainer>
    <div className="container min-w-lg mx-auto sm:px-4 px-1 pt-3">
      <div className="flex md:justify-between md:flex-row flex-col">
        <div className="order-2 md:order-1 text-center md:text-left px-1">
          <div className="md:flex items-center block">
            <img draggable="false" className="inline" alt="Amrita InCTF" src={`/${eventID}/assets/${assets?.logo.light}`} />
            <div className="md:ml-6 py-3">
              <div className="line-height-1 opacity-80 my-2 md:mb-1 md:mt-0">
                {footerConfig?.copyrightText}
              </div>
              {footerConfig?.menu?.length > 0 && (
                <FooterLinksBar>
                  {footerConfig?.menu.map((link, index) => {
                    let iconClass = "fa fa-link";
                    const titleLower = link.title.toLowerCase();
                    if (titleLower.includes("kit")) iconClass = "fa fa-toolbox";
                    else if (titleLower.includes("privacy")) iconClass = "fa fa-user-shield";
                    else if (titleLower.includes("rules")) iconClass = "fa fa-gavel";
                    else if (titleLower.includes("email")) iconClass = "fa fa-envelope";
                    else if (titleLower.includes("instagram")) iconClass = "fab fa-instagram";
                    else if (titleLower.includes("twitter")) iconClass = "fab fa-twitter";
                    else if (titleLower.includes("facebook")) iconClass = "fab fa-facebook";
                    else if (titleLower.includes("youtube")) iconClass = "fab fa-youtube";
                    else if (titleLower.includes("discord")) iconClass = "fab fa-discord";

                    return (
                      <a key={index} href={link.link}>
                        <i className={iconClass}></i>
                        {link.title}
                      </a>
                    );
                  })}
                </FooterLinksBar>
              )}
            </div>
          </div>
        </div>
        <div className="social-bar py-4 md:py-0 order-1 md:order-2 text-white flex items-center md:justify-end justify-center px-1">
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  </FooterContainer>);

};

export default Footer;