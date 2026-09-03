import { motion, MotionConfig } from 'motion/react';
import type { CSSProperties } from 'react';
import { useReveal } from '@/hooks/use-reveal';

// Scoped styles for the stacked offset text-shadow (3D letterpress effect).
// Kept local to this component; no global CSS changes.
const heroStyles = `
.hero-stack-shadow {
    text-shadow:
        0 1px 0 var(--hstack-a),
        1px 2px 0 var(--hstack-b),
        2px 3px 0 var(--hstack-c),
        3px 4px 0 var(--hstack-d),
        4px 5px 0 var(--hstack-e);
}
.dark .hero-stack-shadow {
    text-shadow:
        0 1px 0 var(--hstack-a),
        1px 2px 0 var(--hstack-b),
        2px 3px 0 var(--hstack-c),
        3px 4px 0 var(--hstack-c),
        4px 5px 0 var(--hstack-d);
}

/* ── Glow-border button (Warm & Bersahaja) ─────────────────────── */
@property --glow-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.glow-btn {
    position: relative;
    animation: glow-pulse 2.8s ease-in-out infinite;
}

/* Rotating conic rim, masked to a thin pill ring */
.glow-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    padding: 2px;
    background: conic-gradient(
        from var(--glow-angle),
        rgba(160, 90, 44, 0.10) 0deg,
        rgba(160, 90, 44, 0.30) 60deg,
        #faf7f2 110deg,
        #a05a2c 150deg,
        rgba(160, 90, 44, 0.45) 200deg,
        rgba(160, 90, 44, 0.10) 300deg,
        rgba(160, 90, 44, 0.10) 360deg
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    animation: glow-spin 3.5s linear infinite;
    pointer-events: none;
}

.dark .glow-btn::before {
    background: conic-gradient(
        from var(--glow-angle),
        rgba(250, 247, 242, 0.06) 0deg,
        rgba(250, 247, 242, 0.22) 60deg,
        #a05a2c 120deg,
        #faf7f2 160deg,
        rgba(250, 247, 242, 0.28) 210deg,
        rgba(250, 247, 242, 0.06) 300deg,
        rgba(250, 247, 242, 0.06) 360deg
    );
}

@keyframes glow-spin {
    to { --glow-angle: 360deg; }
}

@keyframes glow-pulse {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(160, 90, 44, 0), 0 8px 20px -8px rgba(160, 90, 44, 0.32);
    }
    50% {
        box-shadow: 0 0 24px 3px rgba(160, 90, 44, 0.26), 0 10px 26px -6px rgba(160, 90, 44, 0.4);
    }
}

.dark .glow-btn {
    animation-name: glow-pulse-dark;
}

@keyframes glow-pulse-dark {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(250, 247, 242, 0), 0 8px 20px -8px rgba(0, 0, 0, 0.4);
    }
    50% {
        box-shadow: 0 0 26px 3px rgba(250, 247, 242, 0.16), 0 10px 26px -6px rgba(0, 0, 0, 0.5);
    }
}

@media (prefers-reduced-motion: reduce) {
    .glow-btn,
    .glow-btn::before {
        animation: none;
    }
}
`;

export function Hero() {
    const textRef = useReveal(0.2);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    // Floating client cards (fictional UMKM — placeholder content).
    // mock: ganti nama & deskripsi klien dengan contoh nyata
    const clientCards = [
        {
            initial: 'R',
            name: 'Kedai Roti Sangkuriang',
            desc: 'Website profil, pesanan lancar',
            color: 'bg-accent-600',
        },
        {
            initial: 'K',
            name: 'Kopi Nugraha',
            desc: 'Toko online dibuka',
            color: 'bg-accent-700',
        },
        {
            initial: 'J',
            name: 'Jahit Berkah',
            desc: 'Booking online tersedia',
            color: 'bg-accent-800',
        },
    ];

    return (
        <MotionConfig reducedMotion="user">
            <section
                id="hero"
                className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-cream-50 dark:bg-warm-900"
            >
                <style>{heroStyles}</style>

                {/* ── Background: subtle grid + warm glow ── */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.5] dark:opacity-[0.4]"
                    style={{
                        backgroundImage: [
                            'linear-gradient(to right, rgba(160,90,44,0.055) 1px, transparent 1px)',
                            'linear-gradient(to bottom, rgba(160,90,44,0.055) 1px, transparent 1px)',
                            'radial-gradient(60% 55% at 85% 8%, rgba(160,90,44,0.10), transparent 70%)',
                        ].join(', '),
                        backgroundSize: '56px 56px, 56px 56px, 100% 100%',
                    }}
                />

                {/* Vignette to anchor the bottom into the next section */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream-100/70 to-transparent dark:from-warm-800/70" />

                {/* ── Centered composition ── */}
                <div className="relative z-10 flex flex-1 items-center justify-center">
                    <div
                        ref={textRef}
                        className="reveal mx-auto w-full max-w-3xl px-6 pt-28 pb-14 text-center"
                    >
                        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent-600/25 bg-accent-600/5 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-accent-700 dark:border-accent-600/30 dark:bg-accent-600/10 dark:text-accent-600">
                            Web Design untuk UMKM Lokal
                        </p>

                        {/* Stacked headline, centered */}
                        <h1 className="font-serif text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.98] tracking-tight text-ink-900 dark:text-cream-50">
                            <span
                                className="hero-stack-shadow block"
                                style={{ '--hstack-a': '#e8dcc9', '--hstack-b': '#e8dcc9', '--hstack-c': 'rgba(160,90,44,0.25)', '--hstack-d': 'rgba(160,90,44,0.35)', '--hstack-e': 'rgba(160,90,44,0.45)' } as CSSProperties}
                            >
                                Desain
                            </span>
                            <span
                                className="hero-stack-shadow block"
                                style={{ '--hstack-a': '#e8dcc9', '--hstack-b': '#e8dcc9', '--hstack-c': 'rgba(160,90,44,0.25)', '--hstack-d': 'rgba(160,90,44,0.35)', '--hstack-e': 'rgba(160,90,44,0.45)' } as CSSProperties}
                            >
                                Website
                            </span>
                            <span className="block text-accent-600 dark:text-accent-600">
                                untuk bisnis.
                            </span>
                        </h1>

                        <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-ink-500 dark:text-ink-300">
                            Bantu UMKM lokal tampil profesional online, dapatkan
                            pelanggan baru, dan jualan jadi lebih mudah.
                        </p>

                        <div className="mt-9 flex items-center justify-center">
                            <button
                                onClick={() => scrollTo('portofolio')}
                                className="glow-btn rounded-full bg-cream-50/70 px-11 py-5 text-sm font-semibold leading-tight text-ink-800 transition-colors duration-200 hover:text-ink-900 active:scale-[0.97] dark:bg-warm-900/70 dark:text-cream-100 dark:hover:text-cream-50"
                            >
                                Lihat Portofolio
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Decorative frame: floating cards + arrows (xl+ so there's gutter
                       clear of the centered text) ── */}
                <div className="pointer-events-none absolute inset-0 hidden xl:block">
                    {/* Hand-drawn arrow → left cards */}
                    <svg
                        viewBox="0 0 200 120"
                        fill="none"
                        className="absolute left-[20%] top-[34%] w-36 -rotate-12 text-accent-600/60"
                    >
                        <path
                            d="M10 95 C 70 30, 120 110, 175 20"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M150 14 l 30 -4 l -12 28"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Floating card 1 (top-left) */}
                    <motion.div
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute left-[5%] top-[16%] z-20 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-card backdrop-blur-md dark:border-warm-700/60 dark:bg-warm-800/70 dark:shadow-card-dark"
                    >
                        <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-cream-50 shadow-inner ${clientCards[0].color}`}
                        >
                            {clientCards[0].initial}
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-ink-900 dark:text-cream-50">
                                {clientCards[0].name}
                            </div>
                            <div className="text-xs text-ink-500 dark:text-ink-300">
                                {clientCards[0].desc}
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating card 2 (bottom-left) */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                        className="absolute bottom-[24%] left-[8%] z-10 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-card backdrop-blur-md dark:border-warm-700/60 dark:bg-warm-800/70 dark:shadow-card-dark"
                    >
                        <div
                            className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-cream-50 shadow-inner ${clientCards[1].color}`}
                        >
                            {clientCards[1].initial}
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-ink-900 dark:text-cream-50">
                                {clientCards[1].name}
                            </div>
                            <div className="text-xs text-ink-500 dark:text-ink-300">
                                {clientCards[1].desc}
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating card 3 (top-right) */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                        className="absolute right-[5%] top-[18%] z-10 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-card backdrop-blur-md dark:border-warm-700/60 dark:bg-warm-800/70 dark:shadow-card-dark"
                    >
                        <div
                            className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-cream-50 shadow-inner ${clientCards[2].color}`}
                        >
                            {clientCards[2].initial}
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-ink-900 dark:text-cream-50">
                                {clientCards[2].name}
                            </div>
                            <div className="text-xs text-ink-500 dark:text-ink-300">
                                {clientCards[2].desc}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Rotating circular badge (click → #kontak), framed lower-right ── */}
                <button
                    onClick={() => scrollTo('kontak')}
                    aria-label="Mulai sekarang, konsultasi gratis"
                    className="absolute bottom-[26%] right-[9%] z-30 hidden h-36 w-36 items-center justify-center rounded-full bg-cream-50 shadow-card transition-transform duration-200 hover:scale-105 active:scale-95 dark:bg-warm-800 dark:shadow-card-dark xl:flex"
                >
                    <motion.svg
                        viewBox="0 0 120 120"
                        className="h-28 w-28"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    >
                        <defs>
                            <path
                                id="badge-circle"
                                d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                            />
                        </defs>
                        <circle
                            cx="60"
                            cy="60"
                            r="56"
                            className="fill-none stroke-accent-600/25"
                            strokeWidth="2"
                        />
                        <text className="fill-accent-700 text-[0.72rem] font-semibold tracking-[0.22em] dark:fill-accent-600">
                            <textPath href="#badge-circle">
                                MULAI SEKARANG • GRATIS KONSULTASI •
                            </textPath>
                        </text>
                        <circle
                            cx="60"
                            cy="60"
                            r="40"
                            className="fill-accent-600"
                        />
                        <path
                            d="M64 52 l12 8 -12 8"
                            className="fill-none stroke-cream-50"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </motion.svg>
                </button>

                {/* ── Bottom feature strip (rounded top) ── */}
                <div className="relative z-10 rounded-t-3xl border-t border-accent-600/15 bg-cream-100 dark:border-accent-600/20 dark:bg-warm-800">
                    <div className="mx-auto flex max-w-full flex-col gap-6 px-6 py-7 md:px-10 md:flex-row md:items-center md:justify-between">
                        {[
                            'Desain sesuai identitas bisnis',
                            'Responsif di semua layar',
                            'Dukungan berkelanjutan',
                        ].map((f) => (
                            <div key={f} className="flex items-center gap-3 text-sm font-medium text-ink-700 dark:text-ink-300">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-600 text-xs font-bold text-cream-50">
                                    ✓
                                </span>
                                {f}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MotionConfig>
    );
}
