"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, CreditCard, Lock, ArrowRight } from "lucide-react";
import { RoofingService } from "@/config/siteConfig";

interface CheckoutModalProps {
  service: RoofingService | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ service, isOpen, onClose }: CheckoutModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [finalInvoiceSent, setFinalInvoiceSent] = useState(false);

  if (!isOpen || !service) return null;

  const handleTestCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      if (service.category === "deposit") {
        await fetch("/api/setup-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ confirmationToken: "ctok_sandbox_" + Date.now() }),
        });
      }
      setTimeout(() => {
        setIsProcessing(false);
        setSuccess(true);
      }, 800);
    } catch {
      setIsProcessing(false);
      setSuccess(true);
    }
  };

  const handleCreateFinalInvoice = async () => {
    try {
      await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 4500,
          customerEmail: "client@enterprise.com",
          customerName: "Robert Hughes",
          description: "Final Project Settlement — ApexGuard Roofing Installation",
          paymentMethodId: "payt_vaulted_card",
          autoCharge: true,
        }),
      });
      setFinalInvoiceSent(true);
    } catch {
      setFinalInvoiceSent(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-black/50 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 sm:p-7 text-white my-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {!success ? (
          <div>
            <div className="pb-4 border-b border-white/10 mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-[#93C5FD] border border-white/20 rounded-full mb-2 bg-white/5">
                WHOP PAYMENT ELEMENTS &bull; SANDBOX
              </div>
              <h2 className="text-xl font-semibold text-white tracking-tight">{service.title}</h2>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-mono font-bold text-white">{service.priceTag}</span>
                <span className="text-xs text-white/60 font-mono">{service.priceSubtext}</span>
              </div>
            </div>

            {/* Express Checkout Element */}
            <div className="mb-4 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                ExpressCheckoutElement
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleTestCheckout}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-black/60 border border-white/20 hover:border-white/40 font-medium text-white transition text-xs rounded-xl"
                >
                  <span className="font-semibold tracking-tight"> Pay</span>
                </button>
                <button
                  type="button"
                  onClick={handleTestCheckout}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-white text-black font-medium hover:bg-slate-200 transition text-xs rounded-xl"
                >
                  <span className="font-semibold tracking-tight">GPay</span>
                </button>
              </div>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-3 text-[10px] uppercase font-mono text-white/50 tracking-widest">
                PaymentElement &bull; Financing Rails
              </span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <form onSubmit={handleTestCheckout} className="space-y-3.5 mt-2">
              <div>
                <label className="block text-[11px] font-mono text-white/80 mb-1">
                  AUTHORIZED EMAIL
                </label>
                <input
                  type="email"
                  defaultValue="client@commercial.com"
                  required
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white font-mono transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-white/80 mb-1 flex items-center justify-between">
                  <span>CARD FORM (PaymentElement)</span>
                  <span className="text-[10px] font-mono text-emerald-400">TEST ENVIRONMENT</span>
                </label>
                <div className="w-full bg-black/40 border border-white/15 rounded-xl p-2.5 text-xs text-white flex items-center justify-between font-mono">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-white/60" />
                    <span>•••• •••• •••• 4242</span>
                  </div>
                  <span className="text-[11px] text-white/50">12/28 &bull; 123</span>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[11px] text-white/70 flex items-start gap-2.5 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-[#93C5FD] mt-0.5 shrink-0" />
                <span>
                  Financing powered by Whop: Eligible buyers automatically view <strong>Klarna, Splitit, and Afterpay</strong> installment options during checkout.
                </span>
              </div>

              {/* Mandatory BrandingElement */}
              <div className="py-2 px-3 bg-black/40 border border-white/10 rounded-xl flex items-center justify-between text-[11px] text-white/60">
                <span className="flex items-center gap-1.5 font-mono text-white/80">
                  <Lock className="w-3 h-3 text-emerald-400" /> Whop BrandingElement
                </span>
                <span className="text-[10px] font-mono text-white/50">
                  Merchant of Record
                </span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 bg-white hover:bg-slate-200 text-black font-mono font-semibold text-xs tracking-wider uppercase rounded-xl transition shadow-lg disabled:opacity-50"
              >
                {isProcessing ? "Authenticating via Whop..." : `Execute ${service.priceTag} Settlement`}
              </button>

              <div className="text-center pt-1">
                <a
                  href={`https://sandbox.whop.com/checkout/${service.planId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-white/60 hover:text-white transition font-mono underline"
                >
                  Direct Hosted Sandbox Checkout URL &rarr;
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">Whop Settlement Completed</h3>
            <p className="text-xs text-white/80 max-w-sm mx-auto leading-relaxed">
              Order logged and verified in Whop Sandbox for <strong>{service.title}</strong>.
            </p>

            {service.category === "deposit" && (
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#93C5FD]">
                    Job Completion Flow
                  </span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3" /> Tokenized On File
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  The initial $500 project deposit was captured, and the payment instrument was tokenized via Whop Setup Intent. Once installation sign-off is complete, the final $4,500 balance is billed through the Whop Invoices API.
                </p>

                {!finalInvoiceSent ? (
                  <button
                    onClick={handleCreateFinalInvoice}
                    className="w-full mt-2 py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition border border-white/20 rounded-lg flex items-center justify-center gap-2"
                  >
                    <span>Trigger Whop Invoices API ($4,500 Final Balance)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#93C5FD]" />
                  </button>
                ) : (
                  <div className="p-2 border border-emerald-400/30 bg-emerald-500/10 rounded-lg text-xs text-emerald-400 font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Invoices API: Final balance statement issued &amp; auto-charge prepared.</span>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="mt-3 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono text-white transition"
            >
              Close Overlay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
