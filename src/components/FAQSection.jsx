import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { ChevronDown, HelpCircle, MessageSquareQuote } from 'lucide-react';

export function FAQSection() {
  // Allow multiple or single open items. Let's support expanding/collapsing individual items.
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

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F5F2EB]/40 border-t border-sage-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-sage-800 border border-sage-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions &amp; Guidance</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-plum-950 tracking-tight">
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
              className="text-xs font-semibold text-plum-700 hover:text-plum-950 px-3 py-1.5 rounded-lg border border-sage-300 bg-white hover:bg-sage-50 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="text-xs font-semibold text-plum-700 hover:text-plum-950 px-3 py-1.5 rounded-lg border border-sage-300 bg-white hover:bg-sage-50 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800"
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

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-sage-200/80 shadow-soft overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 sm:px-8 text-left flex items-center justify-between gap-4 hover:bg-sage-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-plum-800"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-champagne-700 w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base sm:text-lg font-serif font-bold text-plum-950 text-left">
                        {faq.question}
                      </span>
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-sage-100 text-plum-800 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-champagne-100 text-champagne-800' : ''
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
                    className="px-6 pb-6 pt-2 sm:px-8 text-sm sm:text-base text-plum-700 leading-relaxed border-t border-sage-100 animate-in fade-in duration-200"
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
