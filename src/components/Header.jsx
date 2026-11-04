import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

export function Header({ onOpenPilotModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(60);

  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Measure header height accurately for exact mobile drawer positioning
  useEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    }
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Monitor scroll for desktop shadow refinement
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 15);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent page scrolling underneath
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  function handleNavLinkClick() {
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
          isScrolled
            ? 'border-emerald-200/80 shadow-soft py-3'
            : 'border-slate-200/80 shadow-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark */}
            <div className="flex items-center">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-700 rounded-lg py-0.5 px-1"
                aria-label="CrownForm Home"
              >
                <span className="text-xl sm:text-2xl lg:text-[26px] font-serif font-bold tracking-tight text-plum-950 group-hover:text-emerald-900 transition-colors">
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
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={(e) => onOpenPilotModal(e.currentTarget)}
                className="px-3.5 py-1.5 rounded-full bg-plum-950 text-white text-xs font-semibold hover:bg-plum-850 active:scale-95 transition-all shadow-sm"
              >
                Request Pilot
              </button>
              <button
                ref={toggleButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-plum-950 bg-slate-50 hover:bg-emerald-50 active:bg-emerald-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 border border-slate-200/80"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu-drawer"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Modal & Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Solid Backdrop that blocks page interaction & dimming */}
          <div
            className="lg:hidden fixed inset-0 bg-plum-950/60 backdrop-blur-sm z-40 transition-opacity animate-in fade-in duration-200"
            style={{ top: `${headerHeight}px` }}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* 100% Solid, Opaque Mobile Drawer */}
          <div
            id="mobile-menu-drawer"
            ref={mobileMenuRef}
            className="lg:hidden fixed inset-x-0 bg-white border-b-2 border-emerald-500/80 shadow-2xl z-50 px-6 py-6 space-y-5 animate-in slide-in-from-top-3 duration-200 overflow-y-auto"
            style={{
              top: `${headerHeight}px`,
              maxHeight: `calc(100vh - ${headerHeight}px)`
            }}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Navigation Menu
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                Select a section
              </span>
            </div>

            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-semibold text-plum-950 hover:text-emerald-900 hover:bg-emerald-50 active:bg-emerald-100 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-emerald-700/60" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  onOpenPilotModal(e.currentTarget);
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-plum-950 via-plum-900 to-plum-950 text-white text-sm font-bold hover:from-plum-900 hover:to-plum-800 active:scale-[0.98] transition-all text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Request a Pilot</span>
                <ArrowUpRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
