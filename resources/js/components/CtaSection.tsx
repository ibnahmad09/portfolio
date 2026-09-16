import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

/**
 * CtaSection — adapted from the 21st.dev hero-1 component to the "Warm &
 * Bersahaja" palette (same provenance pattern as GradientCard). A centered
 * CTA surface with a masked grid backdrop, a soft radial accent, an eyebrow
 * pill, a gradient display title, and a WhatsApp CTA button. Serves as the
 * `#cta` scroll target for the whole one-page site.
 *
 * Animations use the fade-in/fade-up keyframes appended to app.css (override
 * the tw-animate-css built-ins) exactly as the 21st prompt specifies.
 */
export function CtaSection() {
    return (
        <section
            id="cta"
            className="relative isolate mx-auto w-full overflow-hidden px-6 py-24 text-center md:px-8 md:py-28"
        >
            {/* Masked grid BG — CSS pattern, no images */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 h-[600px] w-full bg-[linear-gradient(to_right,#e8dcc9_1px,transparent_1px),linear-gradient(to_bottom,#e8dcc9_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:6rem_5rem] opacity-80 dark:bg-[linear-gradient(to_right,#352d26_1px,transparent_1px),linear-gradient(to_bottom,#352d26_1px,transparent_1px)]"
            />

            {/* Radial accent oval at the bottom edge */}
            <div
                aria-hidden
                className="animate-fade-up absolute top-[calc(100%-90px)] left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,#e8dcc9_82%,#faf7f2)] opacity-0 md:h-[500px] md:w-[1100px] lg:top-[calc(100%-150px)] lg:h-[750px] lg:w-[140%] dark:bg-[radial-gradient(closest-side,#352d26_82%,#261f1a)]"
            />

            <div className="relative z-10 mx-auto max-w-3xl">
                {/* Eyebrow pill */}
                <span className="animate-fade-in border-accent-700/30 text-accent-700 dark:border-accent-600/40 dark:text-accent-600 mx-auto flex w-fit items-center justify-center rounded-full border px-5 py-2 text-sm tracking-tight uppercase opacity-0">
                    Konsultasi Gratis
                    <ChevronRight className="ml-2 inline h-4 w-4" />
                </span>

                {/* Title */}
                <h2 className="animate-fade-in from-accent-700 via-accent-600 to-accent-700 -translate-y-4 bg-gradient-to-r bg-clip-text py-6 text-5xl leading-none font-semibold tracking-tighter text-balance text-transparent opacity-0 sm:text-6xl md:text-7xl">
                    Siap membangun kehadiran online bisnis Anda?
                </h2>

                {/* Subtitle */}
                <p className="animate-fade-in text-ink-500 dark:text-ink-300 mb-12 -translate-y-4 text-lg tracking-tight text-balance opacity-0 md:text-xl">
                    Ceritakan kebutuhan dan kondisi bisnis Anda. Kami bantu
                    menemukan solusi paling tepat — tanpa biaya dan tanpa
                    kewajiban untuk lanjut.
                </p>

                {/* CTA */}
                <div className={cn('flex justify-center')}>
                    <Button asChild size="lg">
                        <a
                            href="https://wa.me/6281234567890?text=Halo%20Arsitektura%2C%20saya%20mau%20konsultasi%20pembuatan%20website."
                            target="_blank"
                            rel="noopener"
                        >
                            Mulai Konsultasi via WhatsApp
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>

            {/* Bottom fade into the Footer surface */}
            <div
                aria-hidden
                className="animate-fade-up from-cream-50 dark:from-warm-900 pointer-events-none absolute inset-x-0 -z-10 bottom-0 h-20 bg-gradient-to-t to-transparent opacity-0"
            />
        </section>
    );
}
