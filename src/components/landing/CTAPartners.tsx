import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Users, Gift, TrendingUp, Award, Share2, Ticket, Crown, Star, ShieldCheck } from 'lucide-react';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const OutreachSection = styled.section`
  padding: 4rem 0;
`;

const DiscountCard = ({ tier }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-obsidian border border-sky-digital/20 p-6 rounded-lg text-center"
  >
    <div className="text-sky-digital font-bold text-lg mb-2">{tier.phase}</div>
    <div className="text-3xl font-black text-white mb-1 font-heading">{tier.fee}</div>
    <div className="text-alert-crimson font-mono text-sm font-bold bg-alert-crimson/10 inline-block px-2 py-1 rounded border border-alert-crimson/20">
      With Code: {tier.discounted}
    </div>
  </motion.div>
);

const PartnerTierRow = ({ tier }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-sky-digital/10 items-center hover:bg-sky-digital/5 transition-colors px-4">
    <div className="md:col-span-2 text-white font-bold font-heading text-lg flex items-center gap-2">
      {tier.teams === "200+" ? <Crown size={20} className="text-yellow-500" /> : <Star size={16} className="text-sky-600" />}
      {tier.teams} Teams
    </div>
    <div className="md:col-span-3 text-sky-digital font-tactical tracking-wide uppercase text-sm font-bold">
      {tier.title}
    </div>
    <div className="md:col-span-7">
      <ul className="flex flex-wrap gap-x-6 gap-y-1">
        {tier.rewards.map((r: string, i: number) => (
          <li key={i} className="text-slate-400 text-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            {r}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const LandingMissionOutreach = () => {
  return (
    <OutreachSection className="container mx-auto px-4" id="mission-outreach">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 border border-sky-digital/50 text-sky-digital font-tactical text-xs tracking-widest uppercase mb-4 bg-sky-digital/5 rounded-full">
          <Share2 size={14} /> Mission Outreach Unit
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">Institutional Outreach Program</h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {data.MissionOutreach.Objective}
        </p>
      </motion.div>

      {/* Discount Structure */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-2">
          <Ticket className="text-alert-crimson" /> ENROLMENT & ACCESS PROTOCOL
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {data.MissionOutreach.Discounts.map((tier: any, i: number) => (
            <DiscountCard key={i} tier={tier} />
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-4 italic">
          * Mission Outreach Codes provide the lowest available registration fee.
        </p>
      </div>

      {/* Performance Tiers */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-2">
          <Award className="text-sky-digital" /> PERFORMANCE TIERS & RECOGNITION
        </h3>
        <div className="bg-obsidian border border-sky-digital/20 rounded-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-3 bg-sky-digital/10 border-b border-sky-digital/20 font-tactical text-xs text-sky-300 uppercase tracking-widest">
            <div className="col-span-2">Teams Onboarded</div>
            <div className="col-span-3">Operational Title</div>
            <div className="col-span-7">Rewards & Benefits</div>
          </div>

          {data.MissionOutreach.Tiers.map((tier: any, i: number) => (
            <PartnerTierRow key={i} tier={tier} />
          ))}
        </div>
      </div>

      {/* Workflow */}
      <div className="bg-sky-digital/5 border border-sky-digital/20 p-8 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-8 text-center uppercase">Operational Workflow</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {data.MissionOutreach.Workflow.map((step: string, i: number) => (
            <div key={i} className="text-center relative">
              <div className="w-10 h-10 mx-auto bg-obsidian border border-sky-digital rounded-full flex items-center justify-center text-sky-digital font-bold text-lg mb-4 relative z-10">
                {i + 1}
              </div>
              {/* Connector */}
              {i < data.MissionOutreach.Workflow.length - 1 && (
                <div className="hidden md:block absolute top-5 left-1/2 w-full h-[1px] bg-sky-digital/30 -z-0"></div>
              )}
              <p className="text-slate-300 text-sm font-mono leading-tight">{step}</p>
            </div>
          ))}
        </div>

        <div className="bg-alert-crimson/5 border border-alert-crimson/20 p-4 mt-8 rounded flex items-center gap-3 justify-center text-center md:text-left">
          <ShieldCheck className="text-alert-crimson shrink-0" />
          <p className="text-slate-400 text-sm">
            <strong className="text-alert-crimson">OPERATIONAL NOTE:</strong> Only verified and payment-completed registrations using the assigned code are counted.
          </p>
        </div>
      </div>

    </OutreachSection>
  );
};

export default LandingMissionOutreach;