import React from 'react';
import {
  Camera,
  Layers,
  CheckCircle,
  FileSpreadsheet,
  HeartHandshake,
  Lock,
  Calendar,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';

export function PlatformSection() {
  const featureGroups = [
    {
      group: "A",
      icon: Camera,
      title: "HairPrint Capture",
      subtitle: "Calibrated home or assisted recording",
      points: [
        "Kit includes a printed calibration band, colour reference card and hair-sample envelope.",
        "Guided phone capture records the hair and scalp via standard mobile browser.",
        "Band markers provide optical scale, orientation and alignment references.",
        "Colour reference card supports calibrated digital lighting and colour matching.",
        "Automated capture quality checks request instant retakes where needed.",
        "Assisted capture appointments with trained fitters offer an intended alternative."
      ]
    },
    {
      group: "B",
      icon: Layers,
      title: "Scalp Model & Custom Cap",
      subtitle: "Individualised anatomical base design",
      points: [
        "Captured geometry directly supports a digital 3D scalp model.",
        "Cap design precisely mirrors the individual’s unique scalp contours.",
        "Specialist technicians review hairline transition, density distribution and sensitive areas.",
        "Initial design rules are technician-led for rigorous human clinical judgement.",
        "Automated design parameter generation represents a later development milestone."
      ]
    },
    {
      group: "C",
      icon: CheckCircle,
      title: "Preview & Approval",
      subtitle: "Interactive design review and confirmation",
      points: [
        "Customer reviews an interactive rendered digital design preview.",
        "Clear explanation of expected fitting timeline provided before approval.",
        "Under planned terms, no financial charge beyond the kit occurs before design approval."
      ]
    },
    {
      group: "D",
      icon: FileSpreadsheet,
      title: "Workshop Build Package",
      subtitle: "Precision artisan manufacturing instructions",
      points: [
        "Versioned digital cap design specification files.",
        "Segmented hair-density mapping across crown, temples and nape.",
        "Detailed pressure-zone instructions to relieve tender scalp locations.",
        "3D-printed physical head form manufactured to exact client geometry.",
        "Complete traceability through workshop batch, hair lot source and quality sign-off.",
        "Specialist hand craft and final CrownForm quality checks remain integral."
      ]
    },
    {
      group: "E",
      icon: HeartHandshake,
      title: "Fitting & CrownCare",
      subtitle: "Local comfort check-in and lifetime continuity",
      points: [
        "Professional fitting in the comfort of home or at an accredited partner salon.",
        "Structured comfort follow-up conducted two weeks post-fitting.",
        "Adjustment or remake process within 30 days where initial fit is unsuitable.",
        "Optional CrownCare aftercare with cleaning/restyle credits and six-monthly refits.",
        "Stored digital designs enable direct reordering of backups and future replacements."
      ]
    },
    {
      group: "F",
      icon: Lock,
      title: "Consent & Controlled Data Access",
      subtitle: "Strict privacy safeguards and record segregation",
      points: [
        "Planned architectural separation of personal identity from health and design files.",
        "Manufacturing workshops receive only necessary build parameters under an order number.",
        "Workshops never receive customer names, personal photographs or clinical notes.",
        "Planned customer access to view, download or request deletion of HairPrint records."
      ]
    }
  ];

  const plannedLaterCapabilities = [
    {
      timeline: "Month 15",
      title: "Studio Licensing Programme",
      description: "Independent wig salons and studios access CrownForm capture kits and digital specifications while preserving client relationships."
    },
    {
      timeline: "Month 25",
      title: "NHS Voucher Supply",
      description: "Planned patient access via NHS voucher allowances, subject to official approved-supplier accreditation and regional arrangements."
    },
    {
      timeline: "Month 27",
      title: "Clinician & Nurse Portal",
      description: "Dedicated portal for cancer care teams and dermatologists, subject to requisite clinical safety and verification work."
    },
    {
      timeline: "Month 32",
      title: "Native Android Application",
      description: "Dedicated native mobile app complementing the initial browser-based guided capture system."
    },
    {
      timeline: "Ongoing",
      title: "Advanced Research Tracks",
      description: "Further design rule automation, historical photograph scalp reconstruction, and comfort-learning algorithms."
    }
  ];

  return (
    <section id="platform" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-champagne-100 text-champagne-800 border border-champagne-300">
            Intended Platform Architecture
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-plum-950 tracking-tight">
            From HairPrint to personalised care
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-700 leading-relaxed">
            CrownForm integrates digital capture, anatomical modeling and specialist hand craftsmanship into six cohesive stages designed for continuity and comfort.
          </p>
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-sage-50 border border-sage-200/90 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-sage-700 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-sage-900 leading-relaxed">
            <span className="font-semibold">Development notice:</span> These descriptions detail the intended full commercial service. This demonstration landing page does not collect scans, process medical records, or operate active workshop machinery.
          </p>
        </div>

        {/* 6 Feature Groups Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featureGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.group}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-sage-200/80 shadow-soft hover:shadow-soft-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-[#F5F2EB] text-plum-900 border border-sage-200/60">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-champagne-100 text-champagne-800 border border-champagne-200">
                      Phase {group.group}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-plum-950">
                    {group.title}
                  </h3>
                  <p className="text-xs font-medium text-plum-600 mt-1 mb-4">
                    {group.subtitle}
                  </p>

                  <ul className="space-y-2.5">
                    {group.points.map((pt, i) => (
                      <li key={i} className="text-xs sm:text-sm text-plum-700 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-500 shrink-0 mt-2" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-sage-100 text-[11px] text-plum-500">
                  Planned service capability
                </div>
              </div>
            );
          })}
        </div>

        {/* Planned Later Capabilities Panel */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-plum-950 to-plum-900 text-white shadow-soft-lg">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-plum-800 text-champagne-200 border border-plum-700">
              <Calendar className="w-3.5 h-3.5" />
              <span>Roadmap Overview</span>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Planned Later Capabilities
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-plum-200 leading-relaxed">
              Timelines indicate operating milestones from the CrownForm business plan starting from operational launch, not confirmed calendar dates. Initial product uses browser-based capture.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedLaterCapabilities.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-plum-900/60 border border-plum-800/80 backdrop-blur-sm">
                <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-champagne-500/20 text-champagne-300 border border-champagne-400/30 mb-2">
                  {item.timeline}
                </span>
                <h4 className="text-base font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-plum-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-plum-800/80 flex items-center gap-2 text-xs text-plum-300">
            <AlertCircle className="w-4 h-4 text-champagne-300 shrink-0" />
            <span>Browser-based guided phone capture is part of the initial launch offering; a native Android application is scheduled for Month 32.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
