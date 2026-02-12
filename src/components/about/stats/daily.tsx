import React from 'react';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';

const DailyGraph = ({ data }) => {
  const generateDataset = () => ({
    label: '',
    data: data?.regDateLogs?.map(date => {
      const _date = { ...date };
      delete _date.date;
      return Number(Object.values(_date)[0]);
    }),
    backgroundColor: 'rgba(56, 189, 248, 0.2)',
    borderColor: 'rgba(56, 189, 248, 1)',
    fill: true,
    fillOpacity: 0.4,
    lineTension: 0.4,
    borderWidth: 2,
    pointBackgroundColor: 'rgba(56, 189, 248, 1)',
    pointBorderColor: 'rgba(255, 255, 255, 0.8)',
    pointBorderWidth: 2,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="m-auto p-6 rounded-xl border border-sky-digital/20 bg-sky-digital/5"
      style={{ maxWidth: 500 }}
    >
      <div className="text-center mb-4">
        <div className="font-mono text-xs text-sky-digital uppercase tracking-widest">Daily Registrations</div>
      </div>
      <Line
        data={{
          labels: data?.regDateLogs?.map(date => date.date),
          datasets: [generateDataset()],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              grid: {
                color: 'rgba(56, 189, 248, 0.1)'
              },
              ticks: {
                color: '#94A3B8',
                font: {
                  family: 'monospace',
                  size: 10
                }
              }
            },
            x: {
              grid: {
                color: 'rgba(56, 189, 248, 0.1)'
              },
              ticks: {
                color: '#94A3B8',
                font: {
                  family: 'monospace',
                  size: 9
                }
              }
            }
          }
        }}
      />
    </motion.div>
  );
};

export default DailyGraph;