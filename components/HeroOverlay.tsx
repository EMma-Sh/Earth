'use client';

import { motion } from 'framer-motion';

export default function HeroOverlay() {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between px-6 py-10 md:px-16 md:py-14 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-stone-400 uppercase"
      >
        <span>Planetary Survey — Field Log No. 01</span>
        <span className="hidden md:inline">149.6 million km from the Sun</span>
      </motion.div>

      <div className="flex flex-col items-start gap-2">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-mono text-[11px] tracking-[0.3em] text-stone-400 uppercase"
        >
          Geographic Survey
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[14vw] leading-[0.85] text-stone-50 md:text-[7.5rem]"
        >
          Earth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md font-light text-stone-300 text-sm md:text-base leading-relaxed"
        >
          The only known world to harbor life — a blue marble of oceans,
          continents, and atmosphere. Drag to rotate; scroll to descend into
          the survey notes.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-stone-400 uppercase"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
        Scroll to descend
      </motion.div>
    </div>
  );
}
