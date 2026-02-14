import React from 'react';
import { motion } from 'framer-motion';

const ProfileSummaryCard = ({
  name, avatar, role = '', designation, description, org:_ = null, linkedIn = null,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="h-full rounded-xl border border-sky-digital/20 bg-sky-digital/5 hover:border-sky-digital/40 hover:bg-sky-digital/10 transition-all duration-300 py-5 px-3 shadow-[0_0_20px_rgba(56,189,248,0.1)] group"
  >
    <div className="text-center p-2">
      <img
        alt={name}
        src={avatar}
        draggable="false"
        className="rounded-xl inline border border-sky-digital/20 shadow-[0_0_15px_rgba(56,189,248,0.08)] group-hover:border-sky-digital/50 transition-all duration-300"
        style={{ maxWidth: '100%', height: '320px' }}
      />
      <div className="text-xl lg:text-2xl font-semibold font-mono text-ghost-white mb-2 mt-5 group-hover:text-sky-digital transition-colors">{name}</div>
      <div className="text-lg font-mono text-sky-400 tracking-wide">{role}</div>
      {linkedIn && (
        <div className="mt-3 text-3xl text-center">
          <a href={linkedIn} target="_blank" className="fab fa-linkedin text-sky-digital hover:text-sky-400 transition-colors" />
        </div>
      )}
    </div>
    <div className="p-2">
      {designation &&
        <div className="text-center mb-2 text-slate-400 font-mono text-sm">
          {typeof designation == 'object' ? designation.map((d, i) => <div key={i}>{d}</div>) : designation}
        </div>}
      <div className="text-slate-300 font-mono text-xs leading-relaxed">
        {description}
      </div>
    </div>
  </motion.div>
);

export default ProfileSummaryCard;