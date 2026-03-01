'use client';

import React, { useState } from 'react';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import WriteUpCard from '../writeup/WriteUpCard';
import PageHeader from '../PageHeader';
import PageFooterExplorer from '../PageFooterExplorer';
import TagSelector from '../TagSelector';

const WriteupsListingContent = ({ writeups }: { writeups: any[] }) => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState<any>(null);

    const CHALLENGE_CATEGORIES = [
        { label: 'Cryptography', value: 'crypto' },
        { label: 'Forensics', value: 'forensics' },
        { label: 'Reversing', value: 'reversing' },
        { label: 'Pwn', value: 'pwn' },
        { label: 'Web', value: 'web' },
    ];

    return (
        <AppThemeWrapper id="writeups-listing">
            <div className="relative z-10 w-full">
                <PageHeader
                    title="Challenge Solutions"
                    breadcrumb={[
                        { link: '/resources', title: 'Resources' },
                        { link: '/writeups', isActive: true, title: 'WriteUps' },
                    ]}
                    description="
                         Read the solution write-ups for InCTF Jr challenges, and solve them following
                         the write-up and get yourself started!
                    "
                />
                <main className="flex flex-col min-h-[50vh]">
                    <div className="container px-4 py-6 mx-auto">
                        <div className="flex items-center flex-wrap">
                            <div className="w-full md:w-1/2 p-2">
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={e => setKeyword(e.target.value)}
                                    placeholder="Type to search..."
                                    className="outline-none pl-4 pr-12 py-2 border border-sky-digital/20 rounded-lg shadow-inner bg-obsidian text-ghost-white focus:border-sky-digital w-full placeholder-slate-satellite font-mono"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-2 relative z-50">
                                <TagSelector
                                    options={CHALLENGE_CATEGORIES}
                                    isClearable
                                    value={category}
                                    onChange={(t: any) => setCategory((Array.isArray(t) ? {} : t)?.value === category?.value ? null : t)}
                                />
                            </div>
                        </div>
                        {writeups.length > 0 ? (
                            <div className="flex flex-wrap mt-8">
                                {writeups.filter((v: any) =>
                                    (category == null || v?.category.toLowerCase() === category.value.toLowerCase()) &&
                                    ((keyword?.length < 1) || (v.title?.toLowerCase().startsWith(keyword.toLowerCase()))),
                                ).map((w: any, i: number) => (
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={i}>
                                        <WriteUpCard {...w} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-white text-center w-full py-16 font-mono text-xl">No WriteUps Found</div>
                        )}
                    </div>
                </main>
                <PageFooterExplorer
                    items={[
                        { 'title': 'Workshops', 'text': 'Attend Free Training Workshops', 'link': '/trainings' },
                        { 'title': 'FAQ', 'text': 'Answers to common questions', 'link': '/faq' },
                        { 'title': 'Videos', 'text': 'Videos to help get started', 'link': '/resources#videos' },
                        { 'title': 'bi0s Wiki', 'text': 'Learn fundamental concepts', 'link': 'https://wiki.bi0s.in' },
                        { 'title': 'Practice Challenges', 'text': 'Prepare solving challenges', 'link': 'https://app.traboda.com/challenges' },
                        { 'title': 'Promote', 'text': 'Promote InCTF Junior', 'link': '/promote' },
                        { 'title': 'Join Discord Server', 'text': 'Get help from our community', 'link': '/discord' },
                    ]}
                />
            </div>
            <Footer />
        </AppThemeWrapper>
    );
};

export default WriteupsListingContent;
