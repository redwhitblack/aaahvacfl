export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    if (String(body.company ?? "").trim()) {
      return Response.json({ ok: true });
    }
    const name = String(body.name ?? "").slice(0, 120);
    const phone = String(body.phone ?? "").slice(0, 40);
    const area = String(body.area ?? "").slice(0, 80);
    const message = String(body.message ?? "").slice(0, 2000);
    if (!name || !phone || !message) {
      return Response.json({ ok: false }, { status: 400 });
    }
    const row = JSON.stringify({
      at: new Date().toISOString(),
      name,
      phone,
      area,
      message,
    });
    if (env.LEADS) {
      await env.LEADS.put(`lead:${Date.now()}`, row);
    } else {
      console.log("lead", row);
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
