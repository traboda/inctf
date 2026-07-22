'use client';
import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Youtube, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
    {
        label: 'Discord',
        href: 'https://discord.com/invite/uZ2yahXyMd',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
        )
    },
    {
        label: 'Twitter / X',
        href: 'https://twitter.com/InCTF',
        icon: <Twitter className="w-5 h-5" />
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/inctf.in',
        icon: <Instagram className="w-5 h-5" />
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/c/InCTF',
        icon: <Youtube className="w-5 h-5" />
    }
];

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'CTF Rules', href: '/#ctf-rules-guidelines' },
    { name: 'Training', href: '/trainings' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
];

const Footer = () => {
    return (
        <footer className="w-full relative z-10 border-t border-white/5 overflow-hidden">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

            <div className="container mx-auto px-6 pt-16 pb-10">

                {/* ── Finals Schedule CTA ── */}
                <div className="flex justify-center mb-14">
                    <Link href="/#event-schedule">
                        <motion.button
                            initial={{ opacity: 0, y: 10, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                            whileInView={{ opacity: 1, y: 0, boxShadow: "4px 4px 0 rgba(255,255,255,0.5)" }}
                            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(244,63,94,0.6), 4px 4px 0 rgba(255,255,255,0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-red-900 to-red-800 border-2 border-white/60 text-white font-mono tracking-widest uppercase text-sm font-black cursor-pointer"
                        >

                            [ View Event Schedule ]
                        </motion.button>
                    </Link>
                </div>

                {/* ── 3-col grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-14">

                    {/* Col 1 — Logo + tagline */}
                    <div className="flex flex-col items-center md:items-start gap-5">
                        <img
                            src="/inctf/assets/logo_light.png"
                            alt="Amrita InCTF"
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                        <p className="text-xs md:text-sm font-mono text-slate-400 leading-relaxed max-w-xs">
                            India&apos;s national cybersecurity championship &mdash; since 2010.
                        </p>
                        {/* bi0s logo */}
                        <div className="flex flex-col gap-2 pt-2">
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest opacity-60">Powered By</span>
                            <img
                                src="/assets/images/logos/bi0s_dark.png"
                                alt="Team bi0s"
                                className="h-6 w-auto invert opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>

                    {/* Col 2 — Navigation */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-[11px] font-mono text-sky-digital/80 uppercase tracking-[0.25em] font-black mb-8">
                            Navigate
                        </h4>
                        <nav className="grid grid-cols-2 gap-x-10 gap-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-mono text-slate-300 hover:text-sky-digital transition-colors flex items-center gap-1.5 group"
                                >
                                    <span className="text-sky-digital/0 group-hover:text-sky-digital/70 transition-colors text-xs">›</span>
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Col 3 — Socials + Email */}
                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex flex-col items-center md:items-end gap-4">
                            <h4 className="text-[11px] font-mono text-sky-digital/80 uppercase tracking-[0.25em] font-black mb-8">
                                Community
                            </h4>
                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="w-10 h-10 flex items-center justify-center bg-white/[0.04] border border-white/10 rounded-lg text-slate-400 hover:text-sky-digital hover:border-sky-digital/50 hover:bg-sky-digital/5 hover:shadow-[0_0_12px_rgba(56,189,248,0.15)] transition-all duration-300"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a
                            href="mailto:inctf@am.amrita.edu"
                            className="flex items-center gap-2 text-slate-300 hover:text-sky-digital font-mono text-sm transition-colors group"
                        >
                            <Mail size={14} className="group-hover:scale-110 transition-transform shrink-0" />
                            inctf@am.amrita.edu
                        </a>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-ghost-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">
                        © Amrita InCTF 2026 — All Rights Reserved
                    </p>
                    <div className="flex gap-6 text-[10px] font-mono text-ghost-white/25 uppercase tracking-[0.15em]">
                        <Link href="/privacy" className="hover:text-sky-digital transition-colors">Privacy Policy</Link>
                        <Link href="/rules" className="hover:text-sky-digital transition-colors">Rules & Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;