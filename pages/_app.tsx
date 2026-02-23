import { GoogleAnalytics } from '@next/third-parties/google';
import '../src/styles/styles.css';
import { useEffect } from 'react';
import Modal from 'react-modal';

export default function InCTFJrWebApp({ Component, pageProps }) {
  useEffect(() => {
    // Set Modal app element after mount to avoid hydration errors
    Modal.setAppElement('#__next');
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </>
  );
}