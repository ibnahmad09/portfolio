import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
    { id: 'layanan', label: 'Layanan' },
    { id: 'portofolio', label: 'Portofolio' },
    { id: 'proses', label: 'Proses' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'harga', label: 'Harga' },
    { id: 'kontak', label: 'Kontak' },
] as const;

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-cream-50/95 shadow-[0_1px_2px_rgba(36,31,27,0.06)] backdrop-blur-md dark:bg-warm-900/95 dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10">
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
                    <li className="ml-3">
                        <button
                            onClick={() => scrollTo('kontak')}
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

            {/* ── Mobile dropdown ── */}
            {mobileOpen && (
                <div className="border-t border-cream-200 bg-cream-50 px-6 pb-6 pt-4 md:hidden dark:border-warm-700 dark:bg-warm-900">
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
                        <li className="mt-2">
                            <button
                                onClick={() => scrollTo('kontak')}
                                className="w-full rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-all hover:bg-accent-700 active:scale-[0.98]"
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
