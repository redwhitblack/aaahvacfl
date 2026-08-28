import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gulf-deep text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-paper/90">© {new Date().getFullYear()}</p>
        <Link href="/privacy" className="text-paper/90">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
