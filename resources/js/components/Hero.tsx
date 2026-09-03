import { useReveal } from '@/hooks/use-reveal';

export function Hero() {
    const textRef = useReveal(0.2);
    const visualRef = useReveal(0.1);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative flex min-h-[100dvh] items-center overflow-hidden bg-cream-50 dark:bg-warm-900"
        >
            <div className="mx-auto grid w-full max-w-full grid-cols-1 items-center gap-12 px-6 pt-24 pb-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-16 md:px-10 lg:gap-24">
                {/* ── Left: Copy ── */}
                <div ref={textRef} className="reveal">
                    <p className="mb-5 font-serif text-sm tracking-[0.14em] text-accent-600 dark:text-accent-600">
                        Web Design untuk UMKM
                    </p>

                    <h1 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-ink-900 dark:text-cream-50">
                        Website yang bikin{' '}
                        <span className="text-accent-600">bisnis Anda</span>{' '}
                        dipercaya pelanggan.
                    </h1>

                    <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500 dark:text-ink-300">
                        Kami bantu UMKM lokal punya website profesional yang{' '}
                        <em className="not-italic text-ink-900 dark:text-cream-100">
                            menarik
                        </em>{' '}
                        pelanggan dan{' '}
                        <em className="not-italic text-ink-900 dark:text-cream-100">
                            meningkatkan penjualan
                        </em>
                        .
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <button
                            onClick={() => scrollTo('kontak')}
                            className="rounded-full bg-accent-600 px-7 py-3 text-sm font-semibold leading-tight text-cream-50 shadow-[0_2px_8px_rgba(160,90,44,0.25)] transition-all duration-200 hover:bg-accent-700 hover:shadow-[0_4px_16px_rgba(160,90,44,0.3)] active:scale-[0.97]"
                        >
                            Konsultasi Gratis
                        </button>
                        <button
                            onClick={() => scrollTo('portofolio')}
                            className="rounded-full border border-cream-200 bg-transparent px-7 py-3 text-sm font-semibold leading-tight text-ink-700 transition-all duration-200 hover:border-cream-200 hover:bg-cream-100 active:scale-[0.97] dark:border-warm-700 dark:text-cream-100 dark:hover:bg-warm-700/50"
                        >
                            Lihat Portofolio
                        </button>
                    </div>
                </div>

                {/* ── Right: Visual composition ── */}
                <div
                    ref={visualRef}
                    className="reveal relative hidden aspect-[4/4.2] w-full justify-self-end md:flex md:max-w-[30rem] lg:max-w-[34rem]"
                >
                    {/* Main card */}
                    <div className="absolute top-[4%] right-0 bottom-[4%] left-[10%] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-accent-600/8 via-accent-600/12 to-accent-600/4 shadow-card dark:from-accent-600/8 dark:via-accent-600/10 dark:to-accent-600/5">
                        {/* Watermark name */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                            <span className="translate-y-4 font-serif text-[clamp(3rem,8vw,6.5rem)] font-bold leading-none text-ink-900/[0.035] select-none dark:text-cream-50/[0.04]">
                                Arsitektura
                            </span>
                        </div>
                        {/* Decorative dot grid */}
                        <div className="absolute top-16 left-16 grid grid-cols-5 gap-3">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-2 w-2 rounded-full bg-accent-600/15 dark:bg-accent-600/20"
                                />
                            ))}
                        </div>
                        {/* Accent stripe */}
                        <div className="absolute bottom-0 left-0 h-[3px] w-2/5 bg-accent-600" />
                        {/* Decorative circle */}
                        <div className="absolute right-8 bottom-24 h-32 w-32 rounded-full border-2 border-accent-600/10 dark:border-accent-600/15" />
                    </div>

                    {/* Floating accent chip */}
                    <div className="absolute top-[2%] right-4 z-10 rounded-2xl bg-accent-600 px-5 py-3 shadow-[0_8px_24px_rgba(160,90,44,0.3)]">
                        <span className="block font-serif text-[1.65rem] font-bold leading-none text-cream-50">
                            4+
                        </span>
                        <span className="mt-0.5 block text-[0.65rem] leading-tight text-cream-50/85">
                            tahun pengalaman
                        </span>
                    </div>

                    {/* Small decorative square */}
                    <div className="absolute bottom-[10%] left-0 z-10 h-12 w-12 rounded-xl border-2 border-accent-600/20 dark:border-accent-600/25" />
                </div>
            </div>

            {/* ── Bottom edge line ── */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-200 to-transparent dark:via-warm-700" />
        </section>
    );
}
