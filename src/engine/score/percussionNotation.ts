import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import { findKitComponent } from '../band/rhythmicIntent';
import { KIT_COMPONENT_MIDI_ALIASES } from '../../data/instruments/kitComponentAliases';
import { kitHitIntent } from '../../data/performance/kitHitRules';
import type { HitFunction } from '../../data/performance/hitFunctions';
import { DRUM_STAFF } from '../../data/notation/rules';

export interface NotatedDrum { midi: number; componentId: string; name: string; step: string; octave: number; notehead: 'normal' | 'x' | 'diamond' | 'circle-x' }
export function notatedDrum(instrumentId: string, midi: number): NotatedDrum {
  const def = INSTRUMENTS_BY_ID[instrumentId], component = def?.kitComponents?.find(c => c.midi === midi);
  const id = component?.id ?? instrumentId;
  const staffKey = Object.keys(DRUM_STAFF).filter(key => id.includes(key)).sort((a, b) => b.length - a.length)[0];
  if (!def) throw new Error(`No instrument definition for percussion part ${instrumentId}`);
  let staff = def.notationRules?.percussion?.[id] ?? def.notationRules?.percussion?.[staffKey] ?? DRUM_STAFF[staffKey];
  if (!staff && !component && def.drum) {
    const level = midi === def.drum.low ? 'low' : midi === def.drum.high ? 'high' : midi === def.drum.mid ? 'mid' : undefined;
    const levelStaff: Record<'low' | 'mid' | 'high', { step: string; octave: number; notehead: NotatedDrum['notehead'] }> = {
      low: { step: 'F', octave: 4, notehead: 'normal' },
      mid: { step: 'C', octave: 5, notehead: 'normal' },
      high: { step: 'A', octave: 5, notehead: 'x' },
    };
    if (level) staff = levelStaff[level];
  }
  if (!staff) throw new Error(`No percussion staff mapping for ${instrumentId}/${id}`);
  return { midi, componentId: id, name: component?.name ?? def?.name ?? instrumentId, ...staff,
    ...(id.includes('open') && id.includes('hihat') ? { notehead: 'circle-x' as const } : {}) };
}
/** Resolve the actual kit voice once, upstream of band interpretation. */
export function resolveNotatedDrum(instrumentId: string, sourceHit: string | undefined, hit: HitFunction, index: number): NotatedDrum {
  const def = INSTRUMENTS_BY_ID[instrumentId], components = def?.kitComponents ?? [], raw = String(sourceHit ?? '').toLowerCase();
  if (!def) throw new Error(`No instrument definition for percussion part ${instrumentId}`);
  for (const [pattern, ids] of KIT_COMPONENT_MIDI_ALIASES) if (pattern.test(raw)) {
    for (const id of ids) { const component = components.find(c => c.id === id); if (component) return notatedDrum(instrumentId, component.midi); }
  }
  const intent = kitHitIntent(sourceHit, hit);
  if (!components.length) {
    if (def.drum?.mid !== undefined) return notatedDrum(instrumentId, def.drum.mid);
    throw new Error(`No drum note mapping is authored for ${instrumentId}`);
  }
  const preferred = findKitComponent(instrumentId, intent, undefined, index);
  if (!preferred) throw new Error(`No ${intent} component is authored for ${instrumentId}${sourceHit ? ` (${sourceHit})` : ''}`);
  return notatedDrum(instrumentId, preferred.midi);
}
