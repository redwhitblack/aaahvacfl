import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request service from ${site.owner} at ${site.shortName}.`,
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 pb-24 md:grid-cols-2 md:px-8">
        <div>
          <h1 className="serif text-5xl leading-tight">Send a message</h1>
          <p className="mt-10 text-sm leading-7 text-ink-soft">
            {site.legalName}
            <br />
            Naples, Fort Myers, and nearby
          </p>
          <p className="mt-8 max-w-sm text-sm text-ink-soft">
            Use the form and we will get back to you. If it is an emergency,
            say so in the message.
          </p>
        </div>
        <div>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
