import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gulf-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/70">
            {site.legalName}. {site.owner}, owner and operator. Homes,
            companies, and industrial work in Southwest Florida since{" "}
            {site.founded}.
          </p>
        </div>
        <div className="text-sm leading-7 text-paper/80">
          <p className="text-[11px] tracking-[0.22em] uppercase text-brass">
            Service area
          </p>
          <p className="mt-3">
            Naples · Fort Myers
            <br />
            Southwest Florida
          </p>
        </div>
        <div className="text-sm leading-7">
          <p className="text-[11px] tracking-[0.22em] uppercase text-brass">
            Site
          </p>
          <div className="mt-3 flex flex-col gap-1 text-paper/80">
            <Link href="/services">Services</Link>
            <Link href="/mike">Mike Palon</Link>
            <Link href="/areas">Service area</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-xs text-paper/45 md:px-8">
        <p className="mx-auto max-w-6xl">
          © {new Date().getFullYear()} {site.legalName}
        </p>
      </div>
    </footer>
  );
}
