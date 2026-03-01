'use client';

import React from 'react';
import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import PostCard from './PostCard';

const BlogListingPageContent = ({ posts }: { posts: any[] }) => {
    return (
        <AppThemeWrapper id="blog-listing-page">
            <div className="relative z-10 w-full">
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
                <div className="container mx-auto px-4 pb-12 w-full">
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
            <div className="relative z-10 w-full">
                <Footer />
            </div>
        </AppThemeWrapper>
    );
};

export default BlogListingPageContent;
