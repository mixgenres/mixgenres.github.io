import type { Performance, PerfNote } from './performanceData';
import { GESTURE_NAMES } from './gestures';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import { techniqueMechanics } from '../../data/performance/techniqueMechanics';

/** Finish mechanics after phrase-level technique choices. A percussion action
 * belongs to one attack, not to every pitch in an inferred chord. Written beat
 * and duration remain intact; a strum spread is performance expression only. */
export function realizeTechniquePerformance(performance: Performance): void {
  const groups = new Map<string, PerfNote[]>();
  for (const note of performance.notes) {
    const key = `${note.trackId}:${note.attackId ?? `${note.time}:${note.gestureCode}`}`;
    const group = groups.get(key) ?? []; group.push(note); groups.set(key, group);
  }
  const notes: PerfNote[] = [];
  for (const group of groups.values()) {
    group.sort((a, b) => a.midi - b.midi);
    const first = group[0], def = INSTRUMENTS_BY_ID[performance.trackInfo?.[first.trackId]?.instrumentId ?? ''];
    if (!def) { notes.push(...group); continue; }
    const mechanics = techniqueMechanics(def, GESTURE_NAMES[first.gestureCode] ?? 'tone');
    const unpitched = mechanics.pitchIdentity === 'unpitched';
    const selected = unpitched ? [first] : group;
    const stroke = first.musicianNotation?.stroke;
    const strum = def.id === 'guitar' && /^(rasgueado|abanico|strum|chord-rake|alzapua)$/.test(GESTURE_NAMES[first.gestureCode] ?? '');
    const start = Math.min(...group.map(n => n.time));
    selected.forEach((note, index) => {
      note.pitchIdentity = unpitched ? 'unpitched' : 'pitched';
      note.bodyAttack = index === (strum && stroke === 'up' ? selected.length - 1 : 0) && Boolean(note.musicianNotation?.bodyTechnique);
      if (strum && group.length > 1) {
        const rank = stroke === 'up' ? group.length - 1 - index : index;
        // Bound the entire sweep by the authored sounding duration.
        const spread = Math.min(.018, Math.min(...group.map(n => n.dur)) * .2);
        note.time = start + rank / (group.length - 1) * spread;
      }
      notes.push(note);
    });
  }
  performance.notes = notes.sort((a, b) => a.time - b.time || a.trackId.localeCompare(b.trackId) || a.midi - b.midi);
}
