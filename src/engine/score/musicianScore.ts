import type { Sheet } from '../sheet/sheet';
import type { Performance, PerfNote, BarTime } from '../band/performanceData';
import { GESTURE_NAMES } from '../band/gestures';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';

/** Quarter-note beats. Fractions preserve tuplets and fine authored positions;
 * expressive displacement is stored separately in seconds. */
export interface BeatFraction { numerator: number; denominator: number }
export const beatValue = (beat: BeatFraction) => beat.numerator / beat.denominator;
export function beatFraction(value: number): BeatFraction {
  if (!Number.isFinite(value)) throw new Error('Score beat must be finite');
  const sign = value < 0 ? -1 : 1;
  let x = Math.abs(value), n0 = 0, n1 = 1, d0 = 1, d1 = 0;
  for (let i = 0; i < 24; i++) {
    const a = Math.floor(x), n = a * n1 + n0, d = a * d1 + d0;
    if (!Number.isSafeInteger(n) || d > 1_000_000_000) break;
    n0 = n1; n1 = n; d0 = d1; d1 = d;
    if (Math.abs(n / d - Math.abs(value)) < 1e-10 || x === a) break;
    x = 1 / (x - a);
  }
  return { numerator: sign * n1, denominator: d1 || 1 };
}
export const formatBeat = (beat: BeatFraction) => beat.denominator === 1 ? String(beat.numerator) : `${beat.numerator}/${beat.denominator}`;

type NotePlayback = Omit<PerfNote, 'time' | 'dur' | 'midi' | 'frequencyHz' | 'vel' | 'trackId' | 'bar' | 'notation'>;
export interface ScoreNote {
  id: string;
  trackId: string;
  /** Zero-based notated bar and beat; sourceBar retains phrase ownership. */
  bar: number;
  sourceBar: number;
  position: BeatFraction;
  duration: BeatFraction;
  midi: number;
  frequencyHz: number;
  velocity: number;
  technique: string;
  pitchIdentity?: 'pitched' | 'unpitched';
  expression: { offsetSeconds: number; gateRatio: number };
  source: { pitch: 'written' | 'composed'; rhythm: 'written' | 'composed'; technique: 'written' | 'composed'; derived: boolean };
  playback: NotePlayback;
}
export interface ScoreRest { trackId: string; bar: number; position: BeatFraction; duration: BeatFraction }
export interface ScoreSegment { note: ScoreNote; bar: number; position: number; duration: number; tieIn: boolean; tieOut: boolean }
export interface MusicianScore {
  version: 1;
  title: string;
  worldId: string;
  styleId?: string;
  meter: string;
  pitchConvention: 'concert';
  parts: Array<{ id: string; name: string; instrumentId: string; role: string; percussion: boolean }>;
  bars: Array<BarTime & { chord: string; section: string }>;
  notes: ScoreNote[];
  rests: ScoreRest[];
  phrases: Performance['phrases'];
  controllers: Performance['ccs'];
  duration: number;
  tail: number;
  blends: Performance['blends'];
  mixTimeline?: Performance['mixTimeline'];
}

function normalizePosition(bars: BarTime[], bar: number, beat: number) {
  while (beat < 0 && bar > 0) { bar--; beat += bars[bar].beatsPerBar; }
  while (bar < bars.length - 1 && beat >= bars[bar].beatsPerBar) { beat -= bars[bar].beatsPerBar; bar++; }
  return { bar, beat: Math.max(0, beat) };
}
export function scorePositionSeconds(score: { bars: BarTime[] }, bar: number, beat: number): number {
  const position = normalizePosition(score.bars, bar, beat), measure = score.bars[position.bar];
  if (!measure) throw new Error(`Score refers to missing bar ${bar + 1}`);
  return measure.start + position.beat * 60 / measure.bpm;
}
export function scoreDurationSeconds(score: { bars: BarTime[] }, bar: number, beat: number, length: number) {
  return scorePositionSeconds(score, bar, beat + length) - scorePositionSeconds(score, bar, beat);
}

/** Composition has already selected every pitch, voicing and gesture. This
 * boundary records those decisions before SoundFont sample routing sees them. */
export function musicianScoreFromArrangement(sheet: Sheet, performance: Performance): MusicianScore {
  const bars = performance.bars.map(bar => ({ ...bar, chord: sheet.measures[bar.index]?.chord ?? '',
    section: sheet.regions.find(r => r.id === bar.regionId)?.name ?? bar.regionId }));
  const notes = performance.notes.map((note, index): ScoreNote => {
    const bar = bars[note.notation?.bar ?? note.bar];
    if (!bar) throw new Error(`Note has no score measure: ${note.trackId}/${note.bar}`);
    const written = note.notation;
    const position = normalizePosition(bars, bar.index, written?.beat ?? (note.time - bar.start) * bar.bpm / 60);
    const length = written?.durationBeats ?? note.dur * bar.bpm / 60;
    const nominalTime = scorePositionSeconds({ bars }, position.bar, position.beat);
    // Gate length is an expressive ratio of the written duration. It remains
    // distinct from notation, including rolled chords and monophonic releases.
    const nominalDuration = scoreDurationSeconds({ bars }, position.bar, position.beat, length);
    const { time: _time, dur: _dur, midi: _midi, frequencyHz: _frequency, vel: _vel,
      trackId: _track, bar: _bar, notation: _notation, ...playback } = note;
    return { id: `${note.attackId ?? `${note.trackId}:${note.bar}`}:${index}`, trackId: note.trackId,
      bar: position.bar, sourceBar: note.bar, position: beatFraction(position.beat), duration: beatFraction(length),
      midi: note.midi, frequencyHz: note.frequencyHz ?? 440 * 2 ** ((note.midi - 69) / 12),
      velocity: note.vel, technique: GESTURE_NAMES[note.gestureCode] ?? String(note.gestureCode), pitchIdentity: note.pitchIdentity,
      expression: { offsetSeconds: note.time - nominalTime, gateRatio: note.dur / nominalDuration },
      source: { pitch: note.authoredPitch ? 'written' : 'composed', rhythm: note.authoredDuration ? 'written' : 'composed',
        technique: note.authoredTechnique ? 'written' : 'composed', derived: note.originCode === 1 }, playback };
  });
  const score: MusicianScore = { version: 1, title: sheet.title, worldId: sheet.worldId, styleId: sheet.styleId,
    meter: sheet.timeSignature, pitchConvention: 'concert',
    parts: sheet.tracks.map(track => {
      const instrumentId = track.instrumentId ?? track.instrument, def = INSTRUMENTS_BY_ID[instrumentId];
      return { id: track.id, name: track.name, instrumentId, role: track.role, percussion: Boolean(def?.voicing === 'unpitched' || def?.kit || def?.drum) };
    }),
    bars, notes, rests: [], phrases: performance.phrases, controllers: performance.ccs.map(cc => ({ ...cc })),
    duration: performance.duration, tail: performance.tail, blends: performance.blends, mixTimeline: performance.mixTimeline };
  score.rests = scoreRests(score);
  validateMusicianScore(score);
  return score;
}

/** Silence is the complement of written sounding spans, including notes tied
 * from earlier bars. Polyphonic/chord overlaps never become fake rests. */
export function scoreRests(score: MusicianScore): ScoreRest[] {
  const starts: number[] = []; let total = 0;
  for (const bar of score.bars) { starts.push(total); total += bar.beatsPerBar; }
  const rests: ScoreRest[] = [];
  for (const part of score.parts) {
    const spans = score.notes.filter(n => n.trackId === part.id).map(n => ({
      start: starts[n.bar] + beatValue(n.position), end: starts[n.bar] + beatValue(n.position) + beatValue(n.duration),
    })).sort((a, b) => a.start - b.start);
    for (const bar of score.bars) {
      const start = starts[bar.index], end = start + bar.beatsPerBar;
      let cursor = start;
      for (const span of spans) {
        if (span.end <= cursor || span.start >= end) continue;
        if (span.start > cursor + 1e-9) rests.push({ trackId: part.id, bar: bar.index, position: beatFraction(cursor - start), duration: beatFraction(Math.min(span.start, end) - cursor) });
        cursor = Math.max(cursor, Math.min(end, span.end));
        if (cursor >= end) break;
      }
      if (cursor < end - 1e-9) rests.push({ trackId: part.id, bar: bar.index, position: beatFraction(cursor - start), duration: beatFraction(end - cursor) });
    }
  }
  return rests;
}

/** Split written sustains at measure boundaries; continuation is a tie, never
 * another attack. Final continuations retain their length beyond the form. */
export function scoreNoteSegments(score: MusicianScore, trackId?: string): ScoreSegment[] {
  const segments: ScoreSegment[] = [];
  for (const note of score.notes) {
    if (trackId && note.trackId !== trackId) continue;
    let bar = note.bar, position = beatValue(note.position), remaining = beatValue(note.duration), tieIn = false;
    while (remaining > 1e-9) {
      const measureLength = (score.bars[bar] ?? score.bars.at(-1))!.beatsPerBar;
      if (position >= measureLength - 1e-9) { position -= measureLength; bar++; continue; }
      const duration = Math.min(remaining, measureLength - position), tieOut = remaining > duration + 1e-9;
      segments.push({ note, bar, position, duration, tieIn, tieOut });
      remaining -= duration; position = 0; bar++; tieIn = true;
    }
  }
  return segments;
}

export function validateMusicianScore(score: MusicianScore): void {
  const parts = new Set(score.parts.map(p => p.id)), ids = new Set<string>();
  if (score.version !== 1 || score.pitchConvention !== 'concert') throw new Error('Unsupported musician score');
  if (!score.bars.length || parts.size !== score.parts.length) throw new Error('Invalid score form/parts');
  for (const [index, bar] of score.bars.entries()) if (!(bar.index === index && bar.bpm > 0 && Number.isFinite(bar.bpm)
    && bar.beatsPerBar > 0 && Number.isFinite(bar.beatsPerBar) && Number.isFinite(bar.start))) throw new Error('Invalid score tempo/meter');
  for (const note of score.notes) {
    if (!parts.has(note.trackId) || !score.bars[note.bar] || !score.bars[note.sourceBar] || ids.has(note.id)) throw new Error(`Invalid score ownership: ${note.id}`);
    ids.add(note.id);
    for (const fraction of [note.position, note.duration]) if (!Number.isSafeInteger(fraction.numerator) || !Number.isSafeInteger(fraction.denominator) || fraction.denominator <= 0) throw new Error(`Invalid beat fraction: ${note.id}`);
    if (!Number.isInteger(note.midi) || note.midi < 0 || note.midi > 127 || !(note.frequencyHz > 0 && Number.isFinite(note.frequencyHz))
      || beatValue(note.position) < 0 || beatValue(note.position) >= score.bars[note.bar].beatsPerBar
      || !(beatValue(note.duration) > 0) || !(note.expression.gateRatio > 0 && Number.isFinite(note.expression.gateRatio))
      || !Number.isFinite(note.expression.offsetSeconds) || !Number.isInteger(note.velocity) || note.velocity < 1 || note.velocity > 127
      || GESTURE_NAMES[note.playback.gestureCode] !== note.technique) throw new Error(`Unresolved score note: ${note.id}`);
  }
}

/** Pure score-to-clock projection. It makes no pitch, harmony, voicing,
 * randomness, technique or instrument-model decisions. */
export function compileMusicianScore(score: MusicianScore): Performance {
  validateMusicianScore(score);
  const notes = score.notes.map((note): PerfNote => ({ ...note.playback, trackId: note.trackId, bar: note.sourceBar,
    midi: note.midi, frequencyHz: note.frequencyHz, vel: note.velocity,
    time: Math.max(0, scorePositionSeconds(score, note.bar, beatValue(note.position)) + note.expression.offsetSeconds),
    dur: scoreDurationSeconds(score, note.bar, beatValue(note.position), beatValue(note.duration)) * note.expression.gateRatio,
    notation: { bar: note.bar, beat: beatValue(note.position), durationBeats: beatValue(note.duration) },
  })).sort((a, b) => a.time - b.time || a.trackId.localeCompare(b.trackId) || a.midi - b.midi);
  return { scoreVersion: 1, notes, bars: score.bars.map(({ chord: _chord, section: _section, ...bar }) => bar),
    ccs: score.controllers.map(cc => ({ ...cc })), phrases: score.phrases, duration: score.duration, tail: score.tail,
    blends: score.blends, worldId: score.worldId, mixTimeline: score.mixTimeline,
    trackInfo: Object.fromEntries(score.parts.map(part => [part.id, { instrumentId: part.instrumentId, role: part.role }])) };
}
