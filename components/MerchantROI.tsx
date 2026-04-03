import { SectionReveal } from "@/components/SectionReveal";
import { currentOptions, roiMath, roiSummary } from "@/lib/site-content";

export function MerchantROI() {
  return (
    <section id="merchant-roi" className="section-shell bg-white">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] border border-carbon/8 shadow-soft xl:grid xl:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal className="h-full bg-carbon p-8 text-white md:p-10">
            <div className="eyebrow">Merchant ROI</div>
            <h2 className="mt-6 text-4xl font-black text-white">
              The math that sells itself.
            </h2>
            <div className="mt-10 space-y-4">
              {roiMath.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-6 border-b border-white/10 pb-4"
                >
                  <span className="text-sm text-white/68">{item.label}</span>
                  <span className="text-lg font-semibold text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] bg-white/5 p-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-100">
                {roiSummary}
              </p>
            </div>
          </SectionReveal>

          <SectionReveal className="bg-bone p-8 md:p-10" delay={0.1}>
            <div className="eyebrow">Vs. Current Options</div>
            <h3 className="mt-6 text-3xl font-black text-carbon">
              Alternatives create cost. Latch creates attributable growth.
            </h3>
            <div className="mt-10 space-y-4">
              {currentOptions.map((option) => (
                <div
                  key={option.name}
                  className={`rounded-[1.5rem] border p-5 ${
                    option.name === "Latch"
                      ? "border-teal/20 bg-teal/10"
                      : "border-carbon/8 bg-white"
                  }`}
                >
                  <p
                    className={`text-lg font-black ${
                      option.name === "Latch" ? "text-teal-500" : "text-carbon"
                    }`}
                  >
                    {option.name}
                  </p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-carbon/68">
                    {option.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
