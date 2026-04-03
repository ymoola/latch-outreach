import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  FireIcon,
  HeartIcon,
  ShoppingBagIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { industryVerticals } from "@/lib/site-content";

const icons = [
  FireIcon,
  HeartIcon,
  SparklesIcon,
  AcademicCapIcon,
  ShoppingBagIcon,
  BuildingOffice2Icon,
  BriefcaseIcon
];

export function FullVision() {
  return (
    <section id="vision" className="section-shell bg-bone">
      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="Full Vision"
            title="One membership. Seven industries."
            description="The initial dining wedge expands into a broader lifestyle operating system that can scale category by category."
          />
        </SectionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industryVerticals.map((vertical, index) => {
            const Icon = icons[index];

            return (
              <SectionReveal key={vertical.title} delay={index * 0.05}>
                <article className="surface-card h-full border-t-4 border-t-teal p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{vertical.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-carbon/65">
                    {vertical.description}
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
