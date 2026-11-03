import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { savePilotSubmission } from '../utils/storage';

export function PilotModal({ isOpen, onClose, triggerRef }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        } else if (closeButtonRef.current) {
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

  // Trap focus & Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
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
  }, [isOpen]);

  function handleClose() {
    setFieldErrors({});
    setSuccessMessage('');
    setErrorMessage('');
    onClose();
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  }

  function validatePhone(phone) {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 7 && digitsOnly.length <= 16;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    setSuccessMessage('');
    setErrorMessage('');

    const errors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedPhone = formData.phoneNumber.trim();
    const trimmedEmail = formData.emailAddress.trim();
    const trimmedOrg = formData.organisationName.trim();

    if (!trimmedName) {
      errors.fullName = 'Full Name is required.';
    }

    if (!trimmedPhone) {
      errors.phoneNumber = 'Phone Number is required.';
    } else if (!validatePhone(trimmedPhone)) {
      errors.phoneNumber = 'Please enter a valid phone number (at least 7 digits).';
    }

    if (!trimmedEmail) {
      errors.emailAddress = 'Email Address is required.';
    } else if (!validateEmail(trimmedEmail)) {
      errors.emailAddress = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!trimmedOrg) {
      errors.organisationName = 'Organisation Name is required. Enter "Individual" if enquiring for yourself.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      savePilotSubmission({
        fullName: trimmedName,
        phoneNumber: trimmedPhone,
        emailAddress: trimmedEmail,
        organisationName: trimmedOrg
      });

      setSuccessMessage('Your pilot interest has been saved in this browser. This demo does not send your details to CrownForm.');
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: ''
      });
      setFieldErrors({});
    } catch {
      setErrorMessage('We could not save your details in this browser. Your form entries have been kept. Existing saved records have not been replaced.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-plum-950/70 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-modal-title"
      aria-describedby="pilot-modal-description"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-3xl bg-[#FAF8F5] border border-sage-200/90 shadow-modal overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between px-7 pt-7 pb-5 sm:px-9 border-b border-sage-200/70 bg-[#FAF8F5]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-champagne-100 text-champagne-800 border border-champagne-300 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-600 animate-pulse" />
              Pilot Programme Registration
            </div>
            <h2 id="pilot-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-plum-950 tracking-tight">
              Request a Pilot
            </h2>
            <p id="pilot-modal-description" className="mt-1 text-sm text-plum-700">
              Register your interest in CrownForm’s proposed pilot.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            className="p-2 rounded-full text-plum-600 hover:text-plum-950 hover:bg-sage-100 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800"
            aria-label="Close Request a Pilot modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean Form Body (No demo notice banner; no pre-filled text in inputs) */}
        <form onSubmit={handleSubmit} noValidate className="p-7 sm:p-9 space-y-5">
          {/* Accessible announcements */}
          <div aria-live="polite" className="space-y-3">
            {successMessage && (
              <div
                role="status"
                className="p-4 rounded-2xl bg-sage-100 border border-sage-300 text-sage-900 text-sm flex items-start gap-3 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-sage-800 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <p className="font-semibold text-sage-900">{successMessage}</p>
                  <p className="text-xs text-sage-700">
                    You may submit another registration or close this window at any time.
                  </p>
                </div>
              </div>
            )}

            {errorMessage && (
              <div
                role="alert"
                className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-sm flex items-start gap-3 shadow-sm"
              >
                <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-medium text-red-900">{errorMessage}</p>
              </div>
            )}
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-plum-950 mb-1.5">
              Full Name <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              ref={firstInputRef}
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.fullName)}
              aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-plum-950 bg-white shadow-sm focus:outline-none focus:ring-2 transition-all ${
                fieldErrors.fullName
                  ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                  : 'border-sage-200 focus:border-plum-700 focus:ring-plum-700/20'
              }`}
            />
            {fieldErrors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-plum-950 mb-1.5">
              Phone Number <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.phoneNumber)}
              aria-describedby={fieldErrors.phoneNumber ? "phoneNumber-error" : "phoneNumber-hint"}
              className={`w-full px-4 py-3 rounded-xl border text-plum-950 bg-white shadow-sm focus:outline-none focus:ring-2 transition-all ${
                fieldErrors.phoneNumber
                  ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                  : 'border-sage-200 focus:border-plum-700 focus:ring-plum-700/20'
              }`}
            />
            <p id="phoneNumber-hint" className="mt-1 text-xs text-plum-600">
              Stored as text. Accepts UK and international standard formats.
            </p>
            {fieldErrors.phoneNumber && (
              <p id="phoneNumber-error" className="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {fieldErrors.phoneNumber}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-semibold text-plum-950 mb-1.5">
              Email Address <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.emailAddress)}
              aria-describedby={fieldErrors.emailAddress ? "emailAddress-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-plum-950 bg-white shadow-sm focus:outline-none focus:ring-2 transition-all ${
                fieldErrors.emailAddress
                  ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                  : 'border-sage-200 focus:border-plum-700 focus:ring-plum-700/20'
              }`}
            />
            {fieldErrors.emailAddress && (
              <p id="emailAddress-error" className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {fieldErrors.emailAddress}
              </p>
            )}
          </div>

          {/* Organisation Name */}
          <div>
            <label htmlFor="organisationName" className="block text-sm font-semibold text-plum-950 mb-1.5">
              Organisation Name <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="organisationName"
              name="organisationName"
              value={formData.organisationName}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.organisationName)}
              aria-describedby="organisationName-hint organisationName-error"
              className={`w-full px-4 py-3 rounded-xl border text-plum-950 bg-white shadow-sm focus:outline-none focus:ring-2 transition-all ${
                fieldErrors.organisationName
                  ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                  : 'border-sage-200 focus:border-plum-700 focus:ring-plum-700/20'
              }`}
            />
            <p id="organisationName-hint" className="mt-1 text-xs text-plum-600">
              If you are enquiring as an individual, enter ‘Individual’.
            </p>
            {fieldErrors.organisationName && (
              <p id="organisationName-error" className="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {fieldErrors.organisationName}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 border-t border-sage-200/60">
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-sage-300 text-sm font-semibold text-plum-800 hover:bg-sage-100 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-plum-950 text-white text-sm font-semibold hover:bg-plum-850 active:scale-[0.98] transition-all shadow-sm hover:shadow-card focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-plum-900 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  Saving in browser...
                </>
              ) : (
                'Submit Pilot Request'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
