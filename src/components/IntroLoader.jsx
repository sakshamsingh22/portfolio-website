import { motion } from "framer-motion";
import { useMemo, useRef } from "react";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    filter: "blur(6px)",
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

const typeContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1 }
};

export default function IntroLoader({ onFinish }) {
  const lineOne = useMemo(
    () => "INITIALIZING DEVELOPER ENVIRONMENT...".split(""),
    []
  );

  const lineTwo = "Welcome to Saksham Singh";

  const lineThree = useMemo(() => "PORTFOLIO".split(""), []);

  const doneRef = useRef(false);

  const holdAfterPortfolio = 800;

  const lineOneDuration = 1.2;
  const lineTwoDelay = lineOneDuration + 0.1;
  const lineThreeDelay = 1.6;

  const lineOneLetterDuration = 0.12;
  const lineThreeLetterDuration = 0.18;
  const lineThreeRevealDuration = 0.6;

  const lineOneStagger =
    (lineOneDuration - lineOneLetterDuration) /
    Math.max(lineOne.length - 1, 1);

  const lineThreeStagger =
    (lineThreeRevealDuration - lineThreeLetterDuration) /
    Math.max(lineThree.length - 1, 1);

  const lineOneDelay = 0.05;

  const lineOneLetter = {
    hidden: { opacity: 0, y: 6, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: lineOneLetterDuration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // ✅ FIXED — removed blur from PORTFOLIO letters
  const lineThreeLetter = {
    hidden: { opacity: 0, y: 8, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: lineThreeLetterDuration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const handleComplete = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onFinish?.();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden bg-base-900"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(79,107,255,0.18), transparent 50%), radial-gradient(circle at 80% 30%, rgba(91,141,255,0.12), transparent 55%)"
        }}
        animate={{ opacity: [0.2, 0.55, 0.35], scale: [0.98, 1.02, 1] }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(79,107,255,0.35), transparent 60%)"
        }}
        animate={{ opacity: [0.15, 0.6, 0.25] }}
        transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }}
      />

      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
        animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
      />

      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      />

      {/* Center Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center">

          {/* Line 1 */}
          <motion.div
            className="text-xs font-mono uppercase tracking-[0.35em] text-white/80 md:text-sm"
            variants={typeContainer}
            initial="hidden"
            animate="show"
            transition={{
              staggerChildren: lineOneStagger,
              delayChildren: lineOneDelay
            }}
            style={{ textShadow: "0 0 12px rgba(79,107,255,0.45)" }}
          >
            {lineOne.map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={lineOneLetter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Line 2 */}
          <motion.h2
            className="mt-4 text-2xl font-semibold text-white/95 md:text-4xl"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: lineTwoDelay
            }}
          >
            {lineTwo}
          </motion.h2>

          {/* Line 3 - PORTFOLIO (Sharp Now) */}
          <motion.h1
            className="mt-3 text-4xl font-semibold uppercase tracking-[0.3em] md:text-7xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              delay: lineThreeDelay
            }}
          >
            <motion.span
              className="bg-gradient-to-r from-neon-400 via-white to-neon-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(79,107,255,0.45)]"
              variants={typeContainer}
              initial="hidden"
              animate="show"
              transition={{
                staggerChildren: lineThreeStagger,
                delayChildren: lineThreeDelay
              }}
            >
              {lineThree.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={lineThreeLetter}
                  onAnimationComplete={
                    index === lineThree.length - 1
                      ? () => {
                          if (doneRef.current) return;
                          doneRef.current = true;
                          setTimeout(() => {
                            onFinish?.();
                          }, holdAfterPortfolio);
                        }
                      : undefined
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
