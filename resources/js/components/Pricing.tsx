import { useReveal } from '@/hooks/use-reveal';

// mock: harga & isi paket adalah contoh — owner harus menyesuaikan penawaran sebenarnya
const TIERS = [
    {
        name: 'Basic',
        price: 'Rp2,5jt',
        per: 'sekali investasi',
        desc: 'Website profil yang bersih dan profesional untuk mulai membangun kehadiran online.',
        features: ['1–5 halaman', 'Desain sesuai identitas', 'Responsif (handphone & komputer)', 'Form kontak & peta lokasi'],
        highlighted: false,
    },
    {
        name: 'Pro',
        price: 'Rp6jt',
        per: 'sekali investasi',
        desc: 'Paket paling populer untuk UMKM yang ingin menjual produk secara online.',
        features: ['Semua fitur Basic', 'Toko online + pembayaran', 'Katalog produk tanpa batas', 'Pelatihan mengelola website', 'Dukungan 3 bulan'],
        highlighted: true,
    },
    {
        name: 'Custom',
        price: 'Sesuai kebutuhan',
        per: 'dibahas di proposal',
        desc: 'Solusi khusus yang disesuaikan dengan alur dan kebutuhan bisnis Anda.',
        features: ['Analisis kebutuhan khusus', 'Sistem & fitur dibuat sesuai permintaan', 'Jadwal khusus', 'Dukungan penuh'],
        highlighted: false,
    },
];

export function Pricing() {
    const headingRef = useReveal(0.2);
    const gridRef = useReveal(0.1);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="harga" className="bg-cream-50 py-24 dark:bg-warm-900 md:py-28">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                {/* Heading */}
                <div ref={headingRef} className="reveal max-w-2xl">
                    <h2 className="font-serif text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50">
                        Harga yang jelas, tanpa biaya tersembunyi
                    </h2>
                    <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink-500 dark:text-ink-300">
                        Setiap proyek berbeda, jadi kami diskusikan dulu sebelum
                        menentukan angka. Berikut gambaran awal sebagai titik mulai.
                    </p>
                </div>

                {/* Tiers */}
                <div
                    ref={gridRef}
                    className="reveal stagger-children mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-stretch"
                >
                    {TIERS.map((t, i) => (
                        <div
                            key={i}
                            className={`flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                                t.highlighted
                                    ? 'bg-accent-600 text-cream-50 shadow-card lg:-my-4 lg:py-12 hover:shadow-card-hover dark:bg-accent-600 dark:shadow-card-dark'
                                    : 'border border-cream-200 bg-cream-100 text-ink-900 hover:-translate-y-1 hover:shadow-card-hover dark:border-warm-700 dark:bg-warm-800 dark:text-cream-50 dark:hover:shadow-card-hover-dark'
                            }`}
                        >
                            <div className="flex items-baseline justify-between">
                                <h3 className="font-serif text-2xl font-bold leading-none tracking-tight">
                                    {t.name}
                                </h3>
                                {t.highlighted && (
                                    <span className="rounded-full bg-cream-50/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-cream-50">
                                        Terpopuler
                                    </span>
                                )}
                            </div>
                            <div className="mt-6 flex items-baseline gap-2">
                                <span
                                    className={`font-serif text-[clamp(1.9rem,3vw,2.35rem)] font-bold leading-none ${
                                        t.highlighted
                                            ? 'text-cream-50'
                                            : 'text-ink-900 dark:text-cream-50'
                                    }`}
                                >
                                    {t.price}
                                </span>
                                <span
                                    className={`text-[0.8rem] ${
                                        t.highlighted
                                            ? 'text-cream-50/80'
                                            : 'text-ink-500 dark:text-ink-300'
                                    }`}
                                >
                                    {t.per}
                                </span>
                            </div>
                            <p
                                className={`mt-3 text-[0.92rem] leading-relaxed ${
                                    t.highlighted
                                        ? 'text-cream-50/85'
                                        : 'text-ink-500 dark:text-ink-300'
                                }`}
                            >
                                {t.desc}
                            </p>

                            <ul
                                className={`mt-7 mb-8 space-y-3 border-t pt-6 text-[0.9rem] ${
                                    t.highlighted
                                        ? 'border-cream-50/20 text-cream-50/90'
                                        : 'border-cream-200 text-ink-700 dark:border-warm-700 dark:text-ink-300'
                                }`}
                            >
                                {t.features.map((f, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <span
                                            className={`mt-0.5 ${
                                                t.highlighted
                                                    ? 'text-cream-50/70'
                                                    : 'text-accent-600 dark:text-accent-600'
                                            }`}
                                        >
                                            ✓
                                        </span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <button
                                    onClick={() => scrollTo('kontak')}
                                    className={`w-full rounded-full px-6 py-3 text-sm font-semibold leading-tight transition-all duration-200 active:scale-[0.98] ${
                                        t.highlighted
                                            ? 'bg-cream-50 text-accent-700 hover:bg-cream-100'
                                            : 'bg-accent-600 text-cream-50 hover:bg-accent-700 dark:bg-accent-600 dark:text-cream-50 dark:hover:bg-accent-700'
                                    }`}
                                >
                                    Hubungi Kami
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
