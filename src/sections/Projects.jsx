import { motion } from "framer-motion";
import { projects } from "../data/content";

function ProjectPreview({ project }) {
  const name = project.name.toLowerCase();

  if (name.includes("quorum")) {
    return (
      <div className="project-preview preview-quorum" aria-label="Quorum research dashboard preview">
        <div className="preview-topbar"><span className="preview-mark">Q</span><span>Quorum</span><span className="preview-status">● LIVE RESEARCH</span></div>
        <div className="preview-body">
          <div className="preview-sidebar"><span>⌂</span><span>⌕</span><span>◈</span><span>⚙</span></div>
          <div className="preview-main"><p className="preview-eyebrow">MULTI-AGENT RESEARCH</p><h4>Ask anything.<br /><strong>Know everything.</strong></h4><div className="preview-search">Research a topic <span>→</span></div><div className="preview-agents"><span>Search</span><span>Reader</span><span>Writer</span><span>Critic</span></div></div>
        </div>
      </div>
    );
  }

  if (name.includes("samtrack")) {
    return (
      <div className="project-preview preview-samtrack" aria-label="SamTrack productivity dashboard preview">
        <div className="preview-topbar"><span className="preview-brand">SAM<span>TRACK</span></span><span className="preview-avatar">S</span></div>
        <div className="preview-body"><div className="preview-sidebar"><span>Dashboard</span><span>DSA Progress</span><span>Focus Timer</span></div><div className="preview-main"><p className="preview-eyebrow">GOOD MORNING, SAKSHAM</p><h4>Your progress, <strong>in motion.</strong></h4><div className="preview-stats"><b>73<small> problems</small></b><b>12<small> day streak</small></b><b>86%<small> focus</small></b></div></div></div>
      </div>
    );
  }

  if (name.includes("focuslist")) {
    return (
      <div className="project-preview preview-focuslist" aria-label="FocusList task manager preview">
        <div className="preview-topbar"><span className="preview-brand">Focus<span>List</span></span><span className="preview-filter">Today ▾</span></div>
        <div className="preview-task-input">+ Add a task...</div>
        <div className="preview-tasks"><span>✓ Read 20 pages</span><span>○ Practice DSA problems</span><span>○ Review project notes</span></div>
        <div className="preview-progress"><span /><small>2 of 4 tasks complete</small></div>
      </div>
    );
  }

  if (name.includes("video")) {
    return (
      <div className="project-preview preview-video" aria-label="AI Video Assistant preview">
        <div className="preview-video-orb">▶</div><p className="preview-eyebrow">AI VIDEO ASSISTANT</p><h4>Turn hours into<br /><strong>clear insights.</strong></h4><div className="preview-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><span className="preview-chip">TRANSCRIPT READY</span></div>
    );
  }

  return (
    <div className="project-preview preview-thumbnail" aria-label="AI Thumbnail Generator preview">
      <div className="preview-thumbnail-image"><span>CREATE<br /><strong>YOUR STORY</strong></span></div><div className="preview-thumbnail-panel"><p className="preview-eyebrow">AI THUMBNAIL STUDIO</p><h4>Make it <strong>click-worthy.</strong></h4><span className="preview-chip">GENERATE WITH AI →</span></div>
    </div>
  );
}

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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="card flex h-full flex-col p-6"
            >
              <ProjectPreview project={project} />
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    {project.featured && (
                      <span className="mb-2 inline-flex rounded-full border border-neon-500/40 bg-neon-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neon-300">
                        Featured project
                      </span>
                    )}
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                  </div>
                  {project.date && <span className="text-xs text-white/45">{project.date}</span>}
                </div>
                <p className="mt-2 text-sm text-neon-400">{project.stack}</p>
                {project.features?.length > 0 && (
                  <p className="mt-3 text-sm text-white/70">
                    <span className="text-white/50">Key features:</span>{" "}
                    {project.features.slice(0, 3).join(", ")}
                  </p>
                )}
                <p className="mt-3 text-sm text-white/70">
                  {project.shortDescription || project.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    className="project-action project-action-primary"
                    aria-label={`Open ${project.name} on GitHub`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="project-action project-action-secondary"
                    aria-label={`Open ${project.name} live demo`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
