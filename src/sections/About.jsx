import TiltCard from "../components/TiltCard";

export default function About() {
  return (
    <section id="about" className="section-padding py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-neon-400">About</p>
          <h2 className="mt-4 text-3xl font-semibold">A focused, interview-ready builder</h2>
          <p className="mt-4 text-white/70">
            I am a Computer Science student who enjoys structured problem-solving and building clean web
            applications. My current focus is DSA mastery in C++, while sharpening frontend workflows
            with React.
          </p>
          <p className="mt-4 text-white/60">
            I value logical thinking, clarity, and steady progress. I love translating ideas into
            maintainable products and preparing for software engineering interviews with real-world context.
          </p>
        </div>
        <TiltCard>
          <h3 className="text-lg font-semibold">Quick Profile</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><span className="text-white/90">Focus:</span> Data Structures, Algorithms, Web Development</li>
            <li><span className="text-white/90">Languages:</span> C++, Python, JavaScript</li>
            <li><span className="text-white/90">Mindset:</span> Clean, logical, growth-oriented</li>
            <li><span className="text-white/90">Goal:</span> Internship or entry-level software engineering roles</li>
          </ul>
        </TiltCard>
      </div>
    </section>
  );
}
