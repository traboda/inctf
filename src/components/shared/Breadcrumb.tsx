import React from 'react';
import shortid from 'shortid';
import Link from 'next/link';
import styled from '@emotion/styled';

const BreadcrumbWrapper = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    li {
        opacity: 0.75;
        list-style: none;
        margin-right: 0.75rem;
        color: #94A3B8;
        a {
            color: #94A3B8;
            text-decoration: none!important;
            transition: all 0.2s ease;
            &:hover {
                color: #38BDF8;
                text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
            }
        }
        &:after {
            margin-left: 0.75rem;
            content: '/';
            color: #38BDF8;
        }
    }
`;

type Breadcrumb = {
  items: {
    link?: string,
    title?: string,
    isActive?: boolean
  }[]
};

const Breadcrumb = ({ items }: Breadcrumb) => (
  <BreadcrumbWrapper>
    <li>
      <Link href="/">
        <i className="fa fa-home" />
      </Link>
    </li>
    {items.length > 0 &&
        items.map((i) =>
          (<li key={shortid.generate()}>
            {i.isActive ? <span className="text-sky-digital font-bold">{i.title}</span> : (
              <Link href={i?.link || '#'}>
                {i.title}
              </Link>
            )}
          </li>),
        )}
  </BreadcrumbWrapper>);

export default Breadcrumb;