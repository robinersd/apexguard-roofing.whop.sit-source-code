import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { confirmationToken } = body;

    const apiKey = process.env.WHOP_API_KEY;
    const accountId = process.env.WHOP_ACCOUNT_ID;
    const apiBase = process.env.WHOP_API_BASE || "https://sandbox-api.whop.com/api/v1";

    const res = await fetch(`${apiBase}/setup_intents`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account_id: accountId,
        confirmation_token: confirmationToken,
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Setup intent error:", error);
    return NextResponse.json({ error: "Failed to initialize setup intent" }, { status: 500 });
  }
}
