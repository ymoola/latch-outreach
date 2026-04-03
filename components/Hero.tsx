import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";

export function Hero() {
  return (
    <section className="section-shell min-h-screen bg-bone pt-32 lg:flex lg:items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(3,164,147,0.14),_transparent_38%),linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.9)_100%)]" />
      <div className="absolute left-0 top-28 h-72 w-72 rounded-full bg-teal/8 blur-3xl" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-carbon/5 blur-3xl" />

      <div className="container-shell relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionReveal className="max-w-2xl">
          <div className="eyebrow">Toronto. Membership. Momentum.</div>
          <h1 className="mt-8 text-5xl font-black leading-[0.96] text-carbon sm:text-6xl lg:text-7xl">
            The membership that pays for itself.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-carbon/72 sm:text-xl">
            A two-sided marketplace connecting Toronto consumers with local
            businesses.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary gap-2">
              Request a Meeting
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <Link href="/assets/latchclub_deck.pdf" download className="btn-secondary gap-2">
              View Pitch Deck
              <ArrowDownTrayIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              ["$135.2B", "market opportunity"],
              ["3.3x ROI", "merchant payback"],
              ["7 verticals", "expansion roadmap"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-carbon/8 bg-white/80 p-5 shadow-soft backdrop-blur-sm">
                <p className="text-2xl font-black text-teal">{value}</p>
                <p className="mt-2 text-sm text-carbon/62">{label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="relative mx-auto w-full max-w-[34rem]" delay={0.1}>
          <div className="absolute -left-4 top-24 hidden rounded-3xl border border-teal/20 bg-white/90 p-4 shadow-soft sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Investor signal
            </p>
            <p className="mt-2 text-sm text-carbon/70">
              Built to convert investor interest into meetings and deck requests.
            </p>
          </div>
          <div className="absolute -right-4 bottom-14 hidden rounded-3xl bg-carbon px-5 py-4 text-white shadow-panel sm:block">
            <div className="flex items-center gap-2 text-sm font-semibold text-teal-100">
              <SparklesIcon className="h-4 w-4" />
              Product-led growth
            </div>
            <p className="mt-2 text-sm text-white/70">
              Discovery, loyalty points, and merchant ROI compound together.
            </p>
          </div>

          <div className="relative rounded-[2.5rem] border border-white/80 bg-white p-4 shadow-panel">
            <div className="absolute inset-x-10 top-0 h-20 rounded-b-[2rem] bg-teal/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] bg-[linear-gradient(180deg,#f7fbfa_0%,#e8f5f3_100%)] p-4">
              <div className="mx-auto mb-4 h-2 w-24 rounded-full bg-carbon/10" />
              <Image
                src="/assets/app-concept-image.png"
                alt="LatchClub mobile app concept preview"
                width={2816}
                height={1536}
                priority
                className="h-auto w-full rounded-[1.75rem] object-cover shadow-soft"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
