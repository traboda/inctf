import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

const INDIA_TOPO_JSON = require('../../../data/india.topo.json');

const StateWiseRegistrationMap = ({ data }) => {
  const geographyStyle = {
    default: {
      outline: 'none',
      stroke: 'rgba(56, 189, 248, 0.2)',
      strokeWidth: 0.5,
    },
    hover: {
      fill: 'rgba(56, 189, 248, 0.3)',
      transition: 'all 250ms',
      outline: 'none',
      stroke: 'rgba(56, 189, 248, 0.6)',
      strokeWidth: 1,
    },
    pressed: {
      outline: 'none',
    },
  };

  const getStateVal = (code) => {
    if (data?.states?.length > 0) {
      const fil = data.states.filter((s) => (s.state === code));
      if (fil?.length > 0)
        return fil[0].count;
    }
    return 0;
  };

  const getHeatMapData = () => {
    return [
      { id: 'AP', state: 'Andhra Pradesh', value: getStateVal('IN-AP') },
      { id: 'AR', state: 'Arunachal Pradesh', value: getStateVal('IN-AR') },
      { id: 'AS', state: 'Assam', value: getStateVal('IN-AS') },
      { id: 'BR', state: 'Bihar', value: getStateVal('IN-BR') },
      { id: 'CT', state: 'Chhattisgarh', value: getStateVal('IN-CT') },
      { id: 'GA', state: 'Goa', value: getStateVal('IN-GA') },
      { id: 'GJ', state: 'Gujarat', value: getStateVal('IN-GJ') },
      { id: 'HR', state: 'Haryana', value: getStateVal('IN-HR') },
      { id: 'HP', state: 'Himachal Pradesh', value: getStateVal('IN-HP') },
      { id: 'JH', state: 'Jharkhand', value: getStateVal('IN-JH') },
      { id: 'KA', state: 'Karnataka', value: getStateVal('IN-KA') },
      { id: 'KL', state: 'Kerala', value: getStateVal('IN-KL') },
      { id: 'MP', state: 'Madhya Pradesh', value: getStateVal('IN-MP') },
      { id: 'MH', state: 'Maharashtra', value: getStateVal('IN-MH') },
      { id: 'MN', state: 'Manipur', value: getStateVal('IN-MN') },
      { id: 'ML', state: 'Meghalaya', value: getStateVal('IN-ML') },
      { id: 'MZ', state: 'Mizoram', value: getStateVal('IN-MZ') },
      { id: 'NL', state: 'Nagaland', value: getStateVal('IN-NL') },
      { id: 'OR', state: 'Odisha', value: getStateVal('IN-OR') },
      { id: 'PB', state: 'Punjab', value: getStateVal('IN-PB') },
      { id: 'RJ', state: 'Rajasthan', value: getStateVal('IN-RJ') },
      { id: 'SK', state: 'Sikkim', value: getStateVal('IN-SK') },
      { id: 'TN', state: 'Tamil Nadu', value: getStateVal('IN-TN') },
      { id: 'TG', state: 'Telangana', value: getStateVal('IN-TG') },
      { id: 'TR', state: 'Tripura', value: getStateVal('IN-TR') },
      { id: 'UT', state: 'Uttarakhand', value: getStateVal('IN-UT') },
      { id: 'UP', state: 'Uttar Pradesh', value: getStateVal('IN-UP') },
      { id: 'WB', state: 'West Bengal', value: getStateVal('IN-WB') },
      { id: 'AN', state: 'Andaman and Nicobar Islands', value: getStateVal('IN-AN') },
      { id: 'CH', state: 'Chandigarh', value: getStateVal('IN-CH') },
      { id: 'DN', state: 'Dadra and Nagar Haveli', value: getStateVal('IN-DN') },
      { id: 'DD', state: 'Daman and Diu', value: getStateVal('IN-DD') },
      { id: 'DL', state: 'Delhi', value: getStateVal('IN-DL') },
      { id: 'JK', state: 'Jammu and Kashmir', value: getStateVal('IN-JK') },
      { id: 'LA', state: 'Ladakh', value: getStateVal('IN-LA') },
      { id: 'LD', state: 'Lakshadweep', value: getStateVal('IN-LD') },
      { id: 'PY', state: 'Puducherry', value: getStateVal('IN-PY') },
    ];
  };

  const colorScale = (val) => {
    if (data?.registrations > 0) {
      const pc = (val / data?.registrations) * 1000;
      if (pc > 50) return 'rgba(255, 0, 0, 0.9)';
      if (pc > 40) return 'rgba(255, 0, 0, 0.7)';
      if (pc > 30) return 'rgba(255, 0, 0, 0.5)';
      if (pc > 10) return 'rgba(56, 189, 248, 0.4)';
      if (pc > 0) return 'rgba(56, 189, 248, 0.2)';
    }
    return 'rgba(15, 23, 42, 0.8)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-xl border border-sky-digital/20 bg-sky-digital/5"
      style={{ outline: 'none' }}
    >
      <div className="text-center mb-4">
        <div className="font-mono text-xs text-sky-digital uppercase tracking-widest">State-wise Participation</div>
      </div>
      <ComposableMap
        projectionConfig={{
          scale: 450,
          center: [83, 22],
        }}
        projection="geoMercator"
        width={100}
        height={320}
        style={{ width: '100%', maxHeight: '75vh', height: '900px', outline: 'none' }}
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map(geo => {
              const current = getHeatMapData().find(s => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : 'rgba(15, 23, 42, 0.8)'}
                  style={geographyStyle}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-content={`${geo.properties.name}: ${current ? current.value : 'NA'}`}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <Tooltip
        id="map-tooltip"
        style={{
          backgroundColor: 'rgba(2, 6, 23, 0.95)',
          color: '#38BDF8',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          fontFamily: 'monospace',
          fontSize: '12px'
        }}
      />
    </motion.div>
  );
};

export default StateWiseRegistrationMap;