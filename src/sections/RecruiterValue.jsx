const strengths = [
  {
    title: "Builds practical products",
    detail: "Turns ideas into usable full-stack and AI applications instead of stopping at tutorials.",
  },
  {
    title: "Strong AI direction",
    detail: "Explores Agentic AI, RAG, multi-agent workflows, and automation through hands-on projects.",
  },
  {
    title: "Reliable engineering mindset",
    detail: "Combines clean interfaces, APIs, data workflows, and thoughtful product decisions.",
  },
];

const links = [
  {
    label: "View resume",
    href: "https://drive.google.com/file/d/19CV5m5Q8xqSXc9bTUketu5SJV8ez7d1U/view?usp=sharing",
    primary: true,
  },
  { label: "Explore GitHub", href: "https://github.com/sakshamsingh22" },
  { label: "Start a conversation", href: "#contact" },
];

export default function RecruiterValue() {
  return (
    <section id="why-hire" className="section-padding py-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-neon-500/20 bg-gradient-to-br from-neon-500/10 via-base-800/50 to-base-900/70 p-6 shadow-card md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-neon-400">For recruiters</p>
            <h2 className="mt-4 text-3xl font-semibold">Why work with Saksham?</h2>
            <p className="mt-4 max-w-xl text-white/70">
              A curious Computer Science undergraduate building at the intersection of software engineering,
              AI, automation, and product development.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className={link.primary ? "project-action project-action-primary" : "project-action project-action-secondary"}
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {strengths.map((strength) => (
              <article key={strength.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="text-lg text-neon-300">✦</span>
                <h3 className="mt-3 text-sm font-semibold text-white">{strength.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{strength.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
