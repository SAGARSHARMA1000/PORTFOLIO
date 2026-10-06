import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ style, text, image, containerRef, floating = false, className, label }) => {
  const prefersReducedMotion = useReducedMotion();
  const floatingPath = useMemo(() => {
    if (!floating) return undefined;

    const randomOffset = (amount) =>
      Math.round((Math.random() * 2 - 1) * amount);

    return {
      x: [0, randomOffset(14), randomOffset(8), randomOffset(18), 0],
      y: [0, randomOffset(12), randomOffset(16), randomOffset(8), 0],
    };
  }, [floating]);

  const floatingTransition = useMemo(
    () => ({
      duration: 8 + Math.random() * 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    }),
    []
  );

  const motionProps = floating && !prefersReducedMotion
    ? { animate: floatingPath, transition: floatingTransition }
    : {};

  return image && !text ? (
    <motion.div
      className={twMerge(
        "absolute flex items-center justify-center p-2 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-lg cursor-grab hover:border-aqua/50 hover:bg-white/10 transition-colors",
        className
      )}
      style={style}
      whileHover={{ scale: 1.14, zIndex: 25 }}
      whileDrag={{ scale: 1.18, cursor: "grabbing", zIndex: 30 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.8}
      {...motionProps}
    >
      <img
        src={image}
        alt={label || "tech icon"}
        className="size-5 sm:size-7 md:size-8 object-contain pointer-events-none select-none"
      />
    </motion.div>
  ) : (
    <motion.div
      className={twMerge(
        "absolute px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base text-center rounded-full border border-white/15 font-primary font-medium bg-gradient-to-r from-storm/95 to-indigo/95 backdrop-blur-md shadow-lg cursor-grab text-neutral-200 hover:border-lavender/60 hover:text-white whitespace-nowrap transition-colors",
        className
      )}
      style={style}
      whileHover={{ scale: 1.08, zIndex: 25 }}
      whileDrag={{ scale: 1.12, cursor: "grabbing", zIndex: 30 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.8}
      {...motionProps}
    >
      {text}
    </motion.div>
  );
};

export default Card;
