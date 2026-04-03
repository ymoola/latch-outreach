import {
  BuildingStorefrontIcon,
  RocketLaunchIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { solutionCards } from "@/lib/site-content";

const icons = [SparklesIcon, BuildingStorefrontIcon, RocketLaunchIcon];

export function Solution() {
  return (
    <section id="solution" className="section-shell bg-white">
      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="The Solution"
            title="Latch connects consumers with local businesses."
            description="The platform creates consistent consumer value, measurable merchant value, and a roadmap that compounds into adjacent lifestyle categories."
          />
        </SectionReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solutionCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <SectionReveal key={card.title} delay={index * 0.08}>
                <article className="surface-card h-full p-8 md:p-9">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-8 text-2xl font-black text-carbon">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-carbon/70">
                    {card.body}
                  </p>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
