import { LeadForm } from "@/components/LeadForm";

export function ComingSoon() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 py-16 md:px-8 md:py-24 lg:flex-row lg:items-start lg:gap-24">
      <div className="max-w-xl">
        <h1 className="serif text-5xl leading-[0.95] md:text-7xl">
          A new website is on the way.
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-ink-soft">
          Leave a message and we will get back to you.
        </p>
      </div>
      <div className="w-full max-w-md">
        <LeadForm />
      </div>
    </div>
  );
}
