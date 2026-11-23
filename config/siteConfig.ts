export interface RoofingService {
  id: string;
  title: string;
  category: "inspection" | "deposit" | "repair";
  badge: string;
  priceTag: string;
  priceSubtext: string;
  description: string;
  features: string[];
  planId: string;
  isPopular?: boolean;
}

export const siteConfig = {
  company: {
    name: "ApexGuard Roofing Co.",
    tagline: "Commercial & Residential Architectural Roofing",
    phone: "(800) 555-ROOF",
    email: "dispatch@apexguardroofing.com",
    license: "TX Lic #CCC1332490 • Master Elite Certified Contractor",
    serving: "Serving Greater Austin, Travis & Williamson Counties",
  },
  whop: {
    accountId: "biz_cA4mD3pgqDCNq8",
    plans: {
      inspection: "plan_51Vb3JT5Mx4MY",
      deposit: "plan_J5GgHGVK0am4k",
      repair: "plan_6BzjKRz6Xjk0K",
    },
  },
  services: [
    {
      id: "inspection",
      title: "Diagnostic Drone & Attic Inspection",
      category: "inspection",
      badge: "Pre-Job Assessment",
      priceTag: "$149",
      priceSubtext: "One-time fee • 100% credited toward work",
      description: "High-resolution thermal UAV flyover and interior structural attic moisture inspection with an insurance-compliant condition dossier.",
      features: [
        "Thermal FLIR drone scan for hidden moisture",
        "Comprehensive 28-point decking & flashing audit",
        "Certified photo dossier delivered in 24 hours",
        "Fee credited in full toward any approved repair"
      ],
      planId: "plan_51Vb3JT5Mx4MY",
      isPopular: false,
    },
    {
      id: "deposit",
      title: "Replacement Project Deposit",
      category: "deposit",
      badge: "High-Ticket Job Flow",
      priceTag: "$500",
      priceSubtext: "Project initiation • Card-on-file final billing",
      description: "Locks production schedule, material staging, and municipal permitting. Tokenizes payment method for milestone completion invoice.",
      features: [
        "Guaranteed calendar installation window",
        "Manufacturer material procurement reservation",
        "Payment method tokenized for final Whop balance invoice",
        "0% APR multi-month financing (Klarna, Splitit, Afterpay)"
      ],
      planId: "plan_J5GgHGVK0am4k",
      isPopular: true,
    },
    {
      id: "repair",
      title: "Emergency Leak & Flashing Seal",
      category: "repair",
      badge: "Same-Day Dispatch",
      priceTag: "$350",
      priceSubtext: "Flat-rate service • Materials included",
      description: "Rapid technician dispatch for active storm leaks, pipe boot failures, wind-torn shingles, or chimney cricket resealing.",
      features: [
        "Priority dispatch within 4 hours",
        "Up to 1 bundle shingle replacement or collar overhaul",
        "Commercial-grade elastomeric poly-sealant",
        "12-Month certified leak-free warranty"
      ],
      planId: "plan_6BzjKRz6Xjk0K",
      isPopular: false,
    },
  ] as RoofingService[],
  serviceAreas: [
    { city: "Austin", zip: "78701 – 78759", time: "Within 2 hrs" },
    { city: "Round Rock", zip: "78664 – 78681", time: "Within 2 hrs" },
    { city: "Cedar Park", zip: "78613 – 78630", time: "Within 3 hrs" },
    { city: "Georgetown", zip: "78626 – 78633", time: "Within 3 hrs" },
    { city: "Lakeway", zip: "78734 – 78738", time: "Within 3 hrs" },
    { city: "Pflugerville", zip: "78660 – 78691", time: "Within 2 hrs" },
  ],
  certifications: [
    { title: "GAF Master Elite", desc: "Top 2% of US roofing contractors qualified to offer 50-year system warranties" },
    { title: "OSHA 30 Certified", desc: "Strict site-safety and fall protection protocol enforced on every job" },
    { title: "Haag Engineering", desc: "Certified commercial wind and hail damage assessment standard" },
    { title: "Whop Verified Merchant", desc: "Merchant-of-record compliance, encrypted card vaulting, and fraud shield" },
  ],
};
