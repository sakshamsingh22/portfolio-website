import { motion } from "framer-motion";
import { timeline } from "@/data/content";

export default function Journey() {
  return (
    <section id="journey" className="section-padding py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.4em] text-neon-400">Journey</p>
          <h2 className="mt-4 text-3xl font-semibold">Education & learning timeline</h2>
        </div>

        <div className="relative grid gap-8">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 sm:block" />
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pl-0 sm:pl-12"
            >
              <span className="absolute left-3 top-7 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-neon-500 bg-base-900 shadow-glow sm:block" />
              <div className="card p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold text-neon-400">{item.year}</span>
                    <span className="h-2 w-2 rounded-full bg-neon-500 sm:hidden" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                  </div>
                  <div className="ml-auto hidden text-sm text-white/40 md:block">
                    Phase {index + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl text-sm text-white/60">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Key Learning</p>
          <p className="mt-3">
            This journey reinforced that consistency, strong fundamentals, and real practice matter more
            than speed. Each year added a new layer of skills and helped me grow step by step as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
