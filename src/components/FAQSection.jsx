import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openIds, setOpenIds] = useState(new Set(['what-is-crownform', 'what-is-hairprint']));

  function toggleFaq(id) {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function expandAll() {
    setOpenIds(new Set(faqs.map(f => f.id)));
  }

  function collapseAll() {
    setOpenIds(new Set());
  }

  // Accent colors for numbering badges
  const numberBadges = [
    "text-teal-700 bg-teal-50 border-teal-200",
    "text-purple-700 bg-purple-50 border-purple-200",
    "text-amber-700 bg-amber-50 border-amber-200",
    "text-emerald-700 bg-emerald-50 border-emerald-200",
    "text-rose-700 bg-rose-50 border-rose-200",
    "text-indigo-700 bg-indigo-50 border-indigo-200"
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions &amp; Guidance</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-plum-950 tracking-tight leading-[1.18]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-plum-700 leading-relaxed max-w-2xl">
              Clear answers regarding CrownForm’s planned hair-prosthesis service, capture protocol, pilot terms and data handling.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={expandAll}
              className="text-xs font-semibold text-emerald-950 hover:text-emerald-800 px-4 py-2 rounded-xl border border-emerald-300 bg-white hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-sm"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="text-xs font-semibold text-emerald-950 hover:text-emerald-800 px-4 py-2 rounded-xl border border-emerald-300 bg-white hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-sm"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIds.has(faq.id);
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;
            const badgeStyle = numberBadges[index % numberBadges.length];

            return (
              <div
                key={faq.id}
                className={`rounded-2xl bg-white border transition-all duration-300 ${
                  isOpen
                    ? 'border-emerald-300 shadow-card-hover ring-1 ring-emerald-400/20'
                    : 'border-slate-200/90 shadow-soft hover:shadow-card hover:border-emerald-200'
                } overflow-hidden`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 sm:px-8 text-left flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-700"
                  >
                    <span className="flex items-center gap-3.5">
                      <span className={`text-xs font-mono font-bold w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 shadow-sm ${badgeStyle}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base sm:text-lg font-serif font-bold text-plum-950 text-left">
                        {faq.question}
                      </span>
                    </span>
                    <span
                      className={`p-2 rounded-full shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-emerald-100 text-emerald-900' : 'bg-slate-100 text-slate-700'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-2 sm:px-8 sm:pl-19 text-sm sm:text-base text-plum-800 leading-relaxed border-t border-slate-100 bg-slate-50/20 animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
