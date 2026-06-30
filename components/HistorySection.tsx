'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    era: '4.6 billion years ago',
    title: 'Formation',
    desc: 'Earth coalesces from the solar nebula, a swirling cloud of dust and gas left over from the Sun\'s birth.',
  },
  {
    era: '4.5 billion years ago',
    title: 'The Giant Impact',
    desc: 'A Mars-sized body collides with early Earth, ejecting debris that eventually forms the Moon.',
  },
  {
    era: '3.8 billion years ago',
    title: 'First Oceans',
    desc: 'The planet cools enough for water vapor to condense, filling early basins and forming the first oceans.',
  },
  {
    era: '3.5 billion years ago',
    title: 'First Life',
    desc: 'Simple single-celled organisms emerge in shallow seas, beginning the long story of life on Earth.',
  },
  {
    era: '541 million years ago',
    title: 'Cambrian Explosion',
    desc: 'A rapid diversification of life fills the oceans with complex, multicellular organisms.',
  },
];

export default function HistorySection() {
  return (
    <section className="relative bg-stone-950 px-6 py-28 md:px-16 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mb-16 max-w-xl"
      >
        <span className="font-mono text-[11px] tracking-[0.3em] text-stone-500 uppercase">
          Deep Time
        </span>
        <h2 className="mt-3 font-serif text-4xl text-stone-50 md:text-5xl">
          A history written in stone
        </h2>
      </motion.div>

      <div className="mx-auto flex max-w-3xl flex-col gap-2 border-l border-stone-800 pl-8 md:pl-12">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative py-8"
          >
            <span className="absolute -left-[2.55rem] top-9 h-2 w-2 rounded-full bg-stone-500 md:-left-[3.15rem]" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-stone-500 uppercase">
              {item.era}
            </span>
            <h3 className="mt-2 font-serif text-2xl text-stone-50 md:text-3xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-stone-400">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
