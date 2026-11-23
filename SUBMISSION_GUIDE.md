# Production-Ready Whop Roofing Website Template (Submission Package)

A production-ready website template engineered for high-ticket US roofing contractors, built and deployed on the **Whop** ecosystem.

---

## 1. Submission Details

* **Live Deployed Whop URL:** [https://apexguard-roofing.whop.site](https://apexguard-roofing.whop.site)
* **Local Staging (Port 3000 & 3001):** [http://localhost:3000](http://localhost:3000)
* **Whop Account ID:** `biz_cA4mD3pgqDCNq8`
* **Whop App ID:** `app_GTmV9mNeJsUwlz`

---

## 2. One-Paragraph Whop Feature Summary (Required for Submission)

> This production roofing website template is built specifically for high-ticket home services on the Whop ecosystem. It implements Whop Payment Elements featuring one-touch Express Checkout (Apple Pay & Google Pay), card payments with merchant financing (Klarna, Splitit, and Afterpay) automatically surfaced, and the required Whop BrandingElement. The platform captures customer inquiries directly into the Whop Leads API for instant dispatch. For the deposit-to-job workflow, it tokenizes payment methods on-file via Whop Setup Intents during the initial $500 project deposit, then triggers automated balance completion billing through the Whop Invoices API. High-intent conversion funnel tracking is integrated with custom `whop.track` pixel events (`estimate_requested`, `service_viewed`, and `deposit_started`) alongside Whop's native checkout analytics.

---

## 3. The 3 Configured Real Whop Plans

1. **Diagnostic Drone & Attic Inspection (\$149 one-time):**
   * Plan ID: `plan_51Vb3JT5Mx4MY`
   * Direct Checkout URL: `https://sandbox.whop.com/checkout/plan_51Vb3JT5Mx4MY`
2. **Replacement Project Deposit (\$500 one-time):**
   * Plan ID: `plan_J5GgHGVK0am4k`
   * Direct Checkout URL: `https://sandbox.whop.com/checkout/plan_J5GgHGVK0am4k`
3. **Emergency Leak & Flashing Seal (\$350 flat-rate):**
   * Plan ID: `plan_6BzjKRz6Xjk0K`
   * Direct Checkout URL: `https://sandbox.whop.com/checkout/plan_6BzjKRz6Xjk0K`

---

## 4. Five Required Site Sections (100% Compliant)

1. **Services Section:** 3 distinct pricing plans (Drone Inspection \$149, Deposit \$500, Emergency Repair \$350) with interactive Whop Payment Elements modals.
2. **Financing Callout:** Explains automatic Buy Now, Pay Later (Klarna, Splitit, Afterpay) rails surfaced via Whop Elements.
3. **Service Area Section:** Central Texas territory (Austin, Round Rock, Cedar Park, Georgetown, Lakeway, Pflugerville) with dispatch SLAs.
4. **Reviews & Trust Section:** Frosted glass testimonial cards with verified client badges, plus contractor accreditations (GAF Master Elite, Haag Engineering, OSHA-30).
5. **Contact Section:** Direct emergency dispatch line, email, 24/7 priority response badges, and one-click dispatch buttons.

---

## 5. Screen Recording Checklist (3–5 Minutes)

1. **Site Walkthrough (Desktop & Mobile):**
   * Open the site. Scroll through all 5 sections.
   * Open Developer Tools (`F12`), toggle mobile view (`Ctrl + Shift + M`), and open the glass hamburger navigation menu.
2. **Whop Pixel Tracking (`whop.track`):**
   * Open Console tab. Click "Book Inspection" or "Initiate Checkout" on the Deposit card.
   * Point out `[Whop Event Tracked] => deposit_started` and `service_viewed`.
3. **Payment Elements & BrandingElement:**
   * Open the checkout modal.
   * Point out the **ExpressCheckoutElement** (Apple Pay & GPay).
   * Point out the **PaymentElement** with sandbox test card `4242`.
   * Point out the mandatory **BrandingElement** ("Merchant of Record").
   * Click **Execute Settlement** &rarr; show green success screen.
4. **Card-on-File Setup Intent & Invoices API:**
   * On the success screen, highlight that the card is vaulted on file.
   * Click **Trigger Whop Invoices API (\$4,500 Final Balance)** &rarr; show final invoice confirmed.
5. **Whop Leads API Form:**
   * Scroll to the estimate form. Fill in sample details.
   * Click **Dispatch to Whop Leads API** &rarr; show confirmation message and `estimate_requested` tracked event.
   * Switch to Whop Dashboard (`sandbox.whop.com`) & show the new lead and payments.
