import { NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    if (String(body.company ?? "").trim()) {
      return NextResponse.json({ ok: true });
    }
    const name = String(body.name ?? "").slice(0, 120);
    const phone = String(body.phone ?? "").slice(0, 40);
    const area = String(body.area ?? "").slice(0, 80);
    const message = String(body.message ?? "").slice(0, 2000);
    if (!name || !phone || !message) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    try {
      await appendFile(
        path.join(dir, "leads.jsonl"),
        `${JSON.stringify({
          at: new Date().toISOString(),
          name,
          phone,
          area,
          message,
        })}\n`,
      );
    } catch {
      console.log("lead", { name, phone, area, message });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
