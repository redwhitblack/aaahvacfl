import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service area",
  description: `HVAC in Naples, Fort Myers, and nearby. ${site.shortName}.`,
};

export default function AreasPage() {
  return (
    <div className="pt-28">
      <div className="relative h-[56vh] min-h-[380px]">
        <Image
          src="/media/luxury-canal.jpg"
          alt="Palm-lined waterfront street in Southwest Florida"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gulf-deep/70 via-gulf-deep/25 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-5 pb-10 text-paper md:px-8">
          <h1 className="serif text-5xl md:text-6xl">
            Naples, Fort Myers, and nearby
          </h1>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:px-8">
        <p className="text-ink-soft leading-relaxed">
          Collier and Lee County — homes, companies, and industrial sites. If
          you are close and not on this list, still write. If we cannot take
          the job, we will say so.
        </p>
        <ul className="columns-2 gap-8 text-sm leading-8 md:columns-3">
          {areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-20 text-sm text-ink-soft md:px-8">
        Not sure we cover you?{" "}
        <Link href="/contact" className="underline decoration-brass">
          Send a message
        </Link>
        .
      </p>
    </div>
  );
}
