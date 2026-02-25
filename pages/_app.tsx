import Script from 'next/script';
import { useRouter } from 'next/router';
import '../src/styles/styles.css';
import { useEffect } from 'react';
import Modal from 'react-modal';

import { pageview } from '../src/lib/analytics';

export default function InCTFJrWebApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Set Modal app element after mount to avoid hydration errors
    Modal.setAppElement('#__next');
  }, []);

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!gaId) return;

    // Send initial pageview since we disabled auto-send
    if (typeof window !== 'undefined') {
      pageview(window.location.pathname, gaId);
    }

    const handleRouteChange = (url: string) => {
      pageview(url, gaId);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, gaId]);

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
              gtag('config', '${gaId}', {
                send_page_view: false,
              });
            `}
          </Script>
        </>
      )}

      {/* InCTF SDK */}
      <Script src="https://play.inctf.in/sdk.js" strategy="afterInteractive" />
    </>
  );
}