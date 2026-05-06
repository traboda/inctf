"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
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
      question: "I'm a complete beginner. Can I still participate?",
      answer: (
        <>
          Yes! InCTF is explicitly designed for beginners. We provide guided training, resources, and practice challenges to help you learn from scratch. Check out our <a href="#training" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Training & Learning</a> section to get started.
        </>
      )
    },
    {
      question: "Is InCTF free?",
      answer: (
        <>
          Yes, participation in InCTF is completely free for all eligible students. There are no hidden charges to access the training or compete in the qualifiers.
        </>
      )
    },
    {
      question: "What is the contest format?",
      answer: (
        <>
          InCTF features Jeopardy-style challenges across various categories (Web, Crypto, Forensics, etc.). It starts with online learning, moves to a Qualifier round, and ends with an on-site Final. See the <a href="#timeline" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Mission Timeline</a> for dates.
        </>
      )
    },
    {
      question: "Where can I practice before the contest?",
      answer: (
        <>
          You can practice on <a href="https://traboda.com/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Traboda</a>, read the <a href="https://wiki.bi0s.in/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">bi0s Wiki</a>, or explore our <a href="/writeups" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Writeups</a>. Find all the links in the <a href="#resources" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Resources</a> section.
        </>
      )
    },
    {
      question: "What do participants get after competing?",
      answer: (
        <>
          Top performers receive cash prizes, official certificates, and exclusive internship/hiring opportunities with our network of security partners. Learn more under <a href="#prizes" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Prizes & Perks</a>.
        </>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-obsidian z-20 border-t border-sky-400/10" id="landing-faq">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <ShieldCheck size={14} /> Intelligence / FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide font-heading mb-4">
              Frequently Asked <span className="text-sky-400">Questions</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm">
              Common queries about Operation VAJRA.
            </p>
          </motion.div>
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
              [ View Full FAQ ]
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
