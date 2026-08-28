"use client";

import { useState } from "react";

function leadUrl() {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") return "/api/lead";
  }
  return (
    process.env.NEXT_PUBLIC_LEAD_URL ||
    "https://aaahvacfl-lead.cgayapr.workers.dev/api/lead"
  );
}

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (String(data.company ?? "").trim()) {
      setStatus("sent");
      form.reset();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(leadUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="border border-gulf/20 bg-paper-2 p-6 text-sm leading-relaxed">
        Got it. We will get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div aria-hidden="true" className="hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="grid gap-1 text-xs tracking-[0.14em] uppercase text-ink-soft">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className="border border-line bg-paper px-3 py-3 text-base tracking-normal text-ink outline-none focus:border-gulf"
        />
      </label>
      <label className="grid gap-1 text-xs tracking-[0.14em] uppercase text-ink-soft">
        Phone
        <input
          required
          name="phone"
          type="tel"
          autoComplete="tel"
          className="border border-line bg-paper px-3 py-3 text-base tracking-normal text-ink outline-none focus:border-gulf"
        />
      </label>
      <label className="grid gap-1 text-xs tracking-[0.14em] uppercase text-ink-soft">
        City
        <input
          name="area"
          autoComplete="address-level2"
          placeholder="Naples, Fort Myers, Estero"
          className="border border-line bg-paper px-3 py-3 text-base tracking-normal text-ink outline-none focus:border-gulf"
        />
      </label>
      <label className="grid gap-1 text-xs tracking-[0.14em] uppercase text-ink-soft">
        How can we help
        <textarea
          required
          name="message"
          rows={5}
          className="border border-line bg-paper px-3 py-3 text-base tracking-normal text-ink outline-none focus:border-gulf"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-full bg-gulf px-6 py-3 text-xs tracking-[0.18em] uppercase text-paper transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" ? (
        <p className="text-sm">
          That did not send. Wait a moment and try again.
        </p>
      ) : null}
    </form>
  );
}
