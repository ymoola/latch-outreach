import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { comparisonRows } from "@/lib/site-content";

const columns = ["Groupon", "UberEats", "Yelp/Seated", "Latch"];

export function CompetitiveLandscape() {
  return (
    <section id="competitive-landscape" className="section-shell bg-bone">
      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="Competitive Landscape"
            title="Why Latch wins."
            description="The model is structured for in-store discovery, tighter usage limits, and merchant-friendly economics rather than one-off discounting."
          />
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="mt-14 overflow-x-auto rounded-[2rem] border border-carbon/8 bg-white shadow-soft">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-carbon/8">
                  <th className="px-6 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-carbon/45">
                    Category
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column}
                      className={`px-6 py-5 text-sm font-semibold ${
                        column === "Latch"
                          ? "bg-teal text-white"
                          : "text-carbon/70"
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, rowIndex) => (
                  <tr
                    key={row.label}
                    className={rowIndex < comparisonRows.length - 1 ? "border-b border-carbon/8" : ""}
                  >
                    <td className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-carbon/45">
                      {row.label}
                    </td>
                    {row.values.map((value, valueIndex) => (
                      <td
                        key={`${row.label}-${value}`}
                        className={`px-6 py-5 text-sm leading-6 ${
                          valueIndex === row.values.length - 1
                            ? "font-semibold text-teal-500"
                            : "text-carbon/72"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
