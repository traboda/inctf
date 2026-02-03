import React from 'react';
import styled from '@emotion/styled';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import postsIndex from '../src/data/posts/index.json';
import PostCard from '../src/components/blog/PostCard';
import SiteView from '../src/components/SiteView';
import { loadYaml } from '../lib/loadYaml';

export const BlogPage = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #16161F;
    color: white;
`;

export const PageTitleArea = styled.div`
    min-height: 20vh;
    display: flex;
    padding: 5vmin 0;
    align-items: center;
    h1 {
        font-size: calc(1.5rem + 2vw);
        font-weight: 600;
    }
    p {
      color: #AAA;
    }
`;

const BlogListingPage = ({ posts }) => {
  return (
    <SiteView meta={{ title: 'Blog' }}>
      <TopBar />
      <BlogPage>
        <PageTitleArea className="container-lg px-3">
          <div>
            <h1>InCTF Jr. Blog</h1>
            <p style={{ maxWidth: '720px' }}>
              Everything from participant experiences, cyberSec news to our case studies & reports,
              updates & experiments at InCTF are all jotted down on this blog.
            </p>
          </div>
        </PageTitleArea>
        <div className="container-lg px-0">
          <div className="row mx-0">
            {posts.length > 0 ?
              <div>
                {posts.map((p, i) => (
                  <div className="col-md-6 p-2" key={i}>
                    <PostCard {...p} />
                  </div>
                ))}
              </div> :
              <div>No Posts</div>}
          </div>
        </div>
      </BlogPage>
      <Footer />
    </SiteView>
  );
};

export async function getStaticProps() {
  const posts = [];

  Object.keys(postsIndex).forEach((key) => {
    const { query } = postsIndex[key];
    try {
      const post = loadYaml(`src/data/posts/${query.slug}.yaml`);
      posts.push(post);
    } catch (e) {
      console.error(`Failed to load post: ${query.slug}`, e);
    }
  });

  return {
    props: {
      posts,
    },
  };
}

export default BlogListingPage;