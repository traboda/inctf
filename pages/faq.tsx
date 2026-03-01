import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';

import ThemeWrapper from '../src/components/shared/ThemeWrapper';
import faq from '../src/data/faq';
import QuestionCard from '../src/components/faq/QuestionCard';
import Footer from '../src/components/shared/Footer';
import FAQFilter from '../src/components/faq/Filter';
import filteredFAQ from '../src/components/faq/filterUtils';

const totalTags = [...faq.reduce((acc, f) => {
  const _acc = new Set([...acc]);
  f.tags.forEach(tag => _acc.add(tag));
  return _acc;
}, new Set)].map(faq => ({ value: faq, label: faq }));

const FAQPage = () => {

  const [totalVisible, setTotalVisible] = useState(10);
  const [openQ, setOpen] = useState<number | null>(0);
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState(new Set());

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { q } = router.query;
    setSearch(q as string ?? '');
  }, [router.isReady]);

  useEffect(() => {
    const items = filteredFAQ(search, tags);
    if (items.length > 0) {
      setOpen(0); // Open first question if results exist
    } else {
      setOpen(null); // No questions to open if no results
    }
  }, [search, tags]);

  const updateTotalVisible = (value) =>
    setTotalVisible(Math.max(10, Math.min(value, filteredFAQ(search, tags).length)));

  const renderFAQ = () => {
    const items = filteredFAQ(search, tags, totalVisible);
    return items?.length > 0 ? (
      items.map((q, i) => (
        <QuestionCard
          question={q.question}
          answer={q.answer}
          search={search}
          isOpen={i === openQ}
          onClick={() => setOpen(i === openQ ? null : i)}
          key={i}
        />
      ),
      )
    ) : (
      <div className="py-5 text-center">
        <h4 className="text-3xl mb-4 font-heading font-bold">No Answers Found 😔</h4>
        <p className="text-slate-satellite font-mono">
          Your question in not one among our frequently asked questions.
          You could try rephrasing the question in a different way, or
          can join our
          {' '}
          <a href="/discord" target="_blank" className="text-sky-digital hover:text-sky-400 hover:underline">
            discord community
            <i className="fa fa-external-link ml-1" />
            {' '}
          </a>
          {' '}
          to ask us directly.
        </p>
      </div>
    );
  };

  return (
    <ThemeWrapper meta={{ title: 'Frequently Asked Questions (FAQ)' }}>
      <section className="relative z-10 pt-20">
        <h1 className="text-primary text-center text-3xl lg:text-6xl py-8 font-heading font-bold">Frequently Asked Questions</h1>
        <div className="px-6 mx-auto pb-12" style={{ maxWidth: 800, minHeight: '50vh' }}>
          <FAQFilter
            search={search}
            setSearch={setSearch}
            tags={tags}
            setTags={setTags}
            totalTags={totalTags}
          />
          {renderFAQ()}
          <Waypoint onEnter={() => updateTotalVisible(totalVisible + 4)}>
            <div className="my-6 text-center">
              <div className="text-ghost-white font-mono">Did not find what you were looking for?</div>
              <div className="text-slate-satellite font-mono">
                Write to us at
                {' '}
                <a
                  href="mailto:inctf@am.amrita.edu"
                  className="text-sky-digital hover:text-sky-400 hover:underline"
                >
                  inctf@am.amrita.edu
                </a>
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
      <Footer />
    </ThemeWrapper>
  );

};

export default FAQPage;