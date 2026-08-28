import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-28 md:px-8">
      <p className="text-[11px] tracking-[0.28em] uppercase text-water">404</p>
      <h1 className="serif mt-4 text-5xl">That page is not here.</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The link may be old. Head back home or send a message.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-full bg-gulf px-6 py-3 text-xs tracking-[0.18em] uppercase text-paper transition-opacity hover:opacity-90"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-gulf px-6 py-3 text-xs tracking-[0.18em] uppercase text-gulf transition-opacity hover:opacity-70"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
