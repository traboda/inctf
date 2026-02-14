import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const PostCardWrapper = styled.div`
  display: block;
  border: 1px solid rgba(56, 189, 248, 0.2);
  background: rgba(56, 189, 248, 0.05);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  text-decoration: none !important;
  height: 100%;
  transition: all 300ms ease;
  color: #F8FAFC;
  cursor: pointer;

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
    <Link href={`/writeup/${id}`} className="shadow-lg hover:shadow">
      <PostCardWrapper>
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