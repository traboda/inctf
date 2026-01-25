import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import TopBar from '../../src/components/shared/TopBar';
import Footer from '../../src/components/shared/Footer';
import SiteView from '../../src/components/SiteView';
import postsIndex from '../../src/data/posts/index.json';
import { loadYaml } from '../../lib/loadYaml';

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

const BlogPostPage = ({ data }) => {
  return data ?
    <SiteView meta={{ title: `${data.title} - Blog`, description: data.description }}>
      <TopBar />
      <BlogWrap>
        <TitleArea>
          <div className="container-lg p-4" style={{ maxWidth: '900px' }}>
            <h1>{data.title}</h1>
            <div>
              <div className="mr-3 d-inline-block my-1">
                <i className="far fa-calendar-alt mr-1" />
                {' '}
                {new Date(data.date).toDateString()}
              </div>
              <div className="d-inline-block my-1">
                <i className="far fa-user mr-1" />
                {' '}
                {data.author}
              </div>
            </div>
          </div>
        </TitleArea>
        <div className="container-lg py-4 px-3" style={{ maxWidth: '900px' }}>
          <div>
            <ReactMarkdown plugins={[remarkGfm]}>
              {data?.content}
            </ReactMarkdown>
          </div>
        </div>
      </BlogWrap>
      <Footer />
    </SiteView> :
    <SiteView meta={{ title: 'Blog Post Not Found' }}>
      <TopBar />
      <Footer />
    </SiteView>;
};

export async function getStaticPaths() {
  const paths = Object.keys(postsIndex).map((key) => {
    const { query } = postsIndex[key];
    return {
      params: { slug: query.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const data = loadYaml(`src/data/posts/${params.slug}.yaml`);
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {
        data: null,
      },
    };
  }
}

export default BlogPostPage;