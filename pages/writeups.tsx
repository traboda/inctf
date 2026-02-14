import React, { useState } from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import postsIndex from '../src/data/writeups/index.json';
import WriteUpCard from '../src/components/writeup/WriteUpCard';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';
import TagSelector from '../src/components/TagSelector';
import SiteView from '../src/components/SiteView';
import { loadYaml } from '../lib/loadYaml';

const WriteupListingPage = ({ writeups }) => {

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState(null);

  const CHALLENGE_CATEGORIES = [
    {
      'label': 'Cryptography',
      'value': 'crypto',
    },
    {
      'label': 'Forensics',
      'value': 'forensics',
    },
    {
      'label': 'Reversing',
      'value': 'reversing',
    },
    {
      'label': 'Pwn',
      'value': 'pwn',
    },
    {
      'label': 'Web',
      'value': 'web',
    },
  ];

  return (
    <SiteView meta={{ title: 'Challenge Solution WriteUps' }}>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

        {/* Starfield Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-slate-900/30 to-obsidian"></div>
          
          {/* Stars - Row 1 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '5%', left: '8%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '12%', left: '25%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '8%', left: '45%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '15%', left: '68%', width: '55px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '10%', left: '88%', width: '48px' }} />

          {/* Stars - Row 2 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '28%', left: '12%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '35%', left: '38%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '32%', left: '62%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '38%', left: '82%', width: '52px' }} />

          {/* Stars - Row 3 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '52%', left: '5%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '58%', left: '28%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '55%', left: '52%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '60%', left: '75%', width: '50px' }} />

          {/* Stars - Row 4 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '75%', left: '15%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '82%', left: '42%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '78%', left: '65%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '85%', left: '90%', width: '54px' }} />

          {/* Sparkles - Scattered */}
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '18%', left: '18%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '25%', left: '55%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '22%', left: '78%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '45%', left: '20%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '48%', left: '68%', width: '66px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '68%', left: '35%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '72%', left: '8%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '88%', left: '25%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '92%', left: '72%', width: '62px' }} />
        </div>

        <TopBar />
        
        <div className="relative z-10">
          <PageHeader
            title="Challenge Solutions"
            breadcrumb={[
              {
                link: '/resources',
                title: 'Resources',
              },
              {
                link: '/writeups',
                isActive: true,
                title: 'WriteUps',
              },
            ]}
            description="
                         Read the solution write-ups for InCTF Jr challenges, and solve them following
                         the write-up and get yourself started!
                    "
          />
          <main className="flex flex-col min-h-screen">
            <div className="container px-4 py-6 mx-auto">
              <div className="flex items-center">
                <div className="md:1/2 flex items-center p-2">
                  <input
                    type="text"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    placeholder="Type to search..."
                    className="outline-none pl-4 pr-12 py-2 border border-sky-digital/20 rounded-lg shadow-inner bg-obsidian text-ghost-white focus:border-sky-digital w-full placeholder-slate-satellite font-mono"
                  />
                </div>
                <div className="md:1/2 flex items-center p-2">
                  <TagSelector
                    options={CHALLENGE_CATEGORIES}
                    isClearable
                    value={category}
                    onChange={(t) => setCategory((Array.isArray(t) ? {} : t)?.value === category?.value ? null : t)}
                  />
                </div>
              </div>
              {writeups.length > 0 ?
                <div className="flex flex-wrap">
                  {writeups.filter((v) =>
                    (category == null || v?.category.toLowerCase() === category.value.toLowerCase()) &&
                    ((keyword?.length < 1) || (v.title?.toLowerCase().startsWith(keyword.toLowerCase()))),
                  ).map((w, i) => (
                    <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={i}>
                      <WriteUpCard {...w} />
                    </div>
                  ))}
                </div> :
                <div>No WriteUps</div>}
            </div>
          </main>
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
    </SiteView>
  );

};

export async function getStaticProps() {
  const writeups = [];

  Object.keys(postsIndex).forEach((key) => {
    const { query } = postsIndex[key];
    try {
      const writeup = loadYaml(`src/data/writeups/${query.id}.yaml`);
      writeups.push(writeup);
    } catch (e) {
      console.error(`Failed to load writeup: ${query.id}`, e);
    }
  });

  return {
    props: {
      writeups,
    },
  };
}

export default WriteupListingPage;