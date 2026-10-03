import { assignStringPositions } from './gp5';
import { musicianScoreFromArrangement } from '../engine/score/musicianScore';
import { exportMusicXml } from '../engine/score/musicXml';
import type { Sheet } from '../engine/sheet/sheet';
import { GESTURE_NAMES } from '../engine/band/gestures';
import { isPercussion, meter, pitch, PPQ, programFor, scoreNotes, selectedTracks, stringTuning, timeline, xml, type ExportContext, type ScoreNote } from './model';
const durations = [
  { ticks: 3840, type: 'whole' }, { ticks: 2880, type: 'half', dot: true }, { ticks: 1920, type: 'half' },
  { ticks: 1440, type: 'quarter', dot: true }, { ticks: 960, type: 'quarter' }, { ticks: 720, type: 'eighth', dot: true },
  { ticks: 640, type: 'quarter', triplet: true }, { ticks: 480, type: 'eighth' }, { ticks: 360, type: '16th', dot: true },
  { ticks: 320, type: 'eighth', triplet: true }, { ticks: 240, type: '16th' }, { ticks: 160, type: '16th', triplet: true },
  { ticks: 120, type: '32nd' }, { ticks: 80, type: '32nd', triplet: true }, { ticks: 40, type: '64th', triplet: true },
];
function split(ticks: number) {
  const out: typeof durations = [];
  while (ticks > 0) { const d = durations.find(d => d.ticks <= ticks); if (!d) throw new Error('Notation duration cannot be represented.'); out.push(d); ticks -= d.ticks; }
  return out;
}
function pitchXml(midi: number) { const p = pitch(midi); return `<pitch><step>${p.step}</step>${p.alter ? '<alter>1</alter>' : ''}<octave>${p.octave}</octave></pitch>`; }
function noteXml(item: ScoreNote | undefined, start: number, ticks: number, voice: number, percussion: boolean, position?: { string: number; fret: number }, tab = false, partId = '') {
  let cursor = start;
  return split(ticks).map(d => {
    const n = item?.note;
    const stop = !!item && cursor > item.start;
    const tie = !!item && cursor + d.ticks < item.end;
    const gesture = n ? GESTURE_NAMES[n.gestureCode] : undefined;
    const drumPositions: Record<number, [string, number]> = { 35: ['F', 4], 36: ['F', 4], 37: ['C', 5], 38: ['C', 5], 40: ['C', 5], 41: ['A', 4], 43: ['B', 4], 45: ['D', 5], 47: ['E', 5], 48: ['F', 5], 50: ['G', 5], 42: ['G', 5], 44: ['D', 4], 46: ['G', 5], 49: ['A', 5], 51: ['F', 5], 53: ['F', 5], 57: ['A', 5] };
    const display = drumPositions[Math.round(n?.midi ?? 38)] ?? ['C', 5];
    const crossHead = !!n && [37, 42, 44, 46, 49, 51, 53, 55, 57, 59].includes(Math.round(n.midi));
    const technical: string[] = [];
    if (n && position) technical.push(`<string>${position.string}</string><fret>${position.fret}</fret>`);
    if (gesture && !['tone', 'sustain'].includes(gesture) && !stop) technical.push(`<other-technical>${xml(gesture)}</other-technical>`);
    const articulations = !stop && gesture && ['accent', 'staccato', 'tenuto', 'marcato'].includes(gesture) ? `<articulations><${gesture === 'marcato' ? 'strong-accent type="up"' : gesture}/></articulations>` : '';
    const body = !n ? '<rest/>' : percussion ? `<unpitched><display-step>${display[0]}</display-step><display-octave>${display[1]}</display-octave></unpitched>` : pitchXml(n.midi);
    const result = `<note>${body}<duration>${d.ticks}</duration>${stop ? '<tie type="stop"/>' : ''}${tie ? '<tie type="start"/>' : ''}${n && percussion ? `<instrument id="${partId}-D${Math.round(n.midi)}"/>` : ''}<voice>${voice}</voice><type>${d.type}</type>${d.dot ? '<dot/>' : ''}${d.triplet ? '<time-modification><actual-notes>3</actual-notes><normal-notes>2</normal-notes></time-modification>' : ''}${tab ? '<stem>none</stem>' : ''}${percussion && n ? `<notehead>${crossHead ? 'x' : 'normal'}</notehead>` : ''}${n ? `<notations>${stop ? '<tied type="stop"/>' : ''}${tie ? '<tied type="start"/>' : ''}${articulations}${technical.length ? `<technical>${technical.join('')}</technical>` : ''}</notations>` : ''}</note>`;
    cursor += d.ticks;
    return result;
  }).join('');
}
/** MusicXML 4 score with independent polyphonic voices, complete rests, ties, and tempo changes. */
export function musicXml(ctx: ExportContext, tablature = false): string {
  const sheet = ctx.song as Sheet;
  if (ctx.performance.scoreVersion === 1 && sheet.measures) {
    const ids = new Set(selectedTracks(ctx).map(track => track.id));
    const score = musicianScoreFromArrangement(sheet,ctx.performance);
    return exportMusicXml({ ...score, parts:score.parts.filter(p => ids.has(p.id)),
      notes:score.notes.filter(n => ids.has(n.trackId)), rests:score.rests.filter(r => ids.has(r.trackId)) },tablature);
  }
  const tracks = selectedTracks(ctx), [beats, beatType] = meter(ctx), bars = timeline(ctx.performance);
  if (!bars.length) throw new Error('No measures to export.');
  const prepared = tracks.map(track => {
    const notes = scoreNotes(ctx, track), tuning = stringTuning(track);
    let tab = tablature && !!tuning;
    let locations: ReturnType<typeof assignStringPositions> | undefined;
    try { if (tab) locations = assignStringPositions(notes, tuning!); }
    catch { tab = false; }
    return { notes, tuning, tab, locations, fallback: tablature && !!tuning && !tab };
  });
  const partList = tracks.map((t, i) => {
    const id = `P${i + 1}`;
    if (isPercussion(t)) {
      const pitches = [...new Set(ctx.performance.notes.filter(n => n.trackId === t.id).map(n => Math.round(n.midi)))];
      return `<score-part id="${id}"><part-name>${xml(t.name)}</part-name>${pitches.map(p => `<score-instrument id="${id}-D${p}"><instrument-name>${xml(t.name)} ${p}</instrument-name></score-instrument>`).join('')}${pitches.map(p => `<midi-instrument id="${id}-D${p}"><midi-channel>10</midi-channel><midi-unpitched>${p + 1}</midi-unpitched></midi-instrument>`).join('')}</score-part>`;
    }
    return `<score-part id="${id}"><part-name>${xml(t.name)}${prepared[i].fallback ? ' (standard notation; TAB unavailable)' : ''}</part-name><score-instrument id="${id}-I1"><instrument-name>${xml(t.name)}</instrument-name></score-instrument><midi-instrument id="${id}-I1"><midi-channel>${i % 9 + 1}</midi-channel><midi-program>${programFor(t) + 1}</midi-program></midi-instrument></score-part>`;
  }).join('');
  const parts = tracks.map((track, ti) => {
    const { notes, tuning, tab, locations } = prepared[ti];
    const voices = notes.reduce((max, note) => Math.max(max, note.voice), 1);
    const percussion = isPercussion(track);
    let previousRegion = '';
    const measures = bars.map((bar, bi) => {
      const length = bar.ticks;
      const clef = percussion ? '<sign>percussion</sign>' : tab ? '<sign>TAB</sign><line>5</line>' : track.role === 'bass' ? '<sign>F</sign><line>4</line>' : '<sign>G</sign><line>2</line>';
      const staff = tab ? `<staff-details><staff-lines>${tuning!.length}</staff-lines>${[...tuning!].reverse().map((m, i) => { const p = pitch(m); return `<staff-tuning line="${i + 1}"><tuning-step>${p.step}</tuning-step>${p.alter ? '<tuning-alter>1</tuning-alter>' : ''}<tuning-octave>${p.octave}</tuning-octave></staff-tuning>`; }).join('')}</staff-details>` : '';
      let content = bi === 0 ? `<attributes><divisions>${PPQ}</divisions><time><beats>${beats}</beats><beat-type>${beatType}</beat-type></time><clef>${clef}</clef>${staff}</attributes>` : '';
      if (bi === 0 || bars[bi - 1].bpm !== bar.bpm) content += `<direction><direction-type><metronome><beat-unit>quarter</beat-unit><per-minute>${bar.bpm}</per-minute></metronome></direction-type><sound tempo="${bar.bpm}"/></direction>`;
      if (bar.regionId !== previousRegion) { content += `<direction><direction-type><rehearsal>${xml(ctx.song.regions.find(r => r.id === bar.regionId)?.name ?? bar.regionId)}</rehearsal></direction-type></direction>`; previousRegion = bar.regionId; }
      for (let voice = 1; voice <= voices; voice++) {
        if (voice > 1) content += `<backup><duration>${length}</duration></backup>`;
        let cursor = bar.tick;
        for (const item of notes.filter(n => n.voice === voice && n.start < bar.tick + length && n.end > bar.tick)) {
          const start = Math.max(bar.tick, item.start), end = Math.min(bar.tick + length, item.end);
          if (start > cursor) content += noteXml(undefined, cursor, start - cursor, voice, percussion);
          content += noteXml(item, start, end - start, voice, percussion, locations?.get(item), tab, `P${ti + 1}`);
          cursor = end;
        }
        if (cursor < bar.tick + length) content += noteXml(undefined, cursor, bar.tick + length - cursor, voice, percussion);
      }
      return `<measure number="${bi + 1}">${content}</measure>`;
    }).join('');
    return `<part id="P${ti + 1}">${measures}</part>`;
  }).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">\n<score-partwise version="4.0"><work><work-title>${xml(ctx.song.title)}</work-title></work><identification><encoding><software>MixGenres</software><encoding-description>Quantized notation; exact timing and gestures are available in MIDI and performance JSON. Tablature uses suggested standard-tuning positions.</encoding-description></encoding></identification><part-list>${partList}</part-list>${parts}</score-partwise>`;
}
