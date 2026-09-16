import { cva } from 'class-variance-authority';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

/**
 * GradientCard — adapted from the 21st.dev component to the "Warm &
 * Bersahaja" palette. A premium hover-lifting card with a soft warm gradient
 * surface, a decorative corner image, and a CTA that smooth-scrolls to the
 * contact section (one-page site).
 *
 * Gradient variants are tuned so the surface reads correctly on `bg-cream-50`
 * (light) and `bg-warm-900` (dark) — warm washes, not neon.
 */
const gradientVariants = cva(
    'relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-9 shadow-card transition-shadow duration-300 dark:shadow-card-dark xl:p-11',
    {
        variants: {
            gradient: {
                cream: 'bg-gradient-to-br from-cream-100 to-cream-200/60 dark:from-warm-800 dark:to-warm-700/60',
                terracotta:
                    'bg-gradient-to-br from-accent-600/12 to-accent-600/5 dark:from-accent-600/20 dark:to-accent-600/8',
                sand: 'bg-gradient-to-br from-warm-700/10 to-warm-700/5 dark:from-warm-700/30 dark:to-warm-800/20',
                ink: 'bg-gradient-to-br from-warm-800 to-warm-900 dark:from-warm-800 dark:to-warm-700/70',
            },
        },
        defaultVariants: {
            gradient: 'cream',
        },
    },
);

export interface GradientCardProps {
    /** Short label in a pill, e.g. "Percepatan" */
    badgeText: string;
    /** Hex color of the badge dot — pick warm hues (terracotta, sand, …) */
    badgeColor: string;
    title: string;
    description: string;
    /** CTA label, defaults to "Pelajari lebih lanjut" */
    ctaText?: string;
    /** Optional decorative corner image (warm placeholder via picsum) */
    imageUrl?: string;
    gradient?: 'cream' | 'terracotta' | 'sand' | 'ink';
    className?: string;
}

export function GradientCard({
    badgeText,
    badgeColor,
    title,
    description,
    ctaText = 'Pelajari lebih lanjut',
    imageUrl,
    gradient = 'cream',
    className,
}: GradientCardProps) {
    const prefersReducedMotion = useReducedMotion();

    /** Smooth-scroll to the contact section (one-pager). */
    const scrollToKontak = () => {
        const el = document.getElementById('cta');
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            whileHover={prefersReducedMotion ? undefined : { y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className={cn(
                'group',
                gradientVariants({ gradient }),
                className,
            )}
        >
            {/* Decorative corner image — zoom/rotate gently on hover */}
            {imageUrl && (
                <motion.img
                    src={imageUrl}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    draggable={false}
                    animate={prefersReducedMotion ? undefined : { scale: 1, rotate: 0 }}
                    whileHover={
                        prefersReducedMotion
                            ? undefined
                            : { scale: 1.08, rotate: 3 }
                    }
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="pointer-events-none absolute -right-11 -top-14 h-48 w-48 rounded-full object-cover opacity-40 dark:opacity-30"
                    style={
                        {
                            // Soft warm ring around the corner image
                            boxShadow: '0 0 0 10px rgba(160,90,44,0.10)',
                        } as CSSProperties
                    }
                />
            )}

            {/* Top row: badge dot + label */}
            <div className="relative flex items-center gap-2.5">
                <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: badgeColor }}
                    aria-hidden
                />
                <span className="text-sm font-semibold tracking-wide text-ink-500 dark:text-ink-300">
                    {badgeText}
                </span>
            </div>

            {/* Content */}
            <div className="relative mt-10">
                <h3 className="font-serif text-2xl font-bold leading-snug tracking-tight text-ink-900 dark:text-cream-50">
                    {title}
                </h3>
                <p className="mt-4 max-w-sm text-[1.02rem] leading-relaxed text-ink-500 dark:text-ink-300">
                    {description}
                </p>
            </div>

            {/* CTA */}
            <button
                type="button"
                onClick={scrollToKontak}
                className="relative mt-8 inline-flex items-center gap-2.5 self-start text-base font-semibold text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-600 dark:hover:text-accent-600"
                aria-label={`${ctaText} — ${title}`}
            >
                {ctaText}
                <ArrowRight
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                />
            </button>
        </motion.div>
    );
}

GradientCard.displayName = 'GradientCard';