import React from 'react';
import styled from '@emotion/styled';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';
import SiteView from '../src/components/SiteView';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const rules = require(`../src/data/${eventID}/rules.json`);

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

const RulePage = () => {

  return (
    <SiteView meta={{ title: 'Rules' }}>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

        {/* Starfield Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-slate-900/30 to-obsidian"></div>
          
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '8%', left: '12%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '22%', left: '45%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '38%', left: '75%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '58%', left: '18%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '78%', left: '65%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '15%', left: '68%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '48%', left: '35%', width: '64px' }} />
        </div>

        <TopBar />
        <div className="relative z-10">
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
          <div className="flex justify-center p-4 pb-12">
        <RulesContainer className="container">
          <div style={{ width: '100%', maxWidth: '900px' }}>
            {rules.rule.map((rule, index) => {
              if (rule.tag === 'p') {
                return (
                  <p key={index}>
                    {rule.text.map((text, textIndex) => (
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
                return (<ul key={index}>
                  {rule.text.map((text, textIndex) => {
                    return <li key={textIndex} dangerouslySetInnerHTML={{ __html: text }} />;
                  })}
                </ul>);
              } else if (rule.tag === 'ol') {
                return (<ol key={index}>
                  {rule.text.map((text, textIndex) => {
                    return <li key={textIndex} dangerouslySetInnerHTML={{ __html: text }} />;
                  })}
                </ol>);
              }

            },
            )}
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
      </div>
    </SiteView>
  );
};

export default RulePage;