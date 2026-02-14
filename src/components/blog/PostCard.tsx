import React from 'react';
import styled from '@emotion/styled';

const PostCardWrapper = styled.a`
    display: block;
    border: 1px solid rgba(56, 189, 248, 0.2);
    background: rgba(56, 189, 248, 0.05);
    padding: 1rem 1.5rem;
    border-radius: 10px;
    text-decoration: none!important;
    height: 100%;
    transition: all 300ms ease;
    
    h4 {
       color: #F8FAFC;
       font-weight: 600;
       margin-bottom: 8px;
       font-family: 'Inter', sans-serif;
       transition: all 300ms ease;
    }
    div {
       color: #94A3B8;
       font-size: 12px;
       margin: 5px 0;
       font-family: 'JetBrains Mono', monospace;
    }
    p {
      font-size: 14px;
      color: #94A3B8;
      margin-bottom: 0;
      font-family: 'JetBrains Mono', monospace;
    }
    &:hover {
      border-color: #38BDF8;
      background: rgba(56, 189, 248, 0.1);
      box-shadow: 0 0 25px rgba(56, 189, 248, 0.15);
      
      h4 {
        color: #38BDF8;
      }
    }
`;

const PostCard = ({
  title, date, slug, category, tags, description,
}) => {

  return (<PostCardWrapper href={`/posts/${slug}`}>
    <h4>{title}</h4>
    <div>
      <i className="far fa-calendar" />
      {' '}
      {date ? new Date(date).toDateString() : ''}
      <span className="px-1">|</span>
      <span>
        <i className="far fa-album-collection" />
        {' '}
        {category}
      </span>
      <span className="px-1">|</span>
      <span>
        <i className="far fa-tags" />
        {' '}
        {tags}
      </span>
    </div>
    <p>{description}</p>
  </PostCardWrapper>);
};

export default PostCard;