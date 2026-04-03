import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import {
  consumerJourney,
  merchantJourney,
  productPrinciples
} from "@/lib/site-content";

export function HowItWorks() {
  const columns = [
    {
      title: "Consumer Journey",
      tone: "teal",
      steps: consumerJourney
    },
    {
      title: "Merchant Journey",
      tone: "dark",
      steps: merchantJourney
    }
  ] as const;

  return (
    <section id="how-it-works" className="section-shell bg-white">
      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="How It Works"
            title="Simple for everyone."
            description="Each side of the marketplace has a clear, low-friction path from onboarding to repeat engagement."
          />
        </SectionReveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {columns.map((column, columnIndex) => (
            <SectionReveal key={column.title} delay={columnIndex * 0.08}>
              <article
                className={
                  column.tone === "teal"
                    ? "surface-card overflow-hidden border border-teal/20"
                    : "surface-card-dark overflow-hidden"
                }
              >
                <div
                  className={`px-8 py-5 ${
                    column.tone === "teal"
                      ? "bg-teal text-white"
                      : "bg-white/5 text-white"
                  }`}
                >
                  <h3 className="text-xl font-black text-inherit">{column.title}</h3>
                </div>
                <div className="space-y-4 p-8 md:p-10">
                  {column.steps.map((step, stepIndex) => (
                    <div
                      key={step}
                      className={`flex gap-4 rounded-3xl border p-5 ${
                        column.tone === "teal"
                          ? "border-carbon/8 bg-white"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                          column.tone === "teal"
                            ? "bg-teal text-white"
                            : "bg-teal/10 text-teal-100"
                        }`}
                      >
                        {stepIndex + 1}
                      </div>
                      <p
                        className={`text-base leading-7 ${
                          column.tone === "teal" ? "text-carbon/72" : "text-white/78"
                        }`}
                      >
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.16}>
          <div className="mt-8 rounded-[2rem] border border-teal/20 bg-teal/10 px-6 py-5">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              {productPrinciples.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-center gap-3 text-sm font-semibold text-carbon/76"
                >
                  <span>{principle}</span>
                  {index < productPrinciples.length - 1 ? (
                    <span className="text-teal">|</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
