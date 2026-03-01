import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from './shared/Breadcrumb';

const PageHeader = ({ title, breadcrumb = [], description = '' }: { title: string, breadcrumb?: any[], description?: string }) => (
  <div className="flex justify-center items-end w-full relative overflow-hidden">
    <div className="flex w-full container items-center px-2 sm:px-4 lg:px-10 py-4 sm:py-6 lg:py-8" style={{ minHeight: '25vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {breadcrumb?.length > 0 && (
          <div className="w-full text-left mb-1 sm:mb-2">
            <Breadcrumb items={breadcrumb} />
          </div>
        )}
        <div className="w-16 h-0.5 bg-alert-crimson mb-6"></div>
        <h1 className="text-sky-digital text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono py-2 sm:py-4 break-words tracking-wide">{title}</h1>
        {description?.length > 0 && (
          <p className="text-slate-400 font-mono text-xs sm:text-sm md:text-base break-words leading-relaxed" style={{ maxWidth: '100%' }}>
            {description}
          </p>
        )}
      </motion.div>
    </div>
  </div>
);

export default PageHeader;