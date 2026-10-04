import { DYNAMIC_MIX_DEFAULTS } from '../../../data/sound/mix/dynamicMixDefaults';
import type { MixContract, MixOverride, ResolvedMixContract } from '../../../data/sound/schema/dynamicMix';
import type { ResolvedStyle } from '../../../data/styles/schema';
import type { WorldContract } from '../../../data/styles/contracts';

type Source = ResolvedStyle['provenance'][string];
export interface MixLayer { mix?: MixOverride<MixContract>; source: Source }
const record = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
const unsafeKeys = new Set(['__proto__', 'prototype', 'constructor']);

/** Recursive partials preserve sibling leaves; arrays replace, undefined inherits. */
export function mergeMixOverrides<T extends object>(base: T, patch?: MixOverride<T>): T {
  const out = structuredClone(base) as Record<string, unknown>;
  for (const [key, value] of Object.entries(patch ?? {})) {
    if (unsafeKeys.has(key) || value === undefined || value === null) continue;
    out[key] = record(value)
      ? mergeMixOverrides(record(out[key]) ? out[key] as Record<string, unknown> : {}, value as MixOverride<Record<string, unknown>>)
      : structuredClone(value);
  }
  return out as T;
}

const numericKeys = new Set(['dryness', 'bassForward', 'width', 'brightness', 'compressionRatio', 'subHarmonics',
  'transientSnap', 'sidechainDucking', 'delaySend', 'delayTimeSeconds', 'delayFeedback', 'delayToneHz',
  'depthRange', 'foregroundContrastDb', 'maxTrackBoostDb', 'maxTrackCutDb', 'ensembleBreathing', 'crescendoExpansion',
  'silenceContrast', 'peakSectionHeadroomDb', 'busCompressionAmount', 'busCompressionRatio', 'densityCompensation',
  'priority', 'gainDb', 'foregroundGainDb', 'supportGainDb', 'presenceDb', 'bodyDb', 'depth', 'transientEmphasis',
  'maskingPriority', 'ambienceSend', 'minOverlap', 'minPriorityDifference', 'maxPresenceCutDb', 'maxBodyCutDb',
  'maxGainCutDb', 'amount', 'roomSize', 'foregroundDepthDifference', 'reverbSend', 'bloom', 'preDelayMs',
  'ambience', 'foregroundContrast', 'attackMs', 'releaseMs', 'sectionTransitionMs', 'foregroundHandoffMs',
  'spectralRampMs', 'lookaheadMs', 'glueAmount', 'lowAnchorCompression', 'rhythmCompression', 'melodicCompression',
  'ensembleCompression', 'parallelCompression']);
const booleanKeys = new Set(['enabled', 'preserveNaturalStage', 'sharedForeground', 'protectLowEnd',
  'protectRhythmicDefinition', 'mayYieldSpectrally', 'mayYieldInGain', 'preserveCounterpoint', 'sharedRoom']);
const mixFunctions = new Set(['foreground', 'counterline', 'answer', 'harmonic-support', 'rhythmic-support',
  'low-anchor', 'pulse-anchor', 'texture', 'impact', 'transition']);
function safeValue(path: string, value: unknown): unknown {
  const key = path.split('.').at(-1)!;
  if ((numericKeys.has(key) || /\.(rolePan|roleWidth)\./.test(path)) && typeof value !== 'number') return undefined;
  if (booleanKeys.has(key) && typeof value !== 'boolean') return undefined;
  if (key === 'mixFunctions') return Array.isArray(value) ? value.filter(v => typeof v === 'string' && mixFunctions.has(v)) : undefined;
  if (key === 'centerAnchorRoles') return Array.isArray(value) ? value.filter(v => typeof v === 'string') : undefined;
  if (key === 'reverbType' && !['room', 'spring'].includes(String(value))) return undefined;
  if (key === 'saturationType' && !['tape', 'tube', 'hard-clip'].includes(String(value))) return undefined;
  if (path.includes('.roleBus.') && !['lowAnchor', 'rhythm', 'harmony', 'melodic', 'percussion', 'texture', 'ensemble'].includes(String(value))) return undefined;
  if (/^sound\.mix\.(roles|sections)\.[^.]+$/.test(path)) return undefined;
  if (typeof value !== 'number') return value;
  if (!Number.isFinite(value)) return undefined;
  let min = 0, max = 1;
  if (/Db$/.test(key)) { min = -12; max = 12; }
  if (key === 'maxTrackCutDb') { min = -12; max = 0; }
  if (key === 'maxTrackBoostDb' || key === 'peakSectionHeadroomDb' || key === 'foregroundContrastDb' || (key !== 'maxTrackCutDb' && /^max.*CutDb$/.test(key))) { min = 0; max = 12; }
  if (/Ms$/.test(key)) max = 5000;
  if (key === 'lookaheadMs') max = 250;
  if (key === 'preDelayMs') max = 200;
  if (/Ratio$/.test(key)) { min = 1; max = 8; }
  if (key === 'delayTimeSeconds') { min = .04; max = 1.5; }
  if (key === 'delayToneHz') { min = 500; max = 12000; }
  if (key === 'delayFeedback') max = .82;
  if (path.includes('.rolePan.')) min = -1;
  if (path.includes('.sections.') && key === 'ambience') max = 2;
  return Math.max(min, Math.min(max, value));
}

export function resolveMixLayers(world: WorldContract, genreId: string, layers: MixLayer[] = []): ResolvedMixContract {
  const contract = structuredClone(DYNAMIC_MIX_DEFAULTS);
  const provenance: ResolvedStyle['provenance'] = {};
  const trace: ResolvedStyle['trace'] = [];
  const apply = (target: Record<string, unknown>, patch: Record<string, unknown>, path: string, source: Source) => {
    for (const [key, raw] of Object.entries(patch)) {
      if (unsafeKeys.has(key) || raw == null) continue;
      const nextPath = `${path}.${key}`;
      if (record(raw)) {
        if (target[key] !== undefined && !record(target[key])) continue;
        if (!record(target[key])) target[key] = {};
        apply(target[key] as Record<string, unknown>, raw, nextPath, source);
      } else {
        const value = safeValue(nextPath, raw);
        if (value === undefined) continue;
        // Reject malformed authoring at the boundary instead of feeding NaN/strings to DSP.
        const previous = target[key];
        if (previous !== undefined && (Array.isArray(previous) ? !Array.isArray(value) : typeof previous !== typeof value)) continue;
        target[key] = structuredClone(value);
        provenance[nextPath] = { ...source };
        trace.push({ path: nextPath, value: structuredClone(value), ...source });
      }
    }
  };
  const target = contract as unknown as Record<string, unknown>;
  apply(target, target, 'sound.mix', { source: 'default', sourceId: 'dynamicMixDefaults' });
  apply(target, { character: world.timbreSpace.mixCharacter ?? {} }, 'sound.mix', { source: 'genre', sourceId: genreId });
  apply(target, (world.timbreSpace.mix ?? {}) as unknown as Record<string, unknown>, 'sound.mix', { source: 'genre', sourceId: genreId });
  for (const layer of layers) apply(target, (layer.mix ?? {}) as Record<string, unknown>, 'sound.mix', layer.source);
  const freeze = (v: object) => { for (const child of Object.values(v)) if (child && typeof child === 'object') freeze(child); Object.freeze(v); };
  freeze(contract); freeze(provenance); freeze(trace);
  return Object.freeze({ contract, provenance, trace });
}

/** Already-resolved style mix decisions remain authoritative; faders are separate. */
export function resolveMixContract(style: ResolvedStyle, userOverrides?: MixOverride<MixContract>): ResolvedMixContract {
  if (!userOverrides) return style.resolvedMix;
  const user = resolveMixLayers(style.contract, style.primaryGenre, [
    { mix: style.resolvedMix.contract, source: { source: 'style', sourceId: style.id } },
    { mix: userOverrides, source: { source: 'user' } },
  ]);
  return { ...user, provenance: { ...style.resolvedMix.provenance,
    ...Object.fromEntries(Object.entries(user.provenance).filter(([, source]) => source.source === 'user')) },
    trace: [...style.resolvedMix.trace, ...user.trace.filter(item => item.source === 'user')] };
}

/** Sound influences blend only their authored leaves, never foreign genre defaults. */
export function blendMixInfluence(base: Required<MixContract>, mix: MixOverride<MixContract>, weight: number): MixOverride<MixContract> {
  const blend = (a: unknown, b: unknown): unknown => record(b)
    ? Object.fromEntries(Object.entries(b).filter(([key]) => !unsafeKeys.has(key)).map(([key, value]) => [key, blend(record(a) ? a[key] : undefined, value)]))
    : typeof b === 'number' && typeof a === 'number' ? a + (b - a) * weight : weight >= .5 ? b : undefined;
  return blend(base, mix) as MixOverride<MixContract>;
}
