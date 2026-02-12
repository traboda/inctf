import React from 'react';
import Link from 'next/link';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import SiteView from '../src/components/SiteView';
import GlitchText from '../src/components/shared/GlitchText';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const rules = require(`../src/data/${eventID}/rules.json`);

const RulePage = () => {
  return (
    <SiteView meta={{ title: 'Rules | InCTF Jr' }}>
      <div className="bg-obsidian min-h-screen text-slate-300 font-mono relative">
        <div className="scanlines fixed inset-0 pointer-events-none z-50"></div>

        {/* Blurred Satellite Background - Fixed */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/inctf/assets/design/Homepage/satellite_laser.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            style={{
              filter: 'blur(40px)',
              transform: 'scale(1.1)'
            }}
          />
        </div>

        {/* Starfield Background  */}
        <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden opacity-80">
          {/* Stars - Row 1 (Top) */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '3%', left: '2%', width: '55px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '3%', left: '2%', width: '55px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '8%', left: '15%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '5%', left: '35%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '10%', left: '55%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '7%', left: '75%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '12%', left: '90%', width: '46px' }} />

          {/* Stars - Row 2 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '22%', left: '5%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '28%', left: '25%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '25%', left: '45%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '30%', left: '65%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '27%', left: '85%', width: '52px' }} />

          {/* Stars - Row 3 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '42%', left: '8%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '48%', left: '30%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '45%', left: '50%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '50%', left: '70%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '47%', left: '88%', width: '50px' }} />

          {/* Stars - Row 4 */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '62%', left: '3%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '68%', left: '20%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '65%', left: '40%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '70%', left: '58%', width: '48px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '67%', left: '78%', width: '54px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '72%', left: '92%', width: '50px' }} />

          {/* Stars - Row 5 (Bottom) */}
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '82%', left: '10%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '88%', left: '28%', width: '52px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '85%', left: '48%', width: '56px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '90%', left: '68%', width: '50px' }} />
          <img src="/inctf/assets/design/Homepage/star.png" alt="" className="absolute opacity-30" style={{ top: '87%', left: '85%', width: '54px' }} />

          {/* Sparkles - Scattered */}
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '6%', left: '22%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '14%', left: '42%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: '18%', left: '62%', width: '68px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: '24%', left: '12%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '32%', left: '38%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '38%', left: '78%', width: '66px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: '44%', left: '18%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: '52%', left: '82%', width: '64px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '56%', left: '35%', width: '62px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '64%', left: '60%', width: '68px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(2).png" alt="" className="absolute opacity-15" style={{ top: '74%', left: '15%', width: '58px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(3).png" alt="" className="absolute opacity-15" style={{ top: '78%', left: '52%', width: '66px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle.png" alt="" className="absolute opacity-15" style={{ top: '84%', left: '72%', width: '60px' }} />
          <img src="/inctf/assets/design/Homepage/sparkle(1).png" alt="" className="absolute opacity-15" style={{ top: '92%', left: '38%', width: '64px' }} />
        </div>

        <TopBar />

        <main className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
                <GlitchText text="MISSION PROTOCOLS" />
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-6"></div>
              <p className="text-sky-400 font-mono uppercase tracking-widest text-sm">
                                // COMPLIANCE IS MANDATORY
              </p>
            </div>

            <div className="space-y-12">
              {rules.rule.map((rule, index) => {
                if (rule.tag === 'h1') {
                  return (
                    <div key={index} className="border-b border-sky-500/30 pb-4 mb-8 mt-12 first:mt-0">
                      <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide flex items-center gap-3">
                        <span className="text-sky-500">#</span>
                        {rule.text}
                      </h2>
                    </div>
                  );
                } else if (rule.tag === 'h2') {
                  return (
                    <h3 key={index} className="text-xl md:text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-alert-crimson rounded-none rotate-45 inline-block"></span>
                      {rule.text}
                    </h3>
                  );
                } else if (rule.tag === 'h3') {
                  return <h4 key={index} className="text-lg font-bold text-sky-300 mt-6 mb-3">{rule.text}</h4>;
                } else if (rule.tag === 'p') {
                  return (
                    <div key={index} className="mb-4 leading-relaxed text-slate-300">
                      {rule.text.map((text, textIndex) => (
                        <span key={textIndex} dangerouslySetInnerHTML={{ __html: text }} />
                      ))}
                    </div>
                  );
                } else if (rule.tag === 'ul') {
                  return (
                    <ul key={index} className="list-none space-y-3 mb-6 pl-4 border-l-2 border-slate-700 ml-2">
                      {rule.text.map((text, textIndex) => (
                        <li key={textIndex} className="relative pl-6">
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                          <span dangerouslySetInnerHTML={{ __html: text }} />
                        </li>
                      ))}
                    </ul>
                  );
                } else if (rule.tag === 'ol') {
                  return (
                    <ol key={index} className="list-decimal space-y-3 mb-6 pl-8 marker:text-sky-500 marker:font-bold">
                      {rule.text.map((text, textIndex) => (
                        <li key={textIndex} dangerouslySetInnerHTML={{ __html: text }} />
                      ))}
                    </ol>
                  );
                }
                return null;
              })}
            </div>

            {/* Footer Explorer Links */}
            <div className="grid md:grid-cols-3 gap-6 mt-20 pt-10 border-t border-slate-800">
              {[
                { title: 'FAQ', desc: 'Debriefing & Intel', link: '/faq' },
                { title: 'Promote', desc: 'Spread the Word', link: '/promote' },
                { title: 'Our Reach', desc: 'Mission Impact', link: '/about#our-reach' },
              ].map((item, i) => (
                <Link href={item.link} key={i}>
                  <div className="bg-slate-900/50 border border-slate-800 p-6 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group cursor-pointer h-full">
                    <h4 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors uppercase mb-1">
                      {item.title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </h4>
                    <p className="text-sm text-slate-500 font-mono">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </SiteView>
  );
};

export default RulePage;