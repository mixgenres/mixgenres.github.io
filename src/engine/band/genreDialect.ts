import { contractForGenre } from '../../engine/style/contracts';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { instrumentHasKey } from '../../engine/lookup/instrumentKeys.ts';
import { getStyle } from '../../engine/style/registry';

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
    return { ...base, ...(roleVariant ?? {}), ...(energyVariant ?? {}) };
  };
  if (styleId) {
    const style = getStyle(styleId) as (ReturnType<typeof getStyle> & { instrumentDialects?: Record<string, Partial<InstrumentDialect>> }) | undefined;
    const authored = (role ? style?.instrumentDialects?.[`${normId}:${role}`] : undefined) ?? style?.instrumentDialects?.[normId] ?? style?.instrumentDialects?.[instrumentId];
    if (authored) return resolveVariants({ ...DEFAULT_DIALECT_SHAPE, id: `${normId}:${styleId}`, instrumentId: normId, name: `${normId} (${styleId})`, ...authored });
  }
  if (worldId) {
    try {
      const contract = contractForGenre(worldId);
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
        const related = Object.values(RELATED_DIALECT_INSTRUMENTS)
          .find(instruments => instruments.includes(normId)) ?? [];

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

  // Exact authored world/instrument dialects are checked before sparse fuzzy
  // fallback rules. This prevents a fully authored Tango/Flamenco instrument
  // from silently dropping into the generic dialect just because the contract
  // does not repeat every instrument entry.
  if (worldId) {
    const exactWorldDialect = DIALECTS[`${normId}:${worldId}`];
    if (exactWorldDialect) return resolveVariants(exactWorldDialect);
  }

  const sparse = fallbackDialectForSparseContracts(instrumentId, worldId, styleId);
  if (sparse) return sparse;
  const def = INSTRUMENTS_BY_ID[normId] || INSTRUMENTS_BY_ID[instrumentId];
  return {
    ...DEFAULT_DIALECT_SHAPE,
    id: `${normId}:generic`,
    instrumentId: normId,
    name: `${def?.name ?? normId} (generic)`,
    family: def?.family ?? DEFAULT_DIALECT_SHAPE.family,
    performanceMode: performanceModeForContext(worldId, styleId),
  };
}

export function fallbackDialectForSparseContracts(
  instrumentId: string,
  worldId = '',
  styleId = ''
): InstrumentDialect | null {
  const token = `${worldId}:${styleId}:${instrumentId}`.toLowerCase();
  const matches = (matcher: DialectMatcher): boolean => {
    if (matcher.source === 'instrument' && matcher.engineKey) return instrumentHasKey(instrumentId, matcher.engineKey as any);
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
