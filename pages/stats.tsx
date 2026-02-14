import React, { useState } from 'react';
import styled from '@emotion/styled';

import TopBar from '../src/components/shared/TopBar';
import SiteView from '../src/components/SiteView';
import YearlyLeaderboard from '../src/components/HallOfFame/YearlyLeaderboard';
import Footer from '../src/components/shared/Footer';
import PageHeader from '../src/components/PageHeader';


const PageWrap = styled.div`
    min-height: 50vh;
    background: #020617;
    display: flex;
    justify-content: center;
`;

type TabButton = {
  isActive: boolean
};

const TabButton = styled.button<TabButton>`
      padding: 0.5rem 1rem 0.5rem 0;
      font-size: 24px;
      font-family: 'Inter', sans-serif;
      background: none;
      border: none;
      font-weight: 600;
      color: ${({ isActive }) => isActive ? '#38BDF8' : '#94A3B8'};
      &:hover, &:focus {
        outline: none!important;
      }
`;

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const eventStats = require(`../src/data/${eventID}/stats/index`).default;

const StatsPage = () => {

  const [year, setYear] = useState(eventStats?.editions[0].year);

  const editions = eventStats?.editions;

  return (<SiteView meta={{ title: 'Results & Statistics' }}>
    <div className="relative bg-obsidian min-h-screen">
      {/* Scanlines Overlay */}
      <div className="scanlines fixed inset-0 pointer-events-none z-50" />

      {/* Starfield Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[10%] left-[5%] w-1 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[20%] left-[15%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[30%] left-[25%] w-1 opacity-15" />
        <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[15%] left-[35%] w-2 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[40%] left-[45%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[50%] left-[55%] w-1 opacity-20" />
        <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[25%] left-[65%] w-2 opacity-15" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[60%] left-[75%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[70%] left-[85%] w-1 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[35%] left-[95%] w-1 opacity-15" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[80%] left-[10%] w-1 opacity-10" />
        <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[45%] left-[20%] w-2 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[90%] left-[30%] w-1 opacity-15" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[55%] left-[40%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[65%] left-[50%] w-1 opacity-20" />
        <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[75%] left-[60%] w-2 opacity-15" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[85%] left-[70%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[95%] left-[80%] w-1 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[5%] left-[90%] w-1 opacity-15" />
      </div>

      <div className="relative z-10">
        <TopBar />
    <PageHeader
      title="Results & Statistics"
      description="The results and statistics of the InCTF Junior editions showcasing the top cyber-security student talents in the country."
      breadcrumb={[
        {
          link: '/championship',
          title: 'Championship',
        },
        {
          link: '/stats',
          isActive: true,
          title: 'Results & Statistics',
        },
      ]}
    />
    <PageWrap>
      <div style={{ maxWidth: '1100px', width: '100%' }}>
        <div className="d-flex align-items-center">
          <div className="container-lg mt-6 px-4">
            {editions.map((y, i) => (
              <TabButton
                key={i}
                isActive={y.year === year}
                onClick={() => setYear(y.year)}
              >
                {y.year}
              </TabButton>
            ))}
          </div>
        </div>
        <div className="container-lg px-4 py-5">
          {editions.filter((y) => y.year === year).map((y, i) =>
            <YearlyLeaderboard data={y} key={i} />,
          )}
        </div>
      </div>
    </PageWrap>
    <Footer />
      </div>
    </div>
  </SiteView>);

};

export default StatsPage;