import React, { useContext } from 'react';
import Head from 'next/head';

import ConfigContext from './context';

export type PageMeta = {
  title?: string,
  icon?: string,
  customTitle?: string,
  description?: string,
  noIndex?: boolean,
  image?: string,
  author?: string,
  isProfile?: boolean
};

type SiteViewHeadTags = {
  meta: PageMeta
};

const SiteViewHeadTags = ({ meta: _meta }: SiteViewHeadTags) => {
  const { meta, theme, analytics } = useContext(ConfigContext);
  const pageTitle = _meta?.title ? `${_meta?.title} | ${meta?.title}` : `${meta.title} | ${meta.tagLine}`;

  return (
    <Head>
      {/* GTM removed - already loaded in Base.tsx via next/script */}

      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="description" content={_meta?.description || meta?.description} />
      {_meta?.author && <meta name="author" content={_meta?.author} />}
      {_meta?.noIndex && <meta name="robots" content="noindex" />}
      {_meta?.image && <meta property="og:image" content={_meta.image} />}
      <meta property="og:site_name" content={meta?.title} />
      <meta name="theme-color" content={theme?.primary} />
    </Head>
  );
};

export default SiteViewHeadTags;