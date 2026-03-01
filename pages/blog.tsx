import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import postsIndex from '../src/data/posts/index.json';
import PostCard from '../src/components/blog/PostCard';
import SiteView from '../src/components/SiteView';
import { loadYaml } from '../lib/loadYaml';

const BlogListingPage = ({ posts }) => {
  return (
    <SiteView meta={{ title: 'Blog' }}>
      <div className="bg-obsidian min-h-screen text-ghost-white relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

        {/* Starfield Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-slate-900/30 to-obsidian"></div>

          {/* Stars */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '5%', left: '8%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '12%', left: '25%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '8%', left: '45%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '15%', left: '68%', width: '55px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '10%', left: '88%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '28%', left: '12%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '35%', left: '38%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '32%', left: '62%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '38%', left: '82%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '52%', left: '5%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '58%', left: '28%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '55%', left: '52%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '60%', left: '75%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '75%', left: '15%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '82%', left: '42%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-20" style={{ top: '78%', left: '65%', width: '48px' }} />

          {/* Sparkles */}
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '18%', left: '18%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '25%', left: '55%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-10" style={{ top: '22%', left: '78%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-10" style={{ top: '45%', left: '20%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-10" style={{ top: '68%', left: '35%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-10" style={{ top: '88%', left: '72%', width: '62px' }} />
        </div>

        <TopBar />

        <div className="relative z-10">
          <div className="min-h-[20vh] flex py-12 items-center container mx-auto px-4 pt-20">
            <div>
              <div className="w-16 h-0.5 bg-alert-crimson mb-6"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-sky-digital mb-4 tracking-wide">InCTF Jr. Blog</h1>
              <p className="text-slate-satellite font-mono text-sm md:text-base" style={{ maxWidth: '720px' }}>
                Everything from participant experiences, cyberSec news to our case studies & reports,
                updates & experiments at InCTF are all jotted down on this blog.
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 pb-12">
            <div className="flex flex-wrap">
              {posts.length > 0 ?
                posts.map((p, i) => (
                  <div className="w-full md:w-1/2 p-2" key={i}>
                    <PostCard {...p} />
                  </div>
                )) :
                <div className="text-center w-full py-8 text-slate-satellite font-mono">No Posts</div>}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </SiteView>
  );
};

export async function getStaticProps() {
  const posts: any[] = [];

  Object.keys(postsIndex).forEach((key) => {
    const { query } = postsIndex[key];
    try {
      const post = loadYaml(`src/data/posts/${query.slug}.yaml`);
      posts.push(post);
    } catch (e) {
      console.error(`Failed to load post: ${query.slug}`, e);
    }
  });

  return {
    props: {
      posts,
    },
  };
}

export default BlogListingPage;