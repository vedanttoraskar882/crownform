import React from 'react';
import { Building2, Scissors, UserCheck, GraduationCap, MapPin, Sparkles, AlertCircle, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F2EB]/60 border-y border-sage-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-sage-100 text-sage-800 border border-sage-300">
            About CrownForm
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-plum-950 tracking-tight leading-[1.18]">
            Connecting thoughtful capture with specialist craft
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-700 leading-relaxed">
            CrownForm is developing an integrated service designed to remove the strain, uncertainty and repetition from obtaining a personalised hair prosthesis during medical hair loss.
          </p>
        </div>

        {/* Problem & Approach Two-Column Editorial */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* The Problem */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sage-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-plum-50 border border-plum-100 flex items-center justify-center text-plum-900 mb-6">
                <span className="font-serif font-bold text-lg">01</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-950">
                The challenge in traditional hair loss provision
              </h3>
              <p className="mt-4 text-sm sm:text-base text-plum-700 leading-relaxed">
                People experiencing medical hair loss—such as from chemotherapy or alopecia—frequently encounter a fragmented, physically demanding journey. Standard offerings often rely on limited stock sizing that can press uncomfortably against sensitive scalps.
              </p>
              <p className="mt-3 text-sm sm:text-base text-plum-700 leading-relaxed">
                Replicating natural appearance, parting lines and density typically requires repeated physical measuring appointments at an already vulnerable time. Furthermore, if a replacement or backup wig is required later, the entire measuring process often has to begin anew.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sage-200/60 flex items-center gap-2 text-xs text-plum-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-plum-400" />
              <span>Addressing measuring fatigue, fit discomfort and fragmented reorders.</span>
            </div>
          </div>

          {/* CrownForm's Approach */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sage-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-champagne-50 border border-champagne-200 flex items-center justify-center text-champagne-800 mb-6">
                <span className="font-serif font-bold text-lg">02</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-950">
                CrownForm’s unified approach
              </h3>
              <p className="mt-4 text-sm sm:text-base text-plum-700 leading-relaxed">
                Our method centers on creating a single, calibrated record of a person’s natural hair and scalp curvature—ideally captured before treatment begins. This digital record directly connects home capture with bespoke manufacturing instructions.
              </p>
              <p className="mt-3 text-sm sm:text-base text-plum-700 leading-relaxed">
                Rather than treating each prosthesis as a separate, isolated fitting, CrownForm links calibrated optical capture, custom digital cap modeling, specialist workshop construction, local fitting and ongoing aftercare into one continuous pathway.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sage-200/60 flex items-center gap-2 text-xs text-sage-800 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
              <span>Connecting calibrated capture directly to workshop specifications.</span>
            </div>
          </div>
        </div>

        {/* Planned Operating Model */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-sage-50/70 border border-sage-200/80">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum-950">
              Planned Operating Model
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-plum-600 font-medium">
              The structure below describes our planned operating arrangements:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-sage-200/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-champagne-100 text-champagne-800 w-fit mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-plum-900">Luton Operational Hub</h4>
              <p className="mt-2 text-xs text-plum-700 leading-relaxed">
                Planned central facility based in Luton, Bedfordshire. Coordinates digital design, prepares printed head forms, checks finished pieces and manages care.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sage-200/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-sage-100 text-sage-800 w-fit mb-3">
                <Scissors className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-plum-900">Specialist Workshops</h4>
              <p className="mt-2 text-xs text-plum-700 leading-relaxed">
                Planned partnerships with specialist wig-making workshops to manufacture custom hairpieces following CrownForm’s digital build package.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sage-200/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-champagne-100 text-champagne-800 w-fit mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-plum-900">Contracted Fitters & Salons</h4>
              <p className="mt-2 text-xs text-plum-700 leading-relaxed">
                Local fitting appointments provided in the comfort of home or at accredited partner salons, followed by a scheduled 14-day comfort check.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sage-200/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-sage-100 text-sage-800 w-fit mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-plum-900">Future Licensed Studios</h4>
              <p className="mt-2 text-xs text-plum-700 leading-relaxed">
                Planned licensing programme enabling independent wig studios to use the CrownForm method while preserving their own client relationships.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-plum-600 bg-white/70 p-3.5 rounded-xl border border-sage-200/60">
            <AlertCircle className="w-4 h-4 text-plum-500 shrink-0" />
            <span>Note: These arrangements reflect planned business operations and do not represent confirmed, contracted partnerships.</span>
          </div>
        </div>

        {/* Founder Panel (Clean Typographic Presentation - No Photo Added) */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-white border border-sage-200/90 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Founder Identity Header (Pure Typography & Credentials, No Avatar/Photo) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-champagne-100 text-champagne-800 border border-champagne-200">
                <Award className="w-3.5 h-3.5" />
                <span>Founder &amp; Managing Director</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-plum-950 tracking-tight">
                Aranu Deborah Mai-Lafia
              </h3>
              <p className="text-xs font-medium text-plum-600">
                Sole Shareholder, CrownForm Ltd
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-plum-700">
                <MapPin className="w-4 h-4 text-champagne-600 shrink-0" />
                <span>Operating base: Luton, Bedfordshire, United Kingdom</span>
              </div>

              {/* Education Grid */}
              <div className="pt-4 border-t border-sage-200/60">
                <h5 className="text-[11px] uppercase tracking-wider font-semibold text-plum-500 flex items-center gap-1.5 mb-2.5">
                  <GraduationCap className="w-4 h-4 text-plum-700" />
                  Education
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs text-plum-800">
                  <div className="p-3 rounded-xl bg-ivory-100/80 border border-sage-200/70">
                    <span className="font-bold text-plum-950 block">MSc</span>
                    <span className="text-plum-600">University of Bedfordshire</span>
                  </div>
                  <div className="p-3 rounded-xl bg-ivory-100/80 border border-sage-200/70">
                    <span className="font-bold text-plum-950 block">BSc Economics</span>
                    <span className="text-plum-600">University of Jos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Biography & Pathway Leadership */}
            <div className="lg:col-span-7 space-y-4 lg:pl-6 lg:border-l lg:border-sage-200/70">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-plum-500">
                Background &amp; Expertise
              </h4>
              <p className="text-sm sm:text-base text-plum-800 leading-relaxed font-normal">
                Aranu brings experience in healthcare assistance, patient support, safeguarding and structured humanitarian data collection. Her background includes UK healthcare settings and data collection and verification work with the International Organization for Migration and UNICEF-linked programmes. At CrownForm, she leads the patient pathway, capture protocol, pilot coordination, discovery research and data quality.
              </p>
              <div className="pt-3 flex items-center gap-2 text-xs text-sage-800 bg-sage-50/80 p-3 rounded-xl border border-sage-200/60">
                <Sparkles className="w-4 h-4 text-sage-600 shrink-0" />
                <span>Direct oversight of patient pathway protocols and calibrated data quality.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
