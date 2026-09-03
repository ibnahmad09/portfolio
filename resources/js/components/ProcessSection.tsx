import { useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';

const STEPS = [
    {
        title: 'Konsultasi',
        desc: 'Kami dengar dulu kebutuhan dan kondisi bisnis Anda. Tidak ada jargon—cukup obrolan yang jelas soal apa yang ingin Anda capai.',
    },
    {
        title: 'Proposal',
        desc: 'Kami susun penawaran yang transparan: cakupan pekerjaan, timeline, dan harga. Anda paham betul apa yang akan dibangun.',
    },
    {
        title: 'Desain',
        desc: 'Kami buat konsep desain yang mencerminkan identitas bisnis Anda. Revisi sampai Anda merasa nyaman, sebelum mulai membangun.',
    },
    {
        title: 'Pengembangan',
        desc: 'Desain diubah menjadi website yang cepat, aman, dan mudah dikelola. Anda tetap bisa mengikuti perkembangan di tiap tahap.',
    },
    {
        title: 'Peluncuran & Dukungan',
        desc: 'Website siap online dan dilengkapi dukungan berkelanjutan. Kami dampingi, dan siap membantu jika ada yang perlu diperbaiki.',
    },
];

export function ProcessSection() {
    const headingRef = useReveal(0.2);
    const listRef = useReveal(0.1);
    const [open, setOpen] = useState<number>(0);

    return (
        <section
            id="proses"
            className="bg-cream-50 py-24 dark:bg-warm-900 md:py-28"
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                {/* Left: intro */}
                <div ref={headingRef} className="reveal lg:sticky lg:top-28 lg:self-start">
                    <h2 className="font-serif text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50">
                        Begini cara kami bekerja
                    </h2>
                    <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink-500 dark:text-ink-300">
                        Proses yang jelas dan transparan, supaya Anda tahu persis apa
                        yang terjadi pada setiap langkah. Tidak ada kejutan di akhir.
                    </p>
                    <div className="mt-8 hidden font-serif text-6xl font-bold leading-none text-cream-200 dark:text-warm-700 lg:block">
                        {String(STEPS.length).padStart(2, '0')}
                    </div>
                </div>

                {/* Right: accordion */}
                <div ref={listRef} className="reveal">
                    {STEPS.map((s, i) => {
                        const isOpen = open === i;
                        return (
                            <div
                                key={i}
                                className={`border-b border-cream-200 transition-colors dark:border-warm-700 ${
                                    i === 0 ? 'border-t' : ''
                                }`}
                            >
                                <button
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                    className="flex w-full items-center gap-5 py-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-serif text-lg font-bold leading-none text-accent-600">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span
                                        className={`flex-1 text-[1.15rem] font-semibold leading-tight transition-colors ${
                                            isOpen
                                                ? 'text-ink-900 dark:text-cream-50'
                                                : 'text-ink-700 dark:text-ink-300'
                                        }`}
                                    >
                                        {s.title}
                                    </span>
                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                            isOpen
                                                ? 'rotate-45 border-accent-600 text-accent-600'
                                                : 'border-cream-200 text-ink-500 dark:border-warm-700 dark:text-ink-300'
                                        }`}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            className="h-4 w-4"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-out ${
                                        isOpen
                                            ? 'grid-rows-[1fr] pb-6 opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="pl-[3.1rem] pr-2 text-[0.92rem] leading-relaxed text-ink-500 dark:text-ink-300">
                                            {s.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
