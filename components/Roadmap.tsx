import { CheckIcon } from "@heroicons/react/24/solid";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { roadmapPhases } from "@/lib/site-content";

export function Roadmap() {
  return (
    <section id="roadmap" className="section-shell bg-white">
      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="The Roadmap"
            title="The roadmap."
            description="Execution is staged around merchant supply, subscriber activation, and category expansion through 2026 and beyond."
          />
        </SectionReveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-carbon/10 lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
            {roadmapPhases.map((phase, index) => (
              <SectionReveal key={phase.quarter} delay={index * 0.06}>
                <article
                  className={`relative h-full rounded-[2rem] border p-7 ${
                    phase.active
                      ? "border-carbon bg-carbon text-white shadow-panel"
                      : "border-carbon/8 bg-bone"
                  }`}
                >
                  <div
                    className={`absolute left-7 top-4 hidden h-3 w-3 rounded-full lg:block ${
                      phase.active ? "bg-teal" : "bg-carbon/20"
                    }`}
                  />
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.24em] ${
                      phase.active ? "text-teal-100" : "text-carbon/45"
                    }`}
                  >
                    {phase.quarter}
                  </p>
                  <h3
                    className={`mt-4 text-2xl font-black ${
                      phase.active ? "text-white" : "text-carbon"
                    }`}
                  >
                    {phase.title}
                  </h3>
                  <div className="mt-8 space-y-4">
                    {phase.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span
                          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            phase.active
                              ? "bg-white/12 text-teal-100"
                              : "bg-teal/10 text-teal"
                          }`}
                        >
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <p
                          className={`text-sm leading-6 ${
                            phase.active ? "text-white/76" : "text-carbon/68"
                          }`}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
