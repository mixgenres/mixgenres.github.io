import type { PerfNote } from './performanceData';
import type { Sheet } from '../sheet/sheet';
import type { Region } from '../../types';
import { parseChord } from '../sheet/musicTheory';
import { getInstrumentPerformanceProfile } from '../lookup/performance';

/** Relationships interpret open musical instructions; literal written pitches
 * remain constraints. Responses use actual preceding calls and local harmony. */
export function interpretRelationships(notes: PerfNote[], sheet: Sheet, region: Region): void {
  for (const relationship of sheet.relationships.filter(r => !r.regionId || r.regionId === region.id)) {
    const source = notes.filter(n => n.trackId === relationship.from && n.bar >= region.start && n.bar < region.end).sort((a,b) => a.time-b.time);
    const target = notes.filter(n => n.trackId === relationship.to && n.bar >= region.start && n.bar < region.end);
    if (!source.length || !target.length) continue;
    const track = sheet.tracks.find(t => t.id === relationship.to);
    if (!track) continue;
    const profile = getInstrumentPerformanceProfile(track.instrumentId ?? track.instrument);
    for (const note of target) {
      const call = source.filter(n => n.time <= note.time).at(-1);
      if (!call) continue;
      const kind = relationship.kind.toLowerCase(), overlap = call.time + call.dur > note.time;
      if (/avoid|leave.?space/.test(kind) && overlap) note.vel = Math.max(1, Math.round(note.vel * .82));
      if (/accent.?with|reinforce|mirror/.test(kind) && Math.abs(call.time-note.time) < .035) {
        note.accent = call.accent; note.vel = Math.max(1, Math.min(127, Math.round((note.vel + call.vel) / 2)));
      }
      if (note.authoredPitch || note.percussion || !/lead|melody|counterline|voice/.test(note.soundContext?.role ?? track.role)) continue;
      if (!/answer|response|follow|mirror|complement|counter/.test(kind)) continue;
      const measureChord = sheet.measures.find(measure => measure.index === note.bar)?.chord;
      const harmonicChord = note.harmonicChord ?? measureChord;
      if (!harmonicChord) throw new Error(`Response note ${note.attackId ?? note.trackId} has no resolved harmony in bar ${note.bar + 1}`);
      const chord = parseChord(harmonicChord), pcs = new Set(chord.intervals.map(i => (chord.rootPc + i) % 12));
      const candidates: number[] = [];
      for (let midi = profile.capabilities.comfortableLowMidi; midi <= profile.capabilities.comfortableHighMidi; midi++) {
        if (pcs.has(midi % 12) && (!/complement|counter/.test(kind) || midi % 12 !== call.midi % 12)) candidates.push(midi);
      }
      const responseTarget = /answer|response/.test(kind) ? (call.midi + note.midi) / 2 : call.midi;
      candidates.sort((a,b) => Math.abs(a-responseTarget)-Math.abs(b-responseTarget) || Math.abs(a-note.midi)-Math.abs(b-note.midi));
      if (candidates.length) note.midi = candidates[0];
    }
  }
}
