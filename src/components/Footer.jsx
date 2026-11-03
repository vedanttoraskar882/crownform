import React from 'react';
import { ArrowUp, ShieldCheck, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer({ onOpenPilotModal, onOpenPrivacyModal }) {
  const currentYear = new Date().getFullYear();

  const footerNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Market & Pricing', href: '#market-pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="bg-plum-950 text-white border-t border-plum-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-[26px] font-serif font-bold text-white tracking-tight">
                CrownForm
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 mb-1" />
            </div>

            <p className="text-sm text-plum-200/90 leading-relaxed max-w-sm font-normal">
              A personalised hair-prosthesis service connecting calibrated HairPrint capture, custom cap design, specialist craftsmanship and ongoing care.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-champagne-300 font-medium">
              <MapPin className="w-4 h-4 shrink-0 text-champagne-400" />
              <span>Planned base: Luton, Bedfordshire, United Kingdom.</span>
            </div>
          </div>

          {/* Section Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-plum-400">
              Section Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-2 text-sm text-plum-200" aria-label="Footer Navigation">
              {footerNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-champagne-300 transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-champagne-300 rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Pilot Action & Privacy Link */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-plum-400">
              Pilot Participation
            </h4>
            <p className="text-xs text-plum-300 leading-relaxed">
              Express interest in our planned trials and early-access pilot programme.
            </p>
            <div>
              <button
                type="button"
                onClick={(e) => onOpenPilotModal(e.currentTarget)}
                className="w-full py-3 px-5 rounded-full bg-champagne-500 text-plum-950 font-semibold text-sm hover:bg-champagne-400 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-plum-950 focus:ring-champagne-400 flex items-center justify-center gap-2"
              >
                <span>Request a Pilot</span>
                <ArrowUpRight className="w-4 h-4 text-plum-950" />
              </button>
            </div>
          </div>
        </div>

        {/* Clean Bottom Bar (Without "In development" or "Development-stage business") */}
        <div className="mt-14 pt-8 border-t border-plum-900/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-plum-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>
              &copy; {currentYear} CrownForm Ltd. All rights reserved.
            </span>
            <span className="hidden sm:inline text-plum-700">&bull;</span>
            <button
              type="button"
              onClick={(e) => onOpenPrivacyModal(e.currentTarget)}
              className="inline-flex items-center gap-1.5 text-champagne-300 hover:text-champagne-200 underline underline-offset-4 font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-champagne-300 rounded"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Demo Privacy Disclosure
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-plum-300 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-champagne-300 rounded p-1 font-medium"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
