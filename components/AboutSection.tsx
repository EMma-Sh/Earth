'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative bg-stone-950 px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex max-w-md flex-col items-start gap-4 text-left"
        >
          <span className="font-mono text-[11px] tracking-[0.3em] text-stone-500 uppercase">
            About
          </span>
          <h2 className="font-serif text-4xl text-stone-50 md:text-5xl">
            A living world
          </h2>
          <p className="text-sm font-light leading-relaxed text-stone-400">
            Earth is the third planet from the Sun and the only place known
            to harbor life. Roughly 71% of its surface is covered in water,
            and its thin, protective atmosphere shields the surface from
            harmful radiation while trapping just enough heat to sustain
            liquid oceans and complex ecosystems.
          </p>
          <p className="text-sm font-light leading-relaxed text-stone-400">
            At 4.5 billion years old, Earth has weathered asteroid impacts,
            ice ages, and continental drift — slowly shaping the world we
            recognize today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[40vh] w-[40vh] max-w-[70vw] shrink-0 overflow-hidden rounded-full shadow-[0_0_120px_-20px_rgba(120,170,255,0.3)] ring-1 ring-stone-700/50 md:ml-auto"
        >
          <Image
            src="/textures/earth.jpg"
            alt="Earth from space"
            fill
            sizes='(max-width: 786px) 70vw, 40vh'
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
