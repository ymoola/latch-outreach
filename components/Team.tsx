import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { teamMembers } from "@/lib/site-content";

export function Team() {
  return (
    <section id="team" className="section-shell bg-bone">
      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="Team"
            title="Built to execute."
          />
        </SectionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <SectionReveal key={member.name} delay={index * 0.05}>
              <article className="surface-card h-full p-7 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-carbon/8 text-2xl font-black text-carbon/50">
                  {member.initials}
                </div>
                <h3 className="mt-6 text-xl font-black text-carbon">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  {member.role}
                </p>
                <p className="mt-5 text-sm leading-6 text-carbon/68">
                  {member.description}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
