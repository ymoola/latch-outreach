import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { problemCards } from "@/lib/site-content";

export function Problem() {
  return (
    <section id="about" className="section-shell bg-bone">
      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="The Problem"
            title="A market under pressure."
            description="Consumers are spending more carefully while merchants are absorbing thinner margins and rising acquisition costs."
          />
        </SectionReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {problemCards.map((card, index) => (
            <SectionReveal key={card.audience} delay={index * 0.08}>
              <div
                className={
                  card.tone === "teal"
                    ? "surface-card rounded-[2rem] border-teal/20 bg-teal text-white"
                    : "surface-card-dark"
                }
              >
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-black text-inherit">
                    {card.audience}
                  </h3>

                  <div className="mt-10 space-y-8">
                    {card.items.map((item) => (
                      <div
                        key={`${card.audience}-${item.value}`}
                        className="border-b border-white/12 pb-6 last:border-none last:pb-0"
                      >
                        <div className="flex items-end gap-4">
                          <span className="text-4xl font-black">{item.value}</span>
                          {item.detail ? (
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                              {item.detail}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-3 max-w-md text-base leading-7 text-white/80">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
