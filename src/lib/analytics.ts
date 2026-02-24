export const pageview = (url: string, gaId: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', gaId, {
            page_path: url,
        });
    }
};

export const event = (
    action: string,
    params: { [key: string]: any },
    gaId: string
) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, params);
    }
};
