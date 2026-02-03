import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import SocialMediaLinks from '../SocialMediaLinks';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const SideBarMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9000;
  background: rgba(2, 6, 23, 0.96);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  animation: slide-in 400ms cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  box-shadow: -10px 0 40px rgba(56, 189, 248, 0.1);

  @keyframes slide-in {
    from { 
      transform: translateX(100%); 
      opacity: 0; 
    }
    to { 
      transform: translateX(0); 
      opacity: 1; 
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .menu-content {
    flex: 1;
    padding: 2rem 1.5rem;
    overflow-y: auto;
  }

  .menu-footer {
    padding: 1.5rem;
    border-top: 1px solid rgba(56, 189, 248, 0.3);
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
  }
`;

const MenuItem = ({ item, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.items && item.items.length > 0;

  if (hasSubmenu) {
    return (
      <div className="mb-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left text-2xl font-bold font-mono text-ghost-white mb-2 hover:text-sky-digital transition-all duration-300 group"
        >
          <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
          {isOpen ? <ChevronUp size={22} className="text-sky-digital transition-transform duration-300" /> : <ChevronDown size={22} className="text-sky-500 group-hover:text-sky-digital transition-all duration-300" />}
        </button>

        {isOpen && (
          <div className="pl-4 border-l-2 border-sky-digital/40 ml-1 space-y-3 mt-3 mb-4" style={{ animation: 'fadeIn 300ms ease-out' }}>
            {item.items.map((subItem, idx) => (
              <div key={idx}>
                <Link
                  href={subItem.link || '#'}
                  onClick={onClose}
                  className="block text-sky-400/80 font-mono text-lg hover:text-sky-digital hover:translate-x-2 transition-all duration-300"
                >
                  <span className="mr-2 text-sky-digital/60">›</span>{subItem.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mb-5">
      <Link
        href={item.link || '#'}
        onClick={onClose}
        className="block text-2xl font-bold font-mono text-ghost-white hover:text-sky-digital hover:translate-x-2 transition-all duration-300"
      >
        {item.label}
      </Link>
    </div>
  );
};

const MobileMenu = ({ onClose, config }) => {
  // Use config.menu or fall back to empty array
  const menuItems = config?.menu || [];
  const cta = config?.CTA;

  return (
    <SideBarMenu>
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="p-2 text-white hover:text-red-500 transition-colors">
          <X size={32} />
        </button>
      </div>

      <div className="menu-content">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} onClose={onClose} />
        ))}
      </div>

      <div className="menu-footer">
        {cta && (
          <Link href={cta.link || '#'} onClick={onClose} className="block w-full">
            <button className="w-full py-4 border border-sky-digital bg-sky-digital/10 text-sky-digital font-bold font-tactical uppercase tracking-wider hover:bg-sky-digital hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]">
              {cta.buttonText}
            </button>
          </Link>
        )}

        {/* Footer Branding */}
        <div className="mt-8 flex flex-col items-center gap-4 pb-4">
          {/* Logos Side by Side */}
          <div className="flex items-center justify-center gap-6">
            <div className="w-28">
              <img src="/inctf/assets/logo_light.png" alt="Amrita InCTF" className="w-full h-auto opacity-90" />
            </div>
            <div className="w-20">
              <img src="/assets/images/logos/bi0s_dark.png" alt="team bi0s" className="w-full h-auto opacity-90 invert" />
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center space-y-1">
            <p className="text-ghost-white font-mono text-sm">© Amrita InCTF 2026</p>
            <p className="text-slate-satellite font-mono text-xs">Conducted by Amrita Vishwa Vidyapeetham</p>
            <p className="text-slate-satellite font-mono text-xs">Organized with team bi0s</p>
          </div>
        </div>
      </div>
    </SideBarMenu>
  );
};

export default MobileMenu;