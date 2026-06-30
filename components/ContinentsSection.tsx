'use client';

import { motion } from 'framer-motion';

const continents = [
  {
    name: 'Asia',
    stat: '44.6M km²',
    desc: 'The largest and most populous continent, home to the Himalayas, the Siberian tundra, and over half of humanity.',
    bgPosition: '70% 35%',
    bgSize: '320%',
  },
  {
    name: 'Africa',
    stat: '30.4M km²',
    desc: 'The cradle of humankind — spanning the Sahara desert, the Congo rainforest, and the Great Rift Valley.',
    bgPosition: '50% 55%',
    bgSize: '300%',
  },
  {
    name: 'North America',
    stat: '24.7M km²',
    desc: 'From Arctic tundra to tropical coastlines, a continent of dramatic mountain ranges and vast plains.',
    bgPosition: '20% 30%',
    bgSize: '320%',
  },
  {
    name: 'South America',
    stat: '17.8M km²',
    desc: 'Home to the Amazon rainforest, the Andes mountains, and the driest non-polar desert on Earth.',
    bgPosition: '25% 65%',
    bgSize: '320%',
  },
  {
    name: 'Antarctica',
    stat: '14.2M km²',
    desc: "Earth's southernmost continent — a frozen desert holding roughly 70% of the world's fresh water as ice.",
    bgPosition: '50% 95%',
    bgSize: '260%',
  },
  {
    name: 'Europe',
    stat: '10.2M km²',
    desc: 'A continent of varied geography, from Scandinavian fjords to Mediterranean coastlines.',
    bgPosition: '52% 25%',
    bgSize: '340%',
  },
  {
    name: 'Australia',
    stat: '7.7M km²',
    desc: 'The smallest continent and only nation-continent, defined by vast deserts and unique, isolated wildlife.',
    bgPosition: '85% 60%',
    bgSize: '320%',
  },
];

export default function ContinentsSection() {
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
          Land Survey
        </span>
        <h2 className="mt-3 font-serif text-4xl text-stone-50 md:text-5xl">
          Seven continents
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-stone-800 bg-stone-800 md:grid-cols-2">
        {continents.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-72 overflow-hidden bg-stone-950"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: 'url(/textures/earth.jpg)',
                backgroundPosition: c.bgPosition,
                backgroundSize: c.bgSize,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-1 p-6 md:p-8">
              <span className="font-mono text-[10px] tracking-[0.2em] text-stone-400 uppercase">
                {c.stat}
              </span>
              <h3 className="font-serif text-2xl text-stone-50 md:text-3xl">{c.name}</h3>
              <p className="mt-1 max-w-xs text-xs font-light leading-relaxed text-stone-300">
                {c.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
