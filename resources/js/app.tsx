import { createInertiaApp } from '@inertiajs/react';

// FOUC guard: set the `.dark` class on <html> from the saved choice or the OS
// preference before React mounts, so there's no flash of the wrong theme.
// Runs synchronously at module load (browser only — no SSR entry exists).
if (typeof window !== 'undefined') {
    const themeScript = document.createElement('script');
    themeScript.textContent =
        "(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;var el=document.documentElement;if(d){el.classList.add('dark')}else{el.classList.remove('dark')}}catch(e){}})();";
    document.head.appendChild(themeScript);
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});
