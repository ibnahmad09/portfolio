import { useReveal } from '@/hooks/use-reveal';

// mock: ganti testimoni dengan kutipan & data klien sesungguhnya
const TESTIMONIALS = [
    {
        quote:
            'Website kami dulu seadanya dan pelanggan sering ragu. Sekarang jauh lebih profesional, dan pesanan lewat online mulai berjalan lancar.',
        name: 'Ibu Ratna',
        role: 'Pemilik',
        company: 'Kedai Roti Sangkuriang',
    },
    {
        quote:
            'Prosesnya jelas dari awal. Kami tidak pernah bingung, dan hasilnya persis seperti yang dijanjikan. Sangat menyenangkan diajak kerja sama.',
        name: 'Bapak Nugraha',
        role: 'Pemilik',
        company: 'Kopi Nugraha Roastery',
    },
];

export function Testimonials() {
    const headingRef = useReveal(0.2);
    const gridRef = useReveal(0.1);

    return (
        <section
            id="testimoni"
            className="bg-cream-100 py-24 dark:bg-warm-800 md:py-28"
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                {/* Left: intro */}
                <div ref={headingRef} className="reveal lg:pt-2">
                    <h2 className="font-serif text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50">
                        Kata mereka yang pernah bekerja sama
                    </h2>
                    <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink-500 dark:text-ink-300">
                        Kepercayaan itu dibangun lewat hasil. Ini sebagian cerita dari
                        klien yang sudah merasakan dampaknya.
                    </p>
                    {/* mock: jumlah klien aktual */}
                    <div className="mt-8 inline-block rounded-full bg-accent-600/10 px-5 py-2 text-sm font-semibold text-accent-700 dark:bg-accent-600/15 dark:text-accent-600">
                        100% klien merekomendasikan kami
                    </div>
                </div>

                {/* Right: cards (vertical stack) */}
                <div ref={gridRef} className="reveal stagger-children flex flex-col gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className="rounded-2xl bg-cream-50 p-9 shadow-card dark:bg-warm-900 dark:shadow-card-dark"
                        >
                            <div className="font-serif text-5xl leading-none text-accent-600/50 dark:text-accent-600/40">
                                &ldquo;
                            </div>
                            <p className="mt-1 font-serif text-lg leading-[1.55] text-ink-900 dark:text-cream-50">
                                {t.quote}&rdquo;
                            </p>
                            <div className="mt-5 border-t border-cream-200 pt-4 dark:border-warm-700">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-600 text-sm font-bold text-cream-50">
                                        {t.name.replace('Ibu ', '').replace('Bapak ', '').charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-ink-900 dark:text-cream-50">
                                            {t.name}
                                        </div>
                                        <div className="text-xs text-ink-500 dark:text-ink-300">
                                            {t.role} · {t.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
