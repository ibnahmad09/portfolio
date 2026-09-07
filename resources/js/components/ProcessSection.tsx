import type { CSSProperties } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import { useReveal } from '@/hooks/use-reveal';
import { HowItWorksCard } from '@/components/HowItWorksCard';

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

// md+ hand-placed journey: 5 cards alternating left/right at staggered tops,
// each with a subtle hand-placed tilt (dropped on mobile). Warm tint rhythm:
// terracotta → cream → sand → cream → terracotta.
const PLACEMENT = [
    { position: 'md:absolute md:left-0 md:top-0', rotate: 'md:rotate-1', gradient: 'terracotta' as const },
    { position: 'md:absolute md:right-0 md:top-[235px]', rotate: 'md:-rotate-2', gradient: 'cream' as const },
    { position: 'md:absolute md:left-0 md:top-[505px]', rotate: 'md:rotate-2', gradient: 'sand' as const },
    { position: 'md:absolute md:right-0 md:top-[735px]', rotate: 'md:-rotate-1', gradient: 'cream' as const },
    { position: 'md:absolute md:left-0 md:top-[965px]', rotate: 'md:rotate-1', gradient: 'terracotta' as const },
];

// Journey corridor (md+): max-w-5xl, fixed height that wraps the last card.
// Path coordinates live in a 1000×1180 viewBox stretched to the corridor, so
// the connector sweeps through each card anchor (left ~170 / right ~830).
const PATH_D =
    'M 170 90 C 570 90, 570 325, 830 325 C 570 325, 570 595, 170 595 C 570 595, 570 825, 830 825 C 570 825, 570 1055, 170 1055';

export function ProcessSection() {
    const headingRef = useReveal(0.2);
    const journeyRef = useReveal(0.1);
    const prefersReducedMotion = useReducedMotion();

    return (
        <LazyMotion features={domAnimation}>
            <section
                id="proses"
                className="bg-cream-50 py-24 dark:bg-warm-900 md:py-28"
            >
                <div className="mx-auto max-w-full px-6 md:px-10">
                    {/* ── Heading, stacked above the journey ── */}
                    <div ref={headingRef} className="reveal max-w-3xl">
                        <h2 className="font-serif text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50">
                            Begini cara kami bekerja
                        </h2>
                        <p className="mt-5 max-w-xl text-[1.15rem] leading-relaxed text-ink-500 dark:text-ink-300">
                            Proses yang jelas dan transparan, supaya Anda tahu persis apa
                            yang terjadi pada setiap langkah. Tidak ada kejutan di akhir.
                        </p>
                        <div className="mt-8 hidden h-px w-24 bg-accent-600/70 md:block" />
                    </div>

                    {/* ── Journey map ── */}
                    <div
                        ref={journeyRef}
                        className="reveal relative mt-16 md:h-[1180px] md:mt-20"
                    >
                        {/* Warm grid backdrop + edge fades (md+ only) */}
                        <div className="pointer-events-none absolute inset-0 hidden md:block">
                            {/* Light grid */}
                            <div
                                className="absolute inset-0 dark:hidden"
                                style={{
                                    backgroundImage: [
                                        'linear-gradient(to right, rgba(36,31,27,0.05) 1px, transparent 1px)',
                                        'linear-gradient(to bottom, rgba(36,31,27,0.05) 1px, transparent 1px)',
                                        'radial-gradient(55% 45% at 50% 50%, rgba(160,90,44,0.08), transparent 72%)',
                                    ].join(', '),
                                    backgroundSize: '56px 56px, 56px 56px, 100% 100%',
                                } as CSSProperties}
                            />
                            {/* Dark grid */}
                            <div
                                className="absolute inset-0 hidden dark:block"
                                style={{
                                    backgroundImage: [
                                        'linear-gradient(to right, rgba(250,247,242,0.045) 1px, transparent 1px)',
                                        'linear-gradient(to bottom, rgba(250,247,242,0.045) 1px, transparent 1px)',
                                        'radial-gradient(55% 45% at 50% 50%, rgba(160,90,44,0.12), transparent 72%)',
                                    ].join(', '),
                                    backgroundSize: '56px 56px, 56px 56px, 100% 100%',
                                } as CSSProperties}
                            />
                            {/* Warm-tinted fades so the map fades into the section */}
                            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-cream-50 to-transparent dark:from-warm-900" />
                            <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-cream-50 to-transparent dark:from-warm-900" />
                            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cream-50 to-transparent dark:from-warm-900" />
                            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream-50 to-transparent dark:from-warm-900" />
                        </div>

                        {/* Animated dashed connector (md+ only) — communicates
                            journey/progress; static under reduced motion */}
                        <svg
                            viewBox="0 0 1000 1180"
                            preserveAspectRatio="none"
                            fill="none"
                            aria-hidden
                            className="pointer-events-none absolute inset-0 hidden h-full w-full text-accent-600 md:block"
                        >
                            {prefersReducedMotion ? (
                                <path
                                    d={PATH_D}
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeDasharray="8 6"
                                    className="opacity-50 dark:opacity-60"
                                />
                            ) : (
                                <m.path
                                    d={PATH_D}
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeDasharray="8 6"
                                    className="opacity-50 dark:opacity-60"
                                    initial={{ strokeDashoffset: 0 }}
                                    animate={{ strokeDashoffset: -28 }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                />
                            )}
                        </svg>

                        {/* Cards: mobile = 1-column stack; md+ = scattered map
                            via `md:contents` on the list + `md:absolute` cards */}
                        <ul className="flex flex-col gap-5 md:contents">
                            {STEPS.map((s, i) => (
                                <HowItWorksCard
                                    key={s.title}
                                    number={String(i + 1).padStart(2, '0')}
                                    title={s.title}
                                    description={s.desc}
                                    gradient={PLACEMENT[i].gradient}
                                    className={`z-10 ${PLACEMENT[i].position} ${PLACEMENT[i].rotate}`}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}