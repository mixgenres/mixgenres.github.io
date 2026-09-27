import type { ResolvedStyle } from '../../data/styles/schema';

import { rand01 } from './groove';
import { INSTRUMENTS_BY_ID, type DrumVoice } from '../../data/instruments';
import { findKitComponent, type RhythmicIntent } from '../performance/musicSemantics';
import type { TransitionEvent } from '../sequencing/grid';

export interface RhythmStep {
  time: number;
  velocity: number;
  kick?: boolean;
  snare?: boolean;
  hihat?: boolean;
  isOpen?: boolean;
  isPedal?: boolean;
  ghosts?: { time: number; velocity: number }[];
  [key: string]: any;
}

export interface RhythmContext {
  grid: RhythmStep[];
  genre?: any;
  instrument?: any;
  [key: string]: any;
}

export interface AcousticEvent {
  type: string;
  velocity: number;
  time: number;
  [key: string]: any;
}

export class DrumGenerator {
  public createDrumHit(type: string, velocity: number, time: number): AcousticEvent {
    return { type, velocity, time };
  }

  public generateGroove(context: RhythmContext): AcousticEvent[] {
    const events: AcousticEvent[] = [];
    const drumRules = context?.songStyle?.drumRules || context?.genre?.drumRules || context?.instrument?.definition?.drumRules;

    const stickState = {
      lastSnareHitTime: -1,
      lastKickTime: -1,
      lastHihatTime: -1,
    };

    if (drumRules && typeof drumRules.evaluateStep === 'function') {
      for (const step of context.grid || []) {
        const evaluated = drumRules.evaluateStep(step, stickState);
        events.push(...evaluated);

        if (step.snare) stickState.lastSnareHitTime = step.time;
        if (step.kick) stickState.lastKickTime = step.time;
        if (step.hihat) stickState.lastHihatTime = step.time;
        if (step.ghosts && step.ghosts.length > 0) {
          stickState.lastSnareHitTime = step.ghosts[step.ghosts.length - 1].time;
        }
      }
      return events;
    }

    for (const step of context.grid || []) {
      if (step.kick) {
        events.push(this.createDrumHit('kick', step.velocity, step.time));
        stickState.lastKickTime = step.time;
      }

      if (step.snare) {
        events.push(this.createDrumHit('snare', step.velocity, step.time));
        if (step.velocity > 90) {
          events.push(this.createDrumHit('snare_rimshot', step.velocity, step.time));
        } else if (step.velocity < 50) {
          events.push(this.createDrumHit('snare_ghost', step.velocity, step.time));
        }
        stickState.lastSnareHitTime = step.time;
      }

      if (step.hihat) {
        let hatType = 'hihat_closed';
        if (step.isOpen) hatType = 'hihat_open';
        else if (step.isPedal) hatType = 'hihat_pedal';
        else if (step.velocity < 60) hatType = 'hihat_tip';
        else hatType = 'hihat_shank';

        events.push(this.createDrumHit(hatType, step.velocity, step.time));
        stickState.lastHihatTime = step.time;
      }

      if (step.ghosts) {
        step.ghosts.forEach(g => events.push(this.createDrumHit('snare_ghost', g.velocity, g.time)));
      }
    }

    return events;
  }
}

export const GM = {
  kick: 36, kickTight: 35,
  snare: 38, snareRim: 37, snareElectric: 40,
  clap: 39,
  hatClosed: 42, hatPedal: 44, hatOpen: 46,
  crash: 49, crash2: 57, ride: 51, rideBell: 53, splash: 55, china: 52,
  tomLow: 41, tomLowMid: 45, tomMid: 47, tomHighMid: 48, tomHigh: 50,
  cowbell: 56, tambourine: 54,
  sticks: 31,
} as const;

export type KitLimb = 'kick' | 'snare' | 'ghost' | 'hat' | 'openHat' | 'ride' | 'crash' | 'tom' | 'rim';

export interface KitVoicing {
  key: number;
  limb: KitLimb;
  gain: number;
  flamMs?: number;
  /** Authored stroke/effect id forwarded to the physical renderer when a kit has named components. */
  articulation?: string;
}

export interface KitContext {
  /** position of this hit in beats from the start of the bar */
  beatInBar: number;
  beatsPerBar: number;
  /** the pattern's authored accent for this hit, 0..1 */
  accent: number;
  /** all the onsets in this bar, in beats — so a limb can see the whole groove */
  barOnsets: number[];
  /** which of them this is */
  index: number;
  /** 0..1 */
  intensity: number;
  /** bar's position within its 4-bar phrase */
  barInPhrase: number;
  /** first bar of a section */
  sectionStart: boolean;
  /** last bar of a section */
  sectionEnd: boolean;
  /** last bar of a 4-bar phrase */
  phraseEnd: boolean;
  /** brushes, electronic kit, etc */
  flavour: KitFlavour;
  /** World-contract gates; never inferred from a genre label. */
  allowTomFills: boolean;
  allowSectionCrash: boolean;
  forbidBackbeat: boolean;
  /** prefers the ride over the hats — jazz, swing, ballads, solos */
  rideFeel: boolean;
  seed: number;
  transition?: TransitionEvent;
  /** Contract-resolved behavioral approach. */
  approach?: string;
}

export type KitFlavour = 'acoustic' | 'brush' | 'electronic' | 'roomy';

function isBackbeat(beat: number, beatsPerBar: number): boolean {
  const eps = 0.12;
  if (beatsPerBar >= 4) {
    return Math.abs(beat - 1) < eps || Math.abs(beat - 3) < eps;
  }
  if (beatsPerBar === 3) return Math.abs(beat - 1) < eps;
  if (beatsPerBar === 6) return Math.abs(beat - 2) < eps || Math.abs(beat - 4) < eps;
  return Math.abs(beat - Math.floor(beatsPerBar / 2)) < eps;
}

function isDownbeat(beat: number): boolean {
  return beat < 0.12;
}

function onBeat(beat: number): boolean {
  return Math.abs(beat - Math.round(beat)) < 0.12;
}

/**
 * Decide what one hit of a drum pattern actually is.
 */
export function kitVoicing(c: KitContext): KitVoicing {
  const b = c.beatInBar;
  const strong = c.accent;

  /* A drop-out is an authored transition instruction, not a velocity cue.
     Suppress kick generation while leaving the rest of the kit intact. */
  if (c.transition?.type === 'drop-out' && c.transition.cyclePosition === c.transition.cycleLength - 1 && isDownbeat(b)) {
    return { key: GM.kick, limb: 'kick', gain: 0 };
  }

  /* ---- fills take over the bar entirely -------------------------------- */
  const fillZone = c.allowTomFills ? fillStartBeat(c) : null;
  if (fillZone !== null && b >= fillZone) {
    return fillHit(c, b, fillZone);
  }

  /* ---- a crash announces a new section --------------------------------- */
  if (c.allowSectionCrash && c.sectionStart && isDownbeat(b)) {
    return { key: c.flavour === 'electronic' ? GM.crash2 : GM.crash, limb: 'crash', gain: 1.15 };
  }

  /* ---- the kick: downbeats and the loud structural hits ---------------- */
  if (isDownbeat(b) || (strong >= 0.86 && !isBackbeat(b, c.beatsPerBar))) {
    return { key: c.flavour === 'electronic' ? GM.kickTight : GM.kick, limb: 'kick', gain: 1.0 };
  }

  /* ---- the snare: backbeats, with everything near them ghosted --------- */
  if (!c.forbidBackbeat && isBackbeat(b, c.beatsPerBar)) {
    if (c.flavour === 'brush') return { key: GM.snareRim, limb: 'snare', gain: 0.92 };
    const flam = c.intensity > 0.8 && rand01(c.seed ^ 0x3a) > 0.88 ? 22 : undefined;
    return {
      key: c.flavour === 'electronic' ? GM.snareElectric : GM.snare,
      limb: 'snare',
      gain: 1.0,
      flamMs: flam,
    };
  }

  /* ---- ghost notes ------------------------------------------------------
     The quiet snare hits just before and after a backbeat. They are the
     reason a funk or hip-hop groove breathes instead of ticking. */
  const nearBackbeat = distanceToBackbeat(b, c.beatsPerBar);
  if (nearBackbeat > 0 && nearBackbeat <= 0.5 && strong < 0.55 && c.intensity > 0.35) {
    if (rand01(c.seed) > 0.42) {
      return { key: GM.snare, limb: 'ghost', gain: 0.18 + rand01(c.seed ^ 0x11) * 0.10 };
    }
  }

  if (c.rideFeel) {
    if (onBeat(b) && strong > 0.8) return { key: GM.rideBell, limb: 'ride', gain: 0.85 };
    return { key: GM.ride, limb: 'ride', gain: onBeat(b) ? 0.76 : 0.58 };
  }

  const toNextBeat = Math.ceil(b + 1e-6) - b;
  const opensHere = toNextBeat <= 0.3 && !onBeat(b) && strong > 0.6 && c.intensity > 0.45;
  if (opensHere && rand01(c.seed ^ 0x7c) > 0.55) {
    return { key: GM.hatOpen, limb: 'openHat', gain: 0.78 };
  }
  if (c.flavour === 'brush') {
    return { key: GM.hatPedal, limb: 'hat', gain: onBeat(b) ? 0.66 : 0.48 };
  }
  return {
    key: GM.hatClosed,
    limb: 'hat',
    gain: onBeat(b) ? 0.74 : 0.54 + rand01(c.seed ^ 0x55) * 0.12,
  };
}

function distanceToBackbeat(beat: number, beatsPerBar: number): number {
  const points = beatsPerBar >= 4 ? [1, 3] : beatsPerBar === 3 ? [1] : [Math.floor(beatsPerBar / 2)];
  let best = Infinity;
  for (const p of points) best = Math.min(best, Math.abs(beat - p));
  return best;
}

function fillStartBeat(c: KitContext): number | null {
  if (c.sectionEnd) return Math.max(0, c.beatsPerBar - (c.intensity > 0.7 ? 4 : 2));
  if (c.phraseEnd && c.barInPhrase === 3) {
    if (rand01(c.seed ^ 0x9d1) > 0.55 - c.intensity * 0.25) {
      return c.beatsPerBar - 1;
    }
  }
  return null;
}

function fillHit(c: KitContext, beat: number, from: number): KitVoicing {
  const span = Math.max(0.5, c.beatsPerBar - from);
  const through = Math.min(1, Math.max(0, (beat - from) / span));
  // Exponential / power crescendo towards beat 1 of the next bar
  const crescendoGain = 0.45 + Math.pow(through, 1.4) * 0.72;

  // Identify our index in the fill
  const fillOnsets = c.barOnsets.filter(b => b >= from);
  const fillIndex = fillOnsets.indexOf(beat) >= 0 ? fillOnsets.indexOf(beat) : 0;
  const isFinalHitInBar = fillIndex === fillOnsets.length - 1 || beat >= c.beatsPerBar - 0.28;

  const isElectronic = c.flavour === 'electronic';

  if (isElectronic) {
    const isSnareRoll = (c.seed & 1) === 0;
    if (isSnareRoll) {
      const snareKey = GM.snareElectric;
      return {
        key: snareKey,
        limb: 'snare',
        gain: isFinalHitInBar ? 1.15 : crescendoGain,
        flamMs: isFinalHitInBar ? 18 : undefined,
      };
    } else {
      return {
        key: GM.hatClosed,
        limb: 'hat',
        gain: isFinalHitInBar ? 1.1 : crescendoGain + (fillIndex % 2 === 0 ? 0.15 : 0),
      };
    }
  } else {
    // Acoustic & Brush rudiments mathematically building into the downbeat
    const rudimentSeed = (c.seed ^ 0x3b1c) % 3;
    if (isFinalHitInBar) {
      // Final fill onset before beat 1: flam crescendo hit directly pulling into the crash
      return { key: GM.snare, limb: 'snare', gain: 1.18, flamMs: 22 };
    }
    if (rudimentSeed === 0) {
      const stepInCell = fillIndex % 3;
      if (stepInCell === 0) {
        return { key: GM.snare, limb: 'snare', gain: crescendoGain * 1.05 };
      } else {
        return { key: GM.kick, limb: 'kick', gain: crescendoGain * 0.9 };
      }
    } else if (rudimentSeed === 1) {
      const stepInCell = fillIndex % 3;
      if (stepInCell === 0) {
        return { key: GM.snare, limb: 'snare', gain: crescendoGain * 1.0 };
      } else if (stepInCell === 1) {
        return { key: GM.tomHigh, limb: 'tom', gain: crescendoGain * 0.95 };
      } else {
        return { key: GM.tomMid, limb: 'tom', gain: crescendoGain * 0.92 };
      }
    } else {
      const stepInCell = fillIndex % 3;
      if (stepInCell === 0) {
        return { key: GM.snare, limb: 'snare', gain: crescendoGain * 1.1, flamMs: 15 };
      } else if (stepInCell === 1) {
        return { key: GM.snare, limb: 'ghost', gain: Math.min(0.45, crescendoGain * 0.5) };
      } else {
        return { key: GM.snare, limb: 'ghost', gain: Math.min(0.42, crescendoGain * 0.45) };
      }
    }
  }
}

export interface HandPercContext {
  instrumentId?: string;
  styleId?: string;
  beatInBar?: number;
  beatsPerBar?: number;
  onsetIndex?: number;
  barInPhrase?: number;
}

export function handPercVoicing(
  drum: DrumVoice,
  accent: number,
  intensity: number,
  seed: number,
  hitType?: string,
  context: HandPercContext = {},
): KitVoicing {
  // Authored stroke names are preserved for hand percussion. Prefer the
  // instrument's own kit component over a copied GM/MIDI number. This is the
  // key distinction between a conga heel, a bongo finger tap, a timbale cáscara,
  // a tabla dayan stroke, etc.
  if (hitType) {
    const h = hitType.toLowerCase();
    const intent: RhythmicIntent = /heel/.test(h) ? 'ghost'
      : /toe|tap/.test(h) ? 'offbeat'
      : /bell|campana/.test(h) ? 'bell'
      : /rim|cascara|edge/.test(h) ? 'rim'
      : /slap|tapao|quinto|macho-slap/.test(h) ? 'slap'
      : /open|abierto/.test(h) ? 'open'
      : /low|bass|tumba|bayan-ghe/.test(h) ? 'low'
      : /roll|buzz|redoble/.test(h) ? 'roll'
      : /scrape|guacharaca/.test(h) ? 'scrape'
      : 'backbeat';
    const component = context.instrumentId ? findKitComponent(context.instrumentId, intent) : undefined;
    if (component) {
      const limb: KitLimb = intent === 'rim' || intent === 'bell' || intent === 'offbeat' ? 'rim'
        : intent === 'low' ? 'kick'
        : intent === 'ghost' ? 'ghost'
        : 'snare';
      const gain = intent === 'ghost' ? 0.40 + accent * 0.16 : 0.68 + accent * 0.30;
      return { key: component.midi, limb, gain: Math.min(1.18, gain), flamMs: intent === 'slap' && accent > 0.84 ? 8 : undefined, articulation: component.id };
    }

    // For instruments without authored multi-component kits, honor the stroke
    // semantically using the instrument's own low/mid/high physical keys.
    if (intent === 'low' || intent === 'ghost') return { key: drum.low, limb: 'ghost', gain: intent === 'ghost' ? 0.42 : 0.62 };
    if (intent === 'rim' || intent === 'bell' || intent === 'slap' || intent === 'open') return { key: drum.high, limb: 'snare', gain: Math.min(1.05, 0.82 + accent * 0.2) };
    return { key: drum.mid, limb: 'hat', gain: 0.66 + accent * 0.2 };
  }
  // When a pattern does not name a stroke, use the instrument's physical
  // vocabulary rather than collapsing the whole hand-drum family onto one MIDI key.
  // The selectors are deliberately coarse: they shape the part without pretending
  // to encode every regional hand technique.
  const instrumentId = context.instrumentId ?? '';
  const inst = instrumentId.toLowerCase();
  const style = (context.styleId ?? '').toLowerCase();
  const kit = INSTRUMENTS_BY_ID[instrumentId]?.kitComponents ?? [];
  const componentFor = (pattern: RegExp): { midi: number; id: string } | undefined => {
    const component = kit.find(c => pattern.test(c.id) || pattern.test(c.name.toLowerCase()));
    return component ? { midi: component.midi, id: component.id } : undefined;
  };
  const componentKey = (pattern: RegExp, fallback: number): number => componentFor(pattern)?.midi ?? fallback;
  const componentId = (pattern: RegExp): string | undefined => componentFor(pattern)?.id;
  const beat = context.beatInBar ?? 0;
  const onset = context.onsetIndex ?? 0;
  const phraseBar = context.barInPhrase ?? 0;
  const beats = context.beatsPerBar ?? 4;
  const latinHandStyle = /salsa|timba|son|rumba|bachata|cumbia|latin/i.test(style);

  if (!hitType && inst.includes('conga') && latinHandStyle) {
    const frac = ((beat % 1) + 1) % 1;
    if (accent >= 0.9) return { key: componentKey(/quinto.*slap/, 60), limb: 'snare', gain: 0.98, articulation: componentId(/quinto.*slap/) }; // quinto-style slap
    if (Math.abs(frac - 0.5) < 0.08) return { key: componentKey(/slap-tapao|muted.*slap|tapao/, 63), limb: 'snare', gain: 0.66 + accent * 0.2, articulation: componentId(/slap-tapao|muted.*slap|tapao/) }; // tapao / muted slap
    if (Math.abs(beat - Math.round(beat)) < 0.1 && Math.round(beat) % 2 === 0) return { key: componentKey(/tumba.*open|low.*tone/, 64), limb: 'snare', gain: 0.78 + accent * 0.18, articulation: componentId(/tumba.*open|low.*tone/) }; // low open tone
    return { key: (onset + phraseBar) % 3 === 0 ? componentKey(/heel/, 61) : componentKey(/conga-open|open.*tone/, 62), limb: 'ghost', gain: accent < 0.55 ? 0.38 : 0.58 + accent * 0.14, articulation: (onset + phraseBar) % 3 === 0 ? componentId(/heel/) : componentId(/conga-open|open.*tone/) }; // heel/toe/open blend
  }

  if (!hitType && inst.includes('timbale') && latinHandStyle) {
    const isOffbeat = Math.abs((beat % 1 + 1) % 1 - 0.5) < 0.11;
    const chorusBell = intensity > 0.72 && phraseBar >= 2 && onset % 4 === 0;
    if (chorusBell) return { key: componentKey(/mambo.*bell/, 67), limb: 'rim', gain: 0.9 + accent * 0.16, articulation: componentId(/mambo.*bell/) }; // bell color in higher-energy passages
    if (isOffbeat || accent < 0.58) return { key: componentKey(/cascara/, 68), limb: 'rim', gain: 0.56 + accent * 0.22, articulation: componentId(/cascara/) }; // cáscara shell tap
    return { key: onset % 2 === 0 ? componentKey(/macho.*open/, 66) : componentKey(/hembra.*open/, 65), limb: 'snare', gain: 0.72 + accent * 0.2, articulation: onset % 2 === 0 ? componentId(/macho.*open/) : componentId(/hembra.*open/) }; // macho/hembra head color
  }

  if (!hitType && inst.includes('bongo') && latinHandStyle) {
    if (accent >= 0.88) return { key: componentKey(/macho.*slap/, 60), limb: 'snare', gain: 0.92 + accent * 0.12, articulation: componentId(/macho.*slap/) };
    if (onset % 3 === 0) return { key: componentKey(/hembra.*open/, 61), limb: 'hat', gain: 0.66 + accent * 0.16, articulation: componentId(/hembra.*open/) };
    return { key: componentKey(/finger.*tap|martillo/, 62), limb: 'ghost', gain: accent < 0.5 ? 0.34 : 0.52 + accent * 0.12, articulation: componentId(/finger.*tap|martillo/) };
  }

  if (!hitType && inst.includes('cajon')) {
    const backbeat = beats >= 4 && (Math.abs(beat - 1) < 0.1 || Math.abs(beat - 3) < 0.1);
    if (accent >= 0.86 || backbeat) return { key: componentKey(/cajon.*slap/, 38), limb: 'snare', gain: 0.82 + accent * 0.2, articulation: componentId(/cajon.*slap/) };
    if (Math.abs(beat) < 0.12 || onset % 4 === 0) return { key: componentKey(/cajon.*bass/, 36), limb: 'kick', gain: 0.78 + accent * 0.18, articulation: componentId(/cajon.*bass/) };
    return { key: componentKey(/cajon.*tip/, 42), limb: 'ghost', gain: 0.36 + accent * 0.16, articulation: componentId(/cajon.*tip/) };
  }

  if (accent >= 0.88) return { key: drum.high, limb: 'snare', gain: 1.0 };
  if (accent <= 0.48) {
    return { key: drum.low, limb: 'ghost', gain: 0.34 + rand01(seed) * 0.14 };
  }
  const lean = rand01(seed ^ 0x2f1);
  if (lean > 0.82 && intensity > 0.6) return { key: drum.high, limb: 'snare', gain: 0.86 };
  if (lean < 0.16) return { key: drum.low, limb: 'ghost', gain: 0.52 };
  return { key: drum.mid, limb: 'hat', gain: 0.74 };
}

/* --- kit flavour ---------------------------------------------------------- */

export function flavourForStyle(style: ResolvedStyle, instrumentId: string): KitFlavour {
  if (instrumentId === 'brush-kit') return 'brush';
  const mode = style.contract.percussion.kitMode;
  const approach = style.contract.approaches?.[style.contract.percussion.kitMode === 'none' ? 'percussion' : 'drums'];
  if (approach?.id === 'drums') return instrumentId === 'brush-kit' ? 'brush' : (mode === 'none' ? 'acoustic' : style.contract.timbreSpace.production.toLowerCase().includes('machine') ? 'electronic' : 'acoustic');
  if (mode === 'none') return 'acoustic';
  if (style.contract.timbreSpace.production.toLowerCase().includes('machine')) return 'electronic';
  if (style.contract.form.some(x => /solo|head/i.test(x)) && style.contract.percussion.ride) return 'brush';
  return 'acoustic';
}

export function usesRideStyle(style: ResolvedStyle, sectionKind: string, intensity: number): boolean {
  if (!style.contract.percussion.ride) return false;
  return /solo|head|instrumental/i.test(sectionKind) || intensity > 0.78;
}

export function flavourFor(instrumentId: string, worldId: string): KitFlavour {
  if (instrumentId === 'brush_kit' || instrumentId === 'brush') return 'brush';
  if (['electronic', 'hip-hop', 'house-techno', 'house', 'drum-and-bass', 'reggaeton', 'reggaeton-dembow', 'industrial'].includes(worldId)) return 'electronic';
  if (['jazz', 'swing', 'fusion-ambient'].includes(worldId)) return 'brush';
  if (['folk', 'blues', 'country', 'gospel'].includes(worldId)) return 'roomy';
  return 'acoustic';
}

export function usesRide(worldId: string, sectionKind: string, intensity: number): boolean {
  if (['jazz', 'swing'].includes(worldId)) return true;
  if (['blues', 'fusion-ambient'].includes(worldId) && intensity < 0.8) return true;
  if (sectionKind === 'solo' && intensity > 0.6) return true;
  return false;
}


