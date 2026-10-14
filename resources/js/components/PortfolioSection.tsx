import { useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { CoverflowCarousel } from '@/components/ui/coverflow-carousel';
import type { CoverflowSlide } from '@/components/ui/coverflow-carousel';
import { ProjectLightbox } from '@/components/ui/project-lightbox';

// Portfolio project data for the coverflow carousel
// Replace images with actual client project screenshots
// Isi `link` dengan URL website proyek, mis. link: 'https://namadomain.com'.
// Kosongkan (link: '') untuk proyek yang belum punya website publik.
const PORTFOLIO_SLIDES: CoverflowSlide[] = [
    {
        src: '/images/portfolio/futsal-desa-bukit-kemuning.png',
        alt: 'Screenshot website Futsal Desa Bukit Kemuning',
        title: 'Futsal Desa Bukit Kemuning',
        subtitle: 'Website UMKM',
        link: '',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'Informasi & reservasi lapangan' },
        ],
        gallery: [
            {
                src: '/images/portfolio/futsal-desa-bukit-kemuning.png',
                alt: 'Halaman utama website Futsal Desa Bukit Kemuning',
            },
        ],
    },

    {
        src: '/images/portfolio/Sisawit.png',
        alt: 'Screenshot web timbangan sisawit',
        title: 'SISawit',
        subtitle: 'Website UMKM',
        link: '',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'Otomatisasi input timbangan, cetak resi, laporan keuangan' },
        ],
        gallery: [
            { src: '/images/portfolio/sisawit1.png', alt: 'Tampilan dashboard SISawit' },
            { src: '/images/portfolio/sisawit2.png', alt: 'Halaman input timbangan SISawit' },
            { src: '/images/portfolio/sisawit3.png', alt: 'Cetak resi timbangan SISawit' },
            { src: '/images/portfolio/sisawit4.png', alt: 'Laporan keuangan SISawit' },
        ],
    },

    {
        src: '/images/portfolio/afa.png',
        alt: 'Screenshot website Klinik Afapharmindo',
        title: 'Klinik Afpharmindo',
        subtitle: 'Website UMKM',
        link: 'https://klinikafapharmindo.id/',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'Landing page, Informasi Klinik' },
        ],
        gallery: [
            {
                src: '/images/portfolio/afa1.png',
                alt: 'Halaman utama website Klinik Afpharmindo',
            },
            {
                src: '/images/portfolio/afa2.png',
                alt: 'Halaman utama website Klinik Afpharmindo',
            },
        ],
    },

    {
        src: '/images/portfolio/anakku.png',
        alt: 'Screenshot website Klinik Anakkubsd',
        title: 'Klinik Anakkubsd',
        subtitle: 'Website UMKM',
        link: 'https://klinikanakkubsd.com/',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'landing Page, Informasi Klinik' },
        ],
        gallery: [
            {
                src: '/images/portfolio/anakku1.png',
                alt: 'Halaman utama website Klinik Anakkubsd',
            },
            {
                src: '/images/portfolio/anakku2.png',
                alt: 'Halaman utama website Klinik Anakkubsd',
            },
        ],
    },

    {
        src: '/images/portfolio/enhade.png',
        alt: 'Screenshot website Enhade Skin Clinic',
        title: 'Enhade Skin Clinic',
        subtitle: 'Website UMKM',
        link: 'https://enhadeskinclinic.com/',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'landing Page, Informasi Klinik' },
        ],
        gallery: [
            {
                src: '/images/portfolio/enhade1.png',
                alt: 'Halaman utama website Enhade Skin Clinic',
            },
            {
                src: '/images/portfolio/enhade2.png',
                alt: 'Halaman utama website Enhade Skin Clinic',
            },
        ],
    },

    {
        src: '/images/portfolio/kuta.png',
        alt: 'Screenshot website Kuta Care Clinic',
        title: 'Kuta Care Clinic',
        subtitle: 'Website UMKM',
        link: 'https://curadripbali.com/',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'landing Page, Informasi Klinik' },
        ],
        gallery: [
            {
                src: '/images/portfolio/kuta1.png',
                alt: 'Halaman utama website Kuta Care Clinic',
            },
            {
                src: '/images/portfolio/kuta2.png',
                alt: 'Halaman utama website Kuta Care Clinic',
            },
        ],
    },

    {
        src: '/images/portfolio/mdentist.png',
        alt: 'Screenshot website Mdentist',
        title: 'Mdentist',
        subtitle: 'Website UMKM',
        link: 'https://mdentist.solmet.id/',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'landing Page, Informasi Klinik' },
        ],
        gallery: [
            {
                src: '/images/portfolio/mdentist1.png',
                alt: 'Halaman utama website Mdentist',
            },
            {
                src: '/images/portfolio/mdentist2.png',
                alt: 'Halaman utama website Mdentist',
            },
        ],
    },

    {
        src: '/images/portfolio/peddyplus.png',
        alt: 'Screenshot website Peddyplus Children’s Medical Centre',
        title: 'Peddyplus Children’s Medical Centre',
        subtitle: 'Website UMKM',
        link: 'https://peddyplus.co.id/',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'landing Page, Informasi Klinik' },
        ],
        gallery: [
            {
                src: '/images/portfolio/peddy1.png',
                alt: 'Halaman utama website Peddyplus Children’s Medical Centre',
            },
            {
                src: '/images/portfolio/peddy2.png',
                alt: 'Halaman utama website Peddyplus Children’s Medical Centre',
            },
        ],
    },

    {
        src: '/images/portfolio/srihusada.png',
        alt: 'Screenshot website Klinik Utama Sri Husada',
        title: 'Klinik Utama Sri Husada',
        subtitle: 'Website UMKM',
        link: 'http://srihusada.solmet.id/',
        meta: [
            { label: 'Kategori', value: 'Website UMKM' },
            { label: 'Hasil', value: 'landing Page, Informasi Klinik' },
        ],
        gallery: [
            {
                src: '/images/portfolio/srihusada1.png',
                alt: 'Halaman utama website Klinik Utama Sri Husada',
            },
            {
                src: '/images/portfolio/srihusada2.png',
                alt: 'Halaman utama website Klinik Utama Sri Husada',
            },
        ],
    },

];

export function Portfolio() {
    const headingRef = useReveal(0.2);
    const carouselRef = useReveal(0.1);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const activeSlide =
        activeIndex !== null ? PORTFOLIO_SLIDES[activeIndex] : null;

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
                        onCardClick={setActiveIndex}
                    />
                </div>
            </div>

            {activeIndex !== null && activeSlide && (
                <ProjectLightbox
                    images={
                        activeSlide.gallery ?? [
                            { src: activeSlide.src, alt: activeSlide.alt },
                        ]
                    }
                    title={activeSlide.title}
                    subtitle={activeSlide.subtitle}
                    link={activeSlide.link}
                    onClose={() => setActiveIndex(null)}
                />
            )}
        </section>
    );
}
