import { Sheet } from '../generators/arrange';
import { Region } from '../../types';
import { PATTERNS_BY_ID } from '../../data/genres';
import { VoiceProfile } from '../theory/instrumentProfile';
import { beatsPerBarOf, culturalCyclePosition, type TransitionEvent } from './grid';
import { getEffectiveBpm } from '../generators/arrange';
import { getResolvedSectionStyle } from '../generators/arrange';
import { energyOf } from '../metadata/energy';
import { BlendReport } from '../generators/blend';

/* --- event model ---------------------------------------------------------- */

export interface PitchBendPoint {
  /** seconds after note-on at which this bend value is sent */
  offset: number;
  /** MIDI pitch-bend value, 0..16383; 8192 is center */
  value: number;
}

export interface PerfNote {
  /** seconds from the start of the song */
  time: number;
  /** seconds */
  dur: number;
  midi: number;
  /** Composition-layer target frequency; keeps live/offline renderers on the same tuning. */
  frequencyHz?: number;
  /** Optional MIDI 0xE0 pitch-bend trajectory, scheduled relative to note-on. */
  pitchBend?: PitchBendPoint[];
  /** 1..127 */
  vel: number;
  trackId: string;
  bar: number;
  drum?: boolean;
  /** Resolved instrument gesture. Numeric so playback cannot make semantic choices. */
  gestureCode: number;
  /** Instrument-independent rhythmic intent. */
  hitFunctionCode: number;
  /** Resolved accent strength from the song/section groove plan. */
  accent: number;
  /** Precompiled bellows movement: 1 opening, 2 closing. */
  bellowsDirectionCode?: 1 | 2;
  /** 0 = authored rhythm attack, 1 = compiler-derived phrase fill/ornament. */
  originCode?: 0 | 1;
}

export interface PerfCC {
  time: number;
  trackId: string;
  cc: number;
  /** 0..127 */
  value: number;
}

export interface BarTime {
  index: number;
  start: number;
  end: number;
  bpm: number;
  beatsPerBar: number;
  regionId: string;
}

export interface Performance {
  notes: PerfNote[];
  ccs: PerfCC[];
  bars: BarTime[];
  duration: number;
  /** seconds of tail to let ring after the last note */
  tail: number;
  /** `trackId|regionId` -> what the guest lens did, for the inspector. */
  blends: Record<string, BlendReport>;
  /** The active genre ID for offline rendering style matching */
  worldId?: string;
  trackInfo?: Record<string, { instrumentId: string; role?: string }>;
}

export interface CompileOptions {
}

/* --- meter and grid ------------------------------------------------------- */

export { sliceBarNative, beatsPerBarOf } from './grid';
export type { NativeSlice } from './grid';

/* --- tempo map ------------------------------------------------------------ */

export function buildBarTimes(sheet: Sheet): BarTime[] {
  const beatsPerBar = beatsPerBarOf(sheet.timeSignature);
  const bars: BarTime[] = [];
  let t = 0;
  sheet.measures.forEach((m, i) => {
    const { bpm } = getEffectiveBpm(sheet, m.regionId);
    const safeBpm = Math.max(20, Math.min(400, bpm || 110));
    const dur = (beatsPerBar * 60) / safeBpm;
    bars.push({ index: i, start: t, end: t + dur, bpm: safeBpm, beatsPerBar, regionId: m.regionId });
    t += dur;
  });
  return bars;
}

/* --- section intensity ---------------------------------------------------- */

const INTENSITY_LEVEL: Record<string, number> = {
  low: 0.3, medium: 0.55, high: 0.78, peak: 1.0,
};

export function intensityOf(region: Region | undefined): number {
  return INTENSITY_LEVEL[String(region?.intensity ?? 'medium')] ?? 0.55;
}

export function thinForSustain(
  prof: VoiceProfile,
  attacks: { beatInBar: number; accent: number }[],
  beatsPerBar: number,
  intensity: number,
  prevLastKeptBeat?: number,
): boolean[] {
  const keep = attacks.map(() => true);
  if (prof.sustain !== 'sustained' && prof.sustain !== 'blown') return keep;

  const padLike = prof.role === 'pad' || prof.ring >= 4;
  const minGap = padLike
    ? (intensity > 0.8 ? beatsPerBar / 2 : beatsPerBar)
    : prof.sustain === 'blown' ? 0.5 : 1.0;

  let lastKept = prevLastKeptBeat !== undefined ? prevLastKeptBeat : -Infinity;
  attacks.forEach((a, i) => {
    if (a.beatInBar - lastKept + 1e-6 >= minGap || (prevLastKeptBeat === undefined && i === 0)) {
      lastKept = a.beatInBar;
    } else {
      keep[i] = false;
    }
  });
  return keep;
}

function energyForRegion(region: Region): 1 | 2 | 3 | 4 | 5 {
  return energyOf(region);
}

function authoredTransitionPattern(style: any, worldId: string, role: string): any | undefined {
  if (!style?.contract?.transitionGrammar?.authoredPriority) return undefined;
  const candidates = Object.values(PATTERNS_BY_ID) as any[];
  return candidates
    .filter(p => p.worldId === worldId)
    .filter(p => p.category === 'fill' || p.category === 'transition' || p.tags?.some((t: string) => /fill|transition/i.test(t)))
    .filter(p => !p.roles?.length || p.roles.includes(role) || (role === 'percussion' && p.roles.includes('drums')))
    .filter(p => !style.patterns?.allowed?.length || style.patterns.allowed.includes(p.id))
    .sort((a, b) => {
      const af = a.category === 'fill' || a.tags?.some((t: string) => /fill/i.test(t)) ? 1 : 0;
      const bf = b.category === 'fill' || b.tags?.some((t: string) => /fill/i.test(t)) ? 1 : 0;
      return bf - af;
    })[0];
}

export function buildTransitionEvents(sheet: Sheet): Map<number, TransitionEvent> {
  const out = new Map<number, TransitionEvent>();
  for (let i = 0; i < sheet.regions.length - 1; i++) {
    const current = sheet.regions[i];
    const next = sheet.regions[i + 1];
    const style = getResolvedSectionStyle(sheet, current);
    const fromEnergy = energyForRegion(current);
    const toEnergy = energyForRegion(next);
    if (fromEnergy === toEnergy) continue;
    const grammar = style.contract.transitionGrammar;
    const type = (toEnergy > fromEnergy ? grammar.onEnergyRise : grammar.onEnergyFall) ??
      (toEnergy > fromEnergy ? 'fill' : 'drop-out');
    if (!grammar.types.includes(type)) continue;
    const cycleLength = Math.max(1, Math.round(style.contract.cycleLength || 1));
    const finalStart = Math.max(current.start, current.end - cycleLength);
    const roles = Array.from(new Set(['drums', 'percussion', 'bass', 'harmony', 'comp', 'lead', 'texture', 'pad', 'voice', ...(sheet.tracks ?? []).map(t => t.role)]));
    const authoredByRole: Record<string, string | undefined> = {};
    if (type === 'fill') {
      for (const r of roles) {
        const p = authoredTransitionPattern(style, current.genre ?? sheet.worldId, r);
        if (p) authoredByRole[r] = p.id;
      }
    }
    const authored = authoredByRole['drums'] ?? (type === 'fill'
      ? authoredTransitionPattern(style, current.genre ?? sheet.worldId, 'drums')?.id
      : undefined);
    const bar = current.end - 1;
    if (bar < finalStart) continue;
    {
      out.set(bar, {
        type,
        fromEnergy,
        toEnergy,
        cyclePosition: culturalCyclePosition(bar - current.start, cycleLength),
        cycleLength,
        authored: Object.keys(authoredByRole).length > 0 || !!authored,
        patternId: authoredByRole['drums'] ?? authored,
        authoredByRole,
      });
    }
  }
  return out;
}

/** True when the next section is heavier than this one. */
export function isBuildSection(regions: Region[], region: Region): boolean {
  const i = regions.findIndex(r => r.id === region.id);
  const next = regions[i + 1];
  return !!next && energyOf(next) > energyOf(region);
}
