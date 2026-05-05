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
      color: #F8FAFC !important; /* ghost-white */
      padding: 0.65rem 0.5rem !important;
      display: flex;
      align-items: center;
      justify-content: justify;
      border-radius: 0.25rem;
      transition: all 0.2s ease;
      font-size: 14px;
      font-weight: 500;
      
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

    /* Bridge the gap between parent and dropdown */
    &:before {
      content: '';
      position: absolute;
      top: -10px;
      left: 0;
      width: 100%;
      height: 10px;
      background: transparent;
    }
`;

const TopBarItem = ({ item, isVisible }) => {

  const [isOpen, setOpen] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const hasItems = item?.items?.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150); // 150ms buffer
  };

  const labelContent = (
    <>
      {item.label}
      {hasItems && (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, marginLeft: '4px' }}>
          <path d="m6 9 6 6 6-6"/>
        </svg>
      )}
    </>
  );

  return (
    <div>
      <div 
        className="relative" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        {hasItems || item.link === '#' ? (
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-1 cursor-default"
          >
            {labelContent}
          </a>
        ) : (
          <Link 
            href={item.link}
            className="flex items-center gap-1"
          >
            {labelContent}
          </Link>
        )}
        
        {hasItems && (
          <ItemDropDown className={isOpen && isVisible ? 'c-visible' : ''}>
            {item.items.map((i, index) => (
              <Link key={index} href={i.link} className="block">
                {i.label}
                {i?.badge && (
                  <span className={`${i?.badgeColor ? i.badgeColor : 'bg-green-100 text-green-800'} px-2 py-0.5 ml-2 inline-block rounded text-[11px] font-bold uppercase tracking-tight`}>
                    {i.badge}
                  </span>
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