import React from 'react';
import { ArrowRight, Compass, Sparkles, RefreshCw, ChevronRight } from 'lucide-react';
import { HairPrintKitIllustration, ScalpCapModelIllustration } from './Illustrations';

export function HomeSection({ onOpenPilotModal }) {
  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden">
      {/* Dynamic ambient multi-layer illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-champagne-200/35 via-sage-100/30 to-transparent blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-24 -left-40 w-96 h-96 bg-champagne-300/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-36 -right-40 w-96 h-96 bg-sage-300/25 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Headline & Copy (Clean start - pill removed) */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-serif font-bold text-plum-950 tracking-[-0.025em] leading-[1.08]">
            Personalised hair. <span className="italic font-normal text-plum-800 block sm:inline">Designed around you.</span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-plum-800/90 leading-relaxed font-normal max-w-3xl mx-auto">
            CrownForm is developing a personalised hair-prosthesis service that brings together calibrated home capture, custom cap design, specialist craftsmanship and ongoing care.
          </p>

          <p className="mt-3.5 text-base sm:text-lg text-plum-600 leading-relaxed max-w-2xl mx-auto">
            Your HairPrint is designed to preserve the details of your hair and scalp, creating a reusable starting point for your first prosthesis, backups and future refits.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-plum-950 text-white font-semibold text-base hover:bg-plum-850 active:scale-[0.98] transition-all shadow-card hover:shadow-card-hover hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-plum-900 flex items-center justify-center gap-2.5 group"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 text-champagne-300 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/90 backdrop-blur-md text-plum-950 border border-sage-300/80 font-semibold text-base hover:bg-sage-50/80 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-plum-800 shadow-soft hover:shadow-card flex items-center justify-center gap-1.5"
            >
              <span>Explore How It Works</span>
              <ChevronRight className="w-4 h-4 text-plum-500" />
            </a>
          </div>

          {/* Clarification text */}
          <p className="mt-5 text-xs text-plum-500 font-medium">
            A hair prosthesis is a custom wig designed around an individual’s scalp shape and preferred appearance.
          </p>
        </div>

        {/* Three short supporting statements */}
        <div className="mt-18 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-7 rounded-3xl bg-white/80 backdrop-blur-xl border border-sage-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-champagne-100/90 text-champagne-800 shrink-0 shadow-sm">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-plum-950">Calibrated HairPrint capture</h2>
              <p className="text-xs text-plum-600 mt-1.5 leading-relaxed">
                Guided measurements record hairline, parting, crown whorl, density and scalp shape.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-white/80 backdrop-blur-xl border border-sage-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-sage-100 text-sage-800 shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-plum-950">Custom design with specialist review</h2>
              <p className="text-xs text-plum-600 mt-1.5 leading-relaxed">
                Experienced technicians inspect cap geometry, hair density and sensitive scalp zones.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-white/80 backdrop-blur-xl border border-sage-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-champagne-100/90 text-champagne-800 shrink-0 shadow-sm">
              <RefreshCw className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-plum-950">A reusable record for future care</h2>
              <p className="text-xs text-plum-600 mt-1.5 leading-relaxed">
                Your stored design supports backup units, replacements and refits without repeat appointments.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Presentation: Kit & Conceptual Cap */}
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <HairPrintKitIllustration className="h-full" />
          <ScalpCapModelIllustration className="h-full" />
        </div>
      </div>
    </section>
  );
}
