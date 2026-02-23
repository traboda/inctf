import Script from 'next/script';
import '../src/styles/styles.css';
import { useEffect } from 'react';
import Modal from 'react-modal';

export default function InCTFJrWebApp({ Component, pageProps }) {
  useEffect(() => {
    // Set Modal app element after mount to avoid hydration errors
    Modal.setAppElement('#__next');
  }, []);

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <Component {...pageProps} />

      {/* Google Analytics */}
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
    </>
  );
}