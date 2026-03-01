"use client";

import React, { useContext } from 'react';

import ConfigContext from '../SiteView/context';

const Logo = ({ isDark = false, maxHeight = 150 }) => {

  const context = useContext(ConfigContext) || {};
  const { id, meta, assets } = context;

  const logoSrc = id && assets
    ? `/${id}/assets/${isDark ? assets?.logo?.dark : assets?.logo.light}`
    : `/inctf/assets/${isDark ? 'logo_dark.png' : 'logo_light.png'}`;

  return (
    <img
      className="logo"
      src={logoSrc}
      alt={meta?.title || 'InCTF Logo'}
      style={{ maxHeight }}
    />
  );

};

export default Logo;