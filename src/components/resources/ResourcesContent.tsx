'use client';

import React from 'react';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';
import PageHeader from '../PageHeader';
import YoutubeVideos from './YoutubeVideos';

const ResourcesContent = () => {
    return (
        <AppThemeWrapper id="resources-page">
            <div className="relative z-10 w-full">
                <PageHeader
                    breadcrumb={[
                        {
                            title: 'Resources',
                            link: '/resources',
                            isActive: true,
                        },
                    ]}
                    title="Resources"
                />
                <div className="container mx-auto px-4 py-12 w-full">
                    <YoutubeVideos />
                </div>
                <Footer />
            </div>
        </AppThemeWrapper>
    );
};

export default ResourcesContent;
