import { motion } from "framer-motion";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-padding py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-neon-400">Projects</p>
            <h2 className="mt-4 text-3xl font-semibold">Highlighted builds</h2>
          </div>
          <p className="max-w-lg text-sm text-white/60">
            Recruiter-friendly summaries with tech stacks, clarity of impact, and quick access to GitHub.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="card flex h-full flex-col p-6"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-neon-400">{project.stack}</p>
                <p className="mt-4 text-sm text-white/70">{project.description}</p>
              </div>
              <a
                href={project.link}
                className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-neon-400"
                aria-label={`Open ${project.name} on GitHub`}
              >
                <span className="h-2 w-2 rounded-full bg-neon-500" />
                View on GitHub
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
