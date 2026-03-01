'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Waypoint } from 'react-waypoint';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import faq from '../../data/faq';
import QuestionCard from './QuestionCard';
import Footer from '../shared/Footer';
import FAQFilter from './Filter';
import filteredFAQ from './filterUtils';

const totalTags = [...faq.reduce((acc, f) => {
    const _acc = new Set([...acc]);
    f.tags.forEach(tag => _acc.add(tag as never));
    return _acc;
}, new Set())].map(faq => ({ value: faq, label: faq }));

const FAQContentInner = () => {
    const [totalVisible, setTotalVisible] = useState(10);
    const [openQ, setOpen] = useState<number | null>(0);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState(new Set());

    const searchParams = useSearchParams();

    useEffect(() => {
        const q = searchParams?.get('q');
        setSearch(q ?? '');
    }, [searchParams]);

    useEffect(() => {
        const items = filteredFAQ(search, tags);
        if (items.length > 0) {
            setOpen(0); // Open first question if results exist
        } else {
            setOpen(null); // No questions to open if no results
        }
    }, [search, tags]);

    const updateTotalVisible = (value: number) =>
        setTotalVisible(Math.max(10, Math.min(value, filteredFAQ(search, tags).length)));

    const renderFAQ = () => {
        const items = filteredFAQ(search, tags, totalVisible);
        return items?.length > 0 ? (
            items.map((q: any, i: number) => (
                <QuestionCard
                    question={q.question}
                    answer={q.answer}
                    search={search}
                    isOpen={i === openQ}
                    onClick={() => setOpen(i === openQ ? null : i)}
                    key={i}
                />
            ))
        ) : (
            <div className="py-5 text-center">
                <h4 className="text-3xl mb-4 font-heading font-bold text-white">No Answers Found 😔</h4>
                <p className="text-slate-satellite font-mono">
                    Your question is not one among our frequently asked questions.
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
        <AppThemeWrapper id="faq-page">
            <section className="relative z-10 pt-20">
                <h1 className="text-sky-digital text-center text-3xl lg:text-6xl py-8 font-heading font-bold drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                    Frequently Asked Questions
                </h1>
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
                            <div className="text-slate-satellite font-mono mt-1">
                                Write to us at
                                {' '}
                                <a
                                    href="mailto:inctf@am.amrita.edu"
                                    className="text-sky-digital hover:text-sky-400 hover:underline font-bold"
                                >
                                    inctf@am.amrita.edu
                                </a>
                            </div>
                        </div>
                    </Waypoint>
                </div>
            </section>
            <Footer />
        </AppThemeWrapper>
    );
};

const FAQContent = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-obsidian flex items-center justify-center text-sky-digital font-tactical text-2xl animate-pulse">Loading Comm-Link...</div>}>
            <FAQContentInner />
        </Suspense>
    );
};

export default FAQContent;
