import type { Performance, PerfCC, PerfNote } from '../band/performanceData';
import type { Mp3RenderOptions, RenderedPerformanceAudio } from './mp3Export';
import { preparedAudioKey } from '../cache/preparedAudio';
import { planPlaybackChunks } from './playbackChunks';

const sampleRate = 44100;
export interface DSPSection { sectionId: string; startSample: number; key: string; performance: Performance }

/** Partition by attack ownership, never by cutting a waveform or re-attacking
 * an incoming sustain. Each section renders its complete holds and release
 * tails; overlapping tails are summed when assembling the part. */
export function planDSPSectionsWithTail(performance: Performance, options: Mp3RenderOptions, tail: (note: PerfNote) => number): DSPSection[] {
  const ids = options.selectedTrackIds ?? [...options.trackInstruments.keys()];
  if (ids.length !== 1 || !performance.bars.length) return [];
  const trackId = ids[0];
  const trackNotes = performance.notes.filter(n => n.trackId === trackId);
  const allCCs = performance.ccs.filter(c => c.trackId === trackId).slice().sort((a,b) => a.time-b.time);
  return planPlaybackChunks(performance).flatMap(chunk => {
    const bars = performance.bars.filter(b => b.index >= chunk.startBar && b.index <= chunk.endBar);
    if (!bars.length) return [];
    const firstBar = bars[0].index;
    const source = trackNotes.filter(n => n.bar >= chunk.startBar && n.bar <= chunk.endBar);
    if (!source.length) return [];
    const startSample = Math.max(0, Math.floor(Math.min(bars[0].start, ...source.map(n => n.time)) * sampleRate));
    const start = startSample / sampleRate;
    const end = Math.max(bars.at(-1)!.end, ...source.map(n => n.time+n.dur+tail(n)));
    if (options.renderWindow && (end <= options.renderWindow.start || start >= options.renderWindow.end)) return [];
    // Carry exact controller state into the section and retain later changes
    // for as long as its owned notes ring, even in the following section.
    const initial = new Map<number, PerfCC>();
    for (const cc of allCCs) if (cc.time <= start) initial.set(cc.cc, { ...cc, time: 0 });
    const ccs = [...initial.values(), ...allCCs.filter(c => c.time > start && c.time < end).map(c => ({ ...c, time: c.time-start }))];
    const notes = source.map(note => ({ ...note, time: note.time-start, bar: note.bar-firstBar,
      ...(note.notation ? { notation: { ...note.notation, bar: note.bar-firstBar } } : {}) }));
    // Workers consume physical events only. Copying the complete song's
    // interpretation trace, transitions and inspector data into every section
    // repeatedly structured-clones unrelated players and bars on the UI thread.
    const part: Performance = { notes, ccs, blends: {}, worldId: performance.worldId, scoreVersion: performance.scoreVersion,
      bars: bars.map(b => ({ ...b,index:b.index-firstBar,start:b.start-start,end:b.end-start })),
      duration: end-start, tail: 0, trackInfo: performance.trackInfo?.[trackId] ? { [trackId]:performance.trackInfo[trackId] } : undefined };
    const key = preparedAudioKey(part, { ...options, renderWindow: undefined });
    return [{ sectionId: chunk.id, startSample, performance: part, key }];
  });
}

export function assembleDSPSections(performance: Performance, sections: DSPSection[], audio: RenderedPerformanceAudio[]): RenderedPerformanceAudio {
  if (audio.some(a => a.sampleRate !== sampleRate)) throw new Error('Section sample rates do not match.');
  const frames = Math.max(Math.ceil(Math.max(1,performance.duration+performance.tail)*sampleRate),
    ...sections.map((s,i) => s.startSample+audio[i].left.length));
  const left = new Float32Array(frames), right = new Float32Array(frames);
  sections.forEach((section,index) => {
    const part = audio[index];
    for (let i=0;i<part.left.length;i++) { left[section.startSample+i]+=part.left[i]; right[section.startSample+i]+=part.right[i]; }
  });
  return {sampleRate,left,right};
}
