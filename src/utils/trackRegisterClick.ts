import type { MouseEvent } from 'react';

type RegisterClickOptions = {
  url: string;
  target?: '_blank' | '_self';
};

const NAVIGATION_FALLBACK_DELAY_MS = 500;

export function trackRegisterClick(
  event: MouseEvent<HTMLAnchorElement>,
  { url, target = '_blank' }: RegisterClickOptions,
) {
  if (typeof window === 'undefined') {
    return;
  }

  const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
  if (isModifiedClick) {
    return;
  }

  const navigate = () => {
    if (target === '_self') {
      window.location.assign(url);
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (typeof window.gtag !== 'function') {
    return;
  }

  event.preventDefault();

  let hasNavigated = false;

  const navigateOnce = () => {
    if (hasNavigated) {
      return;
    }

    hasNavigated = true;
    navigate();
  };

  window.gtag('event', 'register_cta_click', {
    transport_type: 'beacon',
    event_callback: navigateOnce,
  });

  window.setTimeout(navigateOnce, NAVIGATION_FALLBACK_DELAY_MS);
}