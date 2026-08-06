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
    title: 'Phase III: Conference, Keynotes & Prize Distribution',
    venue: 'MLR Convention Centre, Bengaluru, Karnataka',
    highlight: 'Sunday conference programme from 08:30 AM to 04:00 PM',
    items: [
      { icon: BusFront, label: 'Transport', value: 'Transport from Amrita University will begin at 8:00 AM.' },
      { icon: CalendarDays, label: 'Registration & Networking', value: '08:30 AM - 09:30 AM' },
      { icon: Presentation, label: 'Inaugural Ceremony', value: '09:30 AM - 10:35 AM' },
      { icon: Coffee, label: 'Tea Break & Networking', value: '10:35 AM - 10:45 AM' },
      { icon: Presentation, label: 'Technical Sessions', value: '10:50 AM - 01:00 PM' },
      { icon: UtensilsCrossed, label: 'Lunch & Networking', value: '01:00 PM - 02:00 PM' },
      { icon: Presentation, label: 'Technical Sessions', value: '02:10 PM - 03:00 PM' },
      { icon: PartyPopper, label: 'Closing Ceremony & Prize Distribution', value: '03:10 PM - 04:00 PM' },
    ],
  },
];

const conferenceTimeline = [
  {
    time: '08:30 AM - 09:30 AM',
    title: 'Registration & Networking',
    icon: CalendarDays,
    detail:
      'Check in, collect the conference kit, and connect with finalists, recruiters, sponsors, and cybersecurity professionals before the sessions begin.',
  },
  {
    time: '09:30 AM - 10:35 AM',
    title: 'Inaugural Ceremony',
    icon: Presentation,
    detail:
      'Opening addresses, keynote remarks, memento presentation, and the official group photograph launch the conference day.',
    agenda: [
      'Opening Video & Invocation',
      'Welcome Address',
      'University Address - Dr. Sudhir Patnaik, Professor & Centre Director, Corporate and Industry Relations, Amrita Vishwa Vidyapeetham',
      'Industry Address - Prashant Deo, CTO & Global Head of Security Tools and Engineering, Tata Consultancy Services (TCS)',
      'Industry Address - Veronica Fernandez, Talent Acquisition Director - India, NielsenIQ (NIQ)',
      'Chief Guest Keynote - Jayashree Naik, Vice President & Advisor, KAS Cyber Ventures',
      'Memento Presentation',
      'Group Photograph',
    ],
  },
  {
    time: '10:35 AM - 10:45 AM',
    title: 'Tea Break & Networking',
    icon: Coffee,
    detail:
      'A short refreshment break for speaker interactions, hallway discussions, and sponsor conversations.',
  },
  {
    time: '10:50 AM - 11:30 AM',
    title: 'Attack Surface Management in a Post-Mythos World Swarmed with Frontier AI LLMs',
    icon: Presentation,
    speaker: 'Santosh Mishra, Senior Cybersecurity Consultant, Tata Consultancy Services (TCS)',
    detail:
      'A practical look at how AI is reshaping attack surface management and what teams need to secure rapidly expanding enterprise environments.',
  },
  {
    time: '11:35 AM - 12:15 PM',
    title: 'Decoding the Invisible: A Hacker\'s Path Through Hardware Security and HAM Radio',
    icon: Presentation,
    speaker: 'Sanjay NS, Product Security Engineer, Honeywell',
    detail:
      'A walkthrough of hardware security research, embedded systems, HAM radio, and offensive techniques that surface in real-world assessments.',
  },
  {
    time: '12:15 PM - 01:00 PM',
    title: 'LLM Security',
    icon: Presentation,
    speaker:
      'Dr. Kumaran U., Associate Professor, Department of Computer Science & Engineering, Amrita School of Computing, Bengaluru Campus',
    detail:
      'Threats, vulnerabilities, and defensive patterns for building and operating secure large language model systems.',
  },
  {
    time: '01:00 PM - 02:00 PM',
    title: 'Lunch & Networking',
    icon: UtensilsCrossed,
    detail:
      'Lunch with time to meet the finalist community, industry leaders, sponsors, and recruiters.',
  },
  {
    time: '02:10 PM - 02:35 PM',
    title: 'Connecting the Dots: From Flags to Production',
    icon: Presentation,
    speaker: 'Suraj Kumar, Antibot & Reverse Engineer, NielsenIQ (NIQ)',
    detail:
      'How CTF problem-solving maps to production-grade cybersecurity work, from reverse engineering to applied incident response and defence.',
  },
  {
    time: '02:35 PM - 03:00 PM',
    title: 'Monetise Your CTF Skills',
    icon: Presentation,
    speaker: 'Ayubali Beleri, Product Security Engineer, NielsenIQ (NIQ)',
    detail:
      'Career paths and security disciplines where competitive CTF experience translates directly into professional impact.',
  },
  {
    time: '03:10 PM - 04:00 PM',
    title: 'Closing Ceremony & Prize Distribution',
    icon: PartyPopper,
    detail:
      'Winners are announced, prizes are presented, and the conference concludes with the Vote of Thanks and National Anthem.',
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
            The three-day finals overview is below, followed by the full conference agenda for Sunday, 9 August 2026 at MLR Convention Centre, Bengaluru.
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
              August 7 and 8 take place at Amrita Vishwa Vidyapeetham, Bengaluru. August 9 moves to MLR Convention Centre, Bengaluru, Karnataka for the conference and prize distribution.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-[28px] border border-sky-500/15 bg-slate-950/70 p-6 md:p-8 lg:p-10 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4">
                <Presentation size={14} /> Conference Day Timeline
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wider leading-tight">
                Sunday, 9 August 2026
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-400 font-mono leading-relaxed">
                Keynotes, technical talks, networking windows, and the grand prize distribution at MLR Convention Centre, Bengaluru, Karnataka.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 max-w-md">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400 font-mono mb-2">
                <MapPinned size={14} /> Venue
              </div>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                MLR Convention Centre, Bengaluru, Karnataka
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {conferenceTimeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={`${item.time}-${item.title}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="grid gap-4 rounded-2xl border border-white/8 bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.92))] p-5 md:grid-cols-[190px_1fr] md:items-start"
                >
                  <div className="rounded-xl border border-sky-500/20 bg-sky-500/[0.06] p-4 md:sticky md:top-6">
                    <div className="flex items-center gap-3 text-sky-300">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sky-400/80">Time Slot</p>
                        <p className="mt-1 text-sm font-semibold text-white">{item.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/6 bg-black/20 p-4 md:p-5">
                    <h4 className="text-lg md:text-xl font-black text-white leading-tight">{item.title}</h4>
                    {item.speaker && (
                      <p className="mt-2 text-sm font-mono uppercase tracking-[0.15em] text-sky-300/90">
                        {item.speaker}
                      </p>
                    )}
                    <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">{item.detail}</p>
                    {item.agenda && (
                      <ul className="mt-4 space-y-2">
                        {item.agenda.map((agendaItem) => (
                          <li key={agendaItem} className="flex items-start gap-3 text-sm text-slate-300">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                            <span>{agendaItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;