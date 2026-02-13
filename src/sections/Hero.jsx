import { motion } from "framer-motion";
import HeroScene from "../components/HeroScene";

export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden pb-20 pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm uppercase tracking-[0.4em] text-neon-400"
          >
            Portfolio 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight md:text-6xl"
          >
            Hi, I&apos;m Saksham Singh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg text-white/70"
          >
            Aspiring Software Engineer | DSA | Full Stack
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26 }}
            className="mt-3 max-w-xl text-sm text-white/60"
          >
            Computer Science student focused on building scalable full-stack applications and mastering
            Data Structures & Algorithms.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="relative group">
              <a
                href="mailto:saksham22.dev@gmail.com"
                className="rounded-full bg-neon-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-neon-400"
              >
                Hire Me
              </a>
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neon-500/40 bg-base-900/95 px-3 py-1 text-xs text-white/90 opacity-0 shadow-glow transition group-hover:opacity-100">
                Please 😊
              </span>
            </div>
            <a
              href="https://drive.google.com/file/d/1OIoJYIigzNa-pB1wXSfGpsV1JpcET7oU/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neon-500/50 px-6 py-3 text-sm font-semibold text-neon-300 transition hover:bg-neon-500/10"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-neon-500/60 hover:text-neon-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative h-72 w-full md:h-96">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-base-800/40 shadow-card" />
          <div className="absolute inset-0 -translate-y-4 rounded-3xl border border-neon-500/20 bg-gradient-to-br from-neon-500/10 via-transparent to-transparent" />
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
