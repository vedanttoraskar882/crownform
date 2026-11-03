import React from 'react';
import { ArrowRight, Compass, Sparkles, RefreshCw, ChevronRight } from 'lucide-react';
import { HairPrintKitIllustration, ScalpCapModelIllustration } from './Illustrations';

export function HomeSection({ onOpenPilotModal }) {
  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden">
      {/* Multi-coloured ambient illumination blooms */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-amber-200/40 via-emerald-100/35 to-transparent blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute top-20 -left-28 w-96 h-96 bg-purple-200/40 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute top-36 -right-28 w-96 h-96 bg-teal-200/45 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Headline & Copy */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-serif font-bold text-plum-950 tracking-[-0.025em] leading-[1.08]">
            Personalised hair. <span className="italic font-normal text-gradient-plum block sm:inline">Designed around you.</span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-plum-800/90 leading-relaxed font-normal max-w-3xl mx-auto">
            CrownForm is developing a personalised hair-prosthesis service that brings together calibrated home capture, custom cap design, specialist craftsmanship and ongoing care.
          </p>

          <p className="mt-3.5 text-base sm:text-lg text-plum-700 leading-relaxed max-w-2xl mx-auto">
            Your HairPrint is designed to preserve the details of your hair and scalp, creating a reusable starting point for your first prosthesis, backups and future refits.
          </p>

          {/* Action CTAs with smooth hover animations */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-plum-950 via-plum-900 to-plum-950 text-white font-semibold text-base hover:from-plum-900 hover:to-plum-800 active:scale-[0.98] transition-all shadow-card hover:shadow-glow-plum hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-plum-900 flex items-center justify-center gap-2.5 group"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/95 backdrop-blur-md text-plum-950 border border-emerald-200/80 font-semibold text-base hover:bg-emerald-50/70 hover:border-emerald-300 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-soft hover:shadow-card hover:-translate-y-1 flex items-center justify-center gap-1.5"
            >
              <span>Explore How It Works</span>
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </a>
          </div>

          {/* Clarification text */}
          <p className="mt-5 text-xs text-plum-600 font-medium">
            A hair prosthesis is a custom wig designed around an individual’s scalp shape and preferred appearance.
          </p>
        </div>

        {/* Three short supporting statements with vibrant jewel-tone cards */}
        <div className="mt-18 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-7 rounded-3xl bg-gradient-to-br from-white/95 to-emerald-50/40 backdrop-blur-xl border border-emerald-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 shrink-0 shadow-sm">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-plum-950">Calibrated HairPrint capture</h2>
              <p className="text-xs text-plum-600 mt-1.5 leading-relaxed">
                Guided measurements record hairline, parting, crown whorl, density and scalp shape.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-gradient-to-br from-white/95 to-purple-50/40 backdrop-blur-xl border border-purple-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-100 text-purple-900 shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-plum-950">Custom design with specialist review</h2>
              <p className="text-xs text-plum-600 mt-1.5 leading-relaxed">
                Experienced technicians inspect cap geometry, hair density and sensitive scalp zones.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-gradient-to-br from-white/95 to-amber-50/40 backdrop-blur-xl border border-amber-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-900 shrink-0 shadow-sm">
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

        {/* Visual Presentation: Kit & Conceptual Cap with subtle float animations */}
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="transition-transform duration-500 hover:scale-[1.01]">
            <HairPrintKitIllustration className="h-full animate-float-slow" />
          </div>
          <div className="transition-transform duration-500 hover:scale-[1.01]">
            <ScalpCapModelIllustration className="h-full animate-float-delayed" />
          </div>
        </div>
      </div>
    </section>
  );
}
