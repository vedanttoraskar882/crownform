import React from 'react';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export function HowItWorksSection({ onOpenPilotModal }) {
  const steps = [
    {
      step: 1,
      title: "Register interest or receive a referral",
      summary: "Direct sign-up or clinical pathway",
      detail: "Customers enter the CrownForm pathway through a direct online pilot enquiry or via a future clinical referral partner.",
      badgeColor: "bg-teal-100 text-teal-900 border-teal-300",
      tagColor: "text-teal-700"
    },
    {
      step: 2,
      title: "Receive the HairPrint kit",
      summary: "Dispatched within 48 hours",
      detail: "Contains the calibration band, colour reference card, hair-sample envelope, step-by-step guide and prepaid return envelope. Planned dispatch within 48 hours of sign-up or referral.",
      badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      tagColor: "text-indigo-700"
    },
    {
      step: 3,
      title: "Complete guided capture",
      summary: "At home or with an assisted appointment",
      detail: "Complete browser-based guided capture in your home with a helper, or schedule an assisted capture appointment with a contracted fitter. All data undergoes quality verification before proceeding.",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      tagColor: "text-amber-700"
    },
    {
      step: 4,
      title: "Review your personalised preview",
      summary: "Specialist review within 3 working days",
      detail: "A specialist prepares your custom 3D digital cap model within three working days of passed capture. You review and approve the design and expected fitting date. Planned 50% deposit taken upon approval.",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      tagColor: "text-emerald-700"
    },
    {
      step: 5,
      title: "Specialist manufacture & quality checks",
      summary: "Artisan craftsmanship guided by digital specs",
      detail: "Your printed head form and digital cap specification guide our specialist partner workshop. Hair is hand-ventilated into your chosen prosthesis, followed by thorough quality inspection at our Luton hub.",
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
      tagColor: "text-rose-700"
    },
    {
      step: 6,
      title: "Fitting and continued care",
      summary: "Home or salon fitting with 14-day check",
      detail: "Enjoy professional fitting in your home or at an accredited partner salon. A comfort follow-up occurs two weeks later. Your reusable HairPrint remains stored for effortless backups and future refits.",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      tagColor: "text-purple-700"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-[#F2EEF7] via-[#E9E3F1] to-[#F1EDF7] border-t border-purple-200/60 relative overflow-hidden">
      {/* Decorative ambient color glow */}
      <div className="absolute top-1/3 -left-28 w-96 h-96 bg-purple-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-96 h-96 bg-indigo-200/35 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-900 border border-purple-300 shadow-sm">
            The Patient Pathway
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-plum-950 tracking-tight leading-[1.18]">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-800/90 leading-relaxed">
            A calm, step-by-step journey designed to ensure anatomical accuracy, dignified support and predictable craftsmanship.
          </p>
        </div>

        {/* Step-by-Step Numbered Journey with colorful badges and hover lifts */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`w-11 h-11 rounded-2xl ${item.badgeColor} border font-serif font-bold text-lg flex items-center justify-center shadow-sm`}>
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-purple-900/60">
                    Step {item.step} of 6
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-plum-950 leading-snug">
                  {item.title}
                </h3>
                <p className={`text-xs font-bold ${item.tagColor} mt-1.5 mb-3.5`}>
                  {item.summary}
                </p>
                <p className="text-xs sm:text-sm text-plum-700 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-100 flex items-center gap-2 text-xs text-purple-900/70 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Planned service protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Timing & Bridge Headwear Notice */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white to-amber-50/40 border border-amber-300/90 shadow-card">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-100 text-amber-900 shrink-0 mt-0.5 shadow-sm">
                <Clock className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg sm:text-xl font-serif font-bold text-plum-950">
                  Production Timing &amp; Interim Headwear
                </h4>
                <p className="text-xs sm:text-sm text-plum-800 leading-relaxed max-w-3xl font-medium">
                  &ldquo;The planned custom fitting timeframe is approximately eight weeks after order. Interim headwear or a ready-to-wear option may be needed while your prosthesis is made.&rdquo;
                </p>
                <p className="text-xs text-plum-600 leading-relaxed">
                  To bridge this period, CrownForm’s business plan includes a ready-to-wear synthetic bridge option provided at cost plus postage. CrownForm does not guarantee delivery prior to the onset of chemotherapy or hair loss.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="shrink-0 px-8 py-3.5 rounded-full bg-gradient-to-r from-plum-950 to-plum-900 text-white text-sm font-semibold hover:from-plum-900 hover:to-plum-850 active:scale-[0.98] transition-all shadow-sm hover:shadow-card hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Enquire About Pilot</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
