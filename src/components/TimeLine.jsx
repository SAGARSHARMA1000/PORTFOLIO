import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useRef, useState } from "react";

export const Timeline = ({ data = [] }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isInView = useInView(containerRef, { once: true, amount: 0.12 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const progressHeight = useTransform(smoothProgress, [0, 1], [0, 100]);
  const progressLabel = useTransform(
    smoothProgress,
    (value) => `${Math.round(value * 100)}%`
  );

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const nextIndex = Math.min(
      data.length - 1,
      Math.max(0, Math.floor(latest * data.length))
    );
    setActiveIndex(nextIndex);
  });

  return (
    <section className="relative c-space section-spacing overflow-hidden" ref={containerRef} aria-label="My journey">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-12 flex items-end justify-between gap-6"
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-lavender">The path so far</p>
          <h2 className="text-heading">My Journey</h2>
        </div>
        <motion.div
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-400 sm:flex"
          whileHover={{ borderColor: "rgba(122,87,219,.6)", color: "#fff" }}
        >
          <span className="size-2 animate-pulse rounded-full bg-aqua" />
          {activeIndex + 1} / {data.length} milestones
        </motion.div>
      </motion.div>

      <div className="relative pb-16">
        {data.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.article
              key={`${item.date}-${item.title}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group relative flex justify-start pt-8 md:gap-10 md:pt-28"
            >
              <div className="sticky top-32 z-20 flex h-fit w-10 shrink-0 flex-col items-center self-start md:w-full md:max-w-sm md:flex-row">
                <motion.div
                  animate={isActive ? { scale: 1.18 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className={`relative flex size-10 items-center justify-center rounded-full border transition-colors duration-300 ${
                    isActive ? "border-lavender/70 bg-lavender/20 shadow-[0_0_28px_rgba(122,87,219,0.55)]" : "border-white/10 bg-midnight"
                  }`}
                >
                  <span className={`size-3 rounded-full transition-all duration-300 ${
                    isActive ? "bg-aqua shadow-[0_0_12px_#33c2cc]" : "bg-neutral-700"
                  }`} />
                </motion.div>

                <div className="hidden flex-col gap-1 pl-8 md:flex">
                  <span className="text-sm font-medium text-lavender">{item.date}</span>
                  <h3 className="text-2xl font-bold text-neutral-200 transition-colors group-hover:text-white lg:text-3xl">{item.title}</h3>
                  <p className="text-lg text-neutral-500">{item.job}</p>
                </div>
              </div>

              <div className="relative ml-6 w-full pl-6 md:ml-0 md:pl-4">
                <div className="mb-5 md:hidden">
                  <span className="text-sm font-medium text-lavender">{item.date}</span>
                  <h3 className="mt-1 text-2xl font-bold text-neutral-200">{item.title}</h3>
                  <p className="text-neutral-500">{item.job}</p>
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className={`relative overflow-hidden rounded-2xl border p-5 transition-colors duration-500 md:p-7 ${
                    isActive ? "border-lavender/30 bg-gradient-to-br from-lavender/[0.14] to-white/[0.03]" : "border-white/[0.07] bg-white/[0.025] group-hover:border-white/15"
                  }`}
                >
                              <div className="relative space-y-3">
                    {item.contents.map((content, contentIndex) => (
                      <motion.p
                        key={contentIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + contentIndex * 0.08 }}
                        className="flex gap-3 text-sm leading-7 text-neutral-400 md:text-base"
                      >
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-aqua/70" />
                        <span>{content}</span>
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.article>
          );
        })}

        <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <motion.div
          style={{ height: useTransform(progressHeight, (value) => `${value}%`) }}
          className="absolute left-[18px] top-0 w-[3px] rounded-full bg-gradient-to-b from-aqua via-lavender to-transparent shadow-[0_0_14px_rgba(122,87,219,0.7)]"
        />
        <motion.span
          className="absolute -left-1 top-0 hidden -translate-x-full rounded-full border border-white/10 bg-midnight px-2 py-1 text-[10px] text-neutral-500 md:block"
          style={{ top: useTransform(progressHeight, (value) => `${value}%`) }}
        >
          {progressLabel}
        </motion.span>
      </div>
    </section>
  );
};



