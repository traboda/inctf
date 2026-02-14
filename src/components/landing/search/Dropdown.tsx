import React from 'react';
import Link from 'next/link';
import reactStringReplace from 'react-string-replace';

import filteredFAQ from '../../faq/filterUtils';

const Dropdown = ({ search, setSearch = (_: string) => {} }) => {
  const faq = () => filteredFAQ(search, new Set(), 5);

  return (
    <div
      className="w-full border border-sky-digital/20 bg-obsidian absolute top-full left-0 shadow-lg z-10 overflow-hidden"
      style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
    >
      {faq().length ? (
        <div>
          {faq().map((f, i) => (
            <Link key={i} href={`/faq?q=${encodeURIComponent(f.question)}`} className="px-6 py-2 hover:bg-sky-digital/10 flex text-ghost-white border-b border-sky-digital/10 last:border-b-0 font-mono" onClick={() => setSearch(f.question)}>

              <div>
                {reactStringReplace(f.question, search, match => (
                  <span className="font-semibold text-sky-digital">{match}</span>
                ))}
              </div>

            </Link>
          ))}
        </div>
      ) : (
        <div className="p-3 lg:p-6 text-center text-slate-satellite font-mono">
          <div className="mb-2">Do not see what you were looking for? </div>
          <Link href="/discord" className="text-sky-digital hover:text-sky-400">
            Join our discord server
                          <i className="fa fa-external-link ml-1" />

          </Link>
          <span> to get help from experts.</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;