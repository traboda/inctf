import React from 'react';
import { motion } from 'framer-motion';

type PageFooterExplorer = {
  items: {
    title: string,
    text: string,
    link: string
  }[]
};

const PageFooterExplorer = ({ items }: PageFooterExplorer) => (
  <div className="flex justify-center py-16 items-center relative overflow-hidden">
    {/* Subtle accent gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-digital/5 to-transparent pointer-events-none"></div>
    
    <div className="container py-8 px-4 lg:px-8 relative z-10">
      <div className="font-mono text-xs text-sky-digital mb-6 text-center uppercase tracking-widest">// CONTINUE EXPLORATION</div>
      <div className="w-16 h-0.5 bg-alert-crimson mx-auto mb-10"></div>
      
      <div className="flex flex-wrap justify-center items-center">
        {items.map((i, index) => (
          <motion.div
            className="w-full h-full md:w-1/3 lg:w-1/4 p-2"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a href={i.link} className="flex h-full border border-sky-digital/20 bg-sky-digital/5 hover:border-sky-digital/40 hover:bg-sky-digital/10 shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300 flex-wrap p-3 rounded-xl group">
              <div className="w-4/5 p-2">
                <div className="text-sky-digital font-mono text-lg font-bold tracking-wide group-hover:text-sky-400 transition-colors">
                  {i.title}
                </div>
                <p className="text-sm text-slate-400 font-mono mt-1">{i.text}</p>
              </div>
              <div className="w-1/5 flex text-xl items-center min-h-full justify-end px-1">
                <i className="fa text-sky-digital fa-chevron-right group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default PageFooterExplorer;