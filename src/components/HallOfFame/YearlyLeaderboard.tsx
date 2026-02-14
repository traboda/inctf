import React, { useState } from 'react';
import Select from 'react-select';
import styled from '@emotion/styled';
import shortid from 'shortid';


import IndianStates from '../../data/indian-states';
import { EditionStats } from '../../data/types/stats';

import FameCard from './FameCard';
import ChampionCard from './ChampionCard';

const SearchBar = styled.div`
    background: rgba(2, 6, 23, 0.6);
    border-radius: 0.5rem;
    z-index: 6000;
    input {
        display: flex;
        background: rgba(2, 6, 23, 0.8);
        border: 2px solid rgba(56, 189, 248, 0.3);
        padding: 0.5rem 0.75rem;
        border-radius: 0.35rem;
        color: #F8FAFC;
        width: 100%;
        font-family: 'JetBrains Mono', monospace;
        &:focus {
          outline: none;
          border-color: #38BDF8;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
        }
        &::placeholder {
          color: #94A3B8;
        }
    }
    .state-filter-select {
         &:focus {
              outline: none!important;
              border-color: #38BDF8!important;
         }
         .state-filter__control {
            background: rgba(2, 6, 23, 0.8);
            border: 2px solid rgba(56, 189, 248, 0.3);
            border-radius: 0.35rem;
            &:focus {
              outline: none;
              border-color: #38BDF8;
            }
        }
        .state-filter__single-value {
            color: #38BDF8!important;
            font-family: 'JetBrains Mono', monospace;
        }
        input {
            border: none!important;
            box-shadow: none!important;          
            color: #38BDF8!important;
            &:focus {
                outline: none;
            }
        }
        .state-filter__menu {
             background: rgba(2, 6, 23, 0.95);
             border: 1px solid rgba(56, 189, 248, 0.3);
             color: #F8FAFC;
             outline: none!important;
             .state-filter__option{
                color: #94A3B8;
                font-family: 'JetBrains Mono', monospace;
                &:hover {
                    background: rgba(56, 189, 248, 0.2)!important;
                    color: #F8FAFC;
                }
                 &:focus {
              outline: none!important;
              border-color: #38BDF8!important;
         }
             }
        }
    }
`;



const GridHeight = styled.div`
& > div > div.react-reveal {
  height: 100% !important;
}
`;

type YearlyLeaderboard = {
  data: EditionStats
};

// const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;

const YearlyLeaderboard = ({ data }: YearlyLeaderboard) => {

  const [state, setState] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const applicableStates = () => {
    const leaderboard = data?.results?.finalists;
    const flags = [], output = [], l = leaderboard.length;
    let i;
    for (i = 0; i < l; i++) {
      if (flags[leaderboard[i].state]) continue;
      flags[leaderboard[i].state] = true;
      output.push(leaderboard[i].state);
    }
    return IndianStates.filter((s) => output.includes(s.value));
  };

  const getStateObj = () => {
    const s = IndianStates.find((s) => s.value === state);
    if (s) {
      return s;
    } else {
      return null;
    }
  };

  return (<div>
    {data?.results?.champions?.length > 0 &&
    <div className="py-6">
      <div className="py-2">
        <h3 style={{ color: '#38BDF8' }} className="mb-4 text-5xl font-semibold font-heading">Champions</h3>
        <p className="text-lg opacity-80 mb-3 font-mono text-slate-satellite">
          The InCTF Junior 
          {' '}
          {data.year}
          {' '}
          champions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.results.champions.map((c) =>
          (<div className="p-4 bg-white rounded-lg border" key={shortid.generate()}>
            <div>
              <ChampionCard {...c} />
            </div>
          </div>),
        )}
      </div>
    </div>}
    {data?.results?.top10?.length > 0 &&
    <div className="py-6">
      <div className="py-2">
        <h3 style={{ color: '#38BDF8' }} className="mb-4 text-5xl font-semibold font-heading">Top 10 Finalists</h3>
        <p className="text-lg opacity-80 mb-3 font-mono text-slate-satellite">
          The top 10 finalists of InCTF Junior 
          {' '}
          {data?.year}

        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {data.results.top10.map((c) =>
          (<div className="p-4 bg-white rounded-lg border" key={shortid.generate()}>
            <div>
              <ChampionCard {...c} />
            </div>
          </div>),
        )}
      </div>
    </div>}
    {data?.results?.topWomen?.length > 0 &&
    <div className="py-6">
      <div className="py-2">
        <h3 style={{ color: '#38BDF8' }} className="mb-4 text-5xl font-semibold font-heading">Top Women Achievers</h3>
        <p className="text-lg opacity-80 mb-3 font-mono text-slate-satellite">
          The top Women Achievers of InCTF Junior 
          {' '}
          {data?.year}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {data.results.topWomen.map((c) =>
          (<div className="p-4 bg-white rounded-lg border" key={shortid.generate()}>
            <div>
              <ChampionCard {...c} />
            </div>
          </div>),
        )}
      </div>
    </div>}
    {/*<SchoolLeaderboard schools={schools} />*/}

    {data?.results?.finalists?.length > 0 &&
    <div className="py-3">
      <div className="py-6">
        <h3 style={{ color: '#38BDF8' }} className="text-5xl font-semibold mb-2 font-heading">National-Level Finalists</h3>
        <p className="mb-3 opacity-80 text-lg font-mono text-slate-satellite">
          Top participants who qualified for the national-level finals, ranked according to final published
          scoreboard based on most points earned by capturing the most number of flags in the lowest time.
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="md:w-full mb-2">
          <SearchBar className="flex flex-wrap bg-white p-2 mx-0 border">
            <div className="md:w-2/3 p-2 flex items-center">
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.currentTarget.value)}
                placeholder="Search for names"
              />
            </div>
            <div className="md:w-1/3 pr-4 pl-4 p-1 flex items-center">
              <div className="w-full">
                <Select
                  aria-label="user-state-selector"
                  name="state"
                  className="state-filter-select"
                  classNamePrefix="state-filter"
                  options={[{ value: null, label: 'All States/UT' }, ...applicableStates()]}
                  menuPlacement="auto"
                  placeholder="Filter by State/UT"
                  noOptionsMessage={() => <div>No States/Provinces/UT could be found</div>}
                  onChange={(s) => setState(s.value)}
                  value={getStateObj()}
                />
              </div>
            </div>
          </SearchBar>
        </div>
        <GridHeight className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-3 w-full">
          {data.results?.finalists.filter((s) =>
            (keyword ? (s.name.startsWith(keyword) || s.username.startsWith(keyword)) : true) &&
                        (state ? s.state === state : true),
          ).map((l, i) => (
            <div key={i}>
              <FameCard {...l} key={shortid.generate()} />
            </div>
          ))}
        </GridHeight>
        <div style={{ color: '#999', fontSize: '11px' }} className="py-3 p-2">
          <li>The leaderboard only includes participants who have earned at-least 1 point in the finale.</li>
          <li>Participants with incomplete profile information, and who failed to verify their identity as a school student have been excluded from the listing.</li>
          <li>Some information may not be complete, or may have inaccuracies due to limitations of available data.</li>
        </div>
      </div>
    </div>
    }
  </div>);
};

export default YearlyLeaderboard;