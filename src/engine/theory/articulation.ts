import type { VoiceProfile } from './instrumentProfile';
import { foldToRange } from './instrumentProfile';
import { rand01 } from '../generators/groove';
import type { RhythmicContext } from '../sequencing/grid';

/**
 * ARTICULATION
 * ============
 *
 * Articulation is a first-class performance layer.  The renderer is Faust
 * physical-model synthesis, so these gestures are not merely names attached
 * to MIDI notes: the realization layer controls note length, velocity, onset,
 * pitch trajectories, CC-driven exciter parameters and (where appropriate)
 * repeated attacks.  The Faust instrument layer then maps those controls to
 * actual pluck, bow, membrane, body-impact, reed and resonator behavior.
 *
 * The model deliberately keeps a distinction between: 
 *   - faithful: the gesture has a corresponding physical/DSP mechanism;
 *   - approximate: the mechanism is represented by a physically related
 *     gesture, but is not a measured performer-specific model;
 *   - symbolic: there is no adequate instrument model yet and the system uses
 *     an explicitly marked stand-in.
 *
 * This prevents a UI label from claiming that an articulation was rendered
 * when the DSP did not actually receive a corresponding control.
 */

export type RealizationPrimitive =
  | 'note-length'
  | 'velocity'
  | 'onset-offset'
  | 'extra-notes'
  | 'pitch-bend'
  | 'cc-automation'
  | 'preset-swap';

export type Fidelity =
  /** The Faust physical model reproduces the gesture as written. */
  | 'faithful'
  /** Recognisable, but the physical mechanism differs. */
  | 'approximate'
  /** Stands in for the gesture; a listener hears a placeholder. */
  | 'symbolic';

export type ArticulationType =
  | 'tongued'
  | 'legato'
  | 'staccato'
  | 'basic'
  | 'lip_slur'
  | 'fall'
  | 'marcato'
  | 'arrastre'
  | 'legato_squeeze'
  | 'spiccato'
  | 'detache'
  | 'portamento'
  | 'snare_ghost'
  | 'snare_rimshot'
  | 'hihat_tip'
  | 'hihat_shank'
  | string;

export type ArticulationFamily =
  | 'duration'
  | 'attack'
  | 'pitch-gesture'
  | 'reiteration'
  | 'timbre'
  | 'dynamic';

export interface CcEnvelopePoint {
  /** 0..1 through the note's own duration. */
  at: number;
  /** 0..127 */
  value: number;
}

export interface CcEnvelope {
  cc: number;
  points: CcEnvelopePoint[];
}

export interface BendPoint {
  /** 0..1 through the note's own duration. */
  at: number;
  /** semitones relative to the written pitch; the renderer scales to the bend range. */
  semitones: number;
}

export interface ReiterationSpec {
  /** Number of repeats across the note; 0 disables. */
  count: number;
  /** 'even' fills the note; 'front' crams the repeats into the attack. */
  distribution: 'even' | 'front' | 'accelerate';
  /** Velocity multiplier applied to each repeat after the first. */
  decay: number;
  /** Semitone offsets cycled across the repeats (empty = same pitch). */
  pitchCycle?: number[];
}

export interface GraceSpec {
  /** Semitone offsets from the target, played before it. */
  offsets: number[];
  /** Beats before the target the first grace note lands. */
  leadBeats: number;
  /** Velocity multiplier. */
  velocity: number;
  /** When true, offsets are resolved against the active pitch set, not chromatically. */
  diatonic?: boolean;
}

export interface ArticulationSpec {
  id: string;
  name?: string;
  family: ArticulationFamily;
  /** Names in catalogs and style grammars that resolve to this spec. */
  aliases: string[];
  /** Which primitives are used. Drives the validator and the UI explanation. */
  uses: RealizationPrimitive[];
  fidelity: Fidelity;
  /** Plain-language note on what is lost, when anything is. */
  caveat?: string;

  /** Multiplier on the note's sounding length. */
  durationScale?: number;
  /** Hard ceiling on sounding length, in beats. */
  maxBeats?: number;
  /** Fraction of the gap to the next note this articulation is allowed to fill. */
  gapFill?: number;
  /** Multiplier on velocity. */
  velocityScale?: number;
  /** Fixed timing shift in milliseconds; negative is early. */
  onsetMs?: number;
  bend?: BendPoint[];
  cc?: CcEnvelope[];
  reiteration?: ReiterationSpec;
  grace?: GraceSpec;
  /** Requests a different sampled preset; resolved by the soundfont layer. */
  presetTag?: string;
  /** Families of instrument this articulation is meaningful on. */
  instrumentFamilies?: string[];
}

/* ------------------------------------------------------------------------- */
/* The vocabulary                                                            */
/* ------------------------------------------------------------------------- */

const SPECS: ArticulationSpec[] = [
  /* --- duration -------------------------------------------------------- */
  {
    id: 'staccato',
    family: 'duration',
    aliases: [
      'staccato', 'seco', 'short', 'staccato-chop', 'percussive-strike', 'detached', 'punteado', 'stacc',
      'percussive-finger', 'percussive-scratch', 'golpe seco',
      'tamborim', 'bachi', 'taconeo', 'staccato-octaves', 'distorted',
    ],
    uses: ['note-length', 'velocity'],
    fidelity: 'faithful',
    durationScale: 0.42,
    gapFill: 0.35,
    velocityScale: 1.02,
  },
  {
    id: 'staccatissimo',
    family: 'duration',
    aliases: ['staccatissimo', 'very short', 'clipped', 'stopped'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 0.24,
    gapFill: 0.2,
  },
  {
    id: 'tenuto',
    family: 'duration',
    aliases: ['tenuto', 'held', 'full value'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 1.0,
    gapFill: 0.96,
  },
  {
    id: 'legato',
    family: 'duration',
    aliases: ['legato', 'ligado', 'slur', 'phrase-end', 'smooth', 'cantabile', 'espressivo', 'sustain', 'sustained', 'drone', 'bellows phrasing'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 1.35,
    gapFill: 1.06,
  },
  {
    id: 'portato',
    family: 'duration',
    aliases: ['portato', 'louré', 'loure', 'half-detached'],
    uses: ['note-length', 'velocity'],
    fidelity: 'faithful',
    durationScale: 0.78,
    gapFill: 0.7,
  },
  {
    id: 'spiccato',
    family: 'duration',
    aliases: ['spiccato', 'saltando', 'bouncing-bow', 'spicc'],
    uses: ['note-length', 'velocity'],
    fidelity: 'faithful',
    durationScale: 0.28,
    gapFill: 0.25,
    velocityScale: 1.05,
    instrumentFamilies: ['bowed'],
  },
  {
    id: 'detache',
    family: 'duration',
    aliases: ['detache', 'detaché', 'broad-bow'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 0.95,
    gapFill: 0.9,
    instrumentFamilies: ['bowed'],
  },
  {
    id: 'legato_squeeze',
    family: 'duration',
    aliases: ['legato_squeeze', 'legato-squeeze', 'bellows-squeeze', 'squeeze'],
    uses: ['note-length', 'velocity'],
    fidelity: 'faithful',
    durationScale: 1.25,
    gapFill: 1.02,
    velocityScale: 1.05,
    instrumentFamilies: ['bellows-and-keys'],
  },
  {
    id: 'lip_slur',
    family: 'pitch-gesture',
    aliases: ['lip_slur', 'lip-slur', 'slur-lip'],
    uses: ['note-length', 'pitch-bend'],
    fidelity: 'faithful',
    durationScale: 1.15,
    instrumentFamilies: ['brass'],
  },
  {
    id: 'snare_ghost',
    family: 'attack',
    aliases: ['snare_ghost', 'snare-ghost', 'ghost-snare', 'tap-snare'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.38,
    durationScale: 0.3,
    instrumentFamilies: ['kit', 'metal-and-wood'],
  },
  {
    id: 'snare_rimshot',
    family: 'attack',
    aliases: ['snare_rimshot', 'snare-rimshot', 'power-rimshot'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.25,
    durationScale: 0.45,
    instrumentFamilies: ['kit'],
  },
  {
    id: 'hihat_tip',
    family: 'timbre',
    aliases: ['hihat_tip', 'hihat-tip', 'hat-tip', 'tip-hat'],
    uses: ['velocity'],
    fidelity: 'faithful',
    velocityScale: 0.65,
    durationScale: 0.35,
    instrumentFamilies: ['kit'],
  },
  {
    id: 'hihat_shank',
    family: 'timbre',
    aliases: ['hihat_shank', 'hihat-shank', 'hat-shank', 'shank-hat'],
    uses: ['velocity'],
    fidelity: 'faithful',
    velocityScale: 1.15,
    durationScale: 0.5,
    instrumentFamilies: ['kit'],
  },


  /* --- explicit instrument techniques ---------------------------------- */
  {
    id: 'pick',
    family: 'attack',
    aliases: ['pick', 'picked', 'plectrum', 'flatpick', 'down-pick', 'down-picking', 'alternate-picking'],
    uses: ['velocity'],
    fidelity: 'faithful',
    velocityScale: 1.04,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'fingerstyle',
    family: 'attack',
    aliases: ['fingerstyle', 'finger-picked', 'fingerpick', 'bright-pluck'],
    uses: ['velocity'],
    fidelity: 'faithful',
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'tirando',
    name: 'Tirando (Free Stroke)',
    family: 'attack',
    aliases: ['tirando', 'free stroke', 'free-stroke'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    durationScale: 0.92,
    velocityScale: 1.0,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'apoyando',
    name: 'Apoyando (Rest Stroke)',
    family: 'attack',
    aliases: ['apoyando', 'rest stroke', 'rest-stroke', 'support stroke'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    durationScale: 0.82,
    velocityScale: 1.06,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'upstroke',
    family: 'attack',
    aliases: ['upstroke', 'up-pick', 'up-picking', 'offbeat chop', 'skank'],
    uses: ['velocity', 'onset-offset'],
    fidelity: 'faithful',
    onsetMs: 3,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'slide',
    family: 'pitch-gesture',
    aliases: ['slide', 'glissando', 'gliss', 'fret-slide', 'steel-slide', 'portamento-slide'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [{ at: 0, semitones: -0.8 }, { at: 0.35, semitones: 0 }],
  },
  {
    id: 'breath',
    family: 'timbre',
    aliases: ['breath', 'air', 'breathy', 'breath-noise'],
    uses: ['cc-automation', 'velocity'],
    fidelity: 'faithful',
    cc: [{ cc: 2, points: [{ at: 0, value: 58 }, { at: 0.35, value: 82 }, { at: 1, value: 60 }] }],
    instrumentFamilies: ['winds', 'brass', 'free-reed'],
  },
  {
    id: 'cup-mute',
    family: 'timbre',
    aliases: ['cup-mute', 'cup mute', 'muted cup'],
    uses: ['preset-swap', 'velocity'],
    fidelity: 'approximate',
    presetTag: 'cup-mute',
    velocityScale: 0.94,
    durationScale: 0.78,
    instrumentFamilies: ['brass'],
  },
  {
    id: 'shake',
    family: 'reiteration',
    aliases: ['shake', 'lip-shake', 'brass-shake'],
    uses: ['extra-notes'],
    fidelity: 'approximate',
    reiteration: { count: 5, distribution: 'accelerate', decay: 0.92, pitchCycle: [0, 1, 0, 1] },
    instrumentFamilies: ['brass'],
  },
  {
    id: 'scratch',
    name: 'DJ scratch',
    family: 'pitch-gesture',
    aliases: ['scratch', 'vinyl-scratch', 'turntable-scratch'],
    uses: ['pitch-bend', 'velocity'],
    fidelity: 'approximate',
    bend: [
      { at: 0, semitones: 0 },
      { at: 0.25, semitones: 3.5 },
      { at: 0.5, semitones: -2.5 },
      { at: 0.75, semitones: 2 },
      { at: 1, semitones: 0 },
    ],
    velocityScale: 1.08,
    instrumentFamilies: ['electronic'],
  },
  {
    id: 'ponticello',
    name: 'Ponticello / bridge-position color',
    family: 'timbre',
    aliases: ['ponticello', 'sul-ponticello'],
    uses: ['preset-swap', 'velocity'],
    fidelity: 'approximate',
    presetTag: 'ponticello',
    velocityScale: 1.04,
    instrumentFamilies: ['plucked', 'bowed'],
  },
  {
    id: 'tasto',
    name: 'Tasto / fingerboard-position color',
    family: 'timbre',
    aliases: ['tasto', 'sul-tasto'],
    uses: ['preset-swap', 'velocity'],
    fidelity: 'approximate',
    presetTag: 'tasto',
    velocityScale: 0.92,
    instrumentFamilies: ['plucked', 'bowed'],
  },
  {
    id: 'mwah-growl',
    name: 'Fretless mwah',
    family: 'timbre',
    aliases: ['mwah-growl', 'mwah', 'fretless-growl'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.06,
    durationScale: 0.92,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'spiccato',
    family: 'attack',
    aliases: ['spiccato', 'spicc.', 'saltato'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    durationScale: 0.45,
    velocityScale: 1.04,
    instrumentFamilies: ['bowed'],
  },
  {
    id: 'sostenuto',
    family: 'duration',
    aliases: ['sostenuto', 'sost.', 'sustained-key'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 1.25,
    gapFill: 1,
    instrumentFamilies: ['bellows-and-keys'],
  },
  {
    id: 'picado',
    name: 'Picado (Alternating Rest-Stroke Line)',
    family: 'attack',
    aliases: ['picado', 'picado alternado', 'picado line'],
    uses: ['velocity', 'note-length', 'onset-offset'],
    fidelity: 'faithful',
    durationScale: 0.5,
    gapFill: 0.28,
    velocityScale: 1.04,
    onsetMs: 1.5,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'octave-stabs',
    family: 'attack',
    aliases: ['octave-stabs', 'octave stab', 'octave-stab'],
    uses: ['extra-notes', 'velocity'],
    fidelity: 'faithful',
    grace: { offsets: [12], leadBeats: 0, velocity: 0.95 },
    velocityScale: 1.12,
    instrumentFamilies: ['bellows-and-keys'],
  },
  {
    id: 'rimshot',
    family: 'attack',
    aliases: ['rimshot', 'rim-shot', 'side-stick', 'rim'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.06,
    durationScale: 0.38,
    instrumentFamilies: ['kit', 'metal-and-wood', 'hand-drums'],
  },
  {
    id: 'slap',
    family: 'attack',
    aliases: ['slap', 'slap stroke', 'open slap', 'thumb slap', 'muffled slap', 'cajon-agudo', 'cajón-agudo'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.18,
    durationScale: 0.5,
    instrumentFamilies: ['plucked', 'hand-drums', 'body-percussion'],
  },
  {
    id: 'heel',
    family: 'attack',
    aliases: ['heel', 'heel stroke', 'heel-touch'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.5,
    durationScale: 0.3,
    instrumentFamilies: ['hand-drums'],
  },
  {
    id: 'slap-tapao',
    family: 'attack',
    aliases: ['slap-tapao', 'tapao', 'muted-slap', 'tapao-slap'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.78,
    durationScale: 0.3,
    instrumentFamilies: ['hand-drums'],
  },
  {
    id: 'quinto-slap',
    family: 'attack',
    aliases: ['quinto-slap', 'quinto slap', 'macho-slap'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.14,
    durationScale: 0.28,
    instrumentFamilies: ['hand-drums'],
  },
  {
    id: 'conga-open',
    family: 'timbre',
    aliases: ['conga-open', 'conga open', 'hembra-open'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    durationScale: 0.85,
    instrumentFamilies: ['hand-drums'],
  },
  {
    id: 'tumba-open',
    family: 'timbre',
    aliases: ['tumba-open', 'tumba open'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    durationScale: 0.95,
    instrumentFamilies: ['hand-drums'],
  },
  {
    id: 'guajeo',
    name: 'Guajeo',
    family: 'reiteration',
    aliases: ['guajeo', 'piano-guajeo', 'tres-guajeo'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    durationScale: 0.7,
    velocityScale: 1.02,
    instrumentFamilies: ['bellows-and-keys', 'plucked'],
  },
  {
    id: 'martillo',
    family: 'reiteration',
    aliases: ['martillo', 'martillo-strum', 'tres-martillo'],
    uses: ['extra-notes', 'velocity'],
    fidelity: 'faithful',
    reiteration: { count: 2, distribution: 'front', decay: 0.94 },
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'golpe-caja',
    family: 'timbre',
    aliases: ['golpe-caja', 'bandoneon-golpe', 'case-tap'],
    uses: ['velocity', 'preset-swap'],
    fidelity: 'approximate',
    durationScale: 0.3,
    velocityScale: 1.05,
    presetTag: 'percussive-effect',
    instrumentFamilies: ['bellows-and-keys'],
  },
  {
    id: 'chacha',
    family: 'attack',
    aliases: ['chachá', 'chacha', 'bata-chacha'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.75,
    durationScale: 0.45,
    instrumentFamilies: ['hand-drums'],
  },

  /* --- attack ----------------------------------------------------------- */
  {
    id: 'martellato',
    name: 'Martellato (Hammered Attack)',
    family: 'attack',
    aliases: ['martellato', 'martellato attack', 'hammered attack'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.18,
    durationScale: 0.78,
    gapFill: 0.62,
    instrumentFamilies: ['bellows-and-keys', 'brass', 'winds', 'bowed'],
  },
  {
    id: 'accent',
    family: 'attack',
    aliases: ['accent', 'accented', 'accented-arrival', 'marcato-light', 'palmas-fuertes', 'palmas-claras', 'staccato-accent', 'horn-stab', 'stab', '>', 'stabs'],
    uses: ['velocity'],
    fidelity: 'faithful',
    velocityScale: 1.22,
    durationScale: 0.88,
  },
  {
    id: 'marcato',
    name: 'Marcato 4',
    family: 'attack',
    aliases: ['marcato', 'marcato-4', 'marcato 4', 'Marcato in 4 Pattern', 'marcado', 'marked', 'en 4', 'marcato en 4', 'octave marcato', 'variación', 'variacion'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.16,
    durationScale: 0.7,
    gapFill: 0.6,
  },
  {
    id: 'sforzando',
    family: 'attack',
    aliases: ['sforzando', 'sfz', 'sf', 'fp', 'forte-piano'],
    uses: ['velocity'],
    fidelity: 'faithful',
    velocityScale: 1.32,
  },
  {
    id: 'ghost',
    family: 'attack',
    aliases: ['ghost', 'ghosted', 'ghost-aware', 'dead note', 'dead-note', 'ghost-note', 'palmas-sordas', 'dead-note', 'muffled', 'muff', 'soft'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.34,
    durationScale: 0.35,
  },
  {
    id: 'flam',
    family: 'attack',
    aliases: ['flam', 'grace-stroke'],
    uses: ['extra-notes', 'onset-offset'],
    fidelity: 'faithful',
    grace: { offsets: [0], leadBeats: 0.035, velocity: 0.45 },
  },
  {
    id: 'drag',
    family: 'attack',
    aliases: ['drag', 'ruff'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [0, 0], leadBeats: 0.07, velocity: 0.38 },
  },

  /* --- pitch gestures --------------------------------------------------- */
  {
    id: 'arrastre',
    name: 'Arrastre',
    family: 'pitch-gesture',
    aliases: ['arrastre', 'Tango Arrastre Technique', 'drag-into', 'yumba-drag'],
    uses: ['extra-notes', 'pitch-bend', 'velocity'],
    fidelity: 'approximate',
    caveat: 'The performance layer realizes the approach with lead-in notes and a pitch trajectory; the Faust instrument also receives the arrastre articulation code so its exciter can change with the gesture.',
    grace: { offsets: [-2, -1], leadBeats: 0.16, velocity: 0.42 },
    bend: [
      { at: 0, semitones: -0.45 },
      { at: 0.16, semitones: 0 },
    ],
    velocityScale: 1.1,
    instrumentFamilies: ['bellows-and-keys', 'bowed', 'plucked'],
  },
  {
    id: 'sincopa',
    name: 'Síncopa',
    family: 'attack',
    aliases: ['síncopa', 'sincopa', 'Tango Sincopa Rhythm', 'syncopation', 'syncopated'],
    uses: ['velocity', 'onset-offset'],
    fidelity: 'faithful',
    velocityScale: 1.18,
    durationScale: 0.85,
    onsetMs: -8,
  },
  {
    id: 'scoop',
    family: 'pitch-gesture',
    aliases: ['scoop', 'doit-up', 'lift-in'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [
      { at: 0, semitones: -1.1 },
      { at: 0.22, semitones: 0 },
    ],
  },
  {
    id: 'fall',
    family: 'pitch-gesture',
    aliases: ['fall', 'drop', 'doit-down', 'caida', 'fall-off'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [
      { at: 0.6, semitones: 0 },
      { at: 1, semitones: -1.9 },
    ],
  },
  {
    id: 'doit',
    family: 'pitch-gesture',
    aliases: ['doit', 'rip-up'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [
      { at: 0.65, semitones: 0 },
      { at: 1, semitones: 1.8 },
    ],
  },
  {
    id: 'bend',
    family: 'pitch-gesture',
    aliases: ['bend', 'blue-note-bend', 'string-bend', 'oshide'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [
      { at: 0, semitones: 0 },
      { at: 0.3, semitones: 0.55 },
      { at: 0.8, semitones: 0.55 },
      { at: 1, semitones: 0.1 },
    ],
  },
  {
    id: 'portamento',
    family: 'pitch-gesture',
    aliases: ['portamento', 'hua yin', 'warm-sub-slide', 'glide'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 1.15,
  },
  {
    id: 'vibrato',
    family: 'pitch-gesture',
    aliases: ['vibrato', 'vib', 'wide vibrato'],
    uses: ['cc-automation'],
    fidelity: 'approximate',
    caveat: 'The current renderer controls vibrato depth at the performance layer; instrument-specific vibrato rate remains model-dependent.',
    cc: [{ cc: 1, points: [{ at: 0, value: 0 }, { at: 0.35, value: 18 }, { at: 0.7, value: 62 }, { at: 1, value: 54 }] }],
  },

  /* --- reiteration ------------------------------------------------------ */
  {
    id: 'tremolo',
    family: 'reiteration',
    aliases: ['tremolo', 'trem', 'tremolando'],
    uses: ['extra-notes'],
    fidelity: 'approximate',
    caveat: 'Re-articulated as discrete repeats; a bowed tremolo’s continuous noise floor is not reproduced.',
    reiteration: { count: 6, distribution: 'even', decay: 0.9 },
  },
  {
    id: 'roll',
    family: 'reiteration',
    aliases: ['roll', 'buzz', 'buzz-roll', 'redoble'],
    uses: ['extra-notes'],
    fidelity: 'approximate',
    caveat: 'A press/buzz roll is rendered as fast discrete strokes; the sustained rattle is not sampled.',
    reiteration: { count: 8, distribution: 'accelerate', decay: 0.86 },
  },
  {
    id: 'rasgueado',
    name: 'Rasgueado',
    family: 'reiteration',
    aliases: ['rasgueado', 'Flamenco Rasgueado Strum', 'rasgueo', 'strum-roll', 'abanico'],
    uses: ['extra-notes', 'velocity'],
    fidelity: 'approximate',
    caveat: 'The performance layer realizes the finger sequence as separate attacks; the Faust guitar model changes its excitation/timbre for the rasgueado/abanico gesture.',
    reiteration: { count: 5, distribution: 'accelerate', decay: 0.92 },
    velocityScale: 1.08,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'alzapua',
    name: 'Alzapúa',
    family: 'reiteration',
    aliases: ['alzapúa', 'alzapua', 'Thumb Alzapua Technique', 'thumb-sweep', 'thumb-apoyando', 'pulgar-apoyando'],
    uses: ['extra-notes', 'velocity'],
    fidelity: 'approximate',
    caveat: 'The performance layer realizes the thumb sweep as alternating attacks while the Faust plucked-string model changes excitation emphasis.',
    reiteration: { count: 3, distribution: 'front', decay: 0.95, pitchCycle: [-12, 0, 0] },
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'trill',
    family: 'reiteration',
    aliases: ['trill', 'tr'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    reiteration: { count: 8, distribution: 'even', decay: 0.95, pitchCycle: [0, 2] },
  },
  {
    id: 'mordent',
    family: 'reiteration',
    aliases: ['mordent', 'prall', 'pralltriller'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [2, 0], leadBeats: 0.1, velocity: 0.4, diatonic: true },
  },
  {
    id: 'turn',
    family: 'reiteration',
    aliases: ['turn', 'gruppetto'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [2, 0, -2], leadBeats: 0.15, velocity: 0.35, diatonic: true },
  },
  {
    id: 'grace',
    family: 'reiteration',
    aliases: ['grace', 'grace-note', 'cut', 'acciaccatura', 'appoggiatura'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [2], leadBeats: 0.08, velocity: 0.38, diatonic: true },
  },
  {
    id: 'rapid-run',
    family: 'reiteration',
    aliases: ['rapid-run', 'run', 'scalar-run', 'falseta-run'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [-5, -3, -1], leadBeats: 0.3, velocity: 0.46, diatonic: true },
  },

  /* --- timbre ----------------------------------------------------------- */
  {
    id: 'palm-mute',
    family: 'timbre',
    aliases: ['palm-mute', 'palm mute', 'pm', 'muted', 'mute', 'damp', 'apagado'],
    uses: ['preset-swap', 'note-length', 'velocity', 'cc-automation'],
    fidelity: 'approximate',
    caveat: 'The Faust instrument receives the mute control and short gate; the physical model reduces resonance and attack rather than relying on a missing sample preset.',
    presetTag: 'muted',
    durationScale: 0.34,
    velocityScale: 0.92,
    cc: [{ cc: 74, points: [{ at: 0, value: 34 }] }],
  },
  {
    id: 'pizzicato',
    family: 'timbre',
    aliases: ['pizzicato', 'pizz', 'tenuto-pizz', 'sustained-pizz'],
    uses: ['preset-swap', 'note-length'],
    fidelity: 'faithful',
    presetTag: 'pizzicato',
    durationScale: 0.4,
  },
  {
    id: 'arco',
    family: 'timbre',
    aliases: ['arco', 'bowed', 'detaché', 'detache'],
    uses: ['preset-swap', 'note-length'],
    fidelity: 'faithful',
    presetTag: 'arco',
    durationScale: 1.2,
    gapFill: 0.98,
  },
  {
    id: 'harmonic',
    family: 'timbre',
    aliases: ['harmonic', 'harmonics', 'fan yin', 'flageolet', 'natural-harmonic'],
    uses: ['preset-swap', 'extra-notes', 'velocity'],
    fidelity: 'approximate',
    caveat: 'Sounded an octave (or twelfth) up at low velocity; without a harmonics preset the timbre is the open string.',
    presetTag: 'harmonic',
    grace: { offsets: [12], leadBeats: 0.02, velocity: 0.22 },
    velocityScale: 0.6,
  },
  {
    id: 'brushed',
    family: 'timbre',
    aliases: ['brush', 'brushed', 'sweep', 'escobilla', 'brushes', 'brush-up', 'scrape', 'brush-sweep', 'brush-tap', 'guacharaca'],
    uses: ['preset-swap', 'velocity'],
    fidelity: 'approximate',
    caveat: 'Brush textures rely on the kit having brush samples; otherwise a soft rim/hat stands in.',
    presetTag: 'brush',
    velocityScale: 0.62,
  },
  {
    id: 'chicharra',
    family: 'timbre',
    aliases: ['chicharra', 'cricket-scrape'],
    uses: ['preset-swap', 'velocity', 'extra-notes'],
    fidelity: 'approximate',
    presetTag: 'percussive-effect',
    velocityScale: 0.85,
    durationScale: 0.45,
    instrumentFamilies: ['bowed'],
  },
  {
    id: 'strappata',
    family: 'timbre',
    aliases: ['strappata', 'slap-and-thud'],
    uses: ['velocity', 'extra-notes'],
    fidelity: 'approximate',
    grace: { offsets: [-12], leadBeats: -0.01, velocity: 1.5, diatonic: false },
    velocityScale: 1.3,
    durationScale: 0.3,
    instrumentFamilies: ['bowed', 'plucked'],
  },
  {
    id: 'tambor',
    family: 'timbre',
    aliases: ['tambor', 'snare-snap', 'pizzicato-snare'],
    uses: ['velocity', 'note-length', 'preset-swap'],
    fidelity: 'approximate',
    durationScale: 0.2,
    velocityScale: 1.1,
    presetTag: 'pizzicato',
    instrumentFamilies: ['bowed'],
  },
  {
    id: 'latigo',
    family: 'pitch-gesture',
    aliases: ['latigo', 'látigo', 'whip-glissando'],
    uses: ['pitch-bend', 'velocity'],
    fidelity: 'approximate',
    bend: [
      { at: 0, semitones: 0 },
      { at: 0.8, semitones: 12 },
      { at: 1, semitones: 12 },
    ],
    velocityScale: 1.15,
    instrumentFamilies: ['bowed'],
  },
  {
    id: 'golpe',
    name: 'Golpe',
    family: 'timbre',
    aliases: ['golpe', 'Flamenco Golpe Tap', 'tap-plate', 'body-tap', 'golpe-tap', 'golpe/corte', 'zapateado'],
    uses: ['velocity', 'preset-swap'],
    fidelity: 'approximate',
    durationScale: 0.3,
    velocityScale: 1.1,
    presetTag: 'percussive-effect',
    instrumentFamilies: ['plucked', 'bowed', 'bellows-and-keys', 'hand-drums'],
  },
  {
    id: 'bellows-slap',
    family: 'timbre',
    aliases: ['bellows-slap', 'acento', 'bellows-accent'],
    uses: ['velocity'],
    fidelity: 'approximate',
    velocityScale: 1.2,
    durationScale: 0.2,
    instrumentFamilies: ['bellows-and-keys'],
  },
  {
    id: 'cluster',
    family: 'timbre',
    aliases: ['cluster', 'golpe-de-cluster', 'key-cluster'],
    uses: ['extra-notes', 'velocity'],
    fidelity: 'approximate',
    grace: { offsets: [1, 2, -1], leadBeats: 0, velocity: 1.0, diatonic: false },
    velocityScale: 1.25,
    durationScale: 0.4,
    instrumentFamilies: ['bellows-and-keys'],
  },
  {
    id: 'chapa',
    family: 'timbre',
    aliases: ['chapa', 'metal-plate-damp', 'string-chapa'],
    uses: ['preset-swap', 'velocity'],
    fidelity: 'approximate',
    durationScale: 0.2,
    velocityScale: 0.95,
    presetTag: 'muted',
    instrumentFamilies: ['bellows-and-keys'],
  },
  {
    id: 'low-tone',
    family: 'timbre',
    aliases: ['bass tone', 'bajo', 'low tone', 'surdo-open', 'abierto-open', 'sub', 'sub-bass', 'cajon-grave', 'cajón-grave'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    // The low open stroke on a hand drum: the drum's own `low` key, struck
    // fully rather than damped. Not the bass *role*, which is a track job.
    velocityScale: 0.88,
    durationScale: 1.15,
    instrumentFamilies: ['hand-drums', 'metal-and-wood', 'body-percussion', 'kit'],
  },
  {
    id: 'open',
    family: 'timbre',
    aliases: [
      'open', 'ordinario', 'ord', 'natural',
      // The contract's generic placeholder, emitted by `base()` when a world
      // states no articulation grammar of its own. It means "play it plainly",
      // which is exactly this spec.
      'style-native attack and release', 'style-dependent', 'style-native',
    ],
    uses: [],
    fidelity: 'faithful',
  },

  /* --- dynamic ---------------------------------------------------------- */
  {
    id: 'crescendo',
    family: 'dynamic',
    aliases: ['crescendo', 'cresc', 'swell', 'bellows-swell'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.2,
    durationScale: 1.1,
  },
  {
    id: 'diminuendo',
    family: 'dynamic',
    aliases: ['diminuendo', 'dim', 'decresc', 'decrescendo', 'fade'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.8,
    durationScale: 0.95,
  },
  {
    id: 'pesante',
    family: 'dynamic',
    aliases: ['pesante', 'pesado', 'heavy', 'heavy', 'weighted'],
    uses: ['velocity', 'note-length', 'onset-offset'],
    fidelity: 'faithful',
    velocityScale: 1.14,
    durationScale: 1.25,
    onsetMs: 9,
  },
  {
    id: 'montuno',
    name: 'Montuno',
    family: 'reiteration',
    aliases: ['montuno', 'Piano Montuno Pattern', 'piano-montuno', 'tumbao-piano'],
    uses: ['note-length', 'velocity'],
    fidelity: 'faithful',
    durationScale: 0.85,
    velocityScale: 1.05,
    instrumentFamilies: ['bellows-and-keys', 'plucked'],
  },
  {
    id: 'clave-3-2',
    name: 'Clave 3-2',
    family: 'attack',
    aliases: ['clave 3-2', 'clave-3-2', 'Afro-Cuban Clave 3-2', 'clave-strike', 'clave'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.25,
    durationScale: 0.5,
    instrumentFamilies: ['metal-and-wood', 'hand-drums'],
  },
  {
    id: 'repique',
    family: 'reiteration',
    aliases: ['repique', 'repiqueteo', 'tres-repique'],
    uses: ['extra-notes', 'velocity'],
    fidelity: 'faithful',
    reiteration: { count: 3, distribution: 'front', decay: 0.95 },
    velocityScale: 1.1,
    instrumentFamilies: ['plucked', 'hand-drums'],
  },
  {
    id: 'palhetada',
    family: 'reiteration',
    aliases: ['palhetada', 'fast-cavaquinho-picking'],
    uses: ['extra-notes', 'velocity'],
    fidelity: 'faithful',
    reiteration: { count: 4, distribution: 'even', decay: 0.96 },
    velocityScale: 1.05,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'pop',
    family: 'attack',
    aliases: ['pop', 'slap-pop', 'hard-pop', 'thumb-slap', 'string-pop'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.28,
    durationScale: 0.45,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'pull-off',
    family: 'pitch-gesture',
    aliases: ['pull-off', 'pull off', 'pulloff'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.84,
    durationScale: 1.05,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'hammer-on',
    family: 'pitch-gesture',
    aliases: ['hammer-on', 'hammer', 'slur-hammer'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.88,
    durationScale: 1.15,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'flutter-tongue',
    family: 'timbre',
    aliases: ['flutter-tongue', 'flutter', 'frullato'],
    uses: ['cc-automation', 'extra-notes'],
    fidelity: 'faithful',
    reiteration: { count: 6, distribution: 'even', decay: 0.98 },
    velocityScale: 1.08,
    instrumentFamilies: ['winds'],
  },
  {
    id: 'subtone',
    family: 'timbre',
    aliases: ['subtone', 'warm-subtone', 'breathy-subtone'],
    uses: ['velocity', 'cc-automation'],
    fidelity: 'faithful',
    velocityScale: 0.72,
    durationScale: 1.2,
    instrumentFamilies: ['winds'],
  },
  {
    id: 'growl',
    family: 'timbre',
    aliases: ['growl', 'throat-growl', 'wind-growl'],
    uses: ['cc-automation', 'velocity'],
    fidelity: 'faithful',
    velocityScale: 1.18,
    durationScale: 0.9,
    instrumentFamilies: ['winds', 'brass'],
  },
  {
    id: 'altissimo',
    family: 'pitch-gesture',
    aliases: ['altissimo', 'high-register', 'overblow'],
    uses: ['velocity', 'pitch-bend'],
    fidelity: 'faithful',
    velocityScale: 1.22,
    instrumentFamilies: ['winds'],
  },
  {
    id: 'cascara',
    name: 'Cáscara (Shell/Rim Stick Pattern)',
    family: 'timbre',
    aliases: ['cascara', 'cáscara', 'shell tap', 'shell-stick'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    durationScale: 0.42,
    velocityScale: 0.72,
    instrumentFamilies: ['hand-drums'],
  },
  {
    id: 'toe',
    family: 'attack',
    aliases: ['toe', 'tip', 'heel-toe', 'toe-touch', 'tap'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.48,
    durationScale: 0.35,
    instrumentFamilies: ['hand-drums'],
  },
  {
    id: 'choke',
    family: 'duration',
    aliases: ['choke', 'cymbal-choke', 'timbale-choke', 'damped-choke'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 0.18,
    gapFill: 0.15,
    instrumentFamilies: ['metal-and-wood', 'hand-drums', 'kit'],
  },
  {
    id: 'meend',
    family: 'pitch-gesture',
    aliases: ['meend', 'mind', 'gamak', 'bayan-meend'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [
      { at: 0, semitones: 0 },
      { at: 0.5, semitones: 1.2 },
      { at: 1, semitones: 0 },
    ],
    instrumentFamilies: ['plucked', 'hand-drums', 'bowed'],
  },
];

/* ------------------------------------------------------------------------- */
/* Lookup                                                                     */
/* ------------------------------------------------------------------------- */

export const ARTICULATIONS: Record<string, ArticulationSpec> = Object.fromEntries(
  SPECS.map(s => [s.id, s]),
);

const ALIAS_INDEX: Map<string, ArticulationSpec> = (() => {
  const m = new Map<string, ArticulationSpec>();
  for (const spec of SPECS) {
    m.set(spec.id.toLowerCase(), spec);
    for (const alias of spec.aliases) m.set(alias.toLowerCase(), spec);
  }
  return m;
})();

/**
 * Cross-Instrument Articulation Fusion Mappings
 * Translates genre-specific techniques to idiomatic equivalents on different instrument families.
 * Ensures that a Flamenco pattern assigned to a Synth creatively interprets 'rasgueado' correctly.
 */
export const ARTICULATION_FUSION_MAP: Record<string, Record<string, string>> = {
  piano: {
    'rasgueado': 'arpeggiato-fast',
    'golpe': 'bass-cluster-staccato',
    'alzapúa': 'stride-bass-sweep',
    'palm-mute': 'staccato',
    'tremolo': 'trill',
    'harmonics': 'high-register-pp',
    'slap': 'accented-staccato-octave',
    'pop': 'high-accent',
    'ghost-note': 'muted-key-thump',
    'pizzicato': 'staccato',
    'spiccato': 'staccatissimo',
    'col-legno': 'cluster-tap',
    'bartok-pizzicato': 'sfz-accent',
    'flutter-tongue': 'tremolo-trill',
    'fall': 'downward-glissando',
    'doit': 'upward-glissando',
    'growl': 'cluster-tremolo',
  },
  synth: {
    'rasgueado': 'filter-sweep-fast',
    'golpe': 'noise-burst',
    'alzapúa': 'arp-down-up',
    'palm-mute': 'low-cutoff-pluck',
    'tremolo': 'lfo-amp-fast',
    'harmonics': 'high-resonance-ping',
    'slap': 'fm-bite',
    'pop': 'resonance-spike',
    'ghost-note': 'noise-click',
    'pizzicato': 'short-decay-pluck',
    'spiccato': 'tight-env-pluck',
    'col-legno': 'noise-transient',
    'bartok-pizzicato': 'pitch-env-snap',
    'flutter-tongue': 'lfo-rate-max',
    'fall': 'pitch-env-down',
    'doit': 'pitch-env-up',
    'growl': 'fm-mod-heavy',
  },
  guitar: {
    'fast-arpeggiato': 'rasgueado',
    'glissando': 'fret-slide',
    'slap': 'thumb-slap',
    'pop': 'finger-snap',
    'arco': 'e-bow-sustain',
    'pizzicato': 'tirando',
    'spiccato': 'palm-mute',
    'col-legno': 'golpe',
    'bartok-pizzicato': 'string-snap',
    'flutter-tongue': 'tremolo-picking',
    'fall': 'whammy-dive',
    'doit': 'whammy-pull',
    'growl': 'fuzz-overdrive',
  },
  bass: {
    'rasgueado': 'fast-chord-rake',
    'golpe': 'ghost-note-thump',
    'alzapúa': 'thumb-sweep',
    'tremolo': 'fast-picking',
    'pizzicato': 'fingerstyle',
    'spiccato': 'palm-mute',
    'col-legno': 'slap-dead-note',
    'bartok-pizzicato': 'hard-pop',
    'flutter-tongue': 'fast-slap-pop',
    'fall': 'slide-down',
    'doit': 'slide-up',
  },
  strings: {
    'rasgueado': 'ricochet',
    'golpe': 'col-legno-battuto',
    'alzapúa': 'heavy-detaché',
    'palm-mute': 'con-sordino',
    'slap': 'bartok-pizzicato',
    'pop': 'hard-pizzicato',
    'ghost-note': 'muted-scrape',
    'flutter-tongue': 'tremolo-bow',
    'fall': 'glissando-down',
    'doit': 'glissando-up',
    'growl': 'sul-ponticello-heavy',
    'pitch-bend': 'portamento',
  },
  percussion: {
    'rasgueado': 'roll',
    'alzapúa': 'roll',
    'alzapua': 'roll',
    'tremolo': 'roll',
    'pizzicato': 'staccato',
    'spiccato': 'staccato',
    'palm-mute': 'ghost',
    'ghost-note': 'ghost',
    'slap': 'slap',
    'pop': 'accent',
    'growl': 'roll',
  },
  brass: {
    'rasgueado': 'rip',
    'golpe': 'tongue-slap',
    'alzapúa': 'fast-valve-sweep',
    'palm-mute': 'stopped',
    'slap': 'fp-crescendo',
    'pop': 'staccatissimo-accent',
    'pizzicato': 'staccato',
    'spiccato': 'double-tongue',
    'col-legno': 'key-click',
    'tremolo': 'flutter-tongue',
    'bartok-pizzicato': 'sfz-staccato',
  },
};

// Pre-fusion genre influences.
// This intercepts generic techniques and applies stylistic interpretation BEFORE
// it reaches the physical instrument model. A generic 'strum' becomes a 'rasgueado' in Flamenco,
// which the physical model will creatively interpret via the ARTICULATION_FUSION_MAP.
export const GENRE_ARTICULATION_INFLUENCE: Record<string, Record<string, string>> = {
  flamenco: { 'normal': 'tirando', 'strum': 'rasgueado', 'accent': 'golpe', 'arpeggio': 'alzapúa' },
  jazz: { 'normal': 'swing-eighth', 'accent': 'ghost-note', 'strum': 'comp-chord' },
  electronic: { 'normal': 'tight-env-pluck', 'strum': 'filter-sweep-fast', 'accent': 'fm-bite' },
  rock: { 'normal': 'down-pick', 'strum': 'power-chord', 'accent': 'palm-mute' },
};

export function applyGenreArticulationInfluence(articulation: string, genre: string): string {
  const baseArt = articulation || 'normal';
  const genreKey = (genre || '').toLowerCase();
  const genreMap = GENRE_ARTICULATION_INFLUENCE[genreKey];
  return (genreMap && genreMap[baseArt]) ? genreMap[baseArt] : baseArt;
}

export function resolveCrossInstrumentArticulation(articulation: string, targetFamily: string): string {
  if (!articulation) return 'normal';
  const raw = (targetFamily || '').toLowerCase();
  const familyKey = {
    'plucked-string': 'guitar',
    'hand-drums': 'percussion',
    'metal-and-wood': 'percussion',
    'body-percussion': 'percussion',
    'kit': 'percussion',
    'winds': 'brass',
    'free-reed': 'piano',
    'bellows-and-keys': 'piano',
  }[raw] ?? raw;
  const familyMap = ARTICULATION_FUSION_MAP[familyKey];
  return (familyMap && familyMap[articulation]) ? familyMap[articulation] : articulation;
}

/**
 * Resolve a free-text articulation name from a catalog or style grammar.
 * Catalogs can contain descriptive phrases, but matching remains boundary-safe
 * so one technique name cannot accidentally resolve to a different one.
 */
export function resolveArticulation(name: string | undefined): ArticulationSpec | undefined {
  if (!name) return undefined;
  const key = name.trim().toLowerCase();
  if (!key) return undefined;
  const direct = ALIAS_INDEX.get(key);
  if (direct) return direct;
  // Catalogs often pass descriptive strings (e.g. 'snare rimshot'), but a raw
  // substring match is unsafe: 'shaker' must not resolve to 'shake', and
  // 'slide-note' must not silently become the wrong pitch gesture. Normalize
  // separators and only accept whole-token/whole-phrase matches.
  const normalizedKey = key.replace(/[._/]+/g, ' ').replace(/[-]+/g, ' ').replace(/\s+/g, ' ').trim();
  for (const [alias, spec] of ALIAS_INDEX) {
    if (alias.length < 4) continue;
    const normalizedAlias = alias.replace(/[._/]+/g, ' ').replace(/[-]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (!normalizedAlias) continue;
    if (new RegExp(`(?:^|\\s)${normalizedAlias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:$|\\s)`, 'i').test(normalizedKey)) {
      return spec;
    }
  }
  return undefined;
}

/** Resolve a whole articulation list; later entries layer over earlier ones. */
export function resolveArticulationStack(names: (string | undefined)[]): ArticulationSpec[] {
  const out: ArticulationSpec[] = [];
  const seen = new Set<string>();
  for (const n of names) {
    const spec = resolveArticulation(n);
    if (spec && !seen.has(spec.id)) {
      seen.add(spec.id);
      out.push(spec);
    }
  }
  return out;
}

/* ------------------------------------------------------------------------- */
/* Realization                                                                */
/* ------------------------------------------------------------------------- */

export interface ArticulationRequest {
  specs: ArticulationSpec[];
  profile: VoiceProfile;
  /** Written pitch. */
  midi: number;
  /** Written velocity, 1..127. */
  velocity: number;
  /** Written sounding length, in beats. */
  lengthBeats: number;
  /** Beats until the next attack on this voice. */
  gapBeats: number;
  beatsPerBar: number;
  secPerBeat: number;
  /** Absolute time of the written attack, in seconds. */
  time: number;
  /** Pitch classes the ornaments may use when `diatonic` is set. */
  pitchSet?: number[];
  /** 0..1 — how strongly articulations are realized. The user's expression dial. */
  expression: number;
  context?: RhythmicContext;
  seed: number;
  /** Semitone range of the synth's pitch-bend wheel. */
  bendRangeSemitones?: number;
}

export interface RealizedNote {
  time: number;
  durSeconds: number;
  midi: number;
  velocity: number;
  /** MIDI 14-bit bend trajectory, offsets in seconds from this note's onset. */
  pitchBend?: { offset: number; value: number }[];
  /** Marks generated ornament/repeat notes so the mixer can trim them first. */
  ornament?: boolean;
}

export interface RealizedCc {
  /** Absolute seconds. */
  time: number;
  cc: number;
  value: number;
}

export interface Realization {
  notes: RealizedNote[];
  ccs: RealizedCc[];
  /** Preset tag the soundfont layer should try to honour, if any. */
  presetTag?: string;
  /** Aggregated fidelity of the gestures applied, worst-case. */
  fidelity: Fidelity;
  /** Caveats worth surfacing in the inspector. */
  caveats: string[];
}

const FIDELITY_RANK: Record<Fidelity, number> = { faithful: 0, approximate: 1, symbolic: 2 };

function bendValue(semitones: number, range: number): number {
  const clamped = Math.max(-range, Math.min(range, semitones));
  return Math.round(8192 + (clamped / range) * 8191);
}

function nearestFromSet(target: number, pitchSet: number[] | undefined, fallback: number): number {
  if (!pitchSet?.length) return fallback;
  let best = fallback;
  let bestDist = Infinity;
  for (const pc of pitchSet) {
    for (let octave = -2; octave <= 2; octave++) {
      const cand = pc + 12 * (Math.round((target - pc) / 12) + octave);
      const d = Math.abs(cand - target);
      if (d < bestDist) {
        bestDist = d;
        best = cand;
      }
    }
  }
  return best;
}

/**
 * Turn one written attack plus its articulation stack into the notes and CC
 * messages the Faust physical model actually receives.
 *
 * The `expression` dial scales everything continuous: at 0 the note is played
 * as written with no ornament, no bend and no CC shaping; at 1 every gesture is
 * realized at full depth. 0.5 is "as the genre intends".
 */
export function realizeArticulation(req: ArticulationRequest): Realization {
  const {
    specs, profile, midi, velocity, lengthBeats, gapBeats,
    secPerBeat, time, expression, seed, pitchSet,
  } = req;
  const range = req.bendRangeSemitones ?? 2;
  const depth = Math.max(0, Math.min(1, expression));

  let durationScale = 1;
  let velocityScale = 1;
  let onsetMs = 0;
  let gapFill: number | undefined;
  let maxBeats: number | undefined;
  let presetTag: string | undefined;
  let fidelity: Fidelity = 'faithful';
  const caveats: string[] = [];

  const bends: BendPoint[] = [];
  const envelopes: CcEnvelope[] = [];
  let reiteration: ReiterationSpec | undefined;
  let grace: GraceSpec | undefined;

  for (const spec of specs) {
    if (spec.durationScale !== undefined) durationScale *= lerpTo1(spec.durationScale, depth);
    if (spec.velocityScale !== undefined) velocityScale *= lerpTo1(spec.velocityScale, depth);
    if (spec.onsetMs !== undefined) onsetMs += spec.onsetMs * depth;
    if (spec.gapFill !== undefined) gapFill = gapFill === undefined ? spec.gapFill : Math.max(gapFill, spec.gapFill);
    if (spec.maxBeats !== undefined) maxBeats = maxBeats === undefined ? spec.maxBeats : Math.min(maxBeats, spec.maxBeats);
    if (spec.presetTag) presetTag = spec.presetTag;
    if (spec.bend) bends.push(...spec.bend);
    if (spec.cc) envelopes.push(...spec.cc);
    if (spec.reiteration) reiteration = spec.reiteration;
    if (spec.grace) grace = spec.grace;
    if (FIDELITY_RANK[spec.fidelity] > FIDELITY_RANK[fidelity]) fidelity = spec.fidelity;
    if (spec.caveat) caveats.push(spec.caveat);
  }

  /* ---- sounding length -------------------------------------------------- */
  let beats = lengthBeats * durationScale;
  if (gapFill !== undefined) beats = Math.min(Math.max(beats, gapBeats * gapFill * 0.55), gapBeats * gapFill);
  if (maxBeats !== undefined) beats = Math.min(beats, maxBeats);
  if (profile.sustain === 'decaying') beats = Math.min(beats, profile.ring);
  if (profile.sustain === 'percussive') beats = Math.min(beats, 0.4);
  beats = Math.max(0.03, beats);

  const durSeconds = beats * secPerBeat;
  const onset = time + (onsetMs * depth) / 1000;
  const vel = Math.max(1, Math.min(127, Math.round(velocity * velocityScale)));

  const notes: RealizedNote[] = [];
  const ccs: RealizedCc[] = [];

  /* ---- grace notes ------------------------------------------------------ */
  if (grace && depth > 0.15) {
    const lead = grace.leadBeats * (0.5 + depth * 0.7);
    grace.offsets.forEach((offset, i) => {
      const raw = midi + offset;
      const resolved = grace.diatonic ? nearestFromSet(raw, pitchSet, raw) : raw;
      const step = grace.offsets.length > 1 ? (i / (grace.offsets.length - 1)) : 0;
      notes.push({
        time: onset - (lead - step * lead * 0.8) * secPerBeat,
        durSeconds: Math.max(0.02, lead * 0.5 * secPerBeat),
        midi: foldToRange(resolved, profile),
        velocity: Math.max(1, Math.round(vel * grace.velocity * (0.7 + depth * 0.5))),
        ornament: true,
      });
    });
  }

  /* ---- pitch bend ------------------------------------------------------- */
  let pitchBend: RealizedNote['pitchBend'];
  if (bends.length && depth > 0.1) {
    const merged = bends
      .slice()
      .sort((a, b) => a.at - b.at)
      .map(p => ({
        offset: Math.max(0, Math.min(0.99, p.at)) * durSeconds,
        value: bendValue(p.semitones * depth, range),
      }));
    // Always return the wheel to centre so the next note on this channel is in tune.
    if (merged[merged.length - 1].value !== 8192) {
      merged.push({ offset: durSeconds * 0.995, value: 8192 });
    }
    if (merged[0].offset > 0.001) merged.unshift({ offset: 0, value: 8192 });
    pitchBend = merged;
  }

  /* ---- the written note, or its reiteration ---------------------------- */
  if (reiteration && reiteration.count > 1 && depth > 0.2) {
    const count = Math.max(2, Math.round(reiteration.count * (0.45 + depth * 0.75)));
    const cycle = reiteration.pitchCycle ?? [0];
    for (let i = 0; i < count; i++) {
      const t =
        reiteration.distribution === 'front'
          ? Math.pow(i / count, 1.6) * 0.45
          : reiteration.distribution === 'accelerate'
            ? 1 - Math.pow(1 - i / count, 1.7)
            : i / count;
      const offsetPc = cycle[i % cycle.length];
      const raw = midi + offsetPc;
      notes.push({
        time: onset + t * durSeconds,
        durSeconds: Math.max(0.025, (durSeconds / count) * 0.92),
        midi: foldToRange(offsetPc === 0 ? midi : nearestFromSet(raw, pitchSet, raw), profile),
        velocity: Math.max(1, Math.round(vel * Math.pow(reiteration.decay, i) * (i === 0 ? 1 : 0.94))),
        pitchBend: i === 0 ? pitchBend : undefined,
        ornament: i > 0,
      });
    }
  } else {
    notes.push({ time: onset, durSeconds, midi, velocity: vel, pitchBend });
  }

  /* ---- CC envelopes ----------------------------------------------------- */
  for (const env of envelopes) {
    const sorted = env.points.slice().sort((a, b) => a.at - b.at);
    for (const point of sorted) {
      // At expression 0 the envelope collapses to the neutral resting value so
      // the dial genuinely turns the behaviour off rather than halving it.
      const neutral = env.cc === 11 ? 127 : env.cc === 74 ? 64 : 0;
      ccs.push({
        time: onset + Math.max(0, Math.min(1, point.at)) * durSeconds,
        cc: env.cc,
        value: Math.max(0, Math.min(127, Math.round(neutral + (point.value - neutral) * depth))),
      });
    }
    // Restore the neutral value just after the note so the envelope does not
    // leak onto whatever the channel plays next.
    ccs.push({
      time: onset + durSeconds + 0.004,
      cc: env.cc,
      value: env.cc === 11 ? 127 : env.cc === 74 ? 64 : 0,
    });
  }

  // A hair of stochastic variation on repeated strokes; without it rolls and
  // rasgueados read as a machine gun rather than a hand.
  if (notes.length > 2) {
    notes.forEach((n, i) => {
      if (!n.ornament) return;
      const jitter = (rand01(seed ^ (i * 2654435761)) - 0.5) * 0.008;
      n.time += jitter;
      n.velocity = Math.max(1, Math.min(127, Math.round(n.velocity * (0.94 + rand01(seed + i) * 0.14))));
    });
  }

  return { notes, ccs, presetTag, fidelity, caveats: Array.from(new Set(caveats)) };
}

/** Scale a multiplier toward 1 as the expression dial closes. */
function lerpTo1(value: number, depth: number): number {
  return 1 + (value - 1) * depth;
}

/**
 * A machine-readable statement of what the pipeline can and cannot render.
 * Consumed by the validator and by the style inspector.
 */
export function articulationCapabilityReport(): {
  primitive: RealizationPrimitive;
  available: boolean;
  note: string;
}[] {
  return [
    { primitive: 'note-length', available: true, note: 'Gate length is fully under engine control.' },
    { primitive: 'velocity', available: true, note: 'Selects the sample layer; range depends on how many layers the bank provides.' },
    { primitive: 'onset-offset', available: true, note: 'Sub-millisecond scheduling against the audio clock.' },
    { primitive: 'extra-notes', available: true, note: 'Unlimited, but each costs a voice; dense rolls can exhaust polyphony on mobile banks.' },
    { primitive: 'pitch-bend', available: true, note: 'Channel-wide and limited to the bend range (±2 semitones unless RPN 0 is set). Two parts cannot bend independently on one channel.' },
    { primitive: 'cc-automation', available: true, note: 'CC1/CC7/CC11/CC64/CC74 are honoured. Vibrato rate and filter resonance are fixed by the bank.' },
    { primitive: 'preset-swap', available: true, note: 'Bank/program change only, and only where the directory actually contains the alternate articulation.' },
  ];
}
