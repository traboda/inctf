import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { motion } from 'framer-motion';

const AboutGender = ({ data }) => {
  const getDataset = () => ({
    data: [
      data?.genders?.filter(g => g.gender === 1)[0].count,
      data?.genders?.filter(g => g.gender === 2)[0].count,
    ],
    backgroundColor: [
      'rgba(56, 189, 248, 0.8)',
      'rgba(255, 0, 0, 0.8)',
    ],
    borderColor: [
      'rgba(56, 189, 248, 1)',
      'rgba(255, 0, 0, 1)',
    ],
    borderWidth: 2,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="m-auto p-6 rounded-xl border border-sky-digital/20 bg-sky-digital/5"
      style={{ maxWidth: 300 }}
    >
      <div className="text-center mb-4">
        <div className="font-mono text-xs text-sky-digital uppercase tracking-widest">Gender Distribution</div>
      </div>
      <Doughnut
        data={{
          labels: ['Male', 'Female'],
          datasets: [getDataset()],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: '#94A3B8',
                font: {
                  family: 'monospace',
                  size: 11
                }
              }
            }
          }
        }}
      />
    </motion.div>
  );
};

export default AboutGender;