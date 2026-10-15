import TiltCard from "../components/TiltCard";

export default function About() {
  return (
    <section id="about" className="section-padding py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-neon-400">About</p>
          <h2 className="mt-4 text-3xl font-semibold">A focused, interview-ready builder</h2>
          <p className="mt-4 text-white/70">
            Computer Science undergraduate and AWS Certified Cloud Practitioner building full-stack and
            Generative AI applications with Python, FastAPI, React, LangChain, LangGraph, RAG, and
            agentic AI systems.
          </p>
          <p className="mt-4 text-white/60">
            I enjoy solving 200+ DSA problems and building practical products that combine clean interfaces,
            reliable APIs, and intelligent workflows.
          </p>
        </div>
        <TiltCard>
          <h3 className="text-lg font-semibold">Quick Profile</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><span className="text-white/90">Focus:</span> Full-stack & Generative AI applications</li>
            <li><span className="text-white/90">Languages:</span> Python, JavaScript, C++, SQL</li>
            <li><span className="text-white/90">AI Stack:</span> LangChain, LangGraph, RAG, Agentic AI</li>
            <li><span className="text-white/90">Cloud & Tools:</span> AWS, Docker, Git, GitHub</li>
          </ul>
        </TiltCard>
      </div>
    </section>
  );
}
