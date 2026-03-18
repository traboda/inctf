"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BentoHoverButton({ href, children, className }: { href: string, children: React.ReactNode, className: string }) {
  return (
    <Link href={href} className="w-full md:w-auto">
      <motion.button
        whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(244, 63, 94, 0.4)" }}
        whileTap={{ scale: 0.97 }}
        className={className}
      >
        {children}
      </motion.button>
    </Link>
  );
}
