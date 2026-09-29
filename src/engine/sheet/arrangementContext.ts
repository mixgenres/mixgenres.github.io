import type { WorldContract } from '../../engine/style/contracts';

import type { Region } from '../../types';
import { Voice } from './sheet.ts';
import { VoiceProfile } from '../sheet/instrumentRoles.ts';
import type { SectionEnergy, SpotlightMode } from '../../types';
import { clampEnergy } from './sectionEnergy.ts';

import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';

export type Priority = 'core' | 'body' | 'colour' | 'sweetener';

const FAMILY_PRIORITY_DEFAULT: Record<string, Priority> = {
  kit: 'core',
  'hand-drums': 'body',
  'bellows-and-keys': 'body',
  plucked: 'body',
  brass: 'colour',
  winds: 'colour',
  bowed: 'colour',
  voice: 'sweetener',
  electronic: 'colour',
  'metal-and-wood': 'colour',
};

const INSTRUMENT_PRIORITY_OVERRIDE: Record<string, Priority> = {
  drums: 'core',
  'brush-kit': 'core',
  kick: 'core',
  snare: 'core',
  bass: 'core',
  'upright-bass': 'core',
  'acoustic-bass': 'core',
  'bass-lead': 'core',
  'sub-bass': 'core',
  hats: 'colour',
  ride: 'colour',
  shaker: 'colour',
  maracas: 'colour',
  cabasa: 'colour',
  tambourine: 'colour',
  glockenspiel: 'sweetener',
  celeste: 'sweetener',
  crystal: 'sweetener',
  'music-box': 'sweetener',
  harp: 'sweetener',
  'orchestral-harp': 'sweetener',
  'backing-vocals': 'sweetener',
  choir: 'sweetener',
};

export function priorityOf(prof: VoiceProfile, instrumentId: string): Priority {
  if (prof.role === 'bass') return 'core';
  if (INSTRUMENT_PRIORITY_OVERRIDE[instrumentId]) {
    return INSTRUMENT_PRIORITY_OVERRIDE[instrumentId];
  }
  if (prof.role === 'pad') return 'sweetener';
  if (prof.role === 'lead') return 'body';
  if (prof.role === 'comp') return 'body';
  if (prof.role === 'perc') return 'body';

  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (def?.family && FAMILY_PRIORITY_DEFAULT[def.family]) {
    return FAMILY_PRIORITY_DEFAULT[def.family];
  }
  return 'colour';
}

/** The order parts drop out as a section gets smaller. */
const DROP_ORDER: Priority[] = ['sweetener', 'colour', 'body', 'core'];

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
  interactionModel: NonNullable<WorldContract['interactionModel']>;
  /** Explicitly/on-by-default tracks participating in the interaction model. */
  spotlightedTrackIds: string[];
  /** Effective Section Energy assigned by the interaction model for this section. */
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
 * Resolve a track's spotlight state against a style's form grammar.
 * `auto` is intentionally evaluated per section so changing the section's
 * style immediately changes which roles receive attention.
 */
export function isSpotlit(
  voice: Voice,
  mode: SpotlightMode | undefined,
  style: { form?: { defaultSpotlights?: Record<string, string[]> } },
  sectionKind: string,
): boolean {
  if (mode === 'on') return true;
  if (mode === 'off') return false;
  const defaults = style.form?.defaultSpotlights ?? {};
  const roles = defaults[sectionKind] ?? defaults.verse ?? [];
  return roles.includes(voice.role);
}

export function buildArrangementContext(
  voices: Voice[],
  contract: WorldContract,
  style: { form?: { defaultSpotlights?: Record<string, string[]> } },
  sectionKind: string,
  sectionIntensity = 0.55,
): ArrangementContext {
  let spotlightedTrackIds = voices
    .filter(v => isSpotlit(v, v.spotlight, style, sectionKind))
    .map(v => v.id);

  // `lead` is a family role, not a guarantee that every lead instrument should
  // be foregrounded at once. In vocal song sections the singer normally owns
  // the foreground; in solo/trading sections one instrumental lead gets the
  // foreground. Without this selection, a jazz head can spotlight three horns
  // simultaneously and a cumbia can accidentally spotlight flute while muting
  // the singer.
  const kind = String(sectionKind).toLowerCase();
  const vocalSection = /verse|verso|chorus|coro|refrain|letra|preg|tema/.test(kind);
  const soloSection = /solo|trading|falseta|variaci|instrumental|descarga|mambo/.test(kind);
  const voiceIds = voices.filter(v => v.role === 'voice').map(v => v.id);
  const leadIds = voices.filter(v => v.role === 'lead' || v.role === 'melody').map(v => v.id);
  if (vocalSection && voiceIds.length) {
    spotlightedTrackIds = voiceIds.slice(0, 1);
  } else if (soloSection && leadIds.length > 1) {
    const pick = Math.abs(sectionKind.split('').reduce((h, c) => ((h * 31) + c.charCodeAt(0)) | 0, 7)) % leadIds.length;
    spotlightedTrackIds = [leadIds[pick]];
  }

  const energyByTrack: Record<string, SectionEnergy> = {};
  const energyEntries = ([1, 2, 3, 4, 5] as SectionEnergy[]).map(
    level => [level, contract.energyMappings[level].activity] as const);
  const targetActivity = Math.max(0, Math.min(1, sectionIntensity));
  const baseEnergy = clampEnergy(
    energyEntries.sort((a, b) => Math.abs(a[1] - targetActivity) - Math.abs(b[1] - targetActivity))[0]?.[0] ?? 3);
  const model = contract.interactionModel;

  // Spotlight is a foreground instruction, not a substitute for the section's
  // own dynamic curve. It used to hand the spotlit track a flat energy of 5
  // and every other track a *fixed*, section-blind number from a role table
  // (bass/drums always 4, comp/pad always 3, lead always 2 when not
  // spotlit...), no matter whether the section was a bare intro or the
  // loudest chorus of the song. That made a quiet verse and a full chorus
  // render almost identically for four out of five instruments, and made
  // non-spotlit leads (energy 2 -> heavily thinned) read as sparse and
  // buried in every section, all the time.
  //
  // Spotlight and section energy are two different dials and must combine
  // (multiply), not overwrite one another: the spotlit part sits a step
  // hotter than the section, everyone else sits a step (or two, for
  // background colour) cooler than the section -- but both still rise and
  // fall together as the section's own energy rises and falls.
  const SPOTLIGHT_BOOST = 1;
  const supportOffset = (v: Voice): number => {
    // The rhythmic foundation (bass/drums/percussion) tracks the section's
    // energy closely -- it is what makes a chorus feel bigger than a verse.
    if (v.role === 'bass' || v.role === 'percussion' || /drums|kit|kick|snare|hat/i.test(v.instrumentId)) return 0;
    if (v.role === 'voice') return 0;
    if (v.role === 'comp' || v.role === 'harmony' || v.role === 'pad') return -1;
    if (v.role === 'lead' || v.role === 'melody') return -1;
    return -1;
  };

  if ((model === 'homophonic' || model === 'interlock' || model === 'unison') && spotlightedTrackIds.length) {
    // Interlocking/unison parts need different densities, but the rhythmic
    // foundation remains active and the whole band still moves with the
    // section, not just whichever line is featured.
    for (const v of voices) {
      energyByTrack[v.id] = spotlightedTrackIds.includes(v.id)
        ? clampEnergy(baseEnergy + SPOTLIGHT_BOOST)
        : clampEnergy(baseEnergy + supportOffset(v));
    }
  } else if (model === 'counterpoint' && spotlightedTrackIds.length) {
    // Counterpoint keeps independent lines closer to parity with each other
    // than a homophonic lead/accompaniment split does.
    for (const v of voices) {
      energyByTrack[v.id] = spotlightedTrackIds.includes(v.id)
        ? baseEnergy
        : clampEnergy(baseEnergy + supportOffset(v));
    }
  } else {
    for (const v of voices) energyByTrack[v.id] = baseEnergy;
  }

  return { interactionModel: model, spotlightedTrackIds, energyByTrack, energyMappings: contract.energyMappings };
}

/**
 * Decide what one voice does in one section.
 *
 * Interaction is evaluated from the resolved world contract rather than from
 * a fixed priority/density formula. Section shape still controls macro
 * dynamics, while the interaction context controls who occupies rhythmic space.
 */

function voiceInstrument(instrumentId: string): boolean {
  return /voice|choir|coro|vocal/i.test(instrumentId);
}

export function decide(
  voice: Voice,
  prof: VoiceProfile,
  shape: SectionShape,
  bandSize: number,
  context?: ArrangementContext,
): ArrangementDecision {
  const priority = priorityOf(prof, voice.instrumentId);
  const rank = DROP_ORDER.indexOf(priority);
  const spotlighted = context?.spotlightedTrackIds.includes(voice.id) ?? false;
  const sectionEnergy = context?.energyByTrack[voice.id] ?? 3;

  let thin = (1 - shape.intensity);
  if (shape.kind === 'breakdown') thin += 0.25;
  if (shape.kind === 'intro') thin += 0.2;
  if (shape.isOpening) thin += 0.1;
  if (shape.isPeak) thin = 0;
  thin = Math.max(0, Math.min(1, thin));

  const dropBudget = Math.floor(thin * Math.max(0, bandSize - 3));
  const dropsThisPriority =
    rank === 0 ? (shape.kind === 'breakdown' && shape.intensity < 0.35 && dropBudget >= 1) :
    rank === 1 ? dropBudget >= 3 :
    rank === 2 ? dropBudget >= 5 : false;

  let plays = !dropsThisPriority;
  let reason = '';

  const kind = String(shape.kind).toLowerCase();
  const openingSection = /intro|introduc|salida|opening/.test(kind);
  const vocalSection = /verse|verso|chorus|coro|refrain|letra|preg|tema|head/.test(kind);
  const instrumentalSection = /solo|trading|instrumental|falseta|variaci|descarga|mambo/.test(kind);
  const closingSection = /coda|cierre|outro|ending|tag|remate/.test(kind);

  // Macro arrangement is not the same thing as velocity. A real band changes
  // who is present: intros are sparse, instrumental sections make room for a
  // soloist, and codas peel layers away. The previous engine mostly changed
  // drive while leaving every track present, which produced eight independent
  // loops playing for the entire song.
  if (openingSection && (priority === 'sweetener' || priority === 'colour')) {
    plays = spotlighted ? plays : false;
    if (!plays) reason = 'sits out — opening texture';
  }
  if (vocalSection && (priority === 'sweetener' || priority === 'colour') && !spotlighted) {
    // Supporting colour does not disappear just because a vocal is foregrounded.
    // It should simplify its cell and yield some rhythmic space, not vanish;
    // otherwise the generated band loses the room, percussion colour and
    // counter-lines that make a verse sound like an ensemble.
    plays = plays && shape.intensity >= 0.32;
    if (!plays) reason = 'leaves vocal space — low-energy section';
  }
  if (instrumentalSection) {
    if (voiceInstrument(voice.instrumentId)) {
      plays = false;
      reason = 'instrumental section — vocal rests';
    } else if (prof.role === 'lead') {
      plays = spotlighted;
      reason = plays ? 'instrumental spotlight' : 'instrumental section — solo space';
    }
  }
  if (closingSection && (priority === 'sweetener' || priority === 'colour')) {
    plays = false;
    reason = 'sits out — closing texture';
  }

  if (!plays) {
    reason = `sits out — ${shape.kind} is being kept small`;
  }

  // Interaction model takes precedence over the old static density intuition.
  // A homophonic spotlight explicitly makes accompaniment step back.
  if (context?.interactionModel === 'homophonic' && context.spotlightedTrackIds.length) {
    if (spotlighted) {
      plays = true;
      reason = 'spotlight — homophonic lead';
    } else {
      thin = Math.min(1, thin + 0.25);
      if (shape.intensity < 0.65 && priority !== 'core') plays = false;
      reason = 'ducked — homophonic accompaniment';
    }
  } else if (context?.interactionModel === 'interlock' && context.spotlightedTrackIds.length > 1) {
    reason = spotlighted
      ? `interlock — Section Energy ${sectionEnergy}`
      : 'interlock — leaves space for spotlighted parts';
  } else if (spotlighted) {
    reason = `spotlight — ${context?.interactionModel ?? 'arrangement'}`;
  }

  const centred = shape.intensity - 0.55;
  let drive = 1 + centred * 0.725;

  if (shape.isBuild) drive *= 1.04;
  if (shape.isClosing) drive *= 0.92;
  if (priority === 'core') drive *= 1 + centred * 0.15;

  if (spotlighted) drive *= 1.08;
  if (context?.interactionModel === 'homophonic' && context.spotlightedTrackIds.length && !spotlighted) {
    drive *= 0.72;
  } else if (context?.interactionModel === 'interlock' && context.spotlightedTrackIds.length > 1) {
    drive *= sectionEnergy >= 4 ? 1.05 : sectionEnergy <= 2 ? 0.8 : 0.92;
  }

  let register = 0;
  if (shape.isPeak && (prof.role === 'lead' || prof.role === 'comp')) register = 12;
  if (shape.kind === 'breakdown' && prof.role === 'comp') register = -12;
  if (shape.kind === 'intro' && prof.role === 'pad') register = 12;

  // Energy is interpreted by the world contract, rather than as a universal
  // loudness curve. Each culture can define its own density/brightness/FX meaning.
  const mapped = context?.energyMappings?.[sectionEnergy];
  let brightness = (mapped?.brightness ?? (sectionEnergy / 5)) * 127;
  if (shape.kind === 'breakdown') brightness *= 0.82;
  if (shape.kind === 'intro') brightness *= 0.9;
  if (shape.isBuild) brightness += 8;
  brightness = Math.max(18, Math.min(127, brightness));

  let wet = mapped?.fxWetness ?? (1.35 - sectionEnergy * 0.1);
  if (shape.kind === 'breakdown' || shape.kind === 'intro') wet *= 1.12;
  if (shape.isPeak) wet *= 0.92;
  wet = Math.max(0.3, Math.min(2.2, wet));

  if (plays && !reason) {
    reason = shape.isPeak ? 'full — this is the peak'
      : shape.intensity < 0.4 ? 'held back'
      : shape.isBuild ? 'building'
      : 'playing';
  }

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
