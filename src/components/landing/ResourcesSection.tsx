import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Terminal, PlaySquare, FileText, ArrowRight, Library } from 'lucide-react';
import Link from 'next/link';

const MotionLink = motion(Link);
const LandingResourcesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const resources = [
    {
      title: "bi0s Wiki",
      description: "Core learning material for cybersecurity concepts and challenge-solving.",
      btnText: "Open Wiki",
      icon: <BookOpen size={28} />,
      link: "https://wiki.bi0s.in/"
    },
    {
      title: "Challenge Archive",
      description: "Practice using past challenges and archive resources.",
      btnText: "Start Practicing",
      icon: <Terminal size={28} />,
      link: "https://traboda.com/"
    },
    {
      title: "Training Videos / Learning Content",
      description: "Use the training schedule and linked learning resources already exposed by InCTF.",
      btnText: "View Training",
      icon: <PlaySquare size={28} />,
      link: "/resources#videos"
    },
    {
      title: "Writeups",
      description: "Use the published writeups section for revision and learning.",
      btnText: "Read Writeups",
      icon: <FileText size={28} />,
      link: "/writeups"
    }
  ];

  return (
    <section className="relative py-20 bg-obsidian z-20 border-t border-sky-digital/10" id="resources">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <Library size={14} /> Knowledge Base
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-wide font-heading">
              Resources to <span className="text-sky-400">Level Up</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resources.map((resource, index) => (
            <motion.div 
              key={index}
              variants={itemVariants} 
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-sky-500/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{resource.title}</h3>
              <p className="text-slate-400 font-mono text-sm leading-relaxed mb-8 flex-grow">
                {resource.description}
              </p>
              
              <MotionLink
                href={resource.link}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(244,63,94,0.4)" }}
                whileTap={{ scale: 0.98 }}
                style={{ transformOrigin: "left center" }}
                className="mt-auto inline-flex group/btn w-full py-3 bg-gradient-to-br from-red-900 to-red-800 border border-white/40 text-white font-mono tracking-wide items-center justify-center text-xs uppercase cursor-pointer"
              >
                [ {resource.btnText} ]
                <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </MotionLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LandingResourcesSection;
