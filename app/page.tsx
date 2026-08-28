import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-gulf-deep grain">
        <Image
          src="/media/hero-estate.jpg"
          alt="Luxury Southwest Florida estate with an outdoor air conditioner"
          fill
          priority
          className="object-cover object-[45%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,38,36,0.72)_0%,rgba(8,38,36,0.22)_32%,rgba(8,38,36,0.28)_58%,rgba(8,38,36,0.88)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 text-paper md:px-8 md:pb-24">
          <p className="text-[11px] tracking-[0.32em] uppercase text-brass-light">
            Naples · Fort Myers · Since {site.founded}
          </p>
          <h1 className="serif mt-5 max-w-3xl text-5xl leading-[0.95] drop-shadow-[0_2px_18px_rgba(8,38,36,0.45)] md:text-7xl">
            Heating, air, and refrigeration since {site.founded}.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper md:text-lg">
            {site.legalName}. {site.owner}, owner and operator. Homes,
            companies, and industrial sites from Naples to Fort Myers.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-brass px-6 py-3 text-xs tracking-[0.18em] uppercase text-gulf-deep transition-opacity hover:opacity-90"
            >
              Request service
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div className="relative aspect-square overflow-hidden bg-paper-2">
          <Image
            src="/media/mike-palon.jpg"
            alt="Mike Palon, owner and operator of AAA HVAC"
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-water">
            Owner and operator
          </p>
          <h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">
            Mike Palon
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              Mike has run this company since {site.founded}. Homes, companies,
              and industrial sites — he does the work himself.
            </p>
            <p>
              He has designed the heating and air for many buildings and
              worked a lot of industrial jobs. Repair, replacement, and
              maintenance on all major brands. If a part will fix it, that is
              what we do. If the system is worn out, we will say so and give
              you a price.
            </p>
            <p>
              Restaurant and commercial refrigeration too: walk-ins,
              reach-ins, and ice machines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="serif text-4xl md:text-5xl">Services</h2>
            <Link
              href="/services"
              className="text-xs tracking-[0.18em] uppercase text-gulf transition-opacity hover:opacity-70"
            >
              All services
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.slug} className="bg-paper">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="serif text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {s.lead}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative min-h-[70svh]">
          <Image
            src="/media/gulf-waterfront.jpg"
            alt="Waterfront estate along the Gulf in Southwest Florida"
            fill
            className="object-cover object-[70%_center]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gulf-deep/90 via-gulf-deep/55 to-gulf-deep/15" />
          <div className="relative mx-auto flex min-h-[70svh] max-w-6xl items-end px-5 py-16 text-paper md:items-center md:px-8 md:py-24">
            <div className="max-w-xl">
              <p className="serif text-3xl leading-[1.15] drop-shadow-[0_2px_16px_rgba(8,38,36,0.4)] md:text-5xl">
                Air conditioners here run most of the year. A checkup before
                the heat hits is cheaper than a Sunday breakdown.
              </p>
              <p className="mt-8 text-xs tracking-[0.22em] uppercase text-brass-light">
                Naples · Fort Myers · Southwest Florida
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="text-[11px] tracking-[0.28em] uppercase text-water">
          About Mike
        </p>
        <h2 className="serif mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
          {site.years} years in this trade.
        </h2>
        <div className="mt-10 grid gap-8 text-sm leading-relaxed text-ink-soft md:grid-cols-2">
          <p>
            Residential, commercial, and industrial. Heating, air
            conditioning, and refrigeration — repair, replacement, and
            maintenance on all major brands. Heat pumps, split systems,
            package units, mini-splits, walk-in coolers, and ice machines.
          </p>
          <p>
            He keeps the job site clean, explains what he found, and stands
            behind the work. New equipment is sized for the building, not sold
            oversized.
          </p>
        </div>
        <Link
          href="/mike"
          className="mt-10 inline-block text-xs tracking-[0.18em] uppercase text-gulf transition-opacity hover:opacity-70"
        >
          More about Mike
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-8 border border-line p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <h2 className="serif text-4xl">Need the air fixed?</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
              Homes, companies, and industrial sites in Naples, Fort Myers,
              and nearby. Tell us what is going on and we will get back to you.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gulf px-6 py-3 text-center text-xs tracking-[0.18em] uppercase text-paper transition-opacity hover:opacity-90"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
