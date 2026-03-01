import '../src/styles/styles.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

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
                {gaId && <GoogleAnalytics gaId={gaId} />}

                {/* InCTF SDK */}
                <Script src="https://play.inctf.in/sdk.js" strategy="afterInteractive" />
            </body>
        </html>
    );
}
