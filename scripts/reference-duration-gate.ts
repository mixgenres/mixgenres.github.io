export type ReferenceDurationDecision =
  | { allowed: true; durationSeconds: number; note: string }
  | { allowed: false; durationSeconds?: number; reason: string };

export const MAX_REFERENCE_DURATION_SECONDS = 15 * 60;
export const ABSOLUTE_REFERENCE_DURATION_SECONDS = 60 * 60;

const collectionTitle = /\b(?:playlist|compilation|full album|full discography|continuous(?:\s+mix)?|non[\s-]?stop|mega[\s-]?mix|hour\s+mix|(?:[1-9]|one|two|three|four|five)\s*hours?|best of|greatest hits)\b/i;
const mixTitle = /\bmix(?:es)?\b/i;

export function checkReferenceDurationCandidate(input: {
  title?: string;
  durationSeconds?: number;
  longformReason?: string;
}): ReferenceDurationDecision {
  const title = input.title?.trim();
  const duration = input.durationSeconds;
  if (!title) return { allowed: false, reason: 'A resolved YouTube title is required before downloading.' };
  if (typeof duration !== 'number' || !Number.isFinite(duration) || duration <= 0) {
    return { allowed: false, reason: 'A resolved source duration is required before downloading.' };
  }
  if (collectionTitle.test(title)) {
    return { allowed: false, durationSeconds: duration, reason: 'The title looks like a playlist, compilation, album, continuous mix, or hour mix.' };
  }
  if (duration >= ABSOLUTE_REFERENCE_DURATION_SECONDS) {
    return { allowed: false, durationSeconds: duration, reason: 'Items that run for an hour or longer are blocked from the reference download workflow.' };
  }
  if (duration > MAX_REFERENCE_DURATION_SECONDS && (mixTitle.test(title) || !input.longformReason?.trim())) {
    return {
      allowed: false,
      durationSeconds: duration,
      reason: mixTitle.test(title)
        ? 'A mix longer than 15 minutes is blocked.'
        : 'A single work longer than 15 minutes needs a specific documented longform exception reason.',
    };
  }
  return {
    allowed: true,
    durationSeconds: duration,
    note: duration > MAX_REFERENCE_DURATION_SECONDS
      ? `Allowed as a documented single work: ${input.longformReason!.trim()}`
      : 'Duration and title pass the pre-download gate.',
  };
}
