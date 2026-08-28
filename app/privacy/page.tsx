import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-28 text-sm leading-relaxed text-ink-soft">
      <h1 className="serif text-4xl text-ink">Privacy</h1>
      <p className="mt-6">
        Contact forms on this site are used to reply to messages. We do not
        sell your information.
      </p>
    </div>
  );
}
