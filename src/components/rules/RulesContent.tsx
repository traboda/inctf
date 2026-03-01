'use client';

import React from 'react';
import styled from '@emotion/styled';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import PageHeader from '../PageHeader';
import PageFooterExplorer from '../PageFooterExplorer';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID || 'inctf';
const rules = require(`../../data/${eventID}/rules.json`);

const RulesContainer = styled('div')`
    padding: 1rem 2vw;
    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #38BDF8;
        font-family: 'Inter', sans-serif;
    }
    h2 {
      margin: 1.35rem 0;
      font-size: calc(1.2rem + 0.35vw);
      color: #F8FAFC;
      font-family: 'Inter', sans-serif;
    }
    h3 {
      font-size: calc(1.15rem + 0.25vw);
      margin-bottom: 1rem;
      color: #F8FAFC;
      font-family: 'Inter', sans-serif;
    }
    p {
      margin-bottom: 1rem;
      color: #94A3B8;
      font-family: 'JetBrains Mono', monospace;
      line-height: 1.6;
    }
    ul {
        padding-left: 1.5rem;
        list-style: square;  
        margin-bottom: 1.5rem;
        li {
          margin-bottom: 0.5rem;
          color: #94A3B8;
          font-family: 'JetBrains Mono', monospace;
        }
    }
    ol {
        padding-left: 1.5rem;
        list-style: decimal;
        margin-bottom: 1.5rem;
        li {
            margin-bottom: 0.5rem;
            color: #94A3B8;
            font-family: 'JetBrains Mono', monospace;
        }
    }
`;

const RulesContent = () => {
    return (
        <AppThemeWrapper id="rules-page">
            <div className="relative z-10 w-full">
                <PageHeader
                    title="Rules"
                    breadcrumb={[
                        {
                            title: 'Championship',
                            link: '/championship',
                        },
                        {
                            title: 'Rules',
                            link: '/rules',
                            isActive: true,
                        },
                    ]}
                />
                <div className="flex justify-center p-4 pb-12 w-full">
                    <RulesContainer className="container">
                        <div style={{ width: '100%', maxWidth: '900px' }}>
                            {rules.rule.map((rule: any, index: number) => {
                                if (rule.tag === 'p') {
                                    return (
                                        <p key={index}>
                                            {rule.text.map((text: string, textIndex: number) => (
                                                <span key={textIndex} dangerouslySetInnerHTML={{ __html: text }} />
                                            ))}
                                        </p>
                                    );
                                } else if (rule.tag === 'h1') {
                                    return <h1 key={index}>{rule.text}</h1>;
                                } else if (rule.tag === 'h2') {
                                    return <h2 key={index}>{rule.text}</h2>;
                                } else if (rule.tag === 'h3') {
                                    return <h3 key={index}>{rule.text}</h3>;
                                } else if (rule.tag === 'ul') {
                                    return (
                                        <ul key={index}>
                                            {rule.text.map((text: string, textIndex: number) => {
                                                return <li key={textIndex} dangerouslySetInnerHTML={{ __html: text }} />;
                                            })}
                                        </ul>
                                    );
                                } else if (rule.tag === 'ol') {
                                    return (
                                        <ol key={index}>
                                            {rule.text.map((text: string, textIndex: number) => {
                                                return <li key={textIndex} dangerouslySetInnerHTML={{ __html: text }} />;
                                            })}
                                        </ol>
                                    );
                                }
                            })}
                        </div>
                    </RulesContainer>
                </div>
            </div>
            <PageFooterExplorer
                items={[
                    {
                        'title': 'FAQ',
                        'text': 'Answers to common questions',
                        'link': '/faq',
                    },
                    {
                        'title': 'Promote',
                        'text': 'Promote InCTF Junior',
                        'link': '/promote',
                    },
                    {
                        'title': 'Our Reach & Impact',
                        'text': 'See our reach & impact',
                        'link': '/about#our-reach',
                    },
                ]}
            />
            <Footer />
        </AppThemeWrapper>
    );
};

export default RulesContent;
