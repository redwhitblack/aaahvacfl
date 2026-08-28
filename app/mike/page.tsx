import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mike Palon",
  description: `${site.owner}, owner and operator — homes, companies, and industrial HVAC in Naples and Fort Myers since ${site.founded}.`,
};

export default function MikePage() {
  return (
    <div className="pt-28">
      <header className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] tracking-[0.28em] uppercase text-water">
          Owner and operator
        </p>
        <h1 className="serif mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">
          Mike Palon
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Homes, companies, and industrial sites. Heating, air, and
          refrigeration since {site.founded}.
        </p>
      </header>

      <div className="mx-auto mt-16 grid max-w-6xl items-start gap-12 px-5 pb-24 md:grid-cols-2 md:px-8">
        <div className="relative aspect-square overflow-hidden bg-paper-2">
          <Image
            src="/media/mike-palon.jpg"
            alt="Mike Palon, owner and operator of AAA HVAC"
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            Mike Palon has run this company since {site.founded}. Diagnosis,
            repair, installation, and maintenance on all major brands — houses,
            companies, and industrial sites.
          </p>
          <p>
            He has designed the heating and air for many buildings and worked
            a lot of industrial jobs. He finds the problem first, then does
            that job. No extras you did not ask for.
          </p>
          <p>
            You get a clear explanation and parts that belong on the job. He
            stands behind the work. Service area is Naples, Fort Myers, and
            nearby.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm text-ink">
            <div>
              <dt className="text-[11px] tracking-[0.18em] uppercase text-water">
                Since
              </dt>
              <dd className="mt-1 serif text-2xl">{site.founded}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.18em] uppercase text-water">
                Years
              </dt>
              <dd className="mt-1 serif text-2xl">{site.years}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.18em] uppercase text-water">
                Trades
              </dt>
              <dd className="mt-1">Heat · Air · Refrigeration</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.18em] uppercase text-water">
                Work
              </dt>
              <dd className="mt-1">Residential · Commercial · Industrial</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
