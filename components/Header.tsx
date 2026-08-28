"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/mike", label: "Mike" },
  { href: "/areas", label: "Areas" },
];

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const home = path === "/";
  const light = home && !scrolled && !open;

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [path]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors ${
        light
          ? "text-paper"
          : "bg-paper/95 text-ink shadow-[0_1px_0_var(--line)] backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" aria-label="AAA HVAC home" onClick={() => setOpen(false)}>
          <Logo light={light} />
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] tracking-[0.18em] uppercase md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`opacity-80 transition hover:opacity-100 ${path === l.href ? "opacity-100" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`rounded-full px-4 py-2 tracking-[0.14em] transition-opacity hover:opacity-90 ${
              light ? "bg-paper text-gulf" : "bg-gulf text-paper"
            }`}
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-7 bg-current" />
          <span className="mt-2 block h-px w-5 bg-current" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper px-5 py-6 text-ink md:hidden">
          <div className="flex flex-col gap-4 text-sm tracking-[0.16em] uppercase">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-water"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
