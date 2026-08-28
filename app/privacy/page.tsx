import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-28 text-sm leading-relaxed text-ink-soft">
      <h1 className="serif text-4xl text-ink">Privacy</h1>
      <p className="mt-6">
        Contact forms on {site.domain} go to the company. We use them to follow
        up about service. We do not sell your information.
      </p>
      <p className="mt-4">Questions: use the contact form on this site.</p>
    </div>
  );
}
