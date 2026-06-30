import EarthScene from '@/components/EarthScene';
import HeroOverlay from '@/components/HeroOverlay';
import AboutSection from '@/components/AboutSection';
import HistorySection from '@/components/HistorySection';
import ContinentsSection from '@/components/ContinentsSection';

export default function Home() {
  return (
    <main className="relative">
      {/* Hero: 3D Earth canvas + overlay text, 70% viewport height for fast scroll */}
      <div
        className="relative w-full overflow-hidden bg-stone-950"
        style={{ height: '70dvh' }}
      >
        <EarthScene />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-950/30 via-transparent to-stone-950" />
        <HeroOverlay />
      </div>

      {/* Scroll content */}
      <AboutSection />
      <HistorySection />
      <ContinentsSection />

      <footer className="border-t border-stone-900 bg-stone-950 px-6 py-16 md:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <h4 className="font-serif text-2xl text-stone-50">Earth</h4>
            <p className="mt-3 text-sm font-light leading-relaxed text-stone-400">
              An interactive geographic survey — built to explore Earth&apos;s
              surface, history, and continents through motion.
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-500">
            <span className="text-stone-300">Built with</span>
            <span>Next.js</span>
            <span>Three.js / React Three Fiber</span>
            <span>Framer Motion</span>
          </div>

          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-500">
            <span className="text-stone-300">Imagery</span>
            <span>NASA Blue Marble</span>
            <span>NASA Earth Observatory</span>
          </div>
        </div>

        <p className="mt-12 border-t border-stone-900 pt-6 font-mono text-[10px] tracking-[0.2em] text-stone-600 uppercase">
          End of survey log — Field study no. 01
        </p>
      </footer>
    </main>
  );
}
