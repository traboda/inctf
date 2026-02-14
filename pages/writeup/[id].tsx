import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

import TopBar from '../../src/components/shared/TopBar';
import Footer from '../../src/components/shared/Footer';
import Breadcrumb from '../../src/components/shared/Breadcrumb';
import PageFooterExplorer from '../../src/components/PageFooterExplorer';
import SiteView from '../../src/components/SiteView';
import postsIndex from '../../src/data/writeups/index.json';
import { loadYaml } from '../../lib/loadYaml';

const CodeBlock = dynamic(() => import('../../src/components/CodeBlock'), { ssr: false });

const Markdown = styled.div`
  overflow-wrap: anywhere;
  color: #F8FAFC;
  font-family: 'JetBrains Mono', monospace;
  
  p { 
    margin-bottom: 1rem;
    color: #94A3B8;
  }

  a {
    color: #38BDF8;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: #7DD3FC;
      text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
      text-decoration: underline;
    }
  }

  ol, ul {
    list-style: revert;
    margin: revert;
    padding: revert;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.75rem !important;
    color: #38BDF8;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  h1, .modest-h1 {
    font-size: 3rem;
  }

  h2, .modest-h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #F8FAFC;
  }

  h3, .modest-h3 {
    font-size: 1.6rem;
    color: #F8FAFC;
  }

  h4, .modest-h4 {
    font-size: 1.414rem;
  }

  h5, .modest-h5 {
    font-size: 1.121rem;
  }

  h6, .modest-h6 {
    font-size: .88rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  pre {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 7px;
  }

  p > code {
    padding: 2px 6px;
    background: rgba(56, 189, 248, 0.1);
    color: #38BDF8;
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 7px;
  }

  blockquote {
    border-left: 8px solid #38BDF8;
    padding: 1rem;
    font-style: italic;
    background: rgba(56, 189, 248, 0.05);
    border-radius: 7px;
    margin-bottom: 1rem;
    color: #94A3B8;

    & > blockquote {
      margin-top: 1rem;
    }
  }

  table {
    width: 100%;
    border-radius: 7px;
    border-style: hidden;
    text-align: left;
    color: #F8FAFC;
    overflow: hidden;
    border: 1px solid rgba(56, 189, 248, 0.2);

    thead th, thead td {
      padding: 8px 12px;
      background: rgba(56, 189, 248, 0.2);
      color: #F8FAFC;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
    }

    tbody th, tbody td {
      border: 1px solid rgba(56, 189, 248, 0.1);
      padding: 8px 12px;
      background: rgba(2, 6, 23, 0.5);
      color: #94A3B8;
    }
  }
`;

const WriteUpPage = ({ data }) => {
  return data ?
    <SiteView meta={{ title: `${data.title} - ${data?.category} Challenge Solution` }}>
      <div className="relative bg-obsidian min-h-screen">
        {/* Scanlines Overlay */}
        <div className="scanlines fixed inset-0 pointer-events-none z-50" />

        {/* Starfield Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[10%] left-[5%] w-1 opacity-20" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[20%] left-[15%] w-1 opacity-10" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[30%] left-[25%] w-1 opacity-15" />
          <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[15%] left-[35%] w-2 opacity-20" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[40%] left-[45%] w-1 opacity-10" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[50%] left-[55%] w-1 opacity-20" />
          <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[25%] left-[65%] w-2 opacity-15" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[60%] left-[75%] w-1 opacity-10" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[70%] left-[85%] w-1 opacity-20" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[35%] left-[95%] w-1 opacity-15" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[80%] left-[10%] w-1 opacity-10" />
          <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[45%] left-[20%] w-2 opacity-20" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[90%] left-[30%] w-1 opacity-15" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[55%] left-[40%] w-1 opacity-10" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[65%] left-[50%] w-1 opacity-20" />
          <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[75%] left-[60%] w-2 opacity-15" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[85%] left-[70%] w-1 opacity-10" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[95%] left-[80%] w-1 opacity-20" />
          <img src="/assets/images/icons/star.png" alt="" className="absolute top-[5%] left-[90%] w-1 opacity-15" />
        </div>

        <div className="relative z-10">
          <TopBar />
          <div className="px-4 py-8 flex items-end justify-center" style={{ minHeight: '30vh' }}>
            <div style={{ width: '1000px', maxWidth: '100%' }}>
              <div className="mb-6">
                <Breadcrumb
                  items={[
                    {
                      link: '/writeups',
                      title: 'Writeups',
                    },
                  ]}
                />
              </div>
              <h1 className="text-sky-digital font-heading font-bold mb-2 text-3xl lg:text-6xl">{data.title}</h1>
              <div className="font-semibold text-slate-satellite font-mono text-base pb-6 pt-2">
            <span>
              <i className="far fa-fire" />
              {' '}
              {data?.difficulty}
              {' '}
            </span>
            <span className="ml-2">
              <i className="far fa-album-collection" />
              {' '}
              {data?.category}
            </span>
          </div>
              <div className="mt-4">
                <a
                  href={`https://app.traboda.com/challenge/${data?.id}`}
                  className="bg-sky-digital/10 border border-sky-digital hover:bg-sky-digital hover:text-black px-4 py-3 text-sky-digital font-mono font-bold rounded-lg transition-all duration-300 inline-block shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                >
                  Open Challenge
                  {' '}
                  <i className="fa fa-external-link ml-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-4 flex justify-center bg-obsidian">
            <div className="py-8 px-3" style={{ minHeight: '50vh', width: '1000px', maxWidth: '100%' }}>
              <Markdown className="leading-relaxed">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code: CodeBlock,
                  }}
                >
                  {data?.content}
                </ReactMarkdown>
              </Markdown>
            </div>
          </div>
          <PageFooterExplorer
        items={[
          {
            'title': 'Workshops',
            'text': 'Attend Free Training Workshops',
            'link': '/trainings',
          },
          {
            'title': 'FAQ',
            'text': 'Answers to common questions',
            'link': '/faq',
          },
          {
            'title': 'Videos',
            'text': 'Videos to help get started',
            'link': '/resources#videos',
          },
          {
            'title': 'bi0s Wiki',
            'text': 'Learn fundamental concepts',
            'link': 'https://wiki.bi0s.in',
          },
          {
            'title': 'Practice Challenges',
            'text': 'Prepare solving challenges',
            'link': 'https://app.traboda.com/challenges',
          },
          {
            'title': 'Promote',
            'text': 'Promote InCTF Junior',
            'link': '/promote',
          },
          {
            'title': 'Join Discord Server',
            'text': 'Get help from our community',
            'link': '/discord',
          },
        ]}
          />
          <Footer />
        </div>
      </div>
    </SiteView> :
    <SiteView meta={{ title: 'WriteUp Not Found' }}>
      <div className="relative bg-obsidian min-h-screen">
        <div className="scanlines fixed inset-0 pointer-events-none z-50" />
        <div className="relative z-10">
          <TopBar />
          <div className="flex items-center justify-center" style={{ minHeight: '50vh' }}>
            <h1 className="text-sky-digital font-heading font-bold text-4xl">Writeup not found</h1>
          </div>
          <Footer />
        </div>
      </div>
    </SiteView>;
};

export async function getStaticPaths() {
  const paths = Object.keys(postsIndex).map((key) => {
    const { query } = postsIndex[key];
    return {
      params: { id: String(query.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const data = loadYaml(`src/data/writeups/${params.id}.yaml`);
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {
        data: null,
      },
    };
  }
}

export default WriteUpPage;
