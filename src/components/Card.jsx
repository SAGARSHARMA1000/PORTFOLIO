import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";

const Card = ({ style, text, image, containerRef, floating = false }) => {
  const prefersReducedMotion = useReducedMotion();
  const floatingPath = useMemo(() => {
    if (!floating) return undefined;

    // Keep the movement subtle so cards remain near their starting positions.
    const randomOffset = (amount) =>
      Math.round((Math.random() * 2 - 1) * amount);

    return {
      x: [0, randomOffset(28), randomOffset(18), randomOffset(32), 0],
      y: [0, randomOffset(22), randomOffset(34), randomOffset(16), 0],
    };
  }, [floating]);

  const floatingTransition = useMemo(
    () => ({
      duration: 9 + Math.random() * 5,
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
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.08, cursor: "grabbing", zIndex: 20 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      {...motionProps}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.04, cursor: "grabbing", zIndex: 20 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      {...motionProps}
    >
      {text}
    </motion.div>
  );
};

export default Card;
