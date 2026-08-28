import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gulf-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2 md:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/90">
            {site.legalName}. Heating, air, and refrigeration in Southwest
            Florida since {site.founded}.
          </p>
        </div>
        <div className="text-sm leading-7 text-paper">
          <p className="text-[11px] tracking-[0.22em] uppercase text-brass-light">
            Site
          </p>
          <div className="mt-3 flex flex-col gap-1">
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-xs text-paper/75 md:px-8">
        <p className="mx-auto max-w-6xl">
          © {new Date().getFullYear()} {site.legalName}
        </p>
      </div>
    </footer>
  );
}
