import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Database, ServerOff, Trash2, CameraOff } from 'lucide-react';

export function DemoPrivacyModal({ isOpen, onClose, triggerRef }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        clearTimeout(timer);
        if (triggerRef && triggerRef.current) {
          triggerRef.current.focus();
        }
      };
    }
  }, [isOpen, triggerRef]);

  // Trap focus & Escape
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const modalElement = modalRef.current;
        if (!modalElement) return;

        const focusableElements = modalElement.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-plum-950/70 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-3xl bg-[#FAF8F5] border border-sage-200/90 shadow-modal overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8"
      >
        {/* Header */}
        <div className="flex items-start justify-between px-7 pt-7 pb-4 sm:px-9 border-b border-sage-200/70">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-sage-100 text-sage-800 border border-sage-300 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Privacy &amp; Data Protocol
            </div>
            <h2 id="privacy-modal-title" className="text-2xl font-serif font-bold text-plum-950 tracking-tight">
              Privacy &amp; Data Handling
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-plum-600 hover:text-plum-950 hover:bg-sage-100 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800"
            aria-label="Close Privacy modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-9 space-y-6 text-sm text-plum-800">
          <p className="leading-relaxed font-normal">
            The following details govern how information entered on this site is stored and handled:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-sage-100 text-sage-800 shrink-0 mt-0.5">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-plum-950">Fields Stored</h3>
                <p className="text-xs sm:text-sm text-plum-700 mt-0.5 leading-relaxed">
                  Only the fields provided in the &ldquo;Request a Pilot&rdquo; modal are recorded: Full Name, Phone Number, Email Address, Organisation Name, and an automatically generated ISO submission timestamp.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-champagne-100 text-champagne-800 shrink-0 mt-0.5">
                <ServerOff className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-plum-950">Local Browser Storage Only</h3>
                <p className="text-xs sm:text-sm text-plum-700 mt-0.5 leading-relaxed">
                  All submission entries are saved strictly inside your browser&rsquo;s local storage (<code className="px-1.5 py-0.5 rounded bg-sage-100 font-mono text-xs text-plum-900">localStorage</code>) on this device. No transmission to CrownForm or third-party servers occurs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-sage-100 text-sage-800 shrink-0 mt-0.5">
                <CameraOff className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-plum-950">No Scans or Clinical Data Collected</h3>
                <p className="text-xs sm:text-sm text-plum-700 mt-0.5 leading-relaxed">
                  CrownForm does not request camera permissions, upload images, or process scalp scans or clinical records on this website. The features described on this site represent planned capabilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-red-100 text-red-800 shrink-0 mt-0.5">
                <Trash2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-plum-950">Data Removal</h3>
                <p className="text-xs sm:text-sm text-plum-700 mt-0.5 leading-relaxed">
                  You can clear all stored pilot requests at any time by clearing your browser&rsquo;s site storage or browsing data for this domain.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-7 sm:px-9 py-4 bg-sage-50/70 border-t border-sage-200/70 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-plum-950 text-white text-sm font-semibold hover:bg-plum-850 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-900"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
