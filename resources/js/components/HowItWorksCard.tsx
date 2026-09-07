import { cva } from 'class-variance-authority';
import { m, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

/**
 * HowItWorksCard — one step in the "proses" journey map. Adapted from the
 * 21st.dev `Card` to the Warm & Bersahaja palette: warm gradient washes,
 * serif Spectral step numbers, hairline borders, site shadows, tasteful
 * hand-placed rotations (passed via className, md+ only).
 *
 * Root is a motion list item so it composes with the journey layout:
 * mobile = full-width flow stack, md+ = absolutely-positioned on the map.
 */
const gradientVariants = cva(
    'relative flex w-full flex-col gap-3 rounded-2xl border border-cream-200/70 p-8 shadow-card transition-shadow duration-300 dark:border-warm-700/70 dark:shadow-card-dark md:w-[340px]',
    {
        variants: {
            gradient: {
                cream: 'bg-gradient-to-br from-cream-100 to-cream-200/60 dark:from-warm-800 dark:to-warm-700/60',
                terracotta:
                    'bg-gradient-to-br from-accent-600/12 to-accent-600/5 dark:from-accent-600/20 dark:to-accent-600/8',
                sand: 'bg-gradient-to-br from-warm-700/10 to-warm-700/5 dark:from-warm-700/30 dark:to-warm-800/20',
            },
        },
        defaultVariants: {
            gradient: 'cream',
        },
    },
);

export interface HowItWorksCardProps {
    /** Step number, e.g. "01". Rendered in a warm serif circle. */
    number: string;
    title: string;
    description: string;
    gradient?: 'cream' | 'terracotta' | 'sand';
    /** Position + rotation classes (md+ journey placement), e.g.
     *  "md:absolute md:left-0 md:top-0 md:rotate-1" */
    className?: string;
}

export function HowItWorksCard({
    number,
    title,
    description,
    gradient = 'cream',
    className,
}: HowItWorksCardProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <m.li
            whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className={cn(gradientVariants({ gradient }), className)}
        >
            {/* Number badge — serif, not handwriting */}
            <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-full border border-accent-600/25 bg-accent-600/10 font-serif text-lg font-bold leading-none text-accent-700 dark:bg-accent-600/15 dark:text-accent-600">
                {number}
            </span>
            <h3 className="font-serif text-[1.25rem] font-bold leading-snug tracking-tight text-ink-900 dark:text-cream-50">
                {title}
            </h3>
            <p className="text-[1rem] leading-relaxed text-ink-500 dark:text-ink-300">
                {description}
            </p>
        </m.li>
    );
}

HowItWorksCard.displayName = 'HowItWorksCard';