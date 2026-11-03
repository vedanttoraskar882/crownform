import React from 'react';
import {
  audienceItems,
  mainProstheses,
  additionalProducts,
  studioLicensing,
  futureNhsPathway
} from '../data/pricingData';
import { Check, Info, Users, Building, ArrowUpRight, Sparkles } from 'lucide-react';

export function MarketPricingSection({ onOpenPilotModal }) {
  // Coordinated styling tokens for the 3 prosthesis tiers
  const tierThemes = {
    synthetic: {
      cardBg: "from-white to-emerald-50/50 border-emerald-300 hover:border-emerald-500 shadow-emerald-500/5",
      badge: "bg-emerald-100 text-emerald-900 border-emerald-300",
      priceColor: "text-emerald-950",
      secondaryColor: "text-emerald-800",
      btnClass: "bg-emerald-900 hover:bg-emerald-850 text-white hover:shadow-glow-emerald",
      checkColor: "text-emerald-700"
    },
    "human-hair": {
      cardBg: "from-white to-purple-50/50 border-purple-300 ring-2 ring-purple-400/25 hover:border-purple-500 shadow-purple-500/10",
      badge: "bg-purple-100 text-purple-900 border-purple-300",
      priceColor: "text-purple-950",
      secondaryColor: "text-purple-800",
      btnClass: "bg-gradient-to-r from-purple-950 via-plum-900 to-purple-950 hover:from-purple-900 hover:to-plum-850 text-white hover:shadow-glow-plum",
      checkColor: "text-purple-700",
      highlightPill: "Hand-Ventilated Craft"
    },
    "silicone-secure": {
      cardBg: "from-white to-amber-50/50 border-amber-300 ring-2 ring-amber-400/25 hover:border-amber-500 shadow-amber-500/10",
      badge: "bg-amber-100 text-amber-900 border-amber-300",
      priceColor: "text-amber-950",
      secondaryColor: "text-amber-800",
      btnClass: "bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-600 text-white hover:shadow-glow-gold",
      checkColor: "text-amber-700",
      highlightPill: "Adhesive-Free Security"
    }
  };

  const additionalThemes = [
    { card: "bg-gradient-to-br from-white to-teal-50/50 border-teal-200/80 hover:border-teal-400", check: "text-teal-700", price: "text-teal-950" },
    { card: "bg-gradient-to-br from-white to-amber-50/50 border-amber-200/80 hover:border-amber-400", check: "text-amber-700", price: "text-amber-950" },
    { card: "bg-gradient-to-br from-white to-purple-50/50 border-purple-200/80 hover:border-purple-400", check: "text-purple-700", price: "text-purple-950" }
  ];

  return (
    <section id="market-pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 shadow-sm">
            Transparent Commercial Model
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-plum-950 tracking-tight leading-[1.18]">
            Market &amp; Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-700 leading-relaxed">
            CrownForm prostheses are bespoke product purchases engineered around individual scalp geometry, not recurring software subscriptions.
          </p>
        </div>

        {/* Part 1: Who CrownForm is designed for with colorful cards */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#F5F9F6] via-[#EDF5F0] to-[#F7FAF8] border border-emerald-200/80 shadow-soft">
          <div className="flex items-center gap-2.5 mb-6">
            <Users className="w-5 h-5 text-emerald-800" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-950">
              Who CrownForm is designed for
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceItems.map((item, idx) => {
              const bgTints = [
                "bg-gradient-to-br from-white to-emerald-50/40 border-emerald-200/70",
                "bg-gradient-to-br from-white to-purple-50/40 border-purple-200/70",
                "bg-gradient-to-br from-white to-amber-50/40 border-amber-200/70",
                "bg-gradient-to-br from-white to-teal-50/40 border-teal-200/70"
              ];
              return (
                <div key={idx} className={`p-6 rounded-2xl ${bgTints[idx % 4]} border shadow-card hover:-translate-y-1 transition-transform`}>
                  <h4 className="text-sm font-bold text-plum-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-plum-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-emerald-900 font-medium">
            <p>
              &bull; Children’s services are not part of the initial launch offering.
            </p>
            <p>
              &bull; NHS voucher holders are supported within our conditional future NHS pathway outlined below.
            </p>
          </div>
        </div>

        {/* Part 2: Three Main Prostheses Cards with colourful distinct identities */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-plum-950">
              Personalised Hair Prostheses
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-plum-600">
              Custom-tailored cap constructions. Prominent consumer price includes 20% VAT; secondary figure indicates before-VAT amount.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {mainProstheses.map((tier) => {
              const theme = tierThemes[tier.id] || tierThemes.synthetic;
              return (
                <div
                  key={tier.id}
                  className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${theme.cardBg} border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative`}
                >
                  {theme.highlightPill && (
                    <div className="absolute -top-3.5 right-8">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-plum-950 text-amber-200 shadow-md border border-amber-300/40">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        {theme.highlightPill}
                      </span>
                    </div>
                  )}

                  <div>
                    <h4 className="text-2xl font-serif font-bold text-plum-950">
                      {tier.name}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-plum-700 min-h-[44px] leading-relaxed">
                      {tier.description}
                    </p>

                    {/* Pricing Display */}
                    <div className="my-6 pb-6 border-b border-black/10">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl sm:text-4xl font-serif font-bold ${theme.priceColor}`}>
                          {tier.prominentPrice}
                        </span>
                        <span className="text-xs font-semibold text-plum-600">
                          {tier.vatNote}
                        </span>
                      </div>
                      <div className={`mt-1.5 text-xs font-bold ${theme.secondaryColor}`}>
                        {tier.secondaryPrice}
                      </div>
                    </div>

                    {/* Feature List */}
                    <ul className="space-y-3">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="text-xs sm:text-sm text-plum-800 flex items-start gap-2.5">
                          <Check className={`w-4 h-4 ${theme.checkColor} shrink-0 mt-0.5`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-black/10">
                    <button
                      type="button"
                      onClick={(e) => onOpenPilotModal(e.currentTarget)}
                      className={`w-full py-3.5 px-5 rounded-full ${theme.btnClass} font-semibold text-sm active:scale-[0.98] transition-all shadow-sm hover:shadow-card focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <p className="mt-2 text-[11px] text-center text-plum-500 font-medium">
                      No payment taken. Opens pilot enquiry.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 3: Additional Products & CrownCare with soft jewel card tints */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-950 mb-6">
            Additional Products &amp; Ongoing Care
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalProducts.map((prod, idx) => {
              const theme = additionalThemes[idx % 3];
              return (
                <div key={idx} className={`p-7 sm:p-8 rounded-3xl ${theme.card} border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-plum-950">
                      {prod.name}
                    </h4>
                    <div className="mt-3 mb-4 pb-3 border-b border-black/10">
                      <div className={`text-xl font-bold ${theme.price}`}>
                        {prod.prominentPrice}
                      </div>
                      <div className="text-xs text-plum-600 mt-0.5 font-medium">
                        {prod.secondaryPrice}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-plum-700 leading-relaxed">
                      {prod.detail}
                    </p>

                    {prod.features && (
                      <ul className="mt-4 space-y-2">
                        {prod.features.map((item, fIdx) => (
                          <li key={fIdx} className="text-xs text-plum-800 flex items-start gap-2">
                            <Check className={`w-3.5 h-3.5 ${theme.check} shrink-0 mt-0.5`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/10 text-xs text-plum-600 font-medium">
                    {prod.note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 4: Studio Licensing Panel - Deep Velvet Midnight Plum */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-plum-950 via-[#1C1628] to-plum-950 text-white border border-purple-800/60 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-3xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/80 text-amber-300 border border-purple-700 mb-2 shadow-sm">
              <Building className="w-3.5 h-3.5" />
              <span>B2B Studio Programme</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {studioLicensing.heading}
            </h3>
            <p className="mt-2 text-sm text-purple-200/90 leading-relaxed">
              {studioLicensing.subheading}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            {studioLicensing.fees.map((fee, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-purple-900/40 border border-purple-700/60 backdrop-blur-sm">
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider block">
                  {fee.label}
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 block mt-1">
                  {fee.amount}
                </span>
                <span className="text-xs text-purple-200/80 mt-1 block font-medium">
                  {fee.vat}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-purple-800/80 relative">
            <p className="text-xs sm:text-sm text-purple-200/90 max-w-2xl leading-relaxed">
              {studioLicensing.terms}
            </p>
            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-plum-950 text-xs sm:text-sm font-bold hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shrink-0 flex items-center gap-1.5"
            >
              <span>{studioLicensing.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 text-plum-950" />
            </button>
          </div>
        </div>

        {/* Part 5: Future NHS Pathway & Statutory Notes */}
        <div className="mt-14 space-y-6">
          {/* Conditional NHS Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50/90 via-teal-50/60 to-emerald-50/90 border border-emerald-300 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-2xl bg-emerald-200 text-emerald-950 shrink-0 mt-0.5 shadow-sm">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-lg sm:text-xl font-serif font-bold text-plum-950">
                  {futureNhsPathway.title}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-normal">
                  {futureNhsPathway.status} {futureNhsPathway.description}
                </p>
                <div className="p-4 rounded-xl bg-white/95 border border-emerald-200 text-xs sm:text-sm text-plum-900 space-y-1 shadow-sm">
                  <p>
                    <span className="font-semibold text-emerald-950">Planning example:</span> {futureNhsPathway.pricingExample.baseSynthetic} ({futureNhsPathway.pricingExample.discountNote}).
                  </p>
                  <p className="text-plum-700">
                    {futureNhsPathway.pricingExample.topUpEstimate}
                  </p>
                </div>
                <p className="text-xs text-emerald-900/80 italic">
                  {futureNhsPathway.disclaimer} CrownForm makes no claims of existing NHS contracts or guaranteed reimbursement.
                </p>
              </div>
            </div>
          </div>

          {/* Statutory Pricing Notes */}
          <div className="p-6 rounded-2xl bg-white/90 border border-emerald-200 text-xs text-plum-600 space-y-2 shadow-sm">
            <p className="font-semibold text-plum-900">
              Pricing &amp; Regulatory Disclaimers:
            </p>
            <p>
              &bull; &ldquo;Prices shown follow CrownForm’s business plan. Service availability is subject to development and pilot readiness.&rdquo;
            </p>
            <p>
              &bull; &ldquo;VAT relief depends on individual eligibility and confirmation. Do not assume that all medical hair-loss purchases qualify.&rdquo;
            </p>
            <p>
              &bull; CrownForm does not claim insurer approval, guaranteed reimbursement or existing NHS contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
