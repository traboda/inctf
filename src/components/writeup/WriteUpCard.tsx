import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const PostCardWrapper = styled.a`
  display: block;
  border: 1px solid rgba(56, 189, 248, 0.2);
  background: rgba(56, 189, 248, 0.05);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  text-decoration: none !important;
  height: 100%;
  transition: all 300ms ease;
  color: #F8FAFC;

  h4 {
    font-weight: 600;
    margin-bottom: 8px;
    transition: all 300ms ease;
    color: #F8FAFC;
    font-family: 'Inter', sans-serif;
  }

  div {
    font-size: 14px;
    color: #94A3B8;
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

const WriteUpCard = ({ title, id, category, difficulty }) => {

  return (
    <Link href={`/writeup/${id}`}>
      {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
      }
      <PostCardWrapper className="shadow-lg hover:shadow">
        <h4>{title}</h4>
        <div className="mt-2">
          <span>
            <i className="far fa-fire" /> 
            {' '}
            {difficulty}
          </span>
          <span className="ml-2">
            <i className="far fa-album-collection" /> 
            {' '}
            {category}
          </span>
        </div>
      </PostCardWrapper>
    </Link>
  );
};

export default WriteUpCard;