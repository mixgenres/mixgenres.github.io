import { contractForGenre, mergeDialectMetadata } from '../../engine/style/contracts';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { getCanonicalStyle, getStyle } from '../../engine/style/registry';

import type { InstrumentDialect, PerformanceMode } from '../../data/styles/contracts';
import { RELATED_DIALECT_INSTRUMENTS } from '../../data/performance/dialects/inheritance';
import { DIALECTS } from '../../data/performance/dialects';

const SOUND_DIALECT_FIELDS = [
  'pluckPositionOverride', 'bowPressureOverride', 'contactPointOverride', 'decayMultiplier',
  'brightnessMultiplier', 'bodyMultiplier', 'micProximityPreset', 'bendGlideMs', 'courses',
  'sympatheticStrings', 'bodyConstruction', 'excitationType', 'variantId', 'patchId',
  'samplePalette', 'muteType', 'registration', 'rotary', 'drive',
] as const satisfies readonly (keyof InstrumentDialect)[];

/**
 * Older authored sound setups remain useful where a catalog style has not yet
 * replaced them. Only carry sound/timbre metadata forward: their old technique
 * allow-lists must not gate a newer style's playable teaching material.
 */
function legacySoundDialect(instrumentId: string, worldId: string, styleId: string): Partial<InstrumentDialect> {
  const world = worldId.toLowerCase();
  const style = styleId.toLowerCase();
  const entries = Object.entries(DIALECTS).flatMap(([key, dialect]) => {
    const prefix = `${instrumentId}:`;
    if (!key.startsWith(prefix)) return [];
    const context = key.slice(prefix.length).toLowerCase();
    const score = context === style ? 0
      : context === world ? 1
        : style.startsWith(`${context}-`) || style.includes(`-${context}-`) || style.endsWith(`-${context}`) ? 2
          : context.startsWith(`${world}-`) ? 3
            : world === 'indian-classical' && context === 'hindustani' ? 3
              : -1;
    return score < 0 ? [] : [{ dialect, score }];
  }).sort((a, b) => a.score - b.score);
  const source = entries[0]?.dialect;
  if (!source) return {};
  return Object.fromEntries(SOUND_DIALECT_FIELDS.flatMap(field =>
    source[field] === undefined ? [] : [[field, source[field]]])) as Partial<InstrumentDialect>;
}

function instrumentNativeDialect(instrumentId: string, worldId: string, styleId: string): InstrumentDialect {
  const definition = INSTRUMENTS_BY_ID[instrumentId];
  if (!definition) throw new Error(`Unknown dialect instrument: ${instrumentId}`);
  const allowedTechniques = definition.physicalTechniques
    ?? definition.luthierPhysics?.articulationCapabilities
    ?? definition.techniques.articulations;
  if (!allowedTechniques.length) throw new Error(`Instrument ${instrumentId} has no authored playable techniques`);
  return {
    id: `${instrumentId}:native`, instrumentId, name: definition.name, family: definition.family,
    ...(worldId ? { performanceMode: performanceModeForContext(worldId, styleId) } : {}),
    defaultTechnique: definition.techniques.articulations[0] ?? allowedTechniques[0],
    allowedTechniques: [...allowedTechniques], brightnessMultiplier: 1, decayMultiplier: 1,
    bodyConstruction: definition.bodyConstruction, excitationType: definition.excitationType,
    courses: definition.courses, sympatheticStrings: definition.luthierPhysics?.sympatheticStrings,
  };
}

export function resolveDialect(
  instrumentId: string,
  worldId = '',
  styleId = '',
  role?: string,
  energy?: 1 | 2 | 3 | 4 | 5,
): InstrumentDialect | null {
  const normId = instrumentId;
  if (!INSTRUMENTS_BY_ID[instrumentId]) throw new Error(`Unknown dialect instrument: ${instrumentId}`);
  if (styleId && !getStyle(styleId)) throw new Error(`Unknown dialect style: ${styleId}`);
  const resolveVariants = (base: InstrumentDialect): InstrumentDialect => {
    const roleVariant = role ? base.roleVariants?.[role] : undefined;
    const energyVariant = energy ? base.energyTweaks?.[energy] : undefined;
    const resolved = { ...base, ...(roleVariant ?? {}), ...(energyVariant ?? {}) };
    const definition = INSTRUMENTS_BY_ID[normId] ?? INSTRUMENTS_BY_ID[instrumentId];
    const physicalTechniques = definition?.physicalTechniques
      ?? definition?.luthierPhysics?.articulationCapabilities
      ?? definition?.techniques.articulations;
    if (definition && physicalTechniques?.length) {
      const variant = definition.variants?.find(item => item.id === resolved.variantId);
      const feasible = new Set([
        ...physicalTechniques,
        ...(variant?.techniqueAdditions ?? []),
      ]);
      for (const technique of variant?.techniqueRestrictions ?? []) feasible.delete(technique);
      resolved.allowedTechniques = resolved.allowedTechniques.filter(technique => feasible.has(technique));
      if (resolved.techniquePreferences) {
        resolved.techniquePreferences = Object.fromEntries(Object.entries(resolved.techniquePreferences)
          .filter(([technique]) => feasible.has(technique)));
      }
      if (!feasible.has(resolved.defaultTechnique)) {
        resolved.defaultTechnique = resolved.allowedTechniques[0] ?? physicalTechniques[0] ?? resolved.defaultTechnique;
      }
    }
    return resolved;
  };
  const style = styleId ? getStyle(styleId) as (ReturnType<typeof getStyle> & { instrumentDialects?: Record<string, Partial<InstrumentDialect>> }) | undefined : undefined;
  const legacySound = legacySoundDialect(normId, worldId, styleId);
  let authored = (role ? style?.instrumentDialects?.[`${normId}:${role}`] : undefined) ?? style?.instrumentDialects?.[normId] ?? style?.instrumentDialects?.[instrumentId];
  const weightedPreferences: Record<string, number> = {};
  for (const [technique, strength] of Object.entries(authored?.techniquePreferences ?? {})) weightedPreferences[technique] = strength;
  for (const influence of style?.influences ?? []) {
    if (!influence.aspects.some(aspect => aspect === 'sound' || aspect === 'gestures')) continue;
    const influenceStyle = influence.source.styleId ? getStyle(influence.source.styleId)
      : influence.source.genreId ? getCanonicalStyle(influence.source.genreId) : undefined;
    const patch = (influenceStyle?.instrumentDialects?.[role ? `${normId}:${role}` : '']
      ?? influenceStyle?.instrumentDialects?.[normId] ?? influenceStyle?.instrumentDialects?.[instrumentId]) as Partial<InstrumentDialect> | undefined;
    if (!patch) continue;
    const weight = Math.max(0, Math.min(1, influence.weight));
    for (const technique of patch.allowedTechniques ?? []) weightedPreferences[technique] = Math.max(weightedPreferences[technique] ?? 0, weight);
    for (const [technique, strength] of Object.entries(patch.techniquePreferences ?? {})) {
      weightedPreferences[technique] = (weightedPreferences[technique] ?? 0) * (1 - weight) + strength * weight;
    }
    // A light style influence contributes technique likelihoods while the
    // dominant style keeps ownership of physical setup and timbre choices.
    if (weight >= 0.5) {
      authored = mergeDialectMetadata(authored ?? {}, Object.fromEntries(Object.entries(patch).filter(([key]) =>
        !['allowedTechniques','techniquePreferences','forbiddenTechniques'].includes(key))) as Partial<InstrumentDialect>);
    }
  }
  if (authored || Object.keys(weightedPreferences).length) {
    const inherited = resolveDialect(instrumentId, worldId, '', role)
      ?? instrumentNativeDialect(instrumentId, worldId, styleId);
    const merged = mergeDialectMetadata({ ...inherited, ...legacySound,
      id: `${normId}:${styleId || worldId}`, instrumentId: normId, name: `${INSTRUMENTS_BY_ID[normId].name} (${styleId || worldId})`,
    }, authored ?? {});
    if (Object.keys(weightedPreferences).length) {
      merged.techniquePreferences = weightedPreferences;
      merged.allowedTechniques = [...new Set([...(merged.allowedTechniques ?? []), ...Object.keys(weightedPreferences)])]
        .filter(technique => !(merged.forbiddenTechniques ?? []).includes(technique))
        .sort((a, b) => (weightedPreferences[b] ?? 0) - (weightedPreferences[a] ?? 0));
    }
    return resolveVariants(merged);
  }
  if (worldId) {
    {
      const contract = contractForGenre(worldId, styleId ? getStyle(styleId) : undefined);
      if (contract?.instrumentDialects) {
        // 1. Exact match
        const exact = (role ? contract.instrumentDialects[`${normId}:${role}`] : undefined) || contract.instrumentDialects[normId] || contract.instrumentDialects[instrumentId];
        if (exact) {
          return resolveVariants({
            ...instrumentNativeDialect(normId, worldId, styleId),
            id: `${normId}:${worldId}`,
            name: `${INSTRUMENTS_BY_ID[normId].name} (${worldId})`,
            ...legacySound,
            ...exact,
          });
        }

        // 2. Family / related instrument matches
        const related: string[] = [];
        for (const [token, instruments] of Object.entries(RELATED_DIALECT_INSTRUMENTS)) {
          if (normId.includes(token)) related.push(...instruments);
        }

        for (const rel of related) {
          const matched = contract.instrumentDialects[rel];
          if (matched) {
            return resolveVariants({
              ...instrumentNativeDialect(normId, worldId, styleId),
              id: `${normId}:${worldId}`,
              name: `${INSTRUMENTS_BY_ID[normId].name} (${worldId})`,
              ...legacySound,
              ...matched,
            });
          }
        }

        // 3. Match by instrument family
        const def = INSTRUMENTS_BY_ID[normId] || INSTRUMENTS_BY_ID[instrumentId];
        if (def && contract.instrumentDialects[def.family]) {
          return resolveVariants({
            ...instrumentNativeDialect(normId, worldId, styleId),
            id: `${def.family}:${worldId}`,
            name: `${def.name} (${worldId} ${def.family})`,
            family: def.family,
            ...legacySound,
            ...contract.instrumentDialects[def.family],
          });
        }
      }
    }
  }

  return resolveVariants({ ...instrumentNativeDialect(normId, worldId, styleId), ...legacySound });
}

/** Production mode comes from the authored world contract, never a name regex. */
export function performanceModeForContext(worldId = '', styleId = ''): PerformanceMode {
  if (!worldId) throw new Error('A genre is required to resolve a genre-specific performance mode');
  const style = styleId ? getStyle(styleId) : undefined;
  if (styleId && !style) throw new Error(`Unknown performance style: ${styleId}`);
  const mode = contractForGenre(worldId, style).performanceMode;
  if (!mode) throw new Error(`Missing authored performance mode for ${worldId}/${styleId || 'home style'}`);
  return mode;
}
