import { useRouter } from 'next/router';
import '../src/styles/styles.css';
import { useEffect } from 'react';
import Modal from 'react-modal';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function InCTFJrWebApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Set Modal app element after mount to avoid hydration errors
    Modal.setAppElement('#__next');
  }, []);

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <Component {...pageProps} />

      {/* Google Analytics */}
      {gaId && <GoogleAnalytics gaId={gaId} />}

      {/* InCTF SDK */}
      <Script src="https://play.inctf.in/sdk.js" strategy="afterInteractive" />
    </>
  );
}