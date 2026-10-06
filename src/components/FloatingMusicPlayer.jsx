import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const FloatingMusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeMobile, setShowVolumeMobile] = useState(false);

  // Sync initial volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Audio playback error:", error);
        });
    }
  };

  const handleVolumeChange = (newVal) => {
    const val = parseFloat(newVal);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val > 0 && isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.volume = volume > 0 ? volume : 0.4;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <aside
      aria-label="Background music player"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none pointer-events-auto max-w-[calc(100vw-2rem)]"
    >
      {/* Hidden audio element pointing to public/music.mp3 */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {/* Mobile Volume Popover Controller (Opens smoothly on phone tap) */}
      <AnimatePresence>
        {showVolumeMobile && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden mb-2.5 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-[#060b1e]/95 px-4 py-2.5 shadow-2xl backdrop-blur-2xl"
          >
            {/* Mobile Mute Toggle */}
            <button
              type="button"
              onClick={toggleMute}
              className="flex size-7 items-center justify-center rounded-full bg-white/5 text-white/80 active:bg-white/15 transition"
              aria-label={isMuted ? "Unmute sound" : "Mute sound"}
            >
              {isMuted || volume === 0 ? (
                <svg
                  className="size-4 text-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              ) : (
                <svg
                  className="size-4 text-aqua"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Touch-Friendly Volume Slider */}
            <div className="flex flex-1 items-center gap-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(e.target.value)}
                className="w-24 xs:w-32 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-aqua"
                aria-label="Adjust volume on mobile"
              />
              <span className="font-mono text-xs text-white/75 w-8 text-right">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>

            {/* Close Mobile Volume Popup */}
            <button
              type="button"
              onClick={() => setShowVolumeMobile(false)}
              className="p-1 text-white/40 hover:text-white transition"
              aria-label="Close volume slider"
            >
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Responsive Music Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`flex items-center gap-2 sm:gap-3 rounded-full border px-2.5 py-1.5 sm:px-3.5 sm:py-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
          isPlaying
            ? "border-aqua/50 bg-[#060b1e]/95 shadow-[0_0_25px_rgba(51,194,204,0.3)]"
            : "border-white/15 bg-[#060a1a]/90 shadow-black/80 hover:border-white/30"
        }`}
      >
        {/* Play / Pause Round Action Button */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className={`relative flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-aqua active:scale-95 ${
            isPlaying
              ? "border-aqua/80 bg-aqua/20 text-aqua shadow-[0_0_15px_rgba(51,194,204,0.4)]"
              : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
          }`}
        >
          {isPlaying ? (
            /* Equalizer Soundwave Bars Animation */
            <div className="flex items-center gap-0.5">
              <span className="w-0.5 h-3 bg-aqua rounded-full animate-[pulse_0.7s_ease-in-out_infinite]" />
              <span className="w-0.5 h-4 bg-lavender rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.15s]" />
              <span className="w-0.5 h-2 bg-coral rounded-full animate-[pulse_0.85s_ease-in-out_infinite_0.3s]" />
              <span className="w-0.5 h-3.5 bg-aqua rounded-full animate-[pulse_1s_ease-in-out_infinite_0.1s]" />
            </div>
          ) : (
            /* Play Triangle Icon */
            <svg
              className="size-3.5 sm:size-4 fill-current translate-x-0.5 text-white/90"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Status / Title Label (Tap triggers play/pause) */}
        <button
          type="button"
          onClick={togglePlay}
          className="flex flex-col text-left cursor-pointer outline-none pr-1"
        >
          <span className="font-primary text-[11px] sm:text-xs font-semibold text-white tracking-wide flex items-center gap-1.5 whitespace-nowrap">
            {isPlaying ? "Playing" : "Play Music"}
            {isPlaying && (
              <span className="size-1.5 rounded-full bg-aqua animate-pulse shadow-[0_0_6px_#33c2cc]" />
            )}
          </span>
          <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-white/45 hidden xs:block whitespace-nowrap">
            {isPlaying ? "music.mp3" : "Cosmic Ambience"}
          </span>
        </button>

        {/* Mobile Volume Settings Trigger Button */}
        <button
          type="button"
          onClick={() => setShowVolumeMobile(!showVolumeMobile)}
          aria-label="Toggle mobile volume slider"
          className="sm:hidden flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 active:bg-white/20 transition outline-none"
        >
          {isMuted || volume === 0 ? (
            <svg
              className="size-3.5 text-coral"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          ) : (
            <svg
              className="size-3.5 text-white/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          )}
        </button>

        {/* Desktop Controls (Divider + Slider + % display) */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="h-4 w-px bg-white/15 mx-0.5" />

          {/* Desktop Mute Button */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="flex items-center justify-center text-white/60 hover:text-aqua transition outline-none"
          >
            {isMuted || volume === 0 ? (
              <svg
                className="size-4 text-coral"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                className="size-4 text-white/70 hover:text-aqua transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>

          {/* Desktop Slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => handleVolumeChange(e.target.value)}
            className="w-16 md:w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-aqua"
            aria-label="Adjust music volume"
          />

          {/* Percentage */}
          <span className="font-mono text-[10px] text-white/50 w-7 text-right">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>
      </motion.div>
    </aside>
  );
};

export default FloatingMusicPlayer;
