import React from 'react';
import { ArrowRight, Compass, Sparkles, Shield, RefreshCw } from 'lucide-react';
import { HairPrintKitIllustration, ScalpCapModelIllustration } from './Illustrations';

export function HomeSection({ onOpenPilotModal }) {
  return (
    <section id="home" className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-champagne-100/30 via-sage-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status indicator */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/90 border border-sage-200 text-xs sm:text-sm font-medium text-sage-900 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sage-600 animate-pulse" aria-hidden="true" />
            <span>In development &bull; Pilot enquiry phase</span>
          </div>
        </div>

        {/* Hero Main Header & Copy */}
        <div className="mt-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-plum-950 tracking-tight leading-[1.15]">
            Personalised hair. <span className="italic font-normal text-plum-800">Designed around you.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-plum-800 leading-relaxed font-normal max-w-3xl mx-auto">
            CrownForm is developing a personalised hair-prosthesis service that brings together calibrated home capture, custom cap design, specialist craftsmanship and ongoing care.
          </p>

          <p className="mt-4 text-base sm:text-lg text-plum-600 leading-relaxed max-w-2xl mx-auto">
            Your HairPrint is designed to preserve the details of your hair and scalp, creating a reusable starting point for your first prosthesis, backups and future refits.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-plum-900 text-white font-semibold text-base hover:bg-plum-800 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-plum-900 flex items-center justify-center gap-2 group"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-plum-900 border border-sage-300 font-semibold text-base hover:bg-sage-50 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800 text-center"
            >
              Explore How It Works
            </a>
          </div>

          {/* Accessible clarification pill */}
          <p className="mt-4 text-xs text-plum-500">
            A hair prosthesis is a custom wig designed precisely around an individual’s scalp shape and natural appearance.
          </p>
        </div>

        {/* Three short supporting statements */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-sage-200/80 shadow-soft flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-champagne-100 text-champagne-800 shrink-0">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-plum-950">Calibrated HairPrint capture</h2>
              <p className="text-xs text-plum-600 mt-1 leading-relaxed">
                Guided measurements record hairline, parting, crown whorl, density and scalp curvature.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-sage-200/80 shadow-soft flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-sage-100 text-sage-800 shrink-0">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-plum-950">Custom design with specialist review</h2>
              <p className="text-xs text-plum-600 mt-1 leading-relaxed">
                Experienced technicians inspect cap geometry, density transitions and sensitive zones.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-sage-200/80 shadow-soft flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-champagne-100 text-champagne-800 shrink-0">
              <RefreshCw className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-plum-950">A reusable record for future care</h2>
              <p className="text-xs text-plum-600 mt-1 leading-relaxed">
                Your stored design supports backup units, replacements and refits without repeat appointments.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Visual Presentation: Kit & Conceptual Cap */}
        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <HairPrintKitIllustration className="h-full" />
          <ScalpCapModelIllustration className="h-full" />
        </div>
      </div>
    </section>
  );
}
