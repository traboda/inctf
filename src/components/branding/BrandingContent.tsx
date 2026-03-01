'use client';

import React from 'react';
import styled from '@emotion/styled';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import PageHeader from '../PageHeader';
import PageFooterExplorer from '../PageFooterExplorer';

const LogoWrap = styled.div`
  background-color: rgba(56, 189, 248, 0.05);
  border: 1px solid rgba(56, 189, 248, 0.2);
      padding: 2rem;
      border-radius: 1rem;
      background-size: 30px 30px;
      background-position: 0 0,45px 45px;
      background-image: linear-gradient(45deg,rgba(56, 189, 248, 0.03) 25%,transparent 0,transparent 75%,rgba(56, 189, 248, 0.03) 0,rgba(56, 189, 248, 0.03)),linear-gradient(45deg,rgba(56, 189, 248, 0.03) 25%,transparent 0,transparent 75%,rgba(56, 189, 248, 0.03) 0,rgba(56, 189, 248, 0.03));

    img {
      max-width: 100%;
    }
    a {
        background: #38BDF8!important;
        color: #020617;
        margin-right: 0.5rem;
        font-size: 15px;
        font-weight: 600;
        padding: 0.5rem 1rem;
        border-radius: 0.15rem;
        text-decoration: none!important;
        font-family: 'JetBrains Mono', monospace;
        transition: all 250ms ease;
        
        &:hover {
          background: #7DD3FC!important;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
        }
    }
`;

const BrandingContent = () => {

    return (
        <AppThemeWrapper id="branding-page" hideTopBar={false}>
            {/* Custom Background Stars matching original branding.tsx */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '10%', left: '15%', width: '50px' }} />
                <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '25%', left: '45%', width: '54px' }} />
                <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '40%', left: '75%', width: '48px' }} />
                <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '60%', left: '20%', width: '52px' }} />
                <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '80%', left: '60%', width: '56px' }} />
                <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '15%', left: '70%', width: '60px' }} />
                <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '50%', left: '30%', width: '64px' }} />
            </div>

            <div className="relative z-10 w-full">
                <PageHeader
                    title="Brand Kit"
                    description="Brand Assets & Guidelines for InCTF Junior"
                />
                <div className="pb-12 w-full">
                    <div className="flex justify-center px-1 py-5">
                        <div className="flex flex-wrap mx-0" style={{ maxWidth: '900px' }}>
                            <div className="md:w-1/3 p-2">
                                <LogoWrap>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/assets/images/branding/colorful.png" alt="Colorful Logo" />
                                    <a href="/assets/images/branding/colorful.png">PNG</a>
                                </LogoWrap>
                            </div>
                            <div className="md:w-1/3 p-2">
                                <LogoWrap>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/assets/images/branding/light_version.png" alt="Light Logo" />
                                    <a href="/assets/images/branding/light_version.png">PNG</a>
                                </LogoWrap>
                            </div>
                            <div className="md:w-1/3 p-2">
                                <LogoWrap>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/assets/images/branding/full_black.png" alt="Colorful Logo" />
                                    <a href="/assets/images/branding/full_black.png">PNG</a>
                                </LogoWrap>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooterExplorer
                    items={[
                        {
                            'title': 'Advisory Board',
                            'text': 'View our elite panel of advisors',
                            'link': '/advisory-board',
                        },
                        {
                            'title': 'Organizers',
                            'text': 'View our team of organizers',
                            'link': '/organizers',
                        },
                        {
                            'title': 'Our Reach & Impact',
                            'text': 'See our reach & impact',
                            'link': '/about#our-reach',
                        },
                    ]}
                />
                <Footer />
            </div>
        </AppThemeWrapper>
    );

};

export default BrandingContent;
