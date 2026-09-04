import { useReveal } from '@/hooks/use-reveal';
import { GradientCard } from '@/components/GradientCard';

// Grounded benefit copy — this section sells the MANFAAT (benefit) of hiring
// Arsitektura's service, in a casual, persuasive tone for local UMKM.
const BENEFITS = [
    {
        badge: 'Kepercayaan',
        badgeColor: '#a05a2c', // terracotta
        title: 'Bikin usaha langsung dipercaya',
        desc: 'Website yang rapi bikin calon pelanggan percaya—dan makin gampang buat memilih Anda.',
        imageUrl: 'https://picsum.photos/seed/manfaat-kepercayaan/300/300',
        gradient: 'terracotta' as const,
    },
    {
        badge: 'Kustom',
        badgeColor: '#c98a5a', // sand
        title: 'Dilayani yang paham UMKM',
        desc: 'Bukan template asal jadi. Desainnya dibuat nyambung sama karakter dan kebutuhan usaha Anda.',
        imageUrl: 'https://picsum.photos/seed/manfaat-kustom/300/300',
        gradient: 'cream' as const,
    },
    {
        badge: 'Efisiensi',
        badgeColor: '#8a4d25', // accent-700
        title: 'Hemat tenaga & waktu',
        desc: 'Urusan website biar kami yang beres. Anda bisa fokus jalankan dagangan.',
        imageUrl: 'https://picsum.photos/seed/manfaat-efisiensi/300/300',
        gradient: 'sand' as const,
    },
    {
        badge: 'Dukungan',
        badgeColor: '#6b3c1d', // accent-800
        title: 'Ada yang terus dampingi',
        desc: 'Dari pembahasan awal sampai setelah website live, kami siap bantu di setiap langkahnya.',
        imageUrl: 'https://picsum.photos/seed/manfaat-dukungan/300/300',
        gradient: 'ink' as const,
    },
];

export function About() {
    const headingRef = useReveal(0.2);
    const gridRef = useReveal(0.1);

    return (
        <section
            id="tentang"
            className="bg-cream-50 py-24 dark:bg-warm-900 md:py-32"
        >
            <div className="mx-auto max-w-full px-6 md:px-10">
                {/* ── Bare headline + mission ── */}
                <div ref={headingRef} className="reveal max-w-3xl">
                    <h2 className="font-serif text-[clamp(2rem,3.4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-ink-900 dark:text-cream-50">
                        Situs untuk UMKM yang
                        <br className="hidden md:block" />
                        tumbuh&nbsp;
                        <span className="italic text-accent-600 dark:text-accent-600">
                            percaya diri
                        </span>
                    </h2>
                    <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ink-500 dark:text-ink-300">
                        Arsitektura adalah studio web-design untuk UMKM lokal. Kami
                        membangun kehadiran online yang sederhana dan jujur—supaya
                        usaha kecil bisa bersaing dengan profesional dan pelanggan
                        langsung percaya.
                    </p>
                    <div className="mt-8 hidden h-px w-24 bg-accent-600/70 md:block" />
                </div>

                {/* ── Benefit cards: one horizontal row on large screens ── */}
                <div className="mt-16 md:mt-20">
                    <p className="text-sm font-medium tracking-wide text-ink-700 dark:text-cream-100">
                        Manfaat menyewa jasa kami
                    </p>
                    <div
                        ref={gridRef}
                        className="reveal stagger-children mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-6"
                    >
                        {BENEFITS.map((b) => (
                            <GradientCard
                                key={b.title}
                                badgeText={b.badge}
                                badgeColor={b.badgeColor}
                                title={b.title}
                                description={b.desc}
                                imageUrl={b.imageUrl}
                                gradient={b.gradient}
                                ctaText="Konsultasi"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
