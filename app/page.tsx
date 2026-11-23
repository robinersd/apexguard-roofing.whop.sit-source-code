"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Check,
  MapPin,
  ArrowRight,
  CreditCard,
  Activity,
  Star,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  BadgeCheck,
} from "lucide-react";
import { siteConfig, RoofingService } from "@/config/siteConfig";
import { CheckoutModal } from "@/components/CheckoutModal";
import { EstimateForm } from "@/components/EstimateForm";
import { trackEvent } from "@/lib/tracking";

export default function Home() {
  const [selectedService, setSelectedService] = useState<RoofingService | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenCheckout = (service: RoofingService) => {
    setSelectedService(service);
    setModalOpen(true);

    if (service.category === "deposit") {
      trackEvent("deposit_started", {
        plan_id: service.planId,
        amount: service.priceTag,
      });
    } else {
      trackEvent("service_viewed", {
        service_id: service.id,
        title: service.title,
        price: service.priceTag,
      });
    }
  };

  const clientReviews = [
    {
      name: "Marcus Vance",
      role: "Commercial Property Manager",
      city: "Austin, TX",
      project: "Full Membrane & Metal Replacement",
      quote: "Booking our $149 drone inspection through Whop was fast and clean. The photographic thermal report was in our inbox the next morning, and saving the card for the $500 deposit made the whole $28,000 job friction-free.",
      rating: 5,
    },
    {
      name: "Sarah & David Lindemann",
      role: "Residential Homeowners",
      city: "Round Rock, TX",
      project: "Architectural Shingle Overhaul",
      quote: "Being able to split our deductible and final balance through Whop financing (Klarna) made emergency storm repairs manageable. ApexGuard completed the job in 2 days with zero surprise fees.",
      rating: 5,
    },
    {
      name: "Robert E. Thorne",
      role: "HOA President, River Oaks",
      city: "Lakeway, TX",
      project: "Flashing & Leak Restoration",
      quote: "We used their $350 flat-rate service for 4 clubhouse leak points after severe wind. Clear milestone tracking, instant invoice settlement, and real Haag-certified professionals on site.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-white selection:text-black relative">
      {/* 
        Full-Page Fixed Background Image
        Crisp visibility with glass overlay across mobile and desktop
      */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-85 contrast-110 brightness-95"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=90')`
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      {/* Floating Glass Navigation Header */}
      <div className="sticky top-3 sm:top-4 z-40 max-w-7xl mx-auto px-3 sm:px-6">
        <header className="rounded-2xl border border-white/20 bg-black/45 backdrop-blur-2xl px-4 sm:px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-mono font-bold text-white text-sm shadow-sm backdrop-blur-md">
              ▲
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight text-white block">
                {siteConfig.company.name}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono text-white/80">
            <a href="#services" className="hover:text-white transition">SERVICES &amp; PLANS</a>
            <a href="#financing" className="hover:text-white transition">FINANCING</a>
            <a href="#coverage" className="hover:text-white transition">SERVICE AREA</a>
            <a href="#reviews" className="hover:text-white transition">REVIEWS &amp; TRUST</a>
            <a href="#contact" className="hover:text-white transition">CONTACT</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#estimate"
              className="px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-black font-semibold text-xs transition shadow-sm"
            >
              REQUEST ESTIMATE &rarr;
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl border border-white/20 bg-black/85 backdrop-blur-2xl space-y-3 font-mono text-xs">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-white/10 text-white"
            >
              SERVICES &amp; PLANS
            </a>
            <a
              href="#financing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-white/10 text-white"
            >
              FINANCING
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-white/10 text-white"
            >
              SERVICE AREA
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-white/10 text-white"
            >
              REVIEWS &amp; TRUST
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-white/10 text-white"
            >
              CONTACT
            </a>
            <a
              href="#estimate"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2.5 px-4 rounded-xl bg-white text-black font-bold"
            >
              REQUEST ESTIMATE
            </a>
          </div>
        )}
      </div>

      {/* Hero Section with Glassmorphism Panels */}
      <section className="relative z-10 pt-12 sm:pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono text-white/90 border border-white/20 bg-black/40 backdrop-blur-xl">
                <Activity className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>COMMERCIAL &bull; RESIDENTIAL ARCHITECTURAL ROOFING</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Precision roofing operations, powered by Whop infrastructure.
              </h1>

              <p className="text-sm sm:text-base text-white/90 max-w-xl leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] bg-black/35 backdrop-blur-md p-4 rounded-xl border border-white/10">
                An end-to-end template for high-ticket home services. Includes aerial UAV diagnostic scans, card-on-file deposit tokenization, and post-installation balance invoicing.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#estimate"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-black font-mono font-semibold text-xs tracking-wider uppercase transition flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <span>Dispatch Aerial Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => handleOpenCheckout(siteConfig.services[0])}
                  className="px-5 py-3.5 rounded-xl bg-black/45 hover:bg-black/60 border border-white/20 text-white font-mono text-xs transition backdrop-blur-xl text-center"
                >
                  Book $149 Diagnostic Scan
                </button>
              </div>

              {/* Glass Specs Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 sm:pt-6 max-w-lg">
                <div className="p-3 sm:p-3.5 rounded-xl bg-black/45 backdrop-blur-xl border border-white/15">
                  <div className="text-base sm:text-lg font-mono font-bold text-white">GAF Elite</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-white/70 mt-0.5">Top 2% Certified</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-black/45 backdrop-blur-xl border border-white/15">
                  <div className="text-base sm:text-lg font-mono font-bold text-white">Haag SC</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-white/70 mt-0.5">Wind &amp; Hail</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-black/45 backdrop-blur-xl border border-white/15">
                  <div className="text-base sm:text-lg font-mono font-bold text-white">&lt;4 Hours</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-white/70 mt-0.5">Rapid Dispatch</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5" id="estimate">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>

      {/* 1. Services Section with Pure Glass Cards */}
      <section id="services" className="relative z-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-white/15 gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#93C5FD]">
                WORKFLOW MODULES &bull; THREE TIERS
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 drop-shadow-md">
                Standardized Settlement &amp; Billing Plans
              </h2>
            </div>
            <p className="text-xs text-white/70 font-mono max-w-sm">
              Each tier maps to a production Whop plan with Payment Elements, financing, and card-on-file vaulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-2xl transition duration-200 border ${
                  service.isPopular
                    ? "bg-black/50 border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                    : "bg-black/35 border-white/15 hover:border-white/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 px-2.5 py-0.5 rounded-full border border-white/20 bg-white/5">
                      {service.badge}
                    </span>
                    {service.isPopular && (
                      <span className="text-[10px] font-mono text-[#93C5FD] font-semibold">
                        PRIMARY FLOW
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">{service.title}</h3>
                  <p className="text-xs text-white/80 mt-2 mb-6 leading-relaxed min-h-[48px]">
                    {service.description}
                  </p>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/15 mb-6">
                    <div className="text-3xl font-mono font-bold text-white">{service.priceTag}</div>
                    <div className="text-[11px] text-white/70 font-mono mt-1">
                      {service.priceSubtext}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenCheckout(service)}
                  className={`w-full py-3.5 px-4 rounded-xl font-mono text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md ${
                    service.isPopular
                      ? "bg-white hover:bg-slate-200 text-black font-bold"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  <span>Initiate Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Financing Callout Section in Glass Container */}
      <section id="financing" className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-white/20 bg-black/45 backdrop-blur-2xl p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5" /> CAPITAL ARCHITECTURE &bull; WHOP FINANCING
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  High-ticket flexible financing built into Whop Elements.
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl font-normal">
                  Because checkout runs through Whop Elements, financing rails including <strong>Klarna, Splitit, and Afterpay</strong> surface automatically for approved homeowners. Convert \$12,000+ roof replacements into predictable installments without contractor risk.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-[11px] font-mono text-white/90">
                  <div className="p-3.5 rounded-xl border border-white/15 bg-black/40 backdrop-blur-md">
                    <span className="text-white block font-semibold">SOFT-CREDIT CHECK</span>
                    <span className="text-[10px] text-white/60">Zero credit score impact</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-white/15 bg-black/40 backdrop-blur-md">
                    <span className="text-white block font-semibold">0% APR HORIZONS</span>
                    <span className="text-[10px] text-white/60">12-month zero interest</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-white/15 bg-black/40 backdrop-blur-md">
                    <span className="text-white block font-semibold">MILESTONE BILLING</span>
                    <span className="text-[10px] text-white/60">Whop Invoices API auto-advance</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 text-left lg:text-right">
                <button
                  onClick={() => handleOpenCheckout(siteConfig.services[1])}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-200 text-black font-mono font-semibold text-xs tracking-wider uppercase transition shadow-lg text-center"
                >
                  Test Deposit &amp; Financing Flow &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Area Section with Glass Cards */}
      <section id="coverage" className="relative z-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#93C5FD]">
                OPERATIONAL DISPATCH
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Central Texas Service Territory
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Mobile technical crews equipped with FLIR infrared cameras and certified ladder-assist rigging operate across Travis and Williamson counties.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {siteConfig.serviceAreas.map((area, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/45 backdrop-blur-xl border border-white/15">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-white">
                      <MapPin className="w-3.5 h-3.5 text-[#93C5FD]" />
                      <span>{area.city}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-white/70 mt-1">
                      <span>{area.zip}</span>
                      <span className="text-emerald-400 font-semibold">{area.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6" id="certifications">
              <div className="rounded-2xl border border-white/20 bg-black/45 backdrop-blur-2xl p-6 sm:p-8 space-y-6">
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/80 pb-3 border-b border-white/15">
                  CONTRACTOR ACCREDITATIONS
                </div>
                <div className="space-y-4">
                  {siteConfig.certifications.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-b-0 last:pb-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#60A5FA] mt-1 shrink-0 shadow-[0_0_10px_#60A5FA]" />
                      <div>
                        <div className="text-xs font-mono font-semibold text-white">{item.title}</div>
                        <div className="text-[11px] text-white/70 leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Required Reviews & Trust Section (Frosted Glass Editorial Layout) */}
      <section id="reviews" className="relative z-10 py-16 sm:py-20 border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#93C5FD]">
              VERIFIED CONTRACTOR SOCIAL PROOF
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Client Audits &amp; Field Testimonials
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Verified roofing engagements authenticated via Whop payments and commercial drone audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientReviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-2xl flex flex-col justify-between space-y-6 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                    <span className="text-[10px] font-mono text-emerald-400 ml-2 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Verified Client
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#93C5FD]">{rev.project}</div>
                  <p className="text-xs text-white/80 leading-relaxed italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 font-mono">
                  <div className="text-xs font-bold text-white">{rev.name}</div>
                  <div className="text-[10px] text-white/60">{rev.role} &bull; {rev.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Required Contact Section */}
      <section id="contact" className="relative z-10 py-16 border-t border-white/15 bg-black/35 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-white/20 bg-black/50 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  DIRECT EMERGENCY DISPATCH LINE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Speak Directly with an Austin Estimator
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-lg leading-relaxed">
                  Active leaks, storm tarping, or insurance claim documentation. Technicians dispatched throughout Travis and Williamson counties.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-white/90">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#93C5FD]" />
                    <span>{siteConfig.company.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#93C5FD]" />
                    <span>{siteConfig.company.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>24/7 Priority Response</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href="#estimate"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-black font-mono font-semibold text-xs tracking-wider uppercase transition text-center shadow-lg"
                >
                  Schedule Drone Inspection &rarr;
                </a>
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs tracking-wider uppercase transition text-center"
                >
                  Call Dispatch: {siteConfig.company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glass Footer */}
      <footer className="relative z-10 py-10 bg-black/80 backdrop-blur-xl text-xs font-mono text-white/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-white font-medium">{siteConfig.company.name}</span>
            <span className="mx-2">&bull;</span>
            <span>{siteConfig.company.license}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>WHOP WEBSITES ARCHITECTURE</span>
            <span className="text-emerald-400">PAYMENT ELEMENTS VERIFIED</span>
          </div>
        </div>
      </footer>

      {/* Whop Checkout Modal */}
      <CheckoutModal
        service={selectedService}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
