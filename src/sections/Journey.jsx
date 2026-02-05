import { timeline } from "../data/content";

export default function Journey() {
  return (
    <section id="journey" className="section-padding py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.4em] text-neon-400">Journey</p>
          <h2 className="mt-4 text-3xl font-semibold">Education & learning timeline</h2>
        </div>

        <div className="grid gap-6">
          {timeline.map((item, index) => (
            <div key={item.year} className="card p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-semibold text-neon-400">{item.year}</span>
                  <span className="h-2 w-2 rounded-full bg-neon-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                </div>
                <div className="ml-auto hidden text-sm text-white/40 md:block">
                  Phase {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl text-sm text-white/60">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Key Learning</p>
          <p className="mt-3">
            This journey reinforced that consistency, strong fundamentals, and real practice matter more
            than speed. Each year added a new layer of skills and helped me grow step by step as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
