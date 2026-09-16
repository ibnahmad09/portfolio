import { Clock, Search, SearchX, ShieldCheck, ShieldOff, TimerOff, TrendingDown, TrendingUp, type LucideIcon } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

// Scoped styles for the GradientBlobCard animated blob.
// Kept local to this component; no global CSS changes.
const gradientBlobStyles = `
@keyframes why-website-blob {
    0%   { transform: translate(-100%, -100%); }
    25%  { transform: translate(0%, -100%); }
    50%  { transform: translate(0%, 0%); }
    75%  { transform: translate(-100%, 0%); }
    100% { transform: translate(-100%, -100%); }
}
.animate-blob-card {
    animation: why-website-blob 5s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
    .animate-blob-card {
        animation: none;
        transform: translate(-50%, -50%);
    }
}
`;

const WITHOUT_ITEMS = [
    {
        title: 'Sulit ditemukan',
        desc: 'Pelanggan baru jarang menemukan usaha Anda secara online.',
        icon: SearchX,
    },
    {
        title: 'Kurang dipercaya',
        desc: 'Tanpa kehadiran online, usaha terlihat kurang profesional.',
        icon: ShieldOff,
    },
    {
        title: 'Jualan terbatas jam',
        desc: 'Hanya bisa melayani saat toko buka.',
        icon: TimerOff,
    },
    {
        title: 'Kalah saing',
        desc: 'Kompetitor yang punya website lebih mudah dipilih pelanggan.',
        icon: TrendingDown,
    },
];

const WITH_ITEMS = [
    {
        title: 'Mudah ditemukan',
        desc: 'Pelanggan baru bisa menemukan usaha Anda kapan saja di Google.',
        icon: Search,
    },
    {
        title: 'Lebih dipercaya',
        desc: 'Kehadiran online yang rapi bikin usaha terlihat profesional.',
        icon: ShieldCheck,
    },
    {
        title: 'Jualan 24/7',
        desc: 'Toko online buka terus, pesanan masuk bahkan saat Anda tidur.',
        icon: Clock,
    },
    {
        title: 'Unggul saingan',
        desc: 'Lebih mudah dipilih pelanggan dibanding kompetitor tanpa website.',
        icon: TrendingUp,
    },
];

export function WhyWebsite() {
    const headingRef = useReveal(0.2);
    const gridRef = useReveal(0.1);
    const ctaRef = useReveal(0.15);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="kenapa" className="bg-cream-100 py-24 dark:bg-warm-800 md:py-28">
            <div className="mx-auto max-w-full px-6 md:px-10">
                {/* Heading */}
                <div ref={headingRef} className="reveal mx-auto max-w-3xl text-center">
                    <h2 className="font-serif text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50">
                        Tanpa website vs dengan website
                    </h2>
                    <p className="mt-5 mx-auto max-w-xl text-[1.15rem] leading-relaxed text-ink-500 dark:text-ink-300">
                        Perbedaan besar antara usaha yang punya website dan yang tidak.
                        Lihat sendiri mana yang lebih menguntungkan bisnis Anda.
                    </p>
                </div>

                {/* Comparison grid */}
                <div
                    ref={gridRef}
                    className="reveal stagger-children mt-14 mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2"
                >
                    {/* Without website — muted */}
                    <div className="rounded-2xl bg-cream-200/60 p-7 shadow-card border border-ink-900/10 dark:bg-warm-900 dark:shadow-card-dark dark:border-warm-700 md:p-9">
                        <h3 className="font-serif text-lg font-bold tracking-tight text-ink-700 dark:text-cream-200">
                            Tanpa Website
                        </h3>
                        <div className="mt-2 mb-6 h-px w-10 bg-ink-500/50 dark:bg-cream-200/30" />

                        <ul className="space-y-6">
                            {WITHOUT_ITEMS.map((item) => (
                                <li key={item.title} className="flex items-start gap-4">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-900/10 text-ink-700 dark:bg-cream-100/10 dark:text-cream-200">
                                        <item.icon className="h-4 w-4 stroke-[2]" />
                                    </span>
                                    <div>
                                        <span className="block font-serif text-base font-bold leading-snug tracking-tight text-ink-900 dark:text-cream-50">
                                            {item.title}
                                        </span>
                                        <span className="mt-1 block text-[0.95rem] leading-relaxed text-ink-500 dark:text-ink-300">
                                            {item.desc}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* With website — GradientBlobCard (glassy + animated gradient blob) */}
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-12px_rgba(160,90,44,0.28)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)]">
                        <style>{gradientBlobStyles}</style>

                        {/* Animated gradient blob — sits behind the glass */}
                        <div className="animate-blob-card absolute top-1/2 left-1/2 z-0 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-accent-600 via-accent-800 to-warm-700 blur-[12px]" />

                        {/* Glassy background — sits above blob for text readability */}
                        <div className="absolute inset-[5px] z-10 rounded-[12px] bg-white/90 backdrop-blur-[24px] outline outline-1 outline-cream-200/70 dark:bg-black/70 dark:outline-warm-700/60" />

                        {/* Content — above everything */}
                        <div className="relative z-20 p-7 md:p-9">
                            <h3 className="font-serif text-lg font-bold tracking-tight text-ink-900 dark:text-cream-50">
                                Dengan Website
                            </h3>
                            <div className="mt-2 mb-6 h-px w-10 bg-accent-600/30" />

                            <ul className="space-y-6">
                                {WITH_ITEMS.map((item) => (
                                    <li key={item.title} className="flex items-start gap-4">
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-600 to-accent-800 text-cream-50">
                                            <item.icon className="h-4 w-4 stroke-[2]" />
                                        </span>
                                        <div>
                                            <span className="block font-serif text-base font-bold leading-snug tracking-tight text-ink-900 dark:text-cream-50">
                                                {item.title}
                                            </span>
                                            <span className="mt-1 block text-[0.95rem] leading-relaxed text-ink-500 dark:text-ink-300">
                                                {item.desc}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Full-width CTA banner */}
                <div
                    ref={ctaRef}
                    className="reveal mt-16 rounded-2xl bg-accent-600 px-8 py-10 text-center shadow-card dark:shadow-card-dark md:mt-20 md:px-16 md:py-14"
                >
                    <h3 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-bold leading-tight tracking-tight text-cream-50">
                        Siap punya website untuk bisnis Anda?
                    </h3>
                    <p className="mt-3 mx-auto max-w-lg text-[1.05rem] leading-relaxed text-cream-50/80">
                        Kami bantu dari nol sampai jadi. Tanpa ribet, tanpa biaya
                        tersembunyi—langkah pertama ke kehadiran online yang profesional.
                    </p>
                    <button
                        onClick={() => scrollTo('cta')}
                        className="mt-8 inline-block rounded-full bg-cream-50 px-7 py-3.5 text-sm font-semibold leading-tight text-accent-700 shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-cream-100 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:scale-[0.98]"
                    >
                        Mulai Sekarang
                    </button>
                </div>
            </div>
        </section>
    );
}
