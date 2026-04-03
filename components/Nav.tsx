"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
  { label: "The Ask", href: "#the-ask" }
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-carbon/8 bg-bone/95 backdrop-blur-xl"
          : "border-transparent bg-bone/80"
      }`}
    >
      <nav className="container-shell flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-carbon/72 transition hover:text-teal"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            Request a Meeting
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-carbon/10 bg-white text-carbon shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-carbon/8 bg-bone/98 backdrop-blur-xl lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-carbon/80 transition hover:bg-white hover:text-teal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              Request a Meeting
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
