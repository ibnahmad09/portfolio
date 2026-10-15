import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

/**
 * ServicesCard — displays 6 core services as individual pill-shaped cards.
 *
 * Desktop (md+): pills wrap into centred rows.
 * Mobile: pills split into two marquee rows that drift in opposite
 * directions — the top row moves right, the bottom row moves left — for a
 * livelier, fully-bleed band under the hero. The wrap layout is kept for
 * larger screens where all pills fit comfortably.
 *
 * Uses the "Warm & Bersahaja" palette.
 */

interface ServiceItem {
    name: string;
    icon: ReactNode;
}

const SERVICES: ServiceItem[] = [
    {
        name: 'Website Company Profile',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M9 21V13h6v8" />
                <path d="M9 9h.01M15 9h.01M9 17h.01M15 17h.01" />
            </svg>
        ),
    },
    {
        name: 'Website Marketing',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
    },
    {
        name: 'Website UMKM',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path d="M9 22V12h6v10" />
            </svg>
        ),
    },
    {
        name: 'Website Pendidikan',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5L2 10z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
    },
    {
        name: 'Website Sistem Manajemen Sekolah',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                <path d="M8 7h8M8 11h6" />
            </svg>
        ),
    },
    {
        name: 'Website Custom',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
];

function staggerDelay(index: number): number {
    return 0.06 * index;
}

/** Single service pill — shared by the desktop wrap and the mobile marquee. */
function ServicePill({
    service,
    className,
    ariaHidden,
}: {
    service: ServiceItem;
    className?: string;
    ariaHidden?: boolean;
}) {
    return (
        <div
            aria-hidden={ariaHidden}
            className={cn(
                'flex items-center gap-2.5 rounded-full px-4 py-2',
                'border border-cream-200/60 bg-cream-50/80',
                'shadow-sm backdrop-blur-sm',
                'transition-all duration-200',
                'hover:border-accent-600/30 hover:shadow-md',
                'dark:border-warm-700/60 dark:bg-warm-800/80',
                'dark:hover:border-accent-600/30',
                className,
            )}
        >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-600/10 text-accent-600 dark:bg-accent-600/20">
                {service.icon}
            </span>
            <span className="text-sm font-medium whitespace-nowrap text-ink-800 dark:text-cream-100">
                {service.name}
            </span>
        </div>
    );
}

/**
 * One marquee lane. The set is rendered twice so a 50% translate loops
 * seamlessly; `direction` picks which way the lane drifts.
 */
function MarqueeRow({
    items,
    direction,
}: {
    items: ServiceItem[];
    direction: 'left' | 'right';
}) {
    const loop = [...items, ...items];

    return (
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div
                className={cn(
                    'flex w-max',
                    direction === 'left'
                        ? 'animate-marquee-left'
                        : 'animate-marquee-right',
                    'motion-reduce:animate-none',
                )}
            >
                {loop.map((service, i) => (
                    <ServicePill
                        key={`${direction}-${service.name}-${i}`}
                        service={service}
                        className="mr-3 shrink-0"
                        ariaHidden={i >= items.length}
                    />
                ))}
            </div>
        </div>
    );
}

export function ServicesCard({ className }: { className?: string }) {
    const prefersReducedMotion = useReducedMotion();

    const topRow = SERVICES.slice(0, 3);
    const bottomRow = SERVICES.slice(3);

    return (
        <div className={cn('w-full', className)}>
            {/* Desktop: centred wrap (unchanged) */}
            <div className="hidden flex-wrap items-center justify-center gap-3 md:flex">
                {SERVICES.map((service, i) => (
                    <motion.div
                        key={service.name}
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, scale: 0.9 }
                        }
                        animate={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 1, scale: 1 }
                        }
                        transition={{
                            duration: 0.4,
                            delay: 0.3 + staggerDelay(i),
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <ServicePill service={service} />
                    </motion.div>
                ))}
            </div>

            {/* Mobile: two opposite marquee lanes, edge to edge */}
            <div className="-mx-4 flex flex-col gap-3 md:hidden">
                <MarqueeRow items={topRow} direction="right" />
                <MarqueeRow items={bottomRow} direction="left" />
            </div>
        </div>
    );
}

ServicesCard.displayName = 'ServicesCard';
