import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { fundingBreakdown, raiseTargets } from "@/lib/site-content";

const barColors = ["bg-teal", "bg-teal-400", "bg-teal-200", "bg-white/20"];

export function TheAsk() {
  return (
    <section id="the-ask" className="section-shell bg-carbon">
      <div className="container-shell">
        <div className="grid gap-12 xl:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal>
          <SectionHeading
            eyebrow="The Ask"
            title="Seed Round - $750K"
            description="Funding is allocated toward product depth, merchant density, and the operational foundation required to scale the marketplace responsibly."
            light
          />

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex h-5 overflow-hidden rounded-full">
                {fundingBreakdown.map((fund, index) => (
                  <div
                    key={fund.label}
                    className={barColors[index]}
                    style={{ width: `${fund.value}%` }}
                  />
                ))}
              </div>
              <div className="mt-8 space-y-4">
                {fundingBreakdown.map((fund, index) => (
                  <div key={fund.label} className="flex items-start gap-4">
                    <span
                      className={`mt-1.5 h-3 w-3 rounded-full ${barColors[index]}`}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-semibold text-white">{fund.label}</p>
                        <p className="font-black text-teal-100">{fund.value}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="grid h-full gap-6">
              {raiseTargets.map((target) => (
                <div
                  key={target.label}
                  className="surface-card-dark flex flex-col justify-center border-white/10 bg-white/5 p-8"
                >
                  <p className="text-5xl font-black text-teal">{target.value}</p>
                  <p className="mt-3 text-lg font-semibold text-white/76">
                    {target.label}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
