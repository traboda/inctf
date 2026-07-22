'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPinned, ShieldAlert, UtensilsCrossed, Coffee, BusFront, Presentation, PartyPopper } from 'lucide-react';

const scheduleDays = [
  {
    day: 'August 7, 2026',
    title: 'Phase I: Authentication & Systems Validation',
    venue: 'Amrita Vishwa Vidyapeetham, Bengaluru',
    highlight: 'Reporting Time: 12:00 PM IST',
    items: [
      { icon: CalendarDays, label: 'Authentication Window', value: '2:00 PM - 4:00 PM' },
      { icon: ShieldAlert, label: 'Systems Validation', value: '4:00 PM - 5:30 PM' },
    ],
  },
  {
    day: 'August 8, 2026',
    title: 'Phase II: Investigation (CTF Finals)',
    venue: 'Amrita Vishwa Vidyapeetham, Bengaluru',
    highlight: 'The main competition day',
    items: [
      { icon: Coffee, label: 'Operative Check-In & Breakfast', value: '08:30 AM' },
      { icon: Presentation, label: 'Mission Briefing', value: '09:00 AM' },
      { icon: CalendarDays, label: 'Investigation (CTF) Begins', value: '10:00 AM' },
      { icon: UtensilsCrossed, label: 'Lunch', value: 'Around 01:00 PM' },
      { icon: Coffee, label: 'Refreshments', value: '04:00 PM' },
      { icon: PartyPopper, label: 'Investigation (CTF) Ends', value: '06:00 PM' },
      { icon: UtensilsCrossed, label: 'Dinner', value: 'Around 07:00 PM' },
    ],
  },
  {
    day: 'August 9, 2026',
    title: 'Phase III: Debriefing & Intelligence Summit',
    venue: 'MLR Convention Centre, JP Nagar, Bengaluru',
    highlight: 'Transport to the summit venue will be provided',
    items: [
      { icon: BusFront, label: 'Transportation', value: 'Amrita University to MLR Convention Centre' },
      { icon: Presentation, label: 'Technical Talks & Industry Sessions', value: 'Throughout the day' },
      { icon: CalendarDays, label: 'Networking, Closing, Certificates & Prizes', value: 'Closing session' },
    ],
  },
];

const EventSchedule = () => {
  return (
    <section id="event-schedule" className="relative py-24 z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/inctf/assets/design/Common/grid_pattern.svg')] bg-[length:40px_40px] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4">
            <CalendarDays size={14} /> Event Schedule
          </div>
          <h2 className="font-heading text-white text-3xl md:text-5xl font-black uppercase tracking-wider">
            InCTF <span className="text-sky-digital">Finals</span> Schedule
          </h2>
          <p className="mt-4 text-slate-400 font-mono text-sm md:text-base leading-relaxed">
            Three days of finals, with exact timings, venue details, meals, and the closing summit laid out below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {scheduleDays.map((day, index) => (
            <motion.article
              key={day.day}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative overflow-hidden rounded-2xl border border-sky-500/15 bg-slate-950/75 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),transparent_40%,rgba(244,63,94,0.05))] pointer-events-none" />

              <div className="relative p-6 md:p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400">
                    <CalendarDays size={22} />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400/80">{day.day}</p>
                    <h3 className="mt-1 text-xl font-black text-white leading-tight">{day.title}</h3>
                  </div>
                </div>

                <div className="mb-5 rounded-xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400 font-mono mb-2">
                    <MapPinned size={14} /> Venue
                  </div>
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">{day.venue}</p>
                </div>

                <div className="mb-5 rounded-xl border border-sky-500/20 bg-sky-500/[0.04] p-4">
                  <p className="text-sm font-mono text-sky-300 uppercase tracking-[0.18em]">{day.highlight}</p>
                </div>

                <ul className="space-y-3">
                  {day.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-start gap-3 rounded-lg border border-white/5 bg-black/20 p-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sky-500/10 text-sky-400">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white leading-tight">{item.label}</p>
                          <p className="text-sm text-slate-400">{item.value}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-amber-400/25 bg-amber-400/10 p-5 md:p-6">
            <div className="flex items-center gap-3 text-amber-200 mb-3">
              <ShieldAlert size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.24em]">AI Usage Policy</span>
            </div>
            <p className="text-sm md:text-base text-amber-50/90 leading-relaxed">
              AI assistants, generative models, locally hosted LLMs, remote helpers, and other non-official solution services are prohibited during the CTF finals.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5 md:p-6">
            <div className="flex items-center gap-3 text-sky-300 mb-3">
              <MapPinned size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.24em]">Venue Summary</span>
            </div>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              August 7 and 8 take place at Amrita Vishwa Vidyapeetham, Bengaluru. August 9 moves to MLR Convention Centre, JP Nagar, Bengaluru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;