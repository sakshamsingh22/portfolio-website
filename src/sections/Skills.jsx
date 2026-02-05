import SkillOrb from "../components/SkillOrb";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section-padding py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-neon-400">Skills</p>
            <h2 className="mt-4 text-3xl font-semibold">Core tools I rely on</h2>
          </div>
          <p className="max-w-lg text-sm text-white/60">
            Balanced across problem-solving, languages, and frontend foundations. The focus is depth and
            clarity over surface-level tooling.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="card p-6">
            <SkillOrb labels={skills} />
          </div>
          <div className="grid gap-4">
            {[
              { title: "Languages", items: "C++, Python, JavaScript" },
              { title: "Backend", items: "Django" },
              { title: "Web", items: "HTML, CSS, React" },
              { title: "Tools", items: "Git, GitHub" }
            ].map((group) => (
              <div key={group.title} className="card p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{group.title}</p>
                <p className="mt-3 text-lg text-white/80">{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
