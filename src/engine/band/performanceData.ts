import { Sheet } from '../sheet/sheet.ts';
import type { Region } from '../../types';
import { beatsPerBarOf } from '../sheet/grid.ts';
import { getEffectiveBpm } from '../sheet/sheet.ts';
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
  /** Written contact survives generic articulation (e.g. accent + muted head). */
  sourceHit?: string;
  notationEventId?: string;
  /** Written quarter-note beats, before groove/roll displacement. */
  notation?: { bar?: number; beat: number; durationBeats: number };
  /** Absolute score pitches must never acquire automatic register changes. */
  exactPitch?: boolean;
  tuningCents?: number;
  /** A tonic-relative phrase keeps this tuning root through chord changes. */
  tuningRootPc?: number;
  /** Musical attack and phrase ownership, shared by all tones of a voicing/roll. */
  attackId?: string;
  phraseId?: string;
  /** Preserve the performing section's sound identity across the engine boundary. */
  soundContext?: { worldId: string; styleId: string; role: string };
  /** Harmony active at the written attack, including changes within a bar. */
  harmonicChord?: string;
  /** seconds from the start of the song */
  time: number;
  /** seconds */
  dur: number;
  midi: number;
  /** Composition-layer target frequency; keeps live/offline renderers on the same tuning. */
  frequencyHz?: number;
  /** Optional MIDI 0xE0 pitch-bend trajectory, scheduled relative to note-on. */
  pitchBend?: PitchBendPoint[];
  /** Symmetric trajectory range; existing/imported MIDI bends default to two semitones. */
  pitchBendRangeSemitones?: number;
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
  /** Self-contained technique names for worker/serialization boundaries. */
  gestureNames?: Record<number, string>;
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
    if (!Number.isFinite(bpm) || bpm <= 0) throw new Error(`Invalid authored tempo at measure ${i + 1}: ${bpm}`);
    const dur = (beatsPerBar * 60) / bpm;
    bars.push({ index: i, start: t, end: t + dur, bpm, beatsPerBar, regionId: m.regionId });
    t += dur;
  });
  return bars;
}

/* --- section intensity ---------------------------------------------------- */

export function intensityOf(region: Region): number {
  if (!region.intensity) throw new Error(`Section ${region.id} has no authored intensity`);
  const intensity = INTENSITY_LEVEL[String(region.intensity)];
  if (intensity === undefined) throw new Error(`Section ${region.id} has an unknown intensity: ${region.intensity}`);
  return intensity;
}

/** True when the next section is heavier than this one. */
export function isBuildSection(regions: Region[], region: Region): boolean {
  const i = regions.findIndex(r => r.id === region.id);
  const next = regions[i + 1];
  return !!next && energyOf(next) > energyOf(region);
}
