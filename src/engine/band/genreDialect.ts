import { contractForGenre, mergeDialectMetadata } from '../../engine/style/contracts';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { getCanonicalStyle, getStyle } from '../../engine/style/registry';

import type { InstrumentDialect, PerformanceMode } from '../../data/styles/contracts';
import { DIALECTS, DEFAULT_DIALECT_SHAPE } from '../../data/performance/dialects';
import { RELATED_DIALECT_INSTRUMENTS, SPARSE_DIALECT_FALLBACK_RULES, PROGRAMMED_ELECTRONIC_GENRE_PATTERN, HYBRID_GENRE_PATTERN, type DialectMatcher } from '../../data/performance/dialects/sparseFallbackRules';

export function resolveDialect(
  instrumentId: string,
  worldId = '',
  styleId = '',
  role?: string,
  energy?: 1 | 2 | 3 | 4 | 5,
): InstrumentDialect | null {
  const normId = instrumentId.toLowerCase().replace(/_/g, '-');
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
    const inherited = resolveDialect(instrumentId, worldId, '', role);
    const merged = mergeDialectMetadata({ ...DEFAULT_DIALECT_SHAPE, ...inherited,
      id: `${normId}:${styleId || worldId || 'generic'}`, instrumentId: normId, name: `${normId} (${styleId || worldId || 'generic'})`,
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
    try {
      const contract = contractForGenre(worldId, styleId ? getStyle(styleId) : undefined);
      if (contract?.instrumentDialects) {
        // 1. Exact match
        const exact = (role ? contract.instrumentDialects[`${normId}:${role}`] : undefined) || contract.instrumentDialects[normId] || contract.instrumentDialects[instrumentId];
        if (exact) {
          return resolveVariants({
            ...DEFAULT_DIALECT_SHAPE,
            id: `${normId}:${worldId}`,
            instrumentId: normId,
            name: `${normId} (${worldId})`,
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
              ...DEFAULT_DIALECT_SHAPE,
              id: `${normId}:${worldId}`,
              instrumentId: normId,
              name: `${normId} (${worldId})`,
              ...matched,
            });
          }
        }

        // 3. Match by instrument family
        const def = INSTRUMENTS_BY_ID[normId] || INSTRUMENTS_BY_ID[instrumentId];
        if (def && contract.instrumentDialects[def.family]) {
          return resolveVariants({
            ...DEFAULT_DIALECT_SHAPE,
            id: `${def.family}:${worldId}`,
            instrumentId: normId,
            name: `${def.name} (${worldId} ${def.family})`,
            family: def.family,
            ...contract.instrumentDialects[def.family],
          });
        }
      }
    } catch {
      // Contract lookup fallback
    }
  }

  const sparse = fallbackDialectForSparseContracts(instrumentId, worldId, styleId);
  if (sparse) return resolveVariants(sparse);
  const def = INSTRUMENTS_BY_ID[normId] || INSTRUMENTS_BY_ID[instrumentId];
  return resolveVariants({
    ...DEFAULT_DIALECT_SHAPE,
    id: `${normId}:generic`,
    instrumentId: normId,
    name: `${def?.name ?? normId} (generic)`,
    family: def?.family ?? DEFAULT_DIALECT_SHAPE.family,
    performanceMode: performanceModeForContext(worldId, styleId),
  });
}

export function fallbackDialectForSparseContracts(
  instrumentId: string,
  worldId = '',
  styleId = ''
): InstrumentDialect | null {
  const token = `${worldId}:${styleId}:${instrumentId}`.toLowerCase();
  const matches = (matcher: DialectMatcher): boolean => {
    const value = matcher.source === 'token' ? token : instrumentId;
    return matcher.includes !== undefined ? value.includes(matcher.includes) : matcher.pattern?.test(value) ?? false;
  };
  for (const rule of SPARSE_DIALECT_FALLBACK_RULES) {
    if ((rule.allOf ?? []).every(matches) && (!rule.anyOf || rule.anyOf.some(matches))) {
      return DIALECTS[rule.dialectId];
    }
  }
  return null;
}


/** Resolve the production/performance mode when a style has not authored one.
 * This is deliberately conservative: acoustic traditions stay acoustic;
 * styles whose defining groove is programmed stay on the electronic path.
 */
export function performanceModeForContext(worldId = '', styleId = ''): PerformanceMode {
  const token = `${worldId}:${styleId}`.toLowerCase();
  if (PROGRAMMED_ELECTRONIC_GENRE_PATTERN.test(token)) return 'programmed-electronic';
  if (HYBRID_GENRE_PATTERN.test(token)) return 'hybrid';
  return 'acoustic-ensemble';
}
