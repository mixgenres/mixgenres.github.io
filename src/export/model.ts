import type { Performance, PerfNote } from '../engine/band/performanceData';
import type { Track } from '../types';
import { INSTRUMENTS_BY_ID } from '../engine/lookup/instruments';

export interface ExportSong {
  title: string;
  timeSignature: string;
  tracks: Track[];
  regions: { id: string; name: string }[];
}
export interface ExportContext { song: ExportSong; performance: Performance; selectedTrackIds: string[] }
export const PPQ = 960;
export const xml = (value: string) => value.replace(/[<>&"']/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[c]!);
export const filename = (value: string) => value.normalize('NFKD').replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80) || 'song';
export function selectedTracks(ctx: ExportContext): Track[] {
  const ids = new Set(ctx.selectedTrackIds);
  const tracks = ctx.song.tracks.filter(t => ids.has(t.id));
  if (!tracks.length) throw new Error('Select at least one instrument to export.');
  return tracks;
}
export function isPercussion(track: Track): boolean {
  const def = INSTRUMENTS_BY_ID[track.instrumentId ?? track.instrument];
  return def?.voicing === 'unpitched' || !!def?.drum || !!def?.kit || ['drums', 'percussion'].includes(track.role);
}
export function stringTuning(track: Track): number[] | undefined {
  const id = track.instrumentId ?? track.instrument;
  if (/guitar|guitarra/.test(id)) return [64, 59, 55, 50, 45, 40];
  if (/bass/.test(id) && !/synth|tuba|clarinet|bassoon/.test(id)) return [43, 38, 33, 28];
  return undefined;
}
/** General MIDI approximations; the physical synthesis patches themselves aren't portable. */
export function programFor(track: Track): number {
  const id = track.instrumentId ?? track.instrument;
  if (/bass/.test(id)) return /synth/.test(id) ? 38 : /electric/.test(id) ? 33 : 32;
  if (/guitar|guitarra/.test(id)) return /electric/.test(id) ? 27 : 24;
  if (/piano/.test(id)) return 0;
  if (/organ/.test(id)) return 16;
  if (/accordion|bandoneon/.test(id)) return 21;
  if (/violin/.test(id)) return 40;
  if (/viola/.test(id)) return 41;
  if (/cello/.test(id)) return 42;
  if (/trumpet/.test(id)) return 56;
  if (/trombone/.test(id)) return 57;
  if (/sax/.test(id)) return 65;
  if (/clarinet/.test(id)) return 71;
  if (/flute/.test(id)) return 73;
  if (/vibra/.test(id)) return 11;
  if (/marimba/.test(id)) return 12;
  if (/strings/.test(id)) return 48;
  return 0;
}
export function meter(ctx: ExportContext): [number, number] {
  const [n, d] = ctx.song.timeSignature.split('/').map(Number);
  if (!Number.isInteger(n) || n < 1 || n > 64 || ![1, 2, 4, 8, 16, 32].includes(d)) throw new Error('Unsupported time signature.');
  return [n, d];
}
export function timeline(perf: Performance) {
  let tick = 0;
  return perf.bars.map(bar => {
    const entry = { ...bar, tick, ticks: Math.round(bar.beatsPerBar * PPQ) };
    tick += entry.ticks;
    return entry;
  });
}
export function createTickMapper(perf: Performance) {
  const bars = timeline(perf);
  return (seconds: number): number => {
    let lo = 0, hi = bars.length;
    while (lo < hi) { const mid = (lo + hi) >>> 1; if (bars[mid].start <= seconds) lo = mid + 1; else hi = mid; }
    const bar = bars[Math.max(0, lo - 1)];
    return Math.max(0, Math.round(bar ? bar.tick + (seconds - bar.start) * bar.bpm / 60 * PPQ : seconds * 2 * PPQ));
  };
}
export function tickAt(perf: Performance, seconds: number): number { return createTickMapper(perf)(seconds); }
export interface ScoreNote { note: PerfNote; start: number; end: number; voice: number }
/** Quantized notation is separate from the exact performance used by MIDI/JSON. */
export function scoreNotes(ctx: ExportContext, track: Track): ScoreNote[] {
  const ends: number[] = [];
  const ticks = createTickMapper(ctx.performance);
  return ctx.performance.notes.filter(n => n.trackId === track.id).sort((a, b) => a.time - b.time || b.midi - a.midi).map(note => {
    const start = Math.round(ticks(note.time) / 40) * 40;
    const end = Math.max(start + 40, Math.round(ticks(note.time + note.dur) / 40) * 40);
    let voice = ends.findIndex(t => t <= start);
    if (voice < 0) voice = ends.length;
    ends[voice] = end;
    return { note, start, end, voice: voice + 1 };
  });
}
export function pitch(midi: number) {
  const names = ['C', 'C', 'D', 'D', 'E', 'F', 'F', 'G', 'G', 'A', 'A', 'B'];
  const pc = ((Math.round(midi) % 12) + 12) % 12;
  return { step: names[pc], alter: [1, 3, 6, 8, 10].includes(pc) ? 1 : 0, octave: Math.floor(midi / 12) - 1 };
}
