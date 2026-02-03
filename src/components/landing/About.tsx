import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ShieldAlert, Activity, Target, Terminal, ChevronDown, ChevronRight, Lock } from 'lucide-react';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const ClassifiedSection = ({ title, icon: Icon, children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-6 border-l-2 border-sky-digital/30 pl-4 bg-sky-digital/5 p-4 rounded-r-lg hover:bg-sky-digital/10 transition-colors"
  >
    <div className="flex items-center gap-3 mb-2 text-sky-400 font-tactical tracking-wider text-sm uppercase">
      <Icon size={16} />
      <span>{title}</span>
    </div>
    <div className="text-slate-300 font-mono text-sm leading-relaxed whitespace-pre-line">
      {children}
    </div>
  </motion.div>
);

const LandingAboutInCTF = () => (
  <section className="container mx-auto py-20 px-4" id="mission-brief">

    <div className="flex flex-col lg:flex-row gap-12">
      {/* Main Brief Column */}
      <div className="lg:w-1/2">
        <motion.div
          variants={animation}
          initial="hiddenScale"
          whileInView="tacticalFocus"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-black text-white mb-6 flex items-center gap-3">
            <span className="text-alert-crimson"><Terminal size={32} /></span>
            MISSION BRIEF
          </h2>

          <p className="text-lg md:text-xl text-slate-200 border-l-4 border-alert-crimson pl-6 py-2 mb-12 font-medium leading-relaxed bg-gradient-to-r from-alert-crimson/10 to-transparent">
            {data.MissionBrief.summary}
          </p>

          <div className="font-mono text-xs text-sky-digital mb-2">CLASSIFIED BRIEF // EYE ONLY</div>
          <div className="grid gap-4">
            <ClassifiedSection title="SITUATION REPORT" icon={Activity} delay={0.1}>
              <ul className="list-disc list-inside space-y-2">
                {data.ClassifiedBrief.SituationReport.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </ClassifiedSection>

            <ClassifiedSection title="THREAT ASSESSMENT" icon={ShieldAlert} delay={0.2}>
              <ul className="list-disc list-inside space-y-2 text-alert-crimson/90">
                {data.ClassifiedBrief.ThreatAssessment.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </ClassifiedSection>
          </div>
        </motion.div>
      </div>

      {/* Operational Column */}
      <div className="lg:w-1/2">
        <motion.div
          variants={animation}
          initial="hiddenBlur"
          whileInView="tacticalFocus"
          viewport={{ once: true }}
          className="bg-obsidian border border-slate-800 p-6 rounded-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Lock size={120} />
          </div>

          <ClassifiedSection title="OPERATIONAL RESPONSE" icon={Target} delay={0.3}>
            <ul className="list-disc list-inside space-y-2">
              {data.ClassifiedBrief.OperationalResponse.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </ClassifiedSection>

          <ClassifiedSection title="MISSION PARAMETERS" icon={FileText} delay={0.4}>
            <ul className="list-disc list-inside space-y-2">
              {data.ClassifiedBrief.MissionParameters.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </ClassifiedSection>

          <div className="mt-8 p-6 border border-sky-digital/30 bg-sky-digital/5 rounded relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-sky-digital"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-sky-digital"></div>

            <h4 className="font-tactical text-sky-digital text-sm mb-2 uppercase tracking-widest">FINAL DIRECTIVE</h4>
            <p className="font-mono text-slate-300 text-sm italic">
              &quot;{data.ClassifiedBrief.FinalDirective}&quot;
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <Link href="#crew-eligibility" className="flex items-center gap-2 text-sm font-bold text-sky-digital hover:text-white transition-colors uppercase tracking-wider">
              Proceed to Crew Selection <ChevronRight size={16} />
            </Link>
          </div>

        </motion.div>
      </div>
    </div>

  </section>
);

export default LandingAboutInCTF;