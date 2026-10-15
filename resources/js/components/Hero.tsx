import { motion, MotionConfig } from 'motion/react';
import type { CSSProperties } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { ServicesCard } from '@/components/ServicesCard';

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
                        className="reveal mx-auto w-full max-w-4xl px-4 pt-28 pb-14 text-center"
                    >
                        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent-600/25 bg-accent-600/5 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-accent-700 dark:border-accent-600/30 dark:bg-accent-600/10 dark:text-accent-600">
                            Web Design untuk UMKM Lokal
                        </p>

                        {/* Stacked headline, centered */}
                        <h1 className="font-serif text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.98] tracking-tight uppercase text-ink-900 dark:text-cream-50">
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

                        <p className="mx-auto mt-7 max-w-3xl text-[1.15rem] leading-relaxed text-ink-500 dark:text-ink-300">
                            Bantu UMKM lokal tampil profesional online, dapatkan
                            pelanggan baru, dan jualan jadi lebih mudah. Dari
                            company profile hingga sistem manajemen sekolah, kami
                            siap mewujudkan website impian Anda.
                        </p>

                        <div className="mt-9 flex items-center justify-center">
                            <button
                                onClick={() => scrollTo('portofolio')}
                                className="glow-btn rounded-full bg-cream-50/70 px-11 py-5 text-sm font-semibold leading-tight text-ink-800 transition-colors duration-200 hover:text-ink-900 active:scale-[0.97] dark:bg-warm-900/70 dark:text-cream-100 dark:hover:text-cream-50"
                            >
                                Lihat Portofolio
                            </button>
                        </div>

                        {/* Services Card */}
                        <ServicesCard className="mx-auto mt-10 max-w-4xl" />
                    </div>
                </div>

                {/* ── Rotating circular badge (click → #cta), framed lower-right ── */}
                <button
                    onClick={() => scrollTo('cta')}
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


            </section>
        </MotionConfig>
    );
}
