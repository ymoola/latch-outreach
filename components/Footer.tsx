import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-carbon">
      <div className="container-shell py-10">
        <div className="flex flex-col gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Logo light />
            <p className="mt-4 text-sm text-white/90">
              The membership that pays for itself.
            </p>
          </div>

          <div className="text-sm text-white/70 lg:text-right">
            <p>latchclub.ca</p>
            <a
              href="mailto:corporate@latchclub.ca"
              className="mt-2 inline-block text-teal-100 hover:text-white"
            >
              corporate@latchclub.ca
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-sm text-white/45">
          Copyright 2026 LatchClub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
