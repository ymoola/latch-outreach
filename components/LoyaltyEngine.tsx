import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { loyaltyMechanics } from "@/lib/site-content";

export function LoyaltyEngine() {
  return (
    <section id="loyalty-engine" className="section-shell bg-carbon">
      <div className="absolute inset-0 bg-radial-teal opacity-60" />
      <div className="container-shell relative z-10">
        <SectionReveal>
          <SectionHeading
            eyebrow="The Loyalty Engine"
            title="Rewarding discovery. Protecting merchants."
            description="The mechanics are intentionally structured to balance user excitement with merchant sustainability."
            light
          />
        </SectionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {loyaltyMechanics.map((mechanic, index) => (
            <SectionReveal key={mechanic.number} delay={index * 0.06}>
              <article className="surface-card-dark h-full border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-100">
                  {mechanic.number}
                </p>
                <h3 className="mt-6 text-2xl font-black text-white">
                  {mechanic.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/72">
                  {mechanic.body}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
