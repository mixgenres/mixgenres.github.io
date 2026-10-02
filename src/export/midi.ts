import { meter, PPQ, programFor, selectedTracks, createTickMapper, timeline, isPercussion, type ExportContext } from './model';
const textEncoder = new TextEncoder();
function vlq(value: number): number[] {
  if (!Number.isSafeInteger(value) || value < 0 || value > 0x0fffffff) throw new Error('MIDI event is outside the supported timeline.');
  const out = [value & 127];
  while ((value = Math.floor(value / 128))) out.unshift((value & 127) | 128);
  return out;
}
interface Event { tick: number; priority: number; bytes: number[] }
const meta = (type: number, data: number[]) => [255, type, ...vlq(data.length), ...data];
const label = (type: number, name: string) => meta(type, [...textEncoder.encode(name)]);
const clamp = (n: number, max = 127) => Math.max(0, Math.min(max, Math.round(n)));
function chunk(events: Event[], endTick: number): number[] {
  endTick = events.reduce((end, event) => Math.max(end, event.tick), endTick);
  events.push({ tick: endTick, priority: 100, bytes: [255, 47, 0] });
  events.sort((a, b) => a.tick - b.tick || a.priority - b.priority);
  let last = 0;
  const bytes: number[] = [];
  for (const e of events) { bytes.push(...vlq(e.tick - last), ...e.bytes); last = e.tick; }
  const n = bytes.length;
  return [77, 84, 114, 107, (n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255, ...bytes];
}
/** SMF type 1, dedicated conductor track, tempo map, GM programs, CCs and bends. */
export function midiBytes(ctx: ExportContext): Uint8Array {
  const tracks = selectedTracks(ctx);
  const ticks = createTickMapper(ctx.performance);
  if (tracks.filter(t => !isPercussion(t)).length > 15) throw new Error('MIDI supports 15 melodic channels per file. Export smaller groups of parts.');
  const [n, d] = meter(ctx);
  const selected = new Set(ctx.selectedTrackIds);
  const endTick = ctx.performance.notes.reduce((end, note) => selected.has(note.trackId) ? Math.max(end, ticks(note.time + note.dur)) : end, ticks(ctx.performance.duration));
  const conductor: Event[] = [{ tick: 0, priority: 0, bytes: label(3, ctx.song.title) }, { tick: 0, priority: 1, bytes: meta(0x58, [n, Math.log2(d), 24, 8]) }];
  let region = '', bpm = -1;
  for (const bar of timeline(ctx.performance)) {
    if (bar.bpm !== bpm) {
      const micros = Math.round(60000000 / bar.bpm);
      conductor.push({ tick: bar.tick, priority: 2, bytes: meta(0x51, [micros >>> 16, (micros >>> 8) & 255, micros & 255]) });
      bpm = bar.bpm;
    }
    if (bar.regionId !== region) { conductor.push({ tick: bar.tick, priority: 3, bytes: label(6, ctx.song.regions.find(r => r.id === bar.regionId)?.name ?? bar.regionId) }); region = bar.regionId; }
  }
  const chunks = [chunk(conductor, endTick)];
  let channelIndex = 0;
  for (const track of tracks) {
    if (channelIndex === 9) channelIndex++;
    const channel = isPercussion(track) ? 9 : channelIndex++;
    const events: Event[] = [{ tick: 0, priority: 0, bytes: label(3, track.name) }, { tick: 0, priority: 1, bytes: [0xc0 | channel, programFor(track)] }];
    const cc = (tick: number, number: number, value: number, priority = 2) => events.push({ tick, priority, bytes: [0xb0 | channel, clamp(number), clamp(value)] });
    cc(0, 7, track.volume * 100); cc(0, 10, (track.pan ?? 0.5) * 127);
    // Explicit ±2 semitone pitch bend range.
    for (const [number, value] of [[101, 0], [100, 0], [6, 2], [38, 0], [101, 127], [100, 127]]) cc(0, number, value);
    for (const c of ctx.performance.ccs.filter(c => c.trackId === track.id)) cc(ticks(c.time), c.cc, c.value, 4);
    for (const note of ctx.performance.notes.filter(note => note.trackId === track.id)) {
      const start = ticks(note.time), end = Math.max(start + 1, ticks(note.time + note.dur));
      events.push({ tick: start, priority: 10, bytes: [0x90 | channel, clamp(note.midi), Math.max(1, clamp(note.vel))] });
      events.push({ tick: end, priority: 5, bytes: [0x80 | channel, clamp(note.midi), 0] });
      for (const bend of note.pitchBend ?? []) {
        const tick = ticks(note.time + bend.offset), value = clamp(bend.value, 16383);
        if (tick >= start && tick < end) events.push({ tick, priority: 9, bytes: [0xe0 | channel, value & 127, value >>> 7] });
      }
      if (note.pitchBend?.length) events.push({ tick: end, priority: 6, bytes: [0xe0 | channel, 0, 64] });
    }
    chunks.push(chunk(events, endTick));
  }
  const count = chunks.length;
  const header = [77, 84, 104, 100, 0, 0, 0, 6, 0, 1, count >>> 8, count & 255, PPQ >>> 8, PPQ & 255];
  return new Uint8Array([...header, ...chunks.flat()]);
}
