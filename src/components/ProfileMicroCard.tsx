import React from 'react';
import { motion } from 'framer-motion';

import { Organizer } from '../data/types/organizers';

const ProfileMicroCard = ({ name, avatar, role = '' }: Organizer) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="h-full rounded-xl border border-sky-digital/20 bg-sky-digital/5 hover:border-sky-digital/40 hover:bg-sky-digital/10 transition-all duration-300 p-2 shadow-[0_0_20px_rgba(56,189,248,0.1)] group"
  >
    <div className="flex flex-wrap">
      {avatar && (
        <div className="w-1/3">
          <img
            alt={name}
            src={avatar}
            draggable="false"
            className="rounded-xl inline border border-sky-digital/20 shadow-[0_0_10px_rgba(56,189,248,0.08)] group-hover:border-sky-digital/40 transition-all duration-300"
            style={{ maxWidth: '100%', maxHeight: '120px' }}
          />
        </div>
      )}
      <div className="w-2/3 flex h-100 px-2 items-center">
        <div>
          <div className="lg:text-xl font-semibold font-mono text-ghost-white mb-1 group-hover:text-sky-digital transition-colors">{name}</div>
          <div className="text-sm font-mono text-slate-400 leading-tight">{role}</div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProfileMicroCard;