import type { ResolvedStyle } from '../../data/styles/schema';
import { resolveStyle } from '../../engine/style/resolve';
import { getCanonicalStyle } from '../../engine/style/registry';
import { contractForGenre } from '../../engine/style/contracts';
import { rand01, seedOf } from '../sheet/random.ts';
import type { GrooveRole } from '../sheet/instrumentRoles.ts';
export { rand01, randNorm, seedOf } from '../sheet/random.ts';
export type { GrooveRole } from '../sheet/instrumentRoles.ts';
export type SwingUnit = 8 | 16;

/** Coarse instrument job, used to decide who leans which way. */
export interface GrooveProfile {
  id: string;
  name: string;
  /** where the offbeat subdivision actually lands. 0.5 = straight, 0.667 = full triplet swing */
  swing: number;
  /** which subdivision carries the swing */
  swingUnit: SwingUnit;
  /** whole-band lean, in ms. negative = ahead of the beat, positive = behind */
  lean: number;
  /** per-role lean on top of the band lean, in ms */
  roleLean: Partial<Record<GrooveRole, number>>;
  /** Per-role ms offset table from WorldContract.microtiming.byRole,
   *  layered on top of `pocket` (which is genre-wide) rather than
   *  replacing it. This is where "the bandoneón lags more than the bass"
   *  kind of per-role drag lives. */
  roleMicrotiming?: Partial<Record<string, number[]>>;
  roleMicrotimingReferenceTempo?: number;
  /** random spread per note, in ms (1 sigma). small numbers matter a lot */
  humanizeMs: number;
  /** random velocity spread, 0..1 */
  humanizeVel: number;
  /** how strongly the metric hierarchy is expressed. 0 = flat, 1 = very shaped */
  accentDepth: number;
  accentMap?: number[];
  /** 16-slot template of extra ms offsets, indexed by position in the bar.
   *  This is where a genre's signature limp lives (the dembow lurch, the
   *  hip-hop drag on 2 and 4, the tango drag into beat 4). */
  pocket?: number[];
  /** ms offset applied to notes flagged as anticipations */
  anticipationMs: number;
  /** Meter-aware authored subdivision count. */
  subdivision?: number;
  cycleLength?: number;
  /** how much a soft hit gets softened relative to a loud one. > 1 widens the
   *  dynamic range, which is most of what "played, not programmed" means. */
  dynamicRange: number;
  description: string;
}

/** Build a 16-slot pocket template from a sparse map of position -> ms. */

export function grooveForStyle(style: ResolvedStyle): GrooveProfile {
  const c = style.contract;
  const g = c.groove;
  return {
    id: style.id,
    name: g.name,
    swing: g.swing,
    swingUnit: g.swingUnit,
    lean: g.lean,
    roleLean: { ...g.roleLean },
    roleMicrotiming: c.microtiming?.byRole,
    roleMicrotimingReferenceTempo: c.microtiming?.referenceTempo,
    humanizeMs: g.humanizeMs,
    humanizeVel: g.humanizeVel,
    accentDepth: g.accentDepth,
    accentMap: [...c.accentMap],
    pocket: [...g.pocket],
    anticipationMs: g.anticipationMs,
    dynamicRange: g.dynamicRange,
    description: `${style.name}: ${c.pulseModel}, ${c.timeline}`,
    subdivision: c.subdivision,
    cycleLength: c.cycleLength,
  };
}

/* --- Metric accent --- */
export function metricWeight(beatInBar: number, beatsPerBar: number): number {
  const eps = 1e-6;
  const frac = beatInBar - Math.floor(beatInBar + eps);
  const whole = Math.floor(beatInBar + eps);

  if (Math.abs(frac) < 0.02) {
    if (whole === 0) return 1.0;                                  // the one
    if (beatsPerBar >= 4 && whole === Math.floor(beatsPerBar / 2)) return 0.9; // the three
    return 0.82;                                                  // other beats
  }
  if (Math.abs(frac - 0.5) < 0.03) return 0.68;                   // eighths
  if (Math.abs(frac - 1 / 3) < 0.04 || Math.abs(frac - 2 / 3) < 0.04) return 0.66; // triplets
  return 0.58;                                                     // sixteenths
}

/* --- Swing calculation --- */
export function swingOffsetBeats(beatInBar: number, g: GrooveProfile): number {
  if (Math.abs(g.swing - 0.5) < 0.005) return 0;
  const frac = beatInBar - Math.floor(beatInBar + 1e-6);

  if (g.swingUnit === 8) {
    if (Math.abs(frac - 0.5) < 0.02) return g.swing - 0.5;
    // 16ths inside a swung 8th ride along with it, proportionally
    if (Math.abs(frac - 0.75) < 0.02) return (g.swing - 0.5) * 0.5;
    return 0;
  }

  // swingUnit 16: the second 16th of every 8th-note pair moves
  const inHalf = frac % 0.5;
  if (Math.abs(inHalf - 0.25) < 0.02) return 0.5 * g.swing - 0.25;
  return 0;
}

export interface FeelInput {
  /** position inside the bar, in quarter-note beats */
  beatInBar: number;
  beatsPerBar: number;
  role: GrooveRole;
  /** 0..1 authored accent for this hit */
  accent: number;
  /** stable identity for the wobble: track + bar + onset */
  seed: number;
  /** song/section tempo in bpm, used for tempo-relative microtiming scaling */
  bpm?: number;
  /** pattern-authored microtiming, in ms */
  authoredMs?: number;
  /** this note is an anticipation of the next chord/bar */
  anticipated?: boolean;
  /** 0..1 — how hard the section is being played */
  intensity?: number;
  /** global user "pocket" control, 0..1, 0.5 = as the genre intends */
  pocketAmount?: number;
  /** Traditional contexts may preserve authored phrase timing instead of imposing a generic Western metric template. */
  authoredTimingOnly?: boolean;
  /** Shared band-breath seed. Roles get small independent deviations around this common motion. */
  ensembleSeed?: number;
}

export interface FeelOutput {
  /** total timing offset in seconds, to be added to the grid position */
  offsetBeats: number;
  offsetMs: number;
  /** multiplier on the note's velocity, already humanized */
  velocityMult: number;
}

function noise1D(x: number, seed: number = 42): number {
  const floorX = Math.floor(x);
  const fracX = x - floorX;
  const h1 = rand01(seedOf(floorX, seed)) - 0.5;
  const h2 = rand01(seedOf(floorX + 1, seed)) - 0.5;
  const mu = (1 - Math.cos(fracX * Math.PI)) / 2;
  return h1 * (1 - mu) + h2 * mu;
}

/**
 * The whole feel of one note, in one call. Everything that makes a hit sit
 * where a player would put it, and land as hard as a player would hit it.
 */
export function applyFeel(g: GrooveProfile, input: FeelInput): FeelOutput {
  const amount = input.pocketAmount ?? 0.5;
  // 0.5 is "as the genre intends"; 0 flattens toward the grid, 1 exaggerates.
  const scale = input.authoredTimingOnly
    ? 0
    : amount <= 0.5 ? amount * 2 : 1 + (amount - 0.5) * 1.6;

  // 1. swing, in beats so it tracks tempo. Traditional/free contexts do not inherit
  // a Western swing template merely because their pattern happens to use a grid.
  const swingBeats = input.authoredTimingOnly ? 0 : swingOffsetBeats(input.beatInBar, g) * scale;

  // 2. Apply the style's pocket and timing offsets. Authored timing takes priority.
  const slots = Math.max(1, g.subdivision ?? 16);
  const slot = Math.round((input.beatInBar / Math.max(1e-6, input.beatsPerBar)) * slots) % slots;

  const roleTable = g.roleMicrotiming?.[input.role];
  const roleMs = roleTable?.length
    ? roleTable[Math.round((input.beatInBar / Math.max(1e-6, input.beatsPerBar)) * roleTable.length) % roleTable.length]
      * (g.roleMicrotimingReferenceTempo && input.bpm ? g.roleMicrotimingReferenceTempo / input.bpm : 1)
    : 0;

  const ms = input.authoredTimingOnly
    ? (input.authoredMs ?? 0)
    : (g.lean + (g.roleLean[input.role] ?? 0) + (g.pocket?.[slot] ?? 0) + roleMs + (input.anticipated ? g.anticipationMs : 0)) * scale + (input.authoredMs ?? 0);

  let currentHumanizeMs = g.humanizeMs;
  if (g.id?.includes('tango')) {
    if (input.role === 'comp' || input.role === 'bass') {
      currentHumanizeMs = 2;
    } else if (input.role === 'lead') {
      currentHumanizeMs = 12;
    }
  }

  // A human ensemble does not independently jitter every player. There is a
  // shared breath/pocket plus a much smaller player-specific deviation. This
  // keeps the band coherent while avoiding quantized machine-gun alignment.
  const ensemble = input.authoredTimingOnly ? 0 : noise1D(input.beatInBar / 2, input.ensembleSeed ?? input.seed) * currentHumanizeMs * 0.38;
  let finalMs = ms + ensemble;
  // 3. Limit timing drift for styles whose phrasing depends on fixed placement.
  const tightness =
    input.role === 'kick' || input.role === 'snare' ? 0.55 :
    input.role === 'hat' || input.role === 'perc' || input.role === 'ride' ? 0.7 :
    input.role === 'bass' ? 0.75 : 1.0;
  const intensityTighten = 1 - 0.25 * (input.intensity ?? 0.5);
  const humanizeScale = input.authoredTimingOnly ? 0.18 : 1;

  // Use low-frequency Cosine-Interpolated noise to modulate timing and velocity curves over bars
  const smoothDrift = noise1D(input.beatInBar / 4 + (input.seed % 100), 101);
  finalMs += smoothDrift * currentHumanizeMs * tightness * intensityTighten * humanizeScale * 0.5;

  // 4. dynamics: metric hierarchy is disabled for authored traditional phrasing;
  // the pattern's own accent profile should carry the musical hierarchy.
  const metric = input.authoredTimingOnly ? 1 : metricWeight(input.beatInBar, input.beatsPerBar);
  const contractAccent = g.accentMap?.[slot] ?? 1;
  const shaped = (1 - g.accentDepth * (1 - metric)) * (0.72 + contractAccent * 0.28);
  const authored = Math.pow(Math.max(0.05, input.accent), g.dynamicRange);

  const smoothVelDrift = noise1D(input.beatInBar / 8 + (input.seed % 100), 202);
  const velWobble = 1 + smoothVelDrift * g.humanizeVel * 0.6;

  return {
    offsetBeats: swingBeats,
    offsetMs: finalMs,
    velocityMult: Math.max(0.05, authored * shaped * velWobble),
  };
}

/** Human-readable list for a feel picker. */
export function grooveSummary(worldId: string): { name: string; description: string } {
  const contract = contractForGenre(worldId);
  return {
    name: contract.groove.name,
    description: `${contract.pulseModel}; ${contract.timeline}`,
  };
}

export function grooveFor(worldId: string): GrooveProfile {
  return grooveForStyle(resolveStyle({ genreId: worldId, styleId: getCanonicalStyle(worldId).id }));
}

export const GROOVE_PROFILES: Record<string, GrooveProfile> = new Proxy({}, {
  get: (_target, prop: string) => grooveFor(prop),
});
