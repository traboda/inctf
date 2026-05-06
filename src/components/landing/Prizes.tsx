import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Briefcase } from 'lucide-react';
import CurrentSponsors from './CurrentSponsors';

const LandingPrizeDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 bg-obsidian z-20" id="prizes">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <Trophy size={14} /> Rewards & Outcomes
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-wide font-heading">
              Prizes, Perks <span className="text-sky-400">& Career Outcomes</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-mono">
              InCTF is not only a competition; it is also a learning and recognition platform for cybersecurity talent.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Prizes Column */}
          <motion.div variants={itemVariants} className="bg-slate-900/40 border border-slate-800 rounded-xl p-8 hover:border-sky-500/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
            <div className="w-14 h-14 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
              <Trophy size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Prizes</h3>
            <p className="text-slate-400 font-mono text-sm leading-relaxed">
              Top performers receive exciting prizes and exclusive InCTF goodies to celebrate their achievements.
            </p>
          </motion.div>

          {/* Certificates & Training Column */}
          <motion.div variants={itemVariants} className="bg-slate-900/40 border border-slate-800 rounded-xl p-8 hover:border-sky-500/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
            <div className="w-14 h-14 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Certificates & Training</h3>
            <p className="text-slate-400 font-mono text-sm leading-relaxed">
              Participants receive certificates, and top performers get access to exclusive online cybersecurity training following the contest.
            </p>
          </motion.div>

          {/* Recognition Column */}
          <motion.div variants={itemVariants} className="bg-slate-900/40 border border-slate-800 rounded-xl p-8 hover:border-sky-500/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
            <div className="w-14 h-14 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Recognition</h3>
            <p className="text-slate-400 font-mono text-sm leading-relaxed">
              Stand out to top recruiters. We highlight recruitment partners and offer exclusive internship opportunities with our sponsor organizations this year.
            </p>
          </motion.div>
        </motion.div>

        {/* Current Sponsors Integration */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8"
        >
          <CurrentSponsors />
        </motion.div>

      </div>
    </section>
  );
};

export default LandingPrizeDetails;