import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import StarsBackdrop from "./components/StarsBackdrop";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <StarsBackdrop />
      <header className="section-padding sticky top-0 z-50 border-b border-white/5 bg-base-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="h-2 w-2 rounded-full bg-neon-500 shadow-glow" />
            <img
              src="/WhatsApp Image 2026-01-24 at 11.50.33.jpeg"
              alt="Saksham Singh"
              className="h-9 w-9 rounded-full border border-white/10 object-cover object-[center_20%] ring-1 ring-white/10"
            />
            Saksham Singh
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex gap-6 text-sm text-white/70">
              <a className="link-underline" href="#about">About</a>
              <a className="link-underline" href="#skills">Skills</a>
              <a className="link-underline" href="#projects">Projects</a>
              <a className="link-underline" href="#journey">Journey</a>
              <a className="link-underline" href="#contact">Contact</a>
            </nav>
            <a
              href="#contact"
              className="rounded-full border border-neon-500/50 px-4 py-2 text-xs uppercase tracking-widest text-neon-400 transition hover:bg-neon-500/10"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </header>

      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-base-900"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-neon-500/40" />
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Loading</p>
          </div>
        </motion.div>
      )}

      <main className="relative z-10">
        <Hero />
        <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <About />
        </motion.section>
        <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Skills />
        </motion.section>
        <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Projects />
        </motion.section>
        <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Certifications />
        </motion.section>
        <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Journey />
        </motion.section>
        <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Contact />
        </motion.section>
      </main>

      <footer className="section-padding border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <span>Built with React, Three.js, and Framer Motion.</span>
          <span>© 2026 Saksham Singh. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
