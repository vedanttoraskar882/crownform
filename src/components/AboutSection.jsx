import React from 'react';
import { Building2, Scissors, UserCheck, GraduationCap, MapPin, Sparkles, AlertCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F2EB]/60 border-y border-sage-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-sage-800 border border-sage-300">
            About CrownForm
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-plum-950 tracking-tight">
            Connecting thoughtful capture with specialist craft
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-700 leading-relaxed">
            CrownForm is developing an integrated service designed to remove the strain, uncertainty and repetition from obtaining a personalised hair prosthesis during medical hair loss.
          </p>
        </div>

        {/* Problem & Approach Two-Column Editorial */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* The Problem */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sage-200/80 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-plum-50 border border-plum-100 flex items-center justify-center text-plum-900 mb-6">
                <span className="font-serif font-bold text-lg">01</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-900">
                The challenge in traditional hair loss provision
              </h3>
              <p className="mt-4 text-sm sm:text-base text-plum-700 leading-relaxed">
                People experiencing medical hair loss—such as from chemotherapy or alopecia—frequently encounter a fragmented, physically demanding journey. Standard offerings often rely on limited stock sizing that can press uncomfortably against sensitive scalps.
              </p>
              <p className="mt-3 text-sm sm:text-base text-plum-700 leading-relaxed">
                Replicating natural appearance, parting lines and density typically requires repeated physical measuring appointments at an already vulnerable time. Furthermore, if a replacement or backup wig is required later, the entire measuring process often has to begin anew.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sage-200/60 flex items-center gap-2 text-xs text-plum-600">
              <span className="w-1.5 h-1.5 rounded-full bg-plum-400" />
              <span>Addressing measuring fatigue, fit discomfort and fragmented reorders.</span>
            </div>
          </div>

          {/* CrownForm's Approach */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sage-200/80 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-champagne-50 border border-champagne-200 flex items-center justify-center text-champagne-800 mb-6">
                <span className="font-serif font-bold text-lg">02</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-900">
                CrownForm’s unified approach
              </h3>
              <p className="mt-4 text-sm sm:text-base text-plum-700 leading-relaxed">
                Our method centers on creating a single, calibrated record of a person’s natural hair and scalp curvature—ideally captured before treatment begins. This digital record directly connects home capture with bespoke manufacturing instructions.
              </p>
              <p className="mt-3 text-sm sm:text-base text-plum-700 leading-relaxed">
                Rather than treating each prosthesis as a separate, isolated fitting, CrownForm links calibrated optical capture, custom digital cap modeling, specialist workshop construction, local fitting and ongoing aftercare into one continuous pathway.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sage-200/60 flex items-center gap-2 text-xs text-sage-800">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
              <span>Connecting calibrated capture directly to workshop specifications.</span>
            </div>
          </div>
        </div>

        {/* Planned Operating Model */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-sage-50/70 border border-sage-200/80">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-950">
              Planned Operating Model
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-plum-600 font-medium">
              CrownForm is currently in development. The structure below describes our planned operating arrangements:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-sage-200/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-champagne-100 text-champagne-800 w-fit mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-plum-900">Luton Operational Hub</h4>
              <p className="mt-2 text-xs text-plum-700 leading-relaxed">
                Planned central facility based in Luton, Bedfordshire. Coordinates digital design, prepares printed head forms, performs quality checks and manages ongoing care.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-sage-200/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-sage-100 text-sage-800 w-fit mb-3">
                <Scissors className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-plum-900">Specialist Workshops</h4>
              <p className="mt-2 text-xs text-plum-700 leading-relaxed">
                Planned partnership with established specialist wig-making workshops that craft custom caps and hand-ventilate hair following CrownForm’s digital build package.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-sage-200/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-champagne-100 text-champagne-800 w-fit mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-plum-900">Contracted Fitters & Salons</h4>
              <p className="mt-2 text-xs text-plum-700 leading-relaxed">
                Local fittings provided either in the comfort of the client’s home or through accredited partner salons, followed by a scheduled 14-day comfort check.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-sage-200/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-sage-100 text-sage-800 w-fit mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-plum-900">Future Licensed Studios</h4>
              <p className="mt-2 text-xs text-plum-700 leading-relaxed">
                Planned programme for independent wig studios to adopt the CrownForm capture protocol, retaining their client relationships while accessing central build packages.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-plum-600 bg-white/60 p-3 rounded-xl border border-sage-200/60">
            <AlertCircle className="w-4 h-4 text-plum-500 shrink-0" />
            <span>Note: These arrangements reflect planned business plan operations and do not represent confirmed, contracted partnerships.</span>
          </div>
        </div>

        {/* Founder Panel */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-white border border-sage-200/90 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Founder Monogram & Identity Badge */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-plum-900 to-plum-800 text-champagne-200 flex items-center justify-center font-serif text-3xl font-bold shadow-md border-2 border-champagne-300">
                AD
              </div>
              <h3 className="mt-4 text-2xl font-serif font-bold text-plum-950">
                Aranu Deborah Mai-Lafia
              </h3>
              <p className="text-sm font-semibold text-plum-700">
                Founder &amp; Managing Director
              </p>
              <p className="text-xs text-plum-500 mt-0.5">
                Sole Shareholder, CrownForm Ltd
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800">
                <MapPin className="w-3.5 h-3.5" />
                <span>Operating base: Luton, UK</span>
              </div>
            </div>

            {/* Founder Biography & Qualifications */}
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-sm uppercase tracking-wider font-semibold text-plum-600">
                Leadership &amp; Background
              </h4>
              <p className="text-sm sm:text-base text-plum-800 leading-relaxed">
                Aranu brings experience in healthcare assistance, patient support, safeguarding and structured humanitarian data collection. Her background includes UK healthcare settings and data collection and verification work with the International Organization for Migration and UNICEF-linked programmes. At CrownForm, she leads the patient pathway, capture protocol, pilot coordination, discovery research and data quality.
              </p>

              {/* Education */}
              <div className="pt-4 border-t border-sage-200/60">
                <h5 className="text-xs uppercase tracking-wider font-semibold text-plum-500 flex items-center gap-1.5 mb-2">
                  <GraduationCap className="w-4 h-4 text-plum-700" />
                  Education
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-plum-800">
                  <li className="p-3 rounded-xl bg-ivory-100 border border-sage-200/60">
                    <span className="font-semibold block text-plum-950">MSc</span>
                    <span className="text-xs text-plum-600">University of Bedfordshire</span>
                  </li>
                  <li className="p-3 rounded-xl bg-ivory-100 border border-sage-200/60">
                    <span className="font-semibold block text-plum-950">BSc Economics</span>
                    <span className="text-xs text-plum-600">University of Jos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
