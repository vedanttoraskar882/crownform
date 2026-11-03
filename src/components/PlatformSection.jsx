import React from 'react';
import {
  Camera,
  Layers,
  CheckCircle,
  FileSpreadsheet,
  HeartHandshake,
  Lock
} from 'lucide-react';

export function PlatformSection() {
  const featureGroups = [
    {
      group: "A",
      icon: Camera,
      title: "HairPrint Capture",
      subtitle: "Calibrated home or assisted recording",
      colorClass: "from-white to-teal-50/40 border-teal-200/80 hover:border-teal-400",
      iconBg: "bg-teal-100 text-teal-800",
      pillBg: "bg-teal-100 text-teal-900 border-teal-300",
      bulletColor: "bg-teal-600",
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
      colorClass: "from-white to-indigo-50/40 border-indigo-200/80 hover:border-indigo-400",
      iconBg: "bg-indigo-100 text-indigo-800",
      pillBg: "bg-indigo-100 text-indigo-900 border-indigo-300",
      bulletColor: "bg-indigo-600",
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
      colorClass: "from-white to-amber-50/40 border-amber-200/80 hover:border-amber-400",
      iconBg: "bg-amber-100 text-amber-800",
      pillBg: "bg-amber-100 text-amber-900 border-amber-300",
      bulletColor: "bg-amber-600",
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
      colorClass: "from-white to-rose-50/40 border-rose-200/80 hover:border-rose-400",
      iconBg: "bg-rose-100 text-rose-800",
      pillBg: "bg-rose-100 text-rose-900 border-rose-300",
      bulletColor: "bg-rose-600",
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
      colorClass: "from-white to-emerald-50/40 border-emerald-200/80 hover:border-emerald-400",
      iconBg: "bg-emerald-100 text-emerald-800",
      pillBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
      bulletColor: "bg-emerald-600",
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
      colorClass: "from-white to-purple-50/40 border-purple-200/80 hover:border-purple-400",
      iconBg: "bg-purple-100 text-purple-800",
      pillBg: "bg-purple-100 text-purple-900 border-purple-300",
      bulletColor: "bg-purple-600",
      points: [
        "Planned architectural separation of personal identity from health and design files.",
        "Manufacturing workshops receive only necessary build parameters under an order number.",
        "Workshops never receive customer names, personal photographs or clinical notes.",
        "Planned customer access to view, download or request deletion of HairPrint records."
      ]
    }
  ];

  return (
    <section id="platform" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-900 border border-purple-300 shadow-sm">
            Intended Platform Architecture
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-plum-950 tracking-tight leading-[1.18]">
            From HairPrint to personalised care
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-700 leading-relaxed">
            CrownForm integrates digital capture, anatomical modeling and specialist hand craftsmanship into six cohesive stages designed for continuity and comfort.
          </p>
        </div>

        {/* 6 Feature Groups Grid with colourful distinct styling */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featureGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.group}
                className={`p-8 rounded-3xl bg-gradient-to-br ${group.colorClass} border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${group.iconBg} shadow-sm`}>
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${group.pillBg} shadow-sm`}>
                      Phase {group.group}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-plum-950">
                    {group.title}
                  </h3>
                  <p className="text-xs font-semibold text-plum-600 mt-1 mb-5">
                    {group.subtitle}
                  </p>

                  <ul className="space-y-3">
                    {group.points.map((pt, i) => (
                      <li key={i} className="text-xs sm:text-sm text-plum-800 flex items-start gap-2.5 leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full ${group.bulletColor} shrink-0 mt-2`} aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 text-[11px] text-plum-500 font-medium">
                  Planned service capability
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
