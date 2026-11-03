import React from 'react';
import {
  audienceItems,
  mainProstheses,
  additionalProducts,
  studioLicensing,
  futureNhsPathway
} from '../data/pricingData';
import { Check, Info, Users, Building, ArrowUpRight } from 'lucide-react';

export function MarketPricingSection({ onOpenPilotModal }) {
  return (
    <section id="market-pricing" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-champagne-100 text-champagne-800 border border-champagne-300">
            Transparent Commercial Model
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-plum-950 tracking-tight leading-[1.18]">
            Market &amp; Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-700 leading-relaxed">
            CrownForm prostheses are bespoke product purchases engineered around individual scalp geometry, not recurring software subscriptions.
          </p>
        </div>

        {/* Part 1: Who CrownForm is designed for */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#F5F2EB]/80 border border-sage-200/80">
          <div className="flex items-center gap-2.5 mb-6">
            <Users className="w-5 h-5 text-plum-900" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-950">
              Who CrownForm is designed for
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceItems.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-sage-200/70 shadow-soft">
                <h4 className="text-sm font-bold text-plum-950 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-plum-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-sage-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-plum-600 font-medium">
            <p>
              &bull; Children’s services are not part of the initial launch offering.
            </p>
            <p>
              &bull; NHS voucher holders are supported within our conditional future NHS pathway outlined below.
            </p>
          </div>
        </div>

        {/* Part 2: Three Main Prostheses Cards */}
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
            {mainProstheses.map((tier) => (
              <div
                key={tier.id}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-sage-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-2xl font-serif font-bold text-plum-950">
                    {tier.name}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-plum-700 min-h-[44px] leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="my-6 pb-6 border-b border-sage-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-plum-950">
                        {tier.prominentPrice}
                      </span>
                      <span className="text-xs font-semibold text-plum-600">
                        {tier.vatNote}
                      </span>
                    </div>
                    <div className="mt-1.5 text-xs font-semibold text-sage-800">
                      {tier.secondaryPrice}
                    </div>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="text-xs sm:text-sm text-plum-800 flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-sage-100">
                  <button
                    type="button"
                    onClick={(e) => onOpenPilotModal(e.currentTarget)}
                    className="w-full py-3.5 px-5 rounded-full bg-plum-950 text-white font-semibold text-sm hover:bg-plum-850 active:scale-[0.98] transition-all shadow-sm hover:shadow-card focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-plum-900 flex items-center justify-center gap-2"
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 text-champagne-300" />
                  </button>
                  <p className="mt-2 text-[11px] text-center text-plum-500 font-medium">
                    No payment taken. Opens pilot enquiry.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Additional Products & CrownCare */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-950 mb-6">
            Additional Products &amp; Ongoing Care
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalProducts.map((prod, idx) => (
              <div key={idx} className="p-7 sm:p-8 rounded-3xl bg-white border border-sage-200/80 shadow-card flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-serif font-bold text-plum-950">
                    {prod.name}
                  </h4>
                  <div className="mt-3 mb-4 pb-3 border-b border-sage-100">
                    <div className="text-xl font-bold text-plum-900">
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
                          <Check className="w-3.5 h-3.5 text-sage-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-sage-100 text-xs text-plum-600 font-medium">
                  {prod.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 4: Studio Licensing Panel */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-white border border-champagne-300 shadow-card">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-champagne-100 text-champagne-800 border border-champagne-200 mb-2">
              <Building className="w-3.5 h-3.5" />
              <span>B2B Studio Programme</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-plum-950">
              {studioLicensing.heading}
            </h3>
            <p className="mt-2 text-sm text-plum-700 leading-relaxed">
              {studioLicensing.subheading}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {studioLicensing.fees.map((fee, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-ivory-100 border border-sage-200/70">
                <span className="text-xs font-semibold text-plum-600 uppercase tracking-wider block">
                  {fee.label}
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-plum-950 block mt-1">
                  {fee.amount}
                </span>
                <span className="text-xs text-plum-600 mt-1 block">
                  {fee.vat}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-sage-200/60">
            <p className="text-xs sm:text-sm text-plum-700 max-w-2xl leading-relaxed">
              {studioLicensing.terms}
            </p>
            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="px-7 py-3 rounded-full bg-plum-950 text-white text-xs sm:text-sm font-semibold hover:bg-plum-850 transition-colors shadow-sm shrink-0 flex items-center gap-1.5"
            >
              <span>{studioLicensing.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 text-champagne-300" />
            </button>
          </div>
        </div>

        {/* Part 5: Future NHS Pathway & Statutory Notes */}
        <div className="mt-14 space-y-6">
          {/* Conditional NHS Box */}
          <div className="p-8 rounded-3xl bg-[#EAEFE9]/70 border border-sage-300 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-2xl bg-sage-200 text-sage-900 shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-lg sm:text-xl font-serif font-bold text-plum-950">
                  {futureNhsPathway.title}
                </h4>
                <p className="text-xs sm:text-sm text-plum-800 leading-relaxed">
                  {futureNhsPathway.status} {futureNhsPathway.description}
                </p>
                <div className="p-4 rounded-xl bg-white/90 border border-sage-200 text-xs sm:text-sm text-plum-900 space-y-1">
                  <p>
                    <span className="font-semibold">Planning example:</span> {futureNhsPathway.pricingExample.baseSynthetic} ({futureNhsPathway.pricingExample.discountNote}).
                  </p>
                  <p className="text-plum-700">
                    {futureNhsPathway.pricingExample.topUpEstimate}
                  </p>
                </div>
                <p className="text-xs text-plum-600 italic">
                  {futureNhsPathway.disclaimer} CrownForm makes no claims of existing NHS contracts or guaranteed reimbursement.
                </p>
              </div>
            </div>
          </div>

          {/* Statutory Pricing Notes */}
          <div className="p-6 rounded-2xl bg-white border border-sage-200 text-xs text-plum-600 space-y-2">
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
