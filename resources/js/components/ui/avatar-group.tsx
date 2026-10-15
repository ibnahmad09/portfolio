import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export interface AvatarItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface AvatarGroupProps {
  items: AvatarItem[];
  className?: string;
  maxVisible?: number;
  size?: "sm" | "md" | "lg";
}

const SIZE_CLASSES = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
} as const;

// Individual avatar with a hover / focus tooltip card.
function Avatar({
  item,
  index,
  totalItems,
  size,
  isHovered,
  onHover,
  onLeave,
}: {
  item: AvatarItem;
  index: number;
  totalItems: number;
  size: "sm" | "md" | "lg";
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      style={{
        marginLeft: index === 0 ? 0 : "-0.5rem",
        zIndex: totalItems - index,
      }}
    >
      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 200, damping: 20 },
            }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 10, scale: 0.95 }
            }
            className="pointer-events-none absolute -top-16 z-50 flex min-w-max flex-col items-center justify-center whitespace-nowrap rounded-xl border border-cream-200 bg-cream-50 px-4 py-2 shadow-lg dark:border-warm-700 dark:bg-warm-800"
          >
            <div className="relative z-30 text-center text-base font-bold text-ink-900 dark:text-cream-50">
              {item.name}
            </div>
            <div className="text-center text-xs text-ink-500 dark:text-ink-300">
              {item.designation}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        transition={
          reduceMotion
            ? undefined
            : { type: "spring", stiffness: 200, damping: 15 }
        }
        className="relative"
      >
        <img
          height={100}
          width={100}
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={cn(
            "rounded-full border-2 border-cream-50 object-cover transition duration-300 dark:border-warm-900",
            SIZE_CLASSES[size],
          )}
        />
      </motion.div>
    </div>
  );
}

export function AvatarGroup({
  items,
  className,
  maxVisible = 5,
  size = "md",
}: AvatarGroupProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const visibleItems = items.slice(0, maxVisible);
  const remainingCount = items.length - maxVisible;

  return (
    <div className={cn("flex items-center justify-center", className)}>
      {visibleItems.map((item, index) => (
        <Avatar
          key={item.id}
          item={item}
          index={index}
          totalItems={visibleItems.length}
          size={size}
          isHovered={hoveredIndex === item.id}
          onHover={() => setHoveredIndex(item.id)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}

      {remainingCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            "-ml-2 flex items-center justify-center rounded-full border-2 border-cream-50 bg-cream-100 font-medium text-ink-500 dark:border-warm-900 dark:bg-warm-700 dark:text-cream-100",
            SIZE_CLASSES[size],
          )}
        >
          +{remainingCount}
        </motion.div>
      )}
    </div>
  );
}

export default AvatarGroup;
