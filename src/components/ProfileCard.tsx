import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  photo: string;
  desg?: string | null;
  org?: string | null;
  linkedIn?: string | null;
  twitter?: string | null;
}

const ProfileCard = ({
  name, photo, desg = '', org = null, linkedIn = null,
}: ProfileCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="h-full text-center rounded-xl border border-sky-digital/20 bg-sky-digital/5 hover:border-sky-digital/40 hover:bg-sky-digital/10 transition-all duration-300 py-5 px-3 shadow-[0_0_20px_rgba(56,189,248,0.1)] group"
  >
    <img
      alt={name}
      src={photo}
      draggable="false"
      className="rounded-xl inline border border-sky-digital/20 shadow-[0_0_15px_rgba(56,189,248,0.08)] group-hover:border-sky-digital/50 transition-all duration-300"
      style={{ maxWidth: '100%', height: '220px' }}
    />
    <div className="text-xl lg:text-2xl font-semibold font-mono text-ghost-white mb-2 mt-3 group-hover:text-sky-digital transition-colors">{name}</div>
    <div className="text-slate-400 font-mono text-sm">{desg}</div>
    {org && <div className="text-lg text-sky-400 font-mono mt-1">{org}</div>}
    {linkedIn && (
      <div className="mt-3 text-3xl text-center">
        <a href={linkedIn} target="_blank" className="fab fa-linkedin text-sky-digital hover:text-sky-400 transition-colors" />
      </div>
    )}
  </motion.div>
);

export default ProfileCard;