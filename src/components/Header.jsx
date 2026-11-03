import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export function Header({ onOpenPilotModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Monitor scroll state for styling
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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

  function handleNavLinkClick() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-sage-200/70 shadow-soft py-3'
          : 'bg-[#FAF8F5] border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & In development label */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="text-2xl font-serif font-bold tracking-tight text-plum-950 hover:text-plum-700 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800 rounded-lg px-1 py-0.5"
              aria-label="CrownForm Home"
            >
              CrownForm
            </a>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-sage-100 text-sage-800 border border-sage-200">
              In development
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-plum-800 hover:text-plum-950 hover:underline decoration-sage-300 underline-offset-8 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800 rounded-md px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="px-5 py-2.5 rounded-full bg-plum-900 text-white text-sm font-semibold hover:bg-plum-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-plum-900"
            >
              Request a Pilot
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="px-3.5 py-1.5 rounded-full bg-plum-900 text-white text-xs font-semibold hover:bg-plum-800 transition-colors"
            >
              Request Pilot
            </button>
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-plum-800 hover:text-plum-950 hover:bg-sage-100 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          ref={mobileMenuRef}
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FAF8F5] border-b border-sage-200 shadow-modal px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-sage-200/60">
            <span className="text-xs uppercase tracking-wider font-semibold text-plum-600">
              Site Navigation
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-sage-100 text-sage-800 border border-sage-200">
              In development
            </span>
          </div>
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavLinkClick}
                className="text-base font-medium text-plum-900 hover:text-plum-700 hover:bg-sage-50 rounded-xl px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-sage-200/60">
            <button
              type="button"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                onOpenPilotModal(e.currentTarget);
              }}
              className="w-full py-3 rounded-full bg-plum-900 text-white text-sm font-semibold hover:bg-plum-800 transition-colors text-center shadow-sm"
            >
              Request a Pilot
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
