import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const TELEMETRY_LINES = [
  "INITIALIZING NEURAL CORE...",
  "MAPPING ORBITAL CONSTELLATIONS...",
  "SYNCING MERN + AI FRAMEWORKS...",
  "WARP DRIVE READY // ENTERING SYSTEM",
];

export const SpaceLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Generate realistic cosmic initialization ticker
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }

        const delta = prev < 50 ? Math.floor(Math.random() * 9) + 4 : Math.floor(Math.random() * 6) + 3;
        const next = Math.min(prev + delta, 100);

        if (next > 75) setStage(3);
        else if (next > 50) setStage(2);
        else if (next > 25) setStage(1);

        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(12px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#02030d] select-none overflow-hidden"
        >
          {/* Cosmic Nebula Background Ambience */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-royal/20 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 size-[28rem] -translate-x-1/2 rounded-full bg-aqua/15 blur-[120px]" />

          {/* Stardust particles background */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="absolute size-1 animate-pulse rounded-full bg-white/70"
                style={{
                  top: `${(i * 31) % 100}%`,
                  left: `${(i * 47) % 100}%`,
                  animationDuration: `${2 + (i % 4)}s`,
                }}
              />
            ))}
          </div>

          {/* Central Holographic Cosmic Core */}
          <div className="relative mb-10 flex size-40 items-center justify-center sm:size-48">
            {/* Outer Orbit Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-aqua/30 shadow-[0_0_25px_rgba(51,194,204,0.15)]"
            >
              <span className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-aqua shadow-[0_0_10px_#33c2cc]" />
            </motion.div>

            {/* Middle Orbit Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dotted border-lavender/40 shadow-[0_0_20px_rgba(122,87,219,0.2)]"
            >
              <span className="absolute -bottom-1.5 left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-lavender shadow-[0_0_10px_#7a57db]" />
            </motion.div>

            {/* Inner Ring 3 with Radiant Radial Gradient */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-8 rounded-full border border-white/20 bg-gradient-to-br from-[#0e1638] via-[#090e24] to-[#040612] p-2 shadow-inner"
            />

            {/* Pulsing Quantum Center Orb */}
            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex size-12 items-center justify-center rounded-full bg-radial from-white via-aqua to-royal shadow-[0_0_30px_6px_rgba(51,194,204,0.6)]"
            >
              <span className="font-mono text-[10px] font-black text-black">AI</span>
            </motion.div>
          </div>

          {/* Main Title & Role Presentation */}
          <div className="text-center px-4">
            {/* Sagar Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20, letterSpacing: "0.05em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.12em" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-primary text-5xl sm:text-6xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]"
            >
              Sagar
            </motion.h1>

            {/* Subtitle: AI Full Stack Dev */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 inline-flex items-center gap-2.5 rounded-full border border-aqua/30 bg-gradient-to-r from-aqua/10 via-lavender/10 to-royal/10 px-5 py-2 shadow-[0_0_25px_rgba(51,194,204,0.2)] backdrop-blur-md"
            >
              <span className="size-2 rounded-full bg-aqua animate-ping shadow-[0_0_8px_#33c2cc]" />
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-aqua">
                Ai Full Stack Dev
              </span>
            </motion.div>
          </div>

          {/* Telemetry Progress Console */}
          <div className="mt-10 w-72 sm:w-96 px-4">
            {/* Telemetry Bar Header */}
            <div className="flex items-center justify-between font-mono text-[11px] text-white/60 mb-2">
              <span className="uppercase tracking-[0.2em] text-lavender flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-lavender animate-pulse" />
                Telemetry Matrix
              </span>
              <span className="font-bold font-mono text-white tracking-widest">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>

            {/* Cyber Neon Progress Track */}
            <div className="relative h-2 w-full overflow-hidden rounded-full border border-white/15 bg-black/60 p-[1px] shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-royal via-lavender to-aqua shadow-[0_0_15px_#33c2cc]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Dynamic Mission Logs */}
            <div className="mt-3.5 flex items-center justify-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/50">
              <span className="text-aqua">›</span>
              <span className="h-4">{TELEMETRY_LINES[stage]}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpaceLoader;
