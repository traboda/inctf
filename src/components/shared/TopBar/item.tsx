import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';


const ItemDropDown = styled('div')`
    position: absolute;
    top: calc(100% + 6px);
    left: -5px;
    background: rgba(2, 6, 23, 0.95);
    backdrop-filter: blur(12px);
    padding: 1rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(56, 189, 248, 0.3);
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.15), 0 4px 8px rgba(0,0,0,0.4);
    width: 250px;
    max-width: 100vw;
    transition: all 0.2s ease-in;
    opacity: 0;
    pointer-events: none;
    &.c-visible {
      opacity: 1;
      pointer-events: auto;
    }

    a {
      color: #94A3B8 !important;
      padding: 0.5rem !important;
      display: block;
      border-radius: 0.25rem;
      transition: all 0.2s ease;
      
      &:hover {
        color: #38BDF8 !important;
        background: rgba(56, 189, 248, 0.1);
        text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
      }
    }

    @media screen and (max-width: 768px) {
      top: initial;
      bottom: calc(100% + 6px);
    }
`;

const TopBarItem = ({ item, isVisible }) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <Link href={item.link}>{item.label}</Link>
        {(item?.items?.length > 0) && (
          <ItemDropDown className={isOpen && isVisible ? 'c-visible' : ''}>
            {item.items.map((i, index) => (
              <Link key={index} href={i.link} className="block">
                {i.label}
                {i?.badge && (
                  <div className={`${i?.badgeColor ? i.badgeColor : 'bg-green-100'} px-2 py-1 ml-1 inline rounded text-sm`}>
                    {i.badge}
                  </div>
                )}
              </Link>
            ))}
          </ItemDropDown>
        )}
      </div>
    </div>
  );

};

export default TopBarItem;