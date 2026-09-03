import { useEffect, useRef } from 'react';

/** Adds `.is-visible` when the element enters the viewport. */
export function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        if (prefersReduced) {
            el.classList.add('is-visible');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    observer.unobserve(el);
                }
            },
            { threshold },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
