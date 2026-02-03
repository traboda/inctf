import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const PostCardWrapper = styled.a`
  display: block;
  border-width: 1px;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  text-decoration: none !important;
  height: 100%;
  transition: all 200ms ease-in;

  h4 {
    font-weight: 600;
    margin-bottom: 8px;
    transition: all 200ms ease-in;
  }

  div {
    font-size: 14px;
  }

  &:hover {
    border-color: #fd7e14;

    h4 {
      color: #fd7e14;
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