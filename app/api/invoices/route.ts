import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerEmail, customerName, amount, description, paymentMethodId, autoCharge } = body;

    const apiKey = process.env.WHOP_API_KEY;
    const accountId = process.env.WHOP_ACCOUNT_ID;
    const apiBase = process.env.WHOP_API_BASE || "https://sandbox-api.whop.com/api/v1";

    const payload: Record<string, unknown> = {
      account_id: accountId,
      amount: amount || 4500, // Remaining balance (e.g. $4,500 after $500 deposit)
      currency: "usd",
      customer_email: customerEmail || "customer@example.com",
      customer_name: customerName || "Valued Homeowner",
      description: description || "Final Roof Replacement Balance (Labor & Materials)",
    };

    if (autoCharge && paymentMethodId) {
      payload.payment_method_id = paymentMethodId;
      payload.auto_advance = true;
    }

    const res = await fetch(`${apiBase}/invoices`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Invoice API error:", error);
    return NextResponse.json({ error: "Failed to create invoice" }, { status: 500 });
  }
}
