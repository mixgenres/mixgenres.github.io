import { GESTURE_NAMES } from '../engine/band/gestures';
import { meter, programFor, scoreNotes, selectedTracks, stringTuning, timeline, type ExportContext, type ScoreNote } from './model';
/** GP5.00 binary writer. String parts only; rejects unplayable voicings instead of dropping notes. */
class Writer {
  data: number[] = [];
  byte(n: number) { this.data.push(n & 255); }
  short(n: number) { this.byte(n); this.byte(n >> 8); }
  int(n: number) { this.short(n); this.short(n >> 16); }
  zeros(n: number) { for (let i = 0; i < n; i++) this.byte(0); }
  // GP5 stores legacy single-byte text. Transliterate names for old readers.
  text(s: string, width?: number) {
    const bytes = [...s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')].map(c => c.charCodeAt(0) < 256 ? c.charCodeAt(0) : 63).slice(0, width ?? 255);
    if (width === undefined) this.int(bytes.length + 1);
    this.byte(bytes.length); for (const b of bytes) this.byte(b);
    if (width !== undefined) this.zeros(width - bytes.length);
  }
}
const rhythms = [
  { ticks: 3840, code: -2 }, { ticks: 1920, code: -1 }, { ticks: 960, code: 0 }, { ticks: 640, code: 0, triplet: true },
  { ticks: 480, code: 1 }, { ticks: 320, code: 1, triplet: true }, { ticks: 240, code: 2 }, { ticks: 160, code: 2, triplet: true },
  { ticks: 120, code: 3 }, { ticks: 80, code: 3, triplet: true }, { ticks: 40, code: 4, triplet: true },
];
interface Position { string: number; fret: number }
export function assignStringPositions(notes: ScoreNote[], tuning: number[]): Map<ScoreNote, Position> {
  const assigned = new Map<ScoreNote, Position>();
  const groups = new Map<number, ScoreNote[]>();
  for (const note of notes) { const group = groups.get(note.start) ?? []; group.push(note); groups.set(note.start, group); }
  for (const [start, group] of groups) {
    const used = new Set(notes.filter(n => n.start < start && n.end > start).map(n => assigned.get(n)!.string));
    const assign = (index: number): boolean => {
      if (index === group.length) return true;
      const n = group[index];
      const candidates = tuning.map((midi, i) => ({ string: i + 1, fret: Math.round(n.note.midi) - midi })).filter(p => p.fret >= 0 && p.fret <= 24 && !used.has(p.string)).sort((a, b) => a.fret - b.fret);
      for (const p of candidates) { used.add(p.string); assigned.set(n, p); if (assign(index + 1)) return true; used.delete(p.string); assigned.delete(n); }
      return false;
    };
    if (!assign(0)) throw new Error('This part exceeds standard guitar/bass tuning or simultaneous string capacity. Use MIDI or standard MusicXML for the full performance.');
  }
  return assigned;
}
export function gp5Bytes(ctx: ExportContext): Uint8Array {
  const tracks = selectedTracks(ctx);
  if (tracks.some(t => !stringTuning(t))) throw new Error('GP5 export supports guitar and bass parts. Select those parts, or use MusicXML/MIDI for other instruments.');
  if (tracks.length > 15) throw new Error('Export at most 15 string parts per GP5 file.');
  const [beats, denominator] = meter(ctx), bars = timeline(ctx.performance);
  if (!bars.length) throw new Error('No measures to export.');
  const w = new Writer();
  w.text('FICHIER GUITAR PRO v5.00', 30);
  for (const s of [ctx.song.title, '', '', '', '', '', '', 'MixGenres', 'Quantized score; MIDI/JSON preserve exact performance.']) w.text(s);
  w.int(0); // notice
  w.int(0); for (let i = 0; i < 5; i++) { w.int(0); w.int(0); } // lyrics
  for (const n of [210, 297, 10, 10, 15, 10, 100]) w.int(n);
  w.short(0); for (let i = 0; i < 10; i++) w.text(i === 0 ? '%TITLE%' : '');
  w.text(''); w.int(Math.round(bars[0].bpm)); w.byte(0); w.int(0);
  for (let i = 0; i < 64; i++) {
    const channel = i % 16;
    const track = tracks.find((_, index) => (index < 9 ? index : index + 1) === channel);
    w.int(channel === 9 ? -1 : track ? programFor(track) : 0);
    for (const n of [12, 8, 0, 0, 0, 0, 0, 0]) w.byte(n);
  }
  for (let i = 0; i < 19; i++) w.short(-1);
  w.int(0); w.int(bars.length); w.int(tracks.length);
  bars.forEach((_, i) => { if (i) w.byte(0); w.byte(i ? 0 : 3); if (!i) { w.byte(beats); w.byte(denominator); for (const n of [2, 2, 2, 2]) w.byte(n); } w.byte(0); w.byte(0); });
  tracks.forEach((track, i) => {
    const tuning = stringTuning(track)!;
    w.byte(0); w.byte(0x88); w.text(track.name, 40); w.int(tuning.length);
    for (let j = 0; j < 7; j++) w.int(tuning[j] ?? 0);
    const channel = (i < 9 ? i : i + 1) + 1;
    w.int(1); w.int(channel); w.int(channel); w.int(24); w.int(0);
    for (const n of [70, 90, 120, 0]) w.byte(n);
    w.short(3); w.zeros(3); w.int(track.role === 'bass' ? 12 : 0); w.int(track.role === 'bass' ? 12 : 0); w.int(100); w.zeros(12);
    w.int(programFor(track)); w.int(1); w.int(0); w.short(0); w.byte(0);
  });
  w.zeros(2);
  const data = tracks.map(t => { const notes = scoreNotes(ctx, t); return { notes, positions: assignStringPositions(notes, stringTuning(t)!) }; });
  bars.forEach((bar, bi) => data.forEach(({ notes, positions: locations }, ti) => {
    const boundaries = [...new Set([bar.tick, bar.tick + bar.ticks, ...notes.flatMap(n => [n.start, n.end]).filter(t => t > bar.tick && t < bar.tick + bar.ticks)])].sort((a, b) => a - b);
    const chunks: { start: number; rhythm: typeof rhythms[number] }[] = [];
    for (let i = 0; i < boundaries.length - 1; i++) {
      let cursor = boundaries[i];
      while (cursor < boundaries[i + 1]) { const rhythm = rhythms.find(r => r.ticks <= boundaries[i + 1] - cursor)!; chunks.push({ start: cursor, rhythm }); cursor += rhythm.ticks; }
    }
    w.int(chunks.length);
    for (const [ci, { start, rhythm }] of chunks.entries()) {
      const active = notes.filter(n => n.start <= start && n.end > start).sort((a, b) => locations.get(a)!.string - locations.get(b)!.string);
      const gestures = [...new Set(active.filter(n => n.start === start).map(n => GESTURE_NAMES[n.note.gestureCode]).filter(g => g && !['tone', 'sustain'].includes(g)))].join(', ');
      const tempoChange = ti === 0 && ci === 0 && bi > 0 && bars[bi - 1].bpm !== bar.bpm;
      const flags = (active.length ? 0 : 0x40) | (rhythm.triplet ? 0x20 : 0) | (gestures ? 4 : 0) | (tempoChange ? 0x10 : 0);
      w.byte(flags); if (!active.length) w.byte(2); w.byte(rhythm.code); if (rhythm.triplet) w.int(3);
      if (gestures) w.text(gestures);
      if (tempoChange) {
        w.byte(-1); w.int(0); w.int(1); w.int(0); w.short(0); w.zeros(2);
        for (let i = 0; i < 6; i++) w.byte(-1);
        w.text(''); w.int(Math.round(bar.bpm)); w.byte(0); w.byte(0); w.byte(-1);
      }
      w.byte(active.reduce((mask, n) => mask | (1 << (7 - locations.get(n)!.string)), 0));
      for (const n of active) {
        const tie = start > n.start;
        w.byte(0x30 | (n.note.accent > 0.7 ? 0x40 : 0)); w.byte(tie ? 2 : 1);
        w.byte(Math.max(1, Math.min(8, Math.round((n.note.vel + 15) / 16)))); w.byte(tie ? 0 : locations.get(n)!.fret); w.byte(0);
      }
      w.short(0);
    }
    w.int(0); w.byte(0); // empty second voice and automatic line break
  }));
  return new Uint8Array(w.data);
}
