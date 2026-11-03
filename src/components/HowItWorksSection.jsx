import React from 'react';
import { Clock, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

export function HowItWorksSection({ onOpenPilotModal }) {
  const steps = [
    {
      step: 1,
      title: "Register interest or receive a referral",
      summary: "Direct sign-up or clinical pathway",
      detail: "Customers enter the CrownForm pathway through a direct online pilot enquiry or via a future clinical referral partner."
    },
    {
      step: 2,
      title: "Receive the HairPrint kit",
      summary: "Dispatched within 48 hours",
      detail: "Contains the calibration band, colour reference card, hair-sample envelope, step-by-step guide and prepaid return envelope. Planned dispatch within 48 hours of sign-up or referral."
    },
    {
      step: 3,
      title: "Complete guided capture",
      summary: "At home or with an assisted appointment",
      detail: "Complete browser-based guided capture in your home with a helper, or schedule an assisted capture appointment with a contracted fitter. All data undergoes quality verification before proceeding."
    },
    {
      step: 4,
      title: "Review your personalised preview",
      summary: "Specialist review within 3 working days",
      detail: "A specialist prepares your custom 3D digital cap model within three working days of passed capture. You review and approve the design and expected fitting date. Planned 50% deposit taken upon approval."
    },
    {
      step: 5,
      title: "Specialist manufacture & quality checks",
      summary: "Artisan craftsmanship guided by digital specs",
      detail: "Your printed head form and digital cap specification guide our specialist partner workshop. Hair is hand-ventilated into your chosen prosthesis, followed by thorough quality inspection at our Luton hub."
    },
    {
      step: 6,
      title: "Fitting and continued care",
      summary: "Home or salon fitting with 14-day check",
      detail: "Enjoy professional fitting in your home or at an accredited partner salon. A comfort follow-up occurs two weeks later. Your reusable HairPrint remains stored for effortless backups and future refits."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F5F2EB]/50 border-t border-sage-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-sage-800 border border-sage-300">
            The Patient Pathway
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-plum-950 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-700 leading-relaxed">
            A calm, step-by-step journey designed to ensure anatomical accuracy, dignified support and predictable craftsmanship.
          </p>
        </div>

        {/* Step-by-Step Numbered Journey */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative p-7 sm:p-8 rounded-3xl bg-white border border-sage-200/80 shadow-soft flex flex-col justify-between group hover:border-sage-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-2xl bg-champagne-100 border border-champagne-200 text-champagne-800 font-serif font-bold text-lg flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide uppercase text-plum-500">
                    Step {item.step} of 6
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-plum-950">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-sage-700 mt-1 mb-3">
                  {item.summary}
                </p>
                <p className="text-xs sm:text-sm text-plum-700 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sage-100 flex items-center gap-2 text-xs text-plum-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
                <span>Planned service protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Timing & Bridge Headwear Notice */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-champagne-300/80 shadow-soft">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-champagne-100 text-champagne-800 shrink-0 mt-0.5">
                <Clock className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base sm:text-lg font-serif font-bold text-plum-950">
                  Production Timing &amp; Interim Headwear
                </h4>
                <p className="text-xs sm:text-sm text-plum-800 leading-relaxed max-w-3xl">
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
              className="shrink-0 px-6 py-3 rounded-full bg-plum-900 text-white text-sm font-semibold hover:bg-plum-800 transition-colors shadow-sm flex items-center gap-2"
            >
              <span>Enquire About Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
