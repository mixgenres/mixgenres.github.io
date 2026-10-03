export { FAMILY_LABELS, FAMILY_ORDER, WORLD_INSTRUMENT_HINTS } from '../../data/instruments/families';
import { enrichInstrumentPhysics } from '../../data/instruments/enrichment/physics';
import type { InstrumentDef, InstrumentTechniqueProfile, AcousticFormantProfile, BowedResonanceProfile } from '../../data/instruments/schema/instrument-def';
import type { LuthierPhysicalParameters } from '../../data/instruments/schema/luthier';
import type { PluckedPreset } from '../../data/instruments/schema/plucked-preset';
import { INSTRUMENT_CATALOG } from '../../data/instruments';
import { INSTRUMENT_PATTERN_KIND_RULES } from '../../data/instruments/patternKinds';
import { GENRE_WORLDS } from '../../data/genres';
export { INSTRUMENT_CATALOG } from '../../data/instruments';
export type { InstrumentDef, InstrumentFamily, DrumVoice, InstrumentTechniqueProfile } from '../../data/instruments/schema/instrument-def';
/** Engine-side physics enrichment and runtime instrument queries. */
/**
 * Engine-facing realism layer. Every catalog entry receives explicit physical
 * assumptions, signal-chain intent, and articulation synthesis metadata.
 */
export const ENRICHED_INSTRUMENT_CATALOG = INSTRUMENT_CATALOG.map(enrichInstrumentPhysics);

export const INSTRUMENTS_BY_ID: Record<string, InstrumentDef> = Object.fromEntries(ENRICHED_INSTRUMENT_CATALOG.map(i => [i.id, i]));

export const EXACT_PLUCKED_PRESETS: Record<string, PluckedPreset> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (def.family === 'plucked' || def.courses || def.bodyConstruction || def.excitationType) {
    EXACT_PLUCKED_PRESETS[id] = {
      courses: def.courses ?? def.luthierPhysics?.courses ?? 1,
      bodyConstruction: def.bodyConstruction ?? def.luthierPhysics?.bodyConstruction ?? 'wood-box',
      excitationType: def.excitationType ?? def.luthierPhysics?.excitationType ?? 'fingerpad',
      sympatheticStrings: def.sympatheticStrings ?? def.luthierPhysics?.sympatheticStrings ?? false,
    };
  }
}

export const WIND_BRASS_REED_FORMANTS: Record<string, AcousticFormantProfile> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (def.formantProfile) {
    WIND_BRASS_REED_FORMANTS[id] = def.formantProfile;
  }
}

export const BOWED_RESONANCES: Record<string, BowedResonanceProfile> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (def.bowedResonance) {
    BOWED_RESONANCES[id] = def.bowedResonance;
  }
}

export const GAIN_BY_INSTRUMENT: Partial<Record<string, number>> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (typeof def.makeupGain === 'number') {
    GAIN_BY_INSTRUMENT[id] = def.makeupGain;
  }
}

export const LUTHIER_INSTRUMENT_MAP: Record<string, LuthierPhysicalParameters> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (def.luthierPhysics) {
    LUTHIER_INSTRUMENT_MAP[id] = def.luthierPhysics;
  }
}

export function instrument(id: string): InstrumentDef {
  const def = INSTRUMENTS_BY_ID[id];
  if (!def) {
    throw new Error(
      `UNRESOLVED_MUSICAL_IDENTITY_ERROR: unknown instrument "${id}". ` +
      `No catalog fallback is permitted.`
    );
  }
  return def;
}

/** Pattern vocabulary aliases. Genre pattern data uses musical roles/kinds
 * (e.g. "keys", "guitar", "percussion") rather than catalog IDs. Keep that
 * vocabulary separate from the concrete GeneralUser patch selected by a track. */
export function instrumentPatternKinds(id: string): string[] {
  const d = INSTRUMENTS_BY_ID[id];
  if (!d) return [];
  const out = new Set<string>([id]);
  for (const rule of INSTRUMENT_PATTERN_KIND_RULES) {
    const matchesVoicing = rule.voicing !== undefined && d.voicing === rule.voicing;
    const matchesFamily = rule.family !== undefined && d.family === rule.family;
    const matchesId = rule.ids?.includes(id) ?? false;
    const matchesSubstring = rule.includes !== undefined && id.includes(rule.includes);
    const matchesAnySubstring = rule.includesAny?.some(value => id.includes(value)) ?? false;
    if ((matchesVoicing || matchesFamily || matchesId || matchesSubstring || matchesAnySubstring)
      && (!rule.family || d.family === rule.family)
      && (!rule.voicing || d.voicing === rule.voicing)
      && (!rule.ids || rule.ids.includes(id))
      && (!rule.includes || id.includes(rule.includes))
      && (!rule.includesAny || rule.includesAny.some(value => id.includes(value)))) {
      for (const alias of rule.aliases) out.add(alias);
    }
  }
  return [...out];
}

export function isPercussive(id: string): boolean {
  const def = INSTRUMENTS_BY_ID[id];
  return !!def && (def.kit === true || def.drum !== undefined);
}

export function cleanInstrumentName(name: string): string {
  return name
    .replace(/\s*\([^)]*GM[^)]*\)/gi, '')
    .replace(/\s*\([^)]*approx[^)]*\)/gi, '')
    .replace(/\s*\(GM approximation\)/gi, '')
    .replace(/GM approximation/gi, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Instruments a world tends to reach for first, by world id.
 * Maps to canonical 32 genre baseline instrumentation.
 */
/** Return the authored technique profile for an instrument, with a safe fallback. */
export function techniqueProfile(id: string): InstrumentTechniqueProfile {
  const def = INSTRUMENTS_BY_ID[id];
  if (!def) {
    throw new Error(`UNRESOLVED_MUSICAL_IDENTITY_ERROR: unknown instrument "${id}" has no technique profile.`);
  }
  return def.techniques;
}

const calibratedStylesById = new Map(GENRE_WORLDS.flatMap(world =>
  world.styleDefinitions.map(style => [style.id.toLowerCase(), { world, style }] as const)));
const resolvedTechniqueCache = new Map<string, string[]>();

/** Pick style-specific idiomatic articulations without inventing unsupported gestures. */
export function genreTechniquesForInstrument(
  id: string, styleId?: string, scope?: 'note'|'motif'|'phrase'|'section'|'song',
): string[] {
  const p = techniqueProfile(id);
  if (!styleId) return p.articulations;
  const key = styleId.toLowerCase();
  const cacheKey = `${id}:${key}:${scope ?? 'all'}`;
  const cached = resolvedTechniqueCache.get(cacheKey);
  if (cached) return cached;
  const match = calibratedStylesById.get(key);
  const world = match?.world;
  const style = match?.style;
  if (world && style?.calibration) {
    const authored = style.calibration.instrumentTechniques?.[id]
      ?? Object.values(style.calibration.techniques).flat();
    const scoped = authored
      .filter(term => !scope || !style.calibration?.techniqueScopes?.[term] || style.calibration.techniqueScopes[term]!.includes(scope));
    const wanted = scoped.map(value => value.toLowerCase());
    const capabilities = Array.from(new Set([
      ...p.articulations, ...p.techniqueMethods, ...p.playingStyles,
      ...(p.genreTechniques?.[world.id] ?? []),
      ...(INSTRUMENTS_BY_ID[id].physicalTechniques ?? []),
      ...(INSTRUMENTS_BY_ID[id].luthierPhysics?.articulationCapabilities ?? []),
    ]));
    const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const contextual = capabilities.filter(capability => wanted.some(term => {
      const a = normalize(capability); const b = normalize(term);
      return a.length > 2 && (b.includes(a) || a.includes(b));
    }));
    if (contextual.length) {
      const result = Array.from(new Set(contextual));
      resolvedTechniqueCache.set(cacheKey, result);
      return result;
    }
    // A calibrated style with no feasible techniques for this instrument does
    // not inherit another instrument's or genre's vocabulary.
    resolvedTechniqueCache.set(cacheKey, []);
    return [];
  }
  for (const [style, arts] of Object.entries(p.genreTechniques ?? {})) {
    if (key === style || key.includes(style) || style.includes(key)) return arts.filter(a => p.articulations.includes(a));
  }
  const result = p.articulations;
  resolvedTechniqueCache.set(cacheKey, result);
  return result;
}
