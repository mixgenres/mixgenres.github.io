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
  realizeSlidePerformance(performance);
}

/** A written slide follows the next connected tone of the player's phrase.
 * A generic upward whole step at every slide sounded wrong on descending
 * bass/guitar lines. Resolve that musical target before the playback boundary. */
function realizeSlidePerformance(performance: Performance): void {
  const phrases = new Map<string, Map<string, PerfNote[]>>();
  for (const note of performance.notes) {
    if (note.pitchIdentity === 'unpitched' || note.drum || note.percussion) continue;
    const key = `${note.trackId}:${note.phraseId ?? ''}`;
    const attacks = phrases.get(key) ?? new Map<string, PerfNote[]>();
    const attack = note.attackId ?? String(note.time);
    const group = attacks.get(attack) ?? []; group.push(note); attacks.set(attack, group); phrases.set(key, attacks);
  }
  for (const attacks of phrases.values()) {
    const ordered = [...attacks.values()].sort((a, b) => a[0].time - b[0].time);
    ordered.forEach((group, index) => {
      const next = ordered[index + 1];
      for (const note of group) {
        if (note.pitchBend?.length || !/^(slide|continuous-slide)$/.test(GESTURE_NAMES[note.gestureCode] ?? '')) continue;
        // An isolated slide has no invented destination. Retain the written
        // pitch instead of gliding into a rest or across a phrase boundary.
        note.pitchBend = [{ offset: 0, value: 8192 }];
        if (!next?.length || next[0].time <= note.time
          || next[0].time > note.time + note.dur + Math.min(.12, note.dur * .25)) continue;
        const target = next.reduce((closest, candidate) => Math.abs(candidate.midi - note.midi) < Math.abs(closest.midi - note.midi) ? candidate : closest);
        const interval = note.frequencyHz && target.frequencyHz
          ? 12 * Math.log2(target.frequencyHz / note.frequencyHz)
          : target.midi - note.midi + ((target.tuningCents ?? 0) - (note.tuningCents ?? 0)) / 100;
        if (!Number.isFinite(interval) || Math.abs(interval) > 24) continue;
        note.pitchBendRangeSemitones = Math.max(2, Math.ceil(Math.abs(interval)));
        for (let point = 0; point <= 12; point++) note.pitchBend.push({
          offset: note.dur * (.55 + .43 * point / 12),
          value: Math.max(0, Math.min(16383, Math.round(8192 + interval / note.pitchBendRangeSemitones * 8192 * point / 12))),
        });
      }
    });
  }
}
