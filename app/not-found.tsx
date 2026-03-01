'use client';

import React from 'react';
import AppThemeWrapper from '../src/components/shared/AppThemeWrapper';
import Footer from '../src/components/shared/Footer';

const NotFoundPage = () => (
    <AppThemeWrapper id="not-found-page">
        <div className="relative z-10 w-full">
            <div style={{ minHeight: '40vmax' }} className="flex justify-center items-center w-full">
                <div>
                    <h1 className="text-6xl mb-4 text-center font-heading font-bold text-sky-digital">
                        Page Not Found
                    </h1>
                    <p className="font-mono text-slate-satellite text-center">
                        We're sorry, but the page you are looking for does not exist.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    </AppThemeWrapper>
);

export default NotFoundPage;
