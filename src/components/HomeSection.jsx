import React from 'react';
import { ArrowRight, Compass, Sparkles, RefreshCw, ChevronRight } from 'lucide-react';
import { HairPrintKitIllustration, ScalpCapModelIllustration } from './Illustrations';

export function HomeSection({ onOpenPilotModal }) {
  return (
    <section id="home" className="relative pt-6 pb-20 md:pt-14 md:pb-32 overflow-hidden">
      {/* Ambient background illumination */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-champagne-100/40 via-sage-100/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-Header Badge */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sage-200 text-xs sm:text-[13px] font-medium text-plum-900 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-champagne-500 animate-pulse" aria-hidden="true" />
            <span>Personalised Hair Prostheses &bull; Pilot Programme</span>
          </div>
        </div>

        {/* Hero Headline & Editorial Copy */}
        <div className="mt-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-bold text-plum-950 tracking-[-0.02em] leading-[1.12]">
            Personalised hair. <span className="italic font-normal text-plum-800 block sm:inline">Designed around you.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-plum-800/90 leading-relaxed font-normal max-w-3xl mx-auto">
            CrownForm is developing a personalised hair-prosthesis service that brings together calibrated home capture, custom cap design, specialist craftsmanship and ongoing care.
          </p>

          <p className="mt-3.5 text-base sm:text-lg text-plum-600 leading-relaxed max-w-2xl mx-auto">
            Your HairPrint is designed to preserve the details of your hair and scalp, creating a reusable starting point for your first prosthesis, backups and future refits.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
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
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-plum-950 border border-sage-300/80 font-semibold text-base hover:bg-sage-50/70 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-plum-800 shadow-soft hover:shadow-card flex items-center justify-center gap-1.5"
            >
              <span>Explore How It Works</span>
              <ChevronRight className="w-4 h-4 text-plum-500" />
            </a>
          </div>

          {/* Accessible Clarification */}
          <p className="mt-4 text-xs text-plum-500 font-medium">
            A hair prosthesis is a custom wig designed around an individual’s scalp shape and preferred appearance.
          </p>
        </div>

        {/* Three short supporting statements */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-sage-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-champagne-100/80 text-champagne-800 shrink-0">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-plum-950">Calibrated HairPrint capture</h2>
              <p className="text-xs text-plum-600 mt-1 leading-relaxed">
                Guided measurements record hairline, parting, crown whorl, density and scalp shape.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-sage-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-sage-100 text-sage-800 shrink-0">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-plum-950">Custom design with specialist review</h2>
              <p className="text-xs text-plum-600 mt-1 leading-relaxed">
                Experienced technicians inspect cap geometry, hair density and sensitive scalp zones.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-sage-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-champagne-100/80 text-champagne-800 shrink-0">
              <RefreshCw className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-plum-950">A reusable record for future care</h2>
              <p className="text-xs text-plum-600 mt-1 leading-relaxed">
                Your stored design supports backup units, replacements and refits without repeat appointments.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Presentation: Kit & Conceptual Cap */}
        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <HairPrintKitIllustration className="h-full" />
          <ScalpCapModelIllustration className="h-full" />
        </div>
      </div>
    </section>
  );
}
