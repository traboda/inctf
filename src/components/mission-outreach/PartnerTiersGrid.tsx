import React from 'react';
import styled from '@emotion/styled';

const GridContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1130px;
  margin: 60px auto 0;
  padding: 0 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CenteredRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PartnerCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 365px;
  min-height: 276px;
  background: rgba(56, 189, 248, 0.11);
  border: 1px solid #38BDF8;
  box-shadow: 0px 0px 20px #38BDF8;
  border-radius: 20px;
  padding: 20px;
  position: relative;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
`;

const MedalEmoji = styled.span`
  font-size: 55px;
  line-height: 1;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const PartnerTitle = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 20px;
  line-height: 26px;
  color: #FFFFFF;
  margin: 0;
`;

const TeamCount = styled.span`
  font-family: 'Jersey 10', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: #38BDF8;
`;

const RewardsTitle = styled.h4`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 15px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 16px 0 12px;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #38BDF8;
`;

const CheckIcon = styled.img`
  width: 19px;
  height: 19px;
  flex-shrink: 0;
`;

// Partner data matching Figma layout EXACTLY
// Row 1: Champion, Mega, Elite
// Row 2: Pro, Advanced, Core
// Row 3: Active, Starter

interface PartnerData {
    id: string;
    name: string;
    medal: string | null;
    teams: string;
    benefits: string[];
}

const row1Partners: PartnerData[] = [
    {
        id: 'champion',
        name: 'Champion Partner',
        medal: '🥇',
        teams: '200+ Teams',
        benefits: [
            '₹30,000 cash reward',
            'Train travel reimbursement to Bangalore (up to ₹5,000 total)',
            'All benefits from lower tiers (excluding cash rewards)'
        ]
    },
    {
        id: 'mega',
        name: 'Mega Partner',
        medal: '🥈',
        teams: '150 Teams',
        benefits: [
            '₹20,000 cash reward',
            'Train travel reimbursement to Bangalore (up to ₹5,000 total)',
            'All benefits from lower tiers (excluding cash rewards)'
        ]
    },
    {
        id: 'elite',
        name: 'Elite Partner',
        medal: '🥉',
        teams: '100 Teams',
        benefits: [
            '₹15,000 cash reward',
            'All benefits from lower tiers (excluding cash rewards)',
            'Invitation as a volunteer'
        ]
    }
];

const row2Partners: PartnerData[] = [
    {
        id: 'pro',
        name: 'Pro Partner',
        medal: null,
        teams: '75 Teams',
        benefits: [
            '₹10,000 cash reward',
            'All benefits from lower tiers (excluding cash rewards)'
        ]
    },
    {
        id: 'advanced',
        name: 'Advanced Partner',
        medal: null,
        teams: '50 Teams',
        benefits: [
            '₹7,500 cash reward',
            'All benefits from lower tiers (excluding cash rewards)'
        ]
    },
    {
        id: 'core',
        name: 'Core Partner',
        medal: null,
        teams: '25 Teams',
        benefits: [
            '₹5,000 worth of gadgets',
            'All benefits from lower tiers'
        ]
    }
];

const row3Partners: PartnerData[] = [
    {
        id: 'active',
        name: 'Active Partner',
        medal: null,
        teams: '15 Teams',
        benefits: [
            'InCTF-branded bag',
            'All benefits from lower tiers'
        ]
    },
    {
        id: 'starter',
        name: 'Starter Partner',
        medal: null,
        teams: '10 Teams',
        benefits: [
            'InCTF participation certificate',
            'InCTF T-shirt',
            'Official Mission Outreach Certificate',
            'Recognition on official website and social platforms'
        ]
    }
];

const PartnerCard2 = ({ partner }: { partner: PartnerData }) => (
    <PartnerCard>
        <CardHeader>
            {partner.medal && <MedalEmoji>{partner.medal}</MedalEmoji>}
            <TitleBlock>
                <PartnerTitle>{partner.name}</PartnerTitle>
                <TeamCount>{partner.teams}</TeamCount>
            </TitleBlock>
        </CardHeader>

        <RewardsTitle>Rewards & Benefits</RewardsTitle>

        <BenefitsList>
            {partner.benefits.map((benefit, idx) => (
                <BenefitItem key={idx}>
                    <CheckIcon
                        src="/inctf/assets/design/MissionOutreachpage/checked.png"
                        alt="✓"
                    />
                    <span>{benefit}</span>
                </BenefitItem>
            ))}
        </BenefitsList>
    </PartnerCard>
);

const PartnerTiersGrid = () => {
    return (
        <GridContainer>
            {/* Row 1 - Champion, Mega, Elite (3 cards) */}
            <Row>
                {row1Partners.map(partner => (
                    <PartnerCard2 key={partner.id} partner={partner} />
                ))}
            </Row>

            {/* Row 2 - Pro, Advanced, Core (3 cards) */}
            <Row>
                {row2Partners.map(partner => (
                    <PartnerCard2 key={partner.id} partner={partner} />
                ))}
            </Row>

            {/* Row 3 - Active, Starter (2 cards centered) */}
            <CenteredRow>
                {row3Partners.map(partner => (
                    <PartnerCard2 key={partner.id} partner={partner} />
                ))}
            </CenteredRow>
        </GridContainer>
    );
};

export default PartnerTiersGrid;

