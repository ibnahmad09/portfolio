import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function resolveInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(resolveInitialTheme);

    // Apply & persist the active theme to <html>.classList.
    useEffect(() => {
        const el = document.documentElement;
        if (theme === 'dark') {
            el.classList.add('dark');
        } else {
            el.classList.remove('dark');
        }
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    // When the user has no explicit choice, follow OS preference changes live.
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') return;

        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setTheme(mq.matches ? 'dark' : 'light');
        mq.addEventListener('change', handleChange);
        return () => mq.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    return { theme, toggleTheme };
}
