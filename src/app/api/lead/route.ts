import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/db";
import { leads } from "@/db/schema";

export const dynamic = "force-dynamic";

const leadSchema = z.object({
  email: z.string().email("Некорректный email").max(320),
  name: z.string().max(200).optional().nullable(),
  source: z.string().max(100).optional().nullable(),
  utm_source: z.string().max(200).optional().nullable(),
  utm_medium: z.string().max(200).optional().nullable(),
  utm_campaign: z.string().max(200).optional().nullable(),
  message: z.string().max(2000).optional().nullable(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Некорректный запрос" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Ошибка валидации" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  try {
    const db = getDb();
    await db
      .insert(leads)
      .values({
        email: data.email,
        name: data.name ?? null,
        source: data.source ?? "landing",
        utmSource: data.utm_source ?? null,
        utmMedium: data.utm_medium ?? null,
        utmCampaign: data.utm_campaign ?? null,
        message: data.message ?? null,
      })
      .onConflictDoNothing({ target: leads.email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to save lead:", error);
    return NextResponse.json(
      { ok: false, error: "Не удалось сохранить заявку. Попробуйте позже." },
      { status: 500 },
    );
  }
}
