import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `AC repair, replacement, refrigeration, and maintenance from ${site.legalName}.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <header className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
        <p className="text-[11px] tracking-[0.28em] uppercase text-water">
          Heating · Air · Refrigeration
        </p>
        <h1 className="serif mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
          Heating, air, and refrigeration
        </h1>
        <p className="mt-6 max-w-xl text-ink-soft">
          We work on the equipment already in the house or the kitchen, all
          major brands.
        </p>
      </header>

      <div className="space-y-0">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className={`grid items-center md:grid-cols-2 ${i % 2 === 1 ? "bg-paper-2" : ""}`}
          >
            <div
              className={`relative min-h-[320px] md:min-h-[520px] ${i % 2 === 1 ? "md:order-2" : ""}`}
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="px-5 py-12 md:px-16">
              <h2 className="serif text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-4 text-lg text-ink">{s.lead}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="text-sm text-ink-soft">
          Carrier, Trane, Lennox, Rheem, Ruud, Goodman, Amana, Bryant, Payne,
          and other common Florida brands.{" "}
          <Link className="underline decoration-brass" href="/contact">
            Request service
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
