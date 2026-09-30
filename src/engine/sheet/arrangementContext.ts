import { SECTION_ENERGY_LEVELS } from '../../data/performance/spotlightRules';
import type { WorldContract } from '../../engine/style/contracts';

import type { Region } from '../../types';
import { Voice } from './sheet.ts';
import type { SectionEnergy, SpotlightMode } from '../../types';
import { clampEnergy } from './sectionEnergy.ts';

export interface SectionShape {
  intensity: number;
  kind: string;
  index: number;
  total: number;
  isPeak: boolean;
  isBuild: boolean;
  isOpening: boolean;
  isClosing: boolean;
}

export function shapeOf(regions: Region[], index: number, intensityOf: (r: Region) => number): SectionShape {
  const r = regions[index];
  const intensity = intensityOf(r);
  const peak = Math.max(...regions.map(intensityOf));
  const next = regions[index + 1];
  return {
    intensity,
    kind: String(r.kind ?? 'verse'),
    index,
    total: regions.length,
    isPeak: intensity >= peak - 0.01 && intensity > 0.75,
    isBuild: !!next && intensityOf(next) - intensity > 0.2,
    isOpening: index === 0,
    isClosing: index === regions.length - 1,
  };
}

export type { SpotlightMode, SectionEnergy };

export interface ArrangementContext {
  /** Explicitly foregrounded tracks retained for manual spotlight controls. */
  spotlightedTrackIds: string[];
  /** Effective Section Energy assigned to each track (explicit value or section default). */
  energyByTrack: Record<string, SectionEnergy>;
  energyMappings: WorldContract['energyMappings'];
}

export interface ArrangementDecision {
  /** does this voice play in this section at all? */
  plays: boolean;
  /** multiplier on velocity, 0..1.4 */
  drive: number;
  /** semitone register shift, usually 0 or ±12 */
  register: number;
  /** 0..127 brightness for this section */
  brightness: number;
  /** multiplier on the instrument's reverb send */
  wet: number;
  /** interaction-aware Section Energy for this part */
  sectionEnergy: SectionEnergy;
  /** why — shown in the UI so the user can see the arrangement thinking */
  reason: string;
}

/**
 * Track labels and roles do not choose musical foreground behavior. Spotlight
 * metadata is retained for authored/UI compatibility, but automatic behavior
 * is resolved from section energy alone.
 */
export function isSpotlit(mode: SpotlightMode | undefined): boolean {
  if (mode === 'on') return true;
  return false;
}

/** Resolve a section's energy for each track without inspecting part labels or roles. */
export function buildArrangementContext(
  voices: Voice[],
  contract: WorldContract,
  sectionIntensity = 0.55,
  authoredEnergyByTrack: Record<string, SectionEnergy> = {},
): ArrangementContext {
  const spotlightedTrackIds = voices
    .filter(v => isSpotlit(v.spotlight))
    .map(v => v.id);
  const energyByTrack: Record<string, SectionEnergy> = {};
  const energyEntries = SECTION_ENERGY_LEVELS.map(
    level => [level, contract.energyMappings[level].activity] as const);
  const targetActivity = Math.max(0, Math.min(1, sectionIntensity));
  const baseEnergy = clampEnergy(
    energyEntries.sort((a, b) => Math.abs(a[1] - targetActivity) - Math.abs(b[1] - targetActivity))[0]?.[0] ?? 3);
  for (const v of voices) energyByTrack[v.id] = clampEnergy(authoredEnergyByTrack[v.id] ?? baseEnergy);

  return { spotlightedTrackIds, energyByTrack, energyMappings: contract.energyMappings };
}

/**
 * Decide what one voice does in one section.
 *
 * Presence and dynamics are derived from Section Energy. Instrument/role
 * identity is reserved for sound synthesis and pattern compatibility.
 */

export function decide(trackId: string, context?: ArrangementContext): ArrangementDecision {
  const sectionEnergy = context?.energyByTrack[trackId] ?? 3;
  const plays = (context?.energyMappings?.[sectionEnergy]?.activity ?? sectionEnergy / 5) > 0;
  const reason = `Section Energy ${sectionEnergy}`;
  const activity = context?.energyMappings?.[sectionEnergy]?.activity ?? sectionEnergy / 5;
  const drive = 0.45 + Math.max(0, Math.min(1, activity)) * 0.95;
  const register = 0;

  // Energy is interpreted by the world contract, rather than as a universal
  // loudness curve. Each culture can define its own density/brightness/FX meaning.
  const mapped = context?.energyMappings?.[sectionEnergy];
  let brightness = (mapped?.brightness ?? (sectionEnergy / 5)) * 127;
  brightness = Math.max(18, Math.min(127, brightness));

  let wet = mapped?.fxWetness ?? (1.35 - sectionEnergy * 0.1);
  wet = Math.max(0.3, Math.min(2.2, wet));

  return {
    plays,
    drive: Math.max(0.45, Math.min(1.45, drive)),
    register,
    brightness,
    wet,
    sectionEnergy,
    reason,
  };
}

/**
 * Keep authored/default harmony compact at the section level. The arranger
 * repeats this loop across the section's bars, so storing 8/16/32 copies of
 * the same progression only makes the song data noisy and makes chord changes
 * look much more complicated than the music actually is.
 *
 * If the authored sequence is already a <=4-chord loop, preserve it exactly.
 * If it is a longer exact repetition of a <=4-chord loop, collapse it to that
 * loop. Otherwise use the first four authored chords as the default harmonic
 * cell. User-entered/custom progressions are never passed through this helper.
 *
 * Tango and Flamenco remain intentionally untouched here.
 */
export function compactDefaultChordLoop(chords: string[], contract?: WorldContract): string[] {
  const preserveLong = !!contract && (contract.meter !== '4/4' || contract.pulseModel === 'long-cycle' || contract.form.some(x => /^[ABC]$/.test(x) || /letra|falseta|variación|remate|cierre/i.test(x)));
  if (!chords.length || chords.length <= 4 || preserveLong) {
    return [...chords];
  }

  const limit = Math.min(4, chords.length);
  for (let period = 1; period <= limit; period++) {
    let repeats = true;
    for (let i = 0; i < chords.length; i++) {
      if (chords[i] !== chords[i % period]) {
        repeats = false;
        break;
      }
    }
    if (repeats) return chords.slice(0, period);
  }

  return chords.slice(0, 4);
}

export function progressionForSection(
  sectionProgressions: Record<string, string[]> | undefined,
  formKey: string,
  kind: string,
  fallback: string[],
  contract?: WorldContract,
): string[] {
  if (!sectionProgressions) return compactDefaultChordLoop(fallback, contract);
  const tryKeys = [formKey, kind, kind.replace(/-/g, ''), 'verse'];
  for (const k of tryKeys) {
    const found = sectionProgressions[k];
    if (found && found.length) return compactDefaultChordLoop(found, contract);
  }
  return compactDefaultChordLoop(fallback, contract);
}

export function cadenceFor(kind: string, chords: string[], isLast: boolean): string[] {
  if (!chords.length) return chords;
  const tonic = chords[0];
  const last = chords[chords.length - 1];
  if (isLast) return [tonic, tonic];
  switch (kind) {
    case 'pre-chorus':
      return [last, last];
    case 'bridge':
      return [last, last];
    case 'intro':
      return chords;
    default:
      return chords;
  }
}
