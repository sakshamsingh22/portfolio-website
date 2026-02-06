import { motion } from "framer-motion";
import { achievements, certifications } from "../data/content";

const cardMotion = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 }
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.4em] text-neon-400">Certifications</p>
          <h2 className="mt-4 text-3xl font-semibold">Certifications & Achievements</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40">Certifications</h3>
            <div className="mt-5 grid gap-6">
              {certifications.map((item) => (
                <motion.article
                  key={item.title}
                  variants={cardMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="card p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm text-white/60">{item.organization}</p>
                      {(item.status || item.activeSince || item.expiresOn) && (
                        <p className="mt-2 text-xs text-white/50">
                          {item.status && <span>{item.status}</span>}
                          {item.activeSince && <span> · Active since {item.activeSince}</span>}
                          {item.expiresOn && <span> · Expires {item.expiresOn}</span>}
                        </p>
                      )}
                      {(item.issuedTo || item.issueDate || item.credentialId) && (
                        <p className="mt-2 text-xs text-white/50">
                          {item.issuedTo && <span>Issued to {item.issuedTo}</span>}
                          {item.issueDate && <span> · Issued {item.issueDate}</span>}
                          {item.credentialId && <span> · ID {item.credentialId}</span>}
                        </p>
                      )}
                      <p className="mt-3 text-sm text-white/70">
                        <span className="text-white/50">Skills:</span> {item.skills}
                      </p>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-neon-500/40 px-4 py-2 text-xs uppercase tracking-widest text-neon-300 transition hover:bg-neon-500/10"
                    >
                      View Certificate
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40">Achievements</h3>
            <div className="mt-5 grid gap-6">
              {achievements.map((item) => (
                <motion.article
                  key={item.title}
                  variants={cardMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="card p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm text-white/70">{item.description}</p>
                    </div>
                    <span className="text-sm text-neon-400">{item.year}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
