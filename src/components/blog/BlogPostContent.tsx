'use client';

import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import AppThemeWrapper from '../shared/AppThemeWrapper';
import Footer from '../shared/Footer';

const BlogWrap = styled.section`
    background: #223;
    color: #eee;
`;

const TitleArea = styled.div`
    padding: 5vh 0;
    min-height: 45vh;
    display: flex;
    align-items: center;
    background: rgba(0,0,50,0.35);
    width: 100%;
    h1 {
        font-size: calc(1.5rem + 2vw);
        margin-bottom: 5px;
        color: white;
        font-weight: 900;
    }
    div {
        color: #AAA;
    }
`;

const BlogPostContent = ({ data }: { data: any }) => {
    return data ? (
        <AppThemeWrapper id="blog-post-page">
            <div className="relative z-10 w-full">
                <BlogWrap>
                    <TitleArea>
                        <div className="container-lg p-4 mx-auto" style={{ maxWidth: '900px' }}>
                            <h1>{data.title}</h1>
                            <div>
                                <div className="mr-3 inline-block my-1">
                                    <i className="far fa-calendar-alt mr-1" />
                                    {' '}
                                    {new Date(data.date).toDateString()}
                                </div>
                                <div className="inline-block my-1 ml-4">
                                    <i className="far fa-user mr-1" />
                                    {' '}
                                    {data.author}
                                </div>
                            </div>
                        </div>
                    </TitleArea>
                    <div className="container-lg py-4 px-3 mx-auto" style={{ maxWidth: '900px' }}>
                        <div className="prose prose-invert prose-sky max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {data?.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </BlogWrap>
            </div>
            <Footer />
        </AppThemeWrapper>
    ) : (
        <AppThemeWrapper id="blog-post-not-found">
            <div className="relative z-10 min-h-[50vh] flex items-center justify-center w-full">
                <h1 className="text-4xl text-white font-mono">Post Not Found</h1>
            </div>
            <Footer />
        </AppThemeWrapper>
    );
};

export default BlogPostContent;
