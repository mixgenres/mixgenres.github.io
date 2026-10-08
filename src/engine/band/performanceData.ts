import { Sheet } from '../sheet/sheet.ts';
import type { MusicalPattern, Role } from '../../types';
import type { Region } from '../../types';
import { PATTERNS_BY_ID } from '../../data/genres';
import { beatsPerBarOf, culturalCyclePosition, type TransitionEvent } from '../sheet/grid.ts';
import { getEffectiveBpm } from '../sheet/sheet.ts';
import { getResolvedSectionStyle } from '../sheet/sheet.ts';
import { energyOf } from '../sheet/sectionEnergy.ts';
import { BlendReport } from './styleBlend.ts';
import { INTENSITY_LEVEL } from '../../data/performance/intensityLevels';

/* --- event model ---------------------------------------------------------- */

export interface PitchBendPoint {
  /** seconds after note-on at which this bend value is sent */
  offset: number;
  /** MIDI pitch-bend value, 0..16383; 8192 is center */
  value: number;
}

export interface PerfNote {
  /** Unpitched string/body actions retain MIDI only for interchange compatibility. */
  pitchIdentity?: 'pitched' | 'unpitched';
  /** A simultaneous body strike is owned once by the musical attack. */
  bodyAttack?: boolean;
  musicianNotation?: import('../../data/schema').PatternEvent['notation'];
  percussion?: import('../score/percussionNotation').NotatedDrum;
  notationEventId?: string;
  /** Written quarter-note beats, before groove/roll displacement. */
  notation?: { bar?: number; beat: number; durationBeats: number };
  /** Absolute score pitches must never acquire automatic register changes. */
  exactPitch?: boolean;
  tuningCents?: number;
  /** Musical attack and phrase ownership, shared by all tones of a voicing/roll. */
  attackId?: string;
  phraseId?: string;
  /** Preserve the performing section's sound identity across the engine boundary. */
  soundContext?: { worldId: string; styleId: string; role: string };
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
  /** Score-planned bellows movement: 1 opening, 2 closing. */
  bellowsDirectionCode?: 1 | 2;
  /** Physical Rheinische 142 button selected by the compiler (e.g. 1/1, 0/0, *). */
  bandoneonButtonId?: string;
  /** Stable 0..70 physical button index in the compiled Rheinische map. */
  bandoneonButtonIndex?: number;
  /** 1 = right/treble manual, 2 = left/bass manual. */
  bandoneonSideCode?: 1 | 2;
  /** 0 = authored rhythm attack, 1 = compiler-derived phrase fill/ornament. */
  originCode?: 0 | 1;
  /** Explicit score articulation; phrase development must preserve it. */
  authoredTechnique?: boolean;
  authoredPitch?: boolean;
  authoredDuration?: boolean;
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

export interface PerformancePhrase {
  id: string;
  trackId: string;
  regionId: string;
  startBar: number;
  endBar: number;
  start: number;
  end: number;
  soundContext: NonNullable<PerfNote['soundContext']>;
}

export interface Performance {
  pipeline?: import('../pipeline/compileSong').PipelineTrace;
  /** Playback events have passed through the explicit musician-score boundary. */
  scoreVersion?: 1;
  /** Immutable musical mix decisions shared by realtime and offline consumers. */
  mixTimeline?: import('../studio/dynamicMix/MixScene').MixSceneTimeline;
  /** Player-owned musical sentences, retained alongside their render events. */
  phrases?: PerformancePhrase[];
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

/* --- tempo map ------------------------------------------------------------ */

export function buildBarTimes(sheet: Sheet): BarTime[] {
  const beatsPerBar = beatsPerBarOf(sheet.timeSignature);
  const bars: BarTime[] = [];
  let t = 0;
  sheet.measures.forEach((m, i) => {
    const { bpm } = getEffectiveBpm(sheet, m.regionId);
    const safeBpm = Number.isFinite(bpm) && bpm > 0 ? bpm : 110;
    const dur = (beatsPerBar * 60) / safeBpm;
    bars.push({ index: i, start: t, end: t + dur, bpm: safeBpm, beatsPerBar, regionId: m.regionId });
    t += dur;
  });
  return bars;
}

/* --- section intensity ---------------------------------------------------- */

export function intensityOf(region: Region | undefined): number {
  return INTENSITY_LEVEL[String(region?.intensity ?? 'medium')] ?? 0.55;
}

function energyForRegion(region: Region): 1 | 2 | 3 | 4 | 5 {
  return energyOf(region);
}

function authoredTransitionPattern(style: import('../../data/styles/schema').ResolvedStyle, worldId: string, role: string): MusicalPattern | undefined {
  if (!style?.contract?.transitionGrammar?.authoredPriority) return undefined;
  const candidates = Object.values(PATTERNS_BY_ID);
  return candidates
    .filter(p => p.worldId === worldId)
    .filter(p => p.category === 'fill' || p.category === 'transition' || p.tags?.some((t: string) => /fill|transition/i.test(t)))
    .filter(p => !p.roles?.length || p.roles.includes(role as Role) || (role === 'percussion' && p.roles.includes('drums')))
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
