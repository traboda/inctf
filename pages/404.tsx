import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import SiteView from '../src/components/SiteView';

const NotFoundPage = () => (
  <SiteView meta={{ title: 'Page not Found' }}>
    <div className="relative bg-obsidian min-h-screen">
      {/* Scanlines Overlay */}
      <div className="scanlines fixed inset-0 pointer-events-none z-50" />

      {/* Starfield Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[10%] left-[5%] w-1 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[20%] left-[15%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[30%] left-[25%] w-1 opacity-15" />
        <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[15%] left-[35%] w-2 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[40%] left-[45%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[50%] left-[55%] w-1 opacity-20" />
        <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[25%] left-[65%] w-2 opacity-15" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[60%] left-[75%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[70%] left-[85%] w-1 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[35%] left-[95%] w-1 opacity-15" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[80%] left-[10%] w-1 opacity-10" />
        <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[45%] left-[20%] w-2 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[90%] left-[30%] w-1 opacity-15" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[55%] left-[40%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[65%] left-[50%] w-1 opacity-20" />
        <img src="/assets/images/icons/sparkle.png" alt="" className="absolute top-[75%] left-[60%] w-2 opacity-15" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[85%] left-[70%] w-1 opacity-10" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[95%] left-[80%] w-1 opacity-20" />
        <img src="/assets/images/icons/star.png" alt="" className="absolute top-[5%] left-[90%] w-1 opacity-15" />
      </div>

      <div className="relative z-10">
        <TopBar />
    <div style={{ minHeight: '40vmax' }} className="flex justify-center items-center">
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
    </div>
  </SiteView>
);


export default NotFoundPage;