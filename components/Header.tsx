import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" aria-label="AAA HVAC home">
          <Logo />
        </Link>
        <Link
          href="/#contact"
          className="rounded-full bg-brass px-4 py-2 text-[13px] tracking-[0.14em] uppercase text-gulf-deep transition-opacity hover:opacity-90"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
