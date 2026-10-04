import { beatValue, scoreNoteSegments, validateMusicianScore, type MusicianScore, type ScoreSegment } from './musicianScore';
import { notatedDrum } from './percussionNotation';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import { INSTRUMENT_NOTATION_RULES } from '../../data/notation/rules';

const escapeXml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]!);
const decimal = (value: number) => String(Number(value.toFixed(9)));

/** Concert-pitch names. Spelling is chosen from the measure's chord; exact
 * sounding frequency and cents remain available in the canonical score. */
export function scorePitch(midi: number, chord = '') {
  const flats = /^[A-G]b/.test(chord);
  const names = flats ? ['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'] : ['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
  const name = names[midi % 12];
  return { name: `${name}${Math.floor(midi / 12) - 1}`, step: name[0], alter: name.includes('♭') ? -1 : name.includes('♯') ? 1 : 0, octave: Math.floor(midi / 12) - 1 };
}
export const scoreTuningCents = (midi: number, frequencyHz: number) => 1200 * Math.log2(frequencyHz / (440 * 2 ** ((midi - 69) / 12)));

function gcd(a: number, b: number): number { return b ? gcd(b, a % b) : a; }
function divisionsFor(score: MusicianScore) {
  let divisions = 1;
  for (const note of score.notes) for (const beat of [note.position, note.duration]) {
    const next = divisions / gcd(divisions, beat.denominator) * beat.denominator;
    if (next <= 10_000_000) divisions = next;
  }
  // MusicXML accepts decimal divisions for the remaining fine positions.
  return divisions;
}

interface ChordEvent { start: number; end: number; segments: ScoreSegment[] }
function voicesFor(segments: ScoreSegment[], assignments?: Map<string, number>): ChordEvent[][] {
  const chords = new Map<string, ChordEvent>();
  for (const segment of segments) {
    const key = `${assignments?.get(segment.note.id) ?? ''}:${decimal(segment.position)}:${decimal(segment.duration)}`;
    const chord = chords.get(key) ?? { start: segment.position, end: segment.position + segment.duration, segments: [] };
    chord.segments.push(segment); chords.set(key, chord);
  }
  const voices: ChordEvent[][] = [];
  for (const chord of [...chords.values()].sort((a, b) => a.start - b.start || b.end - a.end)) {
    if (assignments) {
      const index = assignments.get(chord.segments[0].note.id)!;
      while (voices.length <= index) voices.push([]);
      voices[index].push(chord); continue;
    }
    const voice = voices.find(voice => !voice.length || voice.at(-1)!.end <= chord.start + 1e-9);
    if (voice) voice.push(chord); else voices.push([chord]);
  }
  return voices.length ? voices : [[]];
}

function noteType(beats: number, tuplet?: { actual: number; normal: number }): string {
  if (tuplet) {
    // Explicit written ratios own time modification. Do not recursively infer
    // another triplet when a tied segment has a nonstandard normal duration.
    const type = noteType(beats * tuplet.actual / tuplet.normal).replace(/<time-modification>.*?<\/time-modification>/g, '');
    return `${type}<time-modification><actual-notes>${tuplet.actual}</actual-notes><normal-notes>${tuplet.normal}</normal-notes></time-modification>`;
  }
  const types: Array<[number, string]> = [[8,'breve'],[4,'whole'],[2,'half'],[1,'quarter'],[.5,'eighth'],[.25,'16th'],[.125,'32nd'],[.0625,'64th'],[.03125,'128th']];
  for (const [length, type] of types) {
    if (Math.abs(beats - length) < 1e-9) return `<type>${type}</type>`;
    if (Math.abs(beats - length * 1.5) < 1e-9) return `<type>${type}</type><dot/>`;
    if (Math.abs(beats - length * 2 / 3) < 1e-9) return `<type>${type}</type><time-modification><actual-notes>3</actual-notes><normal-notes>2</normal-notes><normal-type>${type}</normal-type></time-modification>`;
  }
  // Nonstandard authored lengths are encoded exactly through duration. We do
  // not round them into a different rhythmic value just to pick a notehead.
  return '';
}

/** MusicXML 4.0 score-partwise. Written beats, rests, overlapping voices,
 * microtonal targets and ties are independent of expressive playback offsets.
 * See https://www.w3.org/2021/06/musicxml40/tutorial/midi-compatible-part/ */
export function exportMusicXml(score: MusicianScore, tablature = false): string {
  validateMusicianScore(score);
  const divisions = divisionsFor(score), duration = (beats: number) => decimal(beats * divisions);
  const segments = scoreNoteSegments(score);
  const measureCount = Math.max(score.bars.length, ...segments.map(segment => segment.bar + 1));
  const parts = score.parts.map((part, index) => ({ ...part, xmlId: `P${index + 1}` }));
  const partList = parts.map(part => {
    const midis = [...new Set(score.notes.filter(n => n.trackId === part.id).map(n => n.midi))];
    const instruments = part.percussion ? midis.map(midi => `<score-instrument id="${part.xmlId}-I${midi}"><instrument-name>${escapeXml(notatedDrum(part.instrumentId, midi).name)}</instrument-name></score-instrument>`).join('') : '';
    const midiInstruments = part.percussion ? midis.map(midi => `<midi-instrument id="${part.xmlId}-I${midi}"><midi-channel>10</midi-channel><midi-unpitched>${midi + 1}</midi-unpitched></midi-instrument>`).join('') : '';
    return `<score-part id="${part.xmlId}"><part-name>${escapeXml(part.name)}</part-name>${instruments}${midiInstruments}</score-part>`;
  }).join('\n');
  const body = parts.map(part => {
    const instrument = INSTRUMENTS_BY_ID[part.instrumentId];
    const tuning = instrument?.notationRules?.openStrings ?? INSTRUMENT_NOTATION_RULES[part.instrumentId]?.openStrings;
    const partNotes = score.notes.filter(note => note.trackId === part.id);
    // TAB reports written positions. Never invent a fingering and present it
    // as the musician's original notation.
    const tab = tablature && !!tuning?.length && partNotes.length > 0 && partNotes.every(n =>
      n.playback.musicianNotation?.string !== undefined && n.playback.musicianNotation?.fret !== undefined);
    let beatOffset = 0;
    const starts = score.bars.map(bar => { const start = beatOffset; beatOffset += bar.beatsPerBar; return start; });
    const wholeNotes: ScoreSegment[] = score.notes.filter(note => note.trackId === part.id).map(note => ({ note,
      bar: note.bar, position: starts[note.bar] + beatValue(note.position), duration: beatValue(note.duration), tieIn: false, tieOut: false }));
    const assignments = new Map<string, number>();
    voicesFor(wholeNotes).forEach((voice, index) => voice.forEach(event => event.segments.forEach(segment => assignments.set(segment.note.id, index))));
    const measures: string[] = [];
    for (let barIndex = 0; barIndex < measureCount; barIndex++) {
      const bar = score.bars[barIndex] ?? score.bars.at(-1)!;
      const barSegments = segments.filter(segment => segment.note.trackId === part.id && segment.bar === barIndex);
      const voices = voicesFor(barSegments, assignments);
      const [beats, beatType] = score.meter.split('/');
      const clef = part.percussion ? '<sign>percussion</sign>' : tab ? '<sign>TAB</sign><line>5</line>' : /bass|low-anchor/.test(part.role) ? '<sign>F</sign><line>4</line>' : '<sign>G</sign><line>2</line>';
      const staff = tab ? `<staff-details><staff-lines>${tuning!.length}</staff-lines>${[...tuning!].reverse().map((string,index) => {
        const p = scorePitch(string.midi); return `<staff-tuning line="${index+1}"><tuning-step>${p.step}</tuning-step>${p.alter ? `<tuning-alter>${p.alter}</tuning-alter>` : ''}<tuning-octave>${p.octave}</tuning-octave></staff-tuning>`;
      }).join('')}</staff-details>` : '';
      const attributes = barIndex === 0 ? `<attributes><divisions>${divisions}</divisions><time><beats>${beats}</beats><beat-type>${beatType}</beat-type></time><clef>${clef}</clef>${staff}</attributes>` : '';
      const section = barIndex === 0 || bar.regionId !== score.bars[barIndex - 1]?.regionId;
      const words = section && barIndex < score.bars.length ? `<direction><direction-type><rehearsal>${escapeXml(bar.section)}</rehearsal></direction-type></direction>` : '';
      const tempo = barIndex === 0 || bar.bpm !== score.bars[barIndex - 1]?.bpm ? `<direction><direction-type><metronome><beat-unit>quarter</beat-unit><per-minute>${bar.bpm}</per-minute></metronome></direction-type><sound tempo="${bar.bpm}"/></direction>` : '';
      const chord = bar.chord && barIndex < score.bars.length ? `<direction><direction-type><words>${escapeXml(bar.chord)}</words></direction-type></direction>` : '';
      const events = voices.map((voice, index) => {
        const voiceNumber = index + 1;
        const rest = (length: number) => `<note><rest/><duration>${duration(length)}</duration><voice>${voiceNumber}</voice>${noteType(length)}</note>`;
        const output: string[] = index ? [`<backup><duration>${duration(bar.beatsPerBar)}</duration></backup>`] : [];
        let cursor = 0;
        for (const event of voice) {
          if (event.start > cursor + 1e-9) output.push(rest(event.start - cursor));
          for (const [tone, segment] of event.segments.entries()) {
            const note = segment.note, pitch = scorePitch(note.midi, bar.chord);
            const drum = note.playback.percussion ?? notatedDrum(part.instrumentId, note.midi), directions = note.playback.musicianNotation;
            const cents = scoreTuningCents(note.midi, note.frequencyHz);
            const alteration = pitch.alter + (Math.abs(cents) > 1e-6 ? cents / 100 : 0);
            const unpitched = part.percussion || note.pitchIdentity === 'unpitched';
            const content = unpitched ? `<unpitched><display-step>${part.percussion ? drum.step : 'C'}</display-step><display-octave>${part.percussion ? drum.octave : 5}</display-octave></unpitched>`
              : `<pitch><step>${pitch.step}</step>${alteration ? `<alter>${decimal(alteration)}</alter>` : ''}<octave>${pitch.octave}</octave></pitch>`;
            const ties = `${segment.tieIn ? '<tie type="stop"/>' : ''}${segment.tieOut ? '<tie type="start"/>' : ''}`;
            const tied = `${segment.tieIn ? '<tied type="stop"/>' : ''}${segment.tieOut ? '<tied type="start"/>' : ''}`;
            const technicalDirections = `${directions?.string ? `<string>${directions.string}</string>` : ''}${directions?.fret !== undefined ? `<fret>${directions.fret}</fret>` : ''}${directions?.fingering ? `<fingering>${escapeXml(directions.fingering)}</fingering>` : ''}${directions?.bowing ? `<${directions.bowing}-bow/>` : ''}${directions?.stroke ? `<other-technical>${directions.stroke} stroke</other-technical>` : ''}`;
            const technique = segment.tieIn ? '' : `<technical><other-technical>${escapeXml(note.technique)}</other-technical>${note.playback.bodyAttack ? `<other-technical>${escapeXml(directions?.bodyTechnique ?? '')} simultaneously</other-technical>` : ''}${technicalDirections}</technical>`;
            const instrument = part.percussion ? `<instrument id="${part.xmlId}-I${note.midi}"/>` : '';
            output.push(`<note dynamics="${decimal(note.velocity * 100 / 90)}">${tone ? '<chord/>' : ''}${content}<duration>${duration(segment.duration)}</duration>${ties}${instrument}<voice>${voiceNumber}</voice>${noteType(segment.duration, directions?.tuplet)}${unpitched ? `<notehead>${part.percussion ? drum.notehead : 'x'}</notehead>` : ''}<notations>${tied}${technique}</notations></note>`);
          }
          cursor = event.end;
        }
        if (cursor < bar.beatsPerBar - 1e-9) output.push(rest(bar.beatsPerBar - cursor));
        return output.join('\n');
      }).join('\n');
      measures.push(`<measure number="${barIndex + 1}">${attributes}${words}${tempo}${chord}\n${events}\n</measure>`);
    }
    return `<part id="${part.xmlId}">\n${measures.join('\n')}\n</part>`;
  }).join('\n');
  return `<?xml version="1.0" encoding="utf-8"?>\n<score-partwise version="4.0"><work><work-title>${escapeXml(score.title)}</work-title></work><identification><encoding><software>MixGenres musician score</software><encoding-description>Concert pitch; exact written durations. Playback timing displacement and gate expression are available in the score JSON.</encoding-description></encoding></identification><part-list>\n${partList}\n</part-list>\n${body}\n</score-partwise>`;
}
