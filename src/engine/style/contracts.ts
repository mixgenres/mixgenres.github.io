import type { SongStyle } from '../../data/styles/schema';
import { GENRE_CONTRACTS, STYLE_PATCHES } from '../../data/styles/contracts';
import type { WorldContract, BassDialect } from '../../data/styles/contracts';
export type { InteractionModel, PulseModel, PocketSpec, PercussionDialect, BassDialect, ApproachSpec, EnergyMapping, EnergyDelta, TransitionType, TransitionGrammar, DragProfile, PerformanceIdioms, MixCharacter, WorldContract, InstrumentDialect, PerformanceMode } from '../../data/styles/contracts';

function cloneDeep<T>(v: T): T {
  return JSON.parse(JSON.stringify(v));
}

export function contractForGenre(genreId: string, style?: SongStyle): WorldContract {
  const baseContract = GENRE_CONTRACTS[genreId];
  if (!baseContract) throw new Error(`No Genre Contract for ${genreId}`);
  let out = cloneDeep(baseContract);
  const patch = style ? STYLE_PATCHES[style.id] : undefined;
  if (patch) out = mergeContract(out, patch);

  if (style?.rhythm) {
    const r = style.rhythm;
    const meter = r.meter ?? out.meter;
    const subdivision = /12\/8/.test(meter) ? 12 : /3\/4|6\/8/.test(meter) ? 12 : /2\/4/.test(meter) ? 8 : 16;
    out.meter = meter;
    out.subdivision = subdivision;
    out.groove = {
      ...out.groove,
      swing: (r.swingPercentage ?? out.groove.swing * 100) / 100,
      humanizeMs: r.humanizeJitterMs ?? out.groove.humanizeMs,
    };
    if (r.microtimingFeel === 'laid-back' || r.microtimingFeel === 'atrasado') out.groove.lean = Math.max(out.groove.lean, 4);
    if (r.microtimingFeel === 'pushed') out.groove.lean = Math.min(out.groove.lean, -3);
    if (r.microtimingFeel === 'rubato') out.microtiming.byRole.lead = [Math.max(8, out.groove.roleLean.lead ?? 8)];
    if (r.timelineClave) {
      out.timeline = r.timelineClave;
      out.timelineRequired = true;
    }
  }
  if (style?.harmony) {
    out.harmonyModel = style.harmony.model ?? out.harmonyModel;
    out.tuningSystem = style.harmony.tuningSystem ?? out.tuningSystem;
    if (style.harmony.bassMotion) out.bass.style = style.harmony.bassMotion as BassDialect['style'];
    out.harmonyVocabulary = Array.from(new Set([...out.harmonyVocabulary, ...(style.harmony.chordVocabulary ?? [])]));
  }
  if (style?.arrangement?.soloDefinition) out.soloDefinition = cloneDeep(style.arrangement.soloDefinition);
  return out;
}

function mergeContract(baseContract: WorldContract, patch: Partial<WorldContract>): WorldContract {
  const out = { ...baseContract, ...patch } as WorldContract;
  out.groove = { ...baseContract.groove, ...(patch.groove ?? {}), roleLean:{...baseContract.groove.roleLean,...(patch.groove?.roleLean ?? {})} };
  out.bass = { ...baseContract.bass, ...(patch.bass ?? {}) };
  out.microtiming = { ...baseContract.microtiming, ...(patch.microtiming ?? {}), byRole:{...baseContract.microtiming.byRole,...(patch.microtiming?.byRole ?? {})} };
  out.timbreSpace = {
    ...baseContract.timbreSpace,
    ...(patch.timbreSpace ?? {}),
    mixCharacter: {
      ...(baseContract.timbreSpace.mixCharacter ?? { dryness: 0.6, bassForward: 0.5, width: 0.5, brightness: 0.5 }),
      ...(patch.timbreSpace?.mixCharacter ?? {}),
    },
  };
  out.percussion = { ...baseContract.percussion, ...(patch.percussion ?? {}) };
  out.instrumentDialects = { ...baseContract.instrumentDialects };
  for (const [id, dialect] of Object.entries(patch.instrumentDialects ?? {})) {
    const inherited = baseContract.instrumentDialects?.[id];
    out.instrumentDialects[id] = mergeDialectMetadata(inherited ?? {}, dialect);
  }
  return out;
}

/** Partial style dialects preserve unauthored physical and technique fields. */
export function mergeDialectMetadata<T extends object>(base: T, patch: Partial<T>): T {
  const result = { ...base } as Record<string, unknown>;
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined) continue;
    const previous = result[key];
    result[key] = value && typeof value === 'object' && !Array.isArray(value)
      && previous && typeof previous === 'object' && !Array.isArray(previous)
      ? mergeDialectMetadata(previous, value) : value;
  }
  return result as T;
}
