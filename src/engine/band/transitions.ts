import type { Sheet } from '../sheet/sheet';
import { getResolvedSectionStyle } from '../sheet/sheet';
import type { Performance } from './performanceData';
import type { NotatedScore } from '../score/notatedScore';
import { energyOf } from '../sheet/sectionEnergy';
import { LRUMap, registerCache } from '../cache/lru';
import { contentKey } from '../cache/contentKey';

export interface PartTransition {
  key: string; trackId: string; fromSectionId: string; toSectionId: string;
  fromChord: string; toChord: string; fromTempo: number; toTempo: number;
  requested: string; realization: 'written-boundary' | 'authored-fill' | 'rest' | 'sustain';
  incoming: { midi: number; frequencyHz?: number; remainingSeconds: number; held: boolean; technique: number; bellows?: number; button?: number }[];
  nextPitches: number[]; patterns: string[];
}
const transitions = new LRUMap<string, PartTransition>(2048, 'partTransitions'); registerCache(transitions);

/** Boundary state is explicit and cached with both sides. No generic drum fill
 * is injected into a culture whose written vocabulary does not support it. */
export function planPartTransitions(sheet: Sheet, notation: NotatedScore, performance: Performance): PartTransition[] {
  const result: PartTransition[] = [];
  for (let i = 1; i < sheet.regions.length; i++) {
    const from = sheet.regions[i-1], to = sheet.regions[i], time = performance.bars[to.start].start;
    const style = getResolvedSectionStyle(sheet, from), grammar = style.contract.transitionGrammar;
    const delta = energyOf(to)-energyOf(from), requested = delta > 0 ? grammar.onEnergyRise : delta < 0 ? grammar.onEnergyFall : 'hold';
    for (const track of sheet.tracks) {
      const previous = performance.notes.filter(n => n.trackId === track.id && n.bar >= from.start && n.bar < from.end);
      const next = performance.notes.filter(n => n.trackId === track.id && n.bar >= to.start && n.bar < to.end);
      const incoming = previous.filter(n => n.time + n.dur > time || n.time === previous.at(-1)?.time)
        .map(n => ({ midi: n.midi, frequencyHz: n.frequencyHz, remainingSeconds: Number(Math.max(0, n.time+n.dur-time).toFixed(12)),
          held: n.time+n.dur > time, technique: n.gestureCode, bellows: n.bellowsDirectionCode, button: n.bandoneonButtonIndex }));
      const fromCell = notation.sections[i-1].cells[track.id], toCell = notation.sections[i].cells[track.id];
      const boundary = fromCell.bars.at(-1)!;
      const authoredFill = /fill|cadence|phraseEnd/.test(boundary.variation ?? '') || boundary.attacks.some(a => a.hit === 'fill');
      const fields = { trackId: track.id, fromSectionId: from.id, toSectionId: to.id, fromChord: sheet.measures[from.end-1].chord,
        toChord: sheet.measures[to.start].chord, fromTempo: performance.bars[from.end-1].bpm, toTempo: performance.bars[to.start].bpm,
        requested: String(requested ?? 'hold'), realization: !next.length ? 'rest' as const : authoredFill ? 'authored-fill' as const : incoming.some(n => n.held) ? 'sustain' as const : 'written-boundary' as const,
        incoming, nextPitches: next.filter(n => n.time === next[0]?.time).map(n => n.midi), patterns: [boundary.patternId, toCell.bars[0].patternId] };
      const key = contentKey(['transition-v1', boundary, toCell.bars[0], fields, grammar]);
      let transition = transitions.get(key);
      if (!transition) { transition = { key, ...fields }; transitions.set(key, transition); }
      result.push(transition);
    }
  }
  return result;
}
