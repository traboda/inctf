import React, { useState } from 'react';

import VideoLinks from '../../data/videos';
import TagSelector from '../TagSelector';

const YoutubeVideosSection = () => {

  const [tag, setTag] = useState<any>(null);
  const [keyword, setKeyword] = useState('');

  const filterOptions = [
    {
      'label': 'How To?',
      'value': 'how-to',
    },
    {
      'label': 'Live Streams',
      'value': 'live',
    },
    {
      'label': 'Category Introductions',
      'value': 'cat-intro',
    },
    {
      'label': 'Challenge Solutions',
      'value': 'chall-solution',
    },
  ];

  return (
    <div id="videos">
      <div className="text-center mb-4">
        <h3 className="text-2xl lg:text-3xl text-sky-digital mb-2 font-semibold font-heading">YouTube Videos</h3>
        <p className="ml-2 text-slate-satellite text-lg font-mono">
          These videos will help you get started easily
        </p>
      </div>
      <div className="flex flex-wrap mb-2">
        <div className="md:1/2 flex items-center p-2">
          <input
            type="text"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder="Type to search..."
            className="outline-none pl-4 pr-12 py-2 border border-sky-digital/20 rounded-lg shadow-inner bg-obsidian text-ghost-white placeholder-slate-satellite focus:border-sky-digital w-full font-mono"
          />
        </div>
        <div className="md:1/2 flex items-center p-2">
          <TagSelector
            options={filterOptions}
            isClearable
            value={tag}
            // @ts-ignore
            onChange={(t) => setTag(t?.value === tag?.value ? null : t)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {VideoLinks.filter((v) =>
          (tag == null || (v?.tags?.length > 0 && v.tags.indexOf(tag?.value) != -1)) &&
          ((keyword?.length < 1) || (v.title?.toLowerCase().startsWith(keyword.toLowerCase()))),
        ).map((v) => (
          <div
            key={v.videoID}
            className="w-full md:w-1/3 lg:w-1/4 p-1 md:p-2 lg:p-3"
          >
            <a
              target="_blank"
              rel="noopener nofollow"
              href={`https://youtube.com/watch/${v.videoID}`}
              className="block shadow-lg border border-sky-digital/20 bg-sky-digital/5 h-full rounded-lg transition-all hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:border-sky-digital/40 hover:bg-sky-digital/10"
            >
              <div className="text-center">
                <img
                  alt={`Watch ${v.title} on YouTube `}
                  className="inline rounded-t-lg w-full"
                  src={`https://img.youtube.com/vi/${v.videoID}/mqdefault.jpg`}
                />
              </div>
              <div className="font-semibold p-3 text-ghost-white font-mono" style={{ lineHeight: 1.1 }}>
                {v.title}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );

};

export default YoutubeVideosSection;