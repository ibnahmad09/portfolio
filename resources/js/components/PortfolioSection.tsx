import { useReveal } from '@/hooks/use-reveal';

// Imagery uses picsum placeholder seeds — owner must replace with real work.
// mock: ganti gambar & detail dengan proyek klien sesungguhnya
const PROJECTS = [
    {
        seed: 'umkm-bakery',
        category: 'Website UMKM',
        title: 'Kedai Roti Sangkuriang',
        result: 'Penjualan online naik',
        src: 'https://picsum.photos/seed/umkm-bakery/800/600',
    },
    {
        seed: 'coffee-roaster',
        category: 'E-commerce',
        title: 'Kopi Nugraha Roastery',
        result: 'Katalog & checkout online',
        src: 'https://picsum.photos/seed/coffee-roaster/800/1000',
    },
    {
        seed: 'tailor-shop',
        category: 'Website Profil',
        title: 'Jahit Berkah Tailor',
        result: 'Booking online tersedia',
        src: 'https://picsum.photos/seed/tailor-shop/800/600',
    },
    {
        seed: 'batik-gallery',
        category: 'E-commerce',
        title: 'Batik Nusantara Gallery',
        result: 'Jangkauan pasar melebar',
        src: 'https://picsum.photos/seed/batik-gallery/800/900',
    },
];

export function Portfolio() {
    const headingRef = useReveal(0.2);
    const gridRef = useReveal(0.1);

    return (
        <section
            id="portofolio"
            className="bg-cream-100 py-24 dark:bg-warm-800 md:py-28"
        >
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                {/* Heading */}
                <div ref={headingRef} className="reveal flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
                    <h2 className="max-w-lg font-serif text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50">
                        Karya yang sudah kami buat
                    </h2>
                    <a
                        href="#kontak"
                        className="inline-flex items-center gap-2 rounded-full border border-cream-200 bg-transparent px-5 py-2.5 text-sm font-semibold leading-tight text-ink-700 transition-all hover:bg-cream-50 active:scale-[0.98] dark:border-warm-700 dark:text-cream-100 dark:hover:bg-warm-700/50"
                    >
                        Ceritakan proyek Anda →
                    </a>
                </div>

                {/* Masonry-like grid: mixed aspect ratios */}
                <div
                    ref={gridRef}
                    className="reveal mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5"
                >
                    {PROJECTS.map((p, i) => (
                        <a
                            key={i}
                            href="#kontak"
                            className={`group relative block overflow-hidden rounded-2xl bg-cream-200 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:bg-warm-700 dark:shadow-card-dark dark:hover:shadow-card-hover-dark ${
                                i === 0
                                    ? 'lg:col-span-7'
                                    : i === 1
                                      ? 'lg:col-span-5'
                                      : i === 2
                                        ? 'lg:col-span-5'
                                        : 'lg:col-span-7'
                            }`}
                        >
                            <div
                                className={`overflow-hidden ${
                                    i === 0 || i === 3
                                        ? 'aspect-[16/11]'
                                        : 'aspect-[4/5]'
                                }`}
                            >
                                <img
                                    src={p.src}
                                    alt={`Proyek ${p.title}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            {/* Overlay info */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/85 to-transparent px-7 pt-16 pb-6 text-cream-50">
                                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-cream-50/70">
                                    {p.category}
                                </div>
                                <div className="mt-1.5 font-serif text-xl font-bold leading-tight text-cream-50">
                                    {p.title}
                                </div>
                                <div className="mt-1 text-sm text-cream-50/85">
                                    {p.result} →
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
