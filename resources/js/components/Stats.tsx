import { useReveal } from '@/hooks/use-reveal';

// All values are placeholders — owner must replace with real metrics.
const STATS = [
    {
        value: '120+',
        label: 'Proyek selesai',
        // mock: total proyek selesai
    },
    {
        value: '6',
        label: 'Tahun pengalaman',
        // mock: lama usaha berjalan
    },
    {
        value: '98%',
        label: 'Klien puas',
        // mock: persentase kepuasan klien
    },
    {
        value: '24/7',
        label: 'Dukungan',
        // mock: jam respons support
    },
];

export function Stats() {
    const ref = useReveal(0.2);

    return (
        <section className="bg-cream-50 dark:bg-warm-900">
            <div className="mx-auto max-w-full px-6 md:px-10">
                <div
                    ref={ref}
                    className="reveal -mt-6 grid grid-cols-2 gap-x-6 gap-y-10 rounded-2xl border border-cream-200 bg-cream-100 px-8 py-9 dark:border-warm-700 dark:bg-warm-800 md:mt-0 md:grid-cols-4"
                >
                    {STATS.map((stat, i) => (
                        <div
                            key={i}
                            className={`text-center ${
                                i > 0
                                    ? 'md:border-l md:border-cream-200 md:pl-6 dark:md:border-warm-700'
                                    : ''
                            }`}
                        >
                            <div className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-bold leading-none tracking-tight text-ink-900 dark:text-cream-50">
                                {stat.value}
                            </div>
                            <div className="mt-2 text-xs font-medium tracking-wide text-ink-500 dark:text-ink-300">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
