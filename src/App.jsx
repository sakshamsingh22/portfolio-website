import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import StarsBackdrop from "./components/StarsBackdrop";
import IntroLoader from "./components/IntroLoader";
import CustomCursor from "./components/CustomCursor";
import ErrorBoundary from "./components/ErrorBoundary";
import PortfolioAgent from "./components/PortfolioAgent";
import RecruiterValue from "./sections/RecruiterValue";
import { initializeAnalytics, trackEvent } from "./lib/analytics";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [showHeroPreview, setShowHeroPreview] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    initializeAnalytics();
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarse(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const navigationLinks = [
    ["About", "#about"],
    ["Why hire", "#why-hire"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#journey"],
    ["Contact", "#contact"],
  ];

  function handleNavigationClick(label) {
    trackEvent("navigation_click", { label });
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="relative min-h-screen text-white">
      <StarsBackdrop />
      <header className="section-padding sticky top-0 z-50 border-b border-white/5 bg-base-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
          <div
            className="relative flex items-center gap-3 text-lg font-semibold"
            onMouseEnter={() => {
              if (isCoarse) return;
              setShowProfileCard(true);
              setShowHeroPreview(true);
            }}
            onMouseLeave={() => {
              if (isCoarse) return;
              setShowProfileCard(false);
              setShowHeroPreview(false);
            }}
          >
            <span className="h-2 w-2 rounded-full bg-neon-500 shadow-glow" />
            <button
              type="button"
              className="flex min-w-0 items-center gap-3"
              onClick={() => isCoarse && setShowProfileCard((prev) => !prev)}
              aria-label="Open profile details"
            >
              <motion.img
                src="/WhatsApp Image 2026-01-24 at 11.50.33.jpeg"
                alt="Saksham Singh"
                width="40"
                height="40"
                decoding="async"
                className="nav-avatar h-10 w-10 shrink-0 rounded-full border border-white/10 object-cover object-[center_20%] ring-1 ring-white/10"
                whileHover={
                  !isCoarse
                    ? {
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 10px 24px rgba(79, 107, 255, 0.35)"
                      }
                    : undefined
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <span>Saksham Singh</span>
            </button>

            <AnimatePresence>
              {!isCoarse && showProfileCard && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-white/10 bg-base-900/80 p-4 text-sm text-white/80 shadow-card backdrop-blur"
                >
                  <img
                    src="/WhatsApp Image 2026-01-24 at 11.50.33.jpeg"
                    alt="Saksham Singh"
                    width="96"
                    height="96"
                    loading="lazy"
                    decoding="async"
                    className="mx-auto mb-4 h-24 w-24 rounded-full border border-neon-500/40 object-cover object-[center_20%] shadow-glow"
                  />
                  <p className="text-base font-semibold text-white">Saksham Singh</p>
                  <p className="mt-1 text-xs text-white/60">Full Stack Developer | DSA Enthusiast</p>
                  <p className="mt-3 text-xs text-white/70">
                    <span className="text-white/50">Core Stack:</span> AI, AWS, FastAPI, Django, Python, C++, JavaScript
                  </p>
                  <p className="mt-2 text-xs text-white/70">
                    <span className="text-white/50">Location:</span> India
                  </p>
                  <p className="mt-2 text-xs text-white/70">
                    <span className="text-white/50">Email:</span> saksham22.dev@gmail.com
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-white/70">
                    <a
                      href="https://www.linkedin.com/in/saksham-singh-5b2627290/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 p-2 transition hover:border-neon-500/60 hover:text-neon-300 hover:shadow-glow"
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <path d="M2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/sakshamsingh22"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 p-2 transition hover:border-neon-500/60 hover:text-neon-300 hover:shadow-glow"
                      aria-label="GitHub"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.1.68-.2.68-.47v-1.72c-2.78.62-3.36-1.35-3.36-1.35-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .08 1.52 1.04 1.52 1.04.9 1.52 2.36 1.08 2.94.83.1-.64.35-1.08.64-1.33-2.22-.25-4.56-1.12-4.56-4.98 0-1.1.4-2 1.04-2.7-.1-.26-.45-1.3.1-2.7 0 0 .86-.28 2.8 1.03a9.7 9.7 0 0 1 5.1 0c1.94-1.31 2.8-1.03 2.8-1.03.55 1.4.2 2.44.1 2.7.64.7 1.04 1.6 1.04 2.7 0 3.88-2.34 4.72-4.58 4.96.36.32.68.94.68 1.9v2.8c0 .27.18.58.68.47A10 10 0 0 0 12 2z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isCoarse && showProfileCard && (
                createPortal(
                  <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={() => setShowProfileCard(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.78, y: 18 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.88, y: 12 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="relative rounded-3xl border border-white/10 bg-base-900/75 p-3 shadow-card backdrop-blur-xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        className="absolute -right-2 -top-12 rounded-full border border-white/15 bg-base-900/90 px-4 py-2 text-xs uppercase tracking-widest text-white/75 transition hover:border-neon-500/60 hover:text-white"
                        onClick={() => setShowProfileCard(false)}
                        aria-label="Close profile photo"
                      >
                        Back
                      </button>
                      <motion.img
                        src="/WhatsApp Image 2026-01-24 at 11.50.33.jpeg"
                        alt="Saksham Singh"
                        className="block h-[min(78vh,34rem)] w-[min(86vw,22rem)] rounded-2xl object-contain shadow-[0_0_40px_rgba(79,107,255,0.35)]"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </motion.div>,
                  document.body
                )
              )}
            </AnimatePresence>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex gap-6 text-sm text-white/70">
              {navigationLinks.map(([label, href]) => (
                <a key={label} className="link-underline" href={href} onClick={() => handleNavigationClick(label)}>
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="rounded-full border border-neon-500/50 px-4 py-2 text-xs uppercase tracking-widest text-neon-400 transition hover:bg-neon-500/10"
            >
              Let&apos;s Connect
            </a>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/15 p-2 text-white/80 md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 py-3 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navigationLinks.map(([label, href]) => (
                  <a key={label} className="rounded-xl px-3 py-3 text-sm text-white/75 hover:bg-white/5 hover:text-white" href={href} onClick={() => handleNavigationClick(label)}>
                    {label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {showHeroPreview && !isCoarse && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <motion.div
              className="relative z-10 rounded-3xl border border-white/10 bg-base-900/60 p-6 shadow-card backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.img
                src="/WhatsApp Image 2026-01-24 at 11.50.33.jpeg"
                alt="Saksham Singh"
                className="h-72 w-72 rounded-2xl object-cover object-[center_20%] shadow-[0_0_40px_rgba(79,107,255,0.35)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIntro && (
          <ErrorBoundary onError={() => setShowIntro(false)} fallback={null}>
            <IntroLoader onFinish={() => setShowIntro(false)} />
          </ErrorBoundary>
        )}
      </AnimatePresence>

      <main
        className={`relative z-10 transition-opacity duration-700 ${
          showIntro ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <Hero />
        <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <About />
        </motion.section>
        <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <RecruiterValue />
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
      <PortfolioAgent />
      <CustomCursor />
    </div>
  );
}
