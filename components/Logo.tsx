import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
};

export function Logo({ light = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="LatchClub home"
      className="inline-flex items-center gap-3"
    >
      <Image
        src="/assets/latchclub-mark.png"
        alt="LatchClub logo mark"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full border border-teal/15 bg-white/80 object-contain p-1.5 shadow-sm"
        priority
      />
      <div className="flex flex-col">
        <span
          className={`text-lg font-black tracking-tight ${
            light ? "text-white" : "text-carbon"
          }`}
        >
          LatchClub
        </span>
        <span
          className={`text-xs ${
            light ? "text-white/60" : "text-carbon/52"
          }`}
        >
          Investor Relations
        </span>
      </div>
    </Link>
  );
}
