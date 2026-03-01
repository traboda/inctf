import '../src/styles/styles.css';
import { ReactNode } from 'react';
import Script from 'next/script';

export const metadata = {
    title: 'InCTF 2026 | India\'s First Ethical Hacking Contest',
    description: 'Amrita InCTF 2026'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <html lang="en">
            <body>
                {children}

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
            </body>
        </html>
    );
}
