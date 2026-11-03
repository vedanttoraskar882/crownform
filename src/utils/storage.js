/**
 * CrownForm Pilot Submissions Storage Utility
 * Manages localStorage persistence for pilot registrations in accordance with demo specifications.
 */

export const STORAGE_KEY = 'crownform_pilot_submissions';

/**
 * Saves a pilot submission to localStorage.
 * Appends to any existing array without overwriting previous submissions.
 * Validates that existing data is an array before appending.
 *
 * @param {{ fullName: string, phoneNumber: string, emailAddress: string, organisationName: string }} values
 * @returns {object} The created record
 * @throws {Error} If localStorage fails, is disabled, or existing data is malformed
 */
export function savePilotSubmission(values) {
  const key = STORAGE_KEY;
  const raw = window.localStorage.getItem(key);
  let previous = [];

  if (raw !== null) {
    try {
      previous = JSON.parse(raw);
    } catch {
      throw new Error("Existing submission data is not valid JSON.");
    }

    if (!Array.isArray(previous)) {
      throw new Error("Existing submission data is not a valid array.");
    }
  }

  const record = {
    id: globalThis.crypto?.randomUUID?.()
      ?? `pilot-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    fullName: values.fullName.trim(),
    phoneNumber: values.phoneNumber.trim(),
    emailAddress: values.emailAddress.trim(),
    organisationName: values.organisationName.trim(),
    submittedAt: new Date().toISOString()
  };

  window.localStorage.setItem(
    key,
    JSON.stringify([...previous, record])
  );

  return record;
}
