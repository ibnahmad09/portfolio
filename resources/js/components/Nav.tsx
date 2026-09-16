import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/hooks/use-theme';

const NAV_ITEMS = [
    { id: 'layanan', label: 'Layanan' },
    { id: 'portofolio', label: 'Portofolio' },
    { id: 'proses', label: 'Proses' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'harga', label: 'Harga' },
] as const;

/** Quiet light/dark toggle matching the pill-button language used in the nav. */
function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            aria-label="Ganti tema gelap/terang"
            title={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-cream-100 hover:text-ink-900 active:scale-[0.97] dark:text-ink-300 dark:hover:bg-warm-700/50 dark:hover:text-cream-50"
        >
            {isDark ? (
                /* Sun (shown when dark theme is active — switch to light) */
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="h-5 w-5"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
            ) : (
                /* Moon (shown when light theme is active — switch to dark) */
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}

export function Nav() {
    const [activeId, setActiveId] = useState<string>('layanan');
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 32);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const headings = NAV_ITEMS.map((item) =>
            document.getElementById(item.id),
        ).filter(Boolean) as HTMLElement[];

        if (!headings.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActiveId(visible[0].target.id);
            },
            { rootMargin: '-20% 0px -60% 0px' },
        );

        headings.forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        >
            {/* ── Floating capsule wrapper ── */}
            <div
                className={`transition-all duration-300 ${
                    scrolled ? 'px-3 pt-3 sm:px-5' : 'px-0 pt-0'
                }`}
            >
                {/* Capsule pill: full-width transparent at top → detached floating pill */}
                <div
                    className={`mx-auto flex items-center justify-between transition-all duration-300 ${
                        scrolled
                            ? 'h-16 max-w-5xl rounded-full border border-cream-200 bg-cream-50/80 px-5 shadow-[0_8px_30px_rgba(36,31,27,0.10)] backdrop-blur-xl dark:border-warm-700 dark:bg-warm-900/80 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
                            : 'h-20 max-w-full rounded-none border-transparent bg-transparent px-6 shadow-none md:px-10'
                    }`}
                >
                    {/* ── Logo ── */}
                    <a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="font-serif text-xl font-bold tracking-tight text-ink-900 transition-colors hover:text-accent-600 dark:text-cream-50 dark:hover:text-accent-600"
                    >
                        Arsitektura<span className="text-accent-600">.</span>
                    </a>

                    {/* ── Desktop ── */}
                    <ul className="hidden items-center gap-1 md:flex">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollTo(item.id)}
                                    className={`rounded-full px-4 py-1.5 text-[0.8125rem] font-medium leading-tight transition-all duration-200 ${
                                        activeId === item.id
                                            ? 'bg-accent-600/10 text-accent-700 dark:bg-accent-600/15 dark:text-accent-600'
                                            : 'text-ink-500 hover:bg-cream-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-warm-700/50 dark:hover:text-cream-50'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <li className="ml-2 flex items-center">
                            <ThemeToggle />
                        </li>
                        <li className="ml-2">
                            <button
                                onClick={() => scrollTo('cta')}
                                className="rounded-full bg-accent-600 px-5 py-1.5 text-[0.8125rem] font-semibold leading-tight text-cream-50 transition-all duration-200 hover:bg-accent-700 active:scale-[0.98]"
                            >
                                Hubungi Kami
                            </button>
                        </li>
                    </ul>

                    {/* ── Mobile toggle ── */}
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-cream-100 dark:text-cream-50 dark:hover:bg-warm-700/50 md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="h-5 w-5"
                        >
                            {mobileOpen ? (
                                <>
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                    <line x1="6" y1="18" x2="18" y2="6" />
                                </>
                            ) : (
                                <>
                                    <line x1="4" y1="7" x2="20" y2="7" />
                                    <line x1="4" y1="12" x2="16" y2="12" />
                                    <line x1="4" y1="17" x2="20" y2="17" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown (aligns under the pill) ── */}
            {mobileOpen && (
                <div
                    className={`transition-all duration-300 md:hidden ${
                        scrolled
                            ? 'mx-3 mt-2 rounded-2xl border border-cream-200 bg-cream-50/90 pb-6 pt-3 shadow-[0_8px_30px_rgba(36,31,27,0.10)] backdrop-blur-xl dark:border-warm-700 dark:bg-warm-900/90 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] sm:mx-5'
                            : 'border-t border-cream-200 bg-cream-50 px-6 pb-6 pt-4 dark:border-warm-700 dark:bg-warm-900'
                    }`}
                >
                    <ul className="flex flex-col gap-1">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollTo(item.id)}
                                    className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                                        activeId === item.id
                                            ? 'bg-accent-600/10 text-accent-700 dark:bg-accent-600/15 dark:text-accent-600'
                                            : 'text-ink-700 hover:bg-cream-100 dark:text-ink-300 dark:hover:bg-warm-700/50'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <li className="mt-3 flex items-center justify-between border-t border-cream-200 pt-4 dark:border-warm-700">
                            <span className="flex items-center gap-3">
                                <ThemeToggle />
                                <span className="text-sm font-medium text-ink-500 dark:text-ink-300">
                                    Ganti tema
                                </span>
                            </span>
                            <button
                                onClick={() => scrollTo('cta')}
                                className="rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-all hover:bg-accent-700 active:scale-[0.98]"
                            >
                                Hubungi Kami
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
