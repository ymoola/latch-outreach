import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { revenueStreams } from "@/lib/site-content";

export function BusinessModel() {
  return (
    <section id="business-model" className="section-shell bg-bone">
      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="Business Model"
            title="Three compounding revenue streams."
            description="Launch revenue starts with merchant onboarding and subscriptions, then deepens with payments as the platform matures."
          />
        </SectionReveal>

        <div className="mt-14 space-y-6">
          {revenueStreams.map((stream, index) => (
            <SectionReveal key={stream.number} delay={index * 0.06}>
              <article className="surface-card grid gap-6 p-7 md:grid-cols-[auto_1fr] md:items-start md:gap-8 md:p-9">
                <div className="text-teal">
                  <p className="text-4xl font-black">{stream.number}</p>
                </div>
                <div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-2xl font-black text-carbon">
                      {stream.title}
                    </h3>
                    <span
                      className={`pill w-fit ${
                        stream.phase === "PHASE 2"
                          ? "bg-carbon/10 text-carbon/70"
                          : "bg-teal/12 text-teal-500"
                      }`}
                    >
                      {stream.phase}
                    </span>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-carbon/72">
                    {stream.body}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
