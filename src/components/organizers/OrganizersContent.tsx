'use client';

import React from 'react';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import ProfileSummaryCard from '../ProfileSummaryCard';
import ProfileMicroCard from '../ProfileMicroCard';
import PageHeader from '../PageHeader';
import PageFooterExplorer from '../PageFooterExplorer';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID || 'inctf';
const eventOrganizers = require(`../../data/${eventID}/organizers`).default;

const OrganizersContent = () => {

    const getAvatar = (path: string) => {
        if (eventID && path)
            return `/inctf/assets/organizers/${path}`;
        return null;
    };

    return (
        <AppThemeWrapper id="organizers-page">
            <div className="relative z-10 w-full">
                <PageHeader
                    title="Organizers"
                    breadcrumb={[
                        {
                            link: '/about',
                            title: 'About',
                        },
                        {
                            link: '/organizers',
                            isActive: true,
                            title: 'Organizers',
                        },
                    ]}
                />
            </div>
            {eventOrganizers?.length > 0 && (
                <div className="relative z-10 py-12 px-2 w-full">
                    {eventOrganizers?.filter((f: any) => f.type === 'profile').map((p: any, i: number) => (
                        <div className="py-8 container mx-auto" key={i}>
                            <div className="font-mono text-xs text-sky-digital mb-4 text-center uppercase tracking-widest">// {p.label}</div>
                            <div className="w-16 h-0.5 bg-alert-crimson mx-auto mb-8"></div>
                            <h2 className="text-3xl md:text-4xl font-bold font-mono text-ghost-white mb-8 text-center tracking-wide">{p.label}</h2>
                            <div className="flex flex-wrap">
                                {p?.members.map((a: any, index: number) => (
                                    <div className="w-full md:w-1/3 p-3" key={index}>
                                        <ProfileSummaryCard
                                            {...a}
                                            avatar={getAvatar(a.avatar)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {eventOrganizers?.filter((f: any) => f.type === 'badge').map((p: any, i: number) => (
                        <div className="py-8 container mx-auto" key={i}>
                            <div className="font-mono text-xs text-sky-digital mb-4 text-center uppercase tracking-widest">// {p.label}</div>
                            <div className="w-16 h-0.5 bg-alert-crimson mx-auto mb-8"></div>
                            <h2 className="text-3xl md:text-4xl font-bold font-mono text-ghost-white mb-8 text-center tracking-wide">{p.label}</h2>
                            <div className="flex flex-wrap">
                                {p?.members.map((a: any, index: number) => (
                                    <div className="w-full md:w-1/3 p-3" key={index}>
                                        <ProfileMicroCard
                                            {...a}
                                            avatar={getAvatar(a.avatar)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="relative z-10 w-full">
                <PageFooterExplorer
                    items={[
                        {
                            'title': 'Our Reach & Impact',
                            'text': 'See our reach & impact',
                            'link': '/about#our-reach',
                        },
                        {
                            'title': 'Advisory Board',
                            'text': 'View our elite panel of advisors',
                            'link': '/advisory-board',
                        },
                        {
                            'title': 'Sponsors',
                            'text': 'View our Sponsors',
                            'link': '/sponsors',
                        },
                    ]}
                />
            </div>
            <Footer />
        </AppThemeWrapper>
    );
};

export default OrganizersContent;
