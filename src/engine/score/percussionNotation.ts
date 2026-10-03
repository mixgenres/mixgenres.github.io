import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import { findKitComponent } from '../band/rhythmicIntent';
import { KIT_COMPONENT_MIDI_ALIASES } from '../../data/instruments/kitComponentAliases';
import { KIT_HIT_INTENT_FALLBACK, KIT_HIT_INTENT_RULES, KIT_HIT_OPEN_PATTERN } from '../../data/performance/kitHitRules';
import type { HitFunction } from '../../data/performance/hitFunctions';
import { DRUM_STAFF } from '../../data/notation/rules';

export interface NotatedDrum { midi: number; componentId: string; name: string; step: string; octave: number; notehead: 'normal' | 'x' | 'diamond' | 'circle-x' }
export function notatedDrum(instrumentId: string, midi: number): NotatedDrum {
  const def = INSTRUMENTS_BY_ID[instrumentId], component = def?.kitComponents?.find(c => c.midi === midi);
  const id = component?.id ?? instrumentId;
  const staffKey = Object.keys(DRUM_STAFF).filter(key => id.includes(key)).sort((a, b) => b.length - a.length)[0];
  const staff = def?.notationRules?.percussion?.[id] ?? def?.notationRules?.percussion?.[staffKey] ?? DRUM_STAFF[staffKey]
    ?? { step: 'B', octave: 4, notehead: 'normal' as const };
  return { midi, componentId: id, name: component?.name ?? def?.name ?? instrumentId, ...staff,
    ...(id.includes('open') && id.includes('hihat') ? { notehead: 'circle-x' as const } : {}) };
}
/** Resolve the actual kit voice once, upstream of band/DSP compilation. */
export function resolveNotatedDrum(instrumentId: string, sourceHit: string | undefined, hit: HitFunction, index: number): NotatedDrum {
  const def = INSTRUMENTS_BY_ID[instrumentId], components = def?.kitComponents ?? [], raw = String(sourceHit ?? '').toLowerCase();
  for (const [pattern, ids] of KIT_COMPONENT_MIDI_ALIASES) if (pattern.test(raw)) {
    for (const id of ids) { const component = components.find(c => c.id === id); if (component) return notatedDrum(instrumentId, component.midi); }
  }
  const rule = KIT_HIT_INTENT_RULES.find(r => r.pattern.test(raw) || r.hits?.includes(hit));
  const intent = rule ? rule.dynamicOpen && KIT_HIT_OPEN_PATTERN.test(raw) ? 'open' : rule.intent : KIT_HIT_INTENT_FALLBACK;
  const preferred = findKitComponent(instrumentId, intent, undefined, index);
  return notatedDrum(instrumentId, preferred?.midi ?? components[index % Math.max(1, components.length)]?.midi ?? def?.drum?.mid ?? 60);
}
