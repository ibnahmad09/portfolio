import { useCallback, useEffect, useRef, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

// Matches the transition-duration in app.css (`html.theme-transition *`).
// The gate class is removed after this window so normal hover/press
// transitions are restored.
const THEME_TRANSITION_MS = 500;

function resolveInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(resolveInitialTheme);
    const firstApplyRef = useRef(true);
    const clearTimerRef = useRef<number | null>(null);

    // Apply & persist the active theme to <html>.classList.
    useEffect(() => {
        const el = document.documentElement;

        // Only cross-fade colors after the initial load. On mount the FOUC
        // guard in app.tsx has already applied the correct `.dark` class, so
        // animating then would look buggy. For every later change we briefly
        // enable the color-only transition (see `.theme-transition` in
        // app.css) so background/text/border/... cross-fade instead of
        // snapping, then remove the gate to restore normal transitions.
        const isFirstApply = firstApplyRef.current;
        firstApplyRef.current = false;

        if (!isFirstApply) {
            el.classList.add('theme-transition');
            if (clearTimerRef.current !== null) window.clearTimeout(clearTimerRef.current);
            clearTimerRef.current = window.setTimeout(() => {
                el.classList.remove('theme-transition');
            }, THEME_TRANSITION_MS);
        }

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
