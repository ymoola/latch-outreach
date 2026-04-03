import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { marketInlineStats, marketMetrics } from "@/lib/site-content";

export function MarketOpportunity() {
  return (
    <section id="market-opportunity" className="section-shell bg-carbon">
      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="Market Opportunity"
            title="$135 Billion industry. Zero dominant players."
            description="Toronto offers local density first, while the broader Ontario and Canadian lifestyle markets provide a credible path to scale."
            light
          />
        </SectionReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {marketMetrics.map((metric, index) => (
            <SectionReveal key={metric.label} delay={index * 0.06}>
              <article className="surface-card-dark h-full border-white/12 bg-white/10 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">
                  {metric.label}
                </p>
                <p className="mt-6 text-4xl font-black text-white">{metric.value}</p>
                <p className="mt-4 text-base leading-7 text-white/90">
                  {metric.description}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.18}>
          <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/12 bg-white/10 p-6 md:grid-cols-2 xl:grid-cols-4 xl:p-8">
            {marketInlineStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 xl:rounded-none xl:border-0 xl:border-r xl:border-white/12 xl:bg-transparent xl:p-0 xl:pr-6 xl:last:border-r-0 xl:last:pr-0"
              >
                <p className="text-3xl font-black text-teal-100">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
