"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

// Simple accordion component tailored for the landing page aesthetic
const FAQItem = ({ question, answer, isOpen, onClick }: any) => (
  <div 
    className={`w-full bg-obsidian border ${isOpen ? 'border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.15)]' : 'border-sky-400/10'} rounded-lg mb-4 overflow-hidden transition-all duration-300`}
  >
    <button 
      onClick={onClick}
      className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group hover:bg-sky-400/5 transition-colors"
    >
      <span className="text-white font-bold text-lg font-heading tracking-wide group-hover:text-sky-400 transition-colors">
        {question}
      </span>
      <span className={`text-sky-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
    </button>
    <div 
      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <div className="text-slate-400 font-mono text-sm leading-relaxed border-t border-sky-400/10 pt-4">
        {answer}
      </div>
    </div>
  </div>
);

const LandingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is accommodation provided for finalists?',
      answer: (
        <>
          Accommodation is not provided. General transport is also not provided, except for the transport between Amrita University and the MLR Convention Centre on August 9.
        </>
      )
    },
    {
      question: 'Will finalists receive certificates?',
      answer: (
        <>
          Yes. Certificates will be distributed during the closing ceremony, and all finalists will receive them.
        </>
      )
    },
    {
      question: 'What is the venue for each day?',
      answer: (
        <>
          August 7 and 8 will be held at Amrita Vishwa Vidyapeetham, Bengaluru. August 9 will be held at MLR Convention Centre, JP Nagar, Bengaluru.
        </>
      )
    },
    {
      question: 'What support is available during the finals?',
      answer: (
        <>
          If you encounter a technical issue or need an official hint, clarification, or solution script, contact the organizers directly.
        </>
      )
    },
    {
      question: 'Can top-performing teams receive referrals?',
      answer: (
        <>
          Yes. Outstanding teams may receive referrals from team bi0s to cybersecurity organizations.
        </>
      )
    },
    {
      question: 'Can we use AI assistants during the CTF?',
      answer: (
        <>
          No. Any AI assistant, generative model, locally hosted offline LLM, remote helper, or external solution service is prohibited during the CTF finals.
        </>
      )
    }
  ];

  return (
    <section className="relative py-24 z-20" id="important-information">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <ShieldAlert size={14} /> Finals / Important Information
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide font-heading mb-4">
              Important <span className="text-sky-400">Information</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm">
              What finalists need to know before arriving on site.
            </p>
          </motion.div>
        </div>

        <div className="mb-8 rounded-2xl border border-amber-500/25 bg-amber-500/10 px-5 py-4 text-sm md:text-base text-amber-50/90 leading-relaxed">
          AI usage policy: AI assistants, generative models, local or offline LLMs, remote helpers, and external solution services are prohibited during the CTF finals.
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQItem 
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/faq">
            <motion.button 
              initial={{ opacity: 0, y: 20, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
              whileInView={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              className="px-8 py-3 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono uppercase tracking-wider text-sm transition-all cursor-pointer inline-flex items-center justify-center"
            >
              [ Contact Organizers ]
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
