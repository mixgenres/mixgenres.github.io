import { ENRICHED_INSTRUMENT_CATALOG as INSTRUMENT_CATALOG } from '../../src/engine/lookup/instruments';
import { ALL_STYLES, resolveStyle } from '../../src/engine/style';
import { getInstrumentModule } from '../../src/engine/playback/instrumentRegistry';
import { resolveTrackSound } from '../../src/engine/playback/trackSound';
import { resolveMasterSettings } from '../../src/engine/studio/masterSettings';

/** Deterministic set cover: new renderer branches automatically get a probe. */
function cover<T>(items: T[], features: (item: T) => string[]) {
  const candidates = items.map(item => ({ item, features: features(item) }));
  const pending = new Set(candidates.flatMap(x => x.features));
  const selected: T[] = [];
  while (pending.size) {
    let best: typeof candidates[number] | undefined, score = 0;
    for (const candidate of candidates) {
      const count = candidate.features.filter(x => pending.has(x)).length;
      if (count > score) { best = candidate; score = count; }
    }
    if (!best) throw new Error('Audio coverage selection failed');
    selected.push(best.item);
    best.features.forEach(x => pending.delete(x));
  }
  return selected;
}
export function instrumentMechanisms(def: typeof INSTRUMENT_CATALOG[number]) {
  const params = resolveTrackSound(def.id);
  const module = getInstrumentModule(def.id);
  return [`module:${module.id}`, `model:${params.model}`, `excitation:${params.excitationType}`,
    `sustain:${def.acousticProfile?.sustain}`,
    ...(module.specializedInstrumentIds?.includes(def.id) ? [`specialized:${def.id}`] : []),
    ...(def.kitComponents ?? []).map(component => `kit:${def.family}/${component.physicalType}`)];
}
export function selectInstruments(id?: string) {
  if (id) {
    const def = INSTRUMENT_CATALOG.find(x => x.id === id);
    if (!def) throw new Error(`Unknown instrument ${id}`);
    return [def];
  }
  return cover(INSTRUMENT_CATALOG, instrumentMechanisms);
}
export function styleMechanisms(style: typeof ALL_STYLES[number]) {
  const resolved = resolveStyle({ genreId: style.primaryGenre, styleId: style.id });
  const settings = resolveMasterSettings(resolved.resolvedMix.contract.character, `${style.primaryGenre} ${style.id}`);
  return [`saturation:${settings.saturationType}`, `reverb:${settings.springReverbMix ? 'spring' : 'room'}`,
    `delay:${settings.delaySend > 0}`, `dynamic-mix:${resolved.resolvedMix.contract.enabled}`,
    `ducking:${settings.duckDepth > 0}`, `compressor:${settings.glue.ratio <= 2 ? 'gentle' : 'punchy'}`];
}
export function selectStyles(id?: string) {
  if (id) {
    const style = ALL_STYLES.find(x => x.id === id);
    if (!style) throw new Error(`Unknown style ${id}`);
    return [style];
  }
  return cover(ALL_STYLES, styleMechanisms);
}
