import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Header({ onOpenPilotModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus and handle escape for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (e.key === 'Tab') {
        const menu = mobileMenuRef.current;
        if (!menu) return;
        const focusable = menu.querySelectorAll('a, button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Market & Pricing', href: '#market-pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-emerald-100/80 shadow-soft py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <div className="flex items-center">
            <a
              href="#home"
              className="group flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-700 rounded-lg py-0.5 px-1"
              aria-label="CrownForm Home"
            >
              <span className="text-2xl sm:text-[26px] font-serif font-bold tracking-tight text-plum-950 group-hover:text-emerald-900 transition-colors">
                CrownForm
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mb-2 opacity-90 group-hover:scale-125 transition-transform" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-plum-800 hover:text-emerald-950 hover:bg-emerald-50/80 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTA with gradient and hover lift */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-plum-950 via-plum-900 to-plum-950 text-white text-sm font-semibold hover:from-plum-900 hover:to-plum-800 active:scale-[0.98] transition-all shadow-sm hover:shadow-glow-plum hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-plum-900"
            >
              <span>Request a Pilot</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="px-4 py-2 rounded-full bg-plum-950 text-white text-xs font-semibold hover:bg-plum-850 transition-colors shadow-sm"
            >
              Request a Pilot
            </button>
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-plum-900 hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          ref={mobileMenuRef}
          className="lg:hidden fixed inset-x-0 top-[69px] bg-white/98 backdrop-blur-2xl border-b border-emerald-100 shadow-modal px-6 py-6 space-y-4 animate-in slide-in-from-top-3 duration-200"
        >
          <div className="pb-2 border-b border-emerald-100">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-800">
              Navigation
            </span>
          </div>
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-plum-900 hover:text-emerald-900 hover:bg-emerald-50 rounded-xl px-3 py-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-emerald-100">
            <button
              type="button"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                onOpenPilotModal(e.currentTarget);
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-plum-950 to-plum-900 text-white text-sm font-semibold hover:from-plum-900 hover:to-plum-800 transition-colors text-center shadow-sm flex items-center justify-center gap-2"
            >
              <span>Request a Pilot</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
