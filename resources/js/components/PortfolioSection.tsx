import { useReveal } from '@/hooks/use-reveal';
import { CoverflowCarousel } from '@/components/ui/coverflow-carousel';
import type { CoverflowSlide } from '@/components/ui/coverflow-carousel';

// Portfolio project data for the coverflow carousel
// Replace images with actual client project screenshots
const PORTFOLIO_SLIDES: CoverflowSlide[] = [
    {
        src: 'https://picsum.photos/seed/umkm-bakery/640/640',
        alt: 'Screenshot website Kedai Roti Sangkuriang',
        title: 'Kedai Roti Sangkuriang',
        subtitle: 'Website UMKM',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'Penjualan online naik' },
        ],
    },
    {
        src: 'https://picsum.photos/seed/coffee-roaster/640/640',
        alt: 'Screenshot e-commerce Kopi Nugraha Roastery',
        title: 'Kopi Nugraha Roastery',
        subtitle: 'E-commerce',
        meta: [
            { label: 'Kategori', value: 'E-commerce' },
            { label: 'Hasil', value: 'Katalog & checkout online' },
        ],
    },
    {
        src: 'https://picsum.photos/seed/tailor-shop/640/640',
        alt: 'Screenshot website Jahit Berkah Tailor',
        title: 'Jahit Berkah Tailor',
        subtitle: 'Website Profil',
        meta: [
            { label: 'Kategori', value: 'Website Profil' },
            { label: 'Hasil', value: 'Booking online tersedia' },
        ],
    },
    {
        src: 'https://picsum.photos/seed/batik-gallery/640/640',
        alt: 'Screenshot e-commerce Batik Nusantara Gallery',
        title: 'Batik Nusantara Gallery',
        subtitle: 'E-commerce',
        meta: [
            { label: 'Kategori', value: 'E-commerce' },
            { label: 'Hasil', value: 'Jangkauan pasar melebar' },
        ],
    },
    {
        src: 'https://picsum.photos/seed/umkm-bakery/640/640',
        alt: 'Screenshot website Kedai Roti Sangkuriang',
        title: 'Kedai Roti Sangkuriang',
        subtitle: 'Website UMKM',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'Penjualan online naik' },
        ],
    },
    {
        src: 'https://picsum.photos/seed/coffee-roaster/640/640',
        alt: 'Screenshot e-commerce Kopi Nugraha Roastery',
        title: 'Kopi Nugraha Roastery',
        subtitle: 'E-commerce',
        meta: [
            { label: 'Kategori', value: 'E-commerce' },
            { label: 'Hasil', value: 'Katalog & checkout online' },
        ],
    },
    {
        src: 'https://picsum.photos/seed/tailor-shop/640/640',
        alt: 'Screenshot website Jahit Berkah Tailor',
        title: 'Jahit Berkah Tailor',
        subtitle: 'Website Profil',
        meta: [
            { label: 'Kategori', value: 'Website Profil' },
            { label: 'Hasil', value: 'Booking online tersedia' },
        ],
    },
    {
        src: 'https://picsum.photos/seed/batik-gallery/640/640',
        alt: 'Screenshot e-commerce Batik Nusantara Gallery',
        title: 'Batik Nusantara Gallery',
        subtitle: 'E-commerce',
        meta: [
            { label: 'Kategori', value: 'E-commerce' },
            { label: 'Hasil', value: 'Jangkauan pasar melebar' },
        ],
    },

];

export function Portfolio() {
    const headingRef = useReveal(0.2);
    const carouselRef = useReveal(0.1);

    return (
        <section
            id="portofolio"
            className="bg-cream-100 py-24 dark:bg-warm-800 md:py-28"
        >
            <div className="mx-auto max-w-full px-6 md:px-10">
                {/* Heading */}
                <div ref={headingRef} className="reveal mx-auto max-w-3xl text-center">
                    <h2 className="font-serif text-[clamp(2rem,3.4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-ink-900 dark:text-cream-50">
                        Karya yang sudah kami buat
                    </h2>
                    <a
                        href="#cta"
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream-200 bg-transparent px-5 py-2.5 text-sm font-semibold leading-tight text-ink-700 transition-all hover:bg-cream-50 active:scale-[0.98] dark:border-warm-700 dark:text-cream-100 dark:hover:bg-warm-700/50"
                    >
                        Ceritakan proyek Anda →
                    </a>
                </div>

                {/* Coverflow Carousel */}
                <div ref={carouselRef} className="reveal mt-12 mx-auto w-full max-w-7xl">
                    <CoverflowCarousel
                        slides={PORTFOLIO_SLIDES}
                        showCaption
                        showNavigation
                        showPagination
                        label="Portfolio proyek kami"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}
