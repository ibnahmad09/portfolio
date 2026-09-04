import { useReveal } from '@/hooks/use-reveal';

const SERVICES = [
    {
        title: 'Website UMKM & Profile Perusahaan',
        desc: 'Website yang memperkenalkan bisnis Anda secara profesional—profil, produk, dan kontak—agar pelanggan langsung percaya.',
    },
    {
        title: 'E-commerce',
        desc: 'Toko online yang mudah dikelola, dengan katalog produk dan pembayaran yang nyaman untuk pelanggan Anda.',
        featured: true,
    },
    {
        title: 'Aplikasi Web Custom',
        desc: 'Butuh sistem khusus? Kami bangun aplikasi web sesuai kebutuhan bisnis, dari booking hingga manajemen data.',
    },
    {
        title: 'Maintenance & Dukungan',
        desc: 'Kami jaga website tetap cepat, aman, dan selalu ter-update—Anda fokus pada bisnis, kami urus teknologinya.',
    },
];

export function Services() {
    const headingRef = useReveal(0.2);
    const gridRef = useReveal(0.1);

    return (
        <section id="layanan" className="bg-cream-50 py-24 dark:bg-warm-900 md:py-28">
            <div className="mx-auto max-w-full px-6 md:px-10">
                {/* Heading — stacked vertically */}
                <div ref={headingRef} className="reveal max-w-2xl">
                    <h2 className="font-serif text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50">
                        Layanan yang kami tawarkan
                    </h2>
                    <p className="mt-5 max-w-xl text-[1.15rem] leading-relaxed text-ink-500 dark:text-ink-300">
                        Semua kebutuhan digital bisnis Anda bisa kami tangani dalam satu
                        tim—mulai dari website pertama hingga sistem yang terus berjalan.
                    </p>
                </div>

                {/* Asymmetric grid: tall featured card + stacked cards + full-width footer card */}
                <div
                    ref={gridRef}
                    className="reveal stagger-children mt-14 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-12 md:gap-5"
                >
                    {SERVICES.map((s, i) => (
                        <div
                            key={i}
                            className={`group rounded-2xl p-8 transition-all duration-300 ${
                                s.featured
                                    ? 'md:col-span-8 md:row-span-2 bg-accent-600 text-cream-50 shadow-card hover:-translate-y-1 dark:shadow-card-dark'
                                    : 'md:col-span-4 bg-cream-100 shadow-card hover:-translate-y-1 hover:shadow-card-hover dark:bg-warm-800 dark:shadow-card-dark dark:hover:shadow-card-hover-dark'
                            } ${
                                i === 3 ? 'md:col-span-12 md:row-start-3' : ''
                            }`}
                        >
                            <div
                                className={`font-serif text-3xl font-bold leading-none ${
                                    s.featured
                                        ? 'text-cream-50/40'
                                        : 'text-accent-600/40 dark:text-accent-600/40'
                                }`}
                            >
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <h3
                                className={`mt-6 font-serif text-2xl font-bold leading-snug tracking-tight ${
                                    s.featured
                                        ? 'text-cream-50'
                                        : 'text-ink-900 dark:text-cream-50'
                                }`}
                            >
                                {s.title}
                            </h3>
                            <p
                                className={`mt-3 max-w-prose text-[0.92rem] leading-relaxed ${
                                    s.featured
                                        ? 'text-cream-50/80'
                                        : 'text-ink-500 dark:text-ink-300'
                                }`}
                            >
                                {s.desc}
                            </p>
                            <div
                                className={`mt-7 flex items-center gap-2 text-sm font-semibold ${
                                    s.featured
                                        ? 'text-cream-50'
                                        : 'text-accent-600 group-hover:text-accent-700'
                                }`}
                            >
                                <a href="#kontak" className="inline-flex items-center gap-2">
                                    Konsultasi
                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
