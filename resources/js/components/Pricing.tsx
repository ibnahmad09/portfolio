import { useReveal } from '@/hooks/use-reveal';

// mock: skema harga menyesuaikan adalah placeholder tampilan —
// owner harus menyesuaikan isi penawaran sebenarnya sebelum dipublikasikan.
const PRICE_FACTORS = [
    {
        num: '01',
        title: 'Jenis website',
        desc: 'Landing page, company profile, toko online, sampai sistem khusus seperti manajemen sekolah.',
    },
    {
        num: '02',
        title: 'Fitur yang diinginkan',
        desc: 'Pembayaran, katalog produk, booking, dashboard admin — makin banyak fiturnya, makin besar pengerjaannya.',
    },
    {
        num: '03',
        title: 'Domain & hosting',
        desc: 'Pilihan nama domain dan paket hosting yang pas, termasuk perpanjangan tahun berikutnya.',
    },
];

export function Pricing() {
    const headingRef = useReveal(0.2);
    const cardRef = useReveal(0.1);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="harga" className="bg-cream-50 py-24 dark:bg-warm-900 md:py-28">
            <div className="mx-auto max-w-full px-6 md:px-10">
                {/* Heading */}
                <div ref={headingRef} className="reveal max-w-2xl">
                    <h2 className="font-serif text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50">
                        Harga menyesuaikan, tanpa biaya tersembunyi
                    </h2>
                    <p className="mt-5 max-w-xl text-[1.15rem] leading-relaxed text-ink-500 dark:text-ink-300">
                        Setiap proyek berbeda. Kami hitung dulu tiga hal di bawah
                        ini, lalu Anda terima penawaran tertulis sebelum pekerjaan
                        dimulai.
                    </p>
                </div>

                {/* Harga menyesuaikan */}
                <div
                    ref={cardRef}
                    className="reveal stagger-children mx-auto mt-14 w-full max-w-7xl rounded-3xl bg-accent-600 p-8 text-cream-50 shadow-card dark:bg-accent-600 dark:shadow-card-dark md:p-12"
                >
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-cream-50/70">
                        Harga
                    </span>
                    <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-serif text-[clamp(2.1rem,4vw,3rem)] font-bold leading-none text-cream-50">
                            Sesuai kebutuhan
                        </span>
                        <span className="text-[0.9rem] text-cream-50/80">
                            dibahas di proposal
                        </span>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
                        {PRICE_FACTORS.map((factor) => (
                            <div
                                key={factor.num}
                                className="rounded-2xl border border-cream-50/15 bg-cream-50/10 p-6"
                            >
                                <span className="font-serif text-2xl font-bold leading-none text-cream-50/60">
                                    {factor.num}
                                </span>
                                <h3 className="mt-4 font-serif text-lg font-bold leading-tight tracking-tight text-cream-50">
                                    {factor.title}
                                </h3>
                                <p className="mt-3 text-[0.9rem] leading-relaxed text-cream-50/80">
                                    {factor.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-10 border-t border-cream-50/20 pt-6 text-[0.95rem] leading-relaxed text-cream-50/85">
                        Penawaran tertulis, rinci, dan tetap — tidak ada biaya
                        tersembunyi di tengah jalan.
                    </p>

                    <div className="mt-6">
                        <button
                            onClick={() => scrollTo('cta')}
                            className="rounded-full bg-cream-50 px-7 py-3 text-sm font-semibold leading-tight text-accent-700 transition-all duration-200 hover:bg-cream-100 active:scale-[0.98]"
                        >
                            Konsultasi Gratis
                        </button>
                    </div>
                </div>

                {/* Ketentuan revisi */}
                <div className="mx-auto mt-8 w-full max-w-7xl rounded-2xl border border-cream-200 bg-cream-100 p-6 dark:border-warm-700 dark:bg-warm-800 md:p-8">
                    <h3 className="font-serif text-lg font-bold leading-tight tracking-tight text-ink-900 dark:text-cream-50">
                        Ketentuan revisi
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-[0.9rem] leading-relaxed text-ink-500 dark:text-ink-300">
                        <li className="flex gap-3">
                            <span className="mt-0.5 text-accent-600 dark:text-accent-600">✓</span>
                            <span>
                                Selama website masih dalam proses pengerjaan
                                (belum serah terima), revisi desain dan konten
                                termasuk dalam penawaran.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-0.5 text-accent-600 dark:text-accent-600">✓</span>
                            <span>
                                Setelah serah terima, revisi maupun perubahan
                                konten dihitung terpisah.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-0.5 text-accent-600 dark:text-accent-600">✓</span>
                            <span>
                                Permintaan penambahan fitur setelah kesepakatan
                                dihitung sebagai pekerjaan baru, biayanya
                                menyesuaikan.
                            </span>
                        </li>
                    </ul>
                    <p className="mt-5 border-t border-cream-200 pt-5 text-[0.9rem] leading-relaxed text-ink-500 dark:border-warm-700 dark:text-ink-300">
                        Butuh sistem atau fitur khusus? Ceritakan kebutuhan Anda
                        — kami buatkan penawarannya.
                    </p>
                </div>
            </div>
        </section>
    );
}
